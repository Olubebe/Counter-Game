
<template>
  <div>
<Header/>
  </div>
  <router-view />
</template>

 
<script>
import Header from "../src/views/Header.vue"
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


