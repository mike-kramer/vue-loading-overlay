import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      plugins: [vue()],
      root: 'examples', // Указываем корень проекта для отладки
      server: {
        port: 3000, // Указываем порт для разработки
      },
    };
  }
  return {
    plugins: [vue()],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.js'),
        name: 'Vue Loading Overlay ESM',
        fileName: (format) => `loading-overlay.${format}.js`,
      },

      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          exports: "named"
        }
      }
    }
  }
});

