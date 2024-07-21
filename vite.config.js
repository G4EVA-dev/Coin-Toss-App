import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        gameView: resolve(__dirname, 'views', 'gameView', 'game.html'),
        gameForm: resolve(__dirname, 'views', 'gameFormView', 'gameForm.html'),
        result: resolve(__dirname, 'views', 'resultView', 'result.html')
      },
      output: {
        // Use relative paths to keep CSS and JS in the assets folder
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});