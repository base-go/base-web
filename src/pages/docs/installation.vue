<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Installation</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Get started with Base Framework by installing the CLI tool on your system.
        </p>
      </div>
      
      <InstallationSection />
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
import InstallationSection from '@/components/docs/InstallationSection.vue'
</script>