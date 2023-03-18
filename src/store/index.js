import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    //  setValue to edit counter
    setValue(state, value) {
      state.counter = value;
    },
  },
  actions: {
    increment(context) {
      context.commit("increment");
    },
    decrement(context) {
      context.commit("decrement");
    },
    reset(context) {
      context.commit("reset");
    },
    setValue(context) {
      context.commit("setValue");
    },
  },
});

export default store;
