// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import StoryContent from '../components/StoryContent.vue'
import ExploreStory from '../components/ExploreStory.vue'
import CreateStory from '../components/CreateStory.vue'
import ViewBranch from '../components/ViewBranch.vue'
import ViewBranchRequest from '../components/ViewBranchRequest.vue'
import CreateBranchPage from '../components/CreateBranchPage.vue'

const routes = [
    {
        path: '/',
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
