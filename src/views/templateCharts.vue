<template>
  <div class="dashboard-c">
    <chart-view :chart-option="chartOpt" :auto-resize="true" height="100%" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "DashboardView",
  data() {
    return { chartOpt: {} };
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {
    this.chartOpt = this.$eChartFn.testBar();
  },
  methods: {},
};
</script>
<style lang="less" scoped></style>
