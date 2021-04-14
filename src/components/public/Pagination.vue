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
        if (this.paginationService.currentPage !== page) {
          let type = this.$route.params.type;
          this.$router.push(`/bonus/${type}/${page}`); //router-link會閃
          this.$emit("pageService", page);
        }
        this.showPages(page);
      }
    },
    showPages(page) {
      let mod = page % this.multiple;
      let pageLast = this.paginationService.pageTotal;
      if (page === pageLast) {
        this.minPage = page - 3;
        this.maxPage = page;
      } else {
        if (mod == 1 && page != pageLast) {
          this.minPage = page;
          this.maxPage = page + 3;
        } else if (mod == 2 && page != pageLast) {
          this.minPage = page - 1;
          this.maxPage = page + mod;
        } else if (mod == 0 && page != pageLast) {
          this.minPage = page - 2;
          this.maxPage = page + 1;
        }
      }
    },
  },
  updated() {
    this.showPages(this.paginationService.currentPage);
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