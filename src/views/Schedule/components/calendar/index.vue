<template>
  <div class="calendar flex-between" id="calendar">
    <div class="calendar-colum flex-column">
      <div class="calendar-colum-row flex-between"></div>
      <div class="calendar-colum-row">Monday</div>
      <div class="calendar-colum-row">Tuesday</div>
      <div class="calendar-colum-row">Wednesday</div>
      <div class="calendar-colum-row">Thursday</div>
      <div class="calendar-colum-row">Friday</div>
    </div>
    <template v-for="(item, index) in courseList">
      <div
        :key="index"
        class="calendar-colum flex-column"
        :style="columWidth"
        v-if="index < pageIndex + 4 && index >= pageIndex"
      >
        <div class="calendar-colum-row flex-center" id="calendarRow">
          <span
            @click="handlePre"
            class="triangle04"
            v-if="index == pageIndex"
          ></span>

          {{ `Week` + item.week }}
          <span
            @click="handleNext"
            class="triangle06"
            v-if="index == pageIndex + 3"
          ></span>
        </div>
        <template v-for="i in [1, 2, 3, 4, 5]">
          <div class="calendar-colum-row" :key="i" v-if="caculate(item, i)">
            <template v-for="subitem in item.data[i - 1].data">
              <card-components
                @dragstart="dragstart"
                @dragend="dragend"
                @finishedCourse="finishedCourse(subitem)"
                :key="subitem.id"
                :item="subitem"
              />
            </template>
          </div>
          <div
            :id="item.week + ',' + i"
            class="calendar-colum-row flex-center"
            :key="i"
            v-else
            @drop="drop"
            @dragover.prevent
          ></div>
        </template>
      </div>
    </template>
  </div>
</template>
<script>
import cardComponents from "./components/index.vue";
import listArr from "./option";
export default {
  name: "calendar",
  components: { cardComponents },
  // props: ["courseList"],
  data() {
    return {
      courseList: listArr,
      weekNumber: 4,
      columWidth: { width: " calc(100% / 4)" },
      pageIndex: 0,
      dropData: {},
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    caculate(item, i) {
      if (item.data.find((e) => e.dayOfWeek === i).data.length != 0) {
        return true;
      } else {
        return false;
      }
    },
    async finishedCourse(subitem) {
      //完成课程
      subitem.isComplete = 1;

      //   await apiCoursecCmplete({ courseId: subitem.id });
    },
    handleNext() {
      if (this.pageIndex === this.courseList.length - 4) return;
      this.pageIndex++;
    },
    handlePre() {
      if (this.pageIndex === 0) return;
      this.pageIndex--;
    },
    dragstart(event, data) {
      console.log("drag");
      console.log(event);
      this.dropData = data;
    },
    dragend(event) {},
    drop(event) {
      console.log(event.target.id);
      const week = event.target.id.split(",")[0];
      const dayofweek = event.target.id.split(",")[1];
      // 删除数组中的原数组
      this.findAnddelete();
      // 写入新的数组
      this.findAndPush(week, dayofweek);
    },
    findAnddelete() {
      const week = this.dropData.week;
      const dayofweek = this.dropData.dayOfWeek;

      // let weekIndex = 100;
      // let dayIndex = 200;
      // this.courseList
      //   .find((e, index) => {
      //     weekIndex = index;
      //     return e.week == week;
      //   })
      //   .data.findIndex((ne, index) => {
      //     dayIndex = index;
      //     return ne.dayOfWeek == dayofweek;
      //   });
      // console.log(weekIndex, dayIndex);
      const re = this.courseList[week - 1]["data"][dayofweek - 1].data.splice(
        0,
        1
      );
    },
    findAndPush(week, dayofweek) {
      this.dropData.week = week;
      this.dropData.dayOfWeek = dayofweek;
      this.courseList
        .find((e) => {
          return e.week == week;
        })
        .data.find((ne) => {
          return ne.dayOfWeek == dayofweek;
        })
        .data.push(this.dropData);
      // 调用时间修改接口
      const param = [
        {
          courseId: this.dropData.id,
          dayOfWeek: parseInt(dayofweek),
          week: parseInt(week),
        },
      ];
      // this.changePlanTime(param);
    },
  },
};
</script>
<style lang="less" scoped>
@import "./index.less";
</style>
