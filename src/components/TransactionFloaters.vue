<script setup lang="ts"></script>

<template>
  <div class="fixed left-6 right-6 bottom-6 flex items-center justify-center gap-12">
    <button
      class="flex items-center justify-center bg-black p-4 h-16 w-16 rounded-full active:scale-[0.93] transition duration-[250] ease-[cubic-bezier(.4,0,.2,1)] drop-shadow-md shadow-xl"
    >
      <span class="material-icons-round !text-4xl text-white">add</span>
    </button>
    <button
      class="flex items-center justify-center bg-black p-4 h-16 w-16 rounded-full active:scale-[0.93] transition duration-[1000] ease drop-shadow-xl shadow-5xl"
    >
      <span class="material-icons-round !text-4xl text-white">remove</span>
    </button>
  </div>
</template>
