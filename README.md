# Vue Interactive Maps

Simple and **interactive** maps in vue **without any dependencies**. Want to see what we have ? [See Examples](https://ahmethuseyindok.github.io/interactive-maps-vue/#/) 

<a href="https://ahmethuseyindok.github.io/interactive-maps-vue/#/"><img width="1475" alt="image" src="https://github.com/AhmetHuseyinDOK/interactive-maps-vue/assets/24893654/a72d0441-84eb-4433-8d98-c27d908e0a10"><a/>

## How do I use a map ?

You only need two files:

- src/components/MapView.vue
- json url of respective map (e.g: public/maps/tr.json)

Usage:

``` vue 
<script setup>
import MapViewVue from '@/components/MapView.vue';
const selected = ref();
</script>
<template>
      <div>
        <div>World</div>
        <MapViewVue v-model:selected="selected" :url="`./maps/world.json`"></MapViewVue>
      </div>
</template>
```

## FAQ

### I need more functionality ?

I highly recommend modifying MapView.vue to meet your specific case. What I've implemented here is a basic example of what can be done.

### Some data is incorrect or missing ?

Some data might be missing or incorrect, simply modify the respective json to meet your needs. 

## Credits

None of the map data used in this repository belongs to me. All data belongs to [Simple Maps](https://simplemaps.com/resources/svg-maps)
