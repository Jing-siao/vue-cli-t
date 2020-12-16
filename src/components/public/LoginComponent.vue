  <template>
  <div class="loginMain container" v-cloak>
    <div class="login row">
      <div class="wrap col-12">
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
              v-focus
              v-IdNumberValidation
            />
            <i class="fas fa-times-circle" v-if="invalid"></i>
            <i class="fas fa-check-circle" v-if="valid"></i>
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
            <div class="refresh col-sm-6 col-8">
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
      userIdNumber: "",
      loginForm: {
        userIdNumber: "",
        userNumber: "",
        userPassword: "",
        verificationCode: "",
      },

      invalid: false,
      valid: false,
    };
  },
  // 區域使用directive
  directives: {
    focus: {
      inserted(el) {
        el.focus();
      },
    },
    IdNumberValidation: {
      bind(el, binding, vnode) {
        console.log("binding", el, binding, vnode);
        // el.className = binding.userIdvalue.className;
      },
      update(el) {
        // // 尋找當前的 model 名稱 不確定v-model為何
        // let currentModel = vnode.data.directives.find(function (item) {
        //   return item.name === "model";
        // }).expression;

        // // 從當前 Model 取值
        // console.log("currentModel", userIdvalue, currentModel);
        // let userIdvalue = vnode.context[currentModel];
        var userIdvalue = el.value;
        console.log(el.nextSibling);
        // console.log(userIdvalue);
        let userIdRe = /^[A-Za-z][12]\d{8}$/;
        //測試使否有符合身分證的格式
        // console.log(userIdvalue, userIdRe.test(userIdvalue));
        if (!userIdRe.test(userIdvalue)) {
          el.className = "col-sm-6 col-8 invalid";

          // this.invalid = true;
        } else {
          el.className = "col-sm-6 col-8 valid";
          // this.valid = true;
        }
      },
    },
  },
  methods: {
    loginHandler() {
      //接token?
      //登入成功要直接導向首頁
      //不成功跳aleart帳密錯誤
      const token = "asds32adsavrAS3Fadf5567"; // token本身就是加密過的字串，隨意
      let userIdNumber = this.loginForm.userIdNumber;
      let userNumber = this.loginForm.userNumber;
      let userPassword = this.loginForm.userPassword;
      let verificationCode = this.loginForm.verificationCode;
      // 帳號密碼需驗證不能為空
      if (
        userIdNumber !== "" &&
        userNumber !== "" &&
        userPassword !== "" &&
        verificationCode !== ""
      ) {
        this.loginForm.token = token;
      } else {
        alert("請輸入所有欄位");
      }
    },
  },
  watch: {
    //要先用watch接驗證碼嗎?先驗證再傳帳密?
    //要打api放這
    "loginForm.userIdNumber"() {
      let userIdRe = /^[A-Za-z][12]\d{8}$/;
      if (!userIdRe.test(this.loginForm.userIdNumber)) {
        this.invalid = true;
        this.valid = false;
      } else {
        this.valid = true;
        this.invalid = false;
      }
    },
    // deep: true,
  },
};
</script>

<style lang="scss" scoped>
// @import "../../assets/public/main.scss";
@import "../../assets/scss/login.scss";
</style>