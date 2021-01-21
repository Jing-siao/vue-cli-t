  <template>
  <div class="loginMain container" v-cloak>
    <div class="login row">
      <div class="loginMethod row">
        <p :class="{ active: isActive == 'common' }" @click="commonLogin">
          一般會員登入
        </p>
        <p :class="{ active: isActive == 'other' }" @click="otherLogin">
          其他登入方式
        </p>
      </div>
      <div class="wrap col-12">
        <div class="logoWrap">
          <img src="../../assets/img/long-logo.png" alt="" />
        </div>
        <div v-if="commonForm">
          <form class="account" @submit.prevent.enter="loginHandler">
            <!-- <div> -->
            <label for="custid">
              <p class="col-sm-2 col-10">身分證字號</p>
              <input
                type="text"
                class="col-sm-6 col-10"
                placeholder="例:A123456789"
                v-model.trim="user.custid"
                v-focus
              />
              <!-- v-IdNumberValidation -->
              <i class="fas fa-times-circle" v-if="invalid"></i>
              <i class="fas fa-check-circle" v-if="valid"></i>
              <!-- <i class="hide"></i> -->
            </label>
            <!-- </div> -->

            <label for="loginid">
              <p class="col-sm-2 col-10">使用者代號</p>
              <input
                type="text"
                class="col-sm-6 col-10"
                placeholder="請輸入8-12碼"
                v-model.trim="user.loginid"
              />
            </label>
            <label for="password">
              <p class="col-sm-2 col-10">密碼</p>
              <input
                type="password"
                class="col-sm-6 col-10"
                placeholder="請輸入8-12碼"
                v-model.trim="user.password"
              />
            </label>
            <label for="verificationCode">
              <p class="col-sm-2 col-10">驗證碼</p>
              <input
                type="text"
                class="col-sm-6 col-10"
                placeholder="注意大小寫有分"
                v-model.trim="verificationCode"
              />
              <div class="refresh col-sm-7 col-10">
                <img :src="identify.base64Data" alt="" />
                <i class="fas fa-sync" @click="refresh">刷新驗證碼</i>
              </div>
            </label>

            <button type="submit" class="col-10 col-sm-8 first">登入</button>
          </form>
          <router-link to="/Signup">
            <button class="col-5 col-sm-4 first">立即註冊</button>
          </router-link>
          <div class="forgetPassword">
            <router-link to="/bonus">忘記密碼?</router-link>
          </div>
        </div>
        <div v-else>
          <router-link to="/InternetBanking">
            <button class="col-5 col-sm-4 first">網路銀行</button>
          </router-link>
          <router-link to="/SignupCardReader">
            <button class="col-5 col-sm-4 first">網路ATM</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      identify: {
        base64Data: "",
        key: "",
      },
      user: {
        custid: "",
        loginid: "",
        password: "",
      },
      verificationCode: "",

      invalid: false,
      valid: false,
      commonForm: true,
      isActive: "common",
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
      //看binding裡面有甚麼 先註解 日後用
      bind(el, binding, vnode) {
        console.log("binding", el, binding, vnode);
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
        userIdvalue = userIdvalue.toUpperCase();
        //以下待改要寫一起
        // console.log(userIdvalue);
        let userIdRe = /^[A-Za-z][12]\d{8}$/;

        //測試使否有符合身分證的格式
        // console.log(userIdvalue, userIdRe.test(userIdvalue));

        if (!userIdRe.test(userIdvalue)) {
          el.className = "col-sm-6 col-8 invalid";

          // el.nextSibling.className = "fas fa-times-circle";
        } else {
          el.className = "col-sm-6 col-8 valid";
          // el.nextSibling.className = "fas fa-check-circle";
        }
      },
    },
  },
  methods: {
    loginHandler() {
      //接token?
      //登入成功要直接導向首頁
      //不成功跳aleart帳密錯誤
      // const token = "asds32adsavrAS3Fadf5567"; // token本身就是加密過的字串，隨意
      // console.log(this.user.custid.toUpperCase());
      let custid = this.user.custid;
      let loginid = this.user.loginid;
      let password = this.user.password;
      let verificationCode = this.verificationCode;
      let key = this.identify.key;
      // custid = custid.toUpperCase();
      // 帳號密碼需驗證不能為空
      if (
        custid !== "" &&
        loginid !== "" &&
        password !== "" &&
        verificationCode !== ""
      ) {
        //先驗證圖片是否成功
        const keyApi = `${process.env.VUE_APP_API}/auth/captcha/${key}?code=${verificationCode}`;
        this.axios
          .put(keyApi, this.identify)
          .then((response) => {
            // console.log(response.data.message);
            //先驗成功 打登入api
            if (response.data.message == "驗證成功") {
              const loginApi = `${process.env.VUE_APP_API}/auth/login`;
              this.axios
                .post(loginApi, this.user)
                .then((response) => {
                  //登入成功跳轉首頁
                  if (response.data.accessToken) {
                    // console.log(response.data);

                    //先存token和date到sessionStorage再跳轉頁面
                    sessionStorage.setItem(
                      "accessToken",
                      response.data.accessToken
                    );
                    sessionStorage.setItem("expDate", response.data.expDate);
                    //在app的main.js接Token並在http header都加上token
                    //呼叫store裡action的updateLogin方法 並傳入true參數會帶到status
                    this.$store.dispatch("updateLogin", true);
                    //登入後push到會員中心
                    this.$router.push("/member/allPoint");
                    //接到token 登入按鈕要變登出
                  }
                })
                .catch((error) => {
                  console.error(error);
                  let status = error.response.status;
                  if (status !== 200) {
                    alert("使用者代號或密碼錯誤");
                    this.empty();
                    this.refresh();
                    sessionStorage.clear();
                  }
                });
            }
          })
          .catch((error) => {
            // console.error(error);
            let status = error.response.status;
            if (status == 401) {
              alert("驗證碼不正確");

              this.empty();
              this.refresh();
              sessionStorage.clear();
            }
          });
        // this.user.token = token;

        if (custid.length !== 10) {
          alert("身分證字號長度不正確");
        }
      } else {
        alert("請輸入所有欄位");
      }
    },
    refresh() {
      this.axios
        .get(`${process.env.VUE_APP_API}/auth/captcha`)
        .then((response) => {
          // console.log(response.data.base64Data);
          this.identify.base64Data = response.data.base64Data;
          this.identify.key = response.data.key;
        });
    },
    empty() {
      this.user.custid = "";
      this.user.loginid = "";
      this.user.password = "";
      this.verificationCode = "";
    },
    commonLogin() {
      this.commonForm = true;
      this.isActive = "common";
    },
    otherLogin() {
      this.commonForm = false;
      this.isActive = "other";
    },
  },
  watch: {
    //要先用watch接驗證碼嗎?先驗證再傳帳密?
    //要打api放這
    "user.custid": {
      handler(val) {
        this.user.custid = val.toUpperCase();
        let userIdRe = /^[A-Za-z][12]\d{8}$/;

        if (!userIdRe.test(this.user.custid)) {
          this.invalid = true;
          this.valid = false;
        } else {
          this.valid = true;
          this.invalid = false;
        }
      },

      deep: true,
    },
  },
  created() {
    this.axios
      .get(`${process.env.VUE_APP_API}/auth/captcha`)
      .then((response) => {
        // console.log(response.data.base64Data);
        this.identify.base64Data = response.data.base64Data;
        this.identify.key = response.data.key;
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/login.scss";
</style>