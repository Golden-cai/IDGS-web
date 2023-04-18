<template>
  <view class="user-img">
    <at-avatar class="img"
    circle
    size="large"
    image="img"
    />
    <view class="username">
      {{ userName }}
    </view>

    <view>
      <at-list>
        <at-list-item
        title="消息中心"
        extraText="详细通知"
        arrow="right"
        :iconInfo="{size:25,color:'#78a4fa',value:'home',}"
        />
        <at-list-item
        title="修改个人信息"
        />
        <at-list-item
        title="设置"
        />
        
      </at-list>
    </view>

  </view>
</template>

<script>
import { AtAvatar, AtList, AtListItem} from 'taro-ui-vue3';


export default {
  data() {
    return {
      img:"https://jdc.jd.com/img/200",
      userName: "刘遇毅"
    }
  },
  components: {
    AtAvatar,
    AtList,
    AtListItem
  }
}
</script>

<style>
/* .user-img {
  display: inline-flex;
  background-color: green;
}
.username {
  display: inline-block;
  text-align: center;
  line-height: 50px;
  background-color: pink;

} */
</style>