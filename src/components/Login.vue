<script setup>

const login = () => {
    const LOGIN_URL = 'http://localhost:8000/api/v1/login'
    window.location.href = LOGIN_URL;
}

</script>
<template>
    <button @click="login">login with google</button>
</template>
