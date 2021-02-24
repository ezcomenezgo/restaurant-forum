<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />

    <RestaurantsTopCard
      v-for="restaurant in topRestaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantsTopCard from "../components/RestaurantsTopCard";
import restaurantsAPI from "../apis/restaurants"
import { Toast } from "../utils/helper"

export default {
  components: {
    NavTabs,
    RestaurantsTopCard,
  },
  data() {
    return {
      topRestaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    async fetchTopRestaurants() {
      try {
        const { data } = await restaurantsAPI.getRestaurantsTop()
        console.log(data)

        this.topRestaurants = data.restaurants;
      } catch(error) {
        Toast.fire({
          icon:'error',
          title:'無法顯示人氣餐廳，請稍後再試'
        })
      }
      
    },
  },
};
</script>