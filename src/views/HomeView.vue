<script setup lang="ts">

import { computed, ref } from 'vue';
import { countries, regions } from '@/data/maps';
import { codeCountryMap } from '@/data/country';
import MapViewVue from '@/components/MapView.vue';
import SimpleMapsCredit from '@/components/SimpleMapsCredit.vue';
import Github from '@/components/icons/github.vue';
const mapList = ref(countries)
const search = ref();

const filteredList = computed(() => {
  if (!search.value) {
    return mapList.value;
  }
  return mapList.value.filter(c => codeCountryMap[c]?.name.toUpperCase().startsWith(search.value.toUpperCase()))
})
</script>

<template>
  <main>
    <a href="https://github.com/AhmetHuseyinDOK/interactive-maps-vue">
      <h1>interactive maps<Github style="margin-left: 10px;"></Github>
      </h1>
    </a>

    <input v-model="search" type="search" placeholder="Search" style="margin-bottom: 10px;" />
    <SimpleMapsCredit></SimpleMapsCredit>
    <a v-if="!search" :href="`#/map/world`">
      <div class="mapItem">
        <div>World</div>
        <MapViewVue :url="`./maps/world.json`"></MapViewVue>
      </div>
    </a>
    <a v-if="!search" :key="region" v-for="region in regions" :href="`#/map/${region}`"></a>
    <div class="mapList grid" style="grid-template-columns: repeat(3, 1fr);">
      <a v-if="!search" :key="region" v-for="region in regions" :href="`#/map/${region}`">
        <div class="mapItem">
          <div>{{ region }}</div>
          <MapViewVue disabled :url="`./maps/${region}.json`"></MapViewVue>
        </div>
      </a>
    </div>
    <div class="maplist grid">

      <a :key="code" v-for="code in filteredList" :href="`#/map/${code}`">
        <div class="mapItem">
          <div>{{ codeCountryMap[code]?.name }}</div>
          <MapViewVue disabled :url="`./maps/${code}.json`"></MapViewVue>
        </div>
      </a>
    </div>
  </main>
</template>

<style scoped>
input[type='search'] {
  border-radius: 20px;
  padding: 2px 6px;
}

.mapItem {
  height: 200px;
  padding-bottom: 50px;
  padding-top: 20px;
  padding-right: 10px;
  padding-left: 10px;
  border: 1px solid slategray;
  border-radius: 20px;
}

.mapItem div {
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  margin-bottom: 10px;

}

a {
  color: unset;
  text-decoration: none;
}

.grid {
  display: grid;
  gap: 10px;
  /* Space between grid items */
  padding: 10px;
  /* Padding around the grid */
}


/* Medium screens (tablets) */
@media (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
    /* 2 columns */
  }
}

/* Large screens (desktops) */
@media (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    /* 3 columns */
  }
}

/* Extra large screens */
@media (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    /* 4 columns */
  }
}


main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}
</style>
