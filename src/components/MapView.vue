<template>
    <svg v-if="mapData" fill="#7c7c7c" width="100%" height="100%" stroke="#ffffff" stroke-linecap="round"
        stroke-linejoin="round" stroke-width="2" version="1.2" :viewBox="`0 0 ${mapData.meta.width} ${mapData.meta.height}`"
        preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <path @click="emit('update:selected', path.name)" v-for="path in mapData.data" :d="path.path" fill="gray"
            class="path" :class="selected && selected == path.name ? 'selected-path' : ''">
        </path>
    </svg>

    <div v-else>loading</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const mapData = ref<any>()

const emit = defineEmits(["update:selected"])
interface Props {
    url: string;
    selected?: string;
}

const props = defineProps<Props>();
onMounted(() => {
    fetch(props.url).then((data) => {
        data.json().then(v => mapData.value = v);
    });
})


</script>

<style scoped>
.path:hover {
    fill: burlywood;
}

.selected-path {
    fill: indianred;
}
</style>