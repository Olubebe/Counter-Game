<template>
  <div>
    <header :class="{'scrolled-nav' : scrollNav }">
 <nav>
  <div class="branding">
    <h2>Counter Game</h2>
  </div>
  <ul v-show="!mobile" class="navigation">
<li> <router-link class="link" :to="{name: 'Home'}" >Home</router-link> 
</li>
<li> <router-link class="link" :to="{name: 'Counter'}" >Counter</router-link> 
</li>
    <li> <router-link class="link" :to="{name: 'NotFound'}" >ErrorPage</router-link> 
</li>
<li>
   <a class="link" href="https://github.com/Olubebe" target="_blank" >Github</a>
</li>
  </ul>
  <div class="icon">
    <i  @click="toggleMobileNav" :class="{'icon-active' : mobileNav}" class="fas fa-bars" v-show="mobile"></i>
  </div>
 <transition name="mobile-nav">
  <ul v-show="mobileNav" class="dropdown-nav">
<li> <router-link class="link" :to="{name: 'Home'}" >Home</router-link> 
</li>
<li> <router-link class="link" :to="{name: 'Counter'}" >Counter</router-link> 
</li>
<li> <router-link class="link" :to="{name: 'NotFound'}" >ErrorPage</router-link> 
</li>
<li>
   <a class="link" href="https://github.com/Olubebe" >Github</a>
</li>
  </ul>
 </transition>
 </nav>
  </header>
  </div>

</template>

<script>
export default {
  name: 'header',
  data(){
    return{
      mobile: null,
      mobileNav: null,
      scrollNav: null,
      windowWidth:null,
    }
  },

created(){
    this.checkScreen()
    window.addEventListener('resize', this.checkScreen)
    
    },
    mounted(){
      window.addEventListener('scroll', this.updateScroll)
    },

  methods:{
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav
    },

    updateScroll(){
        const scrollPosition = window.scrollY;
        if(scrollPosition > 50){
            this.scrolledNav = true;
            return
        }
        this.scrolledNav = false;
    },

    checkScreen(){
        this.windowWidth = window.innerWidth
        if(this.windowWidth < 768){
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return
    }
    // ,
    // handleScroll(){
    //   this.scrollPosition = window.scrollY
    // }
  }
}
</script>

<style lang="scss" scoped>
header{
    background-color: rgba(0,0, 0, 0.8);
    z-index: 99;
    width:100%;
    position: fixed;
    transition: .5s ease all;
    color: #fff;

    nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 98%;
    margin: 0 auto;

    @media(min-width: 1140px){
    max-width: 1140px;
}

ul,
.link{
  font-weight: 500;
  color: #fff;
  list-style: none;
  text-decoration: none;
}
li{
text-transform: uppercase;
padding: 16px;
margin-left: 16px;
}
.link{
font-size: 14px;
transition: .5s ease all;
padding-bottom: 4px;
border-bottom: 1px solid transparent;

&:hover{
    color: #fff;
    border-color: red;
    outline: 0;
}
}

.branding{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    h2{
        font-size: 24px;
        margin-bottom: 1rem;
        font-weight: 500;
        transition: .5s ease all;
    }
}

.navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}
.icon{
    display: flex;
    position: absolute;
    align-items: center;
    top: 0;
    right: 24px;
    height: 100%;

    i{
        cursor: pointer;
        font-size: 24px;
        transition: 0.8s ease all;
    }
}

.icon-active{
    transform: rotate(180deg);
}

.dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 100%;
    max-width: 250px;
    height: 100%;
    background-color: #fff;
    top: 0;
    left: 0;

    li{
        margin-left: 0;
        .link{
            color: #000;
        }
    }
}

.mobile-nav-enter-active,
.mobile-nav-leave-active{
    transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to{
    transform: translateX(-250px);
}

.mobile-nav-enter-to{
    transform: translateX(0);
}

}

}

.scrolled-nav{
    background-color: #000;
    box-shadow: 0 4px 6px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0,0,0, 0.06);

    nav{
        padding: 8px 0;

        .branding{
            h2{
                font-size: 18px;
                box-shadow: 0 4px 6px -1px rgba(0,0,0, 0.1), 0 2px 4px -1px rgba(0,0,0, 0.06);
            }
        }
    }
}



</style>