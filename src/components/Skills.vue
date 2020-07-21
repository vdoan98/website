<template>
    <div>
        <b-container fluid>
            <h2>Skills</h2>
            <b-row>
                <b-col cols="6">
                    <ul>
                        <li v-for="skill in skills" :key="skill.skill">{{skill.skill}}</li>
                    </ul>
                </b-col>
                <b-col cols="6">
                    <ul>
                    <li v-for="skill in skills" :key="skill.skill" :n="skill.rate"></li>
                </ul>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{
            skills: [{
                    'skill': 'Java',
                    'rate': 3},
                {
                    'skill': 'JavaScript',
                    'rate': 3
                },
                {
                    'skill':'Python',
                    'rate': 3
                },
                {
                    'skill': 'HTML',
                    'rate': 3
                },
                {
                    'skill': 'CSS',
                    'rate': 3
                },
                {
                    'skill': 'SQL',
                    'rate': 3
                },
                {
                    'skill': 'Machine Learning',
                    'rate': 2
                },
                {
                    'skill': 'Data Mining',
                    'rate': 2
                },
                {
                    'skill': 'Unit Testing',
                    'rate': 3
                },
                {
                    'skill': 'Vietnamese',
                    'rate': 3
                }]
        }
    },
    methods: {
        rating: function(){

        }
    } 
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

div{
    max-width: 100vw;
}
li{
    list-style: none;
}
li {
    display:block;
}
li[n="1"]:before {
   content: "★☆☆☆☆";
}

li[n="2"]:before {
   content: "★★☆☆☆";
}

li[n="3"]:before {
   content: "★★★☆☆";
}

li[n="4"]:before {
   content: "★★★★☆";
}

li[n="5"]:before {
   content: "★★★★★";
}

</style>