<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Quick Start</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Create your first Base Framework project in minutes with our step-by-step guide.
        </p>
      </div>

      <!-- Prerequisites -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Prerequisites</h2>
        
        <div class="grid md:grid-cols-2 gap-6 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-download" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Go 1.24+</h3>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Base Framework requires Go 1.24 or later for modern language features and performance.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-terminal" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Base CLI</h3>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Install the Base CLI tool for project scaffolding and module generation.
            </p>
          </UCard>
        </div>

        <UAlert 
          icon="i-heroicons-information-circle"
          color="info"
          variant="soft"
          title="Installation Guide"
          description="If you haven't installed the Base CLI yet, check out our Installation page for detailed setup instructions."
        />
      </section>

      <!-- Quick Start Steps -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Create Your First Project</h2>
        
        <div class="space-y-8">
          <!-- Step 1: Create Project -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center text-sm font-semibold">
                  1
                </div>
                <h3 class="font-semibold">Create New Project</h3>
              </div>
            </template>
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Create a new Base Framework project and navigate to the directory:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm overflow-x-auto"><code class="language-bash"># Create a new project
base new my-blog-api
cd my-blog-api

# Project structure is automatically created with:
# - Core framework files
# - Database configuration
# - Initial app structure</code></pre>
              </UCard>
            </div>
          </UCard>

          <!-- Step 2: Generate Modules -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center text-sm font-semibold">
                  2
                </div>
                <h3 class="font-semibold">Generate Your First Module</h3>
              </div>
            </template>
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Generate a complete blog post module with models, controllers, and services:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm overflow-x-auto"><code class="language-bash"># Generate a blog post module with various field types
base g post title:string content:text slug:slug published:bool author_id:uint

# This creates:
# - app/models/post.go (GORM model)
# - app/post/controller.go (HTTP handlers)
# - app/post/service.go (business logic)
# - app/post/module.go (module definition)
# - Updates app/init.go automatically</code></pre>
              </UCard>
            </div>
          </UCard>

          <!-- Step 3: Start Server -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center text-sm font-semibold">
                  3
                </div>
                <h3 class="font-semibold">Start Development Server</h3>
              </div>
            </template>
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Start the server with hot reloading and automatic documentation generation:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm overflow-x-auto"><code class="language-bash"># Start with hot reloading and docs
base docs
base start -r  

# Your API is now running at:
# http://localhost:8080 - Main API
# http://localhost:8080/swagger/ - Interactive API docs</code></pre>
              </UCard>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Generated API Endpoints -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Generated API Endpoints</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Your blog post module automatically generates these REST endpoints:
        </p>
        
        <div class="grid gap-3">
          <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UBadge color="success" variant="soft" size="sm">GET</UBadge>
            <UKbd>/api/posts</UKbd>
            <span class="text-sm text-gray-600 dark:text-gray-400">List all posts with pagination</span>
          </div>
          <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UBadge color="info" variant="soft" size="sm">POST</UBadge>
            <UKbd>/api/posts</UKbd>
            <span class="text-sm text-gray-600 dark:text-gray-400">Create a new post</span>
          </div>
          <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UBadge color="success" variant="soft" size="sm">GET</UBadge>
            <UKbd>/api/posts/{id}</UKbd>
            <span class="text-sm text-gray-600 dark:text-gray-400">Get post by ID</span>
          </div>
          <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UBadge color="warning" variant="soft" size="sm">PUT</UBadge>
            <UKbd>/api/posts/{id}</UKbd>
            <span class="text-sm text-gray-600 dark:text-gray-400">Update existing post</span>
          </div>
          <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <UBadge color="error" variant="soft" size="sm">DELETE</UBadge>
            <UKbd>/api/posts/{id}</UKbd>
            <span class="text-sm text-gray-600 dark:text-gray-400">Delete post</span>
          </div>
        </div>
      </section>

      <!-- Test Your API -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Test Your API</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <PlusCircle class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Create a Post</h3>
              </div>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash">curl -X POST http://localhost:8080/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post using Base Framework!",
    "slug": "my-first-post",
    "published": true,
    "author_id": 1
  }'</code></pre>
            </UCard>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <List class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">List All Posts</h3>
              </div>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash">curl http://localhost:8080/api/posts

# With pagination
curl "http://localhost:8080/api/posts?page=1&limit=10"</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>

      <!-- Built-in Features -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">What You Get Out of the Box</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Database class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Database & ORM</h3>
              </div>
            </template>
            <ul class="text-sm space-y-2">
              <li>• GORM integration with auto-migrations</li>
              <li>• Connection pooling and optimization</li>
              <li>• Multiple database support (PostgreSQL, MySQL, SQLite)</li>
              <li>• Automatic relationship detection</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <ShieldCheck class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Security & Validation</h3>
              </div>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Built-in input validation</li>
              <li>• JWT authentication support</li>
              <li>• CORS configuration</li>
              <li>• Rate limiting middleware</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                  <ScrollText class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Documentation</h3>
              </div>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Automatic Swagger/OpenAPI generation</li>
              <li>• Interactive API documentation</li>
              <li>• Code annotation support</li>
              <li>• Export to JSON/YAML formats</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                  <CodeXml class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Developer Experience</h3>
              </div>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Hot reloading with Air</li>
              <li>• Structured logging</li>
              <li>• Error handling middleware</li>
              <li>• Environment configuration</li>
            </ul>
          </UCard>
        </div>
      </section>

      <!-- Next Steps -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Next Steps</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Rss name="i-lucide-book-open" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Blog Tutorial</h3>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Follow our comprehensive tutorial to build a complete blog application with authentication, file uploads, and more.
            </p>
            <UButton to="/docs/tutorial" variant="soft" size="sm">
              Start Tutorial
            </UButton>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Terminal name="i-lucide-terminal" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">CLI Reference</h3>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Explore all CLI commands and learn about advanced field types, relationships, and module generation.
            </p>
            <UButton to="/docs/cli" variant="soft" size="sm">
              View CLI Docs
            </UButton>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                  <Cpu name="i-lucide-cpu" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Architecture</h3>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Understand Base Framework's HMVC architecture, module system, and design patterns.
            </p>
            <UButton to="/docs/architecture" variant="soft" size="sm">
              Learn Architecture
            </UButton>
          </UCard>
        </div>
      </section>

      <!-- Success Alert -->
      <UAlert 
        color="green" 
        variant="soft" 
        title="🎉 Congratulations!" 
        description="You've successfully created your first Base Framework API with full CRUD operations, automatic documentation, and hot reloading. You're ready to build amazing applications!"
      />
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
import { List, PlusCircle, Database, ShieldCheck,ScrollText, CodeXml, Rss, Terminal, Cpu } from 'lucide-vue-next';
</script>