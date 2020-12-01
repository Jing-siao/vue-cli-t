<template>
  <select v-model="index">
    <option v-for="(x, i) in options" :value="i" :key="i">
      {{ x }}
    </option>
  </select>
</template>

<script>
export default {
  name: "citySelect",
  props: ["options", "value"],
  computed: {
    index: {
      get() {
        return this.value;
      },
      set(index) {
        this.$emit("input", index);
      },
    },
  },
};
</script>