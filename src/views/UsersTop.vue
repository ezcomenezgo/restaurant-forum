<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">美食達人</h1>
    <hr />

    <div class="row text-center">
      <!-- users card -->
      <!-- 原本是在usersCard裡面用v-for迭代資料，但這樣是傳一整個users的陣列進去，要讀取Followers的陣列長度時就會出錯，需在view的父層先把users的陣列切割好再傳入usersCard裡面，才不會導致無法讀取length -->
      <UsersCard v-for="user in users" :key="user.id" :initial-user="user" />
    </div>

    <!-- user pagination -->
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import UsersCard from "../components/UsersCard";
import usersAPI from "../apis/users"
import { Toast } from "../utils/helper"

export default {
  components: {
    NavTabs,
    UsersCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        console.log('data', data)
        this.users = data.users;
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '不能取得美食達人資料，請稍後再試'
        })
      }
      
    },
  },
};
</script>