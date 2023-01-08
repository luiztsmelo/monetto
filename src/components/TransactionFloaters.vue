<script setup lang="ts">
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/solid'
</script>

<template>
  <div class="fixed left-6 right-6 bottom-6 flex items-center justify-center gap-12">
    <button
      class="flex items-center justify-center bg-black p-4 h-16 w-16 rounded-full active:scale-[0.97] transition duration-[200] ease-[cubic-bezier(.4,0,.2,1)] drop-shadow-md shadow-xl"
    >
      <PlusIcon class="text-white"></PlusIcon>
    </button>
    <button
      class="flex items-center justify-center bg-black p-4 h-16 w-16 rounded-full active:scale-[0.97] transition duration-[200] ease-[cubic-bezier(.4,0,.2,1)] drop-shadow-md shadow-xl"
    >
      <MinusIcon class="text-white"></MinusIcon>
    </button>
  </div>
</template>
