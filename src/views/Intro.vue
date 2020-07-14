<template>
  <div>
    <div class="container">
      <video loop muted autoplay id='intro-video'>
        <source src="@/assets/intro.mp4" type="video/mp4">
      </video>
      <div class="overlay css-typing">
        <h1>HELLO!</h1>
        <h4>Scroll down or view <router-link to="resume" style="color:#ca9cf0;">my resume</router-link></h4>
      </div>
    </div>
    <Biography/>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import Biography from '@/components/Biography.vue';

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

export default {
  name: 'Intro',
  components: {
    Biography
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Bungee&family=Monoton&display=swap');

html, body {
  padding:0;
  margin:0;
}
.container {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
}
.container video {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
}
.overlay {
    margin: 0 auto;
    max-width: 600px;
    position: relative;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
  
}


.css-typing h1, h4{
  border-right: .15em solid orange;
  font-family: "Courier";
  color: Lavender;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
}
.css-typing h1 {
  font-size: 50px;
  width: 4.5em;
  -webkit-animation: type 2s steps(40, end);
  animation: type 2s steps(40, end);
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

.css-typing h4 {
  font-size: 20px;
  width: 20em;
  opacity: 0;
  -webkit-animation: type2 2s steps(40, end);
  animation: type2 2s steps(40, end);
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}

@keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    border: none;
  }
}

@-webkit-keyframes type {
  0% {
    width: 0;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    border: none;
  }
}

@keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@-webkit-keyframes type2 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  99.9% {
    border-right: .15em solid orange;
  }
  100% {
    opacity: 1;
    border: none;
  }
}

@keyframes type3 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes type3 {
  0% {
    width: 0;
  }
  1% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}
@-webkit-keyframes blink {
  50% {
    border-color: tranparent;
  }
}
</style>
