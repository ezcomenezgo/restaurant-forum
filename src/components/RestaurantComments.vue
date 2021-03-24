<template>
  <div>
    <h2 class="my-4">所有評論：</h2>

    <div v-for="comment in restaurantComments" :key="comment.id">
      <blockquote class="blockquote mb-0">
        <button
          type="button"
          v-if="currentUser.isAdmin"
          @click.prevent.stop="handleDeleteButtonClick(comment.id)"
          class="btn btn-danger float-right"
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
import { mapState } from "vuex"


export default {
  name: "restaurantComments",
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log("handDeleteButtonClick", commentId);
      // TODO: 請求API伺服器刪除id為commentId的評論
      // 觸發父層的事件-$emit( '事件名稱', '傳遞的資料' )
      this.$emit("after-delete-comment", commentId);
    },
  },
  computed: {
    ...mapState(["currentUser"])
  }
};
</script>