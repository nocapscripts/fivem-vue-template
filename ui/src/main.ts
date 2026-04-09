import { createApp } from 'vue'
import App from './App.vue'
import '../public/index.css'


import $ from 'jquery'


declare global {
  interface Window {
    $: typeof $;
    jQuery: typeof $;
  }
}


window.$ = $;
window.jQuery = $;

// Create and mount Vue app
createApp(App).mount('#template')