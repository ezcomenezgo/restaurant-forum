<template>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img
        src="https://i.imgur.com/PhcKzNf.jpeg"
        width="300px"
        height="300px"
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{{ user.profile.name }}</h5>
        <p class="card-text">{{ user.profile.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ user.profile.Comments.length }}</strong> 已評論餐廳
          </li>
          <li>
            <strong>{{ user.profile.FavoritedRestaurants.length }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong>{{ user.profile.Followings.length }}</strong> followings
            (追蹤者)
          </li>
          <li>
            <strong>{{ user.profile.Followers.length }}</strong> followers
            (追隨者)
          </li>
        </ul>
        <template v-if="currentUser">
          <router-link
            :to="{ name: 'user-edit', params: { id: user.id } }"
            class="btn btn-primary"
          >
            Edit
          </router-link>
        </template>
        <template v-else>
          <button
            v-if="user.isFollowed"
            type="button"
            class="btn btn-danger"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            取消追蹤
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addFollowing(user.id)"
          >
            追蹤
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    isCurrentUser: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
      currentUser: this.isCurrentUser,
    };
  },
  methods: {
    deleteFollowing() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
    addFollowing() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
  },
};
</script>