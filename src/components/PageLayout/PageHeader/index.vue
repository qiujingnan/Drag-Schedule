<template>
  <header
    class="page-header flex-between"
    :class="{
      'fix-header': fixHeader,
    }"
  >
    <svg-icon
      class="fold-ic"
      :iconClass="isCollapse ? 'menuFold' : 'menuUnfold'"
      @click="toggleCollapsed"
    ></svg-icon>
    <div class="breadcrumb flex">
      <a-breadcrumb>
        <a-breadcrumb-item
          ><a @click="$router.push('/')" class="click"
            >Home</a
          ></a-breadcrumb-item
        >
        <a-breadcrumb-item>{{
          $route.matched[0].meta.title
        }}</a-breadcrumb-item>
        <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="action flex-between">
      <!-- time -->
      <div class="time">{{ displayTime }}</div>
      <!-- message -->
      <!-- <a-popover
        placement="bottomRight"
        trigger="click"
        overlayClassName="msg-popover"
      >
        <template slot="content">
          <msg-box></msg-box>
        </template>
        <div class="msg-c">
          <a-badge dot>
            <svg-icon iconClass="msg" class="msg"></svg-icon>
          </a-badge>
          <span class="msg-count">12</span>
        </div>
      </a-popover> -->
      <!-- user -->
      <a-dropdown placement="bottomRight">
        <div class="name-c">
          <a-avatar class="avatar">
            {{ initials }}
          </a-avatar>
          <span class="name">{{ name }}</span>
          <svg-icon iconClass="arrowBottom"></svg-icon>
        </div>
        <a-menu slot="overlay">
          <a-menu-item>{{ name }} </a-menu-item>
          <a-menu-item>Bosch NT : {{ nt }} </a-menu-item>
          <a-menu-item>Department : {{ department }} </a-menu-item>
        </a-menu>
      </a-dropdown>
    </div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import MsgBox from "../MsgBox";
export default {
  components: { MsgBox },
  name: "PageHeader",
  data() {
    return {
      fixHeader: true,
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["sidebar", "name", "nt", "department"]),
    isCollapse() {
      return !this.sidebar.opened;
    },
    initials() {
      console.log(this.name);
      const splitName = this.name.split(" ");
      return splitName[0].substring(0, 1) + splitName[1].substring(0, 1);
    },
    displayTime() {
      return this.$dayjs(new Date()).format("ddd DD MMM YYYY");
    },
  },
  created() {},
  mounted() {
    console.log(this.$route.matched);
  },
  methods: {
    toggleCollapsed() {
      // this.collapsed = !this.collapsed;
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>
<style lang="less" scoped>
@header-height: 46px;
.fix-header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: #f4f4f4;
  z-index: 1;
}
.page-header {
  margin-top: 10px;
  width: 100%;
  height: 60px;
  align-items: center;

  .fold-ic {
    width: 40px;
    height: 40px;
    cursor: pointer;
    border-radius: 2px;
    flex-shrink: 0;
  }
  .breadcrumb {
    flex: 1;
    background-color: #ffffff;
    height: @header-height;
    color: @primary-color;
    margin: 0 12px 0 12px;
    align-items: center;
    padding-left: 16px;
    box-shadow: 0px 13px 16px 0px rgba(59, 64, 65, 0.02);
    ::v-deep .ant-breadcrumb-link {
      font-weight: 500;
      color: #9da1a8;
      font-size: 14px;
    }
    .click {
      font-weight: bold;
      color: @primary-color;
    }
  }

  .action {
    box-shadow: 0px 13px 16px 0px rgba(59, 64, 65, 0.02);
    width: 500px;
    height: @header-height;
    background: #ffffff;
    color: @primary-color;
    align-items: center;

    .time {
      font-weight: bold;
      font-size: 16px;
      padding-left: 12px;
    }
    .msg-c {
      height: @header-height;
      padding: 0 32px;
      border-left: 1px solid #eff1f2;
      border-right: 1px solid #eff1f2;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      cursor: pointer;
      .msg {
        font-size: 21px;
      }
      .msg-count {
        font-weight: bold;
        font-size: 16px;
      }
    }

    .name-c {
      cursor: pointer;
      height: @header-height;
      display: flex;
      align-items: center;
      padding-right: 12px;

      .avatar {
        background-color: @primary-color;
        color: #ffffff;
        margin-right: 8px;
        font-weight: normal;
        font-size: 12px;
      }
      .name {
        font-size: 16px;
        font-weight: bold;
        margin-right: 8px;
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 120px;
        overflow: hidden;
      }
    }
  }
}
</style>
