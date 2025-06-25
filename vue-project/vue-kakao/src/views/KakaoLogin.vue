<template>
  <div>
    <a v-on:click="kakaoLogin()" id="custom-login-btn"></a>
  </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.prifile.nickname;
          const email = kakao_account.email;

          alert("success login");
        },
        fail: (err) => {
          console.log(err);
        },
      });
    },
  },
};
</script>
