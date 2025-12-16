import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/services/api'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('authToken') || null)
  const role = ref(localStorage.getItem('userRole') || null)

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  const setAuth = (userData, authToken, userRole) => {
    user.value = userData
    token.value = authToken
    role.value = userRole

    localStorage.setItem('authToken', authToken)
    localStorage.setItem('userRole', userRole)
  }

  const login = async (email, password) => {
    try {
      const { data } = await api.post('/auth/login', { email, password })
      setAuth(data.user, data.token, data.user.role)
      return { success: true, user: data.user }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Login failed'
      }
    }
  }

  const register = async (userData) => {
    try {
      const { data } = await api.post('/auth/register', userData)
      setAuth(data.user, data.token, data.user.role)
      return { success: true, user: data.user }
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Registration failed'
      }
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    role.value = null

    localStorage.removeItem('authToken')
    localStorage.removeItem('userRole')
  }

  const checkAuth = () => {
    return isAuthenticated.value
  }

  return {
    user,
    token,
    role,
    isAuthenticated,
    login,
    register,
    logout,
    checkAuth,
    setAuth
  }
})
