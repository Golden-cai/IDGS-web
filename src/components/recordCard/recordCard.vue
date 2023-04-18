<template>

    <at-card
    node="tips"
    extra="extra"
    title="标题"
    @click="change"
    >
        <at-steps
        :items="items"
        :current="currentStep"
        @change="change"
        />
    </at-card>
</template>

<script>
import { AtCard, AtSteps } from 'taro-ui-vue3';
import { stepList } from './recordCard.config'

export default {
  data() {
    return {
      items: [
  {
    title: "预约科室",
    desc: "通过手动、智能导诊等方式选择就诊的方式",
    status: true,
  },
  {
    title: "付款",
    desc: "",
    status: true,
  },
  {
    title: "等待就诊",
    desc: "通过手动、智能导诊等方式选择就诊的",
    status: true,
  },
  {
    title: "就诊",
    desc: "通过手动、智能导诊等方式选择就诊的",
    status: true,
  },
  {
    title: "完成",
    desc: "通过手动、智能导诊等方式选择就诊的",
    status: true,
  }
],
      currentStep: 1,
    }
  },
  props:{

  },
  components: {
    AtCard,
    AtSteps
  },
  methods: {
    change() {

    }
  }


}

</script>