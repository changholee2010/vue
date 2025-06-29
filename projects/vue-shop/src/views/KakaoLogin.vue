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
    getPfofile(authObj) {
      console.log(authObj);
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
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
    async login(kakao_account) {
      await this.$api("/api/login", {
        param: [
          {
            email: kakao_account.account_email,
            nickname: kakao_account.profile_nickname,
          },
          { nickname: kakao_account.profile_nickname },
        ],
      });
      this.$store.commit("user", kakao_account);
    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
        this.$store.commit("user", {});
        alert("로그아웃");
        this.$router.push({ path: "/" });
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
