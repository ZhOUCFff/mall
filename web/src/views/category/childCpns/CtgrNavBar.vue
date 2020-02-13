<template>
  <nav-bar class="ctgr-nav-bar">
    <div slot="center">商品分类</div>
  </nav-bar>
</template>
 
<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
name: "CtgrNavBar",
components: {
  NavBar
}
}
</script>
 
<style scoped>
.ctgr-nav-bar {
  background-color: #717ff9;
  color: #fff;
  font-size: 16px;
}
</style>