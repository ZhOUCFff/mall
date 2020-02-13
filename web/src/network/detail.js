import { request3, request4 } from './request'

export function getDetailData(iid) {
  return request3({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRcommend() {
  return request4({
    url: '/recommend'
  })
}

export class detailInfo {
  constructor(detailInfo) {
    this.desc = detailInfo.desc
    this.key = detailInfo.detailImage[0].key
    this.list = detailInfo.detailImage[0].list
  }
}

export class itemParams {
  constructor(itemParams) {
    if (itemParams.info) {
      this.set = itemParams.info.set
    }
    if (itemParams.rule) {
      this.tables = itemParams.rule.tables[0]
    }

  }
}

export class shopInfo {
  constructor(shopInfo) {
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
    this.services = shopInfo.services
    this.shopLogo = shopInfo.shopLogo
  }
}