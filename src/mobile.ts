import { createApp } from '~/lib/entrypoints/main'
import MobileApp from '~/components/apps/MobileApp.vue'

const { app, router } = createApp(MobileApp)

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})
