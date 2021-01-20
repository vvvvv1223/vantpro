<template>
  <div class="popup">
    <van-search v-model="iptValue" show-action :placeholder="iptPlaceholder" @search="onSearch" @cancel="onCancel"/>
    <history-hot :historyKeywordList="historyKeywordList" :hotKeywordList="hotKeywordList"></history-hot>
  </div>
</template>

<script>
import HistoryHot from '../components/HistoryHot.vue'
import { GetSearchWindowData } from '@/request/api'
export default {
  data() {
    return {
      iptValue: '',
      iptPlaceholder: '',
      //1为历史记录与热门搜索 2为列表区块 3位产品区块
      blockShow: 1,
      historyKeywordList: '', //历史记录
      hotKeywordList: '', //热门搜索
    }
  },
  components: {
    HistoryHot,
  },
  created() {
    GetSearchWindowData().then(res => {
      console.log(res);
      if(res.errno == 0) {
        let { defaultKeyword, historyKeywordList, hotKeywordList } = res.data;
        this.iptPlaceholder = defaultKeyword.keyword;
        this.historyKeywordList = historyKeywordList;
        this.hotKeywordList = hotKeywordList;
      }
    })
  },
  methods: {

    onSearch() {

    },
    onCancel() {
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="less" scoped>
.popup {
  width: 100%;
  height: 100%;
  position: absolute;
  // right: 0; 这里需要删掉 因为transition写了
  top: 0;
  background: #efefef;
}
</style>