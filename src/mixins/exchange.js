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
          alert(response.data.message);
          if (!this.$route.params.guid) {
            this.$router.go(0);
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
  },

}