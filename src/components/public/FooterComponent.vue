<template>
  <footer>
    <div id="footer" class="container" v-cloak>
      <ul class="row">
        <a
          v-for="item in footer"
          :href="item.link"
          class="col-md col-sm-5"
          :key="item.title"
        >
          <li>{{ item.title }}</li>
        </a>
      </ul>

      <p class="copyRight">
        {{ company }} {{ year }} {{ companyEn }} {{ copyright }}
      </p>
    </div>
  </footer>
</template>
<script>
// import $ from "jquery";

export default {
  name: "footerComponent",
  data() {
    return {
      footer: [
        {
          title: "活動辦法",
          link: "javascript:;",
        },
        {
          title: "兌換專區",
          link: "javascript:;",
        },
        {
          title: "常見問題",
          link: "javascript:;",
        },
        {
          title: "會員專區",
          link: "javascript:;",
        },
        {
          title: "卡友專區",
          link: "javascript:;",
        },
        {
          title: "交通優惠",
          link: "javascript:;",
        },
      ],
      copyright: "All Rights Reserved.",
      company: "國眾國際商業銀行",
      companyEn: "LEO International Bank.",
      year: "©" + new Date().getFullYear(),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss/footer.scss";
</style>