<template>
  <router-link class="card" :to="'/bonus/' + data.guid">
    <!-- { name: 'BonusDetail', params: { guid: data.guid } } -->
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
      <button class="first" @click.prevent="exchange">立即兌換</button>
    </div>
  </router-link>
</template>
<script>
import exchange from "../mixins/exchange.js";
export default {
  name: "fourCard",
  props: ["data"],
  mixins: [exchange],
  data() {
    return {};
  },
  computed: {},
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/fourCard.scss";
</style>