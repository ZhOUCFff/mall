<template>
  <div class="tab-bar-item" @click="TabBarItemClick" :style="activeStyle">
    <div class="tbi-content">
      <slot v-if="isActive" name="tbi-icon2"></slot>
      <slot v-else name="tbi-icon1"></slot>
      <slot name="tbi-text"></slot>
    </div>
  </div>
</template>
 
<script>
export default {
name: "TabBarItem",
props: {
  path: {
    type:String,
    default: ''
  },
  activeColor: {
    type: String,
    default: '#717ff9'
  }
},
computed: {
  isActive() {
    return this.$route.path.indexOf(this.path) != -1
  },
  activeStyle() {
    return this.isActive?{color: this.activeColor}:{}
  }
},
methods: {
  TabBarItemClick() {
    this.$router.replace(this.path).catch(err => {
      err
    })
  }
},
}
</script>
 
<style scoped>
.tab-bar-item {
  position: relative;
  flex: 1;
  font-size: 12px;
}
.tbi-content div:nth-child(0),
.tbi-content div:nth-child(1) {
  font-family: 'icomoon';
  font-size: 28px;
}
.tbi-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>