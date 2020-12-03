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
            <input type="text" v-if="showBtn" v-model.trim="account.email" />
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3 title"><p>手機號碼</p></td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn" class="original">{{ account.phoneNumber }}</p>
            <input
              type="text"
              v-if="showBtn"
              v-model.trim="account.phoneNumber"
            />
          </td>
        </tr>
        <tr class="row address">
          <td class="col-4 col-sm-3 title"><p>聯絡地址</p></td>
          <td class="col-3 col-sm-3">
            <p v-if="hideBtn" class="original">
              {{ userCity }}
            </p>
            <CitySelect
              v-model="cityIdx"
              :options="cities"
              v-if="showBtn"
            ></CitySelect>
          </td>
          <td class="col-3 col-sm-3">
            <p v-if="hideBtn">{{ userArea }}</p>
            <CitySelect
              v-model="areaIdx"
              :options="areas"
              v-if="showBtn"
            ></CitySelect>
          </td>
          <td class="col-2 col-sm-3">
            <p>{{ zip }}</p>
          </td>
          <td class="col-12 col-sm-9">
            <p v-if="hideBtn" class="original address">{{ account.address }}</p>
            <input type="text" v-if="showBtn" v-model.trim="account.address" />
          </td>
        </tr>
      </table>
      <div>
        <!-- 先加prevent 之後要記得改-->
        <button class="first" @click.prevent="showHandler" v-if="hideBtn">
          修改資料
        </button>
        <button class="first" v-if="showBtn" @click.prevent="submitlHandler">
          確認修改
        </button>
        <button class="cancel" v-if="showBtn" @click.prevent="cancelHandler">
          取消
        </button>
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
      showBtn: false,
      hideBtn: true,
      editIndex: null,
      cityIdx: 0,
      areaIdx: 0,
      account: {
        name: "國眾電腦",
        idNumber: "A123456789",
        birthday: "2020-11-30",
        email: "123456@gmail.com",
        phoneNumber: "0912345678",
        city: "",
        area: "",
        address: "這邊是地址這邊是地址這邊是地址",
      },
      // city: ["台北市"],
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
    zip() {
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
    showHandler() {
      this.showBtn = true;
      this.hideBtn = false;
    },
    submitlHandler() {
      this.showBtn = false;
      this.hideBtn = true;
      //改成新的
    },
    cancelHandler() {
      this.showBtn = false;
      this.hideBtn = true;
      //改成舊的
      this.cityIdx = 0;
      this.areaIdx = 0;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/account.scss";
</style>