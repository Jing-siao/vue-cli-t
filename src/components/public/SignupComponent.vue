  <template>
  <div class="signupMain container" v-cloak>
    <div class="signup col-12">
      <div class="wrap col-12">
        <div>
          <h5 class="col-12">會員註冊</h5>
        </div>

        <!-- <div class="col-12"> -->
        <form class="col-12">
          <table>
            <tr class="row">
              <td class="col-4 col-sm-3 title">
                <p>姓名</p>
              </td>
              <td class="col-8 col-sm-6">
                <input
                  type="text"
                  v-model.trim.lazy="account.name"
                  placeholder="請輸入姓名"
                />
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title">
                <p>姓別</p>
              </td>
              <td class="col-4 col-sm-2">
                <input
                  type="radio"
                  v-model.trim.lazy="account.gender"
                  value="1"
                  id="male"
                />
                <label for="male">男</label>
              </td>
              <td class="col-4 col-sm-2">
                <input
                  type="radio"
                  v-model.trim.lazy="account.gender"
                  value="2"
                  id="female"
                />
                <label for="female">女</label>
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title">
                <p>身份證字號</p>
              </td>
              <td class="col-8 col-sm-6">
                <input
                  type="text"
                  v-model.trim.lazy="account.custid"
                  placeholder="請輸入身分證字號"
                />
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title">
                <p>使用者代號</p>
              </td>
              <td class="col-8 col-sm-6">
                <input
                  type="text"
                  v-model.trim.lazy="account.loginid"
                  placeholder="請輸入使用者代號"
                />
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title"><p>密碼</p></td>
              <td class="col-8 col-sm-6">
                <input
                  type="password"
                  v-model.trim.lazy="account.password"
                  placeholder="請輸入8-12碼"
                />
              </td>
            </tr>

            <tr class="row">
              <td class="col-4 col-sm-3 title"><p>再次確認密碼</p></td>
              <td class="col-8 col-sm-6">
                <input
                  type="password"
                  v-model.trim.lazy="checkPassword"
                  placeholder="請輸入8-12碼"
                />
              </td>
              <td class="warning col-4 col-sm-3" v-if="passwordWarning">
                <p class="warning">兩者密碼不相同</p>
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title"><p>出生日期</p></td>
              <td class="col-8 col-sm-6">
                <input
                  type="text"
                  v-model.trim.lazy="account.bday"
                  placeholder="YYYY-MM-DD"
                />
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title"><p>Email</p></td>
              <td class="col-8 col-sm-6">
                <input type="text" v-model.trim.lazy="account.email" />
              </td>
              <td class="warning col-4 col-sm-3" v-if="emailWarning">
                <p class="warning">email格式錯誤</p>
              </td>
            </tr>
            <tr class="row">
              <td class="col-4 col-sm-3 title"><p>手機號碼</p></td>
              <td class="col-8 col-sm-6">
                <input type="text" v-model.trim.lazy="account.mobile" />
              </td>
              <td class="warning col-4 col-sm-3" v-if="mobileWarning">
                <p class="warning">手機格式錯誤</p>
              </td>
            </tr>
            <tr class="row address">
              <td class="col-4 col-sm-3 title"><p>聯絡地址</p></td>
              <td class="col-3 col-sm-3">
                <CitySelect v-model="cityIdx" :options="cities"></CitySelect>
              </td>
              <td class="col-3 col-sm-3">
                <CitySelect v-model="areaIdx" :options="areas"></CitySelect>
              </td>
              <td class="col-2 col-sm-3">
                <p>{{ userZip }}</p>
              </td>
              <td class="col-12 col-sm-9">
                <input type="text" v-model.trim="newAddr1" />
              </td>
            </tr>
            <tr class="row address">
              <td class="col-4 col-sm-3 title"><p>戶籍地址</p></td>
              <td class="col-3 col-sm-3">
                <CitySelect v-model="cityIdx2" :options="cities2"></CitySelect>
              </td>
              <td class="col-3 col-sm-3">
                <CitySelect v-model="areaIdx2" :options="areas2"></CitySelect>
              </td>
              <td class="col-2 col-sm-3">
                <p>{{ userZip2 }}</p>
              </td>
              <td class="col-12 col-sm-9">
                <input type="text" v-model.trim="newAddr2" />
              </td>
            </tr>
          </table>
          <div>
            <!-- 先加prevent 之後要記得改-->
            <button class="first" @click.prevent="submitlHandler">送出</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cities from "@/data/cities.json";
