<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const balanceFormatted = (balance: number) => {
  return balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
</script>

<template>
  <p class="text-sm font-medium text-gray-400 uppercase">Saldo</p>

  <p class="text-4xl text-white">
    {{ balanceFormatted(userStore.user.balance) }}
  </p>
</template>
