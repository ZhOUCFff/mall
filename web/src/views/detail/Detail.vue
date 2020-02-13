<template>
  <div id="detail">
    <detail-nav-bar @dttitlesClick="dttitlesClick" ref="dtNavBar" :dt-titles="titles" />
    <scroll class="dt-scroll" ref="scroll" @scroll="scroll" :probe-type="3" :click="flag">
      <detail-swiper
        :dts-img="itemInfo.topImages"
        v-if="itemInfo"
        @dtSwiperImgLoad="dtSwiperImgLoad"
      />
      <detail-goods-info
        :dt-goos-info="itemInfo"
        :dt-columns="columns"
        :services="shopInfo.services"
        v-if="shopInfo"
      />
      <detail-shop-info :dt-shop-info="shopInfo" v-if="shopInfo" />
      <detail-img-info :dt-img="detailInfo" v-if="detailInfo" @dtImgLoad="dtImgLoad" />
      <detail-params-info :dt-item-params="itemParams" v-if="itemParams" ref="params" />
      <detail-comment-info :dt-rate="rate" v-if="rate" ref="comment" />
      <detail-comment-info v-if="!rate" ref="noComment" />
      <goods-list ref="goodsList">
        <goods-list-item
          v-for="(item,i) in recommend"
          :goods-list-item="item"
          @gliImgLoad="gliImgLoad"
          :key="i"
        />
      </goods-list>
    </scroll>
    <back-to-top v-show="isbttShow" @click.native="bttClick" />
    <detail-bottom-bar @atcClick="atcClick" />
  </div>
</template>
 
<script>
import { debounce } from 'common/utils'
import { bttMixin } from 'common/mixin'

//导入网络请求函数
import { getDetailData, getRcommend } from 'network/detail'
import { detailInfo, itemParams, shopInfo } from 'network/detail'

import { mapActions } from 'vuex'

//导入子组件
import DetailNavBar from './childCpns/DetailNavBar'
import DetailSwiper from './childCpns/DetailSwiper'
import DetailGoodsInfo from './childCpns/DetailGoodsInfo'
import DetailShopInfo from './childCpns/DetailShopInfo'
import DetailImgInfo from './childCpns/DetailImgInfo'
import DetailParamsInfo from './childCpns/DetailParamsInfo'
import DetailCommentInfo from './childCpns/DetailCommentInfo'
import DetailBottomBar from './childCpns/DetailBottomBar'

//导入业务组件
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'

//导入公共组件
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: "Detail",
  mixins: [bttMixin],
  data() {
    return {
      // 网络请求相关数据
      flag: true,
      columns: null,
      detailInfo: null,
      itemInfo: null,
      itemParams: null,
      rate: null,
      shopInfo: null,
      recommend: null,
      topYs: [],
      getTopYs: null,
      refresh: null,
      paramsEl: null,
      commentEl: null,
      goodsListEl: null,
      titles: []
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailShopInfo,
    DetailImgInfo,
    DetailParamsInfo,
    DetailCommentInfo,
    GoodsList,
    GoodsListItem,
    DetailBottomBar,
    Scroll
  },
  computed: {
    iid() {
      return this.$route.query.iid
    },
    scrollObj() {
      return this.$refs.scroll
    }
  },
  methods: {
    ...mapActions(['addToCart']),
    dttitlesClick(index) {
      this.flag = false
      setTimeout(() => {
        this.flag = true
        this.scrollObj.scrollTo(0, -this.topYs[index], 200)
      }, 50)
    },
    scroll(position) {
      if (-position.y < this.topYs[1]) {
        this.$refs.dtNavBar.currentIndex = 0
      } else if (this.topYs[2] ? (-position.y >= this.topYs[1] && -position.y < this.topYs[2]) : -position.y >= this.topYs[1]) {
        this.$refs.dtNavBar.currentIndex = 1
      } else if (this.topYs[3] ? (-position.y >= this.topYs[2] && -position.y < this.topYs[3]) : -position.y >= this.topYs[2]) {
        this.$refs.dtNavBar.currentIndex = 2
      } else {
        this.$refs.dtNavBar.currentIndex = 3
      }
      this.showBtt(position)
    },
    dtSwiperImgLoad() {
      this.scrollObj.refresh()
    },
    gliImgLoad() {
      this.getTopYs()
      this.refresh()
    },
    dtImgLoad() {
      this.getTopYs()
      this.refresh()
    },
    atcClick() {
      //保存购物车商品信息
      const product = {}
      product.title = this.itemInfo.title
      product.desc = this.itemInfo.desc
      product.img = this.itemInfo.topImages[0]
      product.iid = this.itemInfo.iid
      product.price = this.itemInfo.highNowPrice

      //将商品添加到购物车中
      this.addToCart(product).then(res => {
        this.$toast.showToast(res)
      })
    }
  },
  created() {
    //请求数据
    getDetailData(this.iid).then(res => {
      if (res) {
        //保存columns数据
        this.columns = res.columns
        //保存detailInfo
        this.detailInfo = new detailInfo(res.detailInfo)
        //保存itemInfo数据
        this.itemInfo = res.itemInfo
        //保存itemParams
        this.itemParams = new itemParams(res.itemParams)
        //保存rate数据
        if (res.rate.list) {
          this.rate = res.rate.list[0]
        }
        //保存shopInfo
        this.shopInfo = new shopInfo(res.shopInfo)
      }
    })
    getRcommend().then(res => {
      this.recommend = res.data.list
    })
    this.getTopYs = debounce(() => {
      this.$nextTick(() => {
        this.titles = []
        this.topYs = []
        if (this.itemInfo) {
          this.titles.push('商品')
          this.topYs.push(0)
        }
        if (this.itemParams) {
          this.titles.push('参数')
          this.topYs.push(this.$refs.params.$el.offsetTop)
        }
        if (this.rate) {
          this.topYs.push(this.$refs.comment.$el.offsetTop)
        } else {
          this.topYs.push(this.$refs.noComment.$el.offsetTop)
        }
        this.titles.push('评论')
        this.topYs.push(this.$refs.goodsList.$el.offsetTop)
        this.titles.push('推荐')
      })
    }, 50)
  },
  mounted() {
    this.refresh = debounce(this.scrollObj.refresh, 100)
  }
}
</script>
 
<style scoped>
#detail {
  height: 100vh;
}
.dt-scroll {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>