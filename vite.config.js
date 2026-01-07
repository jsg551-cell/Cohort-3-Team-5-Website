import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import pattern from "./assets/pattern.jpg";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Cohort-3-Team-5-Website/",
});
