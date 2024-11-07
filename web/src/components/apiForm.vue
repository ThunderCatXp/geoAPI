
<template>
    <div class="p-5">
      <input
      class="p-5 h-auto border border-slate-500 rounded-lg w-1/4"
      type="text" 
      v-model="city">
    </input>
      <h1>{{ data }}</h1>
      <button @click="fetchData(city)" class="p-2 mt-5 border border-slate-500  rounded-md">Fetch Data</button>
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