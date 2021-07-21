<template>
  <div class="row">
    <a
      href="#"
      class="col-md card"
      v-for="item in card"
      :item="item"
      :key="item.title"
    >
      <div class="imgWrap col-sm-12">
        <img :src="item.src" alt="" />
      </div>
      <div class="wrap">
        <div class="circle">
          <i class="fas fa-gift"></i>
        </div>
        <p>{{ item.title }}</p>
        <h5>{{ item.giftTitle }}</h5>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "threeCard",
  data() {
    return {
      card: [
        {
          title: "好禮一",
          src: "https://picsum.photos/600/301",
          link: "javascript:;",
          giftTitle: "Dyson 手持無線吸塵器",
        },
        {
          title: "好禮二",
          src: "https://picsum.photos/600/302",
          link: "javascript:;",
          giftTitle: "小米手環 5",
        },
        {
          title: "好禮三",
          src: "https://picsum.photos/600/303",
          link: "javascript:;",
          giftTitle: "夏普 6公升衣物乾燥除濕機DW-H6HT-W",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/threeCard.scss";
</style>