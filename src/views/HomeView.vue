<script setup lang="ts">
import UserBalance from '@/components/UserBalance.vue'
import LastWeekExpensesChart from '@/components/LastWeekExpensesChart.vue'
import TransactionItem from '@/components/TransactionItem.vue'
import TransactionFloaters from '@/components/TransactionFloaters.vue'
import { useTransactionStore } from '@/stores/transaction'

const transactionStore = useTransactionStore()

transactionStore.fetchTransactions()
</script>

<template>
  <div class="mb-32">
    <header class="flex flex-col items-center justify-center bg-black px-3 pt-3">
      <div class="flex items-center justify-center mb-3">
        <p class="text-2xl text-white">Janeiro</p>
      </div>

      <UserBalance></UserBalance>

      <LastWeekExpensesChart></LastWeekExpensesChart>
    </header>

    <div class="p-4">
      <div>
        <p class="text-2xl font-semibold mb-4">Despesas</p>

        <div class="flex flex-col gap-4 relative">
          <TransactionItem
            v-for="transaction in transactionStore.expenses"
            :key="transaction.id"
            :transaction="transaction"
          ></TransactionItem>

          <div class="absolute top-[19px] w-[1px] translate-x-[19px] h-[85%] bg-gray-400"></div>
        </div>
      </div>
    </div>

    <div class="p-4">
      <div>
        <p class="text-2xl font-semibold mb-4">Receitas</p>

        <div class="flex flex-col gap-4">
          <TransactionItem
            v-for="transaction in transactionStore.incomes"
            :key="transaction.id"
            :transaction="transaction"
          ></TransactionItem>
        </div>
      </div>
    </div>

    <TransactionFloaters></TransactionFloaters>
  </div>
</template>
