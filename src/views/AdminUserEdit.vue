<template>
  <div class="container py-5">
    <!-- 使用者表單 AdminRestaurantForm -->
    <AdminUserForm :initial-user="user" @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminUserForm from "../components/AdminUserForm";

const dummyData = {
  user: {
    id: 2,
    name: "user1",
    image: "https://i.imgur.com/PhcKzNf.jpeg",
  },
};

export default {
  components: {
    AdminUserForm,
  },
  data() {
    return {
      user: {
        id: "",
        name: "",
        image: "",
      },
    };
  },
  created() {
    const id = this.$route.params.id;
    this.fetchUser(id);
  },
  methods: {
    fetchUser(UserId) {
      console.log("fetchUserId", UserId);
      const user = dummyData.user;
      this.user = {
        ...this.user,
        id: user.id,
        name: user.name,
        image: user.image,
      };
    },
    handleAfterSubmit(formData) {
      for (let [name, value] of formData.entries()) {
        console.log(name + ": " + value);
      }
    },
  },
};
</script>