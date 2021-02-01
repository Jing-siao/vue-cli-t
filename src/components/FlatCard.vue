<template>
  <div class="wrap">
    <div class="news row" v-for="item in news" :key="item.title">
      <div class="imgWrap col-md-5 col-lg-4 col-12">
        <img :src="item.src" alt="" />
      </div>

      <div class="col-md-6 col-lg-7 info col-12">
        <h4>{{ item.title1 }}</h4>
        <p>{{ item.date }}</p>
        <p class="ellipsis" v-html="domDecoder(item.content)" v-ellipsis></p>
        <p>
          {{ item.note }}
        </p>
        <div class="more align-self-end">
          <a :href="item.link">
            <i class="fas fa-chevron-right"></i>
            了解更多</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import domDecoder from "../mixins/domDecoder.js";
export default {
  name: "flatCard",
  mixins: [domDecoder],
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.axios
      .get(`${process.env.VUE_APP_API}/news`)
      .then((response) => {
        console.log(response.data.detail);
        this.news = response.data.detail;
        // console.log("設定前", this.news[0].title);
        // this.news[0].title = response.data.detail[0].title1;
      })
      .catch((err) => {
        //有錯誤時
        console.log(err);
      });
  },
  methods: {},
  directives: {
    ellipsis: {
      inserted(el) {
        if (el.innerText.length > 75) {
          el.innerText = el.innerText.substr(0, 75) + "...";
        }
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/flatCard.scss";
</style>