<template>
  <div class="bonus">
    <div class="main container">
      <h1>兌換專區</h1>
      <FilterBonus @type="getType"></FilterBonus>
      <div class="mainBonus col">
        <SelectOrder @selected="getSelected" v-if="hasCard" />
        <div class="bonusCard row" v-if="hasCard">
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
        <h5 class="noCard" v-else>暫無贈品</h5>
      </div>
      <Pagination
        v-if="hasCard"
        :paginationService="pagination"
        @pageService="countPageData"
      />
    </div>
    <GoTOPBtn />
    <PopOut
      :propMsg="msg"
      :popOut="showPop"
      :goRecordBtn="showBtn"
      @close="closePop"
    ></PopOut>
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
      url: `${process.env.VUE_APP_API}/gift/all`,
      data: [],
      type: "all",
      selected: "all",
      pagination: {},
      showPop: false,
      showBtn: false,
      msg: "",
      hasCard: true,
    };
  },
  computed: {
    filterData() {
      let sortData = this.data;
      if (this.selected == "all") {
        return this.data;
      } else {
        return sortData.sort((a, b) => {
          if (this.selected == "increase") return a.cnt - b.cnt;
          else return b.cnt - a.cnt;
        });
      }
    },
  },
  watch: {
    $route() {
      if (this.$route.path == "/bonus/all/1") {
        this.type = "all";
        this.url = `${process.env.VUE_APP_API}/gift/all`;
        this.getGiftData(this.url);
        this.countPageData(parseInt(this.$route.params.page));
        this.pagination;
      }
    },
    deep: true,
  },
  methods: {
    getType(val) {
      this.type = val;
      if (val !== "all" && val !== "hot") {
        this.url = `${process.env.VUE_APP_API}/category/gift/${val}`;
      } else {
        this.url = `${process.env.VUE_APP_API}/gift/${val}`;
      }
      this.getGiftData(this.url);
      this.countPageData(1);
    },
    getSelected(val) {
      this.selected = val;
    },
    getUrl() {
      this.type = this.$route.params.type;
      if (this.$route.params.type) {
        if (this.type !== "all" && this.type !== "hot") {
          this.url = `${process.env.VUE_APP_API}/category/gift/${this.type}`;
        } else {
          this.url = `${process.env.VUE_APP_API}/gift/${this.type}`;
        }
      } else {
        this.type = "all";
        this.url = `${process.env.VUE_APP_API}/gift/all`;
        this.$router.push(`/bonus/all/1`);
      }
    },
    pages() {
      //先解構
      let { totalResult, per_page, pageTotal, currentPage, minPage, maxPage } =
        this.pagination;
      totalResult = this.filterData.length;
      per_page = 12;
      //無條件進位算總頁數
      pageTotal = Math.ceil(totalResult / per_page);
      currentPage = currentPage || 1; //有就帶變數 沒有就初始化
      //判斷避免當前頁數超過總頁數
      if (currentPage > pageTotal) {
        currentPage = pageTotal;
      }
      minPage = currentPage * per_page - per_page;
      maxPage = currentPage * per_page;

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
    getGiftData(url) {
      this.axios
        .get(url)
        .then((response) => {
          if (response.data.count !== 0) {
            this.data = response.data.detail;
            this.pages();
            this.hasCard = true;
          } else {
            this.hasCard = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closePop() {
      this.showPop = false;
      this.showBtn = false;
      this.getGiftData(this.url);
    },
  },
  created() {
    this.getUrl();
    this.getGiftData(this.url);
    this.countPageData(parseInt(this.$route.params.page));
  },
  beforeUpdate() {
    this.pagination;
    // this.getGiftData(this.url); //會閃;
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/bonus.scss";
.bonus {
  @include hederFixed();
}
</style>


