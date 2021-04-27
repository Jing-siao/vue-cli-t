export default {
  methods: {
    exchange(name, cnt, ptypeName) {
      let isLogin = this.$store.state.isLogin;
      if (isLogin === false) {
        alert("請先登入");
        this.$router.push({ name: "Login" });
        // let message = "請先登入"
        // this.ifShowBtn(false, message)
      } else {
        let message = "";
        message = `確認要兌換1份${name}嗎?<p>將扣除${cnt}點${ptypeName}</p>`;
        this.ifShowBtn(true, message);
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
            this.ifShowBtn(false, message)
          } else {
            message = `兌換失敗<p>${response.data.message}</p>`;
            this.ifShowBtn(false, message)
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
    ifShowBtn(boolean, message) {
      if (this.$route.params.guid) {
        this.msg = message;
        this.showPop = true;
        this.showBtn = boolean;
      } else {
        this.$emit("msg", message)
      }
    },


  },

}