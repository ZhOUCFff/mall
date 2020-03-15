<template>
  <div id="home">
    <home-nav-bar />
    <tab-control
      class="top-tab-control"
      v-if="tabControlData"
      :tcTitles="tabControlData"
      @tabControlClick="tabControlClick"
      v-show="isTCSshow"
      ref="tabConrol1"
    />
    <scroll
      class="scroll"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      :click="true"
      @scroll="homeScroll"
      @pullingUp="pullUpLoad"
    >
      <home-swiper :swiper-img="swiperData" v-if="swiperData" />
      <home-recommend-view :recommend="recommendData" v-if="recommendData" />
      <feature-view />
      <tab-control :tcTitles="tabControlData" @tabControlClick="tabControlClick" ref="tabConrol2" />
      <keep-alive>
        <router-view :goods="goods" :tc-offset-top="tcOffsetTop" v-if="tcOffsetTop&&scroll"></router-view>
      </keep-alive>
    </scroll>
    <back-to-top v-show="isbttShow" @click.native="bttClick" />
  </div>
</template>
 
<script>
//导入工具函数
import { debounce } from 'common/utils'

//导入混入
import { bttMixin } from 'common/mixin'

//导入子组件
import HomeNavBar from './childCpns/HomeNavBar'
import HomeSwiper from './childCpns/HomeSwiper'
import HomeRecommendView from './childCpns/HomeRecommendView'
import FeatureView from './childCpns/FeatureView'
// 导入业务组件
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'
//导入公共组件
import Scroll from 'components/common/scroll/Scroll'

//导入网络请求
import { getHomeData, getHomeGoods } from 'network/home'

export default {
  name: "Home",
  mixins: [bttMixin],
  data() {
    return {
      //轮播图数据
      swiperData: null,
      //推荐模块数据
      recommendData: null,
      //tab-control数据
      tabControlData: ['流行', '新款', '精选'],
      //首页商品数据
      goods: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] },
      },
      goodsType: 'pop',
      isTCSshow: false,
      tcOffsetTop: 0,
      homeY: 0
    }
  },
  components: {
    HomeNavBar,
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    GoodsListItem,
    Scroll,
  },
  computed: {
    scroll() {
      return this.$refs.scroll
    }
  },
  methods: {
    // 事件监听相关
    tabControlClick(index) {
      switch (index) {
        case 0:
          this.goodsType = 'pop';
          break;
        case 1:
          this.goodsType = 'new';
          break;
        case 2:
          this.goodsType = 'sell'
          break;
      }

      this.$router.replace('/home/' + this.goodsType).catch(err => {
        err
      })
      this.$refs.tabConrol1.currentIndex = index
      this.$refs.tabConrol2.currentIndex = index
    },
    homeScroll(position) {
      //监听tab-control滚动纵坐标
      if (this.tcOffsetTop !== 0) {
        this.isTCSshow = -position.y >= this.tcOffsetTop
      }

      //监听home滚动到哪显示隐藏回到顶部按钮
      this.showBtt(position)
    },
    //监听上拉加载
    pullUpLoad() {
      this.getHomeGoods(this.goodsType)
    },

    //网络请求相关
    getHomeData() {
      getHomeData().then(res => {
        //获取轮播图数据
        this.swiperData = res.data.banner.list
        //获取推荐数据
        this.recommendData = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      if (this.goods[type].page) {
        getHomeGoods(type, this.goods[type].page).then(res => {
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page++
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  },
  created() {
    // 请求数据
    this.getHomeData()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    if (this.$route.path == '/home/pop') {
      this.goodsType = 'pop'
      this.$refs.tabConrol1.currentIndex = 0
      this.$refs.tabConrol2.currentIndex = 0
    } else if (this.$route.path == '/home/new') {
      this.goodsType = 'new'
      this.$refs.tabConrol1.currentIndex = 1
      this.$refs.tabConrol2.currentIndex = 1
    } else {
      this.goodsType = 'sell'
      this.$refs.tabConrol1.currentIndex = 2
      this.$refs.tabConrol2.currentIndex = 2
    }

    // 对图片加载进行防抖操作
    const refresh = debounce(this.scroll.refresh, 50)
    // 监听商品列表图片加载
    this.$bus.$on('gliImgLoad', () => {
      this.scroll && refresh()
    })
    //监听轮播图片加载
    this.$bus.$on('hsImgLoad', () => {
      this.scroll && refresh()
      this.tcOffsetTop = this.$refs.tabConrol2.$el.offsetTop
    })
    this.$bus.$on('ftvImgLoad', () => {
      this.scroll && refresh()
      this.tcOffsetTop = this.$refs.tabConrol2.$el.offsetTop
    })
    this.$bus.$on('rcmImgLoad', () => {
      this.scroll && refresh()
      this.tcOffsetTop = this.$refs.tabConrol2.$el.offsetTop
    })
  },
  activated() {
    this.scroll.refresh()
    //保持状态
    this.scroll.scrollTo(0, this.homeY, 0)
  },
  deactivated() {
    //记录离开时的y坐标
    this.homeY = this.scroll.scroll.y
  }
}
</script>
 
<style scoped>
#home {
  height: 100vh;
}
.scroll {
  height: calc(100% - 93px);
  overflow: hidden;
}
.top-tab-control {
  position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  z-index: 9;
}
</style>