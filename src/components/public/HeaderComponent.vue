<template>
  <!-- 有下拉選單用slot  -->
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
            <router-link
              :to="item.link"
              v-for="(item, index) in menu"
              :key="index.title"
              @click.native="closeMenu"
            >
              <li>
                {{ item.title }}
              </li>
            </router-link>
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
      // menuList: false,
      menu: [
        {
          title: "活動辦法",
          link: "activity",
        },
        {
          title: "兌換專區",
          link: "bonus",
        },
        {
          title: "常見問題",
          link: "question",
        },
        {
          title: "會員專區",
          link: "member",
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
    };
  },
  methods: {
    active() {
      // $("button.hamburger").toggleClass("is-active");
      this.isActive["is-active"] = !this.isActive["is-active"];
      $(".menu").slideToggle();
      // this.active = !this.active;
    },
    closeMenu() {
      this.isActive["is-active"] = false;
      $(".menu").hide();
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
// @import "../../assets/public/main.scss";
@import "../../assets/scss/header.scss";
</style>