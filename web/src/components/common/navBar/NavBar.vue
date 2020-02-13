<template>
  <div id="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
name: "NavBar"
}
</script>
 
<style scoped>
#nav-bar {
  position: relative;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  z-index: 1;
}
.center {
  flex: 1;
}
.left,
.right {
  width: 60px;
}
</style>