<script setup>
import { ref } from 'vue';

const img = ref(['https://m.media-amazon.com/images/I/31jGFI5wX2L._SX331_BO1,204,203,200_.jpg', 'https://m.media-amazon.com/images/I/715afDdgKfL.jpg',  'https://m.media-amazon.com/images/I/41afCn3PQUL._SY344_BO1,204,203,200_QL70_ML2_.jpg'])

const i = ref(0)
function slide() {
    if(i.value == img.value.length){
  i.value = 0       
    }
   i.value++

}

</script>


<template>
    <div>
        <img :src="img[i]" alt="">
      <button @click="slide(i)">Mudar imagem</button>
    </div>
</template>


<style scoped>

</style>