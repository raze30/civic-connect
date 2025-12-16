<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-0 dark:bg-neutral-9">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8">Login</h1>
      <form @submit.prevent="handleLogin" class="space-y-4">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          class="w-full px-4 py-2 border border-neutral-3 rounded-lg dark:bg-neutral-8 dark:border-neutral-7"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="w-full px-4 py-2 border border-neutral-3 rounded-lg dark:bg-neutral-8 dark:border-neutral-7"
        />
        <button
          type="submit"
          class="w-full py-2 bg-accent-blue text-white rounded-lg hover:opacity-90"
        >
          Login
        </button>
      </form>
      <p class="text-center mt-4">
        Don't have an account?
        <RouterLink to="/register" class="text-accent-blue hover:underline">
          Register
        </RouterLink>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useToast } from 'vue-toastification'
import { RouterLink } from 'vue-router'

const router = useRouter()
const authStore = useAuthStore()
const toast = useToast()

const email = ref('')
const password = ref('')

const handleLogin = async () => {
  if (!email.value || !password.value) {
    toast.error('Please fill in all fields')
    return
  }

  const result = await authStore.login(email.value, password.value)
  if (result.success) {
    toast.success('Login successful!')
    router.push('/dashboard')
  } else {
    toast.error(result.error)
  }
}
</script>
