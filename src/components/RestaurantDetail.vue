<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1>{{ showRestaurant.name }}</h1>
      <p class="badge badge-secondary mt-1 mb-3">
        {{ showRestaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-responsive center-block"
        :src="showRestaurant.image"
        style="width: 250px; margin-bottom: 25px"
      />
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ showRestaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ showRestaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ showRestaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p>{{ showRestaurant.description }}</p>
      <router-link
        class="btn btn-primary btn-border mr-2"
        :to="{
          name: 'restaurant-dashboard',
          params: { id: showRestaurant.id },
        }"
        >Dashboard</router-link
      >

      <button
        type="button"
        v-if="showRestaurant.isFavorited"
        @click.prevent.stop="deleteFavorite(showRestaurant.id)"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        type="button"
        v-else
        @click.prevent.stop="addToFavorite(showRestaurant.id)"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        type="button"
        v-if="showRestaurant.isLiked"
        @click.prevent.stop="deleteLike(showRestaurant.id)"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        type="button"
        v-else
        @click.prevent.stop="addToLike(showRestaurant.id)"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import usersAPI from '../apis/users';
import { Toast } from '../utils/helper';

export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showRestaurant: this.initialRestaurant,
    };
  },
  watch: {
    initialRestaurant(newValue) {
      this.showRestaurant = {
        ...this.showRestaurant,
        ...newValue,
      };
    },
  },
  methods: {
    async addToFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addFavorite({ restaurantId });
        console.log(data);

        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        this.showRestaurant = {
          ...this.showRestaurant,
          isFavorited: true,
        };
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試',
        });
      }
    },
    async deleteFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFavorite({ restaurantId });
        console.log(data);

        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        this.showRestaurant = {
          ...this.showRestaurant,
          isFavorited: false,
        };
      } catch (error) {
        console.error(error.message);
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試',
        });
      } 
    },
    async addToLike(restaurantId) {
      try {
        const { data } = await usersAPI.addLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        this.showRestaurant = {
          ...this.showRestaurant,
          isLiked: true,
        };
      } catch(error) {
        console.error(error.message);
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試',
        });
      }
    },
    async deleteLike(restaurantId) {
      try {
        const { data } = await usersAPI.deleteLike({ restaurantId })

        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        this.showRestaurant = {
          ...this.showRestaurant,
          isLiked: false,
        };
      } catch(error) {
        console.error(error.message);
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍後再試',
        });
      }
    },
  },
};
</script>

<style scoped>
.col-lg-8 p,
.contact-info-wrap li,
.contact-info-wrap strong {
  font-family: serif;
  font-size: 17px;
}
</style>