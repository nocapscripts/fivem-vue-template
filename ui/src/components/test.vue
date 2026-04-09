<script lang="ts" setup>
    const props = defineProps({
        enabled: Boolean,

    })
    const emit = defineEmits(['update:enabled'])
</script>

<template>
  <!-- Button container -->
  <div v-if="props.enabled" class="btns flex flex-wrap gap-4 justify-center mt-6">
    <button class="btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
      Primary
    </button>

    <button class="btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
      Success
    </button>

    <button class="btn bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
      Warning
    </button>

    <button class="btn bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
      Error
    </button>

    <button class="btn bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition-all duration-200 transform hover:scale-105">
      Info
    </button>
  </div>
</template>

<style scoped>
.btns button {
  cursor: pointer;
}
</style>