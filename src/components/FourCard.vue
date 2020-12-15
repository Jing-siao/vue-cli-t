<template>
  <!-- <div class="row"> -->
  <a class="card" :href="data.link">
    <!--:href="data.link" v-for="item in filterData"
      :key="item.title"
      :data="item" :type="item.type" -->
    <div class="imgWrap col-sm-12">
      <img :src="data.src" alt="" />
    </div>
    <div class="wrap">
      <h5>{{ data.title }}</h5>
      <div class="info">
        <p>剩餘數量:{{ data.total }}</p>
        <p>兌換上限:{{ data.limit }}</p>
        <p>point:{{ data.point }}點</p>
      </div>
    </div>
  </a>
  <!-- </div> -->
</template>
<script>
export default {
  name: "fourCard",
  props: ["data"],
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/fourCard.scss";
</style>