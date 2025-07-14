<script setup>

import { ref } from 'vue';
import Navbar from './components/Navbar.vue';

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

</script>

<template>
  <div class="theme-toggle-container">
    <button class="theme-toggle" @click="nextTheme">
      {{ themes[currentThemeIdx].symbol }}
    </button>
  </div>
  <main>
    <router-view />
    <Navbar />
  </main>
</template>

<style>
@import './styles/app.css';
</style>
