<template>
    <div class="footer-nav">

        <router-link :to="{ name: 'story_page' }">Home</router-link>
        <router-link :to="{ name: 'explore_story_page' }">Explore</router-link>
        <router-link :to="{ name: 'create_story_page' }">Create Story</router-link>
        <router-link to="/about">About</router-link>

    </div>
</template>

<style scoped>
.footer-nav {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    padding: 20px;
    background: var(--accent);
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    z-index: 1000;
}
</style>