<template>
  <div class="profile-list">
    <div class="order">
      <div class="order-item" v-for="item in orderList">
        <i>{{item.icon}}</i>
        <span>{{item.info}}</span>
      </div>
    </div>
    <div class="service">
      <div class="service-item" v-for="item in serviceList">
        <i>{{item.icon}}</i>
        <span>{{item.info}}</span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
name: "ProfileList",
props: {
  orderList: {
    type: Array,
    default() {
      return {}
    }
  },
  serviceList: {
    type: Array,
    default() {
      return {}
    }
  }
}
}
</script>
 
<style scoped>
.profile-list {
  font-family: 'icomoon';
}
.profile-list i {
  color: #717ff9;
  font-size: 22px;
  vertical-align: sub;
  margin: 0 10px;
}
.order,
.service {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  margin: 10px 0;
}
.order-item,
.service-item {
  height: 50px;
  line-height: 50px;
}
</style>