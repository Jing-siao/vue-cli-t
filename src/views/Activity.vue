<template>
  <div class="activity">
    <div class="col activityMain">
      <h1>{{ act.actName }}</h1>
      <div class="content">
        <div v-html="domDecoder(act.content)"></div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
import domDecoder from "../mixins/domDecoder.js";
export default {
  mixins: [domDecoder],
  data() {
    return {
      act: {},
    };
  },
  methods: {
    changeClass() {
      // let td = document.getElementsByTagName("td");
      // let col = document.getElementsByClassName("col-md");
      // for (let i = 0; i < col.length; i++) {
      //   let test = col[i].innerText.length;
      //   if (test > 19) {
      //     col[i].className = "col-md-5";
      //   } else if (test <= 4) {
      //     col[i].className = "col-md-2";
      //   }
      // }
      // let col1 = $("td.col-md");
      // console.log(col1.text());
    },
  },
  mounted() {
    this.changeClass();
  },
  created() {
    this.axios
      .get(`${process.env.VUE_APP_API}/act/pcs1`)
      .then((response) => {
        // console.log(response.data);
        this.act = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="scss"  scoped>
.activity {
  @include hederFixed();
  min-height: calc(100vh - 124px);
}
</style>
<style lang="scss" >
@import "../assets/scss/activity.scss";
</style>