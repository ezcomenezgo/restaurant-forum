import { apiHelper } from '../utils/helper'

export default {
  // 帶入需要的參數
  signIn({ email, password }) {
    // 這裡的return的會是一個promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  },
  signUp({
    name, email, password, passwordCheck
   }) {
    return apiHelper.post('/signup', {name, email, password, passwordCheck})
  }
}