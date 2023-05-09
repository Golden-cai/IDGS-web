<template>
  <view class="pay-order-box">
    <view class="count-down-box">
      <view class="valid-order" >
        <at-countdown class="count-down"
                     :format="{ minutes: ':', seconds: '' }"
                     :minutes="15"
                      @time-up="timeUp"
        />
      </view>
      <view class="inValid-order">
        订单超期，无效
      </view>
    </view>
    <view class="doctor-info">
      <view class="hospital-name"> 澧县人民医院 </view>
      <view class="department-name"> 心内科 </view>
      <view class="doctor-name"> 张三 </view>
    </view>
    <at-list class="order-info-list">
      <at-list-item class="user-name"
               title="就诊人"
      />
    </at-list>
    <at-icon class="pay-method-icon"
             value="clock"
    />
  </view>
  <view class="pay-order-footer">
    <at-button class="pay-order"
               type="primary"
               @click="pay"
    >
      支付
    </at-button>
  </view>

</template>

<script setup>
import { AtCountdown, AtList, AtListItem, AtIcon, AtButton } from "taro-ui-vue3";
import Taro from "@tarojs/taro";
import {onMounted} from "vue";

const orderId = Taro.getCurrentInstance().router.params.orderId

onMounted(() => {
  getDate()
})

const pay = () => {
  Taro.navigateTo({
    url: '/pages/index/index'
  })
}

const getDate = () => {
  console.log(orderId)
}

const timeUp = () => {
  Taro.showToast({
    title: '时间到',
    icon: 'success',
    duration: 2000
  })
}




</script>
