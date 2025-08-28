<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Directory Structure</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Understanding Base Framework's organized project structure and file conventions.
        </p>
      </div>
      
      <div class="space-y-12">
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Project Overview</h2>
          
          <UAlert 
            color="blue" 
            variant="soft" 
            title="Convention over Configuration" 
            description="Base Framework follows a structured approach where each directory has a specific purpose, making projects predictable and maintainable."
            class="mb-6"
          />
          
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-folder-tree" class="h-5 w-5 text-primary-500" />
                <h3 class="font-semibold">Base Project Structure</h3>
              </div>
            </template>
            
            <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 overflow-x-auto">
              <pre class="text-sm text-gray-300">
                <code>my-base-project/
├── app/                          <span class="text-green-400"># Your Application Layer</span>
│   ├── models/                   <span class="text-gray-500"># Database models (GORM)</span>
│   └── init.go                   <span class="text-gray-500"># App initialization</span>
├── @base/core/                   <span class="text-blue-400"># Base Framework Core (@base/core)</span>
│   ├── app/                      <span class="text-cyan-400"># Built-in app modules</span>
│   │   ├── authentication/       <span class="text-gray-500"># Auth system</span>
│   │   ├── authorization/        <span class="text-gray-500"># Authorization</span>
│   │   ├── media/                <span class="text-gray-500"># Media handling</span>
│   │   ├── oauth/                <span class="text-gray-500"># OAuth providers</span>
│   │   └── profile/              <span class="text-gray-500"># User profiles</span>
│   ├── base/                     <span class="text-gray-500"># Base controller/service</span>
│   ├── config/                   <span class="text-gray-500"># Configuration</span>
│   ├── database/                 <span class="text-gray-500"># Database connection</span>
│   ├── email/                    <span class="text-gray-500"># Email providers</span>
│   ├── emitter/                  <span class="text-gray-500"># Event system</span>
│   ├── errors/                   <span class="text-gray-500"># Error handling</span>
│   ├── helper/                   <span class="text-gray-500"># Helper utilities</span>
│   ├── http/                     <span class="text-gray-500"># HTTP router</span>
│   ├── logger/                   <span class="text-gray-500"># Logging system</span>
│   ├── module/                   <span class="text-gray-500"># Module system</span>
│   ├── router/                   <span class="text-gray-500"># Router & middleware</span>
│   │   └── middleware/           <span class="text-gray-500"># Built-in middleware</span>
│   ├── storage/                  <span class="text-gray-500"># File storage (local/S3/R2)</span>
│   ├── translation/              <span class="text-gray-500"># Internationalization</span>
│   ├── types/                    <span class="text-gray-500"># Common types</span>
│   ├── validator/                <span class="text-gray-500"># Validation system</span>
│   └── websocket/                <span class="text-gray-500"># WebSocket support</span>
├── storage/                      <span class="text-purple-400"># Active Local Storage</span>
│   ├── app/                      <span class="text-gray-500"># Uploaded files</span>
│   ├── logs/                     <span class="text-gray-500"># Application logs</span>
│   └── temp/                     <span class="text-gray-500"># Temporary files</span>
├── .env                          <span class="text-gray-500"># Environment config</span>
├── go.mod                        <span class="text-gray-500"># Go module definition</span>
└── main.go                       <span class="text-gray-500"># Application entry point</span>
</code>
</pre>
            </div>
          </UCard>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Directory Breakdown</h2>
          
          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-package" class="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">app/</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Application modules and models</p>
                  </div>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">app/models/</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Centralized location for all database models. This prevents circular dependencies 
                    and makes model relationships clear.
                  </p>
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                    <code class="text-sm text-gray-700 dark:text-gray-300">
                      user.go, post.go, comment.go, category.go...
                    </code>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">app/&lt;module&gt;/</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Each feature gets its own module directory with controller, service, and module files.
                  </p>
                  <div class="grid gap-2 md:grid-cols-3">
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <UKbd size="xs" class="mb-1">controller.go</UKbd>
                      <p class="text-xs text-gray-600 dark:text-gray-400">HTTP handlers</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <UKbd size="xs" class="mb-1">service.go</UKbd>
                      <p class="text-xs text-gray-600 dark:text-gray-400">Business logic</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                      <UKbd size="xs" class="mb-1">module.go</UKbd>
                      <p class="text-xs text-gray-600 dark:text-gray-400">Module registration</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">app/init.go</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Central module registration and application initialization.
                  </p>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-cpu" class="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">core/</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Framework core systems powering your app</p>
                  </div>
                </div>
              </template>
              
              <UAlert 
                color="success" 
                variant="soft" 
                title="Framework Core Modules" 
                description="The core/ directory contains Base Framework's core system modules (@base/core/*) that provide infrastructure services to your application modules."
                class="mb-6"
              />
              
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-route" class="h-4 w-4 inline mr-1" />
                    router/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">HTTP routing system with middleware</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• auth.go, logger.go, ratelimit.go</div>
                    <div>• context.go, router.go, tree.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-database" class="h-4 w-4 inline mr-1" />
                    database/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Database connection management</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• database.go - GORM integration</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-hard-drive" class="h-4 w-4 inline mr-1" />
                    storage/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">File storage with multiple providers</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• local.go, s3.go, r2.go</div>
                    <div>• active_storage.go, types.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-file-text" class="h-4 w-4 inline mr-1" />
                    logger/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Structured logging system</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• init.go, logger.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-radio" class="h-4 w-4 inline mr-1" />
                    emitter/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Event system for module communication</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• emitter.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-mail" class="h-4 w-4 inline mr-1" />
                    email/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Email service with multiple providers</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• smtp.go, sendgrid.go, postmark.go</div>
                    <div>• default.go, email.go, manager.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-alert-triangle" class="h-4 w-4 inline mr-1" />
                    errors/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Error handling system</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• errors.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-box" class="h-4 w-4 inline mr-1" />
                    module/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Module registration and management</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• app.go, core.go, initializer.go</div>
                    <div>• register.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-settings" class="h-4 w-4 inline mr-1" />
                    config/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Configuration management</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• config.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-check-square" class="h-4 w-4 inline mr-1" />
                    validator/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Input validation system</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• validator.go</div>
                  </div>
                </div>
                
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-languages" class="h-4 w-4 inline mr-1" />
                    translation/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Internationalization system</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• controller.go, model.go, service.go</div>
                    <div>• helper.go, module.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-wifi" class="h-4 w-4 inline mr-1" />
                    websocket/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">WebSocket support</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• websocket.go</div>
                  </div>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-cyan-100 dark:bg-cyan-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-package-plus" class="h-5 w-5 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">@base/core/app/</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Built-in application modules</p>
                  </div>
                </div>
              </template>
              
              <UAlert 
                color="cyan" 
                variant="soft" 
                title="Ready-to-Use App Modules" 
                description="Pre-built application modules that provide common functionality out of the box."
                class="mb-6"
              />
              
              <div class="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-shield-check" class="h-4 w-4 inline mr-1" />
                    authentication/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Complete authentication system</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• controller.go, service.go, mod.go</div>
                    <div>• model.go, errors.go, template.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-lock" class="h-4 w-4 inline mr-1" />
                    authorization/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Role-based access control</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• controller.go, service.go, middleware.go</div>
                    <div>• model.go, module.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-image" class="h-4 w-4 inline mr-1" />
                    media/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Media file management</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• controller.go, service.go</div>
                    <div>• mod.go, model.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-key" class="h-4 w-4 inline mr-1" />
                    oauth/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">OAuth provider integration</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• controller.go, service.go, config.go</div>
                    <div>• mod.go, model.go</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">
                    <UIcon name="i-lucide-user-circle" class="h-4 w-4 inline mr-1" />
                    profile/
                  </h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">User profile management</p>
                  <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                    <div>• controller.go, service.go</div>
                    <div>• model.go, module.go</div>
                  </div>
                </div>
                
                
              </div>
            </UCard>

            

            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-folder-open" class="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">storage/</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Runtime storage directories</p>
                  </div>
                </div>
              </template>
              
              <div class="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">app/</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Uploaded files and user content</p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">logs/</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Application and access logs</p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">temp/</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Temporary files and caches</p>
                </div>
              </div>
            </UCard>
            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-cable" class="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">static/</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">WebSocket Examples folder</p>
                  </div>
                </div>
              </template>
              
              <div class="grid gap-4 md:grid-cols-3">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">chat.html</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WebSocket real-time chat with rooms example</p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">draw.html</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WebSocket real-time multi-user draw example</p>
                </div>
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">kanban.html</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WebSocket real-time kanban example</p>
                </div><div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">editor.html</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WebSocket real-time multi-user editor example</p>
                </div><div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">spreadsheet.html</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WebSocket real-time multi-user spreadsheet example</p>
                </div><div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">monitor.html</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">WebSocket system monitor example</p>
                </div>

              </div>
            </UCard>
          </div>
        </section>
        

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core-App Integration</h2>
          
          <UAlert 
            color="indigo" 
            variant="soft" 
            title="Built-in Modules Power Your App" 
            description="Base Framework's built-in core modules provide infrastructure services that your application modules consume through dependency injection."
            class="mb-6"
          />
          
          <div class="space-y-8">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-workflow" class="h-5 w-5 text-indigo-500" />
                  <h3 class="font-semibold">Module System Integration</h3>
                </div>
              </template>
              
              <div class="space-y-6">
                <div class="grid gap-6 md:grid-cols-2">
                  <div class="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h4 class="font-medium text-blue-900 dark:text-blue-100 mb-2">
                      <UIcon name="i-lucide-cpu" class="h-4 w-4 inline mr-1" />
                      Core Framework Modules Provide
                    </h4>
                    <ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• HTTP Router & Context (@base/core)</li>
                      <li>• Database Connection (@base/core)</li>
                      <li>• Logging Infrastructure (@base/core)</li>
                      <li>• Event Emitter (@base/core)</li>
                      <li>• Storage Systems (@base/core)</li>
                      <li>• Error Handling (@base/core)</li>
                    </ul>
                  </div>
                  
                  <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h4 class="font-medium text-green-900 dark:text-green-100 mb-2">
                      <UIcon name="i-lucide-package" class="h-4 w-4 inline mr-1" />
                      Your App Modules Consume
                    </h4>
                    <ul class="text-sm text-green-800 dark:text-green-200 space-y-1">
                      <li>• Route Registration (user code)</li>
                      <li>• Database Models (user code)</li>
                      <li>• Log Messages (user code)</li>
                      <li>• Event Listeners (user code)</li>
                      <li>• File Operations (user code)</li>
                      <li>• Custom Errors (user code)</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-3">Dependency Injection Flow</h4>
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <pre class="text-sm text-gray-700 dark:text-gray-300"><code><span class="text-blue-500">// In app/user/module.go</span>
import (
    "@base/core/database"
    "@base/core/logger"
    "@base/core/emitter"
    "@base/core/storage"
    "@base/core/router"
)

