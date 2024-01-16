<script setup lang="ts">

import { ref } from 'vue';
import { countries } from '@/data/maps';
import { codeCountryMap } from '@/data/country';
import MapViewVue from '@/components/MapView.vue';
const mapList = ref(countries)

</script>

<template>
  <main>
    <h1>Maps</h1>
    <div>None of the map data belongs to me. All map data is from <b><a
          href='https://simplemaps.com/resources/svg-maps'>simple maps</a></b></div>
    <div class="maplist grid">
      <a v-for="code in mapList" :href="`#/map/${code}`">
        <div class="mapItem">
          <div>{{ codeCountryMap[code]?.name }}</div>
          <MapViewVue disabled :url="`./maps/${code}.json`"></MapViewVue>
        </div>
      </a>
    </div>
  </main>
</template>

<style scoped>
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
  color: indianred;
}
</style>
