<template>
  <swiper class="dt-swiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in dtsImg" :key="index">
      <img class="swiper-img" :src="item" @load="dtSwiperImgLoad" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>

export default {
  name: "DetailSwiper",
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
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
  methods: {
    dtSwiperImgLoad() {
      if (this.isLoad) {
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
.swiper-img {
  vertical-align: middle;
  width: 100%;
}
</style> 