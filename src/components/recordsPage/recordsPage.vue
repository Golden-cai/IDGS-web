<template>
  <scroll-view>
    <template v-for="(item, idx) in items" :key="idx" >
      <!-- {{ item }} -->
      <record-card />
  </template>
  </scroll-view>



</template>

<script>
import recordCard from '@/components/recordCard/recordCard.vue'
import { test1} from './recordspage.config.ts'


export default {
  data() {
    return {
      test1:test1,
      items: [
        {
          msg: "1",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
        {
          msg: "2",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
        {
          msg: "3",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
        {
          msg: "4",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
        {
          msg: "5",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
        {
          msg: "6",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
        {
          msg: "7",
          url: "'http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG"
        },
      ]
    }
  },
  components: {
    recordCard
  },
  methods:{
    click(index)  {
      console.log(this.test1)
    }
  }
}

</script>

<style>
.scroll-view {
  background-color: #111
}
</style>