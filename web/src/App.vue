<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'

export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
/* 引入字体图标 */
@import "~assets/icomoon/style.css";
/* 引入基本样式 */
@import "~assets/css/base.css";

.swiper-pagination .swiper-pagination-bullet {
  opacity: 1;
  background: #fff;
}

.swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background: #717ff9;
}
</style>
