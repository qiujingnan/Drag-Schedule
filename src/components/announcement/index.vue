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

export default {
  name: "announcement",
  components: {},
  props: {
    listData: Array,
  },
  data() {
    return {
      pagination: {
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      },
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
