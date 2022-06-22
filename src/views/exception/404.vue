<template>
  <div>
    <a-result
      status="404"
      title="404"
      sub-title="Sorry, the page you visited does not exist."
    >
      <template #extra>
        <a-button type="primary" size="large" @click="$router.push('/')"
          ><a-icon type="home" /> Back Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script>
export default {
  name: "404Page",
  components: {},
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
<style lang="scss" scoped></style>
