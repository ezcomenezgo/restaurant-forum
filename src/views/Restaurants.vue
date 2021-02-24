<template>
  <div class="container py-5">
    <NavTabs />
    <!-- restaurantsNavPills -->
    <RestaurantsNavPills :categories="categories" />
    <h1 class="mt-5">首頁 - 餐廳列表</h1>
    <div class="row">
      <!-- restaurantsCard -->
      <!-- 這裡的v-for只是另一種方法嗎?跟最新動態用的不一樣 -->
      <RestaurantCard
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>
    <!-- restaurantPagination -->
    <RestaurantPagination
      v-if="totalPage.length > 1"
      :current-page="currentPage"
      :total-page="totalPage"
      :category-id="categoryId"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantsNavPills from "../components/RestaurantsNavPills";
import RestaurantPagination from "../components/RestaurantPagination";
// 串接API step1. 透過import匯入剛剛寫好用來呼叫API的方法
import restaurantAPI from "../apis/restaurants";
import { Toast } from "../utils/helper";

export default {
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantPagination,
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
    };
  },
  created() {
    // 串接API step3 在 created 的時候呼叫 fetchRestaurant 方法
    // 這裡會向伺服器請求第一頁且不分餐廳類別的資料
    this.fetchRestaurant({
      queryPage: "",
      queryCategoryId: "",
    });
  },
  methods: {
    // 串接API step2. 將fetchRestaurant改成async...await語法
    // 並且可以帶入參數page與CategoryId
    // 呼叫API後取得response
    async fetchRestaurant({ queryPage, queryCategoryId }) {
      try {
        const response = await restaurantAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId,
        });
        console.log("response", response);
        const {
          restaurants,
          categories,
          categoryId,
          page,
          totalPage,
          prev,
          next,
        } = response.data;
        this.restaurants = restaurants;
        this.categories = categories;
        this.categoryId = categoryId;
        this.currentPage = page;
        this.totalPage = totalPage;
        this.previousPage = prev;
        this.nextPage = next;
      } catch (error) {
        console.log("error", error);
        Toast.fire({
          icon: "error",
          title: "無餐廳資料，請稍後再試",
        });
      }
    },
  },
};
</script>
