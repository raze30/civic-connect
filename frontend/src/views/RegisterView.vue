<template>
  <div class="min-h-screen flex items-center justify-center bg-neutral-0 dark:bg-neutral-9">
    <div class="w-full max-w-md">
      <h1 class="text-3xl font-bold text-center mb-8">Register</h1>
      <form @submit.prevent="handleRegister" class="space-y-4">
        <input
          v-model="name"
          type="text"
          placeholder="Full Name"
          class="w-full px-4 py-2 border border-neutral-3 rounded-lg dark:bg-neutral-8 dark:border-neutral-7"
        />
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
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          class="w-full px-4 py-2 border border-neutral-3 rounded-lg dark:bg-neutral-8 dark:border-neutral-7"
        />
        <button
          type="submit"
          class="w-full py-2 bg-accent-blue text-white rounded-lg hover:opacity-90"
        >
          Register
        </button>
      </form>
      <p class="text-center mt-4">
        Already have an account?
        <RouterLink to="/login" class="text-accent-blue hover:underline">
          Login
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

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = async () => {
  if (!name.value || !email.value || !password.value || !confirmPassword.value) {
    toast.error('Please fill in all fields')
    return
  }

  if (password.value !== confirmPassword.value) {
    toast.error('Passwords do not match')
    return
  }

  const result = await authStore.register({
    name: name.value,
    email: email.value,
    password: password.value
  })

  if (result.success) {
    toast.success('Registration successful!')
    router.push('/verify-email')
  } else {
    toast.error(result.error)
  }
}
</script>
