<template>
  <div class="col-3">
    <a href="#">
      <img :src="user.image" width="140px" height="140px" />
    </a>
    <h2>{{ user.name }}</h2>
    <span class="badge badge-secondary"
      >追蹤人數：{{ user.Followers.length }}</span
    >
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        @click.prevent.stop="unfollowed"
        type="button"
        class="btn btn-danger"
      >
        取消追蹤
      </button>
      <button
        v-else
        @click.prevent.stop="followed"
        type="button"
        class="btn btn-primary"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
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
    followed() {
      this.user = {
        ...this.user,
        isFollowed: true,
      };
    },
    unfollowed() {
      this.user = {
        ...this.user,
        isFollowed: false,
      };
    },
  },
};
</script>