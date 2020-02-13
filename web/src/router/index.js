import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('views/home/Home')
const Pop = () => import('views/home/childCpns/childViews/Pop')
const New = () => import('views/home/childCpns/childViews/New')
const Sell = () => import('views/home/childCpns/childViews/Sell')

const Detail = () => import('views/detail/Detail')
const Category = () => import('views/category/Category')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')

Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '',
        redirect: 'pop'
      },
      {
        path: 'pop',
        component: Pop
      },
      {
        path: 'new',
        component: New
      },
      {
        path: 'sell',
        component: Sell
      }
    ]
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router