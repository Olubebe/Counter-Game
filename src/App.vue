
<template>
  <div>
    <nav class="navbar" >
          <h2  class="navbar_logo" >Counter App</h2>
          <div  class="navbar_toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
          </div>
          <div class="navbar_menu">
              <router-link class="navbar_link" to="/" >Home</router-link>
              <router-link class="navbar_link" to="/counter">Counter</router-link>
              <a class="navbar_link" to="https://github.com/Olubebe/" >Github</a>
          </div>
      </nav>
  </div>
  <router-view />
</template>

 
<script>
export default {
  name: 'App',
}
</script>


<style scoped>
.navbar{
      background: var(--black);
      color: #fff;
      height: 60px;
      padding: 0.5rem calc((100vw - 1200px) / 2);
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
  }
  .navbar_logo {
      color: var(--white);
      text-decoration: none;
      padding-left: 1rem;
      font-size: 1.5rem;
  }
  .navbar_link {
      color: var(--white);
      text-decoration: none;
      padding: 1rem 1rem;
  
  }
  .navbar_link:hover {
  color: var(--red);
  border-bottom: 2px solid var(--red);
  }
 
</style>
