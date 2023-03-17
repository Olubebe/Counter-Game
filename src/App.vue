
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
  @media screen and (max-width:768px) {
      body.active{
          overflow-y: hidden;
          overflow-x: hidden;
      }
   .navbar_link{
       display: flex;
       align-items: center;
       justify-content: center;
     
   }
   
   .navbar_menu{
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:repeat(4, 100px);
  position: absolute;
  width: 100%;
  top: -1000px;
   }
   .navbar_menu.active {
       top: 100%;
       opacity:1;
       z-index: 99;
       height: 100vh;
       font-size: 1.5rem;
       background: var(--black);
      }
  
   .navbar_toggle .bar{
   width: 25px;
   height: 3px;
   margin: 5px auto;
   transition: all 0.3s ease-in-out;
   background: var(--white);
   display: block;
   cursor: pointer;
   }
   #mobile-menu {
       position: absolute;
       top: 15%;
       right: 5%;
       transform: translate(5%, 20%);
      
   }
   #mobile-menu.is-active .bar:nth-child(2) {
  opacity: 0;
   }
   #mobile-menu.is-active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
   }
   #mobile-menu.is-active .bar:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
   }
  }
</style>
