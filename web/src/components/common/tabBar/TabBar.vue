<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
name: "TabBar",
props: {

}
}
</script>
 
<style scoped>
#tab-bar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  height: 49px;
  background-color: #fff;
  box-shadow: 0 -1px 8px rgba(200, 200, 200, 0.5);
  text-align: center;
}
</style>