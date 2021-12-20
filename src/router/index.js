import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import Shopcart from '../views/Shopcart.vue'
import User from '../views/User.vue'
import Search from '../views/Search.vue'
import test from '../views/test.vue'
import GoodsList from '../views/goods/GoodsList.vue'
import GoodsInfo from '../views/goods/GoodsInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home'
  },
  {
    path: '/Home',
    component: Home,
    meta: { title: '首页' }
  },
  {
    path: '/Category',
    component: Category,
    meta: { title: '分类' }
  },
  {
    path: '/Shopcart',
    component: Shopcart,
    meta: { title: '购物车' }
  },
  {
    path: '/User',
    component: User,
    meta: { title: '个人中心' }
  },
  {
    path: '/Search',
    component: Search,
    meta: { title: '搜索' }
  },
  {
    path: '/test',
    name: 'test',
    component: test,
    meta: { title: 'test' }
  },
  {
    path: '/goodslist/:category_id',
    name: 'goodslist',
    props: true, // 开启路由传参
    component: GoodsList,
    meta: { title: '商品列表' }
  },
  {
    path: '/goodsinfo/:id',
    name: 'book_info',
    props: true, // 开启路由传参
    component: GoodsInfo,
    meta: { title: '图书信息' }
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'mui-active'
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next() // 让程序继续执行
})

export default router
