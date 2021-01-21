<template>
  <div class="SignupCardReader">
    <SignupCardReaderComponent />
  </div>
</template>
<script>
import SignupCardReaderComponent from "@/components/public/SignupCardReaderComponent.vue";

export default {
  name: "SignupCardReader",
  data() {
    return {};
  },
  components: {
    SignupCardReaderComponent,
  },
};
</script>

<style lang="scss" scoped>
.SignupCardReader {
  @include hederFixed();
}
</style>
