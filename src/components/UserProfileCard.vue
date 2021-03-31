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
        <h5 class="card-title">{{ user.name }}</h5>
        <p class="card-text">{{ user.email }}</p>
        <ul class="list-unstyled list-inline">
          <li>
            <strong>{{ Comments ? Comments.length : "未顯示" }}</strong>
            已評論餐廳
          </li>
          <li>
            <strong>{{
              FavoritedRestaurants ? FavoritedRestaurants.length : "未顯示"
            }}</strong>
            收藏的餐廳
          </li>
          <li>
            <strong>{{ Followings ? Followings.length : "未顯示" }}</strong>
            followings (追蹤者)
          </li>
          <li>
            <strong>{{ Followers ? Followers.length : "未顯示" }}</strong>
            followers (追隨者)
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
            v-if="isFollowed"
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
import usersAPI from "../apis/users";
import { Toast } from "../utils/helper";

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
    Comments: {
      type: Array,
      required: true,
    },
    FavoritedRestaurants: {
      type: Array,
      required: true,
    },
    Followers: {
      type: Array,
      required: true,
    },
    Followings: {
      type: Array,
      required: true,
    },
    initialIsFollowed: {
      type: Boolean,
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
      isFollowed: this.initialIsFollowed,
    };
  },
  watch: {
    initialUser(newValue) {
      this.user = {
        ...this.user,
        ...newValue,
      };
    },
    initialIsFollowed(newValue) {
      this.isFollowed = newValue;
    },
    isCurrentUser(newValue) {
      this.currentUser = newValue
    }
  },
  methods: {
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });
        console.log("deletefollow:", data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = false;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法退追，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.isFollowed = true;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法追蹤，請稍後再試",
        });
      }
    },
  },
};
</script>