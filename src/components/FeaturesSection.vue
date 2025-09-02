<script setup lang="ts">
import {
  SparklesIcon,
  LinkIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  CloudIcon,
  BoltIcon
} from '@heroicons/vue/24/outline'

interface Feature {
  icon: any
  title: string
  description: string
  link?: string
}

const features: Feature[] = [
  {
    icon: SparklesIcon,
    title: 'Automatic Code Generation',
    description: 'Generate complete structures with models, services, controllers, and tests from simple field definitions. No boilerplate, just results.'
  },
  {
    icon: LinkIcon,
    title: 'Smart Relationship Detection',
    description: 'Fields ending with _id automatically create GORM relationships. Support for belongs_to, has_many, has_one, and many-to-many relationships.'
  },
  {
    icon: CubeTransparentIcon,
    title: 'Modular Architecture',
    description: 'HMVC pattern with dependency injection. Each structure is self-contained with its own controllers, services, and models.'
  },
  {
    icon: DocumentTextIcon,
    title: '15+ Built-in Core Structures',
    description: 'Authentication, authorization, storage, email, websockets, scheduler, translation, and more. Everything you need for production APIs.'
  },
  {
    icon: CloudIcon,
    title: 'Multi-Cloud Storage',
    description: 'Built-in support for local, AWS S3, and Cloudflare R2 storage with automatic file type validation and event emission.'
  },
  {
    icon: BoltIcon,
    title: 'High Performance',
    description: 'Zero-dependency HTTP router with radix tree routing, built-in middleware, and optimized for speed and efficiency.'
  }
]
</script>

<template>
  <section id="features" class="py-20 sm:py-32 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Everything You Need
          <span class="block text-blue-600 dark:text-blue-400">Out of the Box</span>
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Base combines the power of Go with intelligent code generation, modern development practices, 
          and production-ready features that scale with your team.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.title"
          class="group relative p-8 bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
          :class="{ 'cursor-pointer': feature.link }"
          :style="{ animationDelay: `${index * 100}ms` }"
         >
          <!-- Gradient Background -->
          <div class="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <!-- Icon -->
          <div class="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
            <component :is="feature.icon" class="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          
          <!-- Content -->
          <div class="relative">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ feature.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
          
          <!-- Hover Effect -->
          <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600/5 to-indigo-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div class="text-center mt-16">
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Ready to experience the fastest way to build Go APIs?
        </p>
        <a
          href="#get-started"
          class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Start Building Now
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>