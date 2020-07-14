import Vue from 'vue'
import Router from 'vue-router'
import Intro from '@/views/Intro'
import Projects from '@/views/Projects'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Intro',
            component: Intro
        },
        {
            path: '/projects', 
            name: 'projects',
            component: Projects
        }
    ]
})