<template>
  <nav-bar class="cart-nav">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
</template>
 
<script>
import NavBar from 'components/common/navBar/NavBar'

import { mapGetters } from 'vuex'

export default {
name: "CartNavBar",
components: {
  NavBar
},
computed: {
  ...mapGetters(['cartLength'])
}
}
</script>
 
<style scoped>
.cart-nav {
  background-color: #717ff9;
  color: #fff;
  font-size: 16px;
}
</style>