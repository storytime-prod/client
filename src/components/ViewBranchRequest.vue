<script setup>
import { onMounted, ref } from 'vue';
import { useStoryStore } from '../stores/story';
import axios from 'axios';

const storyStore = useStoryStore();

const branch_requests = ref([])

onMounted(() => {
    const GET_BRANCH_REQUESTS_URL = `http://localhost:8000/api/v1/branch-req/${storyStore.story.id}`
    axios.get(GET_BRANCH_REQUESTS_URL)
        .then(res => {
            branch_requests.value = res.data
        })
        .catch(err => {
            console.error("something went wrong while fetching branch requests ", err)
        })
})

</script>

<template>
    BRANCH REQUESTS
    <div v-for="request in branch_requests" :key="request.id" class="story-item">
        <router-link :to="{ name: 'review_branch_req_story', query: { id: request.dest_id, requestId: request.id } }">
            <h3>{{ request.comment }}</h3>
            <p>{{ request.status }}</p>
            <p>{{ request.created_at }}</p>
        </router-link>
        <hr />
    </div>
</template>