  <template>
  <div class="internetBankingIframe">
    <div class="wrap col-12">
      <div>
        <h5 class="col-12">會員認證</h5>
      </div>
      <div class="iframeWrap col-12">
        <!-- <iframe
          class="iframe col-12"
          src="https://netbank.megabank.com.tw/natm/_420/wos/wos106/WOS106_NB1.faces"
          frameborder="0"
        ></iframe> -->
        <iframe
          class="iframe"
          src="http://127.0.0.1:5500/out/login.html"
          frameborder="0"
        ></iframe>
      </div>
    </div>
    <div class="note">
      <p v-for="(note, index) in notes" :key="index">
        <i class="fas fa-exclamation-triangle"></i>
        {{ note.note }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "internetBanking",
  data() {
    return {
      notes: [
        {
          note:
            "使用者密碼為6-8位英數字(英文字母有大小寫分別)，若連續輸入錯誤達三次，將被暫停使用網路銀行服務，您可攜帶身分證件及存款印鑑洽任一分行辦理，或使用您的本行晶片金融卡登入本行網路ATM申請密碼重設。",
        },
        {
          note: "使用者代號為6-10位英數字(英文字母沒有大小寫分別)。",
        },
      ],
    };
  },
  methods: {
    inner() {
      console.log("內部");
    },
  },
  mounted() {
    this.inner();
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/internetBanking.scss";
</style>