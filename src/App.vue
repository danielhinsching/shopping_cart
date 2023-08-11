<script setup>
import homeView from './views/homeView.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<<<<<<< HEAD
<h1 class="titulo">LIVRARIA DO DAN</h1>
  <div class="container-geral">
    <RouterView/>
  </div>
=======
  <div class="tudo">
    <h1>Minha livraria</h1>
  <div class="container-geral">
<RouterView/>
  </div>
  </div>

>>>>>>> 0c3d5c4928f0cbbb6b73dcf7057aa2546ecced67
</template>

<style scoped>

.container-geral {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 3fr 1fr;
  
}





</style>
