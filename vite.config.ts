import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'production' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: '/ken-ck-yu.github.io/'
}));

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react-swc';

// export default defineConfig({
//   plugins: [react()],
//   base: '/ken-ck-yu.github.io/', // <-- set to your repo name!
// });
