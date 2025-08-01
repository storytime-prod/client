<script setup>
import { useUserStore } from '../stores/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter()

const logout = () => {
    const LOGOUT_URL = 'http://localhost:8000/api/v1/logout'
    window.location.href = LOGOUT_URL;
}

const login = () => {
    router.push({ name: 'login' });
}


</script>

<template>
    <div class="user-details-modal">
        <div class="user-details-header">
            <img v-if="userStore.user" :src="userStore.user.picture" alt="User Profile Picture"
                referrerpolicy="no-referrer" />
            <p></p>
        </div>
        <div v-if="userStore.user" class="user-details-content">
            <p><strong>Name:</strong> {{ userStore.user.name }}</p>
            <p><strong>Email:</strong> {{ userStore.user.email }}</p>
        </div>
        <div class="user-details-actions">
            <button v-if="userStore.user" @click="logout">Logout</button>
            <button v-else @click="login">Login</button>
        </div>
    </div>

</template>
