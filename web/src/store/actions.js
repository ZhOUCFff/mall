import { ADD_COUNT, ADD_PRODUCT } from './mutation-types'

export default {
  addToCart(context, payload) {
    return new Promise((resolve, rejects) => {
      let index = context.state.cartList.findIndex(item => {
        return item.iid === payload.iid
      })
      if (index !== -1) {
        context.commit(ADD_COUNT, index)
        resolve('当前商品数量+1')
      } else {
        context.commit(ADD_PRODUCT, payload)
        resolve('添加购物车成功')
      }
    })
  }
}