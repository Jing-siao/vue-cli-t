<template>
  <router-link
    class="card"
    :to="`/bonus/${type}/${currentPage}/${data.guid}`"
    @click="getPagesService(currentPage)"
  >
    <!-- { name: 'BonusDetail', params: { guid: data.guid } } -->
    <div class="imgWrap col-sm-12">
      <img src="https://picsum.photos/600/304" alt="" />
    </div>
    <div class="wrap">
      <h5>{{ data.name }}</h5>
      <div class="info">
        <p>剩餘數量:{{ data.qty }}</p>
        <p>{{ data.ptypeName }}:{{ data.cnt }}點</p>
      </div>
    </div>
    <!-- <div class="col">
      <button class="first" @click.prevent="exchange(data.guid)">
        立即兌換
      </button>
    </div> -->
  </router-link>
</template>
<script>
import exchange from "../mixins/exchange.js";
export default {
  name: "fourCard",
  props: ["data", "thisPage"],
  mixins: [exchange],
  data() {
    return {};
  },
  computed: {
    currentPage() {
      if (this.thisPage) {
        return this.thisPage;
      } else {
        return 0;
      }
    },
    type() {
      if (this.$route.params.type) {
        return this.$route.params.type;
      } else {
        return "hot";
      }
    },
  },
  methods: {
    getPagesService(page) {
      this.$emit("pageService", page);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/fourCard.scss";
</style>