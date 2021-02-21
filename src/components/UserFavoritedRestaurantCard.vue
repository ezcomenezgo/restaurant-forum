<template>
  <div class="card">
    <div class="card-header">
      <strong>{{ userFavoritedRestaurant.length }}</strong> 收藏的餐廳
    </div>
    <div class="card-body">
      <a
        href="/restaurants/26"
        v-for="restaurant in userFavoritedRestaurant"
        :key="restaurant.id"
      >
        <img :src="restaurant.image" width="60" height="60" class="avatar" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userFavoritedRestaurant: {
      type: Array,
      required: true,
    },
  },
};
</script>