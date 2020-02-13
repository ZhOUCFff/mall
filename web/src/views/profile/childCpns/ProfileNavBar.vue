<template>
  <nav-bar class="pf-nav">
    <div slot="center">我的信息</div>
  </nav-bar>
</template>
 
<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
name: "profileNavBar",
components: {
  NavBar
}
}
</script>
 
<style scoped>
.pf-nav {
  background-color: #717ff9;
  color: #fff;
}
</style>