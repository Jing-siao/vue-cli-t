<template>
  <div class="Signup">
    <SignupComponent />
  </div>
</template>
<script>
import SignupComponent from "@/components/public/SignupComponent.vue";

export default {
  name: "Signup",
  data() {
    return {};
  },
  components: {
    SignupComponent,
  },
};
</script>

<style lang="scss" scoped>
.Signup {
  @include hederFixed();
}
</style>
