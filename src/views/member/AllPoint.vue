<template>
  <div>
    <h1>點數總覽</h1>
    <city-select v-model="cityIdx" :options="cities"></city-select>
    <city-select v-model="areaIdx" :options="areas"></city-select>
    {{ zip }}{{ cities.areas }}
  </div>
</template>
<script>
// import axios from "axios";
import cities from "@/data/cities.json";
import CitySelect from "@/components/memberContent/CitySelect.vue";
//-----------------------------------------
// let towns = () => cities.map((x) => x.name);

// let areas = function () {
//   return cities[this.townIndex].areas.map((x) => x.name);
// };

// let zip = function () {
//   return cities[this.townIndex].areas[this.areaIndex].zip;
// };

// let townIndex = function () {
//   this.areaIndex = 0;
// };
//-----------------------------------------

export default {
  name: "allPoint",
  components: {
    CitySelect,
  },
  data() {
    return {
      cityIdx: 0,
      areaIdx: 0,

      // cityJson: "",
    };
  },
  //-------------------

  // data: () => ({
  //   townIndex: 0,
  //   areaIndex: 0,
  // }),
  //-------------------
  created() {
    //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
    // this.cityJson = this.cities[0].name;
  },
  computed: {
    cities() {
      return cities;
    },
    areas() {
      return this.cities[this.cityIdx].areas;
    },
    zip() {
      return this.areas[this.areaIdx].zip;
    },
  },
  watch: {
    //-------------------

    // townIndex,
    //-------------------

    cityIdx() {
      this.areaIdx = 0;
    },
  },
  mounted() {
    // this.cityJson = cities;
    //---------------------------------------------------
    // this.loading = true;
    // this.axios
    //   .get("http://10.0.12.164:8081/public/data/cities.json")
    //   .then((res) => {
    //     //用箭頭函式 因為希望這裡的this對上外面的Vue實體,不要自己產生this
    //     //先console看看物件裡面是甚麼
    //     console.log(res);
    //     this.contacts = res.data;
    //     this.loading = false;
    //   })
    //   .catch((err) => {
    //     //有錯誤時
    //     console.log(err);
    //   });
    //---------------------------------------------------
  },
};
</script>
<style lang="scss" scoped>
</style>