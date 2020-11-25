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
          ans:
            "有可能是您在註冊會員時，E-mail輸入錯誤而導致未收到註冊驗證信，請電洽客服中心0800-016-168為您協助處理。",
        },
        {
          title: "忘記登入密碼怎麼辦?",
          ans:
            "請從「會員登入」頁面下方點選「忘記密碼」功能，系統於5分鐘內寄發驗證信至您註冊時留存的E-mail信箱，請點選驗證信中的連結網址完成重設密碼作業。密碼重設",
        },
        {
          title: "我的點數期限為何?",
          ans:
            "點數期限為點數生效日起至隔年年底前有效。例如：108年期間得到的點數，到期日均為109年12月31日。",
        },
        {
          title: "我要如何查詢已兌換的商品?",
          ans:
            "請點選「會員專區」→「兌換紀錄」，即可以查詢已兌換的商品。查詢兌換商品",
        },
        {
          title: "交易完成後，點數何時會儲存至我的點數帳戶中？",
          ans:
            "點數期限為點數生效日起至隔年年底前有效。例如：108年期間得到的點數，到期日均為109年12月31日。",
        },
        {
          title: `我要如何設定其他銀行金融卡帳戶一起參加活動累積點數？
`,
          ans:
            "請先備妥讀卡機並插入他行金融卡，請點選「會員專區」→「他行金融卡設定」，新增金融卡驗證成功，即可綁定他行金融卡帳戶參加活動。",
        },
        {
          title: "我要如何變更已歸戶的他行帳號?",
          ans: `1.刪除帳號：點選「會員專區」→「卡片設定」，選擇欲變更之已歸戶他行帳號金融卡，點選「取消綁定」並經驗證成功即可刪除。
          2.新增帳號：請先備妥讀卡機並插入欲綁定之金融卡，點選「會員專區」→「卡片設定」→「新增」並經驗證成功即可完成。`,
        },
        {
          title: "我可以變更註冊會員時的E-mail嗎？",
          ans:
            "請登入會員→會員專區→個人資料維護變更E-mail，收到驗證信後點選驗證連結，驗證成功即成功變更E-mail，下次登入會員時請輸入新的E-mail。",
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