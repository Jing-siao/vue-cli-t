  <template>
  <div class="main container" v-cloak>
    <div class="login">
      <div class="wrap">
        <div class="logoWrap">
          <img src="../../assets/img/long-logo.png" alt="" />
        </div>
        <form class="account">
          <!-- <div> -->
          <label for="">
            <p class="col-sm-2 col-8">身分證字號</p>
            <input
              type="text"
              class="col-sm-6 col-8"
              placeholder="例:A123456789"
              v-model.trim="loginForm.userIdNumber"
            />
          </label>
          <!-- </div> -->

          <label for="">
            <p class="col-sm-2 col-8">使用者代號</p>
            <input
              type="text"
              class="col-sm-6 col-8"
              placeholder="請輸入8-12碼"
              v-model.trim="loginForm.userNumber"
            />
          </label>
          <label for="">
            <p class="col-sm-2 col-8">密碼</p>
            <input
              type="password"
              class="col-sm-6 col-8"
              placeholder="請輸入8-12碼"
              v-model.trim="loginForm.userPassword"
            />
          </label>
          <label for="">
            <p class="col-sm-2 col-8">驗證碼</p>
            <input
              type="text"
              class="col-sm-6 col-8"
              placeholder="注意大小寫有分"
              v-model.trim="loginForm.verificationCode"
            />
            <div class="refresh col-sm-10 col-8">
              <img src="../../assets/img/passcode.png" alt="" />
              <i class="fas fa-sync">刷新驗證碼</i>
            </div>
          </label>
          <div class="button">
            <button class="col-4">
              <a href="javascript:;">立即註冊</a>
            </button>
            <button type="submit" class="col-4" @submit.prevent="loginHandler">
              登入
            </button>
          </div>
          <div class="forgetPassword">
            <a href="javascript:;">忘記密碼?</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userIdNumber: "",
        userNumber: "",
        userPassword: "",
        verificationCode: "",
      },
    };
  },
  methods: {
    loginHandler() {
      //接token?
      //登入成功要直接導向首頁
      //不成功跳aleart帳密錯誤
    },
  },
  watch: {
    //要先用watch接驗證碼嗎?先驗證再傳帳密?
    //要打api放這
  },
};
</script>

<style lang="scss" scoped>
// @import "../../assets/public/main.scss";
@import "../../assets/scss/login.scss";
</style>