// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import StoryContent from '../components/StoryContent.vue'
import ExploreStory from '../components/ExploreStory.vue'
import CreateStory from '../components/CreateStory.vue'
import ViewBranch from '../components/ViewBranch.vue'
import ViewBranchRequest from '../components/ViewBranchRequest.vue'
import CreateBranchPage from '../components/CreateBranchPage.vue'
import RandomStory from '../components/RandomStory.vue'
import BranchRequestStory from '../components/BranchRequestStory.vue'
import StoryTree from '../components/StoryTree.vue'
import Login from '../components/Login.vue'

import { useStoryStore } from '../stores/story'
import About from '../components/About.vue'

const routes = [
    {
        path: '/',
        name: 'random_story_page',
        component: RandomStory
    },
    {
        path: '/specific',
        name: 'story_page',
        component: StoryContent
    },
    {
        path: '/explore',
        name: 'explore_story_page',
        component: ExploreStory
    },
    {
        path: '/create',
        name: 'create_story_page',
        component: CreateStory
    },
    {
        path: '/view-branch',
        name: 'view_branch_page',
        component: ViewBranch
    },
    {
        path: '/view-branch-req',
        name: 'view-branch-req-page',
        component: ViewBranchRequest
    },
    {
        path: '/create-branch-req',
        name: 'create_branch_page',
        component: CreateBranchPage
    },
    {
        path: '/view-branch-req-story',
        name: 'review_branch_req_story',
        component: BranchRequestStory
    },
    {
        path: '/see-story-tree',
        name: 'view_story_tree',
        component: StoryTree
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const storyStore = useStoryStore()

    if (to.name === 'view_branch_page' && !storyStore.story) {
        return next({ name: 'explore_story_page' })
    }
    if (to.name === 'view-branch-req-page' && !storyStore.story) {
        return next({ name: 'explore_story_page' })
    }
    if (to.name === 'view_branch_page' && !storyStore.story) {
        return next({ name: 'explore_story_page' })
    }
    if (to.name === 'create_branch_page' && !storyStore.story) {
        return next({ name: 'explore_story_page' })
    }
    if (to.name === 'review_branch_req_story' && !storyStore.story) {
        return next({ name: 'explore_story_page' })
    }

    next()
})

export default router
