<script setup>

import { ref, watch } from 'vue';
import Navbar from './components/Navbar.vue';
import { useUserStore } from './stores/user';
import { onMounted } from 'vue';
import axios from 'axios';
import default_dp from './assets/def_dp.png';
import UserDetails from './components/UserDetails.vue';

const userStore = useUserStore();

const showUserDetails = ref(false);

// Detect system preference for dark mode
function getDefaultThemeIdx() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 0;
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 1;
  }
  return 0;
}

const currentThemeIdx = ref(getDefaultThemeIdx());

const themes = [
  { name: 'dark', symbol: '🌙' },
  { name: 'light', symbol: '☀️' },
  { name: 'natural-dark', symbol: '🌳' },
  { name: 'oceanic', symbol: '🌊' },
  { name: 'hell', symbol: '🔥' },
  { name: 'pacific', symbol: '🏝️' },
  { name: 'readers', symbol: '📖' },
  { name: 'dark-readers', symbol: '🌑' }
];

document.documentElement.setAttribute('data-theme', themes[currentThemeIdx.value].name.toLowerCase());

const nextTheme = () => {
  currentThemeIdx.value = (currentThemeIdx.value + 1) % themes.length;
  document.documentElement.setAttribute('data-theme', themes[currentThemeIdx.value].name.toLowerCase());
};

const getUser = () => {
  const USER_URL = 'http://localhost:8000/api/v1/me';
  axios.get(USER_URL, { withCredentials: true }).then(res => {
    userStore.setUser(res.data?.user)
  }).catch(err => {
    console.error('User fetch failed:', err)
  })
}

onMounted(() => {
  getUser()
});

</script>

<template>
  <div class="theme-toggle-container">
    <button class="theme-toggle" @click="nextTheme">
      {{ themes[currentThemeIdx].symbol }}
    </button>
    <div class="user-profile-pic" @click="showUserDetails = !showUserDetails">
      <img v-if="userStore.user" :src="userStore.user.picture" alt="User Profile Picture"
        referrerpolicy="no-referrer" />
      <img v-else :src="default_dp" alt="User Profile Picture" />
    </div>
    <div v-if="showUserDetails" class="user-details">
      <UserDetails @close="showUserDetails = false" />
    </div>
  </div>
  <main>
    <router-view />
    <Navbar />
  </main>
</template>

<style>
@import './styles/app.css';
</style>
