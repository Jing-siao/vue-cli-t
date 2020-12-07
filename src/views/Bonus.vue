<template>
  <div class="bonus">
    <div class="main container">
      <h1>兌換專區</h1>

      <FilterBonus />

      <SelectOrder />
      <div class="bonusCard">
        <FourCard />
        <FourCard />
      </div>
    </div>
  </div>
</template>
<script>
import FilterBonus from "@/components/FilterBonus.vue";
import SelectOrder from "@/components/SelectOrder.vue";
import FourCard from "../components/FourCard.vue";
export default {
  name: "bonus",
  components: {
    FilterBonus,
    SelectOrder,
    FourCard,
  },
};
</script>
<style lang="scss">
@import "../assets/public/variables.scss";

.bonus {
  @include hederFixed();
  .main {
    margin-top: 50px;

    .bonusCard {
      margin-top: 50px;
    }
  }
}
@media (min-width: 577px) {
  .main {
    min-height: calc(100vh - 259px);
  }
}
@media (max-width: 576px) {
  .main {
    min-height: calc(100vh - 223px);
  }
}
</style>
