<script setup lang="ts">
import { ref } from 'vue';

let data = ref(null);

async function fetchData() {
  const response = await fetch('http://localhost:3000/search/London');
  const jsonData = await response.json();
  data.value = jsonData;
}


</script>

<template>
  <main>
    <h1 style="font-size: large;">{{ data }}</h1>
    <button @click="fetchData">Fetch Data</button>
  </main>
</template>
