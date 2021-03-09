import path from "path";
import {defineConfig} from "vite";

import Vue from '@vitejs/plugin-vue'
import ViteComponents from 'vite-plugin-components'
import { VitePWA } from 'vite-plugin-pwa'
import {buildParams} from "./src/lib/helpers";


const { device, platform } = buildParams()

export default defineConfig({
  build: platform === 'server' ? {
    outDir: `dist/${device}/server`,
    ssr: `src/lib/entrypoints/server-${device}.ts`
  } : {
    rollupOptions: {
      input: {main: path.resolve(__dirname, `${device}.html`)}
    },
    outDir: `dist/${device}/client`,
    // assetsDir: `assets/${device}`,
    ssrManifest: true,
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '~pages': `${path.resolve(__dirname, 'src')}/pages/${device}/`,
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      dirs: [`src/components/${device}`, 'src/components/shared'],
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      manifest: {
        name: 'Trade Tested',
        short_name: 'Trade Tested',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ]
})
