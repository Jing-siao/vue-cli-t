<template>
  <div class="member">
    <div class="main row">
      <MemberSideBar />
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import MemberSideBar from "../components/MemberSideBar.vue";
export default {
  name: "member",
  components: { MemberSideBar },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/public/main.scss";
.member {
  // border: 1px solid black;
  min-height: calc(100vh - 229px);
  background: $grey;
  border-radius: 50px;
  overflow: hidden;
  width: 92%;
  margin: 40px auto;
  .main {
    // border: 1px solid black;
    margin: 10px 0;
    padding: 15px;
    .sidebar {
      border: 1px solid rebeccapurple;
    }
    .content {
      border: 1px solid rebeccapurple;
    }
  }
}
@media (min-width: 1141px) {
  .content {
    width: 85%;
  }
}
@media (max-width: 1140px) {
  .content {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .main {
    min-height: calc(100vh - 193px);
  }
}
</style>