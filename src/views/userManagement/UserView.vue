<template>
  <div class="user-c">
    <!-- header -->
    <header class="flex-between">
      <h1 class="page-title">Users</h1>
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
          Upload Users</i-button
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
          Download Users</i-button
        >
      </a-space>
    </header>
    <!-- operate -->
    <a-form-model layout="vertical" :model="searchForm" class="operate">
      <a-row :gutter="24">
        <a-col :span="6">
          <a-form-model-item label="User Name">
            <a-input
              size="large"
              v-model="searchForm.user"
              placeholder="Input User Name..."
              class="operate-input"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="6">
          <a-form-model-item label="NT">
            <a-input
              size="large"
              v-model="searchForm.nt"
              placeholder="Input NT"
              class="operate-input"
            />
          </a-form-model-item>
        </a-col>
        <a-col :span="6">
          <a-form-model-item label="COC">
            <a-select
              v-model="searchForm.coc"
              size="large"
              class="operate-input"
              placeholder="Choose COC..."
            >
              <a-select-option
                :key="item.value"
                :value="item.value"
                v-for="item in cocOptions"
                >{{ item.label }}</a-select-option
              >
            </a-select>
          </a-form-model-item>
        </a-col>
        <a-col :span="6" class="action">
          <a-space align="end">
            <a-button type="primary" class="btn" size="large" @click="handleSearch">
              <a-icon type="search" />
              Search
            </a-button>
            <i-button
              type="default"
              class="btn"
              bgColor="#cddce5"
              color="#ffffff"
              size="large"
              @click="handleClear"
            >
              <a-icon type="close" /> Clear</i-button
            >
          </a-space>
        </a-col>
      </a-row>
    </a-form-model>
    <!-- table area -->
    <div class="table">
      <i-table :columns="columns" rowKey="id" :getData="getList" ref="iTable"> </i-table>
    </div>
  </div>
</template>

<script>
import { apiGetUserData } from "@/api/user";
import ITable from "@/components/ITable";
export default {
  name: "UserView",
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
          title: "User Name",
          dataIndex: "userName",
          width: "auto",
        },
        {
          title: "NT Account",
          dataIndex: "ntAccount",
          width: "auto",
        },
        {
          title: "Department",
          dataIndex: "department",
          width: "auto",
        },

        {
          title: "Email",
          dataIndex: "email",
          width: "auto",
        },
        {
          title: "Is Admin",
          dataIndex: "isAdmin",
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
        const data = await apiGetUserData({ pageNum, pageSize, user, nt, coc });
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
.user-c {
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
