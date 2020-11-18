<template>
  <!-- 輪播 -->
  <div class="banner" id="banner" v-cloak>
    <slick class="row slider" :options="slickOptions">
      <!-- <VueSlickCarousel :arrows="true" :dots="true"> -->
      <div
        ref="slick"
        class="pic col-md-12"
        v-for="(item, i) in banner"
        :key="item.title"
      >
        <a :href="item.link">
          <img :src="item.src" alt="" />
          <div class="description">
            <span class="number">{{ i + 1 }}</span>
            <p>{{ item.title }}</p>
            <p>{{ item.notes }}</p>
          </div>
        </a>
      </div>
      <!-- </VueSlickCarousel> -->
    </slick>
  </div>
</template>
<script>
import Slick from "vue-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import $ from "jquery";
export default {
  name: "banner",
  components: { Slick },

  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        touchMove: true,
        draggable: true,
        edgeFriction: 0.8,
        swipe: true,
        responsive: [
          // {
          //   breakpoint: 1024,
          //   settings: {
          //     slidesToShow: 3,
          //     slidesToScroll: 1,
          //   }
          // },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      },
      index: 0,

      banner: [
        {
          title: "活動一",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          title: "活動二",
          src: "http://fakeimg.pl/600x300/282828/ccc/",
          link: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          title: "活動三",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          title: "活動四",
          src: "http://fakeimg.pl/600x300/282828/ccc/",
          link: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          title: "活動五",
          src: "http://fakeimg.pl/600x300/bbb/ccc/",
          link: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
      ],
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
  },

  // mounted() {
  //   //輪播
  //   $(".slider").slick({
  //     dots: true,
  //     infinite: true,
  //     arrows: true,
  //     speed: 300,
  //     autoplaySpeed: 3000,
  //     autoplay: true,
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     responsive: [
  //       // {
  //       //   breakpoint: 1024,
  //       //   settings: {
  //       //     slidesToShow: 3,
  //       //     slidesToScroll: 1,
  //       //   }
  //       // },
  //       {
  //         breakpoint: 576,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1,
  //           arrows: false,
  //         },
  //       },
  //     ],
  //   });
  // },
};
</script>
<style lang="sass">
@import '../assets/scss/main.scss'
@import '../assets/scss/banner.scss'
</style>