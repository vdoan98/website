<template>
    <div>
        <Nav/>
        <div>
            <h1>PROJECTS</h1>
            <ul>
                <li v-for="project in projects" :key="project.title">
                    <Project v-bind:project="project"/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Project from '@/components/Project.vue';

export default {
    name: 'Projects',
    components: {
        Nav,
        Project
    },
    mounted(){
        this.getProjectDetails()
        console.log(this.projects)
    },
    data: function(){
        return {
            fakeData: [
                {
                    'title': 'Fyyur Web Application',
                    'image': '#',
                    'link': 'https://github.com/vdoan98/fyyur/tree/master/projects/01_fyyur/starter_code',
                    'description': 'Fyyur is a web application for artists and venues to advertise and book events.',
                    'tech_stack': [
                        'Python',
                        'JavaScript',
                        'PostgreSQL'
                    ]
                },
                {
                    'title': 'Trivia API',
                    'image': '#',
                    'link': 'https://github.com/vdoan98/fyyur/tree/master/projects/02_trivia_api/starter',
                    'description': 'Trivia API is a web application for playing and creating trivia quizzes.',
                    'tech_stack': [
                        'Python',
                        'JavaScript',
                        'PostgreSQL'
                    ]
                }
            ],
            projects: []
        }
    },
    methods: {
        getProject: function(){
            var i
            this.projects = []
            for (i = 0; i < this.fakeData.length; i++){
                var project = {}
                project['title'] = this.fakeData[i]['title']
                project['image'] = this.fakeData[i]['image']
                project['link'] = this.fakeData[i]['link']
                project['description'] = this.fakeData[i]['description']

                this.projects.push(project)
            }
            console.log(this.projects)
        },
        getProjectDetails: function(){
            var i 
            this.projects = []
            for (i = 0; i < this.fakeData.length; i++){
                var project = {}
                project['title'] = this.fakeData[i]['title']
                project['image'] = this.fakeData[i]['image']
                project['link'] = this.fakeData[i]['link']
                project['description'] = this.fakeData[i]['description']
                project['tech_stack'] = this.fakeData[i]['tech_stack']

                this.projects.push(project)
            }
            //console.log(this.projects)
        },
        filter_by_stack: function(stack_name){
            var i
            this.projects = []
            for (i =0; i < this.fakeData.length; i++){
                if (stack_name in this.fakeData[i]['tech_stack']){
                    this.projects.push(this.fakeData[i])
                }
            }

        }
    }
}
</script>

<style scoped>
li{
    list-style: none;
}
</style>