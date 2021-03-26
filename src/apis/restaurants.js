import { apiHelper } from '../utils/helper'

export default {
  getRestaurants({ page, categoryId }) {
    const searchParams = new URLSearchParams({ page, categoryId })
    return apiHelper.get(`/restaurants?${searchParams.toString()}`)
  },
  getRestaurantsTop() {
    return apiHelper.get('/restaurants/top')
  },
  getRestaurant({ restaurantId }) {
    return apiHelper.get(`/restaurants/${restaurantId}`)
  }
  // addFavorite({ restaurantId }) {
  //   return apiHelper.post(`/favorite/${restaurantId}`, null, {headers: { Authorization: `Bearer ${getToken()}`}})
  // },
  // deleteFavorite({ restaurantId }) {
  //   return apiHelper.delete(`/favorite/${restaurantId}`, {headers: { Authorization: `Bearer ${getToken()}`}})
  // }
}