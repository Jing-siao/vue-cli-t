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
            <li v-for="(item, index) in menu" :key="index.title">
              <router-link :to="item.link" @click.native="closeMenu">
                {{ item.title }}
              </router-link>
            </li>
            <li
              class="memberList"
              @mouseover="hover"
              @mouseleave="hoverOut"
              @click="showList"
            >
              <!-- @mouseover="hover"
              @mouseleave="hoverOut"
              @click="showList" -->
              <router-link :to="memberList.link">
                {{ memberList.title }}
                <i class="fas fa-angle-down"></i>
              </router-link>
              <div class="list" @click.stop="closeMenu">
                <ul>
                  <li>點數總覽</li>
                  <li>個人資料</li>
                  <li>變更登入密碼</li>
                  <li>其他金融卡設定</li>
                  <li>會員註銷</li>
                </ul>
              </div>
            </li>
            <!-- <HeaderMemberSlot title="會員中心">
              <i class="fas fa-angle-down"></i
            ></HeaderMemberSlot> -->
          </ul>
          <div class="loginBtn">
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

// import HeaderMemberSlot from "./HeaderMemberSlot.vue";
export default {
  name: "headerComponent",
  components: {
    // HeaderMemberSlot,
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      index: 0,
      // showList: false,
      // menuList: false,
      // props: [HeaderMemberSlot],
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
          title: "交通優惠",
          link: "javascript:;",
        },
        {
          title: "卡友專區",
          link: "javascript:;",
        },
      ],
      memberList: {
        title: "會員中心",
        link: "member",
      },

      isActive: {
        "is-active": false,
      },
    };
  },
  // template: {
  //   HeaderMemberSlot,
  // },
  template: `
  <li>
    會員中心
  </li>`,

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
    hover() {
      $(".list").stop().slideDown(1000);
    },

    hoverOut() {
      $(".list").stop().slideUp(400);
    },
    showList() {
      $(".list").slideToggle(400);
    },
  },
  created() {
    //   // window.addEventListener();
    //   if (this.window.width <= 1140) {
    //     this.slideList();
    //   } else {
    //     this.hover();
    //     this.hoverOut();
    //   }
  },
  mounted() {
    // // rwd
    // // 一進來先判斷
    // if ($(window).width() <= 1140) {
    //   // this.hover();
    //   // this.hoverOut();
    //   // $(".list").show();
    //   $(".list").hide();
    //   $(".memberList").click(function () {
    //     $(".list").stop().slideToggle(400);
    //   });
    // } else {
    //   $(".list").hide();
    // }
    // // resize再判斷一次
    // $(window).resize(function () {
    //   if ($(window).width() <= 1140) {
    //     // $(".list").show();
    //     $(".list").hide();
    //     $(".memberList").click(function () {
    //       $(".list").stop().slideToggle(400);
    //     });
    //   } else {
    //     $(".list").hide();
    //   }
    // });
  },
};
</script>
<style lang="scss" scoped>
// @import "../../assets/public/main.scss";
@import "../../assets/scss/header.scss";
</style>