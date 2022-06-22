<template>
  <div>
    <!-- header -->
    <header class="flex-between">
      <h1 class="page-title">{{ $route.meta.title }}</h1>
      <i-button
        type="primary"
        size="large"
        width="180px"
        fontWeight="bold"
        @click="visible = true"
      >
        <svg-icon iconClass="roundPlus" class="add-ic"></svg-icon>
        Config Form
      </i-button>
    </header>
    <!-- table area -->
    <div class="table">
      <i-table :columns="columns" rowKey="id" :getData="getList" ref="iTable"> </i-table>
    </div>
    <!-- config-modal -->
    <i-modal
      title="Config Experience"
      :visible="visible"
      @cancel="visible = false"
      @ok="onSubmit"
      destroyOnClose
    >
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item label="Activity name" prop="name">
          <a-input v-model="form.name" Placeholder="Please input" />
        </a-form-model-item>
        <a-form-model-item label="Activity zone" prop="region">
          <a-select v-model="form.region" placeholder="Please select your zone">
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="Activity time" required prop="date1">
          <a-range-picker v-model="form.date1" separator="⇀">
            <svg-icon slot="suffixIcon" icon-class="calendar"></svg-icon>
          </a-range-picker>
        </a-form-model-item>
        <a-form-model-item label="Instant delivery" prop="delivery">
          <a-switch v-model="form.delivery" />
        </a-form-model-item>
        <a-form-model-item label="Activity type" prop="type">
          <a-checkbox-group v-model="form.type">
            <a-checkbox value="1" name="type"> Online </a-checkbox>
            <a-checkbox value="2" name="type"> Promotion </a-checkbox>
            <a-checkbox value="3" name="type"> Offline </a-checkbox>
          </a-checkbox-group>
        </a-form-model-item>
        <a-form-model-item label="Resources" prop="resource">
          <a-radio-group v-model="form.resource">
            <a-radio value="1"> Sponsor </a-radio>
            <a-radio value="2"> Venue </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item label="Activity form" prop="desc">
          <a-input v-model="form.desc" type="textarea" placeholder="Please input" />
        </a-form-model-item>
      </a-form-model>
    </i-modal>
  </div>
</template>

<script>
import { apiGetFormData } from "@/api/user";
import ITable from "@/components/ITable";
export default {
  name: "BasicForm",
  components: { ITable },
  data() {
    return {
      visible: false,
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      form: {
        name: "",
        region: undefined,
        date1: undefined,
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        name: [
          { required: true, message: "Please input Activity name", trigger: "blur" },
          { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
        ],
        region: [
          { required: true, message: "Please select Activity zone", trigger: "change" },
        ],
        date1: [{ required: true, message: "Please pick a date", trigger: "change" }],
        type: [
          {
            type: "array",
            required: true,
            message: "Please select at least one activity type",
            trigger: "change",
          },
        ],
        resource: [
          {
            required: true,
            message: "Please select activity resource",
            trigger: "change",
          },
        ],
        desc: [
          { required: true, message: "Please input activity form", trigger: "blur" },
        ],
      },
      columns: [
        {
          title: "Title",
          dataIndex: "title",
          width: "auto",
        },
        {
          title: "Bonus Value",
          dataIndex: "bonusValue",
          width: "auto",
        },
        {
          title: "Description",
          dataIndex: "description",
          width: "400px",
        },
        {
          title: "Accepeted User",
          dataIndex: "accepetedUser",
          width: "auto",
        },
        {
          title: "RewardStatus",
          dataIndex: "rewardStatus",
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
    onSubmit() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async getList({ pageNum, pageSize }, cb) {
      try {
        const data = await apiGetFormData({ pageNum, pageSize });
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
  },
};
</script>
<style lang="less" scoped>
::v-deep .ant-calendar-range-picker-separator {
  font-size: 16px;
}
header {
  align-items: center;
  .page-title {
    font-size: 48px;
    font-weight: bold;
    color: @primary-color;
  }

  .add-ic {
    margin-right: 8px;
    font-size: 1.2em;
  }
}
</style>
