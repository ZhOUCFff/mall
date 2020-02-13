<template>
  <div class="cart-list-item">
    <cart-check-button @click.native="checkBtnClick" :is-checked="cartListItem.isChecked" />
    <div class="img">
      <img :src="cartListItem.img" alt />
    </div>
    <div class="info">
      <h4>{{cartListItem.title}}</h4>
      <p>{{cartListItem.desc}}</p>
      <div class="total">
        <span class="price">{{cartListItem.price | getPrice}}</span>
        <span class="count">
          <button @click="subClick" :disabled="isDisabled"></button>
          {{cartListItem.count}}
          <button @click="addClick"></button>
        </span>
      </div>
    </div>
  </div>
</template>
 
<script>
import { ADD_COUNT } from '@/store/mutation-types'

import { mapGetters,mapMutations } from 'vuex'

import CartCheckButton from './CartCheckButton'

export default {
name: "CartListItem",
data() {
  return {
  }
},
components: {
  CartCheckButton
},
filters: {
  getPrice(value) {
    return '￥' + value
  }
},
props: {
  cartListItem: {
    type: Object,
    default() {
      return {}
    }
  },
  index: {
    type: Number,
    default: 0
  }
},
computed: {
  ...mapGetters(['cartList']),
  isDisabled() {
    return this.cartList[this.index].count <= 1?true:false
  }
},
methods: {
  ...mapMutations(['subCount','isChecked']),
  addClick() {
    this.$store.commit(ADD_COUNT,this.index)
  },
  subClick() {
    this.subCount(this.index)
  },
  checkBtnClick() {
    this.isChecked(this.index)
    // this.$store.commit('isChecked',this.index)
  }
}
}
</script>
 
<style scoped>
.cart-list-item {
  display: flex;
  justify-content: space-between;
  height: 150px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.4);
  background-color: #fff;
}

.img {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22%;
  text-align: center;
}
.img img {
  width: 100%;
  height: 80%;
  border-radius: 5px;
  vertical-align: middle;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 68%;
  padding: 0 10px;
}
.info h4 {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 700;
  color: #333;
  font-size: 14px;
  line-height: 40px;
}

.info p {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 12px;
  line-height: 20px;
}
.price {
  color: #717ff9;
  font-weight: 700;
}
.total {
  display: flex;
  justify-content: space-between;
  line-height: 30px;
}
.count button {
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 50%;
  background-color: #fff;
  outline: none;
  text-align: center;
  font-family: 'icomoon';
  color: #717ff9;
}
</style>