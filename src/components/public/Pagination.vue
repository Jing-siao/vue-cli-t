<template>
  <div class="pagination">
    <div
      class="page"
      @click="getPagesService(1)"
      v-if="paginationService.currentPage > 1"
    >
      <i class="fas fa-long-arrow-alt-left"></i>
    </div>
    <div
      class="page"
      @click="getPagesService(paginationService.currentPage - 1)"
      v-if="paginationService.currentPage > 1"
    >
      <i class="fas fa-angle-left"></i>
    </div>
    <ul>
      <li
        v-for="page in paginationService.pageTotal"
        :key="page"
        @click="getPagesService(page)"
        :class="{ active: page == paginationService.currentPage }"
        v-show="page >= minPage && page <= maxPage"
      >
        {{ page }}
      </li>
    </ul>
    <div
      class="page"
      @click="getPagesService(paginationService.currentPage + 1)"
      v-if="paginationService.currentPage < paginationService.pageTotal"
    >
      <i class="fas fa-angle-right"></i>
    </div>
    <div
      class="page"
      @click="getPagesService(paginationService.pageTotal)"
      v-if="paginationService.currentPage < paginationService.pageTotal"
    >
      <i class="fas fa-long-arrow-alt-right"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    paginationService: {
      type: Object,
    },
  },
  data() {
    return {
      minPage: 1,
      maxPage: 4,
      multiple: 3,
    };
  },
  methods: {
    getPagesService(page) {
      if (page > 0 && page <= this.paginationService.pageTotal) {
        this.$emit("pageService", page);
        this.$router.push(`/bonus/${page}`);
      }
      let mod = this.paginationService.currentPage % this.multiple;
      // let ceil = Math.ceil(this.paginationService.currentPage / this.multiple);
      if (mod == 1) {
        this.minPage = this.paginationService.currentPage;
        this.maxPage = this.paginationService.currentPage + 3;
      } else if (mod == 2) {
        this.minPage = this.paginationService.currentPage - 1;
        this.maxPage = this.paginationService.currentPage + mod;
      } else if (mod == 0) {
        this.minPage = this.paginationService.currentPage - 2;
        this.maxPage = this.paginationService.currentPage + 1;
      }
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
  div.page {
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
      // text-align: center;
      display: inline-block;
      color: $grey;
      padding: 5px;
      border-radius: 50%;
      margin: 0 5px;
      height: 30px;
      width: 30px;
      cursor: pointer;
      &:hover {
        background-color: $grey;
        color: $body;
      }
      &.active {
        background-color: $grey;
        color: $body;
      }
    }
  }
}
@media (min-width: 401px) {
  .pagination {
    div.page {
      // border: 1px solid blue;
      padding: 5px;
      border-radius: 50%;
      margin: 0 5px;
      height: 30px;
      width: 30px;
      // line-height: 20px;
      text-align: center;
      &:first-child {
        padding: 5px;
        margin: 0 10px 0 0;
      }
      &:last-child {
        padding: 5px;
        margin: 0 0 0 10px;
      }
    }
  }
}
@media (max-width: 400px) {
  .pagination {
    border: 1px solid blue;
    display: flex;
    justify-content: space-around;
    div.page {
      padding: 4px 5px;
      border-radius: 50%;
      width: 25px;
      height: 26px;
      // padding: 5px;
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