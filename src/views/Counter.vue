


<template>
  <div>
    <div class="counter__wrap">
    <h1 class="counter__number">{{ counter }}</h1>
    <div class="counter__edit">
      <input class="counter__input" type="number" v-model="value" />
    <button  class="counter__button" @click="setValue">Set Value</button>
    </div>
    <div class="counter__btn">
      <button class="button__count" @click="increment">Increase</button>
      <button class="button__count"  @click="reset">Reset</button>
    <button class="button__count"  @click="decrement">Decrease</button>
    </div>
    <p class="counter__features">
      Created with Vue.js, Vuex and Vue Router.
    </p>
    </div>
  </div>
</template>

  
  
  <script>

export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
    },
    decrement() {
      this.$store.commit("decrement");
    },
    reset() {
      this.$store.commit("reset");
    },
    
    setValue() {
      this.$store.commit("setValue", this.value);
    },
  },
}

</script>

<style>

.counter__wrap{
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1532604146921-0e8bd9ab0891?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80');
    height: 100vh;
    background-position: center;
    background-size: cover;
    /* padding: 0.5rem calc((100vw - 1200px) / 2); */
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.counter__number{
  font-size: 100px;
  color: rgba(0, 0, 0, 0.908);
  text-align: center;
}
.counter__edit{
  margin-top: 20px;
  padding: 1rem;
}
.counter__input{
  padding: 10px;
  border: none;
  border-radius: 4px;
  outline: none;
  margin-right: 10px;
}
.counter__button{
  padding: 1rem 2rem; 
    border: none;
    background: var(--red);
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    border-radius: 4px;
}
.counter__button:hover{
  background: var(--blue);
}
.button__count{
  padding: 1rem 2rem; 
    border: none;
    background: var(--red);
    color: var(--white);
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    transition: 0.3s ease-in-out;
    text-decoration: none;
    border-radius: 4px;
    margin: 10px;
}
.button__count:hover{
  background: var(--blue);
}
.counter__features{
  margin-top: 20px;
  color: #000;
  text-align: center;
}
</style>
 