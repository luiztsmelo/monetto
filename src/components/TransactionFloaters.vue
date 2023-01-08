<script setup lang="ts"></script>

<template>
  <div class="fixed left-6 right-6 bottom-6 flex items-center justify-center gap-12">
    <button
      class="flex items-center justify-center bg-white p-4 h-16 w-16 rounded-full active:scale-[0.97] transition duration-[200] ease-[cubic-bezier(.4,0,.2,1)] drop-shadow-md shadow-xl"
    >
      <span class="material-icons-round !text-4xl text-blue-700">add</span>
    </button>
    <button
      class="flex items-center justify-center bg-white p-4 h-16 w-16 rounded-full active:scale-[0.97] transition duration-[200] ease-[cubic-bezier(.4,0,.2,1)] drop-shadow-md shadow-xl"
    >
      <span class="material-icons-round !text-4xl text-red-700">remove</span>
    </button>
  </div>
</template>
