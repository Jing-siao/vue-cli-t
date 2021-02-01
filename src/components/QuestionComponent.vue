<template>
  <div class="questionComponent">
    <div
      class="questionList"
      v-for="(question, index) in questionList"
      :key="question.title"
      @click="showAnswer(index)"
    >
      <div class="questionWrap" :class="{ up: index == current }">
        <h5>Q{{ index + 1 }} :</h5>
        <h5>
          {{ question.qaName }}
        </h5>
        <div>
          <i class="fas fa-angle-down" :class="{ up: index == current }"></i>
        </div>
      </div>
      <div class="answer" :class="{ up: index == current }">
        <p>A{{ index + 1 }} :</p>
        <p v-html="domDecoder(question.content)"></p>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import domDecoder from "../mixins/domDecoder.js";
export default {
  name: "questionComponent",
  mixins: [domDecoder],
  data() {
    return {
      // index: 0,
      current: null,
      questionList: [],
    };
  },
  mounted() {
    this.axios
      .get(`${process.env.VUE_APP_API}/qa`)
      .then((response) => {
        this.questionList = response.data.detail;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {},
  methods: {
    showAnswer(index) {
      if (this.current == index) {
        this.current = null;
      } else {
        this.current = index;
      }
    },
  },
};
</script>

<style lang="scss" >
@import "../assets/scss/question.scss";
</style>