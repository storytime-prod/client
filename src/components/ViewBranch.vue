<script setup>
import { onMounted, ref } from 'vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';

const storyStore = useStoryStore();

const branches = ref([])

onMounted(() => {
    const GET_BRANCHES_URL = `http://localhost:8000/api/v1/story/branches/${storyStore.story.id}`
    axios.get(GET_BRANCHES_URL).then(res => {
        branches.value = res.data
    }).catch(err => {
        console.error("Error fetching branches ", err)
    });
})


</script>
<template>
    <div class="story-list">
        <div v-for="story in branches" :key="story.id" class="story-item">
            <router-link :to="{ name: 'story_page', query: { id: story.id } }">
                <h3>{{ story.title }}</h3>
                <p>{{ story.genre }}</p>
            </router-link>
            <hr />
        </div>
    </div>
</template>