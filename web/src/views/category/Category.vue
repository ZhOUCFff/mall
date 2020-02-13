<template>
  <div id="category">
    <ctgr-nav-bar />
    <category-list :ctgr-list="ctgrListData" v-if="ctgrListData" @clItemClick="clItemClick" />
    <tab-control
      :class="{'ctgr-tab-control': isCopyTcShow}"
      :tc-titles="titles"
      @tabControlClick="tabControlClick"
      v-show="isCopyTcShow"
      ref="copyTabControl"
    />
    <scroll
      class="ctgr-scroll"
      ref="scroll"
      :pullUpLoad="true"
      :click="true"
      @scroll="scroll"
      @pullingUp="pullingUp"
    >
      <category-item :ctgrItem="ctgrItemTempData" @ctgrItemImgLoad="itemImgLoad" />
      <tab-control
        :tc-titles="titles"
        @tabControlClick="tabControlClick"
        v-if="isTcShow"
        ref="tabControl"
      />
      <category-goods-list :ctgrGoodsList="ctgrGoodsList[ctgrIndex][currentType]" v-if="isTcShow" />
    </scroll>
  </div>
</template>
 
<script>
//导入网络请求
import { getCategory,getSubcategory,getCtgrGoodsList } from 'network/category'

// 导入工具函数
import { debounce } from 'common/utils'

//导入子组件
import CtgrNavBar from './childCpns/CtgrNavBar'
import CategoryList from './childCpns/CategoryList'
import CategoryItem from './childCpns/CategoryItem'
import CategoryGoodsList from './childCpns/CategoryGoodsList'

//导入公共组件
import TabControl from 'components/content/tabControl/TabControl'
import Scroll from 'components/common/scroll/Scroll'

export default {
name: "Category",
data() {
  return {
    isTcShow: false,
    isCopyTcShow: false,
    ctgrListData: null,
    ctgrItemData: null,
    ctgrItemTempData: null,
    refresh: null,
    miniWallkey: [],
    ctgrGoodsList: [],
    type: [],
    ctgrIndex: 0,
    currentType: 0,
    tcTopY: 0,
    tcTopYs: [],
    ctgrY: 0,
    titles: ['综合','新品','销量'],
    positionYs: []
  }
},
components: {
  CtgrNavBar,
  CategoryList,
  CategoryItem,
  CategoryGoodsList,
  TabControl,
  Scroll
},
methods: {
  // 请求数据
  _getCategory() {
    getCategory().then(res => {
      const list = res.data.category.list
      this.ctgrListData = list
      for(let i=0;i<list.length;i++) {
        this.miniWallkey.push(list[i].miniWallkey)
      }
      this._getSubcategory(this.ctgrListData[0].maitKey)
    })
  },
  //请求详细数据
  _getSubcategory(maitKey) {
    getSubcategory(maitKey).then(res => {
      this.ctgrItemData = []
      this.ctgrItemData[0] = res.data.list
      this.ctgrItemTempData = res.data.list
    })
  },
  _getCtgrGoodsList(miniWallkey,type,index) {
    getCtgrGoodsList(miniWallkey,type).then(res => {
      this.type.push(res)
      if(this.type.length == 3) {
        this.ctgrGoodsList[index] = this.type
        this.isTcShow = true
        this.$nextTick(() => {
          this.tcTopY = this.$refs.tabControl.$el.offsetTop
          this.tcTopYs[index] = this.tcTopY
        })
        this.$refs.scroll.finishPullUp()
      }
    })
  },
  clItemClick(index) {
    this.ctgrIndex = index
    this.tcTopY = this.tcTopYs[index]
    //保存positionY
    this.positionYs[index] && this.$refs.scroll.scrollTo(0,-this.positionYs[index],0)
    if(!this.positionYs[index] || this.positionYs[index]<this.tcTopY) {
      this.isCopyTcShow = false
    }else if(this.positionYs[index] && this.positionYs[index]>this.tcTopY){
      this.isCopyTcShow = true
    }
    //判断是否有数据让tab-contr隐藏显示
    if(!this.ctgrGoodsList[index]) {
      this.isTcShow = false
      this.$refs.scroll.finishPullUp()
    }
    // 判断是否有数据，没有数据则请求数据并保存数据
    !this.ctgrItemData[index] && getSubcategory(this.ctgrListData[index].maitKey).then(res => {
        this.ctgrItemData[index] = res.data.list
        this.ctgrItemTempData = res.data.list
      })
    this.ctgrItemTempData = this.ctgrItemData[index]
  },
  itemImgLoad() {
    this.refresh()
  },
  scroll(position) {
      this.positionYs[this.ctgrIndex] = -position.y
      if(-position.y >= this.tcTopY && this.tcTopY !== 0) {
        this.isCopyTcShow = true
      }else {
        this.isCopyTcShow = false
      } 
  },
  pullingUp() {
    if(!this.ctgrGoodsList[this.ctgrIndex]) {
      this.type = []
      this._getCtgrGoodsList(this.miniWallkey[this.ctgrIndex],'pop',this.ctgrIndex)
      this._getCtgrGoodsList(this.miniWallkey[this.ctgrIndex],'new',this.ctgrIndex)
      this._getCtgrGoodsList(this.miniWallkey[this.ctgrIndex],'sell',this.ctgrIndex)
    }
  },
  tabControlClick(index) {
    this.currentType = index
    this.$refs.tabControl.currentIndex = index
    this.$refs.copyTabControl.currentIndex = index
  }
},
created() {
  //请求数据
  this._getCategory()
},
mounted() {
  this.refresh = debounce(this.$refs.scroll.refresh,20)
  this.$bus.$on('gliImgLoad',() => {
    this.refresh()
  })
},
activated() {
  this.$refs.scroll.refresh()
  this.$refs.scroll.scrollTo(0,this.ctgrY,0)
},
deactivated() {
  this.ctgrY = this.$refs.scroll.scroll.y
}

}
</script>
 
<style scoped>
#category {
  height: 100vh;
}
.ctgr-scroll {
  position: absolute;
  right: 0;
  top: 44px;
  bottom: 49px;
  width: 75%;
  overflow: hidden;
}
.ctgr-tab-control {
  position: fixed;
  right: 0;
  top: 44px;
  z-index: 9;
  width: 75%;
}
</style>