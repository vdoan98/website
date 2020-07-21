<template>
<div class="container">
    <b-container >
        <b-row id="name">
            <h4>VY DOAN</h4>
            <h5>Full Stack Developer</h5>
        </b-row>
        <b-row>
            <b-col class="profile">
                <img style="height: 240px; width: 240px;" src="@/assets/profile-pic.jpg" class="rounded-circle"  alt="Cinque Terre">
            </b-col>
            <b-col class="">
                <p>I am passionate about beautiful user friendly web application. My philosophy is based on pleasure. I want to create web application that are not only useful but pleasurable to use. </p>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

export default{};
</script>

<style>
.container{
    position: absolute;
    justify-content: center;
    align-items: center;
    max-height: 100vh;
    min-width: 100vw;
    min-height: 100vh;
}
h4 {
    font-size: 250%;
}
h5 {
    font-size: 130%;
}
#name{
    margin: 100px;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    display: block;
}
#profile{
    margin: 50px;
}

div {
  word-wrap: break-word;
}
</style>
