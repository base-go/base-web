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
    description: 'Generate complete modules with models, services, controllers, and tests from simple field definitions. No boilerplate, just results.'
  },
  {
    icon: LinkIcon,
    title: 'Smart Relationship Detection',
    description: 'Fields ending with _id automatically create GORM relationships. Support for belongs_to, has_many, has_one, and many-to-many relationships.'
  },
  {
    icon: CubeTransparentIcon,
    title: 'Modular Architecture',
    description: 'HMVC pattern with dependency injection. Each module is self-contained with its own controllers, services, and models.'
  },
  {
    icon: DocumentTextIcon,
    title: 'OpenAPI 3.0 Documentation',
    description: 'Automatic Swagger documentation generation with detailed parameter information and response schemas.'
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
  <section id="features" class="py-20 sm:py-32 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Why Choose Base?
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Base combines the power of Go with intelligent code generation and modern development practices
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg"
          :class="{ 'cursor-pointer': feature.link }"
          @click="feature.link && window.open(feature.link, '_blank')"
        >
          <div class="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl mb-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors">
            <component :is="feature.icon" class="w-6 h-6 text-primary-600 dark:text-primary-400" />
          </div>
          
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            {{ feature.title }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ feature.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>