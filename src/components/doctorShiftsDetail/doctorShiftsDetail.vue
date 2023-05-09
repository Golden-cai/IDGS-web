<template>
  <view class="doctor-shifts-detail-box">
      <at-card class="doctor-info"
               :title="doctorInfo.doctorName"
               note="点击预约医生挂号"
               :extra="doctorInfo.doctorTitle"
               @click="viewDoctorDetail"
      >
        <at-avatar circle :text="doctorInfo.doctorName"></at-avatar>
        <view class="appointment-count">挂号量：99999</view>
        <view class="doctor-rate-box">
          <view class="doctor-rate">评分</view>
          <at-rate class="doctor-rate-star"
                   :value="4.5"
                   :max="5"
          />
          <view class="doctor-rate-number"> 4.5 </view>
        </view>
        <shifts class="doctor-shifts-list"
                v-for="(item, index) in ShiftsList"
                :key="index"
                :shifts="item"
                @submit="submit"
        />
      </at-card>
  </view>
</template>

<script setup>
import { AtAvatar, AtRate, AtCard, AtCurtain  } from 'taro-ui-vue3'
import Shifts from "./shifts.vue";
import { ref } from "vue";
import Taro from "@tarojs/taro";
import { useStore } from "vuex";

const store = useStore()

const prop = defineProps({
        doctorInfo: Object,
        ShiftsList: Array
})

defineEmits({

})

const isOpened = ref(false)

const viewDoctorDetail = () => {
  isOpened.value = true;
  console.log('查看医生信息')
}

const closeWindow = () => {
  isOpened.value = false;
}


const submit = () => {
  store.commit('updateDoctor', prop.doctorInfo)
  Taro.navigateTo({
    url: '/pages/createOrder/createOrder',
  })
}
</script>
