<template>
  <div class="col orderBy">
    <div class="icon">
      <!-- @click="showSelect = !showSelect" -->
      <i class="fas fa-sort-amount-down"></i>
      <p>排序</p>
    </div>
    <select v-model="selected" @change="sendSelected">
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "selectOrder",
  data() {
    return {
      selected: "all",
      // showSelect: true,
      options: [
        { text: "全部", value: "all" },
        { text: "依點數(少到多)", value: "increase" },
        { text: "依點數(多到少)", value: "decrease" },
      ],
    };
  },
  computed: {},
  methods: {
    sendSelected() {
      this.$emit("selected", this.selected);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/selectOrder.scss";
</style>