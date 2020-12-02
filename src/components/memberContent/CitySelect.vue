<template>
  <select v-model="index">
    <option :value="null" disabled>請選擇</option>
    <option v-for="(item, i) in options" :value="i" :key="i">
      {{ item.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "citySelect",
  props: ["options", "value"],
  data() {
    return {};
  },
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