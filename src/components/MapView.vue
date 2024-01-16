<template>
    <svg :style="{ '--color': color, '--selectedColor': selectedColor, '--hoverColor': hoverColor }" v-if="mapData"
        fill="var(--color)" width="100%" height="100%" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round"
        stroke-width="2" version="1.2" :viewBox="`0 0 ${mapData.meta.width} ${mapData.meta.height}`"
        preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <path @click="disabled ? undefined : emit('update:selected', path.name)" v-for="path in mapData.data" :d="path.path"
            fill="gray" class="path" :class="{ 'selected-path': selected && selected == path.name, 'disabled': disabled }">
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
    disabled?: boolean;
    color?: string;
    hoverColor?: string;
    selectedColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
    color: '#7c7c7c',
    hoverColor: 'burlywood',
    selectedColor: 'indianred',
    interactive: true
});
onMounted(() => {
    fetch(props.url).then((data) => {
        data.json().then(v => mapData.value = v);
    });
})


</script>

<style scoped>
.path.disabled:hover {
    fill: unset;
}

.path:hover {
    fill: var(--hoverColor);
}

.selected-path {
    fill: var(--selectedColor);
}
</style>