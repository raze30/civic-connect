<template>
  <div class="flex flex-col min-h-screen bg-neutral-0 text-neutral-9">
    <!-- Navigation -->
    <nav class="sticky top-0 z-50 border-b border-neutral-2 bg-neutral-0">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <RouterLink to="/" class="flex items-center space-x-2">
            <h1 class="text-xl font-bold text-accent-blue">Civic Connect</h1>
          </RouterLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex space-x-6 items-center">
            <RouterLink
              to="/issues"
              active-class="text-accent-blue border-b-2 border-accent-blue"
              class="px-3 py-2 hover:text-accent-blue transition-colors"
            >
              Issues
            </RouterLink>
            <RouterLink
              to="/help"
              active-class="text-accent-blue border-b-2 border-accent-blue"
              class="px-3 py-2 hover:text-accent-blue transition-colors"
            >
              Help
            </RouterLink>

            <!-- Auth Links -->
            <template v-if="authStore.isAuthenticated">
              <RouterLink
                to="/dashboard"
                active-class="text-accent-blue border-b-2 border-accent-blue"
                class="px-3 py-2 hover:text-accent-blue transition-colors"
              >
                Dashboard
              </RouterLink>
              <RouterLink
                v-if="authStore.role === 'staff' || authStore.role === 'admin'"
                to="/staff/dashboard"
                active-class="text-accent-blue border-b-2 border-accent-blue"
                class="px-3 py-2 hover:text-accent-blue transition-colors"
              >
                Staff
              </RouterLink>
              <RouterLink
                v-if="authStore.role === 'admin'"
                to="/admin/dashboard"
                active-class="text-accent-blue border-b-2 border-accent-blue"
                class="px-3 py-2 hover:text-accent-blue transition-colors"
              >
                Admin
              </RouterLink>
              <RouterLink
                to="/profile"
                active-class="text-accent-blue border-b-2 border-accent-blue"
                class="px-3 py-2 hover:text-accent-blue transition-colors"
              >
                Profile
              </RouterLink>
              <button
                @click="handleLogout"
                class="px-4 py-2 bg-accent-red text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Logout
              </button>
            </template>
            <template v-else>
              <RouterLink
                to="/login"
                class="px-4 py-2 border border-accent-blue text-accent-blue rounded-lg hover:bg-accent-blue hover:text-white transition-colors"
              >
                Login
              </RouterLink>
              <RouterLink
                to="/register"
                class="px-4 py-2 bg-accent-blue text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Register
              </RouterLink>
            </template>
          </div>

          <!-- Mobile Menu Toggle -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden px-2 py-2 text-neutral-9"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden pb-4 space-y-2">
          <RouterLink to="/issues" class="block px-3 py-2 hover:text-accent-blue">
            Issues
          </RouterLink>
          <RouterLink to="/help" class="block px-3 py-2 hover:text-accent-blue">
            Help
          </RouterLink>
          <template v-if="authStore.isAuthenticated">
            <RouterLink to="/dashboard" class="block px-3 py-2 hover:text-accent-blue">
              Dashboard
            </RouterLink>
            <RouterLink to="/profile" class="block px-3 py-2 hover:text-accent-blue">
              Profile
            </RouterLink>
            <button
              @click="handleLogout"
              class="w-full text-left px-3 py-2 text-accent-red hover:opacity-90"
            >
              Logout
            </button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="block px-3 py-2 hover:text-accent-blue">
              Login
            </RouterLink>
            <RouterLink to="/register" class="block px-3 py-2 hover:text-accent-blue">
              Register
            </RouterLink>
          </template>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <RouterView />
    </main>

    <!-- Footer -->
    <footer class="border-t border-neutral-2 bg-neutral-1 py-8">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-neutral-5">
          &copy; 2025 Civic Connect. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

const authStore = useAuthStore()
const router = useRouter()
const toast = useToast()
const mobileMenuOpen = ref(false)

const handleLogout = () => {
  authStore.logout()
  toast.success('Logged out successfully')
  router.push('/')
  mobileMenuOpen.value = false
}
</script>

<style scoped>
:global(html) {
  @apply scroll-smooth;
}
</style>
