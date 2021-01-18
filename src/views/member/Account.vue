<template>
  <div class="memberAccount">
    <form class="col-12 col-md-8 col-lg-6">
      <table>
        <tr class="row">
          <td class="col-4 col-sm-3 title">
            <p>姓名</p>
          </td>
          <td class="col-8 col-sm-9">
            <p class="original">{{ account.name }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title">
            <p>身份證字號</p>
          </td>
          <td class="col-8 col-sm-9">
            <p class="original">{{ account.custid }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>出生日期</p></td>
          <td class="col-8 col-sm-9">
            <p class="original">{{ account.brthDt }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>Email</p></td>
          <td class="col-8 col-sm-6">
            <p v-if="hideBtn" class="original">{{ account.email }}</p>
            <input type="text" v-else v-model.trim.lazy="newEmail" />
          </td>
          <td class="warning col-4 col-sm-3" v-if="emailWarning">
            <p class="warning">email格式錯誤</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>手機號碼</p></td>
          <td class="col-8 col-sm-6">
            <p v-if="hideBtn" class="original">{{ account.mobile }}</p>
            <input type="text" v-else v-model.trim.lazy="newMobile" />
          </td>
          <td class="warning col-4 col-sm-3" v-if="mobileWarning">
            <p class="warning">手機格式錯誤</p>
          </td>
        </tr>
        <tr class="row address">
          <td class="col-4 col-sm-3 title"><p>聯絡地址</p></td>
          <td class="col-3 col-sm-3">
            <p v-if="hideBtn" class="original">
              {{ account.city }}
              <!-- {{userCity}} -->
            </p>
            <CitySelect v-model="cityIdx" :options="cities" v-else></CitySelect>
          </td>
          <td class="col-3 col-sm-3">
            <p v-if="hideBtn">{{ account.area }}</p>
            <CitySelect v-model="areaIdx" :options="areas" v-else></CitySelect>
          </td>
          <td class="col-2 col-sm-3">
            <!-- <p>{{ userZip }}</p> -->

            <p v-if="hideBtn">{{ account.zip }}</p>
            <p v-else>{{ userZip }}</p>
          </td>
          <td class="col-12 col-sm-9">
            <p v-if="hideBtn" class="original address">{{ account.addr1 }}</p>
            <input type="text" v-else v-model.trim="newAddr1" />
          </td>
        </tr>
      </table>
      <div>
        <!-- 先加prevent 之後要記得改-->
        <button class="first" @click.prevent="showHandler" v-if="hideBtn">
          修改資料
        </button>
        <template v-else>
          <button class="first" @click.prevent="submitlHandler">
            確認修改
          </button>
          <button class="cancel" @click.prevent="cancelHandler">取消</button>
        </template>
      </div>
    </form>
  </div>
</template>
<script>
import cities from "@/data/cities.json";
import CitySelect from "@/components/memberContent/CitySelect.vue";

export default {
  components: { CitySelect },
  name: "account",

  data() {
    return {
      hideBtn: true,
      editIndex: null,
      account: {
        name: "",
        custid: "",
        loginid: "",
        gender: "",
        brthDt: "",
        email: "",
        mobile: "",
        city: "",
        area: "",
        zip: "",
        addr1: "",
        addr2: "",
      },
      cityIdx: 0,
      areaIdx: 0,
      oldCityIdx: "",
      oldAreaIdx: "",
      newEmail: "",
      newMobile: "",
      newAddr1: "",
      emailWarning: false,
      mobileWarning: false,
    };
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
  },
  watch: {
    cityIdx() {
      this.areaIdx = 0;
    },
  },
  methods: {
    clearUserInfo() {
      this.newEmail = "";
      this.newMobile = "";
      this.newAddr1 = "";
      this.oldCityIdx = "";
      this.oldAreaIdx = "";
      this.newZip = "";
    },
    showHandler() {
      this.hideBtn = false;
      this.newEmail = this.account.email;
      this.newMobile = this.account.mobile;
      this.newAddr1 = this.account.addr1;
      this.oldCityIdx = this.cityIdx;
      this.oldAreaIdx = this.areaIdx;
      this.getUserInfo();
    },
    submitlHandler() {
      this.hideBtn = true;
      //改成新的
      this.account.city = this.userCity;
      this.account.area = this.userArea;
      this.account.zip = this.userZip;
      this.account.email = this.newEmail;
      this.account.mobile = this.newMobile;
      var emailRule = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      var mobileRule = /^09[0-9]{8}$/;
      if (!mobileRule.test(this.newMobile)) {
        this.mobileWarning = true;
        this.showHandler();
      } else {
        this.mobileWarning = false;
        if (!emailRule.test(this.newEmail)) {
          this.emailWarning = true;
          this.showHandler();
        } else {
          this.emailWarning = false;
          if (this.newAddr1 && this.newEmail && this.newMobile) {
            this.submitUserInfo();
            this.clearUserInfo();
            // this.getUserInfo();
          } else {
            alert("請填寫所有欄位");
            this.showHandler();
          }
        }
      }
    },
    // checkMobile() {
    //   if (!/^09[0-9]{8}$/.test(this.newMobile)) {
    //     alert("手機號碼格式錯誤");
    //   }
    // },
    cancelHandler() {
      this.showBtn = false;
      this.hideBtn = true;
      //改成舊的
      this.cityIdx = this.oldCityIdx;
      this.areaIdx = this.oldAreaIdx;
      this.clearUserInfo();
    },

    getUserInfo() {
      this.axios
        .get(`${process.env.VUE_APP_API}/cust`)
        .then((response) => {
          // console.log(response.data);
          this.account.name = response.data.name;
          this.account.loginid = response.data.loginid;
          this.account.gender = response.data.gender;
          this.account.mobile = response.data.mobile;
          this.account.brthDt = response.data.brthDt;
          this.account.email = response.data.email;
          this.account.addr2 = response.data.addr2;
          //    name: "余文樂",
          // custid: "A123456789",
          // loginid: "lok666",
          // gender: "1",
          // brthDt: "2020/11/30",
          // email: "123456@gmail.com",
          // mobile: "0912345678",
          // city: "台北市",
          // area: "內湖區",
          // zip: "114",
          // addr1: "這裡是聯絡地址",
          // addr2: "這裡是戶籍地址",
          // 去身分證識別化 整個資料顯示50%若除不盡則多顯示1位
          let str = response.data.custid;
          // 顯示幾個
          const showLen = Math.round(str.length / 2);
          // 要隱藏幾個
          const markLen = str.length - showLen;
          // 從哪開始隱
          const showStart = Math.round((str.length - showLen) / 2);
          this.account.custid = str.replace(
            str.substr(showStart, markLen),
            "*".repeat(markLen)
          );
          let arr = response.data.addr1.split("|");
          this.account.zip = arr[0];
          this.account.city = arr[1];
          this.account.area = arr[2];
          this.account.addr1 = arr[3];

          //---------找index

          const cityIndex = this.cities.findIndex(
            (city) => city.name === this.account.city
          );
          this.cityIdx = cityIndex;

          const areaIndex = this.areas.findIndex(
            (area) => area.name === this.account.area
          );
          this.areaIdx = areaIndex;
        })
        .catch((err) => {
          //有錯誤時
          let message = err.response.data.message;
          console.log(message);
        });
    },
    submitUserInfo() {
      var allAddr1 = `${this.userZip}|${this.userCity}|${this.userArea}|${this.newAddr1}`;
      this.account.addr1 = allAddr1;
      const custApi = `${process.env.VUE_APP_API}/cust`;
      this.axios
        .put(custApi, this.account)
        .then((response) => {
          console.log(response.data);

          response.data.add1 = allAddr1;
          console.log(response.data.add1);
        })
        .catch((err) => {
          console.log(err.message);
        });
      let arrAddr1 = allAddr1.split("|");
      this.account.addr1 = arrAddr1[3];
    },
  },
  created() {
    this.getUserInfo();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/account.scss";
</style>