<template>
  <div class="memberExchangeRecord" v-cloak>
    <SearchComponent @pointForm="getDetail" />
    <div class="exchangeRecordTable">
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
              <td :data-th="tableTh[1]" class="col-md">{{ typeName }}</td>
              <td :data-th="tableTh[2]" class="col-md">{{ item.itemName }}</td>
              <td :data-th="tableTh[3]" class="col-md">{{ item.cnt }}</td>
              <td :data-th="tableTh[4]" class="col-md">
                <a :href="item.url" target="_blank">{{ item.serial }}</a>
              </td>
              <template v-if="item.note">
                <td :data-th="tableTh[5]" class="col-md">{{ item.note }}</td>
              </template>
              <template v-else>
                <td :data-th="tableTh[5]" class="col-md noNote">無</td>
              </template>
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
      exchangeRecord: {},
      typeName: "",
      tableTh: ["日期", "點數類型", "商品名稱", "兌換數量", "兌換序號", "備註"],
      detail: [],
      showDetail: false,
    };
  },
  methods: {
    getDetail(val) {
      let { type, strDate, endDate } = this.exchangeRecord;
      this.exchangeRecord = val;
      this.axios
        .get(
          `${process.env.VUE_APP_API}/cust/excRecord/${type}?strDate=${strDate}&endDate=${endDate}`
        )
        .then((response) => {
          this.detail = response.data.detail;
          this.getTypeName();
          this.showDetail = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getTypeName() {
      this.select.filter((type) => {
        if (type.typeId == this.exchangeRecord.type) {
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
  mounted() {
    let ptype = sessionStorage.getItem("ptype");
    let ptypeId = sessionStorage.getItem("ptypeId");
    let today = new Date().toISOString().split("T")[0];
    if (ptype) {
      this.axios
        .get(
          `${process.env.VUE_APP_API}/cust/excRecord/${ptype}?strDate=${today}&endDate=${today}`
        )
        .then((response) => {
          this.detail = response.data.detail;
          this.typeName = ptypeId;
          // this.getTypeName();
          this.showDetail = true;
          sessionStorage.removeItem("ptype");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/exchangeRecord.scss";
</style>