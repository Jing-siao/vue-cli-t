<template>
  <div class="bonus">
    <div class="main container">
      <h1>兌換專區</h1>
      <FilterBonus @type="getType"> </FilterBonus>
      <div class="mainBonus col">
        <SelectOrder />
        <div class="bonusCard row">
          <FourCard
            v-for="item in filterData.slice(
              pagination.minPage,
              pagination.maxPage
            )"
            :key="item.guid"
            :data="item"
            :thisPage="pagination.currentPage"
            @pageService="countPageData"
          />
        </div>
      </div>
      <Pagination
        :paginationService="pagination"
        @pageService="countPageData"
      />
    </div>
    <GoTOPBtn />
  </div>
</template>
<script>
// import pointCard from "@/data/pointCard.json";
import FilterBonus from "@/components/FilterBonus.vue";
import SelectOrder from "@/components/SelectOrder.vue";
import FourCard from "../components/FourCard.vue";
import Pagination from "@/components/public/Pagination.vue";
import GoTOPBtn from "../components/public/GoTOPBtn.vue";
// import BonusDetail from "@/components/BonusDetail.vue";

export default {
  name: "bonus",
  components: {
    FilterBonus,
    SelectOrder,
    FourCard,
    Pagination,
    GoTOPBtn,
  },
  // mixins: [BonusDetail],
  data() {
    return {
      data: [],
      type: "all",
      pagination: {},
    };
  },
  computed: {
    // pointCard() {
    //   // this.cacheProducts.forEach((item, index) => {
    //   //   let num = index + 1;
    //   //   if (num >= this.pagination.minPage && num <= this.pagination.maxPage) {
    //   //     return pointCard.push(item);
    //   //   }
    //   return pointCard;
    //   // });
    // },
    filterData() {
      if (this.type == "all") {
        return this.data;
      } else {
        return this.data.filter((item) => {
          return item.type == this.type;
        });
      }
    },
  },
  // watch: {
  //   $route(to, from) {
  //     if (this.$route.params.page == 1) {
  //       this.$router.go(0);
  //     }
  //     console.log(to, from);
  //   },
  // },
  methods: {
    getType(val) {
      this.type = val;
      this.pages();
    },
    pages() {
      //先解構
      let {
        totalResult,
        per_page,
        pageTotal,
        currentPage,
        initPage,
      } = this.pagination;
      totalResult = this.filterData.length;
      per_page = 4;
      //無條件進位算總頁數
      pageTotal = Math.ceil(totalResult / per_page);
      // initPage = 1;
      currentPage = currentPage || 1; //有就帶變數 沒有就初始化
      //判斷避免當前頁數超過總頁數
      if (currentPage > pageTotal) {
        currentPage = pageTotal;
      }
      let minPage = currentPage * per_page - per_page;
      let maxPage = currentPage * per_page;

      // console.log(
      //   `總資料數量:${totalResult},每頁數量:${per_page},總頁數:${pageTotal},當前頁數:${currentPage},每頁第一筆:${minPage},每頁最後一筆${maxPage}`
      // );
      this.pagination = {
        totalResult,
        per_page,
        pageTotal,
        initPage,
        currentPage,
        minPage,
        maxPage,
      };
      // console.log(pagination)
    },
    countPageData(pageNum) {
      this.pagination.currentPage = pageNum;
      this.pagination.minPage = (pageNum - 1) * this.pagination.per_page;
      this.pagination.maxPage = pageNum * this.pagination.per_page;
    },
    getGiftData() {
      this.axios
        .get(`${process.env.VUE_APP_API}/gift/all`)
        .then((response) => {
          this.data = response.data.detail;
          this.pages();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getGiftData();
    this.countPageData(this.$route.params.page);
  },
  beforeUpdate() {
    this.pagination;
  },
};
</script>
<style lang="scss" >
.bonus {
  @include hederFixed();
  .main {
    margin-top: 50px;
  }
}
@media (min-width: 577px) {
  .main {
    min-height: calc(100vh - 259px);
    .mainBonus {
      padding: 30px 15px 5px;
      background-color: $darkgrey;
      border-radius: 0 0 0.8rem 0.8rem;
      .bonusCard {
        margin-top: 18px;
        padding: 0 15px;
      }
    }
  }
}
@media (max-width: 576px) {
  .main {
    min-height: calc(100vh - 223px);
    .mainBonus {
      padding: 15px 0 5px;
      .bonusCard {
        margin-top: 8px;
        padding: 0 15px;
      }
    }
  }
}
</style>
