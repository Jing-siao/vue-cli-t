  <template>
  <div class="main container" v-cloak>
    <div class="login">
      <div class="wrap">
        <div class="logoWrap">
          <img src="../../assets/img/long-logo.png" alt="" />
        </div>
        <div class="account">
          <!-- <div> -->
          <label for="">
            <p class="col-sm-2 col-8">身分證字號</p>
            <input
              type="text"
              class="col-sm-6 col-8"
              placeholder="例:A123456789"
            />
          </label>
          <!-- </div> -->

          <label for="">
            <p class="col-sm-2 col-8">使用者代號</p>
            <input
              type="text"
              class="col-sm-6 col-8"
              placeholder="請輸入8-12碼"
            />
          </label>
          <label for="">
            <p class="col-sm-2 col-8">密碼</p>
            <input
              type="password"
              class="col-sm-6 col-8"
              placeholder="請輸入8-12碼"
            />
          </label>
          <label for="">
            <p class="col-sm-2 col-8">驗證碼</p>
            <input
              type="text"
              class="col-sm-6 col-8"
              placeholder="注意大小寫有分"
            />
            <div class="refresh col-sm-10 col-8">
              <img src="../../assets/img/passcode.png" alt="" />
              <i class="fas fa-sync">刷新驗證碼</i>
            </div>
          </label>
          <div class="button">
            <button class="col-4">
              <a href="javascript:;">立即註冊</a>
            </button>
            <button type="submit" class="col-4">登入</button>
          </div>
          <div class="forgetPassword">
            <a href="javascript:;">忘記密碼?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- @import '../../assets/public/main.scss' -->
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
};
</script>

<style lang="sass" scoped>
@import '../../assets/public/main.scss'
@import '../../assets/scss/login.scss'
</style>