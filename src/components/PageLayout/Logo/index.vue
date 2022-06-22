<template>
  <div class="logo-c" :title="title">
    <svg-icon iconClass="taskLogo" class="logo"></svg-icon>
    <h1 class="logo-title">{{ title }}</h1>
  </div>
</template>

<script>
import config from "@/defaultSetting";
import { mapGetters } from "vuex";

export default {
  name: "siderLogo",
  components: {},
  data() {
    return {
      title: config.title,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
@import "@/styles/antd-variables.less";

.logo-c {
  height: 130px;
  display: flex;
  align-items: center;
  // justify-content: center;
  padding: 0 10px;
  .logo {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  .logo-title {
    font-size: 22px;
    font-weight: 900;
    color: @primary-color;
    white-space: pre-line;
    margin: 0 0 0 16px;
    flex-shrink: 0;
  }
}
</style>
