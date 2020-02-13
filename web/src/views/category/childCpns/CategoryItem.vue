<template>
  <div class="ctgr-item">
    <div class="item">
      <div class="item-info" v-for="item in ctgrItem">
        <img :src="item.image" @load="ctgrItemImgLoad" />
        <div>{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
name: "CategoryItem",
data() {
  return {
    currentIndex: 0
  }
},
props: {
  ctgrItem: {
    type: Array,
    default() {
      return []
    }
  }
},
methods: {
  ctgrItemImgLoad() {
    this.$emit('ctgrItemImgLoad')
  }
}
}
</script>
 
<style scoped>
.ctgr-item {
  width: 100%;
  /* padding-bottom: 100px; */
}
.item {
  padding-left: 2%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: #fff;
  padding-bottom: 32%;
  margin-bottom: 5px;
}
.item-info {
  width: 30%;
  text-align: center;
  padding: 10px 0;
}
.item-info:nth-child(3n-1) {
  margin: 0 3%;
}
.item-info img {
  width: 95%;
  vertical-align: middle;
}
</style>