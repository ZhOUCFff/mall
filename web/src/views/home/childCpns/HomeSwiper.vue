<template>
  <swiper>
    <swiper-item v-for="(item,index) in swiperImg" :key="index">
      <img :src="item.image" @load="hsImgLoad" />
    </swiper-item>
  </swiper>
</template>
 
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
name: "HomeSwiper",
data() {
  return {
    isLoad: true
  }
},
props: {
  swiperImg: {
    type: Array,
    default() {
      return []
    }
  }
},
components: {
  Swiper,
  SwiperItem
},
methods: {
  hsImgLoad() {
    if(this.isLoad){
      this.$bus.$emit('hsImgLoad')
    }
    this.isLoad = false
  }
}
}
</script>
 
<style scoped>
img {
  vertical-align: middle;
}
</style>