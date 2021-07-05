<template>
  <div class="popOutPage" v-if="popOut">
    <div class="popOutWrap">
      <i class="fas fa-times" @click="closePop"></i>
      <p v-html="propMsg" class="popMsg" :class="{ oneLine: popClass }"></p>
      <div v-if="showBtns">
        <button class="popMsg cancel" @click="closePop">取消</button>
        <button class="popMsg first" @click="submitYes">確認</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["propMsg", "popOut", "showBtns", "popClass"],
  data() {
    return {};
  },
  methods: {
    closePop() {
      this.$emit("close", false);
    },
    submitYes() {
      this.$emit("submit", "yes");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/public/scss/_popOut.scss";
</style>