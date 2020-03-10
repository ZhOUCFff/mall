<template>
  <div class="feature-view">
    <img src="~assets/img/home/recommend_bg.jpg" @load="ftvImgLoad" />
  </div>
</template>
 
<script>
export default {
  name: "FeatureView",
  methods: {
    ftvImgLoad() {
      this.$bus.$emit('ftvImgLoad')
    }
  }
}
</script>
 
<style scoped>
.feature-view {
  margin-bottom: 10px;
}
.feature-view img {
  width: 100%;
  margin-left: 1px;
  vertical-align: middle;
}
</style>