type UserModule struct {
    DB      *database.DB          <span class="text-gray-500">// Injected from @base/core/database</span>
    Logger  *logger.Logger        <span class="text-gray-500">// Injected from @base/core/logger</span>
    Emitter *emitter.Emitter      <span class="text-gray-500">// Injected from @base/core/emitter</span>
    Storage *storage.Storage      <span class="text-gray-500">// Injected from @base/core/storage</span>
}

func (m *UserModule) Register(r *router.Router) {
    <span class="text-gray-500">// Register routes using core router</span>
    r.POST("/api/users", m.controller.Create)
    r.GET("/api/users", m.controller.List)
}</code></pre>
                  </div>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-layers-3" class="h-5 w-5 text-purple-500" />
                  <h3 class="font-semibold">Module Registration Process</h3>
                </div>
              </template>
              
              <div class="space-y-4">
                <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <UBadge color="blue" size="sm">1</UBadge>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">Core Initialization</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Framework starts up router, database, logger, emitter</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <UBadge color="blue" size="sm">2</UBadge>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">App Init</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300"><UKbd size="xs">app/init.go</UKbd> calls RegisterModule() for each app module</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <UBadge color="blue" size="sm">3</UBadge>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">Dependency Injection</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Core services injected into module constructors</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <UBadge color="green" size="sm">4</UBadge>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-white">Route Registration</h4>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Modules register their HTTP routes with core router</p>
                  </div>
                </div>
              </div>
            </UCard>
            
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Framework vs Application Code</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-settings" class="h-5 w-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Built-in Framework Code</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Part of Base Framework</p>
                  </div>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">core/ directory</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Contains framework's built-in modules that you import and use. 
                    You don't modify these files.
                  </p>
                  <div class="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3">
                    <div class="text-xs text-purple-800 dark:text-purple-200 space-y-1">
                      <div>• <UKbd size="xs">core/router/</UKbd> - HTTP routing engine</div>
                      <div>• <UKbd size="xs">core/database/</UKbd> - DB connection management</div>
                      <div>• <UKbd size="xs">core/logger/</UKbd> - Logging infrastructure</div>
                      <div>• <UKbd size="xs">core/emitter/</UKbd> - Event system</div>
                      <div>• <UKbd size="xs">core/storage/</UKbd> - File storage</div>
                      <div>• <UKbd size="xs">core/middleware/</UKbd> - HTTP middleware</div>
                    </div>
                  </div>
                </div>
                
                <UAlert 
                  color="purple" 
                  variant="soft" 
                  title="Framework Provided" 
                  description="These modules are part of Base Framework installation and updates. Don't modify core/ files directly."
                  size="sm"
                />
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-3">
                  <div class="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <UIcon name="i-lucide-code" class="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Your Application Code</h3>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Your business logic</p>
                  </div>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-2">app/ directory</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Contains your application's modules, models, and business logic. 
                    This is where you write your code.
                  </p>
                  <div class="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                    <div class="text-xs text-green-800 dark:text-green-200 space-y-1">
                      <div>• <UKbd size="xs">app/models/</UKbd> - Your database models</div>
                      <div>• <UKbd size="xs">app/user/</UKbd> - User management module</div>
                      <div>• <UKbd size="xs">app/post/</UKbd> - Blog post module</div>
                      <div>• <UKbd size="xs">app/auth/</UKbd> - Authentication module</div>
                      <div>• <UKbd size="xs">app/init.go</UKbd> - Module registration</div>
                    </div>
                  </div>
                </div>
                
                <UAlert 
                  color="green" 
                  variant="soft" 
                  title="Your Code" 
                  description="Write your business logic here. These modules use core framework services through dependency injection."
                  size="sm"
                />
              </div>
            </UCard>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">File Naming Conventions</h2>
          
          <div class="space-y-4">
            <UCard>
              <template #header>
                <h3 class="font-semibold">Go Files</h3>
              </template>
              
              <div class="space-y-3">
                <div class="flex items-start space-x-3">
                  <UKbd size="sm">snake_case</UKbd>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">File names</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">user_service.go, blog_post.go</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <UKbd size="sm">PascalCase</UKbd>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Struct and function names</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">UserService, CreatePost()</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <UKbd size="sm">camelCase</UKbd>
                  <div>
                    <p class="text-sm font-medium text-gray-900 dark:text-white">Private fields and methods</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">userID, validateEmail()</p>
                  </div>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <template #header>
                <h3 class="font-semibold">Module Structure</h3>
              </template>
              
              <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <pre class="text-sm text-gray-700 dark:text-gray-300"><code>app/user/
