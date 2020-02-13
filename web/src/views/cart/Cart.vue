<template>
  <div id="cart">
    <cart-nav-bar />
    <scroll class="cart-scroll" ref="scroll" :click="true">
      <cart-list />
    </scroll>
    <cart-bottom-bar />
    <div class="empty" v-if="cartLength==0">购物车为空</div>
  </div>
</template>
 
<script>
import CartNavBar from './childCpns/CartNavBar'
import CartList from './childCpns/CartList'
import CartBottomBar from './childCpns/CartBottomBar'
import Scroll from 'components/common/scroll/Scroll'

import { mapGetters } from 'vuex'

export default {
name: "Cart",
components: {
  CartNavBar,
  CartList,
  CartBottomBar,
  Scroll
},
computed: {
  ...mapGetters(['cartLength'])
},
activated() {
  this.$refs.scroll.refresh()
},
deactivated() {
  
}
}
</script>
 
<style scoped>
#cart {
  height: 100vh;
  background-color: #fff;
}
.cart-scroll {
  height: calc(100% - 93px - 44px);
  overflow: hidden;
}
.empty {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  font-style: italic;
  color: #aaa;
}
</style>