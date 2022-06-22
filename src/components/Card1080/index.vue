<template>
  <div class="card1080">
    <div class="title">
      <slot name="title">
        <div class="title">{{ title }}</div>
      </slot>
    </div>
    <div class="content">
      <div class="left"><slot name="left"></slot></div>
      <div class="right"><slot name="right"></slot></div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Card1080",
  props: {
    title: {
      type: String,
      default: "title",
    },
  },
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
.card1080 {
  height: 100%;
  padding: 30px;
  background: #ffffff;
  box-shadow: 5px 0px 12px 0px rgb(0 0 0 / 3%);
  margin: 20px;
  .title {
    color: #798093;
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    font-size: 24px;
  }
  .content {
    height: 100%;
    display: flex;
    .left {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
    }
    .right {
      // display: flex;
      // align-items: center;
      // justify-content: center;
      float: right;
      width: 50%;
    }
  }
}
</style>
