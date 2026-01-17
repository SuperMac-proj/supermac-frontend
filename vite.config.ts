import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: false,
      },
    },
  },
});
