<template>
  <div class="dt-gi" v-if="services.length">
    <div class="title">{{dtGoosInfo.title}}</div>
    <div class="price-info">
      <span class="new-price">{{dtGoosInfo.price}}</span>
      <span class="old-price">{{dtGoosInfo.oldPrice}}</span>
      <span class="disc" v-if="dtGoosInfo.discountDesc">{{dtGoosInfo.discountDesc}}</span>
    </div>
    <div class="columns">
      <span v-for="item in dtColumns">{{item}}</span>
      <span>{{services[0].name}}</span>
    </div>
    <div class="services">
      <span v-for="index in length" v-if="services[index+1]">
        <img :src="services[index+1].icon" />
        {{services[index+1].name}}
      </span>
    </div>
  </div>
</template>
 
<script>
export default {
name: "DetailGoodsInfo",
props: {
  dtGoosInfo: {
    type: Object,
    default() {
      return {}
    }
  },
  dtColumns: {
    type:Array,
    default() {
      return []
    }
  },
  services: {
    type: Array,
    default() {
      return []
    }
  }
},
computed: {
  length() {
    return this.services.length
  }
}
}
</script>
 
<style scoped>
.dt-gi {
  padding: 12px 10px;
  background-color: #fff;
}
.title {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 16px;
  line-height: 24px;
}
.price-info {
  padding: 15px 0;
}
.new-price {
  font-size: 16px;
  font-weight: 600;
  color: #717ff9;
}
.old-price {
  margin: 0 3px;
  text-decoration: line-through;
}
.disc {
  position: relative;
  bottom: 8px;
  left: -1px;
  padding: 2px 3px;
  border-radius: 5px;
  background-color: #717ff9;
  color: #fff;
  font-size: 12px;
}
.columns {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 12px;
}
.services {
  display: flex;
  justify-content: space-between;
  font-size: 8px;
}
.services img {
  width: 12px;
  vertical-align: middle;
}
</style>