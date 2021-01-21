<template>
  <div class="sidebar">
    <div class="point">
      <h4>點數查詢</h4>
      <ul>
        <li v-for="list in memberPointMenu" :key="list.title">
          <router-link :to="{ name: list.link }">
            <i class="fas fa-angle-right"></i>
            <p>{{ list.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="account">
      <h4>會員設定</h4>
      <ul>
        <li v-for="list in memberAccountMenu" :key="list.title">
          <router-link :to="{ name: list.link }">
            <i class="fas fa-angle-right"></i>
            <p>{{ list.title }}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
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
ul {
  // border: 1px solid rebeccapurple;

  li {
    // border: 1px solid red;
    text-align: left;
    margin: 5px 0;
    a {
      // border: 1px solid rgb(92, 37, 194);
      display: inline-block;
      padding: 5px 8px;
      // width: 100%;
      color: $darkgrey;
      i {
        display: none;
        line-height: 25px;
      }
      p {
        display: inline-block;
      }
      &:hover > i {
        display: inline-block;
      }
      &.router-link-exact-active > i {
        display: inline-block;
      }
    }
  }
}
.account {
  margin-top: 10px;
  // border: 1px solid blue;
}
@media (min-width: 1141px) {
  .sidebar {
    width: 15%;
  }
}
@media (max-width: 1140px) {
  .sidebar {
    display: none;
  }
}
</style>