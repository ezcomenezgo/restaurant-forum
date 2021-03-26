import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from "../apis/users"

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
    isAuthenticated: false,
    token: ''
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將API 取得的currentUer覆蓋掉Vuex state中的currentUser
        ...currentUser
      }
      // 將使用者驗證用的token存在state中
      state.token = localStorage.getItem('token')
      // 將使用者的登入狀態改為true
      state.isAuthenticated =true
    },
    revokeAuthentication(state) {
      state.currentUser = {}
      state.isAuthenticated = false
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    // 在action中可以透過參數的方式取得commit的方法
    async fetchCurrentUser({ commit }) {
      try {
        // 呼叫usersAPI.getCurrentUser()方法，並將response顯示出來
        const { data } = await usersAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data 
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

        return true
      } catch(error) {
        console.log('error', error)
        commit('revokeAuthentication')
        return false
      }
    }
  },
  modules: {
  }
})
