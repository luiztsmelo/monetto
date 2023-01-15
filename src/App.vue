<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <main>
    <RouterView />

    <NavigationBar></NavigationBar>
  </main>
</template>
