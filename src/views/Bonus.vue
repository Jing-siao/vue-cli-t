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
import pointCard from "@/data/pointCard.json";
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
    };
  },
  computed: {
    pointCard() {
      return pointCard;
    },
    filterData() {
      if (this.type == "all") {
        return this.pointCard;
      } else {
        return this.pointCard.filter((item) => {
          return item.type == this.type;
        });
      }
    },
  },
  methods: {
    getType(val) {
      this.type = val;
      // console.log(val);
    },
  },
  created() {
    this.axios.get(`${process.env.VUE_APP_API}/gift/all`).then((response) => {
      console.log(response.data);
      // this.base64Data = response.data.base64Data;
    });
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
