<template>
  <div class="role-c">
    <!-- header -->
    <header class="flex-between">
      <h1 class="page-title">Roles</h1>
      <a-space>
        <i-button
          type="default"
          size="large"
          width="180px"
          color="#03619a"
          bgColor="#ffffff"
          border="1px solid transparent"
          fontWeight="bold"
          @click="handleAction('Upload')"
        >
          <a-icon type="upload" />
          Upload Role</i-button
        >
        <i-button
          type="default"
          size="large"
          width="180px"
          color="#03619a"
          bgColor="#ffffff"
          border="1px solid transparent"
          fontWeight="bold"
          @click="handleAction('Download')"
        >
          <a-icon type="download" />
          Download Role</i-button
        >
      </a-space>
    </header>

    <!-- table area -->
    <div class="table">
      <i-table :columns="columns" rowKey="id" :getData="getList" ref="iTable"> </i-table>
    </div>
  </div>
</template>

<script>
import { apiGetRoleData } from "@/api/user";
import ITable from "@/components/ITable";
export default {
  name: "RoleView",
  components: { ITable },
  data() {
    return {
      searchForm: {
        user: "",
        nt: "",
        coc: undefined,
      },
      cocOptions: [
        {
          label: "option1",
          value: "option1",
        },
        {
          label: "option2",
          value: "option2",
        },
        {
          label: "option3",
          value: "option3",
        },
      ],
      columns: [
        {
          title: "Role Name",
          dataIndex: "roleName",
          width: "auto",
        },
        {
          title: "Description",
          dataIndex: "description",
          width: "auto",
        },
      ],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    async getList({ pageNum, pageSize }, cb) {
      try {
        const { user, nt, coc } = this.searchForm;
        const data = await apiGetRoleData({ pageNum, pageSize, user, nt, coc });
        const { total, result, pages } = data;
        cb({
          total,
          dataSource: result,
          pages,
        });
      } catch (err) {
        console.warn(err);
        cb({
          total: 0,
          dataSource: [],
          pages: 0,
        });
      }
    },
    handleSearch() {
      this.$refs.iTable.init();
    },
    handleClear() {
      this.searchForm = {
        user: "",
        nt: "",
        coc: undefined,
      };
      this.$refs.iTable.init();
    },
    handleAction(type) {
      const hide = this.$message.loading("Action in progress..", 0);
      setTimeout(() => {
        hide();
        this.$message.success(`${type} successfully!`);
      }, 1000);
    },
  },
};
</script>
<style lang="less" scoped>
.role-c {
  min-height: 100vh;
  header {
    align-items: center;
    .page-title {
      font-size: 48px;
      font-weight: bold;
      color: @primary-color;
    }
  }
  .operate {
    ::v-deep .ant-select-selection {
      border-color: transparent;
    }
    &-input {
      border-color: transparent;
      ::v-deep .ant-select-selection__placeholder,
      &::placeholder {
        font-weight: bold;
        color: #b4bed1;
      }
    }
    .action {
      display: flex;
      align-content: flex-end;
      justify-content: flex-end;
      padding-top: 38px;

      .btn {
        width: 108px;
        font-weight: bold;
      }
    }
  }
}

::v-deep .ant-form-item-label > label {
  color: @primary-color;
  font-weight: bold;
  font-size: 20px;
}
</style>
