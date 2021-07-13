<template>
  <div class="memberSentPoint" v-cloak>
    <form class="row">
      <div class="fromBlock col-md-5">
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
            <p>有效點數</p>
            <p>{{ fromPoint.point }}</p>
          </div>
        </div>
      </div>
      <div class="switchBlock col-md-2">
        <i class="fas fa-angle-double-right"></i>
      </div>
      <div class="toBlock col-md-5">
        <div class="bg">
          <h5>贈送的點數</h5>
          <div>
            <p>贈送點數</p>
            <input type="number" name="" id="" v-model="toPoint.point" />
          </div>
          <div>
            <p>贈送對象</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="對方的email"
              v-model="toPoint.email"
            />
          </div>
          <div>
            <p>手機末三碼</p>
            <input type="number" name="" id="" v-model="toPoint.phone" />
          </div>
        </div>
      </div>
      <button class="first col-sm-3 col-md-2">確認贈送</button>
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
        pointNum: 0,
        email: "",
        phone: "",
      },
      select: [],
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
@import "@/assets/scss/sentPoint.scss";
</style>