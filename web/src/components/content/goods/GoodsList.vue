<template>
  <div class="goods-list">
    <slot></slot>
  </div>
</template>
 
<script>
export default {
name: "GoodsList"
}
</script>
 
<style scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 2% 5px 2%;
}
</style>