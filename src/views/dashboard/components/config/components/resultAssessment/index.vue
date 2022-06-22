<template>
  <Card1080 title="Result Assessment ">
    <template slot="left"> Result Assessment </template>
    <template slot="right">
      <div v-for="(item, index) in buttonList" :key="index">
        <a-button
          type="primary"
          class="btn"
          size="large"
          @click="_click(item.option)"
        >
          {{ item.name }}
        </a-button>
      </div>
    </template>
  </Card1080>
</template>
<script>
import Card1080 from "@/components/Card1080";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "configpage",
  components: { Card1080 },
  data() {
    return {
      buttonList: [
        { name: "Save", option: "handleSave" },
        { name: "Reset", option: "handleReset" },
        { name: "Cancel", option: "handleCancel" },
      ],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    ...mapMutations("dashboard", ["ADD_CARDLIST"]),
    _click(methodname) {
      console.log(methodname);
      let _this = this;
      this.$options.methods[methodname](_this);
    },
    handleSave(_this) {
      // 前端保存card到view页面
      // 调用后端接口保存

      const project = {
        title: "JNProJ",
      };
      console.log(_this.buttonList);
      _this.ADD_CARDLIST(project);
      _this.$emit("changePage");
    },
    handleReset() {
      console.log("fdf");
    },
    handleCancel() {
      console.log("fdffdf");
    },
  },
};
</script>
<style lang="less" scoped>
@import "../../index.less";
</style>
