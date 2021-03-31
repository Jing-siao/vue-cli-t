<template>
  <div class="newsWrap">
    <div class="news col">
      <h4>{{ gift.name }}</h4>
      <p>{{ gift.ptypeName }}</p>
      <div class="imgWrap">
        <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
        <!-- :src="item.src" -->
      </div>
      <div class="textWrap">
        <p>{{ gift.content }}</p>
        <p v-html="domDecoder(gift.note)"></p>
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
      gift: {},
    };
  },
  mounted() {
    let guid = this.$route.params.guid;
    console.log(guid);
    this.axios
      .get(`${process.env.VUE_APP_API}/gift/${guid}`)
      .then((response) => {
        this.gift = response.data;
        console.log(this.gift);
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
<style lang="scss">
@import "@/assets/scss/news.scss";
</style>