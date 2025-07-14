<script setup lang="ts">
import axios from 'axios';
import { useStoryStore } from '../stores/story';

const storyStore = useStoryStore();

const LIKE_URL = `http://localhost:8000/api/v1/story/${storyStore.story.id}/like`

const like_story = () => {
    axios.put(LIKE_URL).then(res => storyStore.story = res.data)
        .catch(err => {
            console.error("something went wrong during like request", err)
        })
}

</script>

<template>
    <div class="story-control-container">
        <div v-if="storyStore.story.likes !== undefined" @click="like_story" class="like-button">
            L {{ storyStore.story.likes }}
        </div>
        <router-link :to="{ name: 'view_branch_page' }">
            <div class="view-branch-button">
                VB
            </div>
        </router-link>
        <router-link :to="{ name: 'create_branch_page' }">
            <div class="create-branch-button">
                +
            </div>
        </router-link>
        <router-link :to="{ name: 'view-branch-req-page' }">
            <div class="view-branch-req-button">
                ?
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.story-control-container {
    display: flex;
    flex-direction: column;
    align-items: right;
    gap: 1em;
    align-items: flex-end;
}

.story-control-container div {
    border-radius: 50%;
    background-color: var(--accent);
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
</style>