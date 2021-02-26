<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image" width="140px" height="140px" />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.FollowerCount }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.prevent.stop="unfollowed(user.id)"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.prevent.stop="followed(user.id)"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import Toast from "../utils/helper";

export default {
  props: {
    initialUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      user: this.initialUser,
    };
  },
  methods: {
    async followed(userId) {
      try {
        const { data } = await usersAPI.addFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.user = {
          ...this.user,
          FollowerCount: this.user.FollowerCount + 1,
          isFollowed: true,
        };
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法追蹤",
        });
      }
    },
    async unfollowed(userId) {
      try {
        const { data } = await usersAPI.deleteFollowing({ userId });

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        this.user = {
          ...this.user,
          FollowerCount: this.user.FollowerCount - 1,
          isFollowed: false,
        };
      } catch {
        Toast.fire({
          icon: "error",
          title: "無法退追",
        });
      }
    },
  },
};
</script>