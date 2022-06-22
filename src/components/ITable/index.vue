<template>
  <div class="i-table">
    <!-- table -->

    <a-table
      :columns="columns"
      :pagination="false"
      :loading="isLoading"
      :data-source="dataSource"
      :bordered="bordered"
      :rowKey="rowKey"
      :style="{
        'background-color': backgroundColor,
      }"
    >
      <template v-for="(slot, slotName) in $scopedSlots" #[slotName]="slotProps">
        <slot :name="slotName" v-bind="slotProps"></slot>
      </template>
    </a-table>

    <!-- pagination -->
    <div class="pagination flex-between">
      <a-pagination
        v-model="pagination.pageNum"
        :total="pagination.total"
        :pageSize.sync="pagination.pageSize"
        @change="handleCurrentChange"
        @showSizeChange="handleSizeChange"
        show-less-items
      />
      <a-pagination
        v-model="pagination.pageNum"
        :total="pagination.total"
        :pageSize.sync="pagination.pageSize"
        :show-total="(total) => `Total ${total} items`"
        show-size-changer
        show-quick-jumper
        @change="handleCurrentChange"
        @showSizeChange="handleSizeChange"
        class="right-pagination"
      >
      </a-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "ITable",
  data() {
    return {
      isLoading: false,
      pagination: {
        total: 0,
        pageNum: 1,
        pages: 0,
        pageSize: 10,
      },
      dataSource: [],
    };
  },
  props: {
    title: String,
    columns: {
      type: Array,
      required: true,
    },
    maxHeight: {
      type: [String, Number],
      defalut: null,
    },
    height: {
      type: [String, Number],
      defalut: null,
    },

    bordered: {
      type: Boolean,
      default: true,
    },
    rowKey: {
      type: [String, Function],
      default: "key",
    },
    getData: {
      type: Function,
      default: () => {},
    },
    autoInit: {
      type: Boolean,
      default: true,
    },
    backgroundColor: {
      type: String,
      default: "#ffffff",
    },
  },
  computed: {},
  created() {
    if (this.autoInit) this.init();
  },
  methods: {
    init() {
      this.pagination = { total: 0, pageNum: 1, pages: 0, pageSize: 10 };
      this.handleData();
    },
    handleRefresh() {
      this.handleData();
    },
    handleData() {
      const { pageNum, pageSize } = this.pagination;
      this.isLoading = true;
      this.getData({ pageNum, pageSize }, (data) => {
        const { dataSource, total, pages } = data;
        this.pagination.total =
          (total ?? "") === "" ? this.pagination.total : total;
        this.pagination.pages =
          (pages ?? "") === "" ? this.pagination.pages : pages;
        this.dataSource = dataSource;
        this.isLoading = false;
      });
    },

    handleSizeChange(current, val) {
      this.pagination.pageSize = val;
      this.pagination.pageNum = 1;
      this.handleData();
    },
    handleCurrentChange(val) {
      this.pagination.pageNum = val;
      this.handleData();
    },
  },
};
</script>
<style lang="less" scoped>
.pagination {
  margin-top: 24px;
  text-align: right;
  align-items: center;
}

.right-pagination {
  ::v-deep .ant-pagination-item,
  ::v-deep .ant-pagination-prev,
  ::v-deep .ant-pagination-next,
  ::v-deep .ant-pagination-jump-next,
  ::v-deep .ant-pagination-jump-prev {
    display: none;
  }
}

// 覆盖pagination 样式
::v-deep .ant-pagination-item-link {
  background-color: @opacity-color;
  border: none;
  color: #ffffff;
}

::v-deep .ant-pagination-item-active {
  border: none;
  background-color: @primary-color;
  a {
    color: #ffffff;
  }
}

::v-deep .ant-pagination-item,
::v-deep .ant-select-selection {
  line-height: 32px;
  border: none;
  font-weight: bold;
}

::v-deep .ant-pagination-options-quick-jumper {
  font-weight: bold;
  color: @primary-color;
  input {
    border: none;
  }
}

::v-deep .ant-select-selection-selected-value {
  font-weight: bold;
  //   color: rgba(0, 0, 0, 0.8);
}

::v-deep .ant-pagination-total-text {
  font-weight: bold;
  color: @primary-color;
}

::v-deep .ant-table-column-title {
  font-weight: bold;
}
</style>
