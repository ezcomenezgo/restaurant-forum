<template>
  <div class="container py-5">
    <AdminRestaurantForm
      @after-submit="handleAfterSubmit"
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "./../components/AdminRestaurantForm.vue";
// STEP 1: 載入 adminAPI 和 Toast
import adminAPI from './../apis/admin'
import { Toast } from './../utils/helper'


export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: "",
        categoryId: "",
        tel: "",
        address: "",
        description: "",
        image: "",
        openingHours: "",
      },
      isProcessing: false
    };
  },
  created() {
    const { id } = this.$route.params;
    this.fetchRestaurant(id);
  },
  beforeRouteUpdate(to, from, next) {
    // 路由改變時重新抓取資料
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({
          restaurantId: this.restaurant.id, formData
        })

        if(data.status !== 'success'){
          throw new Error(data.message)
        }

        this.$router.push({ name: 'admin-restaurants' })
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon:'error',
          title: '無法更新餐廳，請稍候再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })

        // STEP 3: 透過解構賦值將需要的資料取出
        // console.log('data', data)
        const {
          id,
          name,
          tel,
          address,
          opening_hours: openingHours,
          description,
          image,
          CategoryId: categoryId
        } = data.restaurant
        this.restaurant = {
        ...this.restaurant,
        id,
        name,
        categoryId,
        tel,
        address,
        description,
        image,
        openingHours,
      };
      } catch(error) {
        //  STEP 5: 錯誤處理
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
      }
    },
  },
};
</script>