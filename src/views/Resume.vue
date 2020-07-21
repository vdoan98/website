<template>
<div>
    <Nav/>
    <b-container fluid>
        <b-row class="container">
        <b-col class="col-sm" id="resume">
            <h2 class="white-container">Vy Doan</h2>
            <h5 class="white-container">Relevant Experience</h5>
            <div>
                <h6 ><a href="https://www.unl.edu/" class="link-work">University of Nebraska-Lincoln</a></h6>
                <p>SOFTWARE DEVELOPER | Sept 2019 - May 2020</p>
                <ul>
                    <li>Developed web application for real-time assessments of invasive species impacts to inform conservation policy and improve environmental outcomes</li>
                    <li>Elicited application requirements, designed mock-ups, and application prototypes to optimize the user experience</li>
                    <li>Designed and developed an intuitive user-friendly web interface that aids in conveying desired information in a visually appealing way</li>
                </ul>
                
                <h6 ><a href="https://www.unl.edu/" class="link-work">University of Nebraska-Lincoln</a></h6>
                <p>UNDERGRADUATE TEACHING ASSSISTANCE | Aug 2018 - Dec 2019</p>
                <ul>
                    <li>Assisted students in Discrete Mathematics in course materials to increase student performance and major retention</li>
                </ul>

                <h6><a href="https://www.unl.edu/" class="link-work">University of Nebraska-Lincoln</a></h6> 
                <p>UNDERGRADUATE RESEARCHER | Jan 2018 - Aug 2019</p>
                <ul>
                    <li>Conducted research in Machine Learning to find a state-of-the-art solution to the propagation of fake and unreliable news on social media, funded by UCARE</li>
                    <li>Gathered and analyzed data from Twitter; implemented state-of-the-art feature extraction and feature modeling on data</li>
                </ul>
            </div>
            <h5 class="white-container">Projects</h5>
            <div>
                <h6><a href="https://github.com/vdoan98/fyyur/tree/master/projects/01_fyyur/starter_code" class="link-work">FYYUR WEB APPLICATION</a></h6>
                <ul>
                    <li>Implemented Postgres database for web application using Flask-SQLAlchemy</li>
                    <li>Performed CRUD operations on the database and implemented functions that interact with the database</li>
                </ul>

                <h6><a href="https://github.com/vdoan98/fyyur/tree/master/projects/02_trivia_api/starter" class="link-work">TRIVIA WEB APPLICATION</a></h6>
                <ul>
                    <li>Implemented API endpoints and functions for web application following test-driven development standard</li>
                    <li>Wrote API and project documentation on API purpose and instruction for sending requests and parsing responses</li> 
                </ul>

                <h6><a href="https://github.com/vdoan98/fyyur/tree/master/projects/03_coffee_shop_full_stack/starter_code" class="link-work">COFFEE SHOP FULLSTACK APPLICATION</a></h6>
                <ul>
                    
                </ul>
            </div>
            <h3> </h3>
        </b-col>
        <b-col class="col-sm" id="contact">
            <div>
                <h5>CONTACT ME</h5>
                <p><a href="vydoan.work@gmail.com">Email</a></p>
                <p><a href="https://github.com/vdoan98">Github</a></p>
                <p><a href="www.linkedin.com/in/vy-doan-b2213811a">LinkedIn</a></p>
                <b-button style="color:#ca9cf0;"><a href="../../assets/Resume.pdf" download>Download Resume</a></b-button>
            </div>
        </b-col> 
        </b-row>
    </b-container>

</div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Nav from '@/components/Nav.vue';

export default {
    name: 'Resume',
    components: {
        Nav
    }
};
</script>


<style>


#resume{
    margin: 10px;
    padding: 10px;
    background: #479e93;
    border-radius: 25px;
}

#contact{
    margin: 10px;
    padding: 10px;
}

.container{
    display:flex;
}

.link-work{
    color: Lavender;
}

.white-container{
    background-color: Lavender;
    padding: 10px;
    border-radius: 25px;
}
#email:after{
    content: 'Email';
}
#email:hover:after{
    content:'vydoan.work@gmail.com';
}
</style>