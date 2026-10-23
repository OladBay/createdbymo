import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://kreatedbymo.com",
  devToolbar: {
    enabled: false,
  },
  server: {
    allowedHosts: ["overdrive-rebuilt-cobweb.ngrok-free.dev"],
    hmr: {
      clientPort: 443,
      protocol: "wss",
    },
  },
});
