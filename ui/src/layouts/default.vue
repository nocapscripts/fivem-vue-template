<script lang="ts" setup>

</script>

<template>
  <!-- BACKDROP -->
  <div class="h-screen w-screen bg-black flex items-center justify-center">

    <!-- SMALL TABLET FRAME -->
    <div class="w-[900px] h-[580px] bg-[#0b0f1a] text-white rounded-xl shadow-2xl border border-white/10 flex flex-col overflow-hidden">

      <!-- TOP BAR -->
      <Navbar
       
      />

      <!-- PAGE CONTENT -->
      <main class="flex-1 overflow-hidden">
        <slot
          
        />
      </main>

      <!-- FOOTER -->
      <Footer />

    </div>
  </div>
</template>

<style lang="postcss" scoped>
    
</style>
