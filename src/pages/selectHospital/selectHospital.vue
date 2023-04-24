<template>
  <view class="select-hospital-list" style="height: 100vh;">
    <at-list class="hospital-list">
        <at-list-item class="hospital-list-item"
          v-for="(item, index) in hospitalList" :key="index"
         :title="item.hospitalName"
         arrow="right"
         extraText="详情"
         @click="clickItem(index)"
        />
    </at-list>
    <at-float-layout class="at-float-layout"
     :isOpened="showWindow"
     title="医院详情"
     @close="closeWindow"
    >
      <hospital-info-detail class="hospital-info-detail"
                            :hospitalInfo="selectHospital"
                            @selected="closeWindowAndBack"
      />
    </at-float-layout>
  </view>

</template>

<script>
import Taro from '@tarojs/taro'
import { fetchApi } from '@/http/fetchApi'

import { AtList, AtListItem, AtFloatLayout } from 'taro-ui-vue3'
import hospitalInfoDetail from "@/components/hospitalInfoDetail/hospitalInfoDetail.vue";

export default {
  name: 'SelectHospital',
  data() {
    return {
      hospitalList: [],
      selectHospital: null,
      showWindow: false,
    }
  },
  components:{
    AtList,
    AtListItem,
    AtFloatLayout,
    hospitalInfoDetail,
  },
  methods: {
    fetchApi,
    async init() {
      let response = await fetchApi('queryHospitalList')

      if (response.result.code === '0000') {
        console.log(response.data)
        this.hospitalList=response.data
      } else {
        this.hospitalList = []
      }
      console.log(this.hospitalList[0])
    },
    clickItem(index) {
      this.showWindow = true;
      this.selectHospital = this.hospitalList.at(index)
    },
    closeWindow() {
      this.showWindow = false;
    },
    closeWindowAndBack() {
      this.showWindow = false;
      Taro.navigateBack({
        delta: 1
      })
    }
  },
  created() {
    this.init()
  }
}

</script>

<style>

</style>
