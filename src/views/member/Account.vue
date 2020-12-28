<template>
  <div class="memberAccount">
    <form action="" class="col-12 col-md-8 col-lg-6">
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
            <p class="original">{{ account.idNumber }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>出生日期</p></td>
          <td class="col-8 col-sm-9">
            <p class="original">{{ account.birthday }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>Email</p></td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn" class="original">{{ account.email }}</p>
            <input type="text" v-else v-model.trim="newEmail" />
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>手機號碼</p></td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn" class="original">{{ account.phoneNumber }}</p>
            <input type="text" v-else v-model.trim="newPhoneNumber" />
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
            <p v-if="hideBtn" class="original address">{{ account.address }}</p>
            <input type="text" v-else v-model.trim="newAddress" />
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
        name: "國眾電腦",
        idNumber: "A123456789",
        birthday: "2020-11-30",
        email: "123456@gmail.com",
        phoneNumber: "0912345678",
        city: "基隆市",
        area: "仁愛區",
        zip: "200",
        address: "這邊是地址這邊是地址這邊是地址",
      },
      cityIdx: 0,
      areaIdx: 0,
      oldCityIdx: "",
      oldAreaIdx: "",
      newEmail: "",
      newPhoneNumber: "",
      newAddress: "",
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
  // watch: {
  //   cityIdx() {
  //     this.areaIdx = 0;
  //   },
  // },
  methods: {
    showHandler() {
      this.showBtn = true;
      this.hideBtn = false;
      this.newEmail = this.account.email;
      this.newPhoneNumber = this.account.phoneNumber;
      this.newAddress = this.account.address;
      this.oldCityIdx = this.cityIdx;
      this.oldAreaIdx = this.areaIdx;
    },
    submitlHandler() {
      this.showBtn = false;
      this.hideBtn = true;
      //改成新的
      this.account.city = this.userCity;
      this.account.area = this.userArea;
      this.account.zip = this.userZip;
      this.account.email = this.newEmail;
      this.account.phoneNumber = this.newPhoneNumber;
      this.account.address = this.newAddress;
      this.newEmail = "";
      this.newPhoneNumber = "";
      this.newAddress = "";
      this.oldCityIdx = "";
      this.oldAreaIdx = "";
    },
    cancelHandler() {
      this.showBtn = false;
      this.hideBtn = true;
      //改成舊的
      this.newEmail = "";
      this.newPhoneNumber = "";
      this.newAddress = "";
      this.newZip = "";
      this.cityIdx = this.oldCityIdx;
      this.areaIdx = this.oldAreaIdx;
      this.oldCityIdx = "";
      this.oldAreaIdx = "";
    },
  },
  created() {
    this.axios
      .get(`${process.env.VUE_APP_API}/cust`)
      .then((response) => {
        console.log(response.data);
        this.account.name = response.data.name;
        // 去身分證識別化 整個資料顯示50%若除不盡則多顯示1位
        let str = response.data.custid;
        // 顯示幾個
        const showLen = Math.round(str.length / 2);
        // 要隱藏幾個
        const markLen = str.length - showLen;
        // 從哪開始隱
        const showStart = Math.round((str.length - showLen) / 2);
        this.account.idNumber = str.replace(
          str.substr(showStart, markLen),
          "*".repeat(markLen)
        );
      })
      .catch((err) => {
        //有錯誤時
        console.log(err.message);
      });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/account.scss";
</style>