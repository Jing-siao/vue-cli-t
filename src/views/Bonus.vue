<template>
  <div class="bonus">
    <div class="main container">
      <h1>兌換專區</h1>
      <FilterBonus />
      <div class="mainBonus col-12">
        <SelectOrder />
        <div class="bonusCard">
          <FourCard />
          <FourCard />
          <FourCard />
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
};
</script>
<style lang="scss">
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
    }}
  }
}
</style>
