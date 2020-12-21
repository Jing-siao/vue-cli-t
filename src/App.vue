<template>
  <div id="app">
    <HeaderComponent />
    <router-view />
    <FooterComponent />
  </div>
</template>
<script>
// import $ from "jquery";
import HeaderComponent from "@/components/public/HeaderComponent.vue";
import FooterComponent from "@/components/public/FooterComponent.vue";

export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    // HelloWorld,
    HeaderComponent,
    FooterComponent,
  },
  created() {
    // //測試有沒有抓到api
    // this.$http
    //   .get(`${process.env.VUE_APP_API}/auth/captcha`)
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    //增加環境變數 測試有沒有載到
    // console.log(process.env.VUE_APP_API);
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
