<template>
  <!-- 頁面滑到最上方 -->
  <button type="button" id="go_top" @click="toTop">
    <i class="fas fa-sort-up"></i>
    <!-- ↑ -->
  </button>
</template>

<script>
import $ from "jquery";
export default {
  name: "goTopBtn",
  methods: {
    toTop(e) {
      e.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        400
      );
    },
  },
};
</script>
<style lang="scss" >
#go_top {
  width: 35px;
  height: 35px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: black;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  z-index: 1;
  i {
    // border: 1px solid wheat;
    font-size: 18px;
    color: white;
  }
}
</style>