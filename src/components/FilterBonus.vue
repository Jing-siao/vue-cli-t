<template>
  <div class="FilterBonus">
    <ul>
      <li
        v-for="(list, index) in bonusList"
        :key="list.title"
        :class="{ active: visibility == list.visibility }"
        @click="visibilityShow(index)"
      >
        <i :class="list.iconClass"></i>
        {{ list.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "filterBonus",
  // props: ["type"],
  data() {
    return {
      visibility: "all",
      bonusList: [
        {
          title: "全部",
          visibility: "all",
          iconClass: "fas fa-tag",
        },
        {
          title: "推薦",
          visibility: "recommend",
          iconClass: "fas fa-thumbs-up",
        },
        {
          title: "美食",
          visibility: "food",
          iconClass: "fas fa-utensils",
        },
        {
          title: "百貨",
          visibility: "groceries",
          iconClass: "fas fa-shopping-bag",
        },
        {
          title: "咖啡",
          visibility: "coffee",
          iconClass: "fas fa-coffee",
        },
        {
          title: "藝文",
          visibility: "art",
          iconClass: "fas fa-ticket-alt",
        },
        {
          title: "旅遊",
          visibility: "travel",
          iconClass: "fas fa-plane",
        },
      ],
    };
  },
  methods: {
    visibilityShow(index) {
      this.$emit("type", this.bonusList[index].visibility);
      this.visibility = this.bonusList[index].visibility;
      return {
        active: this.visibility,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/filterBonus.scss";
</style>