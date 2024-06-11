<script setup lang="ts">
import { ref } from 'vue';

let data = ref(null);
let city = ref('');

async function fetchData(city : string) {
  const response = await fetch('http://api:300/search/'+ city);
  const jsonData = await response.json();
  data.value = jsonData;
}


</script>

<template>
  <main>
    <input type="text" v-model="city"/>
    <h1 style="font-size: large;">{{ data }}</h1>
    <button @click="fetchData(city)">Fetch Data</button>
  </main>
</template>
