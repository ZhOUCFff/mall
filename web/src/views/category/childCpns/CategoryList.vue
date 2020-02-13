<template>
  <div class="ctgr-list">
    <div
      class="list-item"
      v-for="(item,index) in ctgrList"
      :key="index"
      @click="clItemClick(index)"
      :class="{active:currentIndex==index}"
    >{{item.title}}</div>
  </div>
</template>
 
<script>
export default {
name: "CategoryList",
data() {
  return {
    currentIndex: 0
  }
},
props: {
  ctgrList: {
    type: Array,
    default() {
      return []
    }
  }
},
methods: {
  clItemClick(index) {
    this.currentIndex = index
    this.$emit('clItemClick',index)
  }
},
}
</script>
 
<style scoped>
.ctgr-list {
  float: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 25%;
  height: calc(100% - 93px);
}
.list-item {
  text-align: center;
}
.active {
  border-left: 3px solid #717ff9;
  color: #717ff9;
  background-color: #fff;
}
</style>