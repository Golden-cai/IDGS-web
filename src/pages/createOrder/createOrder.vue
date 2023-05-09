<template>
  <view class="create-order-box">
    <view class="doctor-info">
      <at-avatar class="doctor-img"
        circle :text="doctor.doctorName"></at-avatar>
      <view class="doctor-name">{{ doctor.doctorName }}</view>
      <view class="doctor-title">{{ doctor.doctorTitle }}</view>
      <view class="doctor-hospital">{{ hospital.hospitalName }}</view>
      <view class="doctor-department">{{ department.departmentItemName }}</view>
    </view>
    <at-list>
      <at-list-item class="appointment-time"
                    title="就诊时间"
                    :extraText="shifts.shiftsTime"

      />
      <at-list-item class="appointment-fee"
                    title="挂号费用"
                    :extraText="shifts.shiftsAmount"
      />
      <at-list-item class="appointment-person"
                    title="就诊人"
                    :extraText="user.userName"

      />
      <at-list-item class="appointment-id-card"
                    title="就诊人证件"
                    :extraText="user.userIdCard"
      />
      <at-list-item class="tips"
                    :title="tips"
      />
    </at-list>
  </view>
  <view class="create-order-footer">
    <view class="total-amount">
      合计：￥ {{shifts.shiftsAmount}}
    </view>
    <at-button class="create-order"
               type="primary"
               @click="createOrder"
    >
      确认下单
    </at-button>
  </view>
</template>

<script setup>
import { AtList, AtListItem, AtButton, AtAvatar } from "taro-ui-vue3";
import {onMounted, reactive, ref} from "vue";
import Taro from "@tarojs/taro";
import { useStore } from "vuex";
import {fetchApi} from "../../http/fetchApi";

const store = useStore()
const tips = ref('温馨提示：\n  确认下单后请在15分钟后完成支付，否则系统将自动取消号源')

const doctor = reactive(store.state.order.doctor)
const hospital = reactive(store.state.selectedHospital)
const department = reactive(store.state.order.department)
const shifts = reactive(store.state.order.appointment)
const user = reactive(store.state.user)

onMounted(() => {
  console.log(store.state)
  Taro.setNavigationBarTitle({
    title: '确认下单'
  })
})

const createOrder = async () => {
  let params = {
    params: {
      userId: user.userId,
      shiftsRecordId: shifts.shiftsRecordId,
      orderAmount: shifts.shiftsAmount
    }
  }
  const result = await fetchApi('createOrder', params)
  debugger
  if (result.result.code === "0000") {
    let orderId = result.data
    Taro.navigateTo({
      url: `/pages/payOrder/payOrder?orderId=${orderId}`
    })
  } else {
    Taro.showModal({
      title: '提示',
      complete: '创建订单失败',
      showCancel: false
    })
  }


}


</script>
