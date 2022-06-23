<template>
  <div class="homepage">
    <div class="top-bar"></div>
    <div class="title">AI For Particle Classification</div>
    <div class="content">
      <div class="option">
        <a-upload
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
        >
          <a-button style="width: 350px; background: #c7c7c7">
            Click to Upload
          </a-button>
        </a-upload>
        <a-upload
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
        >
          <a-button style="width: 350px; background: #c7c7c7">
            Click to Upload
          </a-button>
        </a-upload>
        <a-upload
          name="file"
          :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :headers="headers"
          @change="handleChange"
        >
          <a-button style="width: 350px; background: #c7c7c7">
            Click to Upload
          </a-button>
        </a-upload>
      </div>
      <div class="graph">
        <div class="title" style="height: 50px; font-size: 25px; padding: 8px">
          Graph & image
        </div>
        <div class="content1">
          <div class="card">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </div>
          <div class="card">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </div>
          <div class="card">
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
          </div>
        </div>
      </div>
      <div class="report">
        <div class="title" style="height: 50px; font-size: 25px; padding: 8px">
          AI Prediction Report
        </div>
        <div class="content">
          <a-descriptions title="" layout="vertical" bordered>
            <a-descriptions-item label="化学成分/Chemical Composition">
              Cloud Database
            </a-descriptions-item>
            <a-descriptions-item label="金相/Microstructure">
              Prepaid
            </a-descriptions-item>
            <a-descriptions-item label="形貌/Appearance">
              YES
            </a-descriptions-item>

            <a-descriptions-item label="结论/Conclustion" :span="3">
              <a-badge status="processing" text="Running" />
            </a-descriptions-item>
          </a-descriptions>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "homepage",
  components: {},
  data() {
    return {
      headers: {
        authorization: "authorization-text",
      },
    };
  },
  watch: {},
  computed: {
    ...mapGetters(["name"]),
  },
  created() {},
  mounted() {},
  methods: {
    handleChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        this.$message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        this.$message.error(`${info.file.name} file upload failed.`);
      }
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
