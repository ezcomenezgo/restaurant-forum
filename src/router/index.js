import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import NotFound from '../views/NotFound.vue'
import SignIn from '../views/SignIn.vue'
import Restaurants from '../views/Restaurants.vue'
import store from '../store'

const authorizeIsAdmin = (to, from, next) => {
  const currentUser = store.state.currentUser
  if (currentUser && !currentUser.isAdmin) {
    next('/404')
    return
  }
  next()
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/signin'
  },
  {
    path: '/signin',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'sign-up',
    // 動態載入，因為通常使用者只會用到signup一次，所以不需要每次都重新載入一次signup檔案
    component: () => import('../views/SignUp.vue')
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () => import('../views/RestaurantsFeeds.vue')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-tops',
    component: () => import('../views/RestaurantsTop.vue')
  },
  {
    path: '/restaurant/:id/dashboard',
    name: 'restaurant-dashboard',
    component: () => import('../views/RestaurantDashboard.vue')
  },
  {
    path: '/restaurant/:id',
    name: 'restaurant',
    component: () => import('../views/Restaurant.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/User.vue')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () => import('../views/UsersTop.vue')
  },
  {
    path: '/admin',
    excat: true,
    redirect: 'admin/restaurants'
  },
  {
    path: '/admin/categories',
    name: 'admin-categories',
    component: () => import('../views/AdminCategories.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminUsers.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants',
    name: 'admin-restaurants',
    component: () => import('../views/AdminRestaurants.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurant/new',
    name: 'admin-restaurant-new',
    component: () => import('../views/AdminRestaurantNew.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id/edit',
    name: 'admin-restaurant-edit',
    component: () => import('../views/AdminRestaurantEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/restaurants/:id',
    name: 'admin-restaurant',
    component: () => import('../views/AdminRestaurant.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '/admin/users/:id/edit',
    name: 'admin-user-edit',
    component: () => import('../views/AdminUserEdit.vue'),
    beforeEnter: authorizeIsAdmin
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound,
  },
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

router.beforeEach(async (to, from, next) => {
  // 從localStorage取出token
  const tokenInLocalStorage = localStorage.getItem('token')
  const tokenInStore = store.state.token
  let isAuthenticated = store.state.isAuthenticated

  // 比較localStorage和store中的token是否一樣
  if (tokenInLocalStorage && tokenInLocalStorage !== tokenInStore) {
    // 取得驗證成功與否
    isAuthenticated = await store.dispatch('fetchCurrentUser')
  }

  // 對於不需要驗證token的頁面
  const pathWithoutAuthentication = ['sign-up', 'sign-in']

  if (!isAuthenticated && !pathWithoutAuthentication.includes(to.name)) {
    next('/signin')
    return
  }

  if (isAuthenticated && pathWithoutAuthentication.includes(to.name)) {
    next('/restaurants')
    return
  }
  next()
})

export default router
