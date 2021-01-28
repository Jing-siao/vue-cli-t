<template>
  <div class="questionComponent">
    <div
      class="questionList"
      v-for="(question, index) in questionList"
      :key="question.title"
      @click="showAnswer(index)"
    >
      <div class="questionWrap row" :class="{ up: index == current }">
        <h5 class="col-11">Q{{ index + 1 }} : {{ question.qaName }}</h5>
        <div class="col-1">
          <i class="fas fa-angle-down" :class="{ up: index == current }"></i>
        </div>
      </div>
      <div
        class="answer row"
        :class="{ up: index == current }"
        v-html="domDecoder(question.content)"
      ></div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";

export default {
  name: "questionComponent",
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
    domDecoder(str) {
      let parser = new DOMParser();
      let dom = parser.parseFromString(
        `<!doctype html><body>${str}`,
        "text/html"
      );
      return dom.body.textContent;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/question.scss";
</style>