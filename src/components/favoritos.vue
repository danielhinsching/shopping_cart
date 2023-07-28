<script setup>
import MButton from './MButton.vue';
import MMessage from './MMessage.vue';
import { fav, adicionarAoFavorito, removerItemFavorito, limparFavorito } from '@/_data/favoritos.js'
</script>
<template>
<MButton @click="removerItemFavorito(props.livro)" texto="Remover dos Favoritos"></MButton>
<div class="favoritos">
</div>







</template>

<style scoped>
</style>