import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: "intro",
            component: () => import('@/views/Intro.vue')
        },
        {
            path: '/projects', 
            name: 'projects',
            component: () => import('@/views/Projects.vue')
        },
        {
            path: '/resume',
            name: 'resume',
            component: () => import('@/views/Resume.vue')
        }
            
    ]
})