<template>
  <div class="dePosit">
    <div class="dePositWrap col-12 col-sm-9 col-md-8 col-lg-6">
      <div class="row">
        <label for="" class="col-sm-3">儲值序號</label>
        <input type="text" class="col-sm-7" />
      </div>
      <div class="row">
        <button class="first">確認</button>
      </div>
    </div>
    <!-- <qrcode-stream
      @decode="onDecode"
      :camera="cameraSettings"
      :track="false"
      :paused="paused"
    ></qrcode-stream> -->
    <p class="decode-result">
      Last result: <b>{{ result }}</b>
    </p>

    <p v-if="error !== null" class="drop-error">
      {{ error }}
    </p>
    <qrcode-drop-zone
      @detect="onDetect"
      @dragover="onDragOver"
      @init="logErrors"
    >
      <div class="drop-area" :class="{ dragover: dragover }">
        DROP SOME IMAGES HERE
      </div>
    </qrcode-drop-zone>
  </div>
</template>
<script>
// import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";
import { QrcodeDropZone } from "vue-qrcode-reader";
export default {
  // components: {
  //   QrcodeStream,
  //   QrcodeDropZone,
  //   QrcodeCapture,
  // },
  components: {
    // QrcodeStream,
    QrcodeDropZone,
    // QrcodeCapture,
  },
  data() {
    return {
      result: null,
      error: null,
      dragover: false,
    };
  },
  methods: {
    async onDetect(promise) {
      try {
        const { content } = await promise;

        this.result = content;
        this.error = null;
      } catch (error) {
        if (error.name === "DropImageFetchError") {
          this.error = "Sorry, you can't load cross-origin images :/";
        } else if (error.name === "DropImageDecodeError") {
          this.error = "Ok, that's not an image. That can't be decoded.";
        } else {
          this.error = "Ups, what kind of error is this?! " + error.message;
        }
      }
    },

    logErrors(promise) {
      promise.catch(console.error);
    },

    onDragOver(isDraggingOver) {
      this.dragover = isDraggingOver;
    },
  },
};
</script>
<style lang="scss" scoped>
.dePosit {
  .dePositWrap {
    padding: 0;
    div.row {
      margin: 0;
      label {
        padding: 5px 0;
      }
    }
  }
  .drop-area {
    height: 300px;
    color: #fff;
    text-align: center;
    font-weight: bold;
    padding: 10px;

    background-color: rgba(0, 0, 0, 0.5);
  }

  .dragover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .drop-error {
    color: red;
    font-weight: bold;
  }
}
</style>