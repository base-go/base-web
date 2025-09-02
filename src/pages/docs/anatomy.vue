<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Anatomy & Architecture</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Understanding Base Framework's architecture, design patterns, and the structure entities it generates.
        </p>
      </div>
      
      <div class="space-y-12">
        <!-- Framework Overview -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Framework Overview</h2>
          
          <div class="mb-6">
            <UBadge color="info" variant="soft" size="sm">🏗️ Modular Architecture</UBadge>
            <p>
              Base Framework follows a modular architecture pattern with Controller-Service layers, providing a clean separation of concerns with dependency injection and hierarchical design.
            </p>
          </div>
        
          <UAlert color="success" variant="soft" class="mb-6">
            <template #title>📦 What are Structures?</template>
            <template #description>
              In Base Framework, a "structure" is a complete, self-contained unit that includes a model, service, controller, and all necessary files for a specific entity (like User, Post, Product). When you run `base g User name:string email:string`, you're generating a User structure that contains everything needed for CRUD operations, validation, and API endpoints.
            </template>
          </UAlert>
    
          <div class="grid gap-6 md:grid-cols-2 mb-8">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-layers" class="h-5 w-5 text-blue-500" />
                  <h3 class="font-semibold">Core Layer (@base/core)</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The foundation that powers your application with essential services.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• HTTP Router & Middleware</li>
                  <li>• Database Connection (GORM)</li>
                  <li>• Event System (Emitter)</li>
                  <li>• Storage (Local, S3, R2)</li>
                  <li>• Email Services</li>
                  <li>• Authentication & Authorization</li>
                  <li>• Logging & Error Handling</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-package" class="h-5 w-5 text-green-500" />
                  <h3 class="font-semibold">Application Layer (app/)</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Your business logic built on top of the core foundation.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Generated Structures (entities)</li>
                  <li>• Custom Business Logic</li>
                  <li>• Database Models</li>
                  <li>• API Endpoints</li>
                  <li>• Custom Services</li>
                  <li>• Application Configuration</li>
                </ul>
              </div>
            </UCard>
          </div>

          <div class="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
            <h4 class="font-medium text-gray-900 dark:text-white mb-3">Framework Flow</h4>
            <div class="flex items-center justify-between text-sm">
              <div class="text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-2">
                  <UIcon name="i-lucide-server" class="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <span class="text-gray-600 dark:text-gray-300">Core Services</span>
              </div>
              <UIcon name="i-lucide-arrow-right" class="h-5 w-5 text-gray-400" />
              <div class="text-center flex flex-col items-center justify-center ">
                <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-2">
                  <UIcon name="i-lucide-boxes" class="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <span class="text-gray-600 dark:text-gray-300">Your Structures</span>
              </div>
              <UIcon name="i-lucide-arrow-right" class="h-5 w-5 text-gray-400" />
              <div class="text-center flex flex-col items-center justify-center">
                <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-2">
                  <UIcon name="i-lucide-globe" class="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <span class="text-gray-600 dark:text-gray-300">API Endpoints</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Structure Anatomy -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Structure Anatomy</h2>
          
          <UAlert color="green" variant="soft" class="mb-6">
            <template #title>📦 What is a Structure?</template>
            <template #description>
              A structure is a complete entity in your application - think User, Post, Product, Order. When you generate a structure, Base creates all the files needed for full CRUD operations, validation, and API endpoints for that entity.
            </template>
          </UAlert>

          <div class="space-y-6">
            <!-- Structure Components -->
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <UCard class="text-center">
                <template #header>
                  <UIcon name="i-lucide-database" class="h-8 w-8 text-blue-500 mx-auto" />
                </template>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Model</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  GORM database model with relationships, validations, and hooks
                </p>
              </UCard>

              <UCard class="text-center">
                <template #header>
                  <UIcon name="i-lucide-cog" class="h-8 w-8 text-green-500 mx-auto" />
                </template>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Service</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Business logic layer with CRUD operations and custom methods
                </p>
              </UCard>

              <UCard class="text-center">
                <template #header>
                  <UIcon name="i-lucide-route" class="h-8 w-8 text-purple-500 mx-auto" />
                </template>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Controller</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  HTTP handlers for API endpoints with request/response handling
                </p>
              </UCard>

              <UCard class="text-center">
                <template #header>
                  <UIcon name="i-lucide-puzzle" class="h-8 w-8 text-orange-500 mx-auto" />
                </template>
                <h4 class="font-medium text-gray-900 dark:text-white mb-2">Module</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Dependency injection and route registration for the structure
                </p>
              </UCard>
            </div>

            <!-- Generation Example -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-terminal" class="h-5 w-5 text-gray-500" />
                  <h3 class="font-semibold">Structure Generation Example</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4">
                  <pre class="text-sm text-gray-300"><code><span class="text-green-400"># Generate a User structure</span>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">User</span> name:string email:string:unique age:int role:string</code></pre>
                </div>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white mb-2">Files Created:</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• <code>app/models/user.go</code> - Database model</li>
                      <li>• <code>app/users/service.go</code> - Business logic</li>
                      <li>• <code>app/users/controller.go</code> - HTTP handlers</li>
                      <li>• <code>app/users/module.go</code> - DI & routes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white mb-2">API Endpoints:</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      <li>• <code>GET /users</code> - List users</li>
                      <li>• <code>POST /users</code> - Create user</li>
                      <li>• <code>GET /users/:id</code> - Get user</li>
                      <li>• <code>PUT /users/:id</code> - Update user</li>
                      <li>• <code>DELETE /users/:id</code> - Delete user</li>
                    </ul>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Structure Lifecycle -->
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-refresh-cw" class="h-5 w-5 text-blue-500" />
                  <h3 class="font-semibold">Structure Lifecycle</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div class="grid gap-4 md:grid-cols-3">
                  <div class="text-center">
                    <div class="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UIcon name="i-lucide-plus" class="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h4 class="font-medium text-gray-900 dark:text-white mb-2">Generation</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Create complete structure with <code>base g EntityName</code>
                    </p>
                  </div>
                  
                  <div class="text-center">
                    <div class="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UIcon name="i-lucide-edit" class="h-8 w-8 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h4 class="font-medium text-gray-900 dark:text-white mb-2">Customization</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Extend generated code with custom business logic
                    </p>
                  </div>
                  
                  <div class="text-center">
                    <div class="w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-3">
                      <UIcon name="i-lucide-trash" class="h-8 w-8 text-red-600 dark:text-red-400" />
                    </div>
                    <h4 class="font-medium text-gray-900 dark:text-white mb-2">Removal</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                      Clean removal with <code>base destroy EntityName</code>
                    </p>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Request Lifecycle -->
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

        <!-- Design Principles -->
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
                    Self-contained structures that can be developed, tested, and maintained independently.
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

        <!-- Framework vs Structure -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Framework vs Structure</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-layers" class="h-5 w-5 text-blue-500" />
                  <h3 class="font-semibold">Base Framework</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The <strong>infrastructure</strong> that provides foundational services.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <strong>Purpose:</strong> Provides core services</li>
                  <li>• <strong>Location:</strong> <code>@base/core/</code></li>
                  <li>• <strong>Examples:</strong> Router, Database, Email</li>
                  <li>• <strong>Lifecycle:</strong> Framework-managed</li>
                  <li>• <strong>Customization:</strong> Configuration-based</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-package" class="h-5 w-5 text-green-500" />
                  <h3 class="font-semibold">Structure (Entity)</h3>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The <strong>business entities</strong> that represent your application's domain.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• <strong>Purpose:</strong> Represents business entities</li>
                  <li>• <strong>Location:</strong> <code>app/</code></li>
                  <li>• <strong>Examples:</strong> User, Post, Product, Order</li>
                  <li>• <strong>Lifecycle:</strong> Developer-managed</li>
                  <li>• <strong>Customization:</strong> Code-based</li>
                </ul>
              </div>
            </UCard>
          </div>

          <UAlert color="success" variant="soft" class="mt-6">
            <template #title>🤝 Working Together</template>
            <template #description>
              The Base Framework provides the infrastructure (database, routing, authentication), while structures represent your business entities (users, products, orders). Structures consume framework services through dependency injection to build complete, functional APIs.
            </template>
          </UAlert>
        </section>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
</script>
