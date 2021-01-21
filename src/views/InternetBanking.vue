<template>
  <div class="InternetBanking">
    <div class="internetBankingMain container" v-cloak>
      <div class="internetBanking col-12">
        <div class="steps">
          <p>1</p>
          <span></span>
          <p>2</p>
          <span></span>
          <p>3</p>
        </div>
        <router-view></router-view>
        <InternetBankingIframe />
      </div>
    </div>
  </div>
</template>
<script>
import InternetBankingIframe from "@/components/public/InternetBankingIframe.vue";

export default {
  name: "InternetBanking",
  data() {
    return {};
  },
  components: {
    InternetBankingIframe,
  },
};
</script>

<style lang="scss" scoped>
.InternetBanking {
  @include hederFixed();
  .internetBankingMain {
    margin: auto;
    min-width: 95%;
    text-align: center;
    overflow: hidden;

    .internetBanking {
      display: inline-block;
      // border: 1px solid red;
      padding: 0 15px;
      max-width: 550px;

      .steps {
        margin: 0 0 20px 0;
        display: flex;
        justify-content: space-between;

        p {
          border-radius: 50%;
          background-color: $darkgrey;
          border: 2px solid black;
          color: $grey;
          padding: 7px 11px;
        }

        span {
          border-bottom: 2px solid $darkgrey;

          height: 20px;
        }
      }
    }
  }

  @media (min-width: 577px) {
    .internetBankingMain {
      min-height: calc(100vh - 200px);

      .internetBanking {
        margin-top: 4vh;

        .steps {
          span {
            width: 35%;
          }
        }
      }
    }
  }

  @media (max-width: 576px) {
    .internetBankingMain {
      min-height: calc(100vh - 173px);

      .internetBanking {
        // display: inline-block;
        margin-top: 20px;

        .steps {
          span {
            width: 25%;
          }
        }
      }
    }
  }
}
</style>
