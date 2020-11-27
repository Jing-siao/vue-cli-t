<template>
  <div class="member container">
    <div class="main row">
      <div class="sidebar">
        <MemberSideBar />
      </div>
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
.member {
  // border: 1px solid black;
  margin-top: 20px;
  min-height: calc(100vh - 229px);

  .main {
    border: 1px solid black;
    .sidebar {
      border: 1px solid rebeccapurple;
    }
    .content {
      border: 1px solid rebeccapurple;
    }
  }
}
@media (min-width: 1141px) {
  .sidebar {
    width: 15%;
  }
  .content {
    width: 85%;
  }
}
@media (max-width: 1140px) {
  .sidebar {
    display: none;
  }
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