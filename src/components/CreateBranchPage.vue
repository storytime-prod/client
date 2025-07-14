<script setup>
import { onMounted, ref } from 'vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';

const storyStore = useStoryStore();

const GET_BRANCHABLE_STORIES_URL = `http://localhost:8000/api/v1/branch-req/${storyStore.story.id}/branchables`

const available_stories = ref([])

const getBranchableStories = () => {
    axios.get(GET_BRANCHABLE_STORIES_URL)
        .then(res => {
            available_stories.value = res.data
        })
        .catch(err => {
            console.error("Something went wrong ", err)
        })
}

onMounted(() => {
    getBranchableStories()
})

</script>
<template>
    <div class="create-branch-container">
        {{ storyStore.story.title }} ->
        <select id="create-branch-container" name="available_branches">
            <option v-for="story in available_stories" :key="story.id" :value="story.id">
                {{ story.title }}
            </option>
        </select>
    </div>
</template>