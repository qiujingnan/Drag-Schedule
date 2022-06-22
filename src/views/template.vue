<template></template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "template",
  components: {},
  data() {
    return {};
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
// @import "./index.less";
</style>
