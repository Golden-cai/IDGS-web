<template >
  <view class="shifts-box">
    <at-list class="shifts-line-list">
      <at-list-item class="shifts-line-item"
                    :title="shiftsTime"
                    :note="amount"
                    :extraText="extraText"
                    arrow="right"
                    :disabled="isDisable"
                    @click.stop="click"
      />
    </at-list>
  </view>
</template>

<script setup>
import { AtList, AtListItem } from 'taro-ui-vue3'
import { computed } from '@vue/reactivity';
import { useStore } from "vuex";

const store = useStore()

const isDisable = computed(() => {
  return props.shifts.shiftsRemainNumber === 0
})

const shiftsTime = computed(() => {
  return props.shifts.shiftsTime.substring(0, 10) + ' 8:00 - 17:00'
})

const extraText = computed(() => {
  return '余' + props.shifts.shiftsRemainNumber.toString() + ' / 总' + props.shifts.shiftsTotalNumber.toString()
})

const amount = computed(() => {
  return '挂号金额: ' + props.shifts.shiftsAmount + '元'
})

  const props = defineProps({
    shifts: Object
  })

  const emit = defineEmits(['submit'])

  const click = () => {
    if (props.shifts.shiftsRemainNumber > 0) {
      store.commit('updateAppointment', props.shifts)
      emit('submit')
    }
  }

</script>
