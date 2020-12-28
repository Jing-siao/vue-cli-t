  <template>
  <div class="signupMain container" v-cloak>
    <div class="signup col-12">
      <!-- <div class="steps">
        <p>1</p>
        <span></span>
        <p>2</p>
        <span></span>
        <p>3</p>
      </div> -->
      <div class="wrap col-12">
        <div>
          <h5 class="col-12">會員認證</h5>
        </div>

        <div class="iframeWrap col-12">
          <iframe
            class="iframe cardReader"
            src="https://netbank.megabank.com.tw/natm/_420/wos/wos106/WOS106_1.faces"
            frameborder="0"
          ></iframe>
        </div>
      </div>
      <div class="note">
        <p v-for="(note, index) in notes" :key="index">
          <i class="fas fa-exclamation-triangle"></i>
          {{ note.note }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      notes: [
        {
          note: "請先安裝讀卡機，並插入晶片金融卡驗證",
        },
        {
          note: "晶片卡密碼如輸入錯誤3次，會直接鎖卡",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/signup.scss";
@media (min-width: 481px) {
  .iframeWrap {
    height: 360px;

    .cardReader {
      padding: 0 32px;
    }
  }
}
@media (max-width: 480px) {
  .iframeWrap {
    height: 360px;
    .cardReader {
      // border: 1px solid rgb(221, 42, 42);
      padding: 0;
    }
  }
}
</style>