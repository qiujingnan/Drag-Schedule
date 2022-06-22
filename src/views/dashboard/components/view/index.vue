<template>
  <div class="viewpage">
    <a-list :grid="{ gutter: 16, column: 4 }" :data-source="getCardList">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-card
          hoverable
          v-if="item.title != ''"
          :title="item.title"
          class="cardL"
        >
          Card content
        </a-card>
        <a-card hoverable v-else title="New Card" class="cardL">
          <div class="addIcon" @click="showConfig">+</div>
        </a-card>
      </a-list-item>
    </a-list>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ViewList",
  components: {},
  data() {
    return {};
  },
  methods: {
    showConfig() {
      this.$emit("changePage");
    },
  },
  watch: {},
  computed: {
    ...mapGetters("dashboard", ["getCardList"]),
  },
  created() {},
  mounted() {
    console.log(this.getCardList);
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
