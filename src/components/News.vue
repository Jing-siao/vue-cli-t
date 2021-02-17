<template>
  <div class="newsWrap">
    <div class="news col">
      <h4>{{ news.title1 }}</h4>
      <p>{{ news.date }}</p>
      <div class="imgWrap">
        <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
        <!-- :src="item.src" -->
      </div>
      <div class="textWrap">
        <p v-html="domDecoder(news.content)"></p>
        <p>
          {{ news.note }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import domDecoder from "../mixins/domDecoder.js";
export default {
  mixins: [domDecoder],
  data() {
    return {
      news: {},
    };
  },
  mounted() {
    this.axios
      .get(`${process.env.VUE_APP_API}/news`)
      .then((response) => {
        let index = this.$route.params.index;
        this.news = response.data.detail[index];
        // console.log("設定前", this.news[0].title);
        // this.news[0].title = response.data.detail[0].title1;
      })
      .catch((err) => {
        //有錯誤時
        console.log(err);
      });
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/news.scss";
</style>