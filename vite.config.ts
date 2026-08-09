import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import TypedCssModules from 'unplugin-typed-css-modules/vite';

export default defineConfig({
  plugins: [react(), TypedCssModules({})],
});
