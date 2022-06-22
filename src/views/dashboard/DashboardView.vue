<template>
  <div class="dashboard-c">
    <div class="SelectCondition">
      <a-form-model
        ref="ruleForm"
        :model="ConditionForm"
        layout="inline"
        :size="size"
      >
        <a-form-model-item label="" prop="departments">
          <a-select
            v-model="ConditionForm.departments"
            placeholder="Select Departments"
            :dropdownMatchSelectWidth="false"
            :size="size"
            style="width: 250px; margin: 0 16px"
            @change="HandleChangeSelection"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="" prop="departments">
          <a-select
            v-model="ConditionForm.departments"
            placeholder="Select Departments"
            :dropdownMatchSelectWidth="false"
            :size="size"
            style="width: 250px; margin: 0 16px"
            @change="HandleChangeSelection"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="" prop="departments">
          <a-select
            v-model="ConditionForm.departments"
            placeholder="Select Departments"
            :dropdownMatchSelectWidth="false"
            :size="size"
            style="width: 250px; margin: 0 16px"
            @change="HandleChangeSelection"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item label="" prop="departments">
          <a-select
            v-model="ConditionForm.departments"
            placeholder="Select Departments"
            :dropdownMatchSelectWidth="false"
            :size="size"
            style="width: 250px; margin: 0 16px"
            @change="HandleChangeSelection"
          >
            <a-select-option value="shanghai"> Zone one </a-select-option>
            <a-select-option value="beijing"> Zone two </a-select-option>
          </a-select>
        </a-form-model-item>
      </a-form-model>
    </div>
    <div class="TopicBar">
      <span
        style="float: left; color: #798093; font-weight: bold; font-size: 20px"
        >Topic</span
      >
      <span style="color: #babed1">
        Daily Checjlist | Checjlist Design Panel | Data Flow Management |
        History Record | OverView |
      </span>
      <span style="float: right; color: #babed1">
        Sort by
        <a-select
          v-model="ConditionForm.departments"
          placeholder="Most Popular"
          :dropdownMatchSelectWidth="false"
          :size="size"
          style="width: 250px; margin: 0 16px"
          @change="HandleChangeSelection"
        >
          <a-select-option value="shanghai"> Zone one </a-select-option>
          <a-select-option value="beijing"> Zone two </a-select-option>
        </a-select></span
      >
    </div>

    <ViewList v-if="!ISshow" v-on:changePage="changePage"></ViewList>
    <Config v-if="ISshow" v-on:changePage="changePage"></Config>
  </div>
</template>

<script>
import ViewList from "./components/view/index.vue";
import Config from "./components/config/index.vue";

export default {
  name: "DashboardView",
  components: {
    ViewList,
    Config,
  },
  data() {
    return {
      size: "default",
      ConditionForm: {
        departments: undefined,
      },
      ISshow: true,
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changePage() {
      this.ISshow = !this.ISshow;
    },
    HandleChangeSelection() {},
  },
};
</script>
<style lang="less" scoped>
.SelectCondition {
  height: 40px;
  // background: #fff;
  // display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
.TopicBar {
  height: 40px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  overflow: hidden;
  align-items: center;
  line-height: 40px;
  text-align: center;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
</style>
