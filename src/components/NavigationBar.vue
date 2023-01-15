<script setup lang="ts">
const links = [
  {
    href: '/',
    icon: 'home'
  },
  {
    href: '/accounts',
    icon: 'account_balance_wallet'
  },
  {
    href: '/reports',
    icon: 'pie_chart'
  }
]
</script>

<template>
  <div
    class="fixed left-0 bottom-0 w-full h-[50px] bg-white flex items-center justify-around border-t-[1px] border-solid border-gray-100"
  >
    <a v-for="link in links" :key="link.icon" :href="link.href">
      <span class="material-icons-round !text-3xl" z-1>{{ link.icon }}</span>
    </a>
  </div>
</template>

<style></style>
