<template>
  <div id="toast" v-show="isShow">{{message}}</div>
</template>
 
<script>
export default {
name: "Toast",
data() {
  return {
    message: '',
    isShow: false
  }
},
methods: {
  showToast(message,delay=1500) {
    this.message = message
    this.isShow = true
    setTimeout(() => {
      this.isShow = false
    }, delay)
  }
}
}
</script>
 
<style scoped>
#toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 8px 15px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  white-space: nowrap;
}
</style>