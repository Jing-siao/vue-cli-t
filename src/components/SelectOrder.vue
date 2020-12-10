<template>
  <div class="col orderBy">
    <div class="icon">
      <!-- @click="showSelect = !showSelect" -->
      <i class="fas fa-sort-amount-down"></i>
      <p>排序</p>
    </div>
    <select name="" id="">
      <!-- v-show="showSelect" -->
      <option value="all">全部</option>
      <option value="hot">依熱門</option>
      <option value="less">依點數(少到多)</option>
      <option value="more">依點數(多到少)</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "selectOrder",
  data() {
    return {
      // showSelect: true,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/selectOrder.scss";
</style>