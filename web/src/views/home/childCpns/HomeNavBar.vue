<template>
  <nav-bar class="home-nav-bar">
    <div slot="left">
      <i></i>
    </div>
    <div slot="center" class="search-bar">
      <i></i>
      <input class="search" type="search" />
    </div>
    <div slot="right" class="r-i">
      <i></i>
    </div>
  </nav-bar>
</template>
 
<script>
import NavBar from 'components/common/navBar/NavBar'
export default {
name: "HomeNavBar",
components: {
  NavBar
}
}
</script>
 
<style scoped>
i {
  font-family: 'icomoon';
  color: #fff;
  font-size: 22px;
  vertical-align: bottom;
}
.r-i i {
  font-size: 20px;
}
.home-nav-bar {
  background-color: #717ff9;
  color: #fff;
  font-size: 16px;
}
.search-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 24px;
  border-radius: 12px;
  background-color: #fff;
  line-height: 24px;
}
.search-bar i {
  font-size: 16px;
  color: #ccc;
}
.search {
  float: right;
  width: 170px;
  height: 24px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>