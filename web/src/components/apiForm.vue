
<template>
    <div>
      <input
      class="w-50 p-2"
      type="text" 
      v-model="city">
    </input>
      <h1>{{ data }}</h1>
      <button @click="fetchData(city)">Fetch Data</button>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { ref } from 'vue';

    let data = ref(null);
    let city = ref('');

    async function fetchData(city : string) {
        const response = await fetch('http://localhost:3000/search/'+ city);
        const jsonData = await response.json();
        data.value = jsonData;
    }

  </script>