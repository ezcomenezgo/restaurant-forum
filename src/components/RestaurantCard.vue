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
          <a href="#">{{ restaurant.name }}</a>
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
          @click.prevent.stop="deleteFavorite"
        >
          移除最愛
        </button>
        <button
          type="button"
          v-else
          class="btn btn-danger btn-border favorite mr-2"
          @click.prevent.stop="addToFavorite"
        >
          加到最愛
        </button>
        <button
          type="button"
          v-if="restaurant.isLiked"
          class="btn btn-primary like mr-2"
          @click.prevent.stop="deleteLike"
        >
          Unlike
        </button>
        <button
          type="button"
          v-else
          class="btn btn-danger like mr-2"
          @click.prevent.stop="addLike"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
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
    addToFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: true,
      };
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant, // 保留餐廳內原有資料
        isFavorited: false,
      };
    },
    addLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true,
      };
    },
    deleteLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false,
      };
    },
  },
};
</script>