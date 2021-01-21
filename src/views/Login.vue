<template>
  <div class="login">
    <LoginComponent />
  </div>
</template>
<script>
import LoginComponent from "@/components/public/LoginComponent.vue";

export default {
  name: "Login",
  data() {
    return {};
  },
  components: {
    LoginComponent,
  },
};
</script>

<style lang="scss" scoped>
.login {
  @include hederFixed();
}
</style>
