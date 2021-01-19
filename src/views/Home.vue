<template>
  <div class="home">
    <van-search v-model="searchValue" disabled shape="round" background="#fff" placeholder="请输入搜索关键词" />
    <p style="width:100px;background:pink">我的</p>
  </div>
</template>

<script>
import axios from 'axios';
import { GetHomeData } from '@/request/api';

export default {
  name: 'Home',
  data() {
    return {
      searchValue: ''
    }
  },
  components: {

  },
  created () {
    //获取首页数据
    GetHomeData().then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  },
}
</script>
