<script setup>

import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore()

const title = ref('')
const author = ref('')
const genre = ref('')
const content = ref('')

const CREATE_NEW_STORY_URL = 'http://localhost:8000/api/v1/story'

function create_new_story() {
    const data = {
        title: title.value,
        genre: genre.value,
        content: content.value
    }
    axios.post(CREATE_NEW_STORY_URL, data, { withCredentials: true }).then(res => {
        console.log("success ", res.data)
    }).catch(
        err => {
            console.error("error ", err)
        }
    )
}

onMounted(() => {
    if (!userStore.user) {
        router.push({ name: 'login' })
    }
})

</script>

<template>
    <div class="create-title-input">
        <input type="text" ref="titleInput" placeholder="Enter Title" v-model="title" />
    </div>
    <div class="create-author-input">
        <input type="text" ref="authorInput" placeholder="Enter Author" v-model="author" />
    </div>
    <div class="create-genre-input">
        <input type="text" ref="genreInput" placeholder="Enter Genre" v-model="genre" />
    </div>
    <div class="create-content-input">
        <textarea type="text" ref="contentInput" placeholder="Enter Content" v-model="content" />
    </div>
    <button @click="create_new_story">CREATE DA</button>

</template>

<style scoped>
input {
    width: 100%;
}

textarea {
    width: 100%;
    height: 70vh;
}

.upload-area {
    border: 2px dashed #aaa;
    border-radius: 8px;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s;
}

.upload-area.dragging {
    background-color: #f0f8ff;
    border-color: #3399ff;
}

.upload-area p {
    margin: 0 0 10px;
}

.upload-area button {
    background: none;
    border: none;
    color: #3399ff;
    cursor: pointer;
    text-decoration: underline;
    font-size: 1em;
    padding: 0;
}

.upload-area ul {
    list-style: none;
    padding: 0;
    margin: 0;
    max-height: 150px;
    overflow-y: auto;
    text-align: left;
}

.upload-area li {
    margin-bottom: 5px;
    font-size: 0.9em;
}
</style>
