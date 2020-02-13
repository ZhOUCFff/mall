<template>
  <goods-list>
    <goods-list-item v-for="item in goods['new'].list" :goods-list-item="item" />
  </goods-list>
</template>
 
<script>
import { HMCVMixin } from 'common/mixin'

export default {
name: "New",
mixins: [HMCVMixin]
}
</script>
 
<style scoped>
</style>