<template>
  <div class="container">
    <Spinner v-if="isLoading"/>
    <template v-else>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Category</th>
          <th scope="col">Name</th>
          <th scope="col" width="300">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="restaurant in restaurants" :key="restaurant.id">
          <th scope="row">
            {{ restaurant.id }}
          </th>
          <td>
            {{ restaurant.Category ? restaurant.Category.name : "未分類" }}
          </td>
          <td>{{ restaurant.name }}</td>
          <td class="d-flex justify-content-between">
            <router-link
              :to="{ name: 'admin-restaurant', params: { id: restaurant.id } }"
              class="btn btn-link"
            >
              Show
            </router-link>

            <router-link
              :to="{
                name: 'admin-restaurant-edit',
                params: { id: restaurant.id },
              }"
              class="btn btn-link"
              >Edit</router-link
            >

            <button
              type="button"
              @click.prevent.stop="deleteRestaurants(restaurant.id)"
              class="btn btn-link"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    </template>
  </div>
</template>

<script>
import Spinner from "../components/Spinner";
import adminAPI from "../apis/admin";
import { Toast } from "../utils/helper";

export default {
  components: {
    Spinner,
  },
  data() {
    return {
      restaurants: [],
      isLoading: true
    };
  },
  created() {
    this.fetchRestaurants();
  },
  methods: {
    async fetchRestaurants() {
      try {
        const { data } = await adminAPI.restaurants.getRestaurants();
        console.log(data);
        this.restaurants = data.restaurants;
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: "warning",
          title: "無法顯示後台餐廳清單，請稍後再試",
        });
      }
    },
    async deleteRestaurants(restaurantId) {
      try {
        // 為何用解構賦值便可成功回傳status，但沒有雙花括就會回傳餐廳資料?
        const { data } = await adminAPI.restaurants.deleteRestaurant({
          restaurantId,
        });
        console.log(data);
        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.restaurants = this.restaurants.filter(
          (restaurant) => restaurant.id !== restaurantId
        );
      } catch (error) {
        Toast.fire({
          icon: "warning",
          title: "無法顯示後台餐廳清單，請稍後再試",
        });
      }
    },
  },
};
</script>