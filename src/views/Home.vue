<template>
  <div class="home">
    <van-search v-model="searchValue" disabled shape="round" background="#fff" placeholder="请输入搜索关键词" @click="goToPopup"/>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="blue" >
      <van-swipe-item v-for="(item, index) in banner" :key="index">
        <img :src="item.image_url" alt="" width="100%">
      </van-swipe-item>
    </van-swipe>

    <transition name="slide">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import axios from 'axios';
import { GetHomeData } from '@/request/api';

export default {
  name: 'Home',
  data() {
    return {
      searchValue: '',
      banner: [], //轮播图数据
    }
  },
  components: {

  },
  created() {
    //获取首页数据
    GetHomeData().then(res => {
      let { banner } = res.data;
      this.banner = banner;
      // console.log(this.banner);
    })
      .catch(err => {
        console.log(err);
      })
  },
  methods: {
    goToPopup() {
      this.$router.push('/home/popup');
    }
  },
}
</script>

<style lang="less" scoped>
// 可以直接使用vant里的style内置样式 效果相同
.slide-enter {
  right: -100%;
}
.slide-enter-active .slide-leave-active{
  transition: right 1s linear;
}
.slide-enter-to .slide-leave{
  right: 0;
}
</style>