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
            :key="item.title"
            :data="item"
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

export default {
  name: "bonus",
  components: {
    FilterBonus,
    SelectOrder,
    FourCard,
    Pagination,
    GoTOPBtn,
  },

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
  methods: {
    getType(val) {
      this.type = val;
      this.pages();
    },
    pages() {
      //先解構
      let { totalResult, per_page, pageTotal, currentPage } = this.pagination;
      totalResult = this.filterData.length;
      per_page = 4;
      //無條件進位算總頁數
      pageTotal = Math.ceil(totalResult / per_page);
      currentPage = 1;
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
  },
  created() {
    this.axios
      .get(`${process.env.VUE_APP_API}/gift/all`)
      .then((response) => {
        this.data = response.data.detail;
        // console.log(this.data);
        this.pages();
      })
      .catch((err) => {
        console.log(err);
      });
  },
  beforeUpdate() {
    this.pagination;
    // this.pages();
    // this.countPageData();
    // this.pointCard;
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
