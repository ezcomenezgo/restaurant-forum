<template>
  <!-- 提交表單的動作是發生在form標籤而不是button -->
  <form @submit.prevent.stop="handleSubmit">
    <div class="form-group mb-4">
      <label for="text">留下評論：</label>
      <textarea v-model="text" class="form-control" rows="3" name="text" />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button type="button" class="btn btn-link" @click="$router.back()">
        回上一頁
      </button>
      <button type="submit" class="btn btn-primary mr-0">Submit</button>
    </div>
  </form>
</template>

<script>
import usersAPI from '../apis/users';
import { Toast } from '../utils/helper';
import { mapState } from "vuex"

export default {
  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      text: '',
    };
  },
  methods: {
    async handleSubmit() {
      // TODO: 向API發送POST請求
      try {
        if (!this.text) {
          Toast.fire({
            icon: 'warning',
            title: '您尚未填寫任何回覆',
          });
        }
        const { data } = await usersAPI.createComments({
          Restaurant: {
            id: this.restaurant.id,
            name: this.restaurant.name
          },
          text: this.text,
          User: {
            id: this.currentUser.id,
            name: this.currentUser.name,
          },
        });
        console.log(data)
        if (data.status !== 'success') {
          throw new Error(data.message);
        }

        // 伺服器新增comment 成功後...
        this.$emit('after-create-comment', {
          commentId: data.commentId , // 尚未串接API暫時使用隨機的id
          restaurant: this.restaurant,
          text: this.text,
        });
        this.text = ''; //清空表單內的資料
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍候再試',
        });
      }
    },
  },
  computed: {
    ...mapState( ['currentUser'])
  }
};
</script>
