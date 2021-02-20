<template>
  <div class="container py-5">
    <form @submit.prevent.stop="handleSubmit">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          id="name"
          v-model="user.name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        />
      </div>

      <div class="form-group">
        <label for="image">{{ user.image }}</label>
        <img
          :src="user.image"
          class="d-block img-thumbnail mb-3"
          width="200"
          height="200"
          alt=""
        />
        <input
          id="image"
          type="file"
          name="name"
          accept="image/*"
          class="form-control-file"
          @change="handleFileChange"
        />
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    initialUser: {
      type: Object,
      default: () => ({
        name: "",
        image: "",
      }),
    },
  },
  data() {
    return {
      user: {
        name: "",
        image: "",
      },
    };
  },
  created() {
    this.user = {
      ...this.user,
      ...this.initialUser,
    };
  },
  methods: {
    handleFileChange(e) {
      const files = e.target.files;
      if (files.length === 0) {
        // 使用者沒有選擇上傳的檔案
        this.user.image = "";
      } else {
        // 否則產生預覽圖
        const imageURL = window.URL.createObjectURL(files[0]);
        this.user.image = imageURL;
      }
    },
    handleSubmit(e) {
      const form = e.target;
      const formData = new FormData(form);
      this.$emit("after-submit", formData);
    },
  },
};
</script>