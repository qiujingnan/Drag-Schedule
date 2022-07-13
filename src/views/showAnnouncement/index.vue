<template>
  <div class="announce-show">
    <p>First ask yourself this question: who needs this product and why?</p>
    <div class="containner">
      {{ content }}
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {
      content:
        "Exactly. Companies want to develop solutions as quickly as possible. When they do, they should start by asking themselves the following questions: Who needs this product and why? And what does the solution need to look like if it’s going to meet customer needs? It’s a question of putting yourself in the shoes of users and developing simple and intelligent solutions. Products need to help people instead of slowing them down. If you don’t take this into consideration at the start, years of development work may have been in vain.It is increasingly becoming a competitive advantage to have a nice design and a good user experience. Apple is the best example of this. The company prioritized the user-friendliness of its products by networking individual devices, for example. People can work more efficiently, they use the products often and enjoy doing so, and they are willing to pay more for them.",
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {
    this.getPageContent();
  },
  methods: {
    // 后端获取该页面内容
    getPageContent() {
      const articleId = this.$route.query.articleId;
      // 通过id 获得description的内容
    },
  },
};
</script>
<style lang="less" scoped>
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}

// @import "./index.less";
</style>
