<template>
  <goods-list>
    <goods-list-item v-for="item in goods['pop'].list" :goods-list-item="item" />
  </goods-list>
</template>
 
<script>
import { HMCVMixin } from 'common/mixin'

export default {
name: "Pop",
mixins: [HMCVMixin]
}
</script>
 
<style scoped>
</style>