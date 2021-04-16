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
              v-for="item in filterData"
              :key="item.guid"
              :data="item"
              @msg="popMsg"
            />
          </div>
        </div>
      </div>
      <GoTOPBtn />
    </div>
    <PopOut
      :propMsg="msg"
      :popOut="showPop"
      :goRecordBtn="showBtn"
      @close="closePop"
    ></PopOut>
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
      hotdata: [],
      showPop: false,
      showBtn: false,
      msg: "",
    };
  },
  computed: {
    filterData() {
      return this.hotdata.slice(0, 8);
    },
  },
  methods: {
    popMsg(text) {
      this.msg = text;
      this.msg !== `兌換成功<p>欲察看紀錄詳情，請至會員中心兌換紀錄查看</p>`
        ? (this.showBtn = false)
        : (this.showBtn = true);

      this.showPop = true;
    },
    closePop() {
      this.showPop = false;
      this.showBtn = false;
      this.getHotData();
    },
    getHotData() {
      this.axios
        .get(`${process.env.VUE_APP_API}/gift/hot`)
        .then((response) => {
          this.hotdata = response.data.detail;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.getHotData(this.url);
  },
};
</script>
<style lang="scss">
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
