<template>
  <div class="pagination">
    <a href="#">
      <i class="fas fa-long-arrow-alt-left"></i>
    </a>
    <a href="#">
      <i class="fas fa-angle-left"></i>
    </a>
    <ul>
      <li v-for="page in paginationService.pageTotal" :key="page">
        {{ page }}
      </li>
    </ul>
    <a href="#">
      <i class="fas fa-angle-right"></i>
    </a>
    <a href="#">
      <i class="fas fa-long-arrow-alt-right"></i>
    </a>
  </div>
</template>
<script>
export default {
  props: {
    paginationService: {
      type: Object,
    },
  },
  methods: {
    getPagesService(item) {
      this.$emit("pageService", item);
    },
  },
};
</script>
<style lang="scss" scoped>
.pagination {
  // border: 1px solid blue;
  margin-top: 10px;
  padding: 8px 0;
  text-align: center;
  a {
    color: $grey;
    // border: 1px solid blue;

    display: inline-block;
    &:hover {
      background-color: $grey;
      color: $body;
    }

    i {
      vertical-align: middle;
    }
  }
  ul {
    // border: 1px solid black;
    display: inline-block;
    li {
      // border: 1px solid red;
      display: inline-block;
      color: $grey;
      padding: 5px 9px;
      border-radius: 50%;
      margin: 0 5px;
      cursor: pointer;
      &:hover {
        background-color: $grey;
        color: $body;
      }
      &:active {
        background-color: $grey;
        color: $body;
      }
    }
  }
}
@media (min-width: 401px) {
  .pagination {
    a {
      padding: 5px 9px;
      border-radius: 50%;
      margin: 0 5px;
      &:first-child {
        padding: 5px 8px;
        margin: 0 10px 0 0;
      }
      &:last-child {
        padding: 5px 8px;
        margin: 0 0 0 10px;
      }
    }
  }
}
@media (max-width: 400px) {
  .pagination {
    display: flex;
    justify-content: space-between;
    a {
      padding: 4px 8px;
      border-radius: 50%;
      margin: 0 2px;
      &:first-child {
        padding: 5px 7px;
        margin: 0 5px 0 0;
      }
      &:last-child {
        padding: 5px 7px;
        margin: 0 0 0 5px;
      }
    }
  }
}
</style>