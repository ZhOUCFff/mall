<template>
  <div id="profile">
    <profile-nav-bar />
    <login />
    <profile-wallet />
    <profile-list :order-list="orderList" :service-list="serviceList" />
  </div>
</template>
 
<script>
import profileNavBar from './childCpns/ProfileNavBar'
import Login from './childCpns/Login'
import ProfileWallet from './childCpns/ProfileWallet'
import ProfileList from './childCpns/ProfileList'

export default {
name: "Profile",
data() {
  return {
    orderList: [
      {icon: '', info: '我的消息'},
      {icon: '', info: '积分商城'},
      {icon: '', info: '会员卡'},
    ],
    serviceList: [
      {icon: '', info: '我的购物车'},
      {icon: '', info: '下载App'}
    ]
  }
},
components: {
  profileNavBar,
  Login,
  ProfileWallet,
  ProfileList
}
}
</script>
 
<style scoped>
</style>