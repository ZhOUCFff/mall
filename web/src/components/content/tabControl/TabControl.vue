<template>
  <div class="tab-control">
    <span
      v-for="(item,index) in tcTitles"
      :class="{active:currentIndex==index}"
      @click="tcClick(index)"
    >{{item}}</span>
  </div>
</template>
 
<script>
export default {
name: "TabControl",
data() {
  return {
    currentIndex: 0
  }
},
props: {
  tcTitles: {
    type: Array,
    defult() {
      return []
    }
  }
},
methods: {
  tcClick(index) {
    this.currentIndex = index
    this.$emit('tabControlClick',index)
  }
}
}
</script>
 
<style scoped>
.tab-control {
  display: flex;
  background-color: #fff;
  height: 40px;
  line-height: 40px;
}
.tab-control span {
  flex: 1;
  margin: 0 20px;
  text-align: center;
}
.active {
  color: #717ff9;
  border-bottom: 3px solid #717ff9;
}
</style>