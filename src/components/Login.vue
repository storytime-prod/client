<template>
    <button @click="login">login</button>
    <button @click="check">CHECK</button>
</template>

<script setup>

import axios from 'axios';
import { ref } from 'vue';
const login = () => {
    const LOGIN_URL = 'http://localhost:8000/api/v1/login'

    window.location.href = LOGIN_URL;
}

const check = () => {
    const CHECK_URL = 'http://localhost:8000/api/v1/me'
    axios.get(CHECK_URL, { withCredentials: true }).then(res => {
        console.log('Check successful:', res.data)
    }).catch(err => {
        console.error('Check failed:', err)
    })
}
</script>