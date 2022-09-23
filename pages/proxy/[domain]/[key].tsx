export const config = { runtime: "experimental-edge" };
import { redis } from "@/lib/upstash";
import { LinkProps } from "@/lib/types";
import Head from "next/head";
import { escape } from "html-escaper";

export default function LinkPage({ url, title, description, image }) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{escape(title)}</title>
      <meta name="description" content={escape(description)} />
      <meta property="og:title" content={escape(title)} />
      <meta property="og:description" content={escape(description)} />
      <meta property="og:image" content={escape(image)} />
      <meta property="og:url" content={escape(url)} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={escape(url)} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={escape(title)} />
      <meta name="twitter:description" content={escape(description)} />
      <meta name="twitter:image" content={escape(image)} />
    </Head>
  );
}

export async function getServerSideProps(ctx) {
  const { domain, key } = ctx.params;
  const response = await redis.hget<Omit<LinkProps, "key">>(
    `${domain}:links`,
    key
  );
  const { url, title, description, image } = response || {};
  if (!url || !title || !description || !image) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      url,
      title,
      description,
      image,
    },
  };
}