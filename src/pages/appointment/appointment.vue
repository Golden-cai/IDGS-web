<template>
  <view class="appointment-box">
    <view class="select-mode">
      <view class="title">{{title}}</view>
      <at-segmented-control class="select-mode-control"
        @click="selectMode"
        :values="modeTab"
        :current="currentMode" />
    </view>

    <at-tabs class="select-date"
       v-if="mode"
      :current="currentIndex"
      :tabList="dateList"
      @click="selectDay"
      scroll
      :animated="false">
      <at-tabs-pane
        v-for="(index, key) in dateList"
        :key="key"
        :current="key"
        :index="key"
      >
        <view class="no-shifts" v-show="doctorShiftsList.length === 0">
          当前日期无任何医生值班
        </view>
        <doctor-shifts-detail class="doctor-list1"
                              v-for="(item, key) in doctorShiftsList"
                              :key = key
                              :doctorInfo="item.doctorInfo"
                              :ShiftsList="item.shiftsRecordList"
        />
      </at-tabs-pane>
    </at-tabs>
    <view class="select-doctor"
          v-else
    >
      <view class="no-shifts" v-show="doctorList.length === 0">
        当前日期无任何医生值班
      </view>
      <doctor-shifts-detail class="doctor-list2"
                            v-for="(item, key) in doctorList"
                            :key = key
                            :doctorInfo="item.doctorInfo"
                            :ShiftsList="item.shiftsRecordList"
      />
    </view>

  </view>
</template>

<script setup>
import Taro from "@tarojs/taro";
import { computed, onMounted, reactive, ref } from "vue";
import { AtSegmentedControl, AtTabs, AtTabsPane } from 'taro-ui-vue3'
import DoctorShiftsDetail from "@/components/doctorShiftsDetail/doctorShiftsDetail.vue";
import { fetchApi } from "@/http/fetchApi";
import { week } from "../../common/common";
import { useStore } from "vuex";

const store = useStore()

const departmentId = ref('')
const modeTab = reactive(['日期排班', '医生排班'])
const dateList = reactive([])
const currentMode = ref(0)
const currentIndex = ref(0)
const today = new Date().toLocaleDateString().replace(/\//g,'-');

const doctorList = reactive([])
const shiftsMap = reactive(new Map([
  [0, []],
  [1, []],
  [2, []],
  [3, []],
  [4, []],
  [5, []],
  [6, []]
]))

const title = computed(() => {
  return currentMode.value === 0 ? today : '医生列表'
})

const mode = computed(() => {
  return currentMode.value === 0
})

const doctorShiftsList = computed(() => {
  return shiftsMap.get(currentDay.value)
})

const currentDay = computed( () => {
   let date = new Date().getDay()
    return ( currentIndex.value + date + 1 ) % 7
})

onMounted(()=> {
  init()
  setTitle()
  getShiftsData()
})

const init = () => {
  departmentId.value = store.state.order.department.departmentId
  // 获取当前时间
  let date = new Date()
  // 获取一周的时间
  for (let i = 1; i <= 7; i++) {
    date.setDate(date.getDate() + 1)
    let time = date.getDate().toString() + '\n(' + week[date.getDay()] + ')'
    let obj = { title: time }
    dateList.push(obj)
  }
}

const setTitle = () => {
  Taro.setNavigationBarTitle({
    title: store.state.order.department.departmentItemName
  })
}

const selectMode = (idx) => {
  currentMode.value = idx
}

const selectDay = (idx) => {
  currentIndex.value = idx
}

const getShiftsData = async () => {
  try {
    let response = await fetchApi('queryDoctorShifts', '', departmentId.value)
    let data = response.data
    data.forEach(item => {
      doctorList.push(item)
      item.shiftsRecordList.forEach( doctorShifts => {
        let shifts = {
          doctorInfo: item.doctorInfo,
          shiftsRecordList: [doctorShifts]
        }
        shiftsMap.get(doctorShifts.shiftsDay).push(shifts)
      })
    })
  } catch (e) {
    console.log("error response for queryDoctorShifts")
  }
}

</script>
