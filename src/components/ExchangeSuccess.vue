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
            <h4>{{ name }}</h4>
            <p>有效期限:{{ expDt }}</p>
            <div class="barCodeWrap">
              <barcode
                class="barCode"
                :value="barcodeValue"
                fontOptions="bold"
                :height="barcodeHeight"
                :width="barCodewidth"
                :textMargin="barcodeTextMargin"
                :fontSize="barcodeFontSize"
                :margin="barcodeMargin"
              ></barcode>

              <!-- <img src="../assets/img/barCode.png" alt="" /> -->
              <!-- <input v-model="barcodeValue" /><br /> -->
            </div>
          </div>
        </div>
      </div>
      <div class="btns row">
        <a class="col" v-if="saveBtn">
          <button class="first" @click="generatorImage">保存截圖</button>
        </a>
        <router-link class="col" :to="{ name: 'Member-ExchangeRecord' }" v-else>
          <button class="first">
            <i class="fas fa-search"></i>
            查詢兌換紀錄
          </button>
        </router-link>
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
import $ from "jquery";
import VueBarcode from "vue-barcode";
export default {
  components: {
    barcode: VueBarcode,
  },
  data() {
    return {
      name: "",
      barcodeValue: "",
      saveBtn: true,
      barcodeHeight: 45,
      barCodewidth: 1.6,
      barcodeTextMargin: 1,
      barcodeFontSize: 14,
      barcodeMargin: 5,
      expDt: "",
      window: {
        width: 0,
      },
    };
  },
  methods: {
    generatorImage() {
      let w = window.innerWidth;
      var vp = $("#viewportMeta").attr("content");
      $("#viewportMeta").attr("content", `width=${w}`);
      let capture = this.$refs.capture;
      capture.scrollLeft = 0;
      capture.scrollTop = 0;
      html2canvas(capture, {
        width: $("#capture").width(),
        height: $("#capture").height(),
        useCORS: true,
      })
        .then((canvas) => {
          this.$refs.addImage.append(canvas);
          // 通過a標籤下載
          let link = document.createElement("a");
          link.href = canvas.toDataURL();
          link.setAttribute("download", `${Date.now()}.png`);
          link.click();
        })
        .then(() => {
          $("#viewportMeta").attr("content", vp);
        });
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.width < 800 ? (this.saveBtn = false) : (this.saveBtn = true);
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    this.name = sessionStorage.getItem("ptypeName");
    this.barcodeValue = sessionStorage.getItem("serial");
    let expDt = sessionStorage.getItem("expDt");
    expDt ? (this.expDt = expDt) : (this.expDt = "無期限");
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
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