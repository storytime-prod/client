<template>
    <div class="search-bar">
        <input type="text" placeholder="Search stories..." v-model="searchQuery" @input="filterStories" />
        <button @click="clearSearch">Clear</button>

        <hr />

        <div class="story-list">
            <div v-for="story in allStories" :key="story.id" class="story-item">
                <router-link :to="{ name: 'story_page', query: { id: story.id } }">
                    <h3>{{ story.title }}</h3>
                    <p>{{ story.genre }}</p>
                </router-link>
                <hr />
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const allStories = ref([]);

onMounted(async () => {
    const res = await axios.get('http://localhost:8000/api/v1/story');
    if (res.status !== 200) {
        console.error('Failed to fetch story:', res.statusText);
        return;
    }
    allStories.value = res.data;
});

</script>