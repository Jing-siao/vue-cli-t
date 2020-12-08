<template>
  <div class="pagination">
    <a href="#">
      <i class="fas fa-long-arrow-alt-left"></i>
    </a>
    <a href="#">
      <i class="fas fa-angle-left"></i>
    </a>
    <a href="#">1</a>
    <a class="active" href="#">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">
      <i class="fas fa-angle-right"></i>
    </a>
    <a href="#">
      <i class="fas fa-long-arrow-alt-right"></i>
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/public/variables.scss";
.pagination {
  // border: 1px solid blue;
  margin-top: 10px;
  padding: 8px;
  text-align: center;
  a {
    color: $grey;
    // border: 1px solid blue;
    padding: 5px 9px;
    border-radius: 50%;
    margin: 0 5px;
    display: inline-block;

    &:hover {
      background-color: $grey;
      color: $body;
    }
    &:first-child,
    &:last-child {
      padding: 5px 8px;
      margin: 0 10px;
    }
    i {
      vertical-align: middle;
    }
  }
}
</style>