<template>
  <view class="home-page">
    <at-button class="select-hospital-button"
      v-if="isSelectedHospital"
      type="primary"
      @click="selectHospital">
      请先选择医院
    </at-button>
    <at-search-bar class="search-doctor-bar"
      v-model:value="searchValue"
      placeholder="搜索医生信息"
      @action-click="searchDoctorInfo" />
    <swiper class="hospital-info-image"
      duration="500"
      interval="5000"
      circular="true"
      autoplay="true"
      indicatorDots="true">
      <swiper-item
        v-for = "(imageUrl, idx) in state.showImageUrls"
        :key="idx"
        >
        <image :src="imageUrl" bottom="true" class="show-image" />
      </swiper-item>
    </swiper>
    <view class="hospital-notice">
      <at-icon class="notice-icon" value='message' color='#000'></at-icon>
      <swiper class="hospital-notice-info"
          duration="500"
          interval="5000"
          circular="true"
          autoplay="true"
          indicatorDots="true"
          displayMultipleItems="1"
          vertical="true">
        <swiper-item v-for = "(item, idx) in state.notices"
         :key="idx">
          <view>{{ item }}</view>
        </swiper-item>
      </swiper>
    </view>
    <panel class="function-tab"
      no-padding
      title="功能列表"
    >
    <at-grid class="function-list"
        :data="state.functionList"
        :columnNum="4"
        node="rect"
        @click="execFunction"/>

    </panel>
  </view>
</template>

<script setup>
import Taro from '@tarojs/taro'
import {AtButton, AtSearchBar, AtIcon, AtGrid} from 'taro-ui-vue3'
import { Button, Icon } from '@tarojs/components'
import panel from '@/components/panel/panel'
import { ref, reactive, computed, watch, onMounted } from 'vue'
import { useStore } from 'vuex'
import { showImageUrls, notices, functionList } from './config'

onMounted(()=>{
  console.log(state.showImageUrl)
})

const store = useStore()

const isSelectedHospital = computed(() => {
  return store.state.selectedHospital === null
})

const state = reactive({
  showImageUrls: showImageUrls,
  notices: notices,
  functionList: functionList
})

const searchValue = ref('')

const selectHospital = () => {
  Taro.navigateTo({
    url: '/pages/selectHospital/selectHospital',
  })
}

const searchDoctorInfo = () => {
  console.log('搜索的内容是:' + searchValue.value)
}

const execFunction = (item) => {
  Taro.navigateTo({
    url: item.url,
  })
}

watch(()=>store.state.selectedHospital, (hospitalName) =>{
  Taro.setNavigationBarTitle({
    title: hospitalName.hospitalName
  })
})

</script>

<style>
.hospital-notice {
  /* display: flex;
  margin: 0 10px; */
  /* background-color: pink; */
}

.hospital-notice-info {
  background-color: gray;
}

</style>
