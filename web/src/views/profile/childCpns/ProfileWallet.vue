<template>
  <div class="wallet">
    <div>
      <div class="money">
        <i>0.00</i>
        <span>元</span>
      </div>
      <div>我的余额</div>
    </div>
    <div>
      <div class="favourable">
        <i>0</i>
        <span>个</span>
      </div>
      <div>我的优惠</div>
    </div>
    <div>
      <div class="integral">
        <i>0</i>
        <span>分</span>
      </div>
      <div>我的积分</div>
    </div>
  </div>
</template>
 
<script>
export default {
name: "ProfileWallet"
}
</script>
 
<style scoped>
.wallet {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  background-color: #fff;
  text-align: center;
}
.wallet i {
  font-size: 16px;
  font-weight: 700;
  color: #717ff9;
}
.money,
.favourable,
.integral {
  padding: 5px 0;
}
</style>