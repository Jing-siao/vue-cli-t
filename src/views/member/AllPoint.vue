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
      <table v-for="(table, index) in tables" :key="index">
        <thead>
          <tr class="row">
            <th class="col-md" v-for="th in tableTh" :key="th">{{ th }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="hasData row">
            <td :data-th="tableTh[0]" class="col-md">
              {{ table.typeName }}
            </td>
            <td :data-th="tableTh[1]" class="col-md">{{ table.total }}</td>
            <td :data-th="tableTh[2]" class="col-md">
              <div v-for="(data, index) in table.datas" :key="index">
                {{ data.cnt }} ({{ data.expiryDate }})
              </div>
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
      types: [],
      tableTh: ["點數類型", "有效總點數", "年度點數(到期日)"],
      tables: [
        // {
        //   total: 200,
        //   typeName: "財富點",
        //   datas: [
        //     {
        //       cnt: 130,
        //       expiryDate: "2021-12-31",
        //     },
        //     {
        //       cnt: 70,
        //       expiryDate: "2022-12-31",
        //     },
        //   ],
        // },
        // {
        //   total: 80,
        //  typeName: "自由點",
        //   datas: [
        //     {
        //       cnt: 30,
        //       expiryDate: "2021-12-31",
        //     },
        //     {
        //       cnt: 50,
        //       expiryDate: "2022-12-31",
        //     },
        //   ],
        // },
      ],
    };
  },

  created() {
    this.userName = sessionStorage.getItem("userName");
    this.axios
      .get(`${process.env.VUE_APP_API}/bonus/type`)
      .then((response) => {
        this.types = response.data.detail;
      })
      .then(() => {
        //跑有幾支api迴圈
        this.types.forEach((type) => {
          this.axios
            .all([
              this.axios.get(
                `${process.env.VUE_APP_API}/bonus/cust/${type.typeId}`
              ),
            ])
            .then(
              this.axios.spread((res) => {
                // console.log(res);
                this.tables.push(res.data);
                // this.tables.forEach((arr) => {
                //   // this.tables.push({ typeName: "123" }, { typeName: "456" });
                //   arr[0].typeName = type[0].typeName;
                // });
                // this.typeName();
              })
            );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // computed: {
  //   typeName() {
  //     this.types.forEach((item) => {
  //       console.log(item.typeName);
  //       // return item.typeName;
  //     });
  //   },
  // },
  methods: {
    name() {
      this.types.forEach((item) => {
        item.typeName = this.tables.typeName;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/allPoint.scss";
// .allPoint {
//   border: 1px solid black;
// }
</style>