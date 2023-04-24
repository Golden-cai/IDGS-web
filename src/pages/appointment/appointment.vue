<template>
    选择医生，并预约
  {{departmentId}}
</template>

<script setup>
import Taro from "@tarojs/taro";
import {onMounted, ref} from "vue";

const departmentId = ref('')

onMounted(()=> {
  departmentId.value=Taro.getCurrentInstance().router.params
})

</script>
