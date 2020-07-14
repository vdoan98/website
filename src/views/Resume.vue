<template>
<div>
    <b-container fluid>
        <b-row>
        <b-col cols="8">
            <h1>Vy Doan</h1>
            <h3>Relevant Experience</h3>
            <div>
                <h4><a href="#">University of Nebraska-Lincoln</a></h4>
                <p>SOFTWARE DEVELOPER | Sept 2019 - May 2020</p>
                <ul>
                    <li>Developed web application for real-time assessments of invasive species impacts to inform conservation policy and improve environmental outcomes</li>
                    <li>Elicited application requirements, designed mock-ups, and application prototypes to optimize the user experience</li>
                    <li>Designed and developed an intuitive user-friendly web interface that aids in conveying desired information in a visually appealing way</li>
                </ul>
                
                <h4><a href="#">University of Nebraska-Lincoln</a></h4>
                <p>UNDERGRADUATE TEACHING ASSSISTANCE | Aug 2018 - Dec 2019</p>
                <ul>
                    <li>Assisted students in Discrete Mathematics in course materials to increase student performance and major retention</li>
                </ul>

                <h4><a href="#">University of Nebraska-Lincoln</a></h4> 
                <p>UNDERGRADUATE RESEARCHER | Jan 2018 - Aug 2019</p>
                <ul>
                    <li>Conducted research in Machine Learning to find a state-of-the-art solution to the propagation of fake and unreliable news on social media, funded by UCARE</li>
                    <li>Gathered and analyzed data from Twitter; implemented state-of-the-art feature extraction and feature modeling on data</li>
                </ul>
            </div>
            <h3>Projects</h3>
            <div>
                <h4>FYYUR WEB APPLICATION</h4>
                <ul>
                    <li>Implemented Postgres database for web application using Flask-SQLAlchemy</li>
                    <li>Performed CRUD operations on the database and implemented functions that interact with the database</li>
                </ul>

                <h4>TRIVIA WEB APPLICATION</h4>
                <ul>
                    <li>Implemented API endpoints and functions for web application following test-driven development standard</li>
                    <li>Wrote API and project documentation on API purpose and instruction for sending requests and parsing responses</li> 
                </ul>
            </div>
            <h3> </h3>
        </b-col>
        <b-col>
            Download
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

export default {};
</script>