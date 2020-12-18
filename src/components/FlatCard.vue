<template>
  <div class="wrap">
    <div class="news row" v-for="item in news" :key="item.title">
      <div class="imgWrap col-md-5 col-lg-4 col-12">
        <img :src="item.src" alt="" />
      </div>

      <div class="col-md-6 col-lg-7 info col-12">
        <h3>{{ item.title }}</h3>
        <p>{{ item.content }}</p>
        <p>
          <i class="fas fa-check"></i>
          {{ item.contentMore }}
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
export default {
  name: "flatCard",
  data() {
    return {
      news: [
        {
          src: "http://fakeimg.pl/600x300/bbb/ccc/",
          title: "京站禮券現金100元等你拿",
          content: "還有卡友專屬活動歐還有卡友專屬活動歐還有卡友專屬活動歐",
          contentMore: "10/26~10/31滿額贈現金禮券",
          link: "javascript:;",
        },
        // {
        //   src: "http://fakeimg.pl/600x300/bbb/ccc/",
        //   title: "京站禮券現金200元等你拿",
        //   content:
        //     "還有卡友專屬活動歐還有卡友專屬活動歐還有卡友專屬活動歐還有卡友專屬活動歐",
        //   contentMore: "11/26~11/30滿額贈現金禮券",
        //   link: "javascript:;",
        // },
        // {
        //   src: "http://fakeimg.pl/600x300/bbb/ccc/",
        //   title: "京站禮券現金300元等你拿",
        //   content:
        //     "還有卡友專屬活動歐還有卡友專屬活動歐還有卡友專屬活動歐還有卡友專屬活動歐還有卡友專屬活動歐",
        //   contentMore: "12/26~12/31滿額贈現金禮券",
        //   link: "javascript:;",
        // },
      ],
      card: [
        {
          title: "好禮一",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          giftTitle: "Dyson 手持無線吸塵器",
        },
        {
          title: "好禮二",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          giftTitle: "小米手環 5",
        },
        {
          title: "好禮三",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          giftTitle: "夏普 6公升衣物乾燥除濕機DW-H6HT-W",
        },
      ],
    };
  },
  created() {
    this.axios.get(`${process.env.VUE_APP_API}/news`).then((response) => {
      console.log(response.data.detail);
      console.log(response.data.detail[0].title1);
      this.news.title = response.data.detail[0].title1;
      this.$set(this.news, "item", {
        title: response.data.detail[0].title1,
      });
      console.log(this.news.title);
    });
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/flatCard.scss";
</style>