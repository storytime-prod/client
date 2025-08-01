<script setup>
import { onMounted, watch } from 'vue';
import MarkdownRenderer from './MarkdownRenderer.vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';
import StoryControl from './StoryControl.vue';

const storyStore = useStoryStore()

const getStory = () => {
    const URL = `http://localhost:8000/api/v1/story/random`;
    axios.get(URL).then(res => {
        storyStore.setStory(res.data)
    }).catch(err => console.error(err))
}

onMounted(() => {
    if (!storyStore.story) {
        getStory()
    }
})

</script>

<template>
    <div v-if="storyStore.story" class="story-content">
        <div @click="getStory" style="font-size: 1.5rem; text-align: right;">
            🔄
        </div>
        <MarkdownRenderer :source="storyStore.story.content" />
        <StoryControl />
    </div>

</template>

<style scoped>
.story-content {
    padding-bottom: 200px;
}
</style>