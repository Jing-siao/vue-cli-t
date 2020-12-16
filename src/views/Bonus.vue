<template>
  <div class="bonus">
    <div class="main container">
      <h1>兌換專區</h1>
      <FilterBonus @type="getType"> </FilterBonus>
      <div class="mainBonus col">
        <SelectOrder />
        <div class="bonusCard row">
          <FourCard v-for="item in filterData" :key="item.title" :data="item" />
          <!-- v-on:cardType="filterData" -->
        </div>
      </div>
      <Pagination />
    </div>
    <GoTOPBtn />
  </div>
</template>
<script>
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
      point: [
        {
          type: "coffee",
          title: "cama cafe 中杯紅茶拿鐵兌換券",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "110",
        },
        {
          type: "coffee",
          title: "麥當勞McCafe特選熱那堤(中)即享券",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "210",
        },
        {
          type: "food",
          title: "陶板屋和風創作料理套餐即享券(價值$625)",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          type: "art",
          title: "誠品生活即享券500元",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "115",
        },
        {
          type: "art",
          title: "誠品生活即享券600元",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          type: "art",
          title: "誠品生活即享700元",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          type: "art",
          title: "誠品生活即享800元",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
      ],
    };
  },
  computed: {
    filterData() {
      if (this.type == "all") {
        return this.point;
      } else {
        return this.point.filter((item) => {
          return item.type == this.type;
        });
      }
    },
  },
  methods: {
    getType(val) {
      this.type = val;
      console.log(val);
    },
  },
};
</script>
<style lang="scss" >
@import "../assets/public/variables.scss";

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
        margin-top: 15px;
        padding: 0 15px;
      }
    }
  }
}
</style>
