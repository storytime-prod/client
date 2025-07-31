<script setup>

const login = () => {
    const LOGIN_URL = 'http://localhost:8000/api/v1/login'
    window.location.href = LOGIN_URL;
}
const logout = () => {
    const LOGOUT_URL = 'http://localhost:8000/api/v1/logout'
    window.location.href = LOGOUT_URL;
}

</script>
<template>
    <button @click="login">login</button>
    <button @click="logout">logout</button>
</template>
