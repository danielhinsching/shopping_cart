<script setup>
import { ref } from 'vue';
import MButton from '@/components/MButton.vue';
import router from '../router';
import MeuCarrinho from '../components/MeuCarrinho.vue';
import {carrinho, atualizaQuantidadeItem, removerItemCarrinho,} from '@/_data/carrinho.js'
import MMessage from'@/components/MMessage.vue';
const nome = ref('')
const email = ref('')
const telefone = ref('')
const formaDePagamento = ref([])
const cpf = ref('')
const endereço = ref('')
const cidade = ref('')
const estado = ref('')
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
function formatarPreco(preco) {
  return 'R$ ' + preco.toFixed(2).replace('.', ',')
}
function Fim(){
  alert = "Compra Finalizada"
}

const confirmar = ref(false)
</script>

<template>
  <div class="geral">
  <div class="carrinho">
    <h2>Meu carrinho</h2>
    <div class="wrap-carrinho">
      <m-messagge v-if="carrinho.itens.length === 0"/>
      <div v-else>
        <div class="item-carrinho" v-for="(item, index) in carrinho.itens" :key="index">
          <div class="info-livro">
            <div class="imagem-livro">
              <img :src="item.img" class="icon-capa-livro" />
            </div>
            <div class="detalhes-livro">
              <div>
                <p>{{ item.title }}</p>
                <p class="info-livro-preco">{{ formatarPreco(item.price) }}/un</p>
              </div>
              <div>
                <p>
                  Quantidade:
                  <input
                    type="number"
                    v-model="item.quantidade"
                    @change="atualizaQuantidadeItem(item)"
                    min="1"
                  />
                </p>
                <button @click="removerItemCarrinho(item)">&#128465;</button>
                <p>Total: {{ formatarPreco(item.total) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
  <form class="info" @submit.prevent="aceitar = !aceitar">
    <p>Nome:</p>
    <input type="text" v-model="nome" minlength="3" maxlength="20" placeholder="Nome" required autocomplete="on" />
    <p>Email:</p>
    <input type="email" v-model="email" placeholder="Email" required autocomplete="on" />
    <p>telefone:</p>
    <input type="text" v-model.number="telefone" minlength="8" maxlength="15" required autocomplete="on">
    <p>forma de pagamento:</p>
    <label for="FormaDePagamento">
      <input type="checkbox" v-model="formaDePagamento" value="Crédito" /> Crédito
      <input type="checkbox" v-model="formaDePagamento" value="Débito" /> Débito
      <input type="checkbox" v-model="formaDePagamento" value="Pix" /> Pix

    
    
    </label>
    <p>Endereço:</p>
      <input type="text" v-model="endereço" placeholder="Endereço" required autocomplete="on">
      <P>Cidade:</P>
      <input type="string" v-model="cidade" placeholder="Cidade" required autocomplete="on">
      <p>Estado:</p>
      <select type="string" v-model="estado" required>
        <option>AC</option>
        <option>AL</option>
        <option>AP</option>
        <option>AM</option>
        <option>BA</option>
        <option>CE</option>
        <option>DF</option>
        <option>ES</option>
        <option>GO</option>
        <option>MA</option>
        <option>MT</option>
        <option>MS</option>
        <option>MG</option>
        <option>PA</option>
        <option>PB</option>
        <option>PR</option>
        <option>PE</option>
        <option>PI</option>
        <option>RJ</option>
        <option>RN</option>
        <option>RS</option>
        <option>RO</option>
        <option>RR</option>
        <option>SC</option>
        <option>SP</option>
        <option>SE</option>
        <option>TO</option>
      </select>
    <m-button texto="Voltar" @click="$router.push({ name: 'livraria' })" />
    <div>
      <button class="botao" type="submit" @click="Fim">Finalizar</button>

    </div>
  </form>
</div>
  <div v-if="aceitar" id="div">
<img :src="user.avatar" />
<p>{{ nome }}</p>
<p>{{ email }}</p>
<p>{{ telefone }}</p>
<p>{{ data }}</p>
<p>{{endereço }}</p>
<p>{{ cidade }}</p>
<p>{{ estado }}</p>
</div>
</template>

<style scoped>
.geral{
align-items: center;
background-color:  rgb(235, 160, 63);


}
.wrap-carrinho .carrinho-total{
  position: fixed;
  bottom: 3%;
  font-size: 1.5rem;
  font-weight: bold;
}

.item-carrinho .info-livro {
  display: flex;
  justify-content: center;
  margin-bottom: 0px;
}
.detalhes-livro {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.detalhes-livro p {
  margin: 0;
}
.detalhes-livro div {
  display: flex;
  justify-content: flex-start;
  width: 100%;
}

.detalhes-livro input[type='number'] {
  width: 50px;
  text-align: center;
  border: none;
  border-bottom: 1px solid black;
  background-color: transparent;
  margin-left: 10px;
}

.detalhes-livro button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: black;
  padding: 0;
  margin: 0;
}

.info-livro-preco {
  margin-left: auto;
}
.icon-capa-livro {
  width: 30px;
  margin-right: 10px;
}

</style>
