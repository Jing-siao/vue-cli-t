<template>
  <li>
    <!-- <router-link :to="item.link" @click.native="closeMenu">
      {{ item.title }}會員中心
    </router-link> -->
    <a href="#">{{ title }}<slot></slot></a>
    <!-- <slot name="memberli"></slot> -->
  </li>
</template>
<script>
// import HeaderComponent from "./HeaderComponent.vue";
export default {
  name: "headerMemberSlot",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  // props: ["HeaderComponentVue"],
  data() {
    return {};
  },
};
</script>