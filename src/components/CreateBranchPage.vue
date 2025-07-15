<script setup>
import { onMounted, ref } from 'vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';

const storyStore = useStoryStore();

const available_stories = ref([]);

const selectedStory = ref(null);

const comment = ref([]);

const getBranchableStories = () => {
    const GET_BRANCHABLE_STORIES_URL = `http://localhost:8000/api/v1/branch-req/${storyStore.story.id}/branchables`
    axios.get(GET_BRANCHABLE_STORIES_URL)
        .then(res => {
            available_stories.value = res.data
        })
        .catch(err => {
            console.error("Something went wrong ", err)
        })
}

const createBranchRequest = () => {
    const CREATE_BRANCH_REQUEST_URL = `http://localhost:8000/api/v1/branch-req`
    const data = {
        src_id: storyStore.story.id,
        dest_id: selectedStory.value,
        comment: comment.value,
        status: 'pending'
    }
    axios.post(CREATE_BRANCH_REQUEST_URL, data).then(res => {
    }).catch(err => {
        console.error(err)
    })
}


onMounted(() => {
    getBranchableStories()
})

</script>
<template>
    <div class="create-branch-container">
        {{ storyStore.story.title }} ->
        <select id="create-branch-container" name="available_branches" v-model="selectedStory">
            <option v-for="story in available_stories" :key="story.id" :value="story.id">
                {{ story.title }}
            </option>
        </select>
        <input type="text" placeholder="Enter comment/title" v-model="comment" />
        <button v-on:click="createBranchRequest">CREATE BRANCH REQUEST</button>
    </div>
</template>