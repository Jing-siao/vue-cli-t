<template>
  <div>
    <h1>點數總覽</h1>
    <my-select v-model="townIndex" :source="towns"></my-select>
    <my-select v-model="areaIndex" :source="areas"></my-select>
    {{ zip }}
  </div>
</template>
<script>
import cities from "@/data/cities.json";
import CitySelect from "@/components/memberContent/CitySelect.vue";
let towns = () => cities.map((x) => x.name);

let areas = function () {
  return cities[this.townIndex].areas.map((x) => x.name);
};

let zip = function () {
  return cities[this.townIndex].areas[this.areaIndex].zip;
};

let townIndex = function () {
  this.areaIndex = 0;
};
export default {
  name: "App",
  components: {
    CitySelect,
  },
  data: () => ({
    townIndex: 0,
    areaIndex: 0,
  }),
  computed: {
    towns,
    areas,
    zip,
  },
  watch: {
    townIndex,
  },
};
</script>
<style lang="scss" scoped>
</style>