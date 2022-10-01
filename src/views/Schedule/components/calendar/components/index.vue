<template>
  <div
    class="cardComponents"
    :draggable="!isfinish"
    :id="item.id"
    @dragstart="start($event, item)"
    @dragend="end"
  >
    <div class="card" :class="{ finished: isfinish }">
      <div class="card-title flex-between" :class="{ finished: isfinish }">
        <span class="card-title-text" :title="item.competenceComponentName">{{
          item.competenceComponentName
        }}</span
        ><span class="card-title-checkbox flex-center">
          <a-checkbox
            @change="onChange(item.id)"
            :checked="isfinish"
            :disabled="isfinish"
          >
          </a-checkbox
        ></span>
      </div>
      <div class="card-content">{{ item.name }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cardComponents",
  components: {},
  props: ["item"],
  data() {
    return {
      isfinish: false,
      title: "",
      content: "",
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.isfinish = this.item.isComplete == 1 ? true : false;
    console.log(this.item);
  },
  methods: {
    onChange(id) {
      console.log("90909090");
      this.isfinish = !this.isfinish;
      console.log(this.isfinish);
    },
    start(event, item) {
      this.$emit("dragstart", event, item);
    },
    end() {
      this.$emit("end");
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
