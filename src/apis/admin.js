import { apiHelper } from "../utils/helper"
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', { name })
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, { name })
    }
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    getRestaurants() {
      return apiHelper.get('/admin/restaurants')
    },
    // 為何變數用解構賦值便可成功回傳status，但沒有雙花括就會回傳data資料
    deleteRestaurant({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    }
  },
  users: {
    get() {
      return apiHelper.get('/admin/users', {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    },
    update({ userId, isAdmin }) {
      return apiHelper.put(
        `/admin/users/${userId}`,
        { isAdmin },
        {
          headers: { Authorization: `Bearer ${getToken()}` }
        }
      )
    }
  }
}