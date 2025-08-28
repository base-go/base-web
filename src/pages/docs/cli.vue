<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">CLI Reference</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Complete reference for Base Framework CLI commands, generators, and field types.
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          The Base CLI provides a comprehensive set of commands for creating projects, generating modules, managing development servers, and maintaining your applications. Built with Cobra for powerful command-line interactions.
        </p>

        <UAlert 
          icon="i-heroicons-information-circle"
          color="blue"
          variant="soft"
          title="CLI Features"
          description="Project scaffolding, Code generation, Hot reloading, Documentation generation, Module management, and Version control."
        />
      </section>

      <!-- Quick Reference -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Reference</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-plus" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold text-blue-600 dark:text-blue-400">Project Commands</h3>
              </div>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base new</code> - Create new project</li>
              <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base start</code> - Start development server</li>
              <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base docs</code> - Generate documentation</li>
            </ul>
          </UCard>
          
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-code" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold text-green-600 dark:text-green-400">Module Commands</h3>
              </div>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base g</code> - Generate module</li>
              <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base d</code> - Destroy module</li>
              <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base update</code> - Update framework</li>
            </ul>
          </UCard>
        </div>
      </section>
      <!-- base new command -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base new</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Creates a new Base Framework project by downloading the latest framework template and setting up the project structure.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-plus-circle" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base new [project_name]</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">What it does</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Downloads the latest Base Framework template from GitHub</li>
              <li>• Creates a new directory with your project name</li>
              <li>• Sets up the complete project structure</li>
              <li>• Initializes Go modules and dependencies</li>
              <li>• Configures development environment</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Usage</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># Create a new project called "my-api"
base new my-api

# Navigate to the project
cd my-api

# Start development server
base start</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>
      <!-- base generate command -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base g (generate)</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Generates complete modules with models, controllers, services, validators, and auto-updates your app initialization. The most powerful command in the Base CLI.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-code" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base g [module_name] [field:type...] [options]
base generate [module_name] [field:type...] [options]</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6 mb-8">
          <UCard>
            <template #header>
              <h3 class="font-semibold">What gets generated</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <strong>Model:</strong> <code>app/models/{name}.go</code> - GORM model with relationships</li>
              <li>• <strong>Controller:</strong> <code>app/{name}/controller.go</code> - HTTP handlers and routes</li>
              <li>• <strong>Service:</strong> <code>app/{name}/service.go</code> - Business logic layer</li>
              <li>• <strong>Module:</strong> <code>app/{name}/module.go</code> - Module definition and wiring</li>
              <li>• <strong>Validator:</strong> <code>app/{name}/validator.go</code> - Request validation</li>
              <li>• <strong>Registration:</strong> Updates <code>app/init.go</code> automatically</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Usage</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># Simple blog post
base g post title:string content:text published:bool

# E-commerce product with relationships
base g product name:string price:float category_id:uint image:image

# User profile with file upload
base g profile user_id:uint avatar:image bio:text social_links:json

