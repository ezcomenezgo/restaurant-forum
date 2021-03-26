<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
        alt="Card image cap"
        width="286px"
        height="180px"
      />
      <div class="card-body">
        <p class="card-text title-wrap">
          <router-link
            :to="{ name: 'restaurant', params: { id: restaurant.id } }"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge badge-secondary">{{
          restaurant.Category ? restaurant.Category.name : "未分類"
        }}</span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          type="button"
          v-if="restaurant.isFavorited"
          class="btn btn-primary btn-border favorite mr-2"
          @click.prevent.stop="deleteFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          type="button"
          v-else
          class="btn btn-danger btn-border favorite mr-2"
          @click.prevent.stop="addFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          type="button"
          v-if="restaurant.isLiked"
          class="btn btn-primary like mr-2"
          @click.prevent.stop="deleteLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          type="button"
          v-else
          class="btn btn-danger like mr-2"
          @click.prevent.stop="addLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// 串接API step1 載入API方法和Toast提示工具
import UsersAPI from '../apis/users'
import { Toast } from '../utils/helper'

export default {
  props: {
    // 為甚麼跟Restaurants.vue裡面的自定義屬性取的名字不一樣
    initialRestaurant: {
      // 已經先在Restaurants.vue裡面的<RestaurantCard>生成迴圈才帶入自定義屬性的，所以是物件不是陣列
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      restaurant: this.initialRestaurant,
    };
  },
  methods: {
    // 串接API step2 將addFavorite改成async/await語法
    async addFavorite(restaurantId) {
      try {
        // 串接API step3 使用撰寫好的Favorite方法去呼叫API，並取得回傳內容
        // 使用解構賦值直接定義response的data
        const { data } = await UsersAPI.addFavorite({ restaurantId }) 

        // 串接API step4 若請求過程有錯，則進到錯誤處理
        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        // 串接API step5 若請求成功的話，改變Vue內的資料狀態
        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: true,
        } 
      }catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試'
        })
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await UsersAPI.deleteFavorite({ restaurantId })

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant, // 保留餐廳內原有資料
          isFavorited: false,
        };
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳移除最愛，請稍後再試'
        })
      }
      
    },
    async addLike(restaurantId) {
      try {
        const { data } = await UsersAPI.addLike({ restaurantId })

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: true,
        };
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法按讚餐廳，請稍後再試'
        })
      }
      
    },
    async deleteLike(restaurantId) {
      try {
        const { data } = await UsersAPI.deleteLike({ restaurantId })

        if(data.status !== 'success') {
          throw new Error(data.message)
        }

        this.restaurant = {
          ...this.restaurant,
          isLiked: false,
        };
      } catch {
        Toast.fire({
          icon: 'error',
          title: '無法倒讚餐廳，請稍後再試'
        })
      }
    },
  },
};
</script>

<style scoped>
.badge.badge-secondary {
  padding: 0;
  margin: 8px 0;
  color: #bd2333;
  background-color: transparent;
}

.btn,
.btn-border.btn:hover {
  margin: 7px 14px 7px 0;
}

.card {
  margin-bottom: 2rem !important;
}
.card-img-top {
  background-color: #EFEFEF;
}

.card-body {
  padding: 17.5px;
}

.card-footer {
  padding: 9px 17.5px;
  border-color: rgb(232, 232, 232);
  background: white;
}
</style>