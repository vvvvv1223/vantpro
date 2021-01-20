<template>
  <div>
    <div class="history">
      <div class="top">
        <p>历史记录</p>
        <van-icon name="delete" />
      </div>
      <div class="down">
        <van-tag color="#969799" plain type="primary" v-for="(item,i) in historyKeywordList" :key="i">{{item}}</van-tag>
      </div>
    </div>

    <div class="hotSearch">
      <div class="top">
        <p>热门搜索</p>
        <van-icon name="delete" />
      </div>
      <div class="down">
        <van-tag :type="item.is_hot == 1 ? 'danger' : 'default'" plain v-for="(item,i) in hotKeywordList" :key="i">{{item.keyword}}</van-tag>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['historyKeywordList','hotKeywordList'],
  created () {

  },
}
</script>

<style lang="less" scoped>
.history {
  padding: 0 2%;
  background: #fff;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.2rem;
    p {
      // font-weight: normal;
      font-size: .18rem;
    }
  }
  .down {
    .van-tag {
      font-size: 0.14rem;
      margin: 3px 10px 5px 0;
    }
  }
}
.hotSearch {
  padding: 0 2%;
  background: #fff;
  padding-top: .2rem;
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.2rem;
    p {
      // font-weight: normal;
      font-size: .18rem;
    }
  }
  .down {
    .van-tag {
      font-size: 0.14rem;
      margin: 3px 10px 5px 0;
    }
  }
}
.activeClass {
  color: red;
}
</style>