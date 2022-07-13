<template>
  <div class="announceManagement">
    <a-form-model
      ref="ruleForm"
      :model="form"
      :label-col="labelCol"
      :wrapper-col="wrapperCol"
      :rules="rules"
    >
      <a-form-model-item label="Article name" prop="name">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="Author name" prop="Authorname">
        <a-select
          v-model="form.Authorname"
          placeholder="please select your zone"
        >
          <a-select-option value="nnn"> dsdsd </a-select-option>
          <a-select-option value="dsdsds"> dsdsd </a-select-option>
        </a-select>
      </a-form-model-item>
      <a-form-model-item label="Create time" prop="date">
        <a-date-picker
          v-model="form.date"
          show-time
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </a-form-model-item>

      <a-form-model-item label="Article content" prop="desc">
        <a-input v-model="form.desc" type="textarea" style="height: 300px" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit"> Create </a-button>
        <a-button style="margin-left: 10px"> Cancel </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "announceManagement",
  components: {},
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: "",
        Authorname: undefined,
        date: undefined,
        desc: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input article name",
            trigger: "blur",
          },
          {
            min: 3,
            max: 120,
            message: "Length should be 3 to 150",
            trigger: "blur",
          },
        ],
        Authorname: [
          {
            required: true,
            message: "Please select Author name",
            trigger: "change",
          },
        ],
        date: [
          { required: true, message: "Please pick a date", trigger: "change" },
        ],
        desc: [
          {
            required: true,
            message: "Please input article content",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {
    //  重置表单内容
    this.resetForm();
  },
  methods: {
    //   提交form至后端
    onSubmit() {
      console.log("submit!", this.form);
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
  },
};
</script>
<style lang="less" scoped>
// @import "./index.less";
</style>
