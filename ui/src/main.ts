import { createApp } from 'vue'
import App from '@/App.vue'

import { router } from '@/router/router'
import '@/assets/index.css'

import $ from 'jquery'

/**
 * =========================
 * GLOBAL JQUERY (FiveM UI use)
 * =========================
 */
declare global {
  interface Window {
    $: typeof $
    jQuery: typeof $
  }
}

window.$ = $
window.jQuery = $

/**
 * =========================
 * CREATE APP
 * =========================
 */
const app = createApp(App)

/**
 * =========================
 * PLUGINS
 * =========================
 */
app.use(router)

/**
 * =========================
 * MOUNT
 * =========================
 */
app.mount('#template')