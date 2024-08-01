import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: 'https://alexzxu.github.io/',
  integrations: [react()],
  output: "server",
  adapter: vercel(),
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
});