# Article with complex relationships
base g article title:string content:text author:belongsTo:User category:belongsTo:Category tags:manyToMany:Tag</code></pre>
            </UCard>
          </UCard>
        </div>

        <!-- Field Types -->
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Field Types Reference</h3>
          
          <!-- Basic Types -->
          <UCard class="mb-6">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-type" class="w-5 h-5" />
                </div>
                <h4 class="font-semibold">Basic Data Types</h4>
              </div>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">CLI Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Go Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Database</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Example</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">string</td>
                    <td class="px-6 py-4 text-sm">string</td>
                    <td class="px-6 py-4 text-sm">VARCHAR(255)</td>
                    <td class="px-6 py-4 text-sm"><UKbd>name:string</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">text</td>
                    <td class="px-6 py-4 text-sm">string</td>
                    <td class="px-6 py-4 text-sm">TEXT</td>
                    <td class="px-6 py-4 text-sm"><UKbd>content:text</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">email</td>
                    <td class="px-6 py-4 text-sm">string</td>
                    <td class="px-6 py-4 text-sm">VARCHAR(255)</td>
                    <td class="px-6 py-4 text-sm"><UKbd>email:email</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">url</td>
                    <td class="px-6 py-4 text-sm">string</td>
                    <td class="px-6 py-4 text-sm">VARCHAR(255)</td>
                    <td class="px-6 py-4 text-sm"><UKbd>website:url</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">slug</td>
                    <td class="px-6 py-4 text-sm">string</td>
                    <td class="px-6 py-4 text-sm">VARCHAR(255)</td>
                    <td class="px-6 py-4 text-sm"><UKbd>slug:slug</UKbd></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <!-- Numeric Types -->
          <UCard class="mb-6">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-hash" class="w-5 h-5" />
                </div>
                <h4 class="font-semibold">Numeric Types</h4>
              </div>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">CLI Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Go Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Use Case</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Example</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">int</td>
                    <td class="px-6 py-4 text-sm">int</td>
                    <td class="px-6 py-4 text-sm">Signed integers</td>
                    <td class="px-6 py-4 text-sm"><UKbd>age:int</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">uint</td>
                    <td class="px-6 py-4 text-sm">uint</td>
                    <td class="px-6 py-4 text-sm">IDs, positive numbers</td>
                    <td class="px-6 py-4 text-sm"><UKbd>user_id:uint</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">float</td>
                    <td class="px-6 py-4 text-sm">float64</td>
                    <td class="px-6 py-4 text-sm">Prices, measurements</td>
                    <td class="px-6 py-4 text-sm"><UKbd>price:float</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">decimal</td>
                    <td class="px-6 py-4 text-sm">float64</td>
                    <td class="px-6 py-4 text-sm">Financial calculations</td>
                    <td class="px-6 py-4 text-sm"><UKbd>amount:decimal</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">sort</td>
                    <td class="px-6 py-4 text-sm">int</td>
                    <td class="px-6 py-4 text-sm">Sort order</td>
                    <td class="px-6 py-4 text-sm"><UKbd>order:sort</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">bool</td>
                    <td class="px-6 py-4 text-sm">bool</td>
                    <td class="px-6 py-4 text-sm">True/false flags</td>
                    <td class="px-6 py-4 text-sm"><UKbd>active:bool</UKbd></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <!-- Date/Time Types -->
          <UCard class="mb-6">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-calendar" class="w-5 h-5" />
                </div>
                <h4 class="font-semibold">Date & Time Types</h4>
              </div>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">CLI Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Go Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Description</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Example</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">datetime</td>
                    <td class="px-6 py-4 text-sm">time.Time</td>
                    <td class="px-6 py-4 text-sm">Full date and time</td>
                    <td class="px-6 py-4 text-sm"><UKbd>created_at:datetime</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">time</td>
                    <td class="px-6 py-4 text-sm">time.Time</td>
                    <td class="px-6 py-4 text-sm">Timestamp</td>
                    <td class="px-6 py-4 text-sm"><UKbd>started_at:time</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">date</td>
                    <td class="px-6 py-4 text-sm">time.Time</td>
                    <td class="px-6 py-4 text-sm">Date only</td>
                    <td class="px-6 py-4 text-sm"><UKbd>birth_date:date</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">timestamp</td>
                    <td class="px-6 py-4 text-sm">time.Time</td>
                    <td class="px-6 py-4 text-sm">Unix timestamp</td>
                    <td class="px-6 py-4 text-sm"><UKbd>modified:timestamp</UKbd></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <!-- File & Media Types -->
          <UCard class="mb-6">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-file" class="w-5 h-5" />
                </div>
                <h4 class="font-semibold">File & Media Types</h4>
              </div>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">CLI Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Go Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Validation</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Example</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">image</td>
                    <td class="px-6 py-4 text-sm">*storage.Attachment</td>
                    <td class="px-6 py-4 text-sm">5MB, image formats</td>
                    <td class="px-6 py-4 text-sm"><UKbd>avatar:image</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">file</td>
                    <td class="px-6 py-4 text-sm">*storage.Attachment</td>
                    <td class="px-6 py-4 text-sm">50MB, documents</td>
                    <td class="px-6 py-4 text-sm"><UKbd>document:file</UKbd></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <!-- Special Types -->
          <UCard class="mb-6">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-database" class="w-5 h-5" />
                </div>
                <h4 class="font-semibold">Special & Data Types</h4>
              </div>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">CLI Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Go Type</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Use Case</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Example</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">json</td>
                    <td class="px-6 py-4 text-sm">datatypes.JSON</td>
                    <td class="px-6 py-4 text-sm">JSON data</td>
                    <td class="px-6 py-4 text-sm"><UKbd>metadata:json</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">jsonb</td>
                    <td class="px-6 py-4 text-sm">datatypes.JSON</td>
                    <td class="px-6 py-4 text-sm">Binary JSON (PostgreSQL)</td>
                    <td class="px-6 py-4 text-sm"><UKbd>settings:jsonb</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">translation</td>
                    <td class="px-6 py-4 text-sm">translation.Field</td>
                    <td class="px-6 py-4 text-sm">Multi-language text</td>
                    <td class="px-6 py-4 text-sm"><UKbd>title:translation</UKbd></td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">translatedField</td>
                    <td class="px-6 py-4 text-sm">translation.Field</td>
                    <td class="px-6 py-4 text-sm">i18n field</td>
                    <td class="px-6 py-4 text-sm"><UKbd>name:translatedField</UKbd></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <!-- Relationship Types -->
          <UCard class="mb-6">
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-link" class="w-5 h-5" />
                </div>
                <h4 class="font-semibold">Relationship Types</h4>
              </div>
            </template>
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Base Framework supports sophisticated relationship definitions using colon syntax:
              </p>
              <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Relationship</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Syntax</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Go Type</th>
                      <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Example</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    <tr>
                      <td class="px-6 py-4 text-sm font-semibold">Belongs To</td>
                      <td class="px-6 py-4 text-sm font-mono">field:belongsTo:Model</td>
                      <td class="px-6 py-4 text-sm">Model</td>
                      <td class="px-6 py-4 text-sm"><UKbd>author:belongsTo:User</UKbd></td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 text-sm font-semibold">Has One</td>
                      <td class="px-6 py-4 text-sm font-mono">field:hasOne:Model</td>
                      <td class="px-6 py-4 text-sm">*Model</td>
                      <td class="px-6 py-4 text-sm"><UKbd>profile:hasOne:Profile</UKbd></td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 text-sm font-semibold">Has Many</td>
                      <td class="px-6 py-4 text-sm font-mono">field:hasMany:Model</td>
                      <td class="px-6 py-4 text-sm">[]Model</td>
                      <td class="px-6 py-4 text-sm"><UKbd>posts:hasMany:Post</UKbd></td>
                    </tr>
                    <tr>
                      <td class="px-6 py-4 text-sm font-semibold">Many to Many</td>
                      <td class="px-6 py-4 text-sm font-mono">field:manyToMany:Model</td>
                      <td class="px-6 py-4 text-sm">[]*Model</td>
                      <td class="px-6 py-4 text-sm"><UKbd>tags:manyToMany:Tag</UKbd></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Real Examples -->
        <div class="mb-8">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Real-World Examples</h3>
          
          <div class="space-y-6">
            <UCard>
              <template #header>
                <h4 class="font-semibold">Blog System</h4>
              </template>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm overflow-x-auto"><code class="language-bash"># Create blog models with relationships
