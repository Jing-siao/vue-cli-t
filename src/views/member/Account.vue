<template>
  <div class="memberAccount">
    <form action="">
      <table>
        <tr class="row">
          <td class="col-4 col-sm-3">
            <p>姓名</p>
          </td>
          <td class="col-8 col-sm-9">
            <p>{{ account.name }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3">
            <p>身份證字號</p>
          </td>
          <td class="col-8 col-sm-9">
            <p>{{ account.idNumber }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3"><p>出生日期</p></td>
          <td class="col-8 col-sm-9">
            <p>{{ account.birthday }}</p>
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3"><p>Email</p></td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn">{{ account.email }}</p>
            <input type="text" v-if="showBtn" v-model.trim="account.email" />
          </td>
        </tr>
        <tr class="row">
          <td class="col-4 col-sm-3"><p>手機號碼</p></td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn">{{ account.phoneNumber }}</p>
            <input
              type="text"
              v-if="showBtn"
              v-model.trim="account.phoneNumber"
            />
          </td>
        </tr>
        <tr class="row address">
          <td class="col-4 col-sm-3"><p>聯絡地址</p></td>
          <td class="col-4 col-sm-3">
            <p v-if="hideBtn">{{ account.city }}</p>
            <select name="" id="" v-if="showBtn">
              請選擇
              <option value="1">{{ account.city }}</option>
              <option value="2">新北市</option>
              <option value="3">台北市</option>
            </select>
          </td>
          <td class="col-4 col-sm-3">
            <p v-if="hideBtn">{{ account.dist }}</p>
            <select name="" id="" v-if="showBtn">
              <option value="1">{{ account.dist }}</option>
              <option value="2">內湖區</option>
              <option value="3">內湖區</option>
            </select>
          </td>
          <td class="col-4 col-sm-3">
            <!-- <p v-if="hideBtn">114178</p> -->
            <!-- <input
              type="text"
              v-if="showBtn"
              id="postalCode"
              placeholder="請填郵遞區號"
            /> -->
          </td>
          <td class="col-8 col-sm-9">
            <p v-if="hideBtn">{{ account.address }}</p>
            <input type="text" v-if="showBtn" v-model.trim="account.address" />
          </td>
        </tr>
      </table>
      <div>
        <button class="first" @click="showHandler" v-if="hideBtn">
          修改資料
        </button>
        <button class="first" v-if="showBtn" @click="submitlHandler">
          確認修改
        </button>
        <button class="cancel" v-if="showBtn" @click="cancelHandler">
          取消
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "account",
  data() {
    return {
      showBtn: false,
      hideBtn: true,
      contacts: [],
      editIndex: null,
      // showInput: false,
      account: {
        name: "國眾電腦",
        idNumber: "A123456789",
        birthday: "2020-11-30",
        email: "123456@gmail.com",
        phoneNumber: "0912345678",
        city: "台北市",
        dist: "內湖區",
        address: "這邊是地址這邊是地址這邊是地址",
      },
      city: ["台北市"],
      // input: {
      //   email: "",
      //   phone: "",
      // },
    };
  },

  methods: {
    showHandler() {
      this.showBtn = true;
      this.hideBtn = false;
      // let email = this.account[email];
      // this.showInput = true;
      // let { phone, email } = this.contacts;
      // this.editIndex = index;
      // email = this.input[email];
      // this.input = {
      //   phone,
      //   email,
      // };
    },
    submitlHandler() {
      this.showBtn = false;
      this.hideBtn = true;
    },
    cancelHandler() {
      this.showBtn = false;
      this.hideBtn = true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/account.scss";
</style>