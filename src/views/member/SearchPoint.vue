<template>
  <div class="memberSearchPoint">
    <form action="#">
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
    </form>
    <div class="searchPointTable">
      <table class="formTable">
        <thead>
          <tr class="row">
            <th class="col-md" v-for="th in tableTh" :key="th">{{ th }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="row" v-for="(item, index) in detail" :key="index">
            <td class="col-md" :data-th="tableTh[0]">
              {{ item.date }}
            </td>
            <td :data-th="tableTh[1]" class="col-md">{{ item.note }}</td>
            <td :data-th="tableTh[2]" class="col-md">{{ selsctType }}</td>
            <td :data-th="tableTh[3]" class="col-md">{{ item.bonus }}</td>
            <td :data-th="tableTh[4]" class="col-md">{{ item.expiryDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ptype: null,
      selsctType: "",
      typeName: "財富點",
      select: [],
      strDateShow: false,
      searchecord: {
        strDate: "",
        endDate: "",
      },
      modelConfig: {
        type: "string",
        mask: "YYYY-MM-DD", // Uses 'iso' if missing
      },
      tableTh: ["日期", "說明", "點數類型", "點數異動", "有效期限"],

      detail: [
        {
          bonus: 20,
          date: "2021-01-22",
          expiryDate: "2021-01-22",
          note: "會員生日禮",
        },
        {
          bonus: 30,
          date: "2021-01-22",
          expiryDate: "2021-01-22",
          note: "會員生日禮",
        },
      ],
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
  created() {
    this.axios.get(`${process.env.VUE_APP_API}/bonus/type`).then((response) => {
      this.select = response.data.detail;
    });
  },
};
</script>
<style lang="scss" scoped>
.memberSearchPoint {
  form {
    // border: 1px solid black;
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
        // padding: 0;
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
  .searchPointTable {
    // border: 1px solid black;
    margin-top: 20px;
    table {
      // border: 1px solid rgb(243, 45, 45);
      width: 100%;
      .row {
        margin: 0;
      }
      thead tr th {
        // border: 1px solid rgb(243, 45, 45);
        // text-align: left;
        padding: 0.6rem 0;
      }
      tbody td {
        background-color: $mainColor;
      }
    }
  }
}
@media (min-width: 768px) {
  label {
    padding: 0;
  }
  .searchPointTable {
    thead tr th {
      background-color: whitesmoke;
      // color: $grey;
      border-right: 1px solid $darkgrey;
      &:last-child {
        border-right: none;
      }
    }
    tbody tr {
      border-bottom: 1px solid $darkgrey;
      &:last-child {
        border-bottom: none;
      }

      td {
        border-right: 1px solid $darkgrey;
        padding: 0.5rem 5px;
        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  p {
    padding-right: 5px;
  }
  .searchPointTable {
    thead tr th {
      // border: 1px solid rgb(45, 243, 111);
      display: none;
    }

    tbody {
      tr {
        margin: 10px;
        border-bottom: 6px solid $grey;

        td {
          padding: 0.5rem 0;
          &::before {
            content: attr(data-th) " ";
            width: 5.5rem;
            padding-right: 5px;
            font-weight: bold;
            // width: 6.5em;
            display: inline-block;
          }
        }
      }
    }
  }
}
@media (max-width: 575px) {
  select {
    margin-left: 15px;
  }
  label {
    margin-top: 8px;
  }
}
</style>