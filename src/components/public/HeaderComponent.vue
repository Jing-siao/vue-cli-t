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
            <router-link to="/" @click.native="closeMenu">
              <img src="../../assets/LEO-logo.png" alt="logo" />
            </router-link>
          </div>
          <ul class="menu">
            <li v-for="(item, index) in menu" :key="index.title">
              <router-link :to="{ name: item.link }" @click.native="closeMenu">
                {{ item.title }}
              </router-link>
            </li>
            <li class="memberList" @click.stop="showList">
              <!-- @mouseover="hover"
              @mouseleave="hoverOut"
              @click="showList" -->
              <router-link :to="{ name: memberList.link }">
                {{ memberList.title }}
                <i class="fas fa-angle-down"></i>
              </router-link>
              <div class="list">
                <div class="point">
                  <p id="toggleSearch" @click.stop="dropSearch">
                    點數查詢
                    <i class="fas fa-angle-down"></i>
                  </p>

                  <ul class="memberMenu searchMenu">
                    <li
                      v-for="list in memberPointMenu"
                      :key="list.title"
                      @click.stop="closeMenu"
                    >
                      <router-link :to="{ name: list.link }">
                        {{ list.title }}</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="account" @click.stop="dropAccount">
                  <p id="toggleAccount">
                    會員設定 <i class="fas fa-angle-down"></i>
                  </p>
                  <ul class="memberMenu accountMenu">
                    <li
                      v-for="list in memberAccountMenu"
                      :key="list.title"
                      @click.stop="closeMenu"
                    >
                      <router-link :to="{ name: list.link }">
                        {{ list.title }}</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <!-- <HeaderMemberSlot title="會員中心">
              <i class="fas fa-angle-down"></i
            ></HeaderMemberSlot> -->
          </ul>
          <div class="loginBtn">
            <router-link :to="{ name: 'Login' }" @click.native="closeMenu">
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
// import MemberSideBar from "../MemberSideBar.vue";
import MemberMenu from "../../mixins/memberMenu.js";
// import HeaderMemberSlot from "./HeaderMemberSlot.vue";
export default {
  name: "headerComponent",
  mixins: [MemberMenu],
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
      current: null,
      up: false,
      // showList: false,
      // menuList: false,
      // props: [MemberSideBar],
      menu: [
        {
          title: "活動辦法",
          link: "Activity",
        },
        {
          title: "兌換專區",
          link: "Bonus",
        },
        {
          title: "常見問題",
          link: "Question",
        },
        {
          title: "交通優惠",
          link: "Error",
        },
        {
          title: "卡友專區",
          link: "Error",
        },
      ],
      memberList: {
        title: "會員中心",
        link: "Member",
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
    // hover() {
    //   $(".list").stop().slideDown(400);
    // },

    // hoverOut() {
    //   $(".list").stop().slideUp(400);
    // },
    showList() {
      $(".list").slideToggle(400);
      $(".memberList>a>i").toggleClass("up");
    },
    dropSearch() {
      $(".searchMenu").slideToggle(400);
      $("#toggleSearch>i").toggleClass("up");
    },
    dropAccount() {
      $(".accountMenu").slideToggle(400);
      $("#toggleAccount>i").toggleClass("up");
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
    // function showList() {
    //   // $(".list").stop().slideUp(400);
    //   $(".memberList").click(function () {
    //     $(".list").stop().slideToggle(400);
    //   });
    // }
    // // rwd
    // // 一進來先判斷
    // if ($(window).width() <= 1140) {
    //   showList();
    // } else {
    //   $(".list").hide();
    // }
    // // resize再判斷一次
    // $(window).resize(function () {
    //   if ($(window).width() <= 1140) {
    //     showList();
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