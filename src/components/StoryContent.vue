<script setup>
import { onMounted } from 'vue';
import MarkdownRenderer from './MarkdownRenderer.vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';
import { useRoute } from 'vue-router';
import StoryControl from './StoryControl.vue';

const route = useRoute()
const storyId = route.query.id;

const storyStore = useStoryStore()

const getStory = () => {
    const URL = `http://localhost:8000/api/v1/story/id/${storyId}`;
    axios.get(URL).then(res => {
        storyStore.setStory(res.data)
    }).catch(err => console.error(err))
}

onMounted(() => {
    getStory()
})

</script>

<template>
    <div v-if="storyStore.story" class="story-content">
        <MarkdownRenderer :source="storyStore.story.content" />
        <StoryControl />
    </div>

</template>

<style scoped>
.story-content {
    padding-bottom: 200px;
}
</style>