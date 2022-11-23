export const LOCALHOST_GEO_DATA = {
  city: "San Francisco",
  region: "CA",
  country: "US",
  latitude: "37.7695",
  longitude: "-122.385",
};

export const INTERVALS = ["1h", "24h", "7d", "30d"];

export const FRAMER_MOTION_LIST_ITEM_VARIANTS = {
  hidden: { scale: 0.8, opacity: 0 },
  show: { scale: 1, opacity: 1, transition: { type: "spring" } },
};

export const SWIPE_REVEAL_ANIMATION_SETTINGS = {
  initial: { height: 0 },
  animate: { height: "auto" },
  exit: { height: 0 },
  transition: { duration: 0.2, bounce: 0 },
};

export const FADE_IN_ANIMATION_SETTINGS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.2 },
};

export const HOME_HOSTNAMES = new Set([
  // comment for better diffs
  "duh.fan",
  "preview.duh.fan",
  "localhost:3000",
  "c623-2600-1700-b5e4-b50-d083-66f5-64b2-e8bb.ngrok.io",
]);

export const RESERVED_KEYS = new Set([
  "api",
  "va",
  "static",
  "stats",
  "proxy",
  "auth",
  "pricing",
  "about",
  "placeholder",
  "blog",
  "careers",
  "features",
  "contact",
  "terms",
  "privacy",
  "admin",
  "help",
  "new",
  "info",
  "demo",
]);
export const DEFAULT_REDIRECTS = {
  home: "https://duh.fan",
  signin: "https://app.duh.fan/login",
  login: "https://app.duh.fan/login",
  register: "https://app.duh.fan/register",
  signup: "https://app.duh.fan/register",
  app: "https://app.duh.fan",
  dashboard: "https://app.duh.fan",
  links: "https://app.duh.fan/links",
  settings: "https://app.duh.fan/settings",
  welcome: "https://app.duh.fan/welcome",
};

export const FREE_PLAN_PROJECT_LIMIT = 5;
export const FAVICON_FOLDER = "/_static/favicons";
export { default as COUNTRIES } from "./countries";
export { default as ccTLDs } from "./cctlds";

export const SECOND_LEVEL_DOMAINS = new Set([
  "com",
  "co",
  "net",
  "org",
  "edu",
  "gov",
  "in",
]);

export const SPECIAL_APEX_DOMAINS = {
  "youtu.be": "youtube.com",
};
