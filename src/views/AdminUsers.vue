<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />

    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Email</th>
          <th scope="col">Role</th>
          <th scope="col" width="140">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
          <template>
            <td v-if="user.isAdmin">Admin</td>
            <td v-else>User</td>
          </template>
          <td>
            <template v-if="currentUser.id !== user.id">
              <button
                v-if="user.isAdmin"
                type="button"
                @click.prevent.stop="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
                class="btn btn-link"
              >
                set as user
              </button>
              <button
                v-else
                type="button"
                @click.prevent.stop="toggleUserRole({userId: user.id, isAdmin: user.isAdmin})"
                class="btn btn-link"
              >
                set as admin
              </button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AdminNav from "./../components/AdminNav";
import adminAPI from "./../apis/admin";
import { Toast } from "./../utils/helper";

export default {
  components: {
    AdminNav,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    this.fetchUser();
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUser() {
      try {
        const { data, statusText } = await adminAPI.users.get();

        if (statusText !== "OK") {
          throw new Error(statusText);
        }

        this.users = data.users;
        console.log('users:', this.users)
      } catch (error) {
        Toast.fire({
          type: "error",
          title: "無法取得會員資料，請稍後再試",
        });
      }
    },

    async toggleUserRole({ userId, isAdmin }) {
      try {
        console.log('userId:', userId)
        const willBeAdmin = !isAdmin;
        const { data, statusText } = await adminAPI.users.update({
          userId,
          isAdmin: willBeAdmin.toString(),
        });
        if (statusText !== "OK" || data.status !== "success") {
          throw new Error(statusText);
        }
        this.users = this.users.map((user) => {
          if (user.id !== userId) {
            return user;
          }
          return {
            ...user,
            isAdmin: willBeAdmin,
          };
        });
        console.log('toggleUserRole:', data)
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "無法更新會員角色，請稍後再試",
        });
      }
      // toggleUserRole(userId) {
      //   this.users = this.users.map((user) => {
      //     if (user.id === userId) {
      //       return {
      //         ...user,
      //         isAdmin: !user.isAdmin,
      //       };
      //     }

      //     return user; // 忘記把user return回去只有打return而已，這樣會導致map遍歷過的物件無法正確傳回去
      //   });
      // },
    },
  },
};
</script>