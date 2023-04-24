<template>
  <view class="hospital-info-detail">
    <image class="hospital-info-img" :src="src" />
    <at-input class="hospital-attribute"
              v-for="(value, key) in hospitalInfo" :key="key"
              :name="key"
              type="text"
              :title="key"
              :value="value"
              :disabled="true"
              :editable="false"
              :full="false"
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
      src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2Fc40a4221-7a31-44cb-803d-04b327da7af1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1684948494&t=5372a0844299087b08fe40226385cf1d'
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
      this.$store.commit('selectHospital', this.hospitalInfo)
      this.$emit('selected')
    }
  }
}
</script>

<style>
.hospital-info-img {
  border: black;
  background-color: pink;
}
/* .hospital-attribute {
  font-size: small;
  background-color: black;
} */
</style>
