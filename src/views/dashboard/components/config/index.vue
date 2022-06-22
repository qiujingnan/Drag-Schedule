<template>
  <div class="configPage">
    <div class="card">
      <DataAnalysis />
    </div>
    <div class="card">
      <result-assessment v-on:changePage="changePage" />
    </div>
  </div>
</template>
<script>
import DataAnalysis from "./components/DataAnalysis/index.vue";
import ResultAssessment from "./components/resultAssessment/index.vue";
export default {
  name: "configpage",
  components: { DataAnalysis, ResultAssessment },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changePage() {
      this.$emit("changePage");
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
