<script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';

  const imageUrl = ref('');
  const boards = ref('')
  
  onMounted(async () => {
    const response = await axios.get('https://dog.ceo/api/breeds/image/random');
    imageUrl.value = response.data.message;
    const api = await axios.get('/api/boards');
    boards.value = api.data
  });
</script>

<template>
  <h1>{{ boards }}</h1>
  <img :src="imageUrl">
</template>