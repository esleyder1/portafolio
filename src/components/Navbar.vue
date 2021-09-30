<template>
  <header id="header">
    <nav class="navbar">
      <figure>
        <router-link to="/">
          <img src="@/assets/logo.png" alt="LOGO" width="72px" height="72px" id="logo"/>
        </router-link>
      </figure>
      <i class="fas fa-bars" @click="openNav"></i>
      <ul :class="{ slideOpen: showNav, slideBack: !showNav }">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i>
            Inicio
          </router-link>
        </li>
        <li>
          <router-link to="/projects">
            <i class="fas fa-code-branch"></i>
            Proyectos
          </router-link>
        </li>
        <li>
          <router-link to="/articles">
            <i class="fas fa-scroll"></i>
            Blogs
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
// import { bus } from '../main'
export default {
  name: 'Navbar',
  data() {
    return {
      showNav: false
    }
  },
  methods: {
    openNav() {
      this.showNav = !this.showNav
      // bus.$emit('opened', this.showNav)
    }
  },
  watch: {
    $route: function() {
      this.showNav = false
    }
  }
}
</script>

<style lang="scss" scoped>
header {
      background-image: url(../assets/waves/wave.svg);
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    width: 100%;
    height: 9em;
    position: fixed;
    top: 0;

}
.navbar {
  position: fixed;
  top: 1em;
  left: 0;
  z-index: 2;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.8em;
  //background-color: #2a2b2f;
  padding: 0 1em;


  .fa-bars {
    font-size: 2em;
    color: #ddd;
    cursor: pointer;
  }

  figure {
    cursor: pointer;
  }
  img#logo {
    margin: 1em;
    top: 2px;
    position: relative;
  }

  ul {
    list-style-type: none;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    width: 100%;

    position: absolute;

    top: 4.8em;
    right: -100%;

    li {
      a {
        text-decoration: none;
        color: #eee;
        padding: 1em;
        cursor: pointer;
        border-radius: 4px;
        margin: .5em;
        transition: .5s;

        &.router-link-exact-active {
          color: #ffd691;
          text-decoration: none;
          //background-color: #2d3271;
        }

        &:hover {
          height: 100%;
          width: 100%;
          color: #ffd691;
        }

        i {
          margin-right: 0.5em;
        }
      }
    }
  }

  .slideOpen {
    transition-duration: 300ms;
    right: 0;
  }

  .slideBack {
    transition-duration: 300ms;
    right: -100%;
  }
}

@media (min-width: 43em) {
  .navbar {
    padding: 0 1em 0 2em;

    ul {
      list-style-type: none;
      justify-content: flex-end !important;

      position: relative !important;
      right: 0 !important;
      top: 0 !important;
    }

    .fa-bars {
      display: none;
    }
  }
}
</style>
