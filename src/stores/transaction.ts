import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Transaction } from '@/types/transaction'

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = reactive([
    {
      id: '18n23f091823',
      description: 'Pizza',
      category: 'food',
      amount: 49.9,
      createdAt: new Date(),
      type: 'expense'
    },
    {
      id: 'n4f19028f41n8',
      description: 'Uber',
      category: 'transport',
      amount: 11.78,
      createdAt: new Date(),
      type: 'expense'
    },
    {
      id: 'f182491821',
      description: 'Banho',
      category: 'pet',
      amount: 41.9,
      createdAt: new Date(),
      type: 'expense'
    },
    {
      id: 'd123421f1g5',
      description: 'Aluguel',
      category: 'home',
      amount: 2559,
      createdAt: new Date(),
      type: 'expense'
    },
    {
      id: 'd123421f1g5',
      description: 'Harmo',
      category: 'salary',
      amount: 10150,
      createdAt: new Date(),
      type: 'income'
    }
  ]) as Transaction[]

  const incomes = computed(() => {
    return transactions.filter(transaction => transaction.type === 'income')
  })

  const expenses = computed(() => {
    return transactions.filter(transaction => transaction.type === 'expense')
  })

  return { transactions, incomes, expenses }
})