base g category name:string slug:string description:text
base g tag name:string color:string
base g post title:string slug:slug content:text excerpt:text published:bool author:belongsTo:User category:belongsTo:Category tags:manyToMany:Tag featured_image:image
base g comment content:text author:belongsTo:User post:belongsTo:Post</code></pre>
              </UCard>
            </UCard>

            <UCard>
              <template #header>
                <h4 class="font-semibold">E-commerce System</h4>
              </template>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm overflow-x-auto"><code class="language-bash"># E-commerce product catalog
base g brand name:string logo:image website:url
base g category name:string parent:belongsTo:Category
base g product name:string sku:string price:decimal description:text images:json brand:belongsTo:Brand category:belongsTo:Category
base g review rating:int comment:text user:belongsTo:User product:belongsTo:Product</code></pre>
              </UCard>
            </UCard>

            <UCard>
              <template #header>
                <h4 class="font-semibold">Project Management</h4>
              </template>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm overflow-x-auto"><code class="language-bash"># Project management system
base g project name:string description:text start_date:date end_date:date status:string owner:belongsTo:User
base g task title:string description:text priority:int due_date:datetime completed:bool project:belongsTo:Project assignee:belongsTo:User
base g time_entry hours:decimal description:text date:date task:belongsTo:Task user:belongsTo:User</code></pre>
              </UCard>
            </UCard>
          </div>
        </div>
      </section>

      <!-- base destroy command -->
      <section id="destroy" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base d (destroy)</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Safely removes generated modules and cleans up all associated files, models, and registrations.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-trash-2" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base d [module_name1] [module_name2] ...
