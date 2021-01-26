<template>
  <div class="allPoint">
    <div class="memberName">
      <p class="name">
        <i class="fas fa-user-circle"></i>
        {{ userName }}
      </p>
      <p>你好</p>
    </div>
    <div class="row allPointTable">
      <table>
        <thead>
          <tr class="row">
            <th class="col-md">點數類型</th>
            <th class="col-md">有效總點數</th>
            <th class="col-md">年度點數(到期日)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hasData row">
            <td data-th="點數類型" class="col-md" rowspan="2">財富點</td>
            <td data-th="有效總點數" class="col-md" rowspan="2">40</td>
            <td data-th="年度到期點數" class="col-md">
              <div>20 (2021-12-31)</div>
              <div>20 (2021-12-31)</div>
            </td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr class="row">
            <th class="col-md">點數類型</th>
            <th class="col-md">有效總點數</th>
            <th class="col-md">年度點數(到期日)</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hasData row">
            <td data-th="點數類型" class="col-md" rowspan="2">財富點</td>
            <td data-th="有效總點數" class="col-md" rowspan="2">40</td>
            <td data-th="年度到期點數" class="col-md">
              <div>20 (2021-12-31)</div>
              <div>20 (2021-12-31)</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "allPoint",
  components: {},
  data() {
    return {
      userName: "",
    };
  },

  created() {
    this.userName = sessionStorage.getItem("userName");
    this.axios
      .get(`${process.env.VUE_APP_API}/bonus/type`)
      .then((response) => {
        this.select = response.data.detail;
        this.formVal.type = this.select[0].typeId;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  watch: {},
  mounted() {},
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/allPoint.scss";
// .allPoint {
//   border: 1px solid black;
// }
</style>