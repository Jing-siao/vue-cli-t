<template>
  <form @submit="pointForm">
    <div class="type row">
      <p class="col-sm-2">點數類型</p>
      <select name="" id="" v-model="formVal.type">
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
          v-model="formVal.strDate"
          :model-config="modelConfig"
          :min-date="minDate"
          :max-date="new Date()"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input :value="inputValue" v-on="inputEvents" />
          </template>
        </vc-date-picker>
      </label>
      <label for="" class="col-12 col-sm-6 col-md-5 col-lg-4"
        >結束日期
        <vc-date-picker
          v-model="formVal.endDate"
          :model-config="modelConfig"
          :min-date="formVal.strDate"
          :max-date="new Date()"
        >
          <template v-slot="{ inputValue, inputEvents }">
            <input :value="inputValue" v-on="inputEvents" />
          </template>
        </vc-date-picker>
      </label>
    </div>
    <button type="submit" class="first">
      <i class="fas fa-search"></i>查詢
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      select: [],
      formVal: {
        type: "",
        strDate: "",
        endDate: "",
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  mounted() {
    this.axios.get(`${process.env.VUE_APP_API}/bonus/type`).then((response) => {
      this.select = response.data.detail;
      this.formVal.type = this.select[0].typeId;
    });
  },
  methods: {
    pointForm() {
      if (this.formVal.type && this.formVal.strDate && this.formVal.endDate) {
        this.$emit("pointForm", this.formVal);
        this.clearForm();
      } else {
        alert("請輸入日期");
        return;
      }
    },
    clearForm() {
      this.formVal.type = this.select[0].typeId;
      this.formVal.strDate = "";
      this.formVal.endDate = "";
    },
  },
  computed: {
    minDate() {
      let nDate = new Date();
      let minDate = nDate.setMonth(nDate.getMonth() - 6);
      return minDate;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/searchComponent.scss";
</style>