<template>
  <view class="hospital-info-detail">
    <image class="hospital-info-img" src="*" />
    <at-input class="hospital-attribute"
              v-for="(value, key) in hospitalInfo" :key="key"
              :name="key"
              type="text"
              :title="key"
              :value="value"
              :disabled="true"
              :editable="false"
              :full="true"
              :border="false"
    />
    <at-button class="select-hospital"
               type="secondary"
               circle="true"
               @click="submit"
    >
      选择该医院
    </at-button>
  </view>
</template>

<script>
import { AtInput, AtButton } from 'taro-ui-vue3'

export default {
  name:'HospitalInfoDetail',
  data() {
    return {
    }
  },
  components:{
    AtInput,
    AtButton,
  },
  props:{
    hospitalInfo: Object,
  },
  emits:{
    selected: null
  },
  created() {
  },
  methods:{
    submit() {
      console.log(this.$store)
      this.$store.commit('selectHospital', this.hospitalInfo)
      this.$emit('selected')
    }
  }
}
</script>

<style>
.hospital-attribute {
  font-size: small;
  color: black;
}
</style>
