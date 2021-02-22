<template>
  <div class="otherSet">
    <p class="title">目前已設定之他行金融卡帳號</p>
    <div class="tableLine">
      <table>
        <thead>
          <tr class="row">
            <th class="col-md" v-for="th in tableTh" :key="th">{{ th }}</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="detail.length > 0">
            <tr class="row hasData" v-for="item in detail" :key="item.id">
              <td class="col-md" :data-th="tableTh[0]">{{ item.accno }}</td>
              <td class="col-md" :data-th="tableTh[1]">
                <template v-if="item.main === true">此為主卡不可解除</template>
                <template v-if="item.main === false">
                  <button
                    class="delete"
                    @click="deleteCard(item.id, item.accno)"
                  >
                    解除
                  </button>
                </template>
              </td>
            </tr>
          </template>
          <template v-else>
            <tr>
              <td colspan="3" class="noData">暫無資料</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>

    <p class="warning">※本功能僅開放新增他行金融卡</p>
    <button class="first">新增金融卡</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableTh: ["銀行帳號", "解除綁定"],
      detail: [],
    };
  },
  methods: {
    getDetail() {
      this.axios
        .get(`${process.env.VUE_APP_API}/cust/card`)
        .then((response) => {
          this.detail = response.data.detail;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteCard(id, name) {
      if (confirm(`確認要解除${name}綁定?`)) {
        this.axios
          .delete(`${process.env.VUE_APP_API}/cust/card/${id}`)
          .then((response) => {
            alert(response.data.message);
            this.getDetail();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
  computed: {},

  mounted() {
    this.getDetail();
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/public/mixins/_table.scss";
.otherSet {
  p.title {
    padding-left: 0;
    margin-bottom: 10px;
  }
  .tableLine {
    @include table();
  }
}
@media (min-width: 768px) {
  .tableLine {
    text-align: center;
    margin-bottom: 20px;
    td {
      line-height: 29px;
    }
  }
}
</style>