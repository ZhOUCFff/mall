<template>
  <goods-list>
    <goods-list-item v-for="item in ctgrGoodsList" :goods-list-item="item" />
  </goods-list>
</template>
 
<script>
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'

export default {
name: "CategoryGoodsList",
props: {
  ctgrGoodsList: {
    type: Array,
    default() {
      []
    }
  }
},
components: {
  GoodsList,
  GoodsListItem
}
}
</script>
 
<style scoped>
</style>