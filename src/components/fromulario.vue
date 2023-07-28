<script setup>
import { ref} from 'vue';
const nome = ref('')
const email = ref('')
const  telefone = ref('')
const formaDePagamento = ref('')
const cpf = ref('')
const endereço = ref('')
const user = ref({
  avatar: null
})
function handleFileUpload(e) {
  const target = e.target
  if (target && target.files) {
    const file = target.files[0]
    user.value.avatar = URL.createObjectURL(file)
  }
}
const confirmar = ref(false)
</script>

<template>
  <form class="info" @submit.prevent="aceitar = !aceitar">
      <p>Nome:</p>
      <input type="text" v-model="nome" minlength="3" maxlength="20" placeholder="Nome" required autocomplete="on"/>
      <p>Email:</p>
      <input type="email" v-model="email" placeholder="Email" required autocomplete="on"/>   
      <p>telefone:</p>
      <input type="text" v-model="telefone" minlength="8" maxlength="15" required autocomplete="on">
      <p>forma de pagamento:</p>
      <input type="string" v-model="formaDePagamento">
      */terminar string, add img, localizar no app.vue/*
  </form>

</template>

<style scoped>


</style>