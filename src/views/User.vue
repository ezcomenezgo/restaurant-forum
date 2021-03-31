<template>
  <div class="container">
    <div class="card mb-3">
      <!-- user's profile -->
      <UserProfileCard
        :initialUser="profile"
        :Comments="Comments"
        :FavoritedRestaurants="FavoritedRestaurants"
        :Followers="Followers"
        :Followings="Followings"
        :initialIsFollowed="isFollowed"
        :isCurrentUser="currentUser.id === profile.id"
      />
    </div>
    <div class="row">
      <div class="col-md-4">
        <!-- user's followings -->
        <UserFollowingsCard :followings="Followings" />

        <!-- user's followers -->
        <UserFollowersCard :followers="Followers" />
      </div>
      <div class="col-md-8">
        <!-- user's comments card -->
        <UserCommentsCard :userComments="Comments" />

        <!-- user's favorite restaurant card -->
        <UserFavoritedRestaurantCard
          :userFavoritedRestaurant="FavoritedRestaurants"
        />
      </div>
    </div>
  </div>
</template>


<script>
import UserProfileCard from "../components/UserProfileCard";
import UserFollowingsCard from "../components/UserFollowingsCard";
import UserFollowersCard from "../components/UserFollowersCard";
import UserCommentsCard from "../components/UserCommentsCard";
import UserFavoritedRestaurantCard from "../components/UserFavoritedRestaurantCard";
import usersAPI from "../apis/users";
import { Toast } from "../utils/helper";
import { mapState } from "vuex";

export default {
  components: {
    UserProfileCard,
    UserFollowingsCard,
    UserFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantCard,
  },

  data() {
    return {
      profile: {},
      Comments: [],
      FavoritedRestaurants: [],
      Followers: [],
      Followings: [],
      isFollowed: ''
    };
  },
  created() {
    const { id } = this.$route.params;
    console.log("id:", id);
    this.fetchUser(id);
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchUser(id);
    next();
  },
  methods: {
    async fetchUser(userId) {
      try {
        console.log("userId:", userId);
        const { data } = await usersAPI.get({ userId });
        console.log("fetchUser:", data);
        const { profile, isFollowed } = data;
        const {
          Comments,
          FavoritedRestaurants,
          Followers,
          Followings,
        } = profile;
        this.profile = profile;
        this.isFollowed = isFollowed;
        this.Comments = Comments;
        this.FavoritedRestaurants = FavoritedRestaurants;
        this.Followers = Followers;
        this.Followings = Followings;
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: "現在無法取得用戶資料，請稍後再試",
        });
      }
      //
      //
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>
