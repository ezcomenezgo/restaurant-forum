import { apiHelper } from "../utils/helper"
const getToken = () => localStorage.getItem('token')

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories', { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  },
  restaurants: {
    create ({ formData }) {
      return apiHelper.post('/admin/restaurants', formData, { headers: { Authorization: `Bearer ${getToken()}`}})
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`admin/restaurants/${restaurantId}`, { headers: {Authorization: `Bearer ${getToken()}`}})
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData, { headers: { Authorization: `Bearer ${getToken()}`}})},
    getRestaurants() {
      return apiHelper.get('/admin/restaurants', { headers: { Authorization: `Bearer ${getToken()}` } })
    },
    // 為何變數用解構賦值便可成功回傳status，但沒有雙花括就會回傳data資料
    deleteRestaurant({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`, { headers: { Authorization: `Bearer ${getToken()}` } })
    }
  }
}