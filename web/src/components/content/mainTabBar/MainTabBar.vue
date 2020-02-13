<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <div slot="tbi-icon1"></div>
      <div slot="tbi-icon2"></div>
      <div slot="tbi-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <div slot="tbi-icon1"></div>
      <div slot="tbi-icon2"></div>
      <div slot="tbi-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <div slot="tbi-icon1"></div>
      <div slot="tbi-icon2"></div>
      <div slot="tbi-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <div slot="tbi-icon1"></div>
      <div slot="tbi-icon2"></div>
      <div slot="tbi-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>
 
<script>
import TabBar from 'components/common/tabBar/TabBar'
import TabBarItem from 'components/common/tabBar/TabBarItem'

export default {
name: "MainTabBar",
components: {
  TabBarItem,
  TabBar
}
}
</script>
 
<style scoped>
</style>