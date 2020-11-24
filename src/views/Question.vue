<template>
  <div class="question">
    <h1>Q&amp;A 常見問題</h1>
    <div class="main container">
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
  margin-top: 50px;
  min-height: calc(100vh - 236px);
  .main {
    margin-top: 50px;
  }
}
</style>
