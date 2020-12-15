<template>
  <div class="home">
    <div class="main">
      <Banner />
      <div class="indexMain container" v-cloak>
        <div class="announcement">
          <h1>{{ announcement }}</h1>
          <FlatCard />
        </div>
        <div class="gift">
          <h1>{{ gift }}</h1>
          <ThreeCard />
        </div>
        <div class="point col">
          <h1>{{ point }}</h1>
          <div class="row pointRow">
            <FourCard
              v-for="item in hotPointList"
              :key="item.title"
              :data="item"
            />
          </div>
        </div>
      </div>
      <GoTOPBtn />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import FlatCard from "../components/FlatCard.vue";
import ThreeCard from "../components/ThreeCard.vue";
import FourCard from "../components/FourCard.vue";
import GoTOPBtn from "../components/public/GoTOPBtn.vue";

export default {
  name: "Home",
  components: {
    Banner,
    FlatCard,
    ThreeCard,
    FourCard,
    GoTOPBtn,
    // FooterComponent,
    // HelloWorld,
  },
  data() {
    return {
      data: [],
      announcement: "最新消息",
      gift: "好禮三重送",
      point: "熱門兌換",
      hotPointList: [
        {
          type: "coffee",
          title: "cama cafe 中杯紅茶拿鐵兌換券",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "110",
        },
        {
          type: "coffee",
          title: "麥當勞McCafe特選熱那堤(中)即享券",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "210",
        },
        {
          type: "food",
          title: "陶板屋和風創作料理套餐即享券(價值$625)",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          type: "art",
          title: "誠品生活即享券500元",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "115",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import "../assets/public/variables.scss";
.home {
  @include hederFixed();

  .indexMain {
    margin-top: 80px;
    .announcement,
    .gift,
    .point {
      margin-top: 50px;
      .pointRow {
        padding: 0;
      }
    }
  }
}
@media (min-width: 577px) {
  .main {
    min-height: calc(100vh - 259px);
  }
}
@media (max-width: 576px) {
  .main {
    min-height: calc(100vh - 223px);
  }
}
</style>
