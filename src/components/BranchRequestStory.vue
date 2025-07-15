<script setup>
import { onMounted } from 'vue';
import MarkdownRenderer from './MarkdownRenderer.vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute()
const storyId = route.query.id;
const requestId = route.query.requestId;

const storyStore = useStoryStore()

const getStory = () => {
    const URL = `http://localhost:8000/api/v1/story/id/${storyId}`;
    axios.get(URL).then(res => {
        storyStore.setStory(res.data)
    }).catch(err => console.error(err))
}

const approveBranchRequest = () => {
    const APPROVE_BRANCH_REQUEST_URL = `http://localhost:8000/api/v1/branch-req/${requestId}/approve`;
    axios.put(APPROVE_BRANCH_REQUEST_URL).then(res => { }).catch(err => { console.error(err) })
}

onMounted(() => {
    getStory()
})

</script>

<template>
    <div v-if="storyStore.story" class="story-content">
        <MarkdownRenderer :source="storyStore.story.content" />
        <button @click="approveBranchRequest">
            APPROVE DA
        </button>
    </div>

</template>

<style scoped>
.story-content {
    padding-bottom: 200px;
}
</style>