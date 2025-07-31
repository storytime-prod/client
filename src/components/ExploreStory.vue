<script setup>
import axios from 'axios';
import { onMounted, ref, watch } from 'vue';
import { useStoryStore } from '../stores/story';

const allStories = ref([]);
const storyStore = useStoryStore();
const searchQuery = ref([]);

onMounted(() => {
    storyStore.reset();
    axios.get('http://localhost:8000/api/v1/story').then(res => {
        allStories.value = res.data
    }).catch(err => {
        console.error(err)
    });
});

</script>

<template>
    <div class="search-bar">
        <input type="text" placeholder="Search stories..." v-model="searchQuery" @input="filterStories" />
        <button @click="clearSearch">Clear</button>

        <hr />

        <div class="story-list">
            <div v-for="story in allStories" :key="story.id" class="story-item">
                <router-link :to="{ name: 'story_page', query: { id: story.id } }"
                    v-if="!searchQuery || (story.title + story.content).toLowerCase().includes(searchQuery)">
                    <h3>{{ story.title }}</h3>
                    <p>{{ story.genre }}</p>
                </router-link>
                <hr />
            </div>
        </div>
    </div>
</template>