<template>
  <nav-bar class="dt-nav-bar">
    <div class="left" slot="left" @click="backClick"></div>
    <div class="center" slot="center">
      <div
        class="dt-titles"
        :class="{active:currentIndex==index}"
        v-for="(item,index) in dtTitles"
        @click="dttitlesClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>
 
<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
name: "DetailNavBar",
data() {
  return {
    currentIndex: 0
  }
},
props: {
  dtTitles: {
    type: Array,
    default() {
      return []
    }
  }
},
components: {
  NavBar
},
methods: {
  backClick() {
    this.$router.back()
  },
  dttitlesClick(index) {
    this.$emit('dttitlesClick',index)
  }
},
}
</script>
 
<style scoped>
.dt-nav-bar {
  background-color: #fff;
  box-shadow: 0 1px 5px rgba(200, 200, 200, 0.3);
  color: #666;
}
.left {
  font-family: 'icomoon';
  font-size: 28px;
  color: #717ff9;
}
.center {
  display: flex;
  font-size: 16px;
}
.dt-titles {
  flex: 1;
  height: 44px;
}
.active {
  color: #717ff9;
  border-bottom: 3px solid #717ff9;
}
</style>