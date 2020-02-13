<template>
  <div class="dt-shop-info">
    <div class="line"></div>
    <div class="shop-name">
      <img :src="dtShopInfo.shopLogo" />
      <span>{{dtShopInfo.name}}</span>
    </div>
    <div class="shop-info">
      <div class="cSells">
        <div>{{dtShopInfo.cSells | cSells}}</div>
        <div>总销量</div>
      </div>
      <div class="cGoods">
        <div>{{dtShopInfo.cGoods}}</div>
        <div>全部宝贝</div>
      </div>
      <table class="score">
        <tr v-for="item in dtShopInfo.score">
          <td>{{item.name}}</td>
          <td class="mark" :class="{bettermark:item.isBetter}">{{item.score}}</td>
          <td class="not-better" :class="{isbetter:item.isBetter}">{{item.isBetter?'高':'低'}}</td>
        </tr>
      </table>
    </div>
    <div class="enter-shop">进店逛逛</div>
  </div>
</template>
 
<script>
export default {
name: "DetailShopInfo",
props: {
  dtShopInfo: {
    type: Object,
    default() {
      return {}
    }
  }
},
filters: {
  cSells(value) {
    return (value/10000).toFixed(1)+'w'
  }
}
}
</script>
 
<style scoped>
.dt-shop-info {
  position: relative;
  padding: 0 10px 10px 10px;
  background-color: #fff;
  margin: 10px 0;
}
.shop-name {
  padding: 10px 0;
}
.shop-info {
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
  align-items: center;
  text-align: center;
}
.line {
  position: absolute;
  top: 80px;
  left: 165px;
  width: 1px;
  height: 28px;
  background-color: #e9e9e9;
  border-radius: 1px;
}
.shop-name img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(113, 127, 249, 0.6);
  vertical-align: middle;
}
.cSells div:first-child,
.cGoods div:first-child {
  font-size: 16px;
  color: #333;
}
.score {
  font-size: 12px;
}
.score td {
  padding: 1px 3px;
  border-bottom: 2px solid #fff;
  border-radius: 5px;
}
.not-better {
  color: #fff;
  background-color: green;
}
.mark {
  color: green;
}
.bettermark {
  color: red;
}
.isbetter {
  background-color: red;
}
.enter-shop {
  width: 100px;
  margin: 0 auto;
  padding: 2px 0;
  background-color: rgb(113, 127, 249, 0.12);
  border-radius: 5px;
  text-align: center;
}
</style>