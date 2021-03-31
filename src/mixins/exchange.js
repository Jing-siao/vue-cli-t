export default {
  methods: {
    exchange() {
      let isLogin = this.$store.state.isLogin;
      if (isLogin === false) {
        alert("請先登入");
        this.$router.push({ name: "Login" });
      } else {
        alert("兌換成功");
      }
    },
  },
}