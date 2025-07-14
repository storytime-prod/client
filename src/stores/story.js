import { defineStore } from 'pinia'

export const useStoryStore = defineStore('story', {
    state: () => ({
        story: null
    }),
    actions: {
        setStory(newStory) {
            this.story = newStory
        }
    }
})