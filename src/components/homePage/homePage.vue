<template>
  <view class="home-page">
    <at-button 
      v-if="isChooseHospital"
      type="primary"
      @click="chooseHospital"
      >
      {{ buttonInfo }}
    </at-button>
    <at-search-bar class="search-bar"
    v-model:value="value" 
    placeholder="搜索医生"
    @action-click="searchInfo"
     />
     <swiper class="swiper-img"
      indicatorColor='#999'
      indicatorActiveColor='#333'
      current="current"
      :duration="duration"
      :interval="interval"
      :circular="isCircular"
      :autoplay="isAutoplay"
      :indicatorDots="hasIndicatorDots">
      <swiper-item v-for = "(item, idx) in imgUrls" :key="idx">
        <image src="item" class="slide-image" />
      </swiper-item>
     </swiper>
      <view class="notis">
        <AtIcon value='message' size='30' color='#F00'></AtIcon>
        <swiper class="swiper-img"
          indicatorColor='#999'
          indicatorActiveColor='#333'
          current="current"
          :duration="duration"
          :interval="interval"
          :circular="isCircular"
          :autoplay="isAutoplay"
          :indicatorDots="false"
          vertical="true">
        <swiper-item v-for = "(item, idx) in imgUrls" :key="idx">
          {{ item }}
        </swiper-item>
        </swiper>
      </view>

     <at-grid class="at-grid"
     :data="grids"
     node="squre"
     columNum="2"
     @click="click"
     />
  </view>

</template>

<script>
import Taro from '@tarojs/taro'
import {AtButton, AtSearchBar, AtIcon, AtGrid} from 'taro-ui-vue3'
import swiperConfig from './homePage.config'
import { Button, Icon } from '@tarojs/components'

export default {

  data() {
    return {
      isChooseHospital:true,
      buttonInfo:'请选择医院',
      current: 0,
      duration: 500,
      interval: 5000,
      isCircular: true,
      isAutoplay: true,
      hasIndicatorDots: true,
      imgUrls: [
        'https://img10.360buyimg.com/babel/s700x360_jfs/t25855/203/725883724/96703/5a598a0f/5b7a22e1Nfd6ba344.jpg!q90!cc_350x180',
        'https://img11.360buyimg.com/babel/s700x360_jfs/t1/4776/39/2280/143162/5b9642a5E83bcda10/d93064343eb12276.jpg!q90!cc_350x180',
        'https://img14.360buyimg.com/babel/s700x360_jfs/t1/4099/12/2578/101668/5b971b4bE65ae279d/89dd1764797acfd9.jpg!q90!cc_350x180',
      ],
      value:'1',
      grids:[
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
          value: '预约'
        },
        {
          image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
          value: '智能导诊'
        },
        {
          image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
          value: '领会员'
        },
        {
          image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          value: '新品首发'
        },
      ]
    }

  },
  mounted() {
    console.log(swiperConfig)
  },
  components:{
    AtSearchBar,
    AtGrid,
    AtIcon,
    AtButton
},
  methods:{
    searchInfo() {
      console.log(swiperConfig)
    },
    click(item, index) {
      console.log(item)
      console.log(index)
    },
    chooseHospital() {
      Taro.navigateTo({
          url: '/pages/selectHospital/selectHospital',
      })
    }
  }

}
</script>