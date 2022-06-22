<template>
  <div>
    <a-tabs default-active-key="1" size="small">
      <a-tab-pane key="1" tab="Notification">
        <scrollbar class="tab-content" key="notify">
          <a-list item-layout="horizontal" :data-source="notigyData" class="tab-content">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta :description="item.description">
                <a slot="title">{{ item.title }}</a>
                <a-avatar
                  slot="avatar"
                  :icon="item.icon"
                  style="background-color: #03619a"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </scrollbar>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Message">
        <scrollbar class="tab-content" key="msg">
          <a-list item-layout="horizontal" :data-source="messageData" class="tab-content">
            <a-list-item slot="renderItem" slot-scope="item">
              <a-list-item-meta description="Hello ,I'm....">
                <a slot="title">{{ item.title }}</a>
                <a-avatar
                  slot="avatar"
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                />
              </a-list-item-meta>
            </a-list-item>
          </a-list>
        </scrollbar>
      </a-tab-pane>
    </a-tabs>
    <div class="action flex-between">
      <i-button type="link" size="large" block class="clear" @click="handleClear"
        >Clear</i-button
      >
      <i-button type="link" size="large" block @click="handleMore">View more</i-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  components: {},
  data() {
    return {
      notigyData: [
        {
          title: "Apply",
          description: "5 days ago.",
          icon: "skype",
        },
        {
          title: "Apply",
          description: "5 days ago.",
          icon: "github",
        },
        {
          title: "Apply",
          description: "5 days ago.",
          icon: "skype",
        },
        {
          title: "Apply",
          description: "5 days ago.",
          icon: "skype",
        },
        {
          title: "Apply",
          description: "5 days ago.",
          icon: "message",
        },
      ],
      messageData: [
        {
          title: "Sunny",
        },
        {
          title: "Martin",
        },
        {
          title: "John",
        },
        {
          title: "Jack",
        },
      ],
    };
  },
  methods: {
    handleClear() {
      this.$message.success("Clear successfully.");
    },
    handleMore() {
      this.$message.info("View more");
    },
  },
};
</script>
<style lang="less">
.msg-popover {
  width: 282px;
  .ant-popover-inner-content {
    padding-bottom: 0;
  }
  .ant-tabs-nav-scroll {
    text-align: center;
  }
}
</style>

<style lang="less" scoped>
.tab-content {
  width: 250px;
  height: 320px;
}

.action {
  border-top: 1px solid @opacity-color;
  margin: 0 -16px;

  .clear {
    border-right: 1px solid @opacity-color;
  }
}
</style>
