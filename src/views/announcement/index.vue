<template>
  <div class="announcePage">
    <announce-ment></announce-ment>
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
.announcePage {
  height: 100%;
  width: 100%;
}
// @import "./index.less";
</style>
