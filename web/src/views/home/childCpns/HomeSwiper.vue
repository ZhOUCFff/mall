<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item,index) in swiperImg" :key="index">
      <img class="swiper-img" :src="item.image" @load="hsImgLoad" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
 
<script>
export default {
  name: "HomeSwiper",
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
    swiperImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    hsImgLoad() {
      if (this.isLoad) {
        this.$bus.$emit('hsImgLoad')
      }
      this.isLoad = false
    }
  },
  activated() {
    this.$refs.mySwiper && this.$refs.mySwiper.swiper.autoplay.start()
  },
  deactivated() {
    this.$refs.mySwiper && this.$refs.mySwiper.swiper.autoplay.stop()
  }
}
</script>
 
<style scoped>
.swiper-img {
  vertical-align: middle;
  width: 100%;
}
</style>