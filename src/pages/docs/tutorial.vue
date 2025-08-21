<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Tutorial</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Build a complete blog application from scratch and learn Base Framework fundamentals.
        </p>
      </div>

      <div class="space-y-12">
        <!-- Step 1: Create Project -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step 1: Create Your Blog Project</h2>

          <UAlert color="blue" variant="soft" title="Prerequisites"
            description="Make sure you have Base CLI installed and Go 1.21+ on your system." class="mb-6" />

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Let's start by creating a new Base Framework project for our blog API:
          </p>

          <UCard>
            <template #header>
              <div class="flex items-center justify-between">
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-terminal" class="h-4 w-4 text-gray-500" />
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Terminal</span>
                </div>
              </div>
            </template>

            <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300"><code><span class="text-blue-400">base new</span> <span
        class="text-yellow-400">blog</span>
      <span class="text-blue-400">cd</span> <span class="text-yellow-400">blog</span></code></pre>
            </div>
          </UCard>

          <div class="mt-6">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">What This Creates:</h4>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-700 dark:text-gray-300"><code>blog/
        ├── app/
        │ ├── init.go <span class="text-gray-500"># Module registration</span>
        │ └── models/ <span class="text-gray-500"># Your database models</span>
        ├── main.go <span class="text-gray-500"># Application entry point</span>
        ├── go.mod <span class="text-gray-500"># Go module dependencies</span>
        ├── .env <span class="text-gray-500"># Environment configuration</span>
        ├── Makefile <span class="text-gray-500"># Build automation</span>
        └── test/ <span class="text-gray-500"># Test infrastructure</span></code></pre>
            </div>
          </div>
        </section>


        <!-- Step 2: Understanding Core Modules -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step 2: Understanding Core Modules</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Base Framework comes with built-in core modules that provide essential functionality. Let's explore what's
            available
            in our blog project:
          </p>

          <UAlert color="blue" variant="soft" title="Core Modules Available"
            description="Your blog project includes core modules: profile (User management), media (File handling), authentication, and authorization."
            class="mb-6" />

          <div class="grid gap-4 md:grid-cols-2">
            <UCard>
              <div class="space-y-2">
                <h5 class="font-medium text-gray-900 dark:text-white">👤 Profile Module</h5>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• User model with auth features</li>
                  <li>• Profile management endpoints</li>
                  <li>• Avatar upload support</li>
                  <li>• Located at <UKbd size="sm">core/app/profile/</UKbd>
                  </li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <div class="space-y-2">
                <h5 class="font-medium text-gray-900 dark:text-white">📁 Media Module</h5>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• File and image management</li>
                  <li>• Upload validation</li>
                  <li>• Storage integration</li>
                  <li>• Located at <UKbd size="sm">core/app/media/</UKbd>
                  </li>
                </ul>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Step 3: Generate Post Module with Relationships -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step 3: Generate Post Module with
            Relationships</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Now let's generate our blog post module with relationships to the built-in core modules using
            <UKbd size="sm">belongsTo:profile.User</UKbd> and <UKbd size="sm">belongsTo:media.Media</UKbd>:
          </p>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-terminal" class="h-4 w-4 text-gray-500" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Terminal</span>
              </div>
            </template>

            <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300">
                <code>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Post</span> \
  title:string \
  content:text \
  slug:string \
  published:bool \
  author:belongsTo:profile.User \
  featured_image:belongsTo:media.Media   
                </code>
              </pre>
            </div>
          </UCard>

          <div class="mt-6">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Generated Output:</h4>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-700 dark:text-gray-300"><code>
