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

const URL = `http://localhost:8000/api/v1/story/${storyId ? 'id/' + storyId : 'random'}`;

onMounted(async () => {
    const res = await axios.get(URL);
    if (res.status !== 200) {
        console.error('Failed to fetch story:', res.statusText);
        return;
    }
    storyStore.setStory(res.data)
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