<template>
  <div class="container py-5">
    <!-- 餐廳表單 AdminRestaurantForm -->
    <AdminRestaurantForm @after-submit="handleAfterSubmit"
    :is-processing = "isProcessing"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from "../components/AdminRestaurantForm";
import adminAPI from "../apis/admin"
import { Toast } from "../utils/helper"

export default {
  components: {
    AdminRestaurantForm,
  },
  data() {
    return{
      isProcessing: false
    }
  },
  methods: {
    // 串API step2 改成async...await語法
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        // 串API step3 透過restaurants.create方法像伺服器建立餐廳
        const { data } = await adminAPI.restaurants.create({ formData })

        if(data.status !== 'success') {
          throw new Error(data.message)
        }
        
        // for (let [name, value] of formData.entries()) {
        //   console.log(name + ":" + value);
        // }
        // 串API step4 成功的話則轉址到'/admin/restaurants'
        this.$router.push({ name: 'admin-restaurants' })
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳，請稍後再試'
        })
      }
      
    },
  },
};
</script>