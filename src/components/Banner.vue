<template>
  <!-- 輪播 -->
  <div class="banner" id="banner" v-cloak>
    <VueSlickCarousel v-bind="settings" class="slider" v-if="banner.length > 0">
      <div class="pic col-md-12" v-for="item in banner" :key="item.guid">
        <a :href="item.webUrl" target="_blank">
          <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
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
        autoplay: true,
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
          // console.log(response.data.detail);
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