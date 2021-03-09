# Vue SSR Template

Inspired by [vitesse-ssr-template](https://github.com/frandiox/vitesse-ssr-template)
and [Vite Example](https://github.com/vitejs/vite/tree/main/packages/playground/ssr-vue) 

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/)
- 📦 [Components auto importing](./src/components)
- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)
- 🖨 [Server-side rendering (SSR)](https://vitejs.dev/guide/ssr.html) in Node.js
  based on [Vite Example](https://github.com/vitejs/vite/tree/main/packages/playground/ssr-vue)
- 🦾 TypeScript, of course

## Pre-packed

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
- [`vite-plugin-components`](https://github.com/antfu/vite-plugin-components) - components auto import
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs
- [`@vueuse/head`](https://github.com/vueuse/head) - manipulate document head reactively

### Coding Style

- Use Composition API
- [ESLint](https://eslint.org/). Single quotes, no semi.

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm mobile:dev # SSR development
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated files in `dist`
