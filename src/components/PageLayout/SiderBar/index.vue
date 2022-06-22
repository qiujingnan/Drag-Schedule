<template>
  <div class="sider-bar">
    <!-- logo -->
    <logo></logo>
    <!-- menu -->
    <!-- 图标需要使用svg 图片，并去除fill颜色 -->
    <scrollbar
      class="menu"
      wrapStyle="overflow-x:hidden;"
      viewStyle="overflow-x:hidden;"
      :noresize="false"
    >
      <a-menu
        v-model="selected"
        mode="inline"
        theme="light"
        @select="handleSelect"
        :inline-collapsed="isCollapse"
      >
        <template v-for="item in routes">
          <template v-if="!item.children.length">
            <a-menu-item :key="item.name">
              <svg-icon
                class="menu-icon anticon"
                :iconClass="item.meta.icon"
                v-if="item.meta.icon"
              ></svg-icon>
              <span>{{ item.meta.title }}</span>
            </a-menu-item>
          </template>
          <template v-else-if="item.children.length === 1">
            <a-menu-item :key="item.children[0].name">
              <svg-icon
                class="menu-icon anticon"
                :iconClass="item.children[0].meta.icon"
                v-if="item.children[0].meta.icon"
              ></svg-icon>
              <span>{{ item.children[0].meta.title }}</span>
            </a-menu-item>
          </template>
          <template v-else>
            <sub-menu :key="item.meta.title" :menu-info="item" />
          </template>
        </template>
      </a-menu>
    </scrollbar>

    <!-- logout -->
    <div class="fix-menu">
      <a-menu
        mode="inline"
        theme="light"
        @click="handleFixedSelect"
        :selectable="false"
        :inline-collapsed="isCollapse"
        style="border: none"
      >
        <a-menu-item key="logout">
          <svg-icon class="menu-icon anticon" iconClass="logout"></svg-icon>
          <span>Log Out</span>
        </a-menu-item>
      </a-menu>
    </div>
    <!-- copyright -->

    <a-tooltip placement="right">
      <template slot="title">
        BCSC-PJ-Digi© <br />
        Copyright 2022
      </template>
      <div class="copyright">
        <div class="cr">
          <svg-icon iconClass="copyright" class="cr-icon"></svg-icon>
          <div class="cr-text">
            BCSC-PJ-Digi© <br />
            Copyright {{ new Date().getFullYear() }}
          </div>
        </div>
      </div>
    </a-tooltip>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
import { mapGetters } from "vuex";
import logo from "../Logo";
import { convertRoutes } from "@/utils/commonUtils";
export default {
  name: "SiderBar",
  components: {
    "sub-menu": SubMenu,
    logo,
  },
  computed: {
    ...mapGetters(["sidebar"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    routes() {
      const routes = convertRoutes(this.$router.options.routes);
      console.log(routes);
      return routes;
    },
  },
  data() {
    return {
      selected: [this.$route.name],
    };
  },
  methods: {
    toggleCollapsed() {
      this.$store.dispatch("app/toggleSideBar");
    },
    formatterRoutes() {},
    handleSelect({ key }) {
      if (this.$route.name !== key) {
        this.$router.push({
          name: key,
        });
      }
    },
    handleFixedSelect({ key }) {
      console.log(key);
      if (key === "logout") {
        this.$confirm({
          content: "Are you sure to log out?",
          centered: true,
          onOk: () => {
            this.$router.push("/login");
          },
          onCancel: () => {
            this.$destroyAll();
          },
        });
      }
    },
  },
};
</script>

<style lang="less" scoped>
@import "@/styles/menu.less";
.sider-bar {
  position: relative;
}
.ant-menu {
  border-top: 1px solid #eff1f2;
}
.menu {
  height: calc(100vh - 335px);
}
.fix-menu {
  width: 100%;
  position: absolute;
  bottom: 108px;
  left: 0;
  padding: 16px 0;
  border-top: 1px solid #eff1f2;
  background-color: #ffffff;
}

.copyright {
  display: flex;
  align-items: center;
  height: 108px;
  width: 100%;
  padding: 0 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  pointer-events: none;
  border-top: 1px solid #eff1f2;
  background-color: #ffffff;

  .cr {
    height: 76px;
    width: 224px;
    background: #f9f9f9;
    border-radius: 2px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    flex-shrink: 0;
    transition: height 0.3s linear, width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    &-icon {
      width: 24px;
      height: 24px;
      flex-shrink: 0;
      margin-right: 28px;
    }
    &-text {
      font-size: 16px;
      font-weight: bold;
      color: #9da1a8;
      white-space: pre-line;
      flex-shrink: 0;
    }
  }
}

.collapse {
  .copyright {
    pointer-events: auto;
  }
  .cr {
    width: 48px;
    height: 48px;
  }
}
</style>
