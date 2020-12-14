<template>
  <!-- <div class="row"> -->
  <a class="card" :href="data.link">
    <!--:href="data.link" v-for="item in filterData"
      :key="item.title"
      :data="item" :type="item.type" -->
    <div class="imgWrap col-sm-12">
      <img :src="data.src" alt="" />
    </div>
    <div class="wrap">
      <h5>{{ data.title }}</h5>
      <div class="info">
        <p>剩餘數量:{{ data.total }}</p>
        <p>兌換上限:{{ data.limit }}</p>
        <p>point:{{ data.point }}點</p>
      </div>
    </div>
  </a>
  <!-- </div> -->
</template>
<script>
export default {
  name: "fourCard",
  props: ["data"],
  data() {
    return {
      // point: [
      //   {
      //     type: "coffee",
      //     title: "cama cafe 中杯紅茶拿鐵兌換券",
      //     src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //     link: "javascript:;",
      //     total: "988",
      //     limit: "無上限",
      //     point: "110",
      //   },
      //   {
      //     type: "coffee",
      //     title: "麥當勞McCafe特選熱那堤(中)即享券",
      //     src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //     link: "javascript:;",
      //     total: "988",
      //     limit: "無上限",
      //     point: "210",
      //   },
      //   {
      //     type: "food",
      //     title: "陶板屋和風創作料理套餐即享券(價值$625)",
      //     src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //     link: "javascript:;",
      //     total: "988",
      //     limit: "無上限",
      //     point: "118",
      //   },
      //   {
      //     type: "art",
      //     title: "誠品生活即享券500元",
      //     src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //     link: "javascript:;",
      //     total: "988",
      //     limit: "無上限",
      //     point: "115",
      //   },
      //   // {
      //   //   title: "誠品生活即享券600元",
      //   //   src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //   //   link: "javascript:;",
      //   //   total: "988",
      //   //   limit: "無上限",
      //   //   point: "118",
      //   // },
      //   // {
      //   //   title: "誠品生活即享700元",
      //   //   src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //   //   link: "javascript:;",
      //   //   total: "988",
      //   //   limit: "無上限",
      //   //   point: "118",
      //   // },
      //   // {
      //   //   title: "誠品生活即享800元",
      //   //   src: "http://fakeimg.pl/600x300/aaa/ccc/",
      //   //   link: "javascript:;",
      //   //   total: "988",
      //   //   limit: "無上限",
      //   //   point: "118",
      //   // },
      // ],
    };
  },
  // computed: {
  //   filterData() {
  //     if (!this.filter || this.filter == -1) return this.data;
  //     return this.data.filter(() => this.point.type.match(this.filter));
  //   },
  // },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/fourCard.scss";
</style>