<template>
  <!-- <div class="sidebar col-2"> -->
  <!-- <h1>會員中心</h1> -->
  <ul>
    <li v-for="list in memberMenu" :key="list.title">
      <router-link :to="{ name: list.link }">{{ list.title }}</router-link>
    </li>
  </ul>
  <!-- </div> -->
</template>
<script>
import MemberMenu from "../mixins/memberMenu.js";
export default {
  name: "memberSideBar",
  mixins: [MemberMenu],
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/public/variables.scss";

ul {
  // border: 1px solid rebeccapurple;

  li {
    // border: 1px solid red;
    text-align: left;
    margin: 20px 0;
    a {
      border: 1px solid pink;
      display: inline-block;
      padding: 10px;
      width: 100%;
      color: $grey;
    }
  }
}
</style>