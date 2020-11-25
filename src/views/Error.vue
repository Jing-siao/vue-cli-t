<template>
  <div class="error">
    <h1>404此頁面不存在</h1>
  </div>
</template>
 <style lang="scss" scoped>
.error {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: rgb(36, 36, 36);
  width: 100%;
  // height: calc(100vh - 85px);
  height: 100vh;

  h1 {
    margin-top: 50px;
  }
}
</style>