<template>

  <div id="app" class="scroller">

      <navbar />
      <router-view />
  </div>
    
</template>

<script>
import navbar from '@/components/Navbar'


export default {
  components: {
    navbar
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: "blogger";
  src: local("blogger"),
   url(assets/blogger-sans.ttf) format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  font-family: 'blogger', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background-color: #1f275b;
  height: 100%;

}

main {
  margin-top: 7em;
}

a:focus {
  outline: none;
}

a:active {
  outline: none;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #1a235a; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #161d48; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #161d48; 
}

.home__view {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
