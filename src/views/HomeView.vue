<script setup lang="ts">

import { ref } from 'vue';
import { countries } from '@/data/maps';
import { codeCountryMap } from '@/data/country';
const mapList = ref(countries)

</script>

<template>
  <main>
    <h1>Maps</h1>
    <div class="maplist">
      <div class="" v-for="code in mapList">
        <a :href="`/map/${code}`">{{ codeCountryMap[code]?.name }}</a>
      </div>
    </div>
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
