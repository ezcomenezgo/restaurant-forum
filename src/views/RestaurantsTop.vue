<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">人氣餐廳</h1>

    <hr />

    <RestaurantsTopCard
      v-for="restaurant in topRestaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import RestaurantsTopCard from "../components/RestaurantsTopCard";

const dummyData = {
  restaurants: [
    {
      id: 13,
      name: "Arvel Boehm",
      tel: "1-747-219-7889 x2070",
      address: "605 Pouros Terrace",
      opening_hours: "08:00",
      description: "Perferendis ut sed velit quaerat voluptatem ea qui",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=45.572223030594074",
      viewCounts: 3,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-02-12T09:17:57.000Z",
      CategoryId: 4,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$IgMneSD6HZiHt0C6we./cOPyq70YhAWNZEqC4YTtJHK8ejgS1J/3q",
          isAdmin: false,
          image: null,
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2020-12-15T06:35:43.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 13,
            createdAt: "2020-03-30T01:34:36.000Z",
            updatedAt: "2020-03-30T01:34:36.000Z",
          },
        },
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
          Favorite: {
            UserId: 2,
            RestaurantId: 13,
            createdAt: "2020-11-30T05:37:00.000Z",
            updatedAt: "2020-11-30T05:37:00.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 13,
            createdAt: "2021-01-10T15:11:37.000Z",
            updatedAt: "2021-01-10T15:11:37.000Z",
          },
        },
        {
          id: 7,
          name: "123",
          email: "ben7152000@gmail.com",
          password:
            "$2a$10$gEUc6f3gn62yaOuq89gQLeUr4FbzGkVyMegUmbvPLEMi4Co76LXni",
          isAdmin: false,
          image: null,
          createdAt: "2021-02-12T09:16:05.000Z",
          updatedAt: "2021-02-12T09:16:05.000Z",
          Favorite: {
            UserId: 7,
            RestaurantId: 13,
            createdAt: "2021-02-12T09:17:13.000Z",
            updatedAt: "2021-02-12T09:17:13.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 4,
    },
    {
      id: 26,
      name: "Carson Collins",
      tel: "471-440-3141",
      address: "1632 Marietta Summit",
      opening_hours: "08:00",
      description: "aut",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=64.4841358103108",
      viewCounts: 8,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-10T17:37:30.000Z",
      CategoryId: 5,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 2,
            RestaurantId: 26,
            createdAt: "2020-04-17T04:35:49.000Z",
            updatedAt: "2020-04-17T04:35:49.000Z",
          },
        },
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$IgMneSD6HZiHt0C6we./cOPyq70YhAWNZEqC4YTtJHK8ejgS1J/3q",
          isAdmin: false,
          image: null,
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2020-12-15T06:35:43.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 26,
            createdAt: "2020-07-15T19:27:21.000Z",
            updatedAt: "2020-07-15T19:27:21.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 26,
            createdAt: "2021-01-08T18:44:40.000Z",
            updatedAt: "2021-01-08T18:44:40.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 3,
    },
    {
      id: 12,
      name: "Merl Wolf",
      tel: "1-848-603-6470 x7813",
      address: "0233 Lura Bridge",
      opening_hours: "08:00",
      description: "Facilis aspernatur sint odit deleniti et.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=70.10281112790923",
      viewCounts: 0,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2020-12-15T06:35:43.000Z",
      CategoryId: 5,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 12,
            createdAt: "2020-12-13T17:40:10.000Z",
            updatedAt: "2020-12-13T17:40:10.000Z",
          },
        },
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
          Favorite: {
            UserId: 2,
            RestaurantId: 12,
            createdAt: "2021-01-23T12:31:47.000Z",
            updatedAt: "2021-01-23T12:31:47.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 10,
      name: "Eulalia Schoen",
      tel: "301.236.0532",
      address: "5595 Golden Turnpike",
      opening_hours: "08:00",
      description: "Aut sequi rerum ad ipsum ea et velit cumque. Qui d",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=86.12063922584056",
      viewCounts: 2,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-09T16:19:05.000Z",
      CategoryId: 4,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 2,
            RestaurantId: 10,
            createdAt: "2020-11-30T05:37:06.000Z",
            updatedAt: "2020-11-30T05:37:06.000Z",
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
          Favorite: {
            UserId: 1,
            RestaurantId: 10,
            createdAt: "2020-12-13T17:39:56.000Z",
            updatedAt: "2020-12-13T17:39:56.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 2,
    },
    {
      id: 20,
      name: "Kaleigh Predovic",
      tel: "681-366-1294 x013",
      address: "351 Bonnie Underpass",
      opening_hours: "08:00",
      description: "omnis",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=31.978313952200253",
      viewCounts: 3,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-24T06:09:18.000Z",
      CategoryId: 5,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 1,
            RestaurantId: 20,
            createdAt: "2021-01-24T06:09:04.000Z",
            updatedAt: "2021-01-24T06:09:04.000Z",
          },
        },
      ],
      isFavorited: true,
      FavoriteCount: 1,
    },
    {
      id: 14,
      name: "Maud Quitzon",
      tel: "1-381-928-4146 x7139",
      address: "4710 Turcotte Falls",
      opening_hours: "08:00",
      description: "rerum ipsa sint",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=24.63607690617653",
      viewCounts: 6,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-08T18:27:35.000Z",
      CategoryId: 2,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 2,
            RestaurantId: 14,
            createdAt: "2021-01-23T12:41:32.000Z",
            updatedAt: "2021-01-23T12:41:32.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 11,
      name: "April Romaguera",
      tel: "1-821-165-9840 x63700",
      address: "7071 Jackson Knolls",
      opening_hours: "08:00",
      description: "Quo expedita perferendis sint quae voluptatem libe",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=68.6707359779192",
      viewCounts: 9,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-01-09T15:28:07.000Z",
      CategoryId: 1,
      FavoritedUsers: [
        {
          id: 3,
          name: "user2",
          email: "user2@example.com",
          password:
            "$2a$10$IgMneSD6HZiHt0C6we./cOPyq70YhAWNZEqC4YTtJHK8ejgS1J/3q",
          isAdmin: false,
          image: null,
          createdAt: "2020-12-15T06:35:43.000Z",
          updatedAt: "2020-12-15T06:35:43.000Z",
          Favorite: {
            UserId: 3,
            RestaurantId: 11,
            createdAt: "2020-07-15T05:40:21.000Z",
            updatedAt: "2020-07-15T05:40:21.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 8,
      name: "Louisa Cummerata MD",
      tel: "1-734-755-5111 x47387",
      address: "6622 Johnson Wall",
      opening_hours: "08:00",
      description: "Nostrum magni sit.",
      image:
        "https://loremflickr.com/320/240/restaurant,food/?random=32.944417729082055",
      viewCounts: 11,
      createdAt: "2020-12-15T06:35:43.000Z",
      updatedAt: "2021-02-12T13:01:05.000Z",
      CategoryId: 5,
      FavoritedUsers: [
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
          Favorite: {
            UserId: 2,
            RestaurantId: 8,
            createdAt: "2021-01-23T12:44:12.000Z",
            updatedAt: "2021-01-23T12:44:12.000Z",
          },
        },
      ],
      isFavorited: false,
      FavoriteCount: 1,
    },
    {
      id: 3227,
      name: "test Name",
      tel: "12345678",
      address: "test Address",
      opening_hours: "01:00",
      description: "test Description",
      image: null,
      viewCounts: 0,
      createdAt: "2021-02-05T07:25:57.000Z",
      updatedAt: "2021-02-05T07:25:57.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
    {
      id: 3222,
      name: "123",
      tel: "",
      address: "",
      opening_hours: "",
      description: "",
      image: null,
      viewCounts: 0,
      createdAt: "2021-01-24T08:29:02.000Z",
      updatedAt: "2021-01-24T08:29:02.000Z",
      CategoryId: 5,
      FavoritedUsers: [],
      isFavorited: false,
      FavoriteCount: 0,
    },
  ],
};

export default {
  components: {
    NavTabs,
    RestaurantsTopCard,
  },
  data() {
    return {
      topRestaurants: [],
    };
  },
  created() {
    this.fetchTopRestaurants();
  },
  methods: {
    fetchTopRestaurants() {
      this.topRestaurants = dummyData.restaurants;
    },
  },
};
</script>