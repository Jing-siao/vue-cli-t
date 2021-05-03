<template>
  <div class="dePosit">
    <div class="dePositWrap col-12 col-sm-9 col-md-8 col-lg-6" v-if="showInput">
      <div class="row">
        <label for="" class="col-sm-2">儲值序號</label>
        <input type="text" class="col-sm-5 col-8" v-model="result" />
        <button class="first scan" @click="showScan" v-if="showScanBtn">
          <i class="fas fa-qrcode"></i>
          掃描
        </button>
      </div>
      <p class="warning">{{ error }}</p>
      <div class="row">
        <button class="first">確認</button>
      </div>
    </div>
    <div
      :class="{ qrcodeWrap: isQrcodeWrap }"
      class="col-12 col-sm-8 col-md-7 col-lg-6"
    >
      <qrcode-stream
        @decode="onDecode"
        @init="onInit"
        :track="paintOutline"
        v-if="showQrcode"
      >
        <div class="qrcodeSquare">
          <span class="topRight"></span>
          <span class="leftBottom"></span>
        </div>
        <div class="qrcodeOverlay"></div>
      </qrcode-stream>
    </div>
    <div class="btns" v-if="showBtn">
      <button class="first" @click="dePositWrap">手動輸入</button>
    </div>
  </div>
</template>
<script>
// import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { QrcodeStream } from "vue-qrcode-reader";
export default {
  components: {
    QrcodeStream,
    // QrcodeDropZone,
    // QrcodeCapture,
  },
  data() {
    return {
      result: null,
      error: null,
      showInput: false,
      showBtn: false,
      showQrcode: true,
      showScanBtn: false,
      isQrcodeWrap: false,
    };
  },
  methods: {
    onDecode(result) {
      this.result = result;
      if (this.result) {
        this.dePositWrap(true);
      }
    },
    async onInit(promise) {
      try {
        await promise;
        this.showScan();
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "未允許使用相機權限，請至設定更改";
          this.dePositWrap(true);
        } else {
          this.dePositWrap(false);
        }
      }
    },
    showScan() {
      // this.error = null;
      this.result = null;
      this.showInput = false;
      this.showQrcode = true;
      this.showBtn = true;
      this.showScanBtn = true;
      window.setTimeout(() => {
        this.isQrcodeWrap = true;
      }, 650);
    },
    dePositWrap(boolean) {
      this.showQrcode = false;
      this.showBtn = false;
      this.showInput = true;
      this.showScanBtn = boolean;
      this.isQrcodeWrap = false;
    },
    paintOutline(detectedCodes, ctx) {
      for (const detectedCode of detectedCodes) {
        const [firstPoint, ...otherPoints] = detectedCode.cornerPoints;
        ctx.strokeStyle = "maroon";
        ctx.beginPath();
        ctx.moveTo(firstPoint.x, firstPoint.y);
        for (const { x, y } of otherPoints) {
          ctx.lineTo(x, y);
        }
        ctx.lineTo(firstPoint.x, firstPoint.y);
        ctx.closePath();
        ctx.stroke();
      }
    },
  },
  created() {
    // (promise) => {
    //   console.log(promise);
    //   try {
    //     promise;
    //     this.showInput = false;
    //   } catch (error) {
    //     if (error.name) {
    //       this.error = error.name;
    //     }
    //   }
    // };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/deposit.scss";
</style>