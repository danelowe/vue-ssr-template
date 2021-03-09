import { createApp } from '~/lib/entrypoints/main'
import DesktopApp from '~/components/apps/DesktopApp.vue'

const { app, router } = createApp(DesktopApp)

// wait until router is ready before mounting to ensure hydration match
router.isReady().then(() => {
  app.mount('#app')
})
