import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null
    }),
    actions: {
        setUser(newUser) {
            this.user = newUser
        },
        reset() {
            this.user = null
        }
    }
})