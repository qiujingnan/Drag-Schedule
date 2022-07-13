<template>
  <div class="announcePage">
    <announce-ment :listData="listData"></announce-ment>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import announceMent from "@/components/announcement/index.vue";
export default {
  name: "announcePage",
  components: {
    announceMent,
  },
  data() {
    return { listData: [] };
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {
    // 从后端获取公告列表
    this.getAnnounce();
  },
  methods: {
    getAnnounce() {
      for (let i = 0; i < 23; i++) {
        this.listData.push({
          id: "",
          title: `First ask yourself this question: who needs this product and why? ${i}First ask yourself this question: who needs this product and why?`,
          date: Date(),
          description: "",
        });
      }
    },
  },
};
</script>
<style lang="less" scoped>
.announcePage {
  height: 100%;
  width: 100%;
}
// @import "./index.less";
</style>
