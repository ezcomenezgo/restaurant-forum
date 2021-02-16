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

const dummyData = {
  users: [
    {
      id: 2,
      name: "user1",
      email: "user1@example.com",
      password: "$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG",
      isAdmin: false,
      image: "https://i.imgur.com/PhcKzNf.jpeg",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-15T17:07:09.000Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG",
          isAdmin: false,
          image: "https://i.imgur.com/PhcKzNf.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-15T17:07:09.000Z",
          Followship: {
            followerId: 2,
            followingId: 2,
            createdAt: "2020-12-13T03:37:28.000Z",
            updatedAt: "2020-12-13T03:37:28.000Z",
          },
        },
        {
          id: 1,
          name: "roo00t",
          email: "root@example.com",
          password:
            "$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm",
          isAdmin: true,
          image: "https://i.imgur.com/3keAGHT.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-14T16:20:50.000Z",
          Followship: {
            followerId: 1,
            followingId: 2,
            createdAt: "2021-01-12T18:29:54.000Z",
            updatedAt: "2021-01-12T18:29:54.000Z",
          },
        },
      ],
      FollowerCount: 2,
      isFollowed: true,
    },
    {
      id: 1,
      name: "roo00t",
      email: "root@example.com",
      password: "$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm",
      isAdmin: true,
      image: "https://i.imgur.com/3keAGHT.jpeg",
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-14T16:20:50.000Z",
      Followers: [
        {
          id: 1,
          name: "roo00t",
          email: "root@example.com",
          password:
            "$2a$10$jBS/Y4.hceDXkEC5y9ZGne81Y7i5wNwNcy6wAKjNdBykCzlEfWmLm",
          isAdmin: true,
          image: "https://i.imgur.com/3keAGHT.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-14T16:20:50.000Z",
          Followship: {
            followerId: 1,
            followingId: 1,
            createdAt: "2021-01-05T17:22:26.000Z",
            updatedAt: "2021-01-05T17:22:26.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: true,
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      password: "$2a$10$IgMneSD6HZiHt0C6we./cOPyq70YhAWNZEqC4YTtJHK8ejgS1J/3q",
      isAdmin: false,
      image: null,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      Followers: [
        {
          id: 2,
          name: "user1",
          email: "user1@example.com",
          password:
            "$2a$10$m11qLlDOol1b3XCa393Bwe.hW4mt/6DS.mUsgFtati5LW4BbX81EG",
          isAdmin: false,
          image: "https://i.imgur.com/PhcKzNf.jpeg",
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2021-01-15T17:07:09.000Z",
          Followship: {
            followerId: 2,
            followingId: 3,
            createdAt: "2020-12-13T03:37:29.000Z",
            updatedAt: "2020-12-13T03:37:29.000Z",
          },
        },
      ],
      FollowerCount: 1,
      isFollowed: false,
    },
    {
      id: 7,
      name: "123",
      email: "ben7152000@gmail.com",
      password: "$2a$10$gEUc6f3gn62yaOuq89gQLeUr4FbzGkVyMegUmbvPLEMi4Co76LXni",
      isAdmin: false,
      image: null,
      createdAt: "2021-02-12T09:16:05.000Z",
      updatedAt: "2021-02-12T09:16:05.000Z",
      Followers: [],
      FollowerCount: 0,
      isFollowed: false,
    },
  ],
};

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
    fetchUsers() {
      this.users = dummyData.users;
    },
  },
};
</script>