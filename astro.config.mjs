import { defineConfig } from "astro/config";

import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    icon({
      include: {
        bi: ["*"], // (Default) Loads entire Bootstrap Icon set
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {enabled: false}
});