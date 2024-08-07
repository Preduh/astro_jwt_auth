import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel"

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react(), tailwind()],
  image: {
    domains: ["dummyjson.com"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  adapter: vercel(),
})
