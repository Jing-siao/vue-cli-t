<template>
  <div class="row">
    <a
      :href="item.link"
      class="col-lg card"
      v-for="item in point"
      :item="item"
      :key="item.title"
    >
      <div class="imgWrap col-sm-12">
        <img :src="item.src" alt="" />
      </div>
      <div class="wrap">
        <h5>{{ item.title }}</h5>
        <p>剩餘數量:{{ item.total }}</p>
        <p>兌換上限:{{ item.limit }}</p>
        <p>point:{{ item.point }}點</p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "fourCard",
  data() {
    return {
      point: [
        {
          title: "cama cafe 中杯紅茶拿鐵兌換券",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          title: "麥當勞McCafe特選熱那堤(中)即享券",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          title: "陶板屋和風創作料理套餐即享券(價值$625)",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
        {
          title: "誠品生活即享券500元",
          src: "http://fakeimg.pl/600x300/aaa/ccc/",
          link: "javascript:;",
          total: "988",
          limit: "無上限",
          point: "118",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/fourCard.scss";
</style>