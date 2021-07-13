<template>
  <div class="memberSwitchPoint" v-cloak>
    <form class="row">
      <div class="fromBlock col-md-4">
        <div>
          <div class="bg">
            <h5>我的點數</h5>
            <div>
              <p>點數類型</p>
              <select v-model="type">
                <option
                  v-for="type in select"
                  :value="type.typeId"
                  :key="type.guid"
                >
                  {{ type.typeName }}
                </option>
              </select>
            </div>
            <div>
              <p>{{ lastText }}</p>
              <p>{{ fromPoint.point }}</p>
            </div>
            <div>
              <p>兌換數量</p>
              <input type="number" name="" id="" />
            </div>
          </div>
        </div>
      </div>
      <div class="switchBlock col-md-4">
        <i class="fas fa-angle-double-right"></i>
        <h5>兌換比率 5：1</h5>
      </div>
      <div class="toBlock col-md-4">
        <div class="bg">
          <h5>兌換的點數</h5>
          <div>
            <p>點數類別</p>
            <p>{{ toPoint.typeName }}</p>
          </div>
          <div>
            <p>{{ lastText }}</p>
            <p>{{ toPoint.point }}</p>
          </div>
          <div>
            <p>可兌換</p>
            <p>{{ toPoint.num }}</p>
          </div>
        </div>
      </div>
      <button class="first col-sm-3 col-md-2">確認轉換</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: "",
      fromPoint: {
        type: "",
        point: 500,
        num: 0,
      },
      toPoint: {
        typeName: "",
        type: "",
        point: 200,
        num: 0,
      },
      select: [],
      lastText: "剩餘點數",
    };
  },
  methods: {},
  computed: {},
  watch: {
    type(newVal) {
      if (newVal == this.select[0].typeId) {
        this.toPoint.typeName = this.select[1].typeName;
        this.toPoint.type = this.select[1].type;
      } else {
        this.toPoint.typeName = this.select[0].typeName;
        this.toPoint.type = this.select[0].type;
      }
    },
  },
  created() {
    this.axios.get(`${process.env.VUE_APP_API}/bonus/type`).then((response) => {
      this.select = response.data.detail;
      this.type = this.select[0].typeId;
    });
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/switchPoint.scss";
</style>