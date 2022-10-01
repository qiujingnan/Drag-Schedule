<template>
  <div class="schedule">
    <DragSchedule :courseList="calendarCourse" />
  </div>
</template>
<script>
import DragSchedule from "./components/calendar/index.vue";

export default {
  name: "Schedlue",
  components: { DragSchedule },

  data() {
    return {
      calendarCourse: [],
      courseCurve: [],
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {},
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
