<template>
  <div class="cart-bottom-bar">
    <div class="checkAll">
      <cart-check-button
        class="check-all-btn"
        @click.native="checkAllClick"
        :is-checked="isCheckAll"
      />
      <span>全选</span>
    </div>
    <div class="total">总计：{{totalPrice | showPrice}}</div>
    <div class="count" @click="countClick">去结算({{calculate}})</div>
  </div>
</template>
 
<script>
import CartCheckButton from './CartCheckButton'

import { mapGetters } from 'vuex'

export default {
name: "CartBottomBar",
filters: {
  showPrice(value) {
    return '￥'+value
  },
},
components: {
  CartCheckButton
},
computed: {
  ...mapGetters(['cartLength','cartList']),
  totalPrice() {
    return this.cartList.filter(item => {
      return item.isChecked == true
    }).map(item => {
      return item.price*item.count
    }).reduce((preValue,item) => preValue + item, 0).toFixed(2)
  },
  calculate() {
    return this.cartList.filter(item => item.isChecked == true).length
  },
  isCheckAll() {
    if(this.cartList.length === 0) {
      return false
    }else {
      return this.cartList.find(item => item.isChecked == false)?false:true
    }
  }
},
methods: {
  checkAllClick() {
    if(this.isCheckAll) {
      this.cartList.forEach(value => {
        value.isChecked = false
      })
    }else {
      this.cartList.forEach(value => {
        value.isChecked = true
      })
    }
  },
  countClick() {
    this.cartList == 0 && this.$toast.showToast('请添加商品')
    this.calculate == 0 && this.$toast.showToast('请选择购买的商品')
  }
}
}
</script>
 
<style scoped>
.cart-bottom-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 49px;
  z-index: 9;
  height: 44px;
  background-color: #eeeeee;
  line-height: 44px;
  text-align: center;
}
.checkAll {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.checkAll {
  width: 20%;
  padding: 0 5px;
}
.check-all-btn {
  width: 18px;
  height: 18px;
}
.total {
  width: 50%;
}
.count {
  width: 30%;
  height: 100%;
  background-color: #717ff9;
  color: #fff;
}
</style>