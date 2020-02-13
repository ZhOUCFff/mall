<template>
  <div class="goods-list-item">
    <div class="item-img">
      <img v-lazy="goodsListImg" @load="gliImgLoad" @click="gliClick" />
    </div>
    <div class="gli-info">
      <p>{{goodsListItem.title}}</p>
      <div>
        <span class="price">{{goodsListItem.price | showPrice}}</span>
        <span class="cfav">
          <i>⭐</i>
          <strong>{{goodsListItem.cfav}}</strong>
        </span>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
name: "GoodsListItem",
props: {
  goodsListItem: {
    type: Object,
    default() {
      return {}
    }
  }
},
filters: {
  showPrice(value) {
    return '￥'+ value
  }
},
computed: {
  goodsListImg() {
    if(this.goodsListItem.show) {
      return this.goodsListItem.show.img
    }else if(this.goodsListItem.image){
      return this.goodsListItem.image
    }else {
      return this.goodsListItem.img
    }
  }
},
methods: {
  gliImgLoad() {
    if(this.$route.path == '/detail') {
      this.$emit('gliImgLoad')
    }else {
      this.$bus.$emit('gliImgLoad')
    }
  },
  gliClick() {
    this.goodsListItem.iid && this.$router.push({
      path: '/detail',
      query: {
        iid: this.goodsListItem.iid
      }
    })
  }
}
}
</script>
 
<style scoped>
.goods-list-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 46%;
  margin-top: 15px;
  background-color: #fff;
  border-radius: 8px;
}
.item-img {
  border-radius: 8px;
  overflow: hidden;
}
.item-img img {
  display: block;
  width: 100%;
}
.goods-list-item p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 12px;
}
.gli-info {
  margin: 2px 0;
  text-align: center;
}
.price {
  padding-right: 5px;
  color: #717ff9;
  font-size: 14px;
  font-weight: 550;
}
.cfav {
  font-size: 10px;
}
</style>