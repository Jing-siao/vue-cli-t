<template>
  <!-- 輪播 -->
  <div class="banner" id="banner" v-cloak>
    <!-- <slick class="row slider" ref="slick" :options="slickOptions">

      <div class="pic col-md-12" v-for="(item, i) in banner" :key="item.guid">
        <a :href="item.webUrl" target="_blank">
          <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
          <div class="description">
            <span class="number">{{ i + 1 }}</span>
            <p>{{ item.name }}</p>
            <p>{{ item.note }}</p>
          </div>
        </a>
      </div>

    </slick> -->
    <VueSlickCarousel v-bind="settings" class="slider">
      <div class="pic col-md-12" v-for="(item, i) in banner" :key="item.guid">
        <a :href="item.webUrl" target="_blank">
          <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
          <div class="description">
            <span class="number">{{ i + 1 }}</span>
            <p>{{ item.name }}</p>
            <p>{{ item.note }}</p>
          </div>
        </a>
      </div>
    </VueSlickCarousel>
  </div>
</template>
<script>
// import Slick from "vue-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

// import $ from "jquery";
export default {
  name: "banner",
  components: { VueSlickCarousel },

  data() {
    return {
      // slickOptions: {
      //   //options can be used from the plugin documentation
      //   slidesToShow: 1,
      //   slidesToScroll: 1,
      //   infinite: true,
      //   autoplay: true,
      //   autoplaySpeed: 5000,
      //   arrows: true,
      //   dots: true,
      //   touchMove: true,
      //   draggable: true,
      //   edgeFriction: 0.8,
      //   swipe: true,
      //   responsive: [
      //     // {
      //     //   breakpoint: 1024,
      //     //   settings: {
      //     //     slidesToShow: 3,
      //     //     slidesToScroll: 1,
      //     //   }
      //     // },
      //     {
      //       breakpoint: 576,
      //       settings: {
      //         slidesToShow: 1,
      //         slidesToScroll: 1,
      //         arrows: false,
      //       },
      //     },
      //   ],
      // },
      banner: [
        {
          name: "活動一",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          webUrl: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          name: "活動二",
          src: "http://fakeimg.pl/600x300/282828/ccc/",
          webUrl: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          name: "活動三",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          webUrl: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          name: "活動四",
          src: "http://fakeimg.pl/600x300/282828/ccc/",
          webUrl: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
        {
          name: "活動五",
          src: "http://fakeimg.pl/600x300/bbb/ccc/",
          webUrl: "javascript:;",
          notes: "次要說明次要說明次要說明",
        },
      ],
      settings: {
        arrows: true,
        dots: true,
        swipeToSlide: true,
        // autoplay: true,
        // centerMode: true,
      },
    };
  },
  methods: {
    // next() {
    //   this.$refs.slick.next();
    // },
    // prev() {
    //   this.$refs.slick.prev();
    // },
    // reInit() {
    //   // Helpful if you have to deal with v-for to update dynamic lists
    //   this.$nextTick(() => {
    //     this.$refs.slick.reSlick();
    //   });
    // },
    // handleBreakpoint(event, slick, breakpoint) {
    //   console.log("handleBreakpoint", event, slick, breakpoint);
    // },
    getData() {
      this.axios
        .get(`${process.env.VUE_APP_API}/ad/index1`)
        .then((response) => {
          console.log(response.data.detail);
          // this.banner = response.data.detail;
          // console.log(this.banner);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  // beforeUpdate() {
  //   this.getData();
  // },
  created() {
    this.getData();
  },
};
</script>

<style lang="scss">
@import "../assets/scss/banner.scss";
</style>