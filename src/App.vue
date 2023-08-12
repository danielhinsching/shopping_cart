<script setup>
import homeView from './views/homeView.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<div class="tudo">
<h1 class="titulo">LIVRARIA DO DAN</h1>
  <div class="container-geral">
    <RouterView/>
  </div>
</div>  
</template>

<style scoped>

.container-geral {

  display: flex;
  justify-content: space-between;
  display: grid;
  grid-template-columns: 3fr 1fr;
  
}
.tudo{
  background-color: rgb(235, 160, 63);
}




</style>
