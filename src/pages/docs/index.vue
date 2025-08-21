<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-12">
        <h1 class="text-5xl font-bold text-gray-900 dark:text-white mb-6">Base Framework Documentation</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A modern Go web framework for rapid development with powerful CLI tools, 
          modular architecture, and zero-dependency core systems.
        </p>
        
        <div class="flex space-x-4">
          <router-link to="/docs/installation">
            <UButton size="lg" icon="i-lucide-download">
              Get Started
            </UButton>
          </router-link>
          
          <router-link to="/docs/tutorial">
            <UButton size="lg" variant="outline" icon="i-lucide-book-open">
              Tutorial
            </UButton>
          </router-link>
        </div>
      </div>
      
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <router-link to="/docs/installation" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-download" class="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">Installation</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Install Base CLI and set up your development environment.</p>
          </UCard>
        </router-link>

        <router-link to="/docs/quick-start" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-rocket" class="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">Quick Start</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Create your first Base project in minutes.</p>
          </UCard>
        </router-link>

        <router-link to="/docs/tutorial" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-book-open" class="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">Blog Tutorial</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Build a complete blog application step by step.</p>
          </UCard>
        </router-link>

        <router-link to="/docs/architecture" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-building" class="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">Architecture</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Understand the modular HMVC architecture.</p>
          </UCard>
        </router-link>

        <router-link to="/docs/structure" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-folder-tree" class="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">Directory Structure</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Project layout and file naming conventions.</p>
          </UCard>
        </router-link>

        <router-link to="/docs/cli" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-terminal" class="h-5 w-5 text-red-600 dark:text-red-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">CLI Reference</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Complete command reference and generators.</p>
          </UCard>
        </router-link>

        <router-link to="/docs/api" class="group">
          <UCard class="hover:shadow-lg transition-shadow duration-200">
            <template #header>
              <div class="flex items-center space-x-3">
                <div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center">
                  <UIcon name="i-lucide-globe" class="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600">REST API</h3>
              </div>
            </template>
            <p class="text-gray-600 dark:text-gray-300">Learn about auto-generated REST endpoints.</p>
          </UCard>
        </router-link>
      </div>

      <div class="mt-16">
        <UAlert 
          color="blue" 
          variant="soft" 
          title="Framework Highlights" 
          description="Zero-dependency core, HMVC architecture, powerful code generation, built-in hot reload, and comprehensive testing support."
        />
      </div>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
</script>