<template>
  <div
    class="layout-c"
    :class="{
      collapse: isCollapse,
    }"
  >
    <nav class="sider-bar">
      <sider-bar></sider-bar>
    </nav>
    <section class="page-content">
      <page-wrap v-if="!$route.meta.hiddenWrapper">
        <router-view></router-view>
      </page-wrap>
      <router-view v-else></router-view>
    </section>
    <a-back-top :visibilityHeight="200" :target="pageContent"> </a-back-top>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import siderBar from "./SiderBar";
export default {
  name: "PageLayout",
  components: { siderBar },

  data() {
    return {};
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
  methods: {
    pageContent() {
      return document.querySelector(".page-content");
    },
  },
};
</script>
<style lang="less" scoped>
.layout-c {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  min-width: 1080px;

  .sider-bar {
    position: fixed;
    left: 0;
    top: 0;
    width: 256px;
    height: 100vh;
    background: #ffffff;
    box-shadow: 5px 0px 12px 0px rgba(0, 0, 0, 0.03);
    transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    overflow: hidden;
    user-select: none;
    z-index: 2;
  }
  &.collapse .sider-bar {
    width: 80px;
  }
  .page-content {
    padding-left: 256px;
    transition: width 0.3s, padding 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    overflow-x: hidden;
    height: 100vh;
    background: #f4f4f4;
  }
  &.collapse .page-content {
    width: 100%;
    padding-left: 80px;
  }
  .ant-back-top {
    right: 40px;
  }
}
</style>
