<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge badge-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr />

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button type="button" class="btn btn-link" @click="$router.back()">
      回上一頁
    </button>
  </div>
</template>

<script>
import restaurantsAPI from "../apis/restaurants"
import { Toast } from "../utils/helper"


export default {
  data() {
    return {
      restaurant: '',
    };
  },
  
  created() {
    const { id: restaurantId } = this.$route.params;
    this.fetchDashboard(restaurantId)
  },
  // 會跑錯誤但是畫面還是出的來
  // 錯誤訊息([Vue warn]: Error in render: "TypeError: Cannot read property 'name' of undefined")
  methods: {
    async fetchDashboard(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        console.log("data: ",data)
        this.restaurant = data.restaurant
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法取得Dashboard，請稍後再試'
        })
      }
    }
  },
  // beforeRouteUpdate(to, from, next) {
  //   // 路由改變時重新抓取資料
  //   console.log('to', to)
  //   const { id } = to.params
  //   this.fetchDashboard(id)
  //   next()
  // },
};
</script>