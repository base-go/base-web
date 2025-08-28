<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Architecture</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Understanding Base Framework's modular architecture and design patterns.
        </p>
      </div>
      
      <div class="space-y-12">
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Framework Overview</h2>
          
          <UAlert 
            color="blue" 
            variant="soft" 
            title="HMVC Architecture" 
            description="Base Framework follows a Hierarchical Model-View-Controller pattern with centralized model management to prevent circular dependencies."
            class="mb-6"
          />
          
          <div class="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Base Framework is designed around modularity, performance, and developer experience. 
              The architecture promotes clean separation of concerns while maintaining simplicity.
            </p>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core Components</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-folder" class="h-5 w-5 text-primary-500" />
                  <h3 class="font-semibold">Model Layer</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  All models in <UKbd>app/models/</UKbd> directory for clean imports and dependency management.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• GORM-based with automatic migrations</li>
                  <li>• Smart relationship detection</li>
                  <li>• Built-in validation and hooks</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-box" class="h-5 w-5 text-primary-500" />
                  <h3 class="font-semibold">Module System</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Self-contained modules in <UKbd>app/&lt;module_name&gt;/</UKbd> directories.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Controller, Service, Module files</li>
                  <li>• Dependency injection support</li>
                  <li>• Auto-registration system</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-cpu" class="h-5 w-5 text-primary-500" />
                  <h3 class="font-semibold">Core Framework</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Zero-dependency core systems in <UKbd>core/</UKbd> directory.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• HTTP Router with radix tree</li>
                  <li>• Event system and middleware</li>
                  <li>• Storage and database layers</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-layers" class="h-5 w-5 text-primary-500" />
                  <h3 class="font-semibold">CLI Tools</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Powerful code generation and development tools.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Template-based generation</li>
                  <li>• Hot reload development</li>
                  <li>• Project scaffolding</li>
                </ul>
              </div>
            </UCard>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Request Lifecycle</h2>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UBadge color="blue" size="sm">1</UBadge>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">HTTP Request</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Incoming request hits the radix tree router</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UBadge color="blue" size="sm">2</UBadge>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Middleware Chain</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Authentication, logging, rate limiting, and custom middleware</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UBadge color="blue" size="sm">3</UBadge>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Controller Action</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Route handler processes the request</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UBadge color="blue" size="sm">4</UBadge>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Service Layer</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Business logic and data processing</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UBadge color="blue" size="sm">5</UBadge>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">Model Operations</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Database models for GORM auto-migrations</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <UBadge color="green" size="sm">6</UBadge>
              <div>
                <h4 class="font-medium text-gray-900 dark:text-white">JSON Response</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">Structured response with proper HTTP status codes</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Design Principles</h2>
          
          <div class="grid gap-4">
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-yellow-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Convention over Configuration</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Sensible defaults that reduce boilerplate while remaining flexible for customization.
                  </p>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-puzzle" class="h-5 w-5 text-blue-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Modular Architecture</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Self-contained modules that can be developed, tested, and maintained independently.
                  </p>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-shield-check" class="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Type Safety</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Strong typing throughout the framework leveraging Go's type system for reliability.
                  </p>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-gauge" class="h-5 w-5 text-purple-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Performance First</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Zero-dependency core with optimized routing and minimal memory allocation.
                  </p>
                </div>
              </div>
            </UCard>
          </div>
        </section>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
</script>