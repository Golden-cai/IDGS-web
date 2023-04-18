<template>
  <view class="select-hospital-list" style="height: 100vh;">
    <at-list hospital-list>
        <at-list-item class="hospital-list-item"
          v-for="(item, index) in hospitalList" key="index"
         :title="item.hospitalName"
         arrow="right"
         extraText="详情"
         @click="clickItem(item.hospitalId)"
        />
    </at-list>
    <at-float-layout class="at-float-layout"
     :isOpened="showWindow"
     title="测试一下"
     @close="close"
    >
    这是内容
    </at-float-layout>
  </view>

</template>

<script>
import { fetchApi } from '@/http/fetchApi'

import { AtList, AtListItem, AtFloatLayout  } from 'taro-ui-vue3'

export default {
  name: 'SelectHospital',
  data() {
    return {
      hospitalList: [],
      showWindow: false,
    }
  },
  components:{
    AtList,
    AtListItem,
    AtFloatLayout
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
      console.log(this.hospitalList[0].hospitalName)   
    },
    clickItem(value) {
      this.showWindow = true;
    },
    close() {
      this.showWindow = false;
    }
  },
  created() {
    this.init()
  }
}

</script>

<style>
.at-float-layout {
  
}
</style>