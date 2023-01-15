<script setup lang="ts">
import { ref } from 'vue'
import { Money3Component as InputMoney } from 'v-money3'
import { useTransactionStore } from '@/stores/transaction'
import dayjs from 'dayjs'

const transactionStore = useTransactionStore()

const modal = ref(false)
const amount = ref(0)
const config = {
  masked: false,
  prefix: 'R$',
  suffix: '',
  thousands: '.',
  decimal: ',',
  precision: 2,
  disableNegative: false,
  disabled: false,
  min: 0,
  max: undefined,
  allowBlank: false,
  minimumNumberOfCharacters: 0
}

async function save() {
  /* await transactionStore.addTransaction({
    id: '',
    created_at: dayjs().format(),
    description: 'Porpino',
    category: 'food',
    type: 'expense',
    amount: 53.67
  }) */

  modal.value = false
}
</script>

<template>
  <button
    class="fixed right-4 bottom-[64px] flex items-center justify-center bg-black p-4 h-16 w-16 rounded-full active:scale-[0.93] transition duration-[250] ease-[cubic-bezier(.4,0,.2,1)] drop-shadow-md shadow-xl"
    @click="modal = true"
  >
    <span class="material-icons-round !text-4xl text-white">add</span>
  </button>

  <Transition name="fade">
    <div class="fixed left-0 right-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.5)] z-40" v-if="modal"></div>
  </Transition>

  <Transition name="slide-y">
    <div
      class="fixed left-0 right-0 bottom-0 flex flex-col items-center justify-between w-full min-h-[50%] rounded-4xl bg-white p-6 z-50"
      v-if="modal"
    >
      <span class="text-lg font-medium">Nova despesa</span>
      <InputMoney v-model="amount" v-bind="config" class="w-full rounded-lg p-3 bg-gray-100 text-2xl">{{
        amount
      }}</InputMoney>

      <input type="text" placeholder="Descrição" class="w-full rounded-lg p-3 bg-gray-100 md" />

      <button class="bg-black text-white py-3 px-6 rounded-xl w-full" @click="save">Salvar despesa</button>
    </div>
  </Transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-y-enter-active {
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);
}

.slide-y-leave-active {
  transition: all 0.3s cubic-bezier(0.5, 0, 0.75, 0);
}

.slide-y-enter-from,
.slide-y-leave-to {
  transform: translateY(100%);
}
</style>
