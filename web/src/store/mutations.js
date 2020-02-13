import { ADD_COUNT, ADD_PRODUCT } from './mutation-types'

export default {
  subCount(state, index) {
    state.cartList[index].count--
  },
  isChecked(state, index) {
    state.cartList[index].isChecked = !state.cartList[index].isChecked
  },
  [ADD_COUNT](state, index) {
    state.cartList[index].count++
  },
  [ADD_PRODUCT](state, payload) {
    payload.count = 1
    payload.isChecked = true
    state.cartList.push(payload)
  }
}