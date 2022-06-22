<template>
  <div class="page-wrap">
    <page-header></page-header>
    <slot></slot>
  </div>
</template>

<script>
import PageHeader from "../PageHeader";
export default {
  name: "PageWrap",
  components: { PageHeader },
};
</script>
<style lang="less" scoped>
.page-wrap {
  padding: 0 16px 16px;
}
</style>
