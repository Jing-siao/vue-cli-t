<template>
  <div class="question">
    <div class="main container">
      <h1>Q&amp;A 常見問題</h1>
      <QuestionComponent />
    </div>
  </div>
</template>

<script>
import QuestionComponent from "../components/QuestionComponent.vue";
export default {
  name: "question",
  components: {
    QuestionComponent,
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.question {
  @include hederFixed();
  min-height: calc(100vh - 124px);
  .main {
    margin-top: 40px;
  }
}
</style>
