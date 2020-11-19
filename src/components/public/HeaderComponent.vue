<template>
  <header>
    <div class="container-fluid">
      <div class="row header" v-cloak>
        <div class="col">
          <!-- 漢堡按鈕 -->
          <button
            class="hamburger hamburger--squeeze"
            type="button"
            @click="active"
            :class="isActive"
          >
            <!--  -->

            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
          <div id="logo">
            <router-link to="/">
              <img src="../../assets/LEO-logo.png" alt="logo" />
            </router-link>
          </div>
          <ul class="menu">
            <!-- VueSlideUpDown :active="active" -->
            <a :href="item.link" v-for="(item, index) in menu" :key="index">
              <li>
                {{ item.title }}
              </li>
            </a>
          </ul>
          <div class="member">
            <router-link :to="{ name: 'Login' }">
              <span>
                <i class="fas fa-user-circle"></i>
                <p>登入 / 註冊</p>
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template> 
<script>
import $ from "jquery";
export default {
  name: "headerComponent",
  data() {
    return {
      index: 0,
      menu: [
        {
          title: "活動辦法",
          link: "javascript:;",
        },
        {
          title: "兌換專區",
          link: "javascript:;",
        },
        {
          title: "常見問題",
          link: "javascript:;",
        },
        {
          title: "會員專區",
          link: "javascript:;",
        },
        {
          title: "卡友專區",
          link: "javascript:;",
        },
        {
          title: "交通優惠",
          link: "javascript:;",
        },
      ],
      isActive: {
        "is-active": false,
      },
      // active: true,
    };
  },
  methods: {
    active() {
      // $("button.hamburger").toggleClass("is-active");
      this.isActive["is-active"] = !this.isActive["is-active"];
      $(".menu").slideToggle();
      // this.active = !this.active;
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
// @import "../../assets/public/main.scss";
@import "../../assets/scss/header.scss";
</style>