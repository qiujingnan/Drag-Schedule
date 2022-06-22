<template functional>
  <a-sub-menu :key="props.menuInfo.name">
    <span slot="title">
      <svg-icon
        class="menu-icon anticon"
        :iconClass="props.menuInfo.meta.icon"
        v-if="props.menuInfo.meta.icon"
      ></svg-icon
      ><span>{{ props.menuInfo.meta.title }}</span>
    </span>
    <template v-for="item in props.menuInfo.children">
      <a-menu-item v-if="!item.children || !item.children.length" :key="item.name">
        <svg-icon
          class="menu-icon anticon"
          :iconClass="item.meta.icon"
          v-if="item.meta.icon"
        ></svg-icon>
        <span>{{ item.meta.title }}</span>
      </a-menu-item>
      <sub-menu v-else :key="item.key" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
export default {
  props: ["menuInfo"],
};
</script>
