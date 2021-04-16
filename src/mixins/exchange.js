export default {
  methods: {
    exchange(giftGuid) {
      let isLogin = this.$store.state.isLogin;
      if (isLogin === false) {
        alert("請先登入");
        this.$router.push({ name: "Login" });
      } else {
        this.postExchange(giftGuid);
      }
    },

    postExchange(giftGuid) {
      const exchangeApi = `${process.env.VUE_APP_API}/exchange`;
      let gift = {
        giftGuid,
        qty: 1
      };
      this.axios
        .post(exchangeApi, gift)
        .then((response) => {
          let message = "";
          if (response.data.message == "兌換成功") {
            message = `兌換成功<p>欲察看紀錄詳情，請至會員中心兌換紀錄查看</p>`;
            if (this.$route.params.guid) {
              this.msg = message;
              this.showPop = true;
              this.showBtn = true;
            } else {
              this.$emit("msg", message)
            }
          } else {
            message = `兌換失敗<p>${response.data.message}</p>`;
            if (this.$route.params.guid) {
              this.msg = message;
              this.showPop = true;
              this.showBtn = false;
            } else {
              this.$emit("msg", message)
            }
          }

          // this.$nextTick(function () {
          // });
        })
        .catch((err) => {
          console.log(err);
          let message = err.response.data.message;
          alert(message);
        });
    },
    goRecordPage() {
      console.log('123')
      // this.$router.push('/');
      // this.$router.push({ name: 'Member- ExchangeRecord' });
    }
  },

}