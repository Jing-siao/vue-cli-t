<template>
  <div class="allPoint">
    <div class="memberName">
      <p class="name">
        <i class="fas fa-user-circle"></i>
        {{ userName }}
      </p>
      <p>你好</p>
    </div>
    <div class="row memberInfo">
      <div class="info">
        <h5>會員等級</h5>
        <p>一般會員</p>
      </div>
      <div class="info">
        <h5>積分</h5>
        <p>0</p>
      </div>
      <div class="info">
        <h5>積分到期日</h5>
        <p>2021-12-31</p>
      </div>
    </div>
    <div class="row point">
      <div class="col-md-3 valid">
        <p>
          <i class="fas fa-circle"></i>
        </p>
        <p>point</p>
      </div>
      <div class="col-md-3 valid">
        <p>有效點數</p>
        <p>40</p>
      </div>
      <div class="col-md-6 allExpireDate">
        <p>年度到期點數</p>
        <div class="expireDate">
          <p>20 (2020-12-31)</p>
          <p>20 (2020-12-31)</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";

export default {
  name: "allPoint",
  components: {},
  data() {
    return {
      userName: "國眾電腦",
    };
  },

  created() {},
  computed: {},
  watch: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/allPoint.scss";
// .allPoint {
//   border: 1px solid black;
// }
</style>