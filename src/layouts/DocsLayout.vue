<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">
    <!-- Header -->
    <TheHeader />

    <!-- Main layout -->
    <div class="flex">
      <!-- Sidebar -->
      <div class="fixed left-0 top-16  h-[calc(100vh-4rem)] w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-scroll">
        <div class="p-6 ">
          <TheSidebar />
        </div>
      </div>

      <!-- Main content -->
      <div class="flex-1 ml-64">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheSidebar from '@/components/TheSidebar.vue'
</script>