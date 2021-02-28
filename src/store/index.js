import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將API 取得的currentUer覆蓋掉Vuex state中的currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為true
      state.isAuthenticated =true
    }
  },
  actions: {
  },
  modules: {
  }
})
