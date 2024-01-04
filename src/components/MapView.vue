<template>
    <svg v-if="paths" baseprofile="tiny" fill="#7c7c7c" height="371" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" version="1.2" viewbox="0 0 1000 371" width="1000" xmlns="http://www.w3.org/2000/svg">
        <path @click="emit('update:selected', path.name)" v-for="path in paths" :d="path.path" fill="gray" class="hover:fill-green-600" :class="selected == path.name ? 'fill-green-900':''"></path>
    </svg>
    <div v-else> loading</div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
const paths =  ref()

const emit = defineEmits(["update:selected"])
interface Props {
    url: string;
    selected?: string;
}

const props = defineProps<Props>();
onMounted(() => {
    fetch(props.url).then((data) => {
        data.json().then( v => paths.value = v );
    });
})
</script>