<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">REST API Reference</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Comprehensive guide to Base Framework's REST API patterns and endpoints.
        </p>
        
        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
          <div class="flex items-start space-x-3">
            <UIcon name="i-lucide-external-link" class="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
            <div>
              <h3 class="font-semibold text-blue-900 dark:text-blue-100 mb-1">Interactive API Documentation</h3>
              <p class="text-blue-700 dark:text-blue-300 text-sm mb-3">
                Explore and test your API endpoints with our auto-generated Swagger documentation.
              </p>
              <a 
                href="http://localhost:8100/swagger/" 
                target="_blank"
                class="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 font-medium"
              >
                <span>Open Swagger UI</span>
                <UIcon name="i-lucide-external-link" class="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <RestEndpointsSection />
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
import RestEndpointsSection from '@/components/docs/RestEndpointsSection.vue'
</script>