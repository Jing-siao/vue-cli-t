<template>
  <div class="home">
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
      <div class="point">
        <h1>{{ point }}</h1>
        <FourCard />
      </div>
    </div>
    <!-- <FooterComponent /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner.vue";
// import HelloWorld from "@/components/HelloWorld.vue";
import FlatCard from "../components/FlatCard.vue";
import ThreeCard from "../components/ThreeCard.vue";
import FourCard from "../components/FourCard.vue";

export default {
  name: "Home",
  data() {
    return {
      announcement: "最新消息",
      gift: "好禮三重送",
      point: "熱門兌換",
    };
  },
  components: {
    Banner,
    FlatCard,
    ThreeCard,
    FourCard,
    // FooterComponent,
    // HelloWorld,
  },
};
</script>
<style lang="scss">
.indexMain {
  margin-top: 80px;
  .announcement,
  .gift,
  .point {
    margin-top: 50px;
  }
}
</style>
