<template>
  <div class="memberSearchPoint">
    <form action="#">
      <div class="type row">
        <p class="col-4 col-sm-2">點數查詢</p>
        <select name="" id="">
          <option value="P01">財富點</option>
          <option value="P02">自由點</option>
        </select>
      </div>
      <div class="time row">
        <p class="col-12 col-md-2">查詢區間</p>
        <label for="" class="col-12 col-sm-6 col-md-5 col-lg-4"
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
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      strDateShow: false,
      searchecord: {
        strDate: "",
        endDate: "",
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
    };
  },
  methods: {
    pickstrDate() {
      this.strDateShow = true;
    },
    pickstrDateHide() {
      this.strDateShow = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.memberSearchPoint {
  border: 1px solid black;
  .row {
    margin: 0;
  }
  .type {
    p {
      line-height: 1.2rem;
    }
  }
  .time {
    margin-top: 15px;
    p {
      line-height: 1.2rem;
    }
    label {
      // border: 1px solid rebeccapurple;
      position: relative;
      input {
        width: 150px;
        margin-left: 10px;
      }
      .calendar {
        position: absolute;
        top: 30px;
        left: 0;
        z-index: 2;
      }
    }
  }
  button {
    min-width: 64px;
    i {
      margin-right: 5px;
    }
    // border: 1px solid rgb(197, 24, 24);
  }
}
@media (max-width: 767px) {
  label {
    padding-left: 5px;
  }
}
@media (max-width: 575px) {
  label {
    padding-left: 5px;
    margin-top: 8px;
  }
}
</style>