import { defineConfig } from "astro/config";

export default defineConfig({
  server: {
    allowedHosts: ["overdrive-rebuilt-cobweb.ngrok-free.dev"],
  },
});
