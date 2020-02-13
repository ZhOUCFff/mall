<template>
  <div class="dt-botn-bar">
    <div class="option">
      <div>
        <i></i>
        <div class="customer-service">客服</div>
      </div>
      <div>
        <i></i>
        <div class="shop">店铺</div>
      </div>
      <div>
        <i></i>
        <div class="collect">收藏</div>
      </div>
    </div>
    <div class="add-to-cart" @click="atcClick">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>
 
<script>
export default {
name: "DetailBottonBar",
methods: {
  atcClick() {
    this.$emit('atcClick')
  }
}
}
</script>
 
<style scoped>
.dt-botn-bar {
  position: relative;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  height: 49px;
  box-shadow: 0 -1px 5px rgba(113, 127, 249, 0.1);
  text-align: center;
}

.dt-botn-bar i {
  font-size: 22px;
  font-family: 'icomoon';
}
.option {
  float: left;
  display: flex;
  width: 45%;
  height: 100%;
  padding: 0 10px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
}
.customer-service,
.shop,
.collect {
  font-size: 10px;
}
.add-to-cart {
  position: absolute;
  right: 25%;
  bottom: 0;
  width: 30%;
  height: 100%;
  background-color: #ffde0d;
  color: #333;
  line-height: 49px;
}
.buy {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 25%;
  height: 100%;
  background-color: #717ff9;
  color: #fff;
  line-height: 49px;
}
</style>