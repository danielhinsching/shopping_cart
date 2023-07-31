<script setup>
import ListagemLivros from '@/components/ListagemLivros.vue';
import MeuCarrinho from '@/components/MeuCarrinho.vue';
import favoritos from './components/favoritos.vue';
/*import router from './router';*/
</script>

<template>
  <div class="tudo">
    <h1>Minha livraria</h1>
  <div class="container-geral">
    <listagem-livros />
    <meu-carrinho />
    <favoritos />
  </div>
  </div>

</template>

<style scoped>

.container-geral {
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 3fr 1fr;
  
}
.tudo{
  background-color: rgba(0, 162, 255, 0.493);
  margin: 0px;
}




</style>
