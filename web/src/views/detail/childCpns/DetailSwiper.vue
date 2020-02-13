<template>
  <swiper class="dt-swiper">
    <swiper-item class="dt-swiper-item" v-for="(item,index) in dtsImg" :key="index">
      <img :src="item" @load="dtSwiperImgLoad" />
    </swiper-item>
  </swiper>
</template>
 
<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
name: "DetailSwiper",
data() {
  return {
    isLoad: true
  }
},
props: {
  dtsImg: {
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
  dtSwiperImgLoad() {
    if(this.isLoad) {
      this.$emit('dtSwiperImgLoad')
    }
    this.isLoad = false
  }
},
}
</script>
 
<style scoped>
.dt-swiper {
  height: 300px;
  overflow: hidden;
}
</style>