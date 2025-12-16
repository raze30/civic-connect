<template>
  <div class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-6xl font-bold mb-4">403</h1>
      <p class="text-xl text-neutral-5 mb-6">Access forbidden</p>
      <RouterLink to="/" class="text-accent-blue hover:underline">
        Go back home
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