<span class="text-green-600">Generated app/models/post.go</span>
<span class="text-green-600">Generated app/posts/service.go</span>
<span class="text-green-600">Generated app/posts/controller.go</span>
<span class="text-green-600">Generated app/posts/module.go</span>
<span class="text-green-600">Generated app/posts/validator.go</span>
<span class="text-blue-600">✅ Added module to app/init.go</span>
<span class="text-blue-600">✅ Dependencies updated</span>
<span class="text-blue-600">Successfully generated Post module</span></code></pre>
            </div>
          </div>

          <UAlert color="blue" variant="soft" title="BelongsTo Relationships with Core Models"
            description="Using belongsTo syntax with core modules creates proper foreign keys and relationships: AuthorId + Author *profile.User and FeaturedImageId + FeaturedImage *media.Media!"
            class="mt-6" />

          <div class="mt-6">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">What Was Created:</h4>
            <div class="grid gap-4 md:grid-cols-2">
              <UCard>
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">📄 Model (app/models/post.go)</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Post struct with GORM tags</li>
                    <li>• CreatePostRequest & UpdatePostRequest</li>
                    <li>• PostResponse & PostListResponse</li>
                    <li>• ToResponse() conversion methods</li>
                  </ul>
                </div>
              </UCard>

              <UCard>
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">🎮 Controller (app/posts/controller.go)</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• GET /posts (paginated list)</li>
                    <li>• POST /posts (create)</li>
                    <li>• GET /posts/:id (get by ID)</li>
                    <li>• PUT /posts/:id (update)</li>
                    <li>• DELETE /posts/:id (delete)</li>
                  </ul>
                </div>
              </UCard>

              <UCard>
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">⚙️ Service (app/posts/service.go)</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Business logic layer</li>
                    <li>• Database operations</li>
                    <li>• Data validation</li>
                    <li>• Error handling</li>
                  </ul>
                </div>
              </UCard>

              <UCard>
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">🔧 Module Registration</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Auto-registered in app/init.go</li>
                    <li>• Dependency injection setup</li>
                    <li>• Route registration</li>
                    <li>• Database migrations</li>
                  </ul>
                </div>
              </UCard>
            </div>
          </div>
        </section>

        <!-- Step 4: Start Server -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step 4: Start Your Blog API Server</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Let's start the server with Swagger documentation enabled to see our API in action:
          </p>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-terminal" class="h-4 w-4 text-gray-500" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Terminal</span>
              </div>
            </template>

            <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <pre class="text-sm text-gray-300"><code><span class="text-blue-400">base start</span> <span
            class="text-yellow-400">-d</span></code></pre>
            </div>
          </UCard>

          <div class="mt-6">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Server Output:</h4>
            <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-700 dark:text-gray-300">
                <code>
<span class="text-blue-600">📚 Generating swagger documentation...</span>
<span class="text-blue-600">📋 Found 40 endpoints across 7 controller files</span>
<span class="text-green-600">🚀 Starting Base Framework</span>
<span class="text-green-600">✅ Database initialized</span>
<span class="text-green-600">✅ Infrastructure initialized</span>
<span class="text-green-600">✅ Router initialized</span>
<span class="text-green-600">✅ Module initialization complete</span>

<span class="text-yellow-400">🎉 Base Framework Ready!</span>

<span class="text-cyan-400">📍 Server URLs:</span>
• Local: http://localhost:8100
• Network: http://192.168.1.35:8100

