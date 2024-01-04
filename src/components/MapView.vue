<template>
    {{ mapData.meta }}
    <svg v-if="mapData" baseprofile="tiny" fill="#7c7c7c" :height="mapData.meta.height" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" :viewbox="`0 0 ${mapData.meta.width} ${mapData.meta.height}`" :width="mapData.meta.width" xmlns="http://www.w3.org/2000/svg">
        <path @click="emit('update:selected', path.name)" v-for="path in mapData.data" :d="path.path" fill="gray" class="hover:fill-green-600" :class="selected == path.name ? 'fill-green-900':''"></path>
    </svg>
    
    <div v-else> loading</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const mapData =  ref()

const emit = defineEmits(["update:selected"])
interface Props {
    url: string;
    selected?: string;
}

const props = defineProps<Props>();
onMounted(() => {
    fetch(props.url).then((data) => {
        data.json().then( v => mapData.value = v );
    });
})
</script>