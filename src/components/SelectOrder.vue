<template>
  <div class="col orderBy">
    <div class="icon">
      <!-- @click="showSelect = !showSelect" -->
      <i class="fas fa-sort-amount-down"></i>
      <p>排序</p>
    </div>
    <select name="" id="">
      <!-- v-show="showSelect" -->
      <option value="">全部</option>
      <option value="">依熱門</option>
      <option value="">依點數(少到多)</option>
      <option value="">依點數(多到少)</option>
    </select>
  </div>
</template>
<script>
export default {
  name: "selectOrder",
  data() {
    return {
      // showSelect: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/public/variables.scss";

div.orderBy {
  text-align: right;
  // border: 1px solid rgb(247, 68, 68);
  padding-right: 0;
  margin-top: 20px;
  // position: relative;
  .icon {
    // border: 1px solid rgb(247, 68, 68);
    display: inline-block;
    padding: 0 8px;
    margin-right: 0;
    cursor: pointer;
    i {
      color: $grey;
      padding: 5px;
    }
    p {
      display: inline-block;
      color: $grey;
    }
  }
  select {
    padding: 5px;
    outline: none;
    // position: absolute;
    top: 30px;
    right: 0;
    background: $grey;
    border-radius: 0.3rem;
    color: $darkgrey;
    font-size: 1rem;
  }
}
</style>