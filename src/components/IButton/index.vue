<template>
  <!-- 扩展ant button组件 支持继承a-button 属性 -->
  <a-button
    v-bind="$attrs"
    v-on="$listeners"
    :style="{ width, height, backgroundColor: bgColor, color, border, fontWeight }"
    ><slot></slot
  ></a-button>
</template>

<script>
export default {
  name: "IButton",
  inheritAttrs: false,
  props: ["width", "height", "bgColor", "color", "border", "fontWeight"],
};
</script>
<style lang="less" scoped></style>
