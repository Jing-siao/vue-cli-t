<template>
  <div class="FilterBonus">
    <ul>
      <li v-for="list in bonusList" :key="list.title">
        <i :class="list.iconClass"></i>
        {{ list.title }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "filterBonus",
  data() {
    return {
      bonusList: [
        {
          title: "全部",
          iconClass: "fas fa-tag",
        },
        {
          title: "推薦",
          iconClass: "fas fa-thumbs-up",
        },
        {
          title: "美食",
          iconClass: "fas fa-utensils",
        },
        {
          title: "百貨",
          iconClass: "fas fa-shopping-bag",
        },
        {
          title: "咖啡",
          iconClass: "fas fa-coffee",
        },
        {
          title: "藝文",
          iconClass: "fas fa-ticket-alt",
        },
        {
          title: "旅遊",
          iconClass: "fas fa-plane",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/filterBonus.scss";
</style>