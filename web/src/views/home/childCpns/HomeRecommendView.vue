<template>
  <div class="home-recommend-view">
    <div v-for="item in recommend">
      <img :src="item.image" />
      <div class="recommend-title">{{item.title}}</div>
    </div>
  </div>
</template>
 
<script>
export default {
name: "HomeRecommendView",
props: {
  recommend: {
    type: Array,
    default() {
      return []
    }
  }
}
}
</script>
 
<style scoped>
.home-recommend-view {
  display: flex;
  background-color: #fff;
  margin: 10px 0;
}
.home-recommend-view > div {
  flex: 1;
  text-align: center;
}
.home-recommend-view img {
  width: 60px;
  height: 60px;
  vertical-align: middle;
}
</style>