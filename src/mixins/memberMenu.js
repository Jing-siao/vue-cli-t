export default {
  data() {
    return {
      memberAccountMenu: [
        {
          title: "修改個人資料",
          link: "Member-Account",
        },
        {
          title: "變更登入密碼",
          link: "Member-changePassword",
        },
        {
          title: "其他金融卡設定",
          link: "Member-otherSet",
        },
        {
          title: "會員註銷",
          link: "Member-DestroyAccount",
        },
      ],
      memberPointMenu: [
        {
          title: "點數總覽",
          link: "Member-AllPoint",
        },
        {
          title: "點數查詢",
          link: "Member-SearchPoint",
        },
        {
          title: "點數儲值",
          link: "Member-DePosit",
        },
      ],
      memberExchangeMenu: [
        {
          title: "兌換紀錄",
          link: "Member-ExchangeRecord",
        },
      ],
    };
  },
};