<template>
  <div class="changePassword">
    <form action="#" class="col-12 col-sm-9 col-md-8 col-lg-6">
      <div class="row" v-for="label in labelList" :key="label.title">
        <label for="" class="col-sm-5 col-md-4">{{ label.title }}</label>
        <input
          type="password"
          class="col-sm-7"
          v-model.trim.lazy="label.input"
        />
      </div>
      <div class="row">
        <button class="first">確認</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "changePassword",
  data() {
    return {
      labelList: [
        { title: "舊密碼", input: "" },
        { title: "新密碼", input: "" },
        { title: "確認新密碼", input: "" },
        { title: "會員註冊手機末三碼", input: "" },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/changePassword.scss";
</style>