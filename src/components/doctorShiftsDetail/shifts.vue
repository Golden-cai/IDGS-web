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

const isDisable = computed(() => {
  return props.remain === 0
})

const shiftsTime = computed(() => {
  return props.time.substring(0, 10) + ' 8:00 - 17:00'
})

const extraText = computed(() => {
  return '余' + props.remain.toString() + ' / 总' + props.total.toString()
})

const amount = computed(() => {
  return '挂号金额: ' + props.price + '元'
})

  const props = defineProps({
    time: String,
    price: Number,
    remain: Number,
    total: Number
  })

  const emit = defineEmits(['submit'])

  const click = () => {
    if (props.remain > 0) {
      emit('submit')
    }
  }

</script>
