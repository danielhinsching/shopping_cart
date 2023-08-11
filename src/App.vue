<script setup>
import ListagemLivros from '@/components/ListagemLivros.vue';
import MeuCarrinho from '@/components/MeuCarrinho.vue';
import router from './router';
</script>

<template>
<h1 class="titulo">LIVRARIA DO DAN</h1>
  <div class="container-geral">
    <RouterView/>
  </div>
</template>

<style scoped>

.container-geral {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 3fr 1fr;
  
}





</style>
