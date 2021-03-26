<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in comments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          v-if="currentUser.isAdmin"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
          class="btn btn-danger float-right"
          :disabled="isProcessing"
        >
          Delete
        </button>
        <h3>
          <router-link to="/users"> {{ comment.name }} </router-link>
        </h3>
        <p>{{ comment.text }}</p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr />
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "../utils/mixins";
import { mapState } from "vuex";
import { Toast } from "../utils/helper";
import usersAPI from "../apis/users";

export default {
  name: "restaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      comments:[],
      isProcessing: false,
    };
  },
  created() {
    console.log('restaurantComments:', this.restaurantComments)
    console.log('comments:', this.comments)
  },
  watch: {
    restaurantComments(newValue) {
      this.comments = [
        ...this.comments,
        ...newValue
      ]
    }
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      try {
        this.isProcessing = true;
        console.log("handDeleteButtonClick", commentId);

        // TODO: 請求API伺服器刪除id為commentId的評論
        const response = await usersAPI.deleteComments({ commentId });
        console.log("delete:", response);

        // 觸發父層的事件-$emit( '事件名稱', '傳遞的資料' )
        this.$emit("after-delete-comment", commentId);
        this.isProcessing = false;
      } catch (error) {
        this.isProcessing = false;
        Toast.fire({
          icon: "error",
          title: "現在無法刪除餐廳，請稍後再試",
        });
      }
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>