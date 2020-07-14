<template>
  <div class="container">
    <video loop muted autoplay id='intro-video'>
      <source src="@/assets/intro.mp4" type="video/mp4">
    </video>
    <Nav id="navigation"/>
    <div class="overlay">
      <h1>VY DOAN</h1>
      <h3>Interactive Resume</h3>
    </div>
  </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
  name: 'Intro',
  components: {
    'Nav': Nav
  },
  mounted: function(){
    this.playVideo();
  },
  methods: {
    playVideo: function(){
      document.getElementById('intro-video').play();
    }
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
  justify-content: center;
  align-items: center;
  max-height: 100vh;
}
.container video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
.overlay {
    margin: 0 auto;
    max-width: 600px;
    position: absolute;
    bottom: 40%;
}
h1, h3{
  font-family: 'Berkshire Swash', cursive;
  color: 'white';
  font-size: 200%;
}
#navigation{
  position: absolute;
}
</style>
