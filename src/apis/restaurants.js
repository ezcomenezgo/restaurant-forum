import { apiHelper } from '../utils/helper'
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  getRestaurantsTop() {
    return apiHelper.get('/restaurants/top', {headers: { Authorization: `Bearer ${getToken()}` }})
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`, {headers: { Authorization: `Bearer ${getToken()}` }})
  }
  // addFavorite({ restaurantId }) {
  //   return apiHelper.post(`/favorite/${restaurantId}`, null, {headers: { Authorization: `Bearer ${getToken()}`}})
  // },
  // deleteFavorite({ restaurantId }) {
  //   return apiHelper.delete(`/favorite/${restaurantId}`, {headers: { Authorization: `Bearer ${getToken()}`}})
  // }
}