<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';
import { VueFlow } from '@vue-flow/core';
import '@vue-flow/core/dist/style.css';
import { useRouter } from 'vue-router';

const tree = ref(null)
const router = useRouter();

const getStoryTree = () => {
    const GET_TREE_URL = 'http://localhost:8000/api/v1/generate-tree'
    axios.get(GET_TREE_URL).then(res => {
        tree.value = res.data
    })
        .catch(err => {
            console.error(err)
        })
}

const openStory = (event) => {
    const selectedStoryId = event.node?.id;
    if (selectedStoryId) {
        router.push({ name: 'story_page', query: { id: selectedStoryId } });
    }
}

onMounted(() => {
    if (!tree.value) {
        getStoryTree();
    }
})

</script>

<template>

    <div v-if="tree" class="tree-container">
        <VueFlow :nodes="tree.nodes" :edges="tree.edges" fit-view :fit-view-on-init="true" @nodeClick="openStory" />
    </div>
    <div v-else>
        LOADING
    </div>

</template>

<style scoped>
.tree-container {
    width: 100%;
    height: 600px;
    overflow: auto;
    border: 1px solid #ccc;
}
</style>