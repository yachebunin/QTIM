import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  pages: true,
  css: [
    '@/assets/styles/reset.scss',
  ],
  build: {
    transpile: ['@nuxt/typescript-runtime']
  },
  modules: [],
  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'article-id',
        path: '/article/:id',
        component: resolve(__dirname, 'pages/article/[id].vue')
      });
    }
  }
});
