<script setup lang="ts">
import MapViewVue from '@/components/MapView.vue';
import { ref } from 'vue';
const selected = ref();
</script>

<template>
  <main>
    <MapViewVue class="map"  url="maps/tr.json" v-model:selected="selected"></MapViewVue>
    <h1>{{ selected }}</h1>
  </main>
</template>

<style scoped>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: indianred;
  }
</style>