base destroy [module_name1] [module_name2] ...</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">What gets removed</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <strong>Module Directory:</strong> <code>app/{module_name}/</code> and all contents</li>
              <li>• <strong>Model File:</strong> <code>app/models/{module_name}.go</code></li>
              <li>• <strong>Test Files:</strong> <code>test/app_test/{module_name}_test/</code></li>
              <li>• <strong>Registration:</strong> Import and initialization from <code>app/init.go</code></li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Safety Features</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <strong>Confirmation:</strong> Prompts before destroying modules</li>
              <li>• <strong>Batch Support:</strong> Can destroy multiple modules at once</li>
              <li>• <strong>Orphan Cleanup:</strong> Removes registry entries even if files are missing</li>
              <li>• <strong>Status Reporting:</strong> Shows success/failure for each operation</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Usage</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># Destroy a single module
base d post

# Destroy multiple modules
base d post comment category

# Full command name
base destroy user profile</code></pre>
            </UCard>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Output</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash">$ base d post comment
Modules to destroy: post, comment
Are you sure you want to destroy 2 module(s)? [Y/n] y

[1/2] Destroying module 'post'...
  ✅ Removed module directory: app/post
  ✅ Removed model file: app/models/post.go
  ✅ Removed 'post' from app/init.go
  ✅ Successfully destroyed module 'post'

[2/2] Destroying module 'comment'...
  ✅ Removed module directory: app/comment  
  ✅ Removed model file: app/models/comment.go
  ✅ Removed 'comment' from app/init.go
  ✅ Successfully destroyed module 'comment'

✅ Successfully destroyed all 2 module(s).</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>

      <!-- base start command -->
      <section id="start" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base start</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Starts your Base Framework application server with optional hot reloading and documentation generation.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-play" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base start [flags]</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">Flags</h3>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Flag</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Short</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">--hot-reload</td>
                    <td class="px-6 py-4 text-sm font-mono">-r</td>
                    <td class="px-6 py-4 text-sm">Enable hot reloading using air</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">--docs</td>
                    <td class="px-6 py-4 text-sm font-mono">-d</td>
                    <td class="px-6 py-4 text-sm">Generate Swagger documentation before starting</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">What it does</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Ensures dependencies are up to date with <code>go mod tidy</code></li>
              <li>• Validates project structure (looks for main.go)</li>
              <li>• Installs and configures Air for hot reloading (if -r flag used)</li>
              <li>• Generates Swagger documentation (if -d flag used)</li>
              <li>• Starts the application server</li>
              <li>• Sets environment variables for documentation</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Usage</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># Start server normally
base start

# Start with hot reloading
base start -r
base start --hot-reload

# Start with documentation generation
base start -d
base start --docs

# Start with both hot reloading and docs
base start -r -d</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>
      <!-- base docs command -->
      <section id="docs" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base docs</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Generates OpenAPI 3.0 documentation by scanning controller annotations and creates static Swagger files for your API.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-file-text" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base docs [flags]</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">Flags</h3>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Flag</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Short</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">--output</td>
                    <td class="px-6 py-4 text-sm font-mono">-o</td>
                    <td class="px-6 py-4 text-sm">Output directory for generated files (default: "docs")</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">--static</td>
                    <td class="px-6 py-4 text-sm font-mono">-s</td>
                    <td class="px-6 py-4 text-sm">Generate static swagger files (default: true)</td>
                  </tr>
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">--no-static</td>
                    <td class="px-6 py-4 text-sm font-mono"></td>
                    <td class="px-6 py-4 text-sm">Skip generating static files</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Generated Files</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <strong>swagger.json</strong> - OpenAPI 3.0 specification in JSON format</li>
              <li>• <strong>swagger.yaml</strong> - OpenAPI 3.0 specification in YAML format</li>
              <li>• <strong>docs.go</strong> - Go package with embedded documentation</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Supported Annotations</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-go">// @Summary Create a new post
