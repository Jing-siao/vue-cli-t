<template>
  <div class="memberSearchPoint">
    <!-- <form action="#">
      <div class="type row">
        <p class="col-sm-2">點數查詢</p>
        <select name="" id="" v-model="selsctType">
          <option v-for="type in select" :value="type.typeId" :key="type.guid">
            {{ type.typeName }}
          </option>
        </select>
      </div>
      <div class="time row">
        <p class="col-md-2">查詢區間</p>
        <label for="" class="col-sm-6 col-md-5 col-lg-4"
          >開始日期
          <vc-date-picker
            v-model="searchecord.strDate"
            :model-config="modelConfig"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <input :value="inputValue" v-on="inputEvents" />
            </template>
          </vc-date-picker>
        </label>
        <label for="" class="col-12 col-sm-6 col-md-5 col-lg-4"
          >結束日期
          <vc-date-picker
            v-model="searchecord.endDate"
            :model-config="modelConfig"
          >
            <template v-slot="{ inputValue, inputEvents }">
              <input :value="inputValue" v-on="inputEvents" />
            </template>
          </vc-date-picker>
        </label>
      </div>
      <button class="first"><i class="fas fa-search"></i>查詢</button>
    </form> -->
    <SearchComponent @pointForm="getDetail" />
    <div class="searchPointTable">
      <table class="formTable">
        <thead>
          <tr class="row">
            <th class="col-md" v-for="th in tableTh" :key="th">{{ th }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="detail.length > 0">
            <tr
              class="row hasData"
              v-for="(item, index) in detail"
              :key="index"
            >
              <td class="col-md" :data-th="tableTh[0]">
                {{ item.date }}
              </td>
              <td :data-th="tableTh[1]" class="col-md">{{ item.note }}</td>
              <td :data-th="tableTh[2]" class="col-md">{{ typeName }}</td>
              <td :data-th="tableTh[3]" class="col-md">{{ item.bonus }}</td>
              <td :data-th="tableTh[4]" class="col-md">
                {{ item.expiryDate }}
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td colspan="5" class="noData">暫無資料</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import SearchComponent from "@/components/memberContent/SearchComponent.vue";
export default {
  components: { SearchComponent },
  data() {
    return {
      select: [],
      searchPoint: {},
      typeName: "",
      tableTh: ["日期", "說明", "點數類型", "點數異動", "有效期限"],

      detail: [],
    };
  },
  methods: {
    getType(val) {
      this.searchPoint = val;
      this.getDetail();
      this.getTypeName();
    },
    getDetail(val) {
      this.searchPoint = val;
      let { type, strDate, endDate } = this.searchPoint;
      this.axios
        .get(
          `${process.env.VUE_APP_API}/bonus/cust/bonusRecord/${type}?strDate=${strDate}&endDate=${endDate}`
        )
        .then((response) => {
          this.detail = response.data.detail;
        });
    },
    getTypeName() {
      // var self = this,
      //   name = "";
      this.select.filter((type) => {
        if (type.typeId == this.searchPoint.type) {
          this.typeName = type.typeName;
          // return;
        }
      });

      // return name;
    },
  },
  computed: {
    // typeName() {
    //   var self = this,
    //     name = "";
    //   this.select.filter((type) => {
    //     if (type.typeId == self.searchPoint.type) {
    //       name = type.typeName;
    //       return;
    //     }
    //   });
    //   return name;
    // },
  },

  created() {
    this.axios.get(`${process.env.VUE_APP_API}/bonus/type`).then((response) => {
      this.select = response.data.detail;
    });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/searchPoint.scss";
</style>