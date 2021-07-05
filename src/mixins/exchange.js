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
          let kind = response.data.kind
          if (kind) {
            message = `兌換成功<p>${response.data.name}一份</p>`;
            this.ifShowBtn(false, message);
            if (kind == "E05") {
              let url = "https://technews.tw/"
              window.open(url, '_blank')
              // this.handleWindow()
            } else if (kind == "E02") {
              // let url = response.data.url
              let url = "https://technews.tw/"
              window.open(url, '_blank')
            }
            setTimeout(() => {
              this.$router.push(`/member/exchangeRecord`);
            }, 3000);
          } else {
            message = `兌換失敗<p>${response.data.message}</p>`;
            this.ifShowBtn(false, message)
          }
        })
        .catch((err) => {
          let message = err.response.data.message;
          this.oneLine = true
          message == "" ?
            message = "兌換失敗" :
            message = `${message}`;
          console.log(err.response.data);
          this.ifShowBtn(false, message)
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
    handleWindow() {
      //開啟新視窗的功能
      let route = this.$router.resolve({
        name: 'ExchangeSuccess',
      })
      //儲存參數數的功能
      // sessionStorage.setItem("guid", guid);
      window.open(route.href, '_blank')
    },

  },

}