├── controller.go    # HTTP handlers and routing
├── service.go      # Business logic and validation  
├── module.go       # Module registration and dependencies
└── README.md       # Module-specific documentation</code></pre>
              </div>
            </UCard>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Generated Files</h2>
          
          <UAlert 
            color="amber" 
            variant="soft" 
            title="Auto-Generated Content" 
            description="These files are created automatically by Base CLI and should not be manually edited."
            class="mb-6"
          />
          
          <div class="space-y-4">
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <h4 class="font-medium text-gray-900 dark:text-white mb-2">When running <UKbd size="sm">base g User name:string email:string</UKbd></h4>
              <pre class="text-sm text-gray-600 dark:text-gray-400"><code>✓ Created app/models/user.go
✓ Created app/user/controller.go  
✓ Created app/user/service.go
✓ Created app/user/module.go
✓ Updated app/init.go</code></pre>
            </div>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration Files</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-settings" class="h-4 w-4" />
                  <h3 class="font-semibold">.env</h3>
                </div>
              </template>
              
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">Environment-specific configuration</p>
                <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <div>• Database connection settings</div>
                  <div>• JWT secrets and API keys</div>
                  <div>• Storage provider configuration</div>
                  <div>• Email service settings</div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-file-text" class="h-4 w-4" />
                  <h3 class="font-semibold">go.mod</h3>
                </div>
              </template>
              
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">Go module dependencies</p>
                <div class="text-xs text-gray-500 dark:text-gray-400 space-y-1">
                  <div>• Base Framework dependencies</div>
                  <div>• GORM and database drivers</div>
                  <div>• Third-party packages</div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>
          
          <div class="grid gap-4">
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Keep modules focused</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Each module should handle a single domain concept (User, Post, Order, etc.)
                  </p>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Use the models directory</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Always place database models in <UKbd size="xs">app/models/</UKbd> to avoid circular imports
                  </p>
                </div>
              </div>
            </UCard>
            
            <UCard>
              <div class="flex items-start space-x-3">
                <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-green-500 mt-1" />
                <div>
                  <h4 class="font-medium text-gray-900 dark:text-white mb-1">Follow naming conventions</h4>
                  <p class="text-sm text-gray-600 dark:text-gray-300">
                    Consistent naming makes the codebase predictable and easier to navigate
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