import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  function fetch() {
    count.value++
  }

  return { count, doubleCount, increment }
})
