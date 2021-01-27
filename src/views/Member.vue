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
.member {
  // border: 1px solid rgb(230, 43, 43);
  width: 92%;
  margin: auto;
  @include hederFixed();

  .main {
    // border: 1px solid white;
    background: $grey;
    margin: 40px 0 20px 0;
    padding: 15px;
    border-radius: 1.5rem;
    .content {
      border: 1px solid rgb(138, 138, 138);
    }
  }
}
@media (min-width: 1141px) {
  .content {
    width: 85%;
    padding-top: 35px;
  }
}
@media (max-width: 1140px) {
  .content {
    width: 100%;
  }
}
@media (min-width: 577px) {
  .main {
    min-height: calc(100vh - 249px);
  }
}
@media (max-width: 576px) {
  .main {
    min-height: calc(100vh - 213px);
  }
}
</style>