import CitySelect from "@/components/memberContent/CitySelect.vue";
export default {
  components: { CitySelect },
  name: "signup",
  data() {
    return {
      hideBtn: true,
      editIndex: null,
      account: {
        name: "",
        custid: "",
        loginid: "",
        gender: "",
        bday: "",
        email: "",
        mobile: "",
        addr1: "",
        addr2: "",
        password: "",
      },

      cityIdx: 0,
      areaIdx: 0,
      cityIdx2: 0,
      areaIdx2: 0,
      checkPassword: "",
      newAddr1: "",
      newAddr2: "",
      emailWarning: false,
      mobileWarning: false,
      passwordWarning: false,
    };
    // text@gmail.com
    // 114|台北市|內湖區|陽光街100號
  },
  computed: {
    cities() {
      // const cities = this.cityJson.push();
      return cities;
    },
    areas() {
      if (this.cities) {
        return this.cities[this.cityIdx].areas;
      } else {
        return null;
      }
    },

    userZip() {
      return this.areas[this.areaIdx].zip;
    },
    userCity() {
      return this.cities[this.cityIdx].name;
    },
    userArea() {
      return this.areas[this.areaIdx].name;
    },
    cities2() {
      // const cities = this.cityJson.push();
      return cities;
    },
    areas2() {
      if (this.cities2) {
        return this.cities2[this.cityIdx2].areas;
      } else {
        return null;
      }
    },

    userZip2() {
      return this.areas2[this.areaIdx2].zip;
    },
    userCity2() {
      return this.cities2[this.cityIdx2].name;
    },
    userArea2() {
      return this.areas2[this.areaIdx2].name;
    },
  },
  watch: {
    cityIdx() {
      this.areaIdx = 0;
    },
    cityIdx2() {
      this.areaIdx2 = 0;
    },
  },
  methods: {
    clearSignUp() {
      this.account.name = "";
      this.account.custid = "";
      this.account.loginid = "";
      this.account.gender = "";
      this.account.bday = "";
      this.account.email = "";
      this.account.mobile = "";
      this.account.addr1 = "";
      this.account.addr2 = "";
      this.account.password = "";
      this.passwordWarning = false;
      this.emailWarning = false;
      this.mobileWarning = false;
    },

    verification() {
      var emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      var mobileRule = /^09[0-9]{8}$/;
      //--驗證

      if (this.checkPassword !== this.account.password) {
        this.passwordWarning = true;
      } else {
        this.passwordWarning = false;
      }
      if (!emailRule.test(this.account.email)) {
        this.emailWarning = true;
      } else {
        this.emailWarning = false;
      }

      if (!mobileRule.test(this.account.mobile)) {
        this.mobileWarning = true;
      } else {
        this.mobileWarning = false;
      }
    },
    submitlHandler() {
      let {
        name,
        custid,
        loginid,
        gender,
        bday,
        email,
        mobile,
        password,
      } = this.account;
      this.verification();
      if (
        !name ||
        !custid ||
        !loginid ||
        !gender ||
        !bday ||
        !email ||
        !mobile ||
        !password ||
        !this.newAddr1 ||
        !this.newAddr2 ||
        !this.checkPassword
      ) {
        alert("請填寫所有欄位");
      } else if (
        !this.passwordWarning &&
        !this.emailWarning &&
        !this.mobileWarning
      ) {
        this.postSignUp();
        this.$router.push("/login");
      }
    },
    postSignUp() {
      this.account.addr1 = `${this.userZip}|${this.userCity}|${this.userArea}|${this.newAddr1}`;

      this.account.addr2 = `${this.userZip2}|${this.userCity2}|${this.userArea2}|${this.newAddr2}`;
      const custApi = `${process.env.VUE_APP_API}/auth/signup`;
      this.axios
        .post(custApi, this.account)
        .then((response) => {
          alert(response.data.message);
        })
        .catch((err) => {
          console.log(err);
          let message = err.response.data.message;
          alert(message);
          this.clearSignUp();
          this.checkPassword = "";
        });
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/signup.scss";
</style>