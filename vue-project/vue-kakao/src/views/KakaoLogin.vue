<template>
  <div>
    <h3>카카오 로그인</h3>
    <a v-on:click="kakaoLogin()" id="custom-login-btn">
      <img src="../assets/kakao_login.png" alt="" />
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_nickname, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          console.log(res);
          const kakao_account = res.kakao_account;
          const nickname = kakao_account.profile_nickname;
          const email = kakao_account.account_email;
          console.log(nickname, email);
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
