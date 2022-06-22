<template>
  <Card1080 title="Data Analysis">
    <template slot="left">
      <div class="flexCotent">
        <a-form
          class="form"
          layout="inline"
          :form="nameForm"
          @submit="handleSubmit"
        >
          <a-form-item label="Project name">
            <a-input style="width: 200px" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit"> Submit </a-button>
          </a-form-item>
        </a-form>
        <a-form
          class="form"
          layout="inline"
          :form="dataForm"
          @submit="handleSubmit"
        >
          <a-form-item label="Project name">
            <a-upload
              name="file"
              :multiple="true"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              :headers="headers"
              @change="handleChange"
            >
              <a-button style="width: 200px">
                <a-icon type="upload" /> Click to Upload
              </a-button>
            </a-upload>
          </a-form-item>
          <a-form-item>
            <a-button type="primary" html-type="submit"> Submit </a-button>
          </a-form-item>
        </a-form>
      </div>
    </template>
    <template slot="right">
      <chart-view :chart-option="chartOpt" :auto-resize="true" height="100%" />
    </template>
  </Card1080>
</template>
<script>
import Card1080 from "@/components/Card1080";
export default {
  name: "DataAnalysis",
  components: { Card1080 },
  data() {
    return {
      chartOpt: {},
      headers: undefined,
      nameForm: {},
      dataForm: {},
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.chartOpt = this.$eChartFn.testBar();
  },
  methods: {
    handleSubmit() {},
    change() {},
    handleChange() {},
  },
};
</script>
<style lang="less" scoped>
@import "../../index.less";
</style>
