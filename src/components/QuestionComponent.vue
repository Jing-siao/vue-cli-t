<template>
  <div class="wrap">
    <div
      class="questionList"
      v-for="(question, index) in questionList"
      :key="question.title"
      @click="showAnswer(index)"
    >
      <div class="questionWrap row" :class="{ up: index == current }">
        <h5 class="col-11">Q{{ index + 1 }} : {{ question.title }}</h5>
        <div class="col-1">
          <i class="fas fa-angle-down" :class="{ up: index == current }"></i>
        </div>
      </div>
      <h5 class="answer row" :class="{ up: index == current }">
        {{ question.ans }}
      </h5>
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
      toggled: false,
      // isActive: {
      //   up: false,
      // },
      questionList: [
        {
          title: "豐贈點商品兌換說明",
          ans: "豐贈點商品兌換說明，請參考附件。",
        },
        {
          title: "如何參加這個活動？",
          ans: `只要註冊會員成功，即可參加活動。立即註冊
                請參考會員註冊流程，一定要收到註冊驗證信，點選會員註冊驗證連結，才算是完成會員註冊流程。`,
        },
        {
          title: "為什麼我一直沒有收到驗證信?",
          ans: "豐贈點商品兌換說明，請參考附件。",
        },
        {
          title: "忘記登入密碼怎麼辦?",
          ans: "豐贈點商品兌換說明，請參考附件。",
        },
        {
          title: "我的點數期限為何?",
          ans: "豐贈點商品兌換說明，請參考附件。",
        },
      ],
    };
  },
  computed: {},
  methods: {
    showAnswer(index) {
      if (this.current == index) {
        this.current = null;
      } else {
        this.current = index;
        this.activeItem = index;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/question.scss";
</style>