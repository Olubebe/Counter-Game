<template>
  <div class="hero">
        <div class="hero_content">
            <h1 class="anime_hero">Counter Game</h1>
            <p  class="anime_hero">How Far Can You Count...</p>
            <a href="/counter" class="button anime_hero">Play Now</a>
        </div>
    </div>
  
  </template>
  
  <script>
  export default {
    name: 'home',
  }
  </script>
  
  <style scoped>
  
  .hero {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1)), url('https://images.unsplash.com/photo-1603290989627-5155a7f83dac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
    height: 100vh;
    background-position: center;
    background-size: cover;
    padding: 0.5rem calc((100vw - 1200px) / 2);
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.hero_content{
    color: var(--white);
    padding: 3rem 1rem;
    line-height: 1;
}
.hero_content h1 {
    font-size: clamp(3rem, 8vw, 7rem);
    text-transform: capitalize;
    margin-bottom: 0.5rem;
}
.hero_content p{
    font-size: clamp(1rem, 4vw, 2.5rem);
    margin-bottom: 3rem;
}

.button {
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
.button:hover {
    background: var(--blue);
    
}
.button1 {
    padding: 20px;
    border: none;
    text-decoration: none;
    border-radius: 4px;
    background-color: var(--red);
   color: var(--white);
}
.button1:hover {
    background-color: var(--blue);
}
  
  
  </style>