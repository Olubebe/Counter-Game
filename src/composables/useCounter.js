// create a composable counter

import { ref } from "vue";

export default function useCounter() {
  const counter = ref(0);

  function increment() {
    counter.value++;
  }

  function decrement() {
    counter.value--;
  }

  function reset() {
    counter.value = 0;
  }

  function setValue(value) {
    counter.value = value;
  }

  return {
    counter,
    increment,
    decrement,
    reset,
    setValue,
  };
}
