<template>
  <div class="exchangeSuccess">
    <div class="container main">
      <div ref="addImage" class="addImage"></div>
      <div ref="capture" class="capture">
        <h1>
          <i class="fas fa-gift"></i>
          恭喜，兌換成功
        </h1>
        <div>
          <div class="imgWrap">
            <img
              src="../assets/img/ad/2A22B5C4015A4A84A18349C2B0639A42.jpg"
              alt=""
            />
          </div>
          <div class="wrap">
            <h4>標題標題標題標題標題標題標題標題標題標題標題標題</h4>
            <div class="barCodeWrap">
              <img src="../assets/img/barCode.png" alt="" />
              <p>1234568972312345</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btns row">
        <a class="col">
          <button class="first" @click="generatorImage">保存截圖</button>
        </a>
        <router-link class="col" :to="{ name: 'Bonus' }">
          <button class="first">
            <i class="fas fa-shopping-bag"></i>
            繼續兌換
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import html2canvas from "html2canvas";
// import VueHtml2Canvas from "vue-html2canvas";
export default {
  data() {
    return {};
  },
  methods: {
    generatorImage() {
      let capture = this.$refs.capture;
      capture.scrollTop = 0;
      html2canvas(capture, { useCORS: true }).then((canvas) => {
        this.$refs.addImage.append(canvas);
        // 通過a標籤下載
        let link = document.createElement("a");
        link.href = canvas.toDataURL();
        link.setAttribute("download", `${Date.now()}.png`);
        link.click();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/exchangeSuccess.scss";
.exchangeSuccess {
  @include hederFixed();
}
@media (min-width: 576px) {
  .exchangeSuccess {
    min-height: calc(100vh - 124px);
  }
}
@media (max-width: 575px) {
  .exchangeSuccess {
    min-height: calc(100vh - 88px);
  }
}
</style>