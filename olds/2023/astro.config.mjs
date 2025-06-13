import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import { URL_SITE } from "./src/consts";

export default defineConfig({
  integrations: [mdx(), sitemap(), tailwind()],
  site: URL_SITE,
  // redirects: {
  //   "/": HOME_PAGE,
  // },
});
