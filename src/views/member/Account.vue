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
          <td class="col-4 col-sm-3">
            <p v-if="hideBtn" class="original">
              {{ account.city }}{{ townIndex }}
            </p>
            <select name="" id="" v-if="showBtn">
              請選擇
              <option value="1">{{ account.city }}</option>
              <option value="2">新北市</option>
              <option value="3">台北市</option>
            </select>
            <!-- <city-select
              v-model="townIndex"
              :options="towns"
              v-if="showBtn"
            ></city-select> -->
          </td>
          <td class="col-4 col-sm-3">
            <p v-if="hideBtn">{{ account.dist }}{{ areaIdx }}</p>
            <select name="" id="" v-if="showBtn">
              <option value="1">{{ account.dist }}</option>
              <option value="2">內湖區</option>
              <option value="3">內湖區</option>
            </select>
            <!-- <city-select
              v-model="areaIdx"
              :options="areas"
              v-if="showBtn"
            ></city-select> -->
          </td>
          <td class="col-4 col-sm-3">
            <p v-if="hideBtn"></p>
            <!-- <input
              type="text"
              v-if="showBtn"
              id="postalCode"
              placeholder="請填郵遞區號"
            /> -->
          </td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn" class="original">{{ account.address }}</p>
            <input type="text" v-if="showBtn" v-model.trim="account.address" />
          </td>
        </tr>
      </table>
      <div>
        <button class="first" @click="showHandler" v-if="hideBtn">
          修改資料
        </button>
        <button class="first" v-if="showBtn" @click="submitlHandler">
          確認修改
        </button>
        <button class="cancel" v-if="showBtn" @click="cancelHandler">
          取消
        </button>
      </div>
    </form>
    <my-select v-model="townIndex" :source="towns"></my-select>
    <my-select v-model="areaIndex" :source="areas"></my-select>
    {{ zip }}
  </div>
</template>
<script>
// import cities from "@/data/cities.json";
// import CitySelect from "@/component/memberContent/CitySelect.vue";

export default {
  components: { CitySelect },
  name: "account",

  data() {
    return {
      showBtn: false,
      hideBtn: true,
      contacts: [],
      editIndex: null,
      // showInput: false,
      account: {
        name: "國眾電腦",
        idNumber: "A123456789",
        birthday: "2020-11-30",
        email: "123456@gmail.com",
        phoneNumber: "0912345678",
        city: "台北市",
        dist: "內湖區",
        address: "這邊是地址這邊是地址這邊是地址",
      },
      city: ["台北市"],
    };
  },
  computed: {
    cityList() {
      let cities = {
        sort: [],
        map: {},
      };
      this.menu.forEach((item, index) => {
        let { name, areas, zip } = item;
        if (!cities.map[name]) {
          cities.sort.push(name);
          cities.map[name] = {
            sort: [],
            map: {},
          };
        }
        cities.map[name].sort.push(areas);
        cities.map[name].map[areas] = { index, zip };
      });
      return cities;
    },
  },
  watch: {},
  methods: {
    showHandler() {
      this.showBtn = true;
      this.hideBtn = false;
    },
    submitlHandler() {
      this.showBtn = false;
      this.hideBtn = true;
    },
    cancelHandler() {
      this.showBtn = false;
      this.hideBtn = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/account.scss";
</style>