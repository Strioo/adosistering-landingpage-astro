import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://adosistering.id",
  output: "static",

  // ── Performance ──────────────────────────────────────────
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "viewport",
  },

  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  image: {
    domains: [],
  },
  vite: {
    build: {
      cssMinify: "lightningcss",
      rollupOptions: {
        output: {
          assetFileNames: "_astro/[name].[hash][extname]",
        },
      },
    },
  },
});
