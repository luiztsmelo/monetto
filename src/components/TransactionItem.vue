<script setup lang="ts">
import dayjs from 'dayjs'
import type { PropType } from 'vue'
import type { Transaction } from '@/types/transaction'

const props = defineProps({
  transaction: {
    type: Object as PropType<Transaction>,
    required: true
  }
})

const icon = (category: string) => {
  switch (category) {
    case 'food':
      return 'restaurant_menu'
    case 'transport':
      return 'directions_car'
    case 'pet':
      return 'pets'
    case 'home':
      return 'cottage'
    case 'salary':
      return 'work'
    default:
      return ''
  }
}

const categoryText = (category: string) => {
  switch (category) {
    case 'food':
      return 'Alimentação'
    case 'transport':
      return 'Transporte'
    case 'pet':
      return 'Pet'
    case 'home':
      return 'Moradia'
    case 'salary':
      return 'Salário'
    default:
      return ''
  }
}
</script>

<template>
  <div class="grid grid-cols-[auto_1fr_auto] items-center gap-3">
    <div class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 z-10 overflow-hidden">
      <span class="material-icons-round !text-xl" z-1>{{ icon(props.transaction.category) }}</span>
    </div>

    <div>
      <p class="font-medium text-md">{{ props.transaction.description }}</p>
      <p class="text-sm text-gray-500">{{ categoryText(props.transaction.category) }}</p>
    </div>

    <div class="flex flex-col items-end">
      <p :class="`font-medium text-md ${props.transaction.type === 'income' ? 'text-blue-700' : 'text-red-700'}`">
        {{ props.transaction.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) }}
      </p>
      <p class="text-sm text-gray-500">{{ dayjs(props.transaction.created_at).format('D MMM[.] HH:mm') }}</p>
    </div>
  </div>
</template>
