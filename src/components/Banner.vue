<template>
  <!-- 輪播 -->
  <div class="banner" id="banner" v-cloak>
    <VueSlickCarousel v-bind="settings" class="slider" v-if="banner.length > 0">
      <div class="pic col-md-12" v-for="item in banner" :key="item.guid">
        <a :href="item.webUrl" target="_blank">
          <!-- <img :src="item.src" alt="" /> -->
          <img :src="require('../assets/img/ad/' + item.pic)" alt="" />
          <div class="description">
            <span>{{ item.name }}</span>
            <p>{{ item.note }}</p>
          </div>
        </a>
      </div>
    </VueSlickCarousel>
    <div class="noCarousel" v-else>
      <img src="http://fakeimg.pl/600x300/282828/ccc/" alt="" />
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "banner",
  components: { VueSlickCarousel },

  data() {
    return {
      banner: [],
      settings: {
        arrows: true,
        dots: true,
        swipeToSlide: true,
        // autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              arrows: false,
            },
          },
        ],
      },
    };
  },
  methods: {
    getData() {
      this.axios
        .get(`${process.env.VUE_APP_API}/ad/index1`)
        .then((response) => {
          //以下之後可用先留著
          // let carousel = response.data.detail.map((item) => {
          //   let pic = item.pic;
          //   item.src = require(`../assets/img/ad/${pic}`);
          //   return { ...item };
          // });
          //排序
          response.data.detail.sort((a, b) => {
            return a.autoS - b.autoS;
          });
          this.banner = response.data.detail;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/banner.scss";
</style>