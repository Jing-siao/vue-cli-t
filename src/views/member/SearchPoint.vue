<template>
  <div class="memberSearchPoint" v-cloak>
    <SearchComponent @pointForm="getDetail" />
    <div class="searchPointTable">
      <table class="formTable" v-if="showDetail">
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
              <td :data-th="tableTh[0]" class="col-md">{{ item.date }}</td>
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
      showDetail: false,
    };
  },
  methods: {
    getDetail(val) {
      this.showDetail = true;
      this.searchPoint = val;
      let { type, strDate, endDate } = this.searchPoint;
      this.axios
        .get(
          `${process.env.VUE_APP_API}/bonus/cust/bonusRecord/${type}?strDate=${strDate}&endDate=${endDate}`
        )
        .then((response) => {
          this.detail = response.data.detail;
          this.getTypeName();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTypeName() {
      this.select.filter((type) => {
        if (type.typeId == this.searchPoint.type) {
          this.typeName = type.typeName;
        }
      });
    },
  },
  computed: {},

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