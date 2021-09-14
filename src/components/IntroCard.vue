<template>
  <article class="card">
    <section class="intro">
      <h1>
        <span>Hola,</span>
        <span>Soy Esleyder Ordoñez,</span>
        <span>Desarrollador de Software.</span>
      </h1>
      <div class="links">
        <a href="https://github.com/esleyder1/" target="blank">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/esleyder-developer" target="blank">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="https://wa.link/hu76r3" target="blank">
          <i class="fab fa-whatsapp"></i>
        </a>
      </div>
    </section>

    <router-link to="/projects" class="link-to-projects">
      PROYECTOS
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'IntroCard',
}
</script>

<style lang="scss" scoped>
.colors {
  color: #1f275b;
  color: #463f88;
  color: #455ca6;
  color: #ffd691;
}
.card {
  //@errorbackground: linear-gradient(145deg, #31333a, #3a3d44);
  //box-shadow: 10px 10px 20px #31343a, -10px -10px 20px #3b3e46;
  padding: 2em;
  width: 80%;
  color: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .intro {
    h1 {
      font-size: 1.8em;
      display: flex;
      flex-direction: column;
    }
  }

  .links {
    display: flex;
    justify-content: space-evenly;
    margin: 2em 0;

    a {
      text-decoration: none;
      color: #ddd;

      // hashnode icon
      svg {
        width: 2em;

        .st0 {
          fill: none;
        }

        .st1 {
          fill-rule: evenodd;
          clip-rule: evenodd;
          fill: #dddddd;

          &:hover {
            fill: #2962ff;
            transition-duration: 250ms;
          }
        }
      }

      i:hover {
        color: #f8ce84;
        transition-duration: 250ms;
      }

      i {
        font-size: 2em;
        cursor: pointer;
      }
    }
  }

  .link-to-projects {
    border: 1px solid #455ca6;
    color: #455ca6;
    background-color: transparent;
    padding: 0.5em 1em;
    font-weight: 600;
    font-size: 1em;
    text-decoration: none;
    width: 100%;
    text-align: center;
    padding: 1em;
    border-radius: 4px;

    &:hover {
      background-color: #f8ce84;
      color: #363940;
      transition-duration: 300ms;
      border-color: #f8ce84;
    }

    i {
      margin-right: 0.5em;
    }
  }
}

@media (min-width: 43em) {
  .card {
    max-width: 70%;
    padding: 6em;

    .intro {
      height: 70%;
      width: 100%;
      display: flex;
      justify-content: space-between;

      h1 {
        height: 100%;
        font-size: 2em;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
    }

    .links {
      justify-content: space-between;
      flex-direction: column;
      margin-top: 0;
      margin-right: 0.5em;
      height: 100%;
    }

    .link-to-projects {
      width: 100%;
      margin-top: 2em;
    }
  }
}

@media (min-width: 64em) {
  .card {
    max-width: 45%;
  }
}
</style>
