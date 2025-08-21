<script setup lang="ts">
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()

</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <nav class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-primary-600 dark:text-primary-400">
            <img src="@/assets/base.svg" alt="Base" class="w-24 h-24">
          </router-link>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <a href="/#features"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Features
          </a>
          <router-link to="/docs"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            Documentation
          </router-link>
         
          <a href="https://github.com/BaseTechStack/basecmd" target="_blank"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            GitHub
          </a>
        </div>

        <div class="flex items-center space-x-4">
          <UButton :icon="colorMode === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun'" color="neutral" variant="ghost"
            @click="colorMode = colorMode === 'dark' ? 'light' : 'dark'" />

          <a href="https://github.com/BaseTechStack/basecmd" target="_blank"
            class="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>