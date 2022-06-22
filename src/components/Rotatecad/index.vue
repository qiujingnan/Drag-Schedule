<template>
  <div
    class="card-3d"
    @click="eve_cardres_click"
    @mouseover="eve_cardres_msover"
    @mouseout="eve_cardres_msout"
  >
    <div class="card card-z" ref="cardz">
      <slot name="title">
        <div class="header">{{ title }}</div>
      </slot>
      <slot name="font"></slot>
    </div>
    <div
      :class="['card', direction == 'row' ? 'card-f-y' : 'card-f-x']"
      ref="cardf"
    >
      <slot name="back"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    trigger: {
      //触发方式 hover click custom
      type: String,
      default: "click", //默认点击触发
    },
    value: {
      //正反面
      type: Boolean,
      default: true,
    },
    direction: {
      //方向 row col
      type: String,
      default: "row",
    },
    title: {
      type: String,
      default: "title",
    },
  },
  data() {
    return {
      surface: true,
    };
  },
  watch: {
    value(bool) {
      //自定义触发方式
      if (this.trigger == "custom") this.fn_reserve_action(bool);
    },
  },
  methods: {
    fn_reserve_action(bool) {
      var arr =
        this.direction == "row"
          ? ["rotateY(180deg)", "rotateY(0deg)"]
          : ["rotateX(-180deg)", "rotateX(0deg)"];
      this.$refs.cardz.style.transform = bool ? arr[0] : arr[1];
      this.$refs.cardf.style.transform = !bool ? arr[0] : arr[1];
    },
    eve_cardres_click() {
      if (this.trigger == "click") {
        this.fn_reserve_action(this.surface);
        this.surface = !this.surface;
      }
    },
    eve_cardres_msover() {
      if (this.trigger == "hover") this.fn_reserve_action(true);
    },
    eve_cardres_msout() {
      if (this.trigger == "hover") this.fn_reserve_action(false);
    },
  },
};
</script>
<style lang="less" scoped>
.card-3d {
  width: 100%;
  height: 100%;
  transition: all 0.6s;
  position: relative;
  perspective: 1500px;
  background-color: transparent;
  cursor: pointer;
  .card {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    font-family: "boschsans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    height: 100%;
    transition: all 1s;
    backface-visibility: hidden;
    border-radius: 4px;
    box-shadow: inset 0 0 0 1px #79c5c0;
    border-top: none;
    // &:hover {
    //   box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    //   border-color: #eee;
    // }
    &.card-z {
      background-image: linear-gradient(to right, #001d33, #004975);
    }
    &.card-f-y {
      transform: rotateY(-180deg);
      background-image: linear-gradient(to right, #001d33, #004975);
    }
    &.card-f-x {
      transform: rotateX(-180deg);
      background-image: linear-gradient(to right, #001d33, #004975);
    }
  }
  .header {
    font-size: 14px;
    color: #000;
    height: 21px;
    line-height: 21px;
    background-color: #79c5c0;
    width: 100%;
    margin-top: -1px;
    // padding: 1px;
    font-family: "boschsans-bold", "Helvetica Neue", Helvetica, Arial,
      sans-serif;
  }
}
</style>
