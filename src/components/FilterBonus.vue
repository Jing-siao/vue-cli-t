<template>
  <div class="FilterBonus">
    <ul>
      <li
        v-for="list in bonusList"
        :key="list.tabId"
        :class="{ active: visibility == list.tabId }"
        @click="visibilityShow(list.tabId)"
      >
        <i :class="list.iconClass"></i>
        {{ list.tabName }}
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
          tabName: "全部",
          tabId: "all",
          iconClass: "fas fa-tag",
        },
        {
          tabName: "熱門",
          tabId: "hot",
          iconClass: "fas fa-thumbs-up",
        },
      ],
    };
  },
  methods: {
    visibilityShow(tabId) {
      this.$emit("type", tabId);
      this.visibility = tabId;
      // let type = tabId;
      // this.$router.push(`/bonus/${type}/1`);
      return {
        active: this.visibility,
      };
    },
    getCategory() {
      this.axios
        .get(`${process.env.VUE_APP_API}/category/`)
        .then((response) => {
          let categoryArr = response.data.detail;
          this.bonusList = [...this.bonusList, ...categoryArr];
          // console.log(response.data.detail);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getCategory();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/filterBonus.scss";
</style>