<span class="text-cyan-400">📚 Documentation:</span>
• Swagger: http://localhost:8100/swagger/index.html
              </code></pre>
            </div>
          </div>

          <UAlert color="green" variant="soft" title="Success!"
            description="Your blog API is now running with complete CRUD operations, automatic database migrations, and interactive API documentation!"
            class="mt-6" />
        </section>

        <!-- Step 5: Test the API -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step 5: Test Your Blog API</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Your blog API is now ready! Here are the automatically generated endpoints:
          </p>

          <div class="space-y-4">
            <div class="grid gap-3">
              <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UBadge color="blue" variant="soft" size="sm">POST</UBadge>
                <UKbd>/api/posts</UKbd>
                <span class="text-sm text-gray-600 dark:text-gray-400">Create a new blog post</span>
              </div>
              <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UBadge color="green" variant="soft" size="sm">GET</UBadge>
                <UKbd>/api/posts</UKbd>
                <span class="text-sm text-gray-600 dark:text-gray-400">Get paginated list of posts</span>
              </div>
              <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UBadge color="green" variant="soft" size="sm">GET</UBadge>
                <UKbd>/api/posts/all</UKbd>
                <span class="text-sm text-gray-600 dark:text-gray-400">Get all posts (unpaginated)</span>
              </div>
              <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UBadge color="green" variant="soft" size="sm">GET</UBadge>
                <UKbd>/api/posts/:id</UKbd>
                <span class="text-sm text-gray-600 dark:text-gray-400">Get specific post by ID</span>
              </div>
              <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UBadge color="yellow" variant="soft" size="sm">PUT</UBadge>
                <UKbd>/api/posts/:id</UKbd>
                <span class="text-sm text-gray-600 dark:text-gray-400">Update existing post</span>
              </div>
              <div class="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <UBadge color="red" variant="soft" size="sm">DELETE</UBadge>
                <UKbd>/api/posts/:id</UKbd>
                <span class="text-sm text-gray-600 dark:text-gray-400">Delete post</span>
              </div>
            </div>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-4">Try It Out - Create Your First User and
              Post</h4>

            <div class="space-y-4">
              <UCard>
                <template #header>
                  <div class="flex items-center space-x-2">
                    <UIcon name="i-lucide-user" class="h-4 w-4 text-green-500" />
                    <span class="text-sm font-medium">First, create a user</span>
                  </div>
                </template>

                <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                  <pre class="text-sm text-gray-300"><code><span class="text-blue-400">curl</span> -X POST \
  http://localhost:8100/api/users \
  -H <span class="text-green-400">"Content-Type: application/json"</span> \
  -d <span class="text-yellow-400">'{
        "name": "John Doe",
        "email": "john@example.com"
      }'</span></code></pre>
                </div>
              </UCard>

              <UCard>
                <template #header>
                  <div class="flex items-center space-x-2">
                    <UIcon name="i-lucide-file-text" class="h-4 w-4 text-blue-500" />
                    <span class="text-sm font-medium">Then, create a post with the user relationship</span>
                  </div>
                </template>

                <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                  <pre class="text-sm text-gray-300"><code><span class="text-blue-400">curl</span> -X POST \
  http://localhost:8100/api/posts \
  -H <span class="text-green-400">"Content-Type: application/json"</span> \
  -d <span class="text-yellow-400">'{
        "title": "My First Blog Post",
        "content": "My first blog post with Base Framework!",
        "slug": "my-first-blog-post",
        "published": true,
        "author_id": 1
      }'</span></code></pre>
                </div>
              </UCard>
            </div>
          </div>
        </section>

        <!-- Step 6: Explore -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Step 6: Explore What You Built</h2>

          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-book-open" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Interactive API Documentation</span>
                </div>
              </template>

              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Visit <UKbd size="sm">http://localhost:8100/swagger/</UKbd> to explore your API interactively.
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Try all endpoints directly in the browser</li>
                  <li>• See request/response schemas</li>
                  <li>• Generate client code</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-database" class="h-4 w-4 text-green-500" />
                  <span class="font-semibold">Database Ready</span>
                </div>
              </template>

              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Your database is automatically configured with:
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Auto-migrations for Post model</li>
                  <li>• GORM relationships</li>
                  <li>• Optimized indexes</li>
                </ul>
              </div>
            </UCard>
          </div>

          <div class="mt-8">
            <h4 class="text-lg font-medium text-gray-900 dark:text-white mb-4">What's Next?</h4>
            <div class="space-y-3">
              <div class="flex items-start space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <UIcon name="i-lucide-plus-circle" class="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h5 class="font-medium text-blue-900 dark:text-blue-100">Complete Blog Example</h5>
                  <p class="text-sm text-blue-800 dark:text-blue-200">See the complete implementation below with all
                    relationships</p>
                </div>
              </div>

              <div class="flex items-start space-x-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <UIcon name="i-lucide-shield-check" class="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h5 class="font-medium text-green-900 dark:text-green-100">Add Authentication</h5>
                  <p class="text-sm text-green-800 dark:text-green-200">Enable built-in authentication with JWT tokens
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <UIcon name="i-lucide-upload" class="h-5 w-5 text-purple-600 mt-0.5" />
                <div>
                  <h5 class="font-medium text-purple-900 dark:text-purple-100">Add File Uploads</h5>
                  <p class="text-sm text-purple-800 dark:text-purple-200">Use field types like image:image or
                    attachment:file
                    for media</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Complete Blog Implementation -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Complete Blog Implementation</h2>

          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Let's build a comprehensive blog system showcasing Base Framework's full capabilities including file
            uploads,
            relationships, various field types, and event system:
          </p>

          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-layers" class="h-4 w-4 text-purple-500" />
                  <span class="font-semibold">Full-Featured Blog Generation</span>
                </div>
              </template>

              <div class="space-y-4">
                <div class="border-l-4 border-yellow-500 pl-4">
                  <h5 class="font-medium text-gray-900 dark:text-white">1. Generate Category Module</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mt-2 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Terminal</span>
                      <button
                        class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors"
                        @click="copyToClipboard(`base g Category \\
  name:string \\
  description:text \\
  slug:string \\
  color:string`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap">
              <code>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Category</span> <span
  class="text-green-400">\
  name:string \
  description:text \
  slug:string \
  color:string</span>
              </code>
            </pre>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Creates Category for organizing posts (one-to-many)
                  </p>
                </div>

                <div class="border-l-4 border-purple-500 pl-4">
                  <h5 class="font-medium text-gray-900 dark:text-white">2. Generate Tag Module</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mt-2 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Terminal</span>
                      <button
                        class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors"
                        @click="copyToClipboard(`base g Tag \\\n  name:string \\\n  slug:string \\\n  color:string \\\n  description:text`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap">
              <code>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Tag</span> <span
  class="text-green-400">\
  name:string \
  slug:string \
  color:string \
  description:text</span>
              </code>
            </pre>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Creates Tag system for labeling posts (many-to-many)
                  </p>
                </div>

                <div class="border-l-4 border-green-500 pl-4">
                  <h5 class="font-medium text-gray-900 dark:text-white">3. Generate Comprehensive Post Module</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mt-2 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Terminal</span>
                      <button
                        class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors"
                        @click="copyToClipboard(`base g Post \\\n  title:string \\\n  content:text \\\n  slug:string \\\n  excerpt:text \\\n  published:bool \\\n  featured_image:image \\\n  gallery:attachment \\\n  author:belongsTo:profile.User \\\n  category:belongsTo:Category \\\n  tags:toMany:Tag \\\n  publish_date:datetime \\\n  view_count:int`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap">
              <code>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Post</span> <span
  class="text-green-400">\
  title:string \
  content:text \
  slug:string \
  excerpt:text \
  published:bool \
  featured_image:image \
  gallery:attachment \
  author:belongsTo:profile.User \
  category:belongsTo:Category \
  tags:toMany:Tag \
  publish_date:datetime \
  view_count:int
</span>
              </code>
            </pre>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <strong>Demonstrates multiple relationship types:</strong> belongsTo core modules, belongsTo custom
                    modules,
                    plus all field types
                  </p>
                </div>

                <div class="border-l-4 border-blue-500 pl-4">
                  <h5 class="font-medium text-gray-900 dark:text-white">4. Generate Advanced Comment System</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mt-2 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Terminal</span>
                      <button
                        class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors"
                        @click="copyToClipboard(`base g Comment \\\n  content:text \\\n  post:belongsTo:Post \\\n  author:belongsTo:profile.User \\\n  parent_comment:belongsTo:Comment \\\n  reply_to_email:email \\\n  approved:bool \\\n  ip_address:string \\\n  user_agent:text`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap">
              <code>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Comment</span> <span
  class="text-green-400">\
  content:text \
  post:belongsTo:Post \
  author:belongsTo:profile.User \
  parent_comment:belongsTo:Comment \
  reply_to_email:email \
  approved:bool \
  ip_address:string \
  user_agent:text</span>
              </code>
            </pre>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    <strong>Advanced features:</strong> nested comments, email validation, moderation, tracking fields
                  </p>
                </div>

                <div class="border-l-4 border-orange-500 pl-4">
                  <h5 class="font-medium text-gray-900 dark:text-white">5. Start with Full Documentation</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 mt-2 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Terminal</span>
                      <button
                        class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors"
                        @click="copyToClipboard(`base start -d`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">base start</span>
                <span class="text-yellow-400">-d</span></code></pre>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Includes automatic file upload endpoints, validation, and Swagger docs
                  </p>
                </div>
              </div>
            </UCard>



            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-type" class="h-4 w-4 text-purple-500" />
                  <span class="font-semibold">Field Types Demonstrated</span>
                </div>
              </template>

              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Basic Types</h5>
                  <div class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <div class="flex items-center space-x-2">
                      <UBadge color="blue" variant="soft" size="sm">string</UBadge>
                      <span>Short text fields</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="green" variant="soft" size="sm">text</UBadge>
                      <span>Long text content</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="purple" variant="soft" size="sm">bool</UBadge>
                      <span>True/false values</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="orange" variant="soft" size="sm">int</UBadge>
                      <span>Numeric values</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="red" variant="soft" size="sm">datetime</UBadge>
                      <span>Date and time</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Advanced Types</h5>
                  <div class="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <div class="flex items-center space-x-2">
                      <UBadge color="cyan" variant="soft" size="sm">email</UBadge>
                      <span>Email validation</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="pink" variant="soft" size="sm">image</UBadge>
                      <span>Image uploads</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="indigo" variant="soft" size="sm">attachment</UBadge>
                      <span>File uploads</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="yellow" variant="soft" size="sm">belongsTo</UBadge>
                      <span>Relationships</span>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-api" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Generated API Endpoints (40+ endpoints)</span>
                </div>
              </template>

              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Categories API</h5>
                  <div class="space-y-1 text-sm">
                    <div class="flex items-center space-x-2">
                      <UBadge color="green" variant="soft" size="sm">CRUD</UBadge>
                      <UKbd size="sm">/api/categories</UKbd>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Tags API</h5>
                  <div class="space-y-1 text-sm">
                    <div class="flex items-center space-x-2">
                      <UBadge color="purple" variant="soft" size="sm">CRUD</UBadge>
                      <UKbd size="sm">/api/tags</UKbd>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Posts API + File Uploads</h5>
                  <div class="space-y-1 text-sm">
                    <div class="flex items-center space-x-2">
                      <UBadge color="blue" variant="soft" size="sm">CRUD</UBadge>
                      <UKbd size="sm">/api/posts/*</UKbd>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="pink" variant="soft" size="sm">POST</UBadge>
                      <UKbd size="sm">/api/posts/:id/featured_image</UKbd>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="pink" variant="soft" size="sm">DELETE</UBadge>
                      <UKbd size="sm">/api/posts/:id/featured_image</UKbd>
                    </div>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Comments + Core</h5>
                  <div class="space-y-1 text-sm">
                    <div class="flex items-center space-x-2">
                      <UBadge color="green" variant="soft" size="sm">CRUD</UBadge>
                      <UKbd size="sm">/api/comments/*</UKbd>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="purple" variant="soft" size="sm">GET</UBadge>
                      <UKbd size="sm">/api/profile/*</UKbd>
                    </div>
                    <div class="flex items-center space-x-2">
                      <UBadge color="purple" variant="soft" size="sm">POST</UBadge>
                      <UKbd size="sm">/api/auth/*</UKbd>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <p class="text-sm text-blue-800 dark:text-blue-200">
                  <strong>✨ Automatic Features:</strong> 50+ endpoints with pagination, sorting, filtering, validation,
                  file
                  upload endpoints, relationship preloading, Swagger docs, and event emission!
                </p>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-upload" class="h-4 w-4 text-orange-500" />
                  <span class="font-semibold">File Upload Examples</span>
                </div>
              </template>

              <div class="space-y-4">
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Upload Featured Image to Post</h5>
                  <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-3">
                    <pre class="text-sm text-gray-300">
                      <code>
<span class="text-blue-400">curl</span> -X POST http://localhost:8100/api/posts/1/featured_image \
  -H <span class="text-green-400">"Content-Type: multipart/form-data"</span> \
  -F <span class="text-yellow-400">"file=@hero-image.jpg"</span>
                      </code>
                    </pre>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    Automatic validation, resizing, storage, and database association
                  </p>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Create Post with Rich Content</h5>
                  <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-3">
                    <pre class="text-sm text-gray-300">
                      <code>
<span class="text-blue-400">curl</span> -X POST http://localhost:8100/api/posts \
-H <span class="text-green-400">"Content-Type: application/json"</span> \
-d <span class="text-yellow-400">'{
      "title": "Advanced Blog Post",
      "content": "Full HTML content...",
      "excerpt": "Post summary",
      "slug": "advanced-blog-post",
      "published": true,
      "tags": "tech,base-framework,tutorial",
      "publish_date": "2024-12-01T10:00:00Z",
      "view_count": 0,
      "author_id": 1,
      "category_id": 1
    }'</span>
                      </code></pre>
                  </div>
                </div>
              </div>
            </UCard>

            <UAlert color="green" variant="soft" title="🎉 Production-Ready Blog API Generated!"
              description="Complete blog system with 50+ endpoints, multiple relationship types, file uploads, email validation, nested comments, tagging system, event emission, user authentication, media management, and comprehensive Swagger documentation - all from 4 simple commands!" />

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-zap" class="h-4 w-4 text-yellow-500" />
                  <span class="font-semibold">Base Framework Features Demonstrated</span>
                </div>
              </template>

              <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">🔧 Code Generation</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Models with GORM tags</li>
                    <li>• Controllers with validation</li>
                    <li>• Services with business logic</li>
                    <li>• Module registration</li>
                  </ul>
                </div>

                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">📁 File Management</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Image upload & validation</li>
                    <li>• File attachment handling</li>
                    <li>• Storage abstraction</li>
                    <li>• Automatic cleanup</li>
                  </ul>
                </div>

                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">🔗 Relationship Types</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• <UKbd size="sm">belongsTo:profile.User</UKbd> (core)</li>
                    <li>• <UKbd size="sm">belongsTo:Category</UKbd> (custom)</li>
                    <li>• <UKbd size="sm">belongsTo:Tag</UKbd> (labeling)</li>
                    <li>• <UKbd size="sm">belongsTo:Comment</UKbd> (self-ref)</li>
                  </ul>
                </div>

                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">✅ Validation</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Email format validation</li>
                    <li>• Required field checks</li>
                    <li>• File type validation</li>
                    <li>• Custom validation rules</li>
                  </ul>
                </div>

                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">🎯 Event System</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Post creation events</li>
                    <li>• File upload events</li>
                    <li>• Comment moderation</li>
                    <li>• Email notifications</li>
                  </ul>
                </div>

                <div class="space-y-2">
                  <h5 class="font-medium text-gray-900 dark:text-white">📚 Documentation</h5>
                  <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Swagger/OpenAPI specs</li>
                    <li>• Interactive API explorer</li>
                    <li>• Request/response schemas</li>
                    <li>• Authentication docs</li>
                  </ul>
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
import { useClipboard } from '@vueuse/core'

const { copy, copied, isSupported } = useClipboard()

async function copyToClipboard(text: string, event?: Event) {
  if (!isSupported.value) {
    console.error('Clipboard API not supported')
    return
  }

  await copy(text)

  const buttonElement = event?.target as HTMLElement
  if (buttonElement && copied.value) {
    const originalText = buttonElement.textContent
    buttonElement.textContent = 'Copied!'
    setTimeout(() => {
      buttonElement.textContent = originalText
    }, 2000)
  }
}
</script>