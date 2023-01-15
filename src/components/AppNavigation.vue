<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const links = [
  {
    route: '/',
    icon: 'home'
  },
  {
    route: '/accounts',
    icon: 'account_balance_wallet'
  },
  {
    route: '/reports',
    icon: 'pie_chart'
  }
]
</script>

<template>
  <div
    class="fixed left-0 bottom-0 w-full h-[52px] bg-white flex items-center justify-around border-t-[1px] border-solid border-gray-100"
  >
    <RouterLink v-for="link in links" :key="link.route" :to="link.route">
      <span
        class="material-icons-round !text-3xl transition duration-300 ease"
        :class="route.path === link.route ? 'text-black' : 'text-neutral-400'"
        >{{ link.icon }}</span
      >
    </RouterLink>
  </div>
</template>
