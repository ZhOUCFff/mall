<template>
  <div class="dt-img">
    <div class="detail-desc" v-if="dtImg.desc">
      <div class="start"></div>
      <div class="desc">{{dtImg.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="key">{{dtImg.key}}</div>
    <img v-for="item in dtImg.list" :src="item" @load="dtImgLoad" />
  </div>
</template>
 
<script>
export default {
name: "DetailImgInfo",
props: {
  dtImg: {
    type: Object,
    default() {
      return {}
    }
  }
},
methods: {
  dtImgLoad() {
    this.$emit('dtImgLoad')
  }
}
}
</script>
 
<style scoped>
.dt-img {
  background-color: #fff;
}
.dt-img img {
  width: 100%;
  padding-bottom: 5px;
  vertical-align: middle;
}
.detail-desc {
  position: relative;
  height: 90px;
  padding: 0 10px;
}
.start,
.end {
  position: absolute;
  width: 80px;
  height: 1px;
  background-color: #717ff9;
}
.start {
  left: 10px;
  top: 15px;
}
.start::before {
  position: absolute;
  left: 0px;
  top: 0px;
  content: '';
  width: 5px;
  height: 5px;
  background-color: #717ff9;
}
.end {
  right: 10px;
  bottom: 15px;
}
.end::after {
  position: absolute;
  right: 0px;
  top: -5px;
  content: '';
  width: 5px;
  height: 5px;
  background-color: #717ff9;
}
.desc {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  padding: 0 10px;
  font-size: 14px;

  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.key {
  padding: 2px 10px;
}
</style>