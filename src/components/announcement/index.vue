<template>
  <div class="announcement">
    <a-list
      item-layout="vertical"
      size="large"
      :pagination="pagination"
      :data-source="listData"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <div class="flex-between">
          <span>
            <a
              slot="title"
              @click="handleJumpNextPage(item.id)"
              target="_blank"
              >{{ item.title }}</a
            ></span
          >
          <span> {{ item.date }}</span>
        </div>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    id: "",
    title: `ant design vue part ${i}`,
    date: Date(),
    description: "",
  });
}
export default {
  name: "announcement",
  components: {},
  data() {
    return {
      listData,
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
      actions: [
        { type: "star-o", text: "156" },
        { type: "like-o", text: "156" },
        { type: "message", text: "2" },
      ],
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {},
  methods: {
    handleJumpNextPage(id) {
      console.log(id);
      this.$router.push({
        path: "/announcement/content",
        query: {
          articleId: id,
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.ant-list-lg .ant-list-item {
  padding: 16px;
}
// @import "./index.less";
</style>
