import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/plugins/supabase'
import type { Transaction } from '@/types/transaction'

export const useTransactionStore = defineStore('transaction', () => {
  const transactions = ref<Transaction[]>([])

  /* const transactions = reactive([
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
  ]) as Transaction[] */

  const incomes = computed(() => {
    return transactions.value.filter((transaction) => transaction.type === 'income')
  })

  const expenses = computed(() => {
    return transactions.value.filter((transaction) => transaction.type === 'expense')
  })

  async function fetchTransactions() {
    try {
      const { data, error } = await supabase.from('transactions').select('*')

      if (error) {
        console.log('error', error)
        return
      }

      if (data === null) {
        transactions.value = []
        return
      }

      transactions.value = data

      console.log(data)

      console.log('got transactions!', transactions.value)
    } catch (err) {
      console.error('Error retrieving data from db', err)
    }
  }

  async function addTransaction(transaction: Transaction): Promise<null | Transaction> {
    try {
      const { data, error } = await supabase.from('todos').insert(transaction).single()

      if (error) {
        alert(error.message)
        console.error('There was an error inserting', error)
        return null
      }

      console.log('created a new todo')
      return data as unknown as Transaction
    } catch (err) {
      alert('Error')
      console.error('Unknown problem inserting to db', err)
      return null
    }
  }

  return {
    transactions,
    incomes,
    expenses,
    fetchTransactions,
    addTransaction
  }
})
