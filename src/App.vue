<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from "@/components/public/HeaderComponent.vue";
import FooterComponent from "@/components/public/FooterComponent.vue";

export default {
  name: "App",
  data() {
    return {
      // title: "Hello Jing",
    };
  },
  components: {
    // HelloWorld,
    HeaderComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss">
@import "./assets/public/reset.css";
@import "./assets/public/bootstrap-grid.min.css";
@import "./assets/public/hamburgers.css";
// @import "./assets/public/main.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
