import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/E-commerce-BD-",
  plugins: [react()],
  resolve: {
    alias: {
      "@pwd": ".",
      '@components': '/src/components',
      "@atoms": '/src/components/atoms/',
      "@molecules": '/src/components/molecules/',
      "@organisms": '/src/components/organisms/',
      '@pages':'/src/pages',
      '@services': '/src/services/',
      '@utils':'/src/utils',
    },
  }
})
