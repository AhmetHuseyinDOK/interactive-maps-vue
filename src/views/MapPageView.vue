<template>
    <h1 style="text-align: center;">{{ selected ?? 'select to show the name of the area' }}</h1>
    <MapViewVue class="map" :url="`/maps/${$route.params.map}.json`" v-model:selected="selected"></MapViewVue>
</template>
<script setup lang="ts">
import MapViewVue from '@/components/MapView.vue';
import { ref } from 'vue';
const selected = ref();
</script>
<style></style>
