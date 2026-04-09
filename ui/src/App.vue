<template>
  <div class="p-6 flex flex-col items-center">
    <h1 class="text-3xl font-bold underline text-center mb-6">
      Hello FiveM Vue Template!
    </h1>

    <!-- Notification container -->
    <div class="w-full max-w-md flex flex-col gap-3">
      <div 
        v-for="msg in messages" 
        :key="msg.id" 
        class="p-4 rounded shadow bg-zinc-900 text-white flex items-center gap-3"
      >
        <img :src="msg.icon" alt="icon" class="w-8 h-8 rounded-full flex-shrink-0"/>
        <div>
          <div class="font-semibold">{{ msg.type.toUpperCase() }}</div>
          <div class="text-zinc-300 text-sm">{{ msg.text }}</div>
        </div>
        
      </div>
      <test :enabled/>
    </div>
  </div>
</template>

<script setup lang="ts">
import test from './components/test.vue'
import { ref } from 'vue'

declare const $: any // jQuery

const enabled = ref(false)

interface Message {
  id: number
  text: string
  type: 'success' | 'error' | 'info' | 'warning'
  icon: string
}

const messages = ref<Message[]>([])
let nextId = 1

const icons = {
  success: '/svgs/success.svg',
  error: '/svgs/error.svg',
  warning: '/svgs/warning.svg',
  info: '/svgs/info.svg'
}

// Function to add a new message
function addMessage(text: string, type: Message['type'], iconPath?: string) {
  const message: Message = {
    id: nextId++,
    text,
    type,
    icon: iconPath || icons[type] || icons.info
  }

  messages.value.push(message)
  enabled.value = true
  // Auto-remove after 5 seconds
  setTimeout(() => {
    messages.value = messages.value.filter(m => m.id !== message.id)
    enabled.value = false
  }, 5000)
}

// jQuery ready + listen for FiveM NUI messages
$(document).ready(() => {
  console.log('jQuery is ready!')

  window.addEventListener('message', (event: MessageEvent) => {
    const { colorsent, textsent, icon } = event.data
    if (colorsent && textsent) {
      addMessage(textsent, colorsent, icon)
    }
  })
})

// Debug mode messages
const DEBUG_MODE = true
if (DEBUG_MODE) {
  addMessage('This is an info debug message.', 'info')
  addMessage('This is an error debug message.', 'error')
  addMessage('This is a success debug message.', 'success')
  addMessage('This is a warning debug message.', 'warning')
}
</script>

<style scoped>
body {
  font-family: 'Inter', sans-serif;
}
</style>