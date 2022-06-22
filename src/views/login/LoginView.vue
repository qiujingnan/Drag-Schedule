<template>
  <div class="login-c">
    <div class="filter"></div>
    <div class="login-c-card"></div>
    <div class="form-card flex flex-column">
      <h1 class="title">Welcome to</h1>
      <svg-icon iconClass="boschLogo" class="logo"></svg-icon>
      <h2 class="sub-title">- Login for employee -</h2>
      <div class="description">Login only works from Bosch network</div>
      <i-button
        type="primary"
        @click="login"
        :loading="isRedirect"
        width="400px"
        height="64px"
        size="large"
        class="login-btn"
        >Bosch Login</i-button
      >
    </div>
  </div>
</template>

<script>
import config from "@/defaultSetting";
import { mapMutations } from "vuex";
import { apiGetToken, apiGetUserInfo } from "@/api/login";
export default {
  components: {},
  name: "LoginView",
  data() {
    return {};
  },
  watch: {},
  computed: {
    isRedirect() {
      return !!this.$route?.query?.code;
    },
  },
  created() {
    if (this.isRedirect) {
      this.userLogin();
    } else {
      this.logout();
    }
  },
  mounted() {},
  methods: {
    ...mapMutations("user", [
      "SET_TOKEN",
      "SET_NAME",
      "SET_DEPART",
      "SET_NT",
      "CLEAR_INFO",
    ]),
    login() {
      window.location.href = `https://stfs.bosch.com/adfs/oauth2/authorize?client_id=${config.clientId}&response_type=code&redirect_uri=${process.env.VUE_APP_REDIRECT_URL}`;
    },
    async userLogin() {
      try {
        // todo 根据code获取用户信息和token
        const code = this.$route.query.code;
        const { token } = await apiGetToken({ code });
        this.SET_TOKEN(token);
        const { userName, department, nt } = await apiGetUserInfo({ token });
        this.SET_NAME(userName);
        this.SET_DEPART(department);
        this.SET_NT(nt);
        setTimeout(() => {
          this.$router.push("/");
        }, 1000);
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      this.CLEAR_INFO();
    },
  },
};
</script>
<style lang="less" scoped>
.login-c {
  background: rgba(3, 97, 154, 0.03);
  width: 100%;
  height: 100%;
  padding: 60px;
  position: relative;
  .filter {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background: url(@/assets/login/login_bg.png) no-repeat center/cover;
    z-index: 4;
    pointer-events: none;
  }
  &-card {
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 24px;
    position: relative;
    z-index: 1;
  }
  .form-card {
    background: #ffffff;
    border-radius: 4px;
    padding: 60px 170px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(0.75);
    z-index: 3;
    align-items: center;

    .title {
      font-size: 44px;
      font-weight: bold;
      color: #161c27;
      line-height: 60px;
      margin-bottom: 20px;
    }

    .logo {
      width: 240px;
      height: 54px;
      margin-bottom: 50px;
    }
    .sub-title {
      font-size: 22px;
      font-weight: 500;
      color: #9da1a8;
      line-height: 20px;
      margin-bottom: 40px;
    }
    .description {
      font-size: 22px;
      font-weight: bold;
      color: #161c27;
      line-height: 20px;
      margin-bottom: 50px;
    }
    .login-btn {
      font-size: 20px;
      font-weight: bold;
    }
  }

  // .ic {
  //   position: absolute;
  //   z-index: 4;

  //   &-1 {
  //     width: 174px;
  //     height: 174px;
  //     top: 173px;
  //     left: 476px;
  //     z-index: 3;
  //   }
  //   &-2 {
  //     width: 40px;
  //     height: 40px;
  //     bottom: 276px;
  //     right: 497px;
  //   }
  //   &-3 {
  //     width: 80px;
  //     height: 80px;
  //     left: 366px;
  //     bottom: 168px;
  //   }
  //   &-4 {
  //     width: 260px;
  //     height: 32px;
  //     top: 244px;
  //     right: 368px;
  //   }

  //   &-5 {
  //     width: 140px;
  //     height: 16px;
  //     top: 319px;
  //     right: 322px;
  //   }
  //   &-6 {
  //     width: 86px;
  //     height: 86px;
  //     left: 114px;
  //     top: 152px;
  //   }
  //   &-7 {
  //     width: 140px;
  //     height: 190px;
  //     left: 10px;
  //     bottom: 77px;
  //     z-index: 0;
  //   }
  //   &-8 {
  //     width: 100px;
  //     height: 100px;
  //     right: 183px;
  //     bottom: 96px;
  //   }
  // }
}
</style>
