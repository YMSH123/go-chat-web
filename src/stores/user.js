import { defineStore } from 'pinia'
import { loginAPI } from '@/apis/login'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({})
  const getUserInfo = async ({ email, password }) => {
    const res = await loginAPI({ email, password })
    userInfo.value = res.data
  }

  const clearUserInfo = async () => {
    userInfo.value = {}
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},
  {
    persist: true,
  },
)