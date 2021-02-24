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
import restaurantAPI from '../apis/restaurants'


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
    // 串接API step3 在 created 的時候呼叫 fetchRestaurants 方法
    // 這裡會向伺服器請求第一頁且不分餐廳類別的資料
    this.fetchRestaurant({
      page: 1,
      categoryId: ''
    });
  },
  methods: {
    // 串接API step2. 將fetchRestaurant改成async...await語法
    // 並且可以帶入參數page與CategoryId
    // 呼叫API後取得response
    async fetchRestaurant() {
      try {
        const response = await restaurantAPI.getRestaurants({ page, categoryId })
        console.log('reseponse', response)
      } catch(error) {
        console.log('error', error)
      }
      // const {
      //   restaurants,
      //   categories,
      //   categoryId,
      //   page,
      //   totalPage,
      //   prev,
      //   next,
      // } = dummyData;

      // this.restaurants = restaurants;
      // this.categories = categories;
      // this.categoryId = categoryId;
      // this.currentPage = page;
      // this.totalPage = totalPage;
      // this.previousPage = prev;
      // this.nextPage = next;
    },
  },
};
</script>
