<script setup>
const emit = defineEmits(['close-branches-modal']);

const closeModal = () => {
    emit('close-branches-modal');
};

defineProps({
    branches: {
        type: Array,
        required: true
    }
});

const selectBranch = (branch) => {
    // emit('branch-selected', branch);
    // closeModal();

    console.log('Selected branch:', branch);
};


</script>

<template>
    <div class="branch-selector-modal">
        <div>
            <h2>Select a Branch</h2>
            <li v-for="branch in branches" :key="branch.id">
                <button @click="selectBranch(branch)">{{ branch.title }}</button>
            </li>
            <button @click="closeModal">Close</button>
        </div>
    </div>
</template>

<style scoped>
.branch-selector-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
}

.branch-selector-modal>div {
    background: var(--card-bg, #23272f);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>