// @Description Create a new blog post with title and content
// @Tags posts
// @Param data body CreatePostRequest true "Post data"
// @Success 201 "Post created successfully"
// @Failure 400 "Bad request"
// @Router /posts [post]
// @Security BearerAuth
func (c *PostController) CreatePost(ctx *router.Context) error {
    // Your implementation here
}</code></pre>
            </UCard>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Usage</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># Generate docs in default directory
base docs

# Generate docs in custom directory
base docs -o documentation

# Skip static file generation
base docs --no-static

# Generate with custom output
base docs -o api-docs -s</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>
      <!-- base update command -->
      <section id="update" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base update</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Updates the Base Framework core directory to the latest version while preserving your application code and customizations.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-refresh-cw" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base update</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">What it does</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Downloads the latest Base Framework core matching your CLI version</li>
              <li>• Creates automatic backup of existing core directory</li>
              <li>• Replaces core directory with updated version</li>
              <li>• Preserves your app directory and custom code</li>
              <li>• Rollback support if update fails</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Safety Features</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <strong>Automatic Backup:</strong> Creates <code>core.bak</code> before updating</li>
              <li>• <strong>Validation:</strong> Verifies downloaded files before replacement</li>
              <li>• <strong>Rollback:</strong> Automatically restores backup if update fails</li>
              <li>• <strong>Preservation:</strong> Only updates core, leaves app code untouched</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Output</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash">$ base update
Updating Base Core...
Downloading core from: https://github.com/base-go/base-core/archive/refs/tags/v2.1.7.zip
Core directory updated successfully.
Base Core updated successfully.</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>

      <!-- base upgrade command -->
      <section id="upgrade" class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">base upgrade</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Upgrades the Base CLI tool itself to the latest version with support for major version upgrades and breaking change warnings.
        </p>

        <UCard class="mb-6">
          <template #header>
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                <Icon name="i-lucide-arrow-up" class="w-5 h-5" />
              </div>
              <h3 class="font-semibold">Syntax</h3>
            </div>
          </template>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-bash">base upgrade [flags]</code></pre>
          </UCard>
        </UCard>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">Flags</h3>
            </template>
            <div class="overflow-x-auto">
              <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Flag</th>
                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">Description</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-6 py-4 text-sm font-mono">--major</td>
                    <td class="px-6 py-4 text-sm">Allow upgrade to new major version (may contain breaking changes)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Upgrade Behavior</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• <strong>Minor/Patch:</strong> Upgrades automatically within same major version</li>
              <li>• <strong>Major:</strong> Requires <code>--major</code> flag and user confirmation</li>
              <li>• <strong>Validation:</strong> Downloads, verifies, and tests binary before installation</li>
              <li>• <strong>Cross-platform:</strong> Handles Windows, macOS, and Linux installations</li>
              <li>• <strong>Permissions:</strong> Uses sudo for system directory installation on Unix</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Major Version Warnings</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># When major version is available without --major flag
$ base upgrade
📦 Minor update available: 1.5.2 → 1.6.0

🚨 MAJOR VERSION ALSO AVAILABLE: 2.0.0
🎉 NEW in v2.0.0: Automatic Relationship Detection!
   • Fields ending with '_id' now auto-generate GORM relationships
⚠️  To upgrade to the major version, use: base upgrade --major
📚 Major version changelog: https://github.com/base-go/cmd/releases/tag/v2.0.0</code></pre>
            </UCard>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">Example Usage</h3>
            </template>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-sm overflow-x-auto"><code class="language-bash"># Upgrade within current major version
base upgrade

# Allow major version upgrade with breaking changes
base upgrade --major

# Check what version would be installed
base version</code></pre>
            </UCard>
          </UCard>
        </div>
      </section>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'



</script>