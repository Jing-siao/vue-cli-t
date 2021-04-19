<template>
  <div class="popOutPage" v-if="popOut">
    <div class="popOutWrap">
      <i class="fas fa-times" @click="closePop"></i>
      <p v-html="propMsg" class="popMsg"></p>
      <button class="popMsg first" v-if="goRecordBtn" @click="goRecordPage">
        查詢兌換紀錄
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["propMsg", "popOut", "goRecordBtn"],
  // props: ["propMsg"],
  data() {
    return {
      // popOut: false,
      // goRecordBtn: false,
    };
  },
  methods: {
    closePop() {
      this.$emit("close", false);
    },
    goRecordPage() {
      this.$router.push("/member/exchangeRecord");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/public/scss/_popOut.scss";
</style>