<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const balanceFormatted = (balance: number) => {
  return balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
</script>

<template>
  <p class="text-xs font-medium text-neutral-400 uppercase tracking-widest">Saldo</p>

  <p class="text-4xl text-white">
    {{ balanceFormatted(userStore.user.balance) }}
  </p>
</template>
