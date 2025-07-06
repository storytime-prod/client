<script setup>
import { ref } from 'vue';
import mockStories from '../temp/mockStories.json';
import MarkdownRenderer from './MarkdownRenderer.vue';
import BranchSelectorModal from './BranchSelectorModal.vue';

const story = ref(mockStories[0]);
const openBranchSelector = ref(false);

const getBranches = () => {
    openBranchSelector.value = true;
};

const handleCloseModal = () => {
    openBranchSelector.value = false;
};

</script>

<template>
    <div class="story-content">
        <MarkdownRenderer :source="story.content" />
        <div class="branch-selector" v-if="story.branches && story.branches.length > 0">
            <i>The story continues...</i>
            <button @click="getBranches">
                Choose a path
            </button>
            <BranchSelectorModal v-if="openBranchSelector" @close-branches-modal="handleCloseModal"
                :branches="story.branches" />
        </div>
        <div class="story-footer" v-else>
            <i>The story line ends here</i>
        </div>
    </div>
</template>

<style scoped>
.story-content {
    max-width: 720px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
}

.branch-selector,
.story-footer {
    margin-top: 20px;
    text-align: right;
}
</style>