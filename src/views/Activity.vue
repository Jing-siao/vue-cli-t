<template>
  <div class="about">
    <div class="col main">
      <h1>{{ act.actName }}</h1>
      <div class="content">
        <!-- <p v-html="domDecoder(act.content)"></p> -->
        <!-- <div v-html="act.content"></div> -->
        <div class="ac_list">
          <h5>壹、活動說明：</h5>
          <div class="section">
            參加資格：
            凡持臺灣新光商業銀行（以下簡稱本行）或其他銀行晶片金融卡之自然人，於紅利活動網站(以下簡稱本活動網站)之會員專區註冊成為會員，即可參加本活動。
          </div>
          <div class="section">活動期間：107/7/16～108/12/31。</div>
          <div class="section">
            活動說明：

            <p>
              (一) 點數類型：Mega Point（簡稱M
              Point），會員於指定管道完成交易項目所獲得之點數。
            </p>
            <p>
              (二)
              會員積分：會員於獲得點數回饋時，同時可獲得會員積分，該積分並可累積以供會員升級使用。
            </p>
            <p>
              (三) 兌換專區：註冊成為會員並持有M
              Point，可於本活動網站兌換電子商品券。
            </p>

            <p>(四) 「M Point」回饋方式：</p>

            <table>
              <thead>
                <tr class="row">
                  <th class="col-md">管道</th>
                  <th class="col-md">交易項目</th>
                  <th class="col-md">M Point回饋</th>
                  <th class="col-md">會員積分回饋</th>
                </tr>
              </thead>
              <tbody>
                <tr class="row hasData">
                  <td class="col-md" data-th="管道">網路銀行 (含行動銀行)</td>
                  <td class="col-md" data-th="交易項目">
                    單筆新臺幣即時及預約跨行轉帳成功之交易。
                  </td>
                  <td class="col-md" data-th="M Point回饋">2</td>
                  <td class="col-md" data-th="會員積分回饋">2</td>
                </tr>
                <tr class="row hasData">
                  <td class="col-md" data-th="管道">網路銀行 (含行動銀行)</td>
                  <td class="col-md" data-th="交易項目">
                    外幣即時換匯交易(限新臺幣轉外幣、外幣轉新臺幣、不同外幣間互轉)每筆最低等值NT$5,000元(不含預約交易)。
                  </td>
                  <td class="col-md" data-th="M Point回饋">4</td>
                  <td class="col-md" data-th="會員積分回饋">4</td>
                </tr>
                <tr class="row hasData">
                  <td class="col-md" data-th="管道">網路銀行 (含行動銀行)</td>
                  <td class="col-md" data-th="交易項目">
                    外幣即時跨行匯款交易(不含預約交易及外幣轉帳交易)
                  </td>
                  <td class="col-md" data-th="M Point回饋">10</td>
                  <td class="col-md" data-th="會員積分回饋">10</td>
                </tr>
                <tr class="row hasData">
                  <td class="col-md" data-th="管道">網路ATM</td>
                  <td class="col-md" data-th="交易項目">
                    單筆新臺幣即時及預約跨行轉帳成功之交易。
                  </td>
                  <td class="col-md" data-th="M Point回饋">2</td>
                  <td class="col-md" data-th="會員積分回饋">2</td>
                </tr>

                <tr class="row hasData">
                  <td class="col-md" data-th="管道">線上結匯</td>
                  <td class="col-md" data-th="交易項目">
                    繳款成功之交易(每筆最低下單金額等值NT$10,000元)。
                  </td>
                  <td class="col-md" data-th="M Point回饋">4</td>
                  <td class="col-md" data-th="會員積分回饋">4</td>
                </tr>
                <tr class="row hasData">
                  <td class="col-md" data-th="管道">數位存款帳戶</td>
                  <td class="col-md" data-th="交易項目">
                    開戶成功(新臺幣及外幣帳戶分別計算)。
                  </td>
                  <td class="col-md" data-th="M Point回饋">10</td>
                  <td class="col-md" data-th="會員積分回饋">10</td>
                </tr>
              </tbody>
            </table>
            <p class="note">
              備註
              本行帳戶如已享有跨行交易免手續費優惠，將不發送點數及會員積分，非本行帳戶則不在此限。
              各項即時及預約交易，均須於活動期間內完成始符合發放資格。
              持他行晶片金融卡之自然人會員亦適用。
            </p>
          </div>
          <div class="section">
            <p>(五)會員分級</p>
            <table>
              <thead>
                <tr class="row">
                  <th class="col-md">會員分級</th>
                  <th class="col-md">積分</th>
                  <th class="col-md">生日禮</th>
                  <th class="col-md">會員年度禮</th>
                  <th class="col-md">兌換贈品折扣</th>
                  <th class="col-md">備註</th>
                </tr>
              </thead>
              <tbody>
                <tr tr class="row hasData">
                  <td class="col-md" data-th="會員分級">一般會員</td>
                  <td class="col-md" data-th="積分">-</td>
                  <td class="col-md" data-th="生日禮">20點</td>
                  <td class="col-md" data-th="會員年度禮">-</td>
                  <td class="col-md" data-th="兌換贈品折扣">-</td>
                  <td class="col-md" data-th="備註">
                    會員註冊成功即為一般會員。
                  </td>
                </tr>
                <tr tr class="row hasData">
                  <td class="col-md" data-th="會員分級">鈦金會員</td>
                  <td class="col-md" data-th="積分">200分</td>
                  <td class="col-md" data-th="生日禮">100點</td>
                  <td class="col-md" data-th="會員年度禮">40點</td>
                  <td class="col-md" data-th="兌換贈品折扣">10點*</td>
                  <td class="col-md" data-th="備註">
                    *該等級會員於每次兌換贈品時可折減之點數
                  </td>
                </tr>
                <tr tr class="row hasData">
                  <td class="col-md" data-th="會員分級">金鑽會員</td>
                  <td class="col-md" data-th="積分">500分</td>
                  <td class="col-md" data-th="生日禮">300點</td>
                  <td class="col-md" data-th="會員年度禮">100點</td>
                  <td class="col-md" data-th="兌換贈品折扣">20點*</td>
                  <td class="col-md" data-th="備註">
                    *該等級會員於每次兌換贈品時可折減之點數
                  </td>
                </tr>
              </tbody>
            </table>
            <p>備註 ※ 等級資格及積分到期說明</p>

            <p>
              ☆一般會員積分達200分（含）即可升級為鈦金會員，原會員積分同時歸零並重新計算。鈦金會員資格自升級日起，可保留至次一年度12月31日止；於鈦金會員資格有效期間（自升級日起至次一年度12月31日止）內，新增積分累計達200分（含）者，鈦金會員資格續延至次一年度；新增積分累計未達200分者，則將轉返為一般會員。
            </p>
            <p>
              ★
              鈦金會員資格於有效期間（自升級日起至次一年度12月31日止）內，積分達500分（含）者，升級為金鑽會員，原積分同時歸零並重新計算。金鑽會員資格自升級日起，可保留至次一年度12月31日止。於金鑽會員資格有效期間（自升級日起至次一年度12月31日止）內，新增積分累計達500分（含）者，金鑽會員資格續延至次一年度；積分累計為200~499分，轉返為鈦金會員，積分累計未達200分，轉返為一般會員。
            </p>

            <p>※ 生日禮將於會員生日當天發送點數。</p>
            <p>
              ※鈦金及金鑽會員所屬會員年度禮，將於會員資格生效次一年度1月底前發送。
            </p>
          </div>
        </div>
        <div class="ac_list">
          <h5>貳、 注意事項：</h5>
          <div class="section">
            點數期限及相關限制：
            <p>
              (一)
              會員須先完成註冊，始可開始累積點數，若因未完成註冊作業致無法獲得點數者，不得要求事後補發點數。
            </p>
            <p>
              (二)
              點數以每次獲得點數日之次年年底為到期日，逾期未使用即自動失效，會員不得要求折換現金或其他贈品。
            </p>
            <p>(三) 每項兌換商品均有兌換數量限制，換完為止。</p>
            <p>
              (四)
              本行將視商品兌換情形，隨時調整各商品之每人兌換數量限制，並於本活動網站公告。
            </p>
          </div>
          <div class="section">
            參加資格、領獎條件及方式：
            <p>(一) 登錄個人基本資料：</p>
            <p>
              1.
              請先於本活動網頁會員專區之帳戶管理登錄個人基本資料註冊成為會員，方可參加本活動。
            </p>
            <p>
              2.
              本行將依身分證字號進行交易歸戶，同一身分證字號項下所有帳號所獲得之點數將合併計算。
            </p>
            <p>
              3.
              於本網站填具之個人基本資料，將作為本行查核、開立扣繳憑單、寄送商品及聯絡領取商品等相關事宜之依據，請務必填寫正確。若申請兌換商品者資料與個人基本資料不符，視同放棄兌換資格，不得有任何異議。
            </p>
            <p>
              4.
              本活動限登錄本人帳戶資料，若有登錄他人帳戶資料之情事者，本行將即取消該會員資格，並註銷所有累計之點數與未兌換之商品券。
            </p>
            <p>
              5.
              會員登錄之身分證字號、Email不得共用，部分會員資料（如身分證字號、姓名、出生日期、E-mail）一經註冊成功，即無法修改，註冊時請確認資料之正確性。
            </p>

            <p>
              (二)
              會員於活動期間內所獲得之點數及商品一經兌換成功，不得要求更換或退還。
            </p>
            <p>
              (三)
              凡會員於本活動年度累積兌換商品價值逾新臺幣1,000元者，本行依中華民國所得稅法等規定須開立扣繳憑單，會員於收到通知後，應提供身分證或居留證影本以利作業，參加本活動而需支付之任何稅捐，皆為會員之義務，概與本行無關；列報所得事項悉依稅法相關規定辦理，並以實際帳務處理之時間點為準。
            </p>
            <p>
              (四)
              兌換商品規格以實物為準，如有瑕疵，或因任何因素導致商品故障、服務中止或異動、或需增補差額，概與本行無關，請逕洽新加坡商宜睿智慧股份有限公司或商品及服務之提供商。
            </p>
          </div>
          <div class="section">
            其他應注意事項：
            <p>
              (一)
              如有任何因為電腦、網路、電話、技術或不可歸責於本行之事由，而使參加本活動者所寄出或登錄之資料有遺失、錯誤、無法辨識或毀損之情況，本行不負任何法律責任，參與本活動者或兌換商品者亦不得因此異議。
            </p>
            <p>
              (二)
              本行有權檢視各交易行為，若涉及不正當行為或非合理性交易，除通知排除參與活動及取消兌換資格外，並保留法律追訴權。
            </p>
            <p>
              (三)
              本行保留更換等值商品，及解釋、取消、終止、修改或暫停本活動之權利，活動辦法以本活動網站(
              <a href=" www.megabank.com.tw"> www.megabank.com.tw</a>
              )公告為準。
            </p>
            <p>(四) 若有其他未盡事宜，悉依本行相關規定或解釋辦理。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import $ from "jquery";
// import domDecoder from "../mixins/domDecoder.js";
export default {
  // mixins: [domDecoder],
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
<style lang="scss" scoped>
.about {
  @include hederFixed();
  min-height: calc(100vh - 124px);
}
@import "../assets/scss/activity.scss";
</style>