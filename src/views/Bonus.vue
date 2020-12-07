<template>
  <div class="bonus">
    <div class="main container">
      <h1>兌換專區</h1>
      <!-- <QuestionComponent /> -->
    </div>
  </div>
</template>
<style lang="scss">
@import "../assets/public/variables.scss";
.bonus {
  @include hederFixed();
  min-height: calc(100vh - 124px);
  .main {
    margin-top: 50px;
  }
}
</style>
