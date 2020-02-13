import GoodsList from 'components/content/goods/GoodsList'
import GoodsListItem from 'components/content/goods/GoodsListItem'
export const HMCVMixin = {
  data() {
    return {
      saveY: 0,
      isActived: true
    }
  },
  components: {
    GoodsList,
    GoodsListItem
  },
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    },
    tcOffsetTop: {
      type: Number,
      default: 0
    }
  },
  activated() {
    this.$parent.refresh()
    if (this.isActived && -this.$parent.scroll.y >= this.tcOffsetTop) {
      this.$parent.scrollTo(0, -this.tcOffsetTop, 0)
    } else if (!this.isActived && -this.saveY >= this.tcOffsetTop && -this.$parent.scroll.y >= this.tcOffsetTop) {
      this.$parent.scrollTo(0, this.saveY, 0)
    } else if (!this.isActived && -this.saveY < this.tcOffsetTop && -this.$parent.scroll.y >= this.tcOffsetTop) {
      this.$parent.scrollTo(0, -this.tcOffsetTop, 0)
    }
    this.isActived = false
  },
  deactivated() {
    this.saveY = this.$parent.scroll.y
  }
}

import BackToTop from 'components/content/backToTop/BackToTop'
export const bttMixin = {
  data() {
    return {
      isbttShow: false
    }
  },
  components: {
    BackToTop
  },
  methods: {
    bttClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    showBtt(position) {
      this.isbttShow = -position.y >= 1000
    }
  }
}