<template>
  <a class="card" :href="data.link">
    <div class="imgWrap col-sm-12">
      <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
    </div>
    <div class="wrap">
      <h5>{{ data.name }}</h5>
      <div class="info">
        <p>剩餘數量:{{ data.qty }}</p>
        <p>{{ data.ptypeName }}:{{ data.cnt }}點</p>
      </div>
    </div>
    <div class="col">
      <button class="first">立即兌換</button>
    </div>
  </a>
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