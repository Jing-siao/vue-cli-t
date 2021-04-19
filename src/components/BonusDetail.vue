<template>
  <div class="bonusDetailWrap">
    <div class="col">
      <button class="back" @click="goBack()">
        <i class="fas fa-chevron-left"></i> 回前頁
      </button>
    </div>
    <div class="bonusDetail col">
      <h3>{{ gift.name }}</h3>
      <div class="row">
        <div class="imgWrap col-sm-6">
          <img src="http://fakeimg.pl/600x300/aaa/ccc/" alt="" />
          <!-- :src="item.src" -->
        </div>
        <div class="col-sm-6">
          <div class="textWrap">
            <h5>兌換點數</h5>
            <p>{{ gift.ptypeName }} : {{ gift.cnt }}點</p>
          </div>
          <div class="textWrap">
            <h5>商品說明</h5>
            <p>{{ gift.content }}</p>
          </div>
          <button class="first col-sm-6" @click="exchange(gift.guid)">
            立即兌換
          </button>
        </div>
      </div>
      <div class="noteWrap">
        <h5>注意事項</h5>
        <p v-html="domDecoder(gift.note)"></p>
      </div>
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
import domDecoder from "../mixins/domDecoder.js";
import exchange from "../mixins/exchange.js";
export default {
  mixins: [domDecoder, exchange],
  data() {
    return {
      gift: {},
      titles: ["兌換點數", "商品說明"],
      showPop: false,
      showBtn: false,
      msg: "",
    };
  },
  mounted() {
    let guid = this.$route.params.guid;
    this.axios
      .get(`${process.env.VUE_APP_API}/gift/${guid}`)
      .then((response) => {
        this.gift = response.data;
      })
      .catch((err) => {
        //有錯誤時
        console.log(err);
      });
  },
  methods: {
    goBack() {
      let page = this.$route.params.page;
      let type = this.$route.params.type;
      if (page == 0) {
        this.$router.go(-1);
      } else {
        this.$router.push(`/bonus/${type}/${page}`); //router-link會閃
      }
    },
    closePop() {
      this.showPop = false;
      this.showBtn = false;
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/scss/bonusDetail.scss";
</style>