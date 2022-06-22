<template>
  <a-modal
    v-bind="$attrs"
    v-on="$listeners"
    :width="width"
    :centered="centered"
    :cancelButtonProps="cancelButtonProps"
    :okButtonProps="okButtonProps"
  >
    <template v-for="(slot, slotName) in $scopedSlots" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="slotProps"></slot>
      </template>
  </a-modal>
</template>

<script>
export default {
  name: "IModal",
  components: {},
  props: {
    width: {
      type: [String, Number],
      default: 800,
    },
    centered: {
      type: Boolean,
      default: true,
    },
    cancelButtonProps: {
      type: Object,
      default: () => {
        return {
          class: "modal-cancel-btn",
          attrs: {
            size: "large",
          },
        };
      },
    },
    okButtonProps: {
      type: Object,
      default: () => {
        return {
          class: "modal-ok-btn",
          attrs: {
            size: "large",
          },
        };
      },
    },
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
.modal-cancel-btn {
  background: rgba(3, 97, 154, 0.05);
  box-shadow: 0px 13px 16px 0px rgba(59, 64, 65, 0.02);
  color: @primary-color;
  border-color: transparent;
  font-weight: bold;
  width: 108px;
}
.modal-ok-btn {
  width: 108px;
  font-weight: bold;
}
</style>
<style lang="less" scoped>
::v-deep .ant-modal-content {
  padding: 0 32px;
  .ant-modal-header {
    padding-left: 0;
    .ant-modal-title {
      color: @primary-color;
      font-weight: bold;
      font-size: 18px;
    }
  }
  .ant-modal-body,
  .ant-modal-footer {
    padding: 10px 0;
  }
}
</style>
