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
        v-if="showRestaurant.isFavorite"
        @click.prevent.stop="deleteFavorite"
        class="btn btn-danger btn-border mr-2"
      >
        移除最愛
      </button>
      <button
        type="button"
        v-else
        @click.prevent.stop="addToFavorite"
        class="btn btn-primary btn-border mr-2"
      >
        加到最愛
      </button>
      <button
        type="button"
        v-if="showRestaurant.isLiked"
        @click.prevent.stop="deleteLike"
        class="btn btn-danger like mr-2"
      >
        Unlike
      </button>
      <button
        type="button"
        v-else
        @click.prevent.stop="addToLike"
        class="btn btn-primary like mr-2"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
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
  methods: {
    addToFavorite() {
      console.log("addToFavorite");
      this.showRestaurant = {
        ...this.showRestaurant,
        isFavorite: true,
      };
    },
    deleteFavorite() {
      console.log("deleteFavorite");
      this.showRestaurant = {
        ...this.showRestaurant,
        isFavorite: false,
      };
    },
    addToLike() {
      this.showRestaurant = {
        ...this.showRestaurant,
        isLiked: true,
      };
    },
    deleteLike() {
      this.showRestaurant = {
        ...this.showRestaurant,
        isLiked: false,
      };
    },
  },
};
</script>