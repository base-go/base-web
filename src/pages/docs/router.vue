<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Router</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Zero-dependency HTTP router with radix tree routing, middleware chaining, and high-performance request handling
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>🚀 High-Performance Router</template>
          <template #description>
            Base Framework's router is a lightweight, zero-dependency HTTP router built with radix tree routing for optimal performance. It features middleware chaining, context pooling, and comprehensive request/response handling.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-yellow-500" />
                <span class="font-semibold">Radix Tree Routing</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Efficient URL pattern matching with parameter extraction and wildcard support.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Middleware Chaining</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Composable middleware with global and route-specific support for cross-cutting concerns.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-cpu" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Context Pooling</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Memory-efficient context reuse with zero-allocation routing for high-throughput applications.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Route Definition -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Route Definition & Registration</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-route" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Basic Route Registration</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Basic HTTP Methods</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code>r := router.<span class="text-yellow-400">New</span>()

<span class="text-green-400">// Basic HTTP methods</span>
r.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/users"</span>, handleGetUsers)
r.<span class="text-yellow-400">POST</span>(<span class="text-green-400">"/users"</span>, handleCreateUser)
r.<span class="text-yellow-400">PUT</span>(<span class="text-green-400">"/users/:id"</span>, handleUpdateUser)
r.<span class="text-yellow-400">DELETE</span>(<span class="text-green-400">"/users/:id"</span>, handleDeleteUser)
r.<span class="text-yellow-400">PATCH</span>(<span class="text-green-400">"/users/:id"</span>, handlePatchUser)

<span class="text-green-400">// Generic handler for any HTTP method</span>
r.<span class="text-yellow-400">Handle</span>(<span class="text-green-400">"GET"</span>, <span class="text-green-400">"/custom"</span>, handleCustom)</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-folder-tree" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Route Groups</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Grouping Routes with Prefixes</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// API v1 group</span>
api := r.<span class="text-yellow-400">Group</span>(<span class="text-green-400">"/api/v1"</span>)
api.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/users"</span>, handleGetUsers)
api.<span class="text-yellow-400">POST</span>(<span class="text-green-400">"/users"</span>, handleCreateUser)

<span class="text-green-400">// Admin group with middleware</span>
admin := r.<span class="text-yellow-400">Group</span>(<span class="text-green-400">"/admin"</span>, AuthMiddleware(), AdminMiddleware())
admin.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/users"</span>, handleAdminGetUsers)
admin.<span class="text-yellow-400">DELETE</span>(<span class="text-green-400">"/users/:id"</span>, handleAdminDeleteUser)

<span class="text-green-400">// Nested groups</span>
v2 := api.<span class="text-yellow-400">Group</span>(<span class="text-green-400">"/v2"</span>)
v2.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/posts"</span>, handleGetPostsV2)

<span class="text-green-400">// Group with multiple middleware</span>
protected := r.<span class="text-yellow-400">Group</span>(<span class="text-green-400">"/protected"</span>, 
    middleware.Logger(loggerConfig),
    middleware.Auth(authConfig),
    middleware.RateLimit(rateLimitConfig),
)
protected.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/profile"</span>, handleProfile)</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Context API -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Context API & Request Handling</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-file-text" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Context Interface</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Basic Handler Function</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> <span class="text-yellow-400">handleUser</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Access request information</span>
    method := c.Request.Method
    path := c.Request.URL.Path
    userAgent := c.Request.UserAgent()
    clientIP := c.ClientIP()
    
    <span class="text-green-400">// Get headers</span>
    authHeader := c.Header(<span class="text-green-400">"Authorization"</span>)
    contentType := c.ContentType()
    
    <span class="text-green-400">// Store data in context for other middleware/handlers</span>
    c.Set(<span class="text-green-400">"user_id"</span>, <span class="text-purple-400">123</span>)
    c.Set(<span class="text-green-400">"request_start"</span>, time.Now())
    
    <span class="text-green-400">// Retrieve stored data</span>
    userID, exists := c.Get(<span class="text-green-400">"user_id"</span>)
    <span class="text-blue-400">if</span> exists {
        c.Logger.Info(<span class="text-green-400">"Processing for user"</span>, <span class="text-green-400">"id"</span>, userID)
    }
    
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">200</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-blue-400">any</span>{
        <span class="text-green-400">"message"</span>: <span class="text-green-400">"Success"</span>,
        <span class="text-green-400">"ip"</span>: clientIP,
        <span class="text-green-400">"method"</span>: method,
    })
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Route Parameters -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Route Parameters & Query Strings</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-link" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">URL Parameters</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Parameter Extraction</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Route with parameters</span>
r.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/users/:id/posts/:postId"</span>, <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Named parameters</span>
    userID := c.Param(<span class="text-green-400">"id"</span>)
    postID := c.Param(<span class="text-green-400">"postId"</span>)
    
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">200</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
        <span class="text-green-400">"user_id"</span>: userID,
        <span class="text-green-400">"post_id"</span>: postID,
    })
})

<span class="text-green-400">// Wildcard routes</span>
r.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/files/*filepath"</span>, <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
    filepath := c.Param(<span class="text-green-400">"filepath"</span>)
    <span class="text-green-400">// filepath captures everything after /files/</span>
    <span class="text-blue-400">return</span> c.File(<span class="text-green-400">"./static/"</span> + filepath)
})

<span class="text-green-400">// Multiple parameters with validation</span>
r.<span class="text-yellow-400">GET</span>(<span class="text-green-400">"/api/v1/users/:id/orders/:orderNumber"</span>, <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
    userID := c.Param(<span class="text-green-400">"id"</span>)
    orderNumber := c.Param(<span class="text-green-400">"orderNumber"</span>)
    
    <span class="text-green-400">// Convert to appropriate types</span>
    id, err := strconv.Atoi(userID)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid user ID"</span>})
    }
    
    <span class="text-blue-400">return</span> handleOrder(c, id, orderNumber)
})</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-search" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Query Parameters</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Query String Handling</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> <span class="text-yellow-400">handleSearch</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Single query parameter</span>
    query := c.Query(<span class="text-green-400">"q"</span>)
    page := c.DefaultQuery(<span class="text-green-400">"page"</span>, <span class="text-green-400">"1"</span>)
    
    <span class="text-green-400">// Check if parameter exists</span>
    category, exists := c.GetQuery(<span class="text-green-400">"category"</span>)
    <span class="text-blue-400">if</span> !exists {
        category = <span class="text-green-400">"all"</span>
    }
    
    <span class="text-green-400">// Multiple values for same parameter</span>
    tags, hasTag := c.GetQueryArray(<span class="text-green-400">"tags"</span>)
    <span class="text-blue-400">if</span> hasTag {
        <span class="text-green-400">// Process array of tags: ?tags=go&tags=web&tags=api</span>
        c.Logger.Info(<span class="text-green-400">"Tags"</span>, <span class="text-green-400">"values"</span>, tags)
    }
    
    <span class="text-green-400">// Convert query parameters</span>
    limitStr := c.DefaultQuery(<span class="text-green-400">"limit"</span>, <span class="text-green-400">"10"</span>)
    limit, err := strconv.Atoi(limitStr)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
            <span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid limit parameter"</span>,
        })
    }
    
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">200</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-blue-400">any</span>{
        <span class="text-green-400">"query"</span>: query,
        <span class="text-green-400">"page"</span>: page,
        <span class="text-green-400">"category"</span>: category,
        <span class="text-green-400">"tags"</span>: tags,
        <span class="text-green-400">"limit"</span>: limit,
    })
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Request Binding -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Request Binding & Validation</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-file-input" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">JSON & Form Binding</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Auto Content-Type Detection</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">CreateUserRequest</span> <span class="text-blue-400">struct</span> {
    Name     <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"name" form:"name" validate:"required,min=2"`</span>
    Email    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"email" form:"email" validate:"required,email"`</span>
    Age      <span class="text-purple-400">int</span>    <span class="text-gray-400">`json:"age" form:"age" validate:"min=18,max=100"`</span>
    IsActive <span class="text-purple-400">bool</span>   <span class="text-gray-400">`json:"is_active" form:"is_active"`</span>
}

<span class="text-blue-400">func</span> <span class="text-yellow-400">createUser</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">var</span> req CreateUserRequest
    
    <span class="text-green-400">// Auto-detects content type and binds accordingly</span>
    <span class="text-blue-400">if</span> err := c.Bind(&req); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
            <span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid request format"</span>,
            <span class="text-green-400">"details"</span>: err.Error(),
        })
    }
    
    <span class="text-green-400">// Manual binding for specific content types</span>
    <span class="text-blue-400">var</span> jsonReq CreateUserRequest
    <span class="text-blue-400">if</span> err := c.BindJSON(&jsonReq); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid JSON"</span>})
    }
    
    <span class="text-green-400">// Form binding</span>
    <span class="text-blue-400">var</span> formReq CreateUserRequest
    <span class="text-blue-400">if</span> err := c.BindForm(&formReq); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid form data"</span>})
    }
    
    <span class="text-green-400">// Query parameter binding</span>
    <span class="text-blue-400">var</span> queryReq CreateUserRequest
    <span class="text-blue-400">if</span> err := c.BindQuery(&queryReq); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid query params"</span>})
    }
    
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">201</span>, req)
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-upload" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">File Upload Handling</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Multipart File Handling</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> <span class="text-yellow-400">uploadFile</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Single file upload</span>
    file, err := c.FormFile(<span class="text-green-400">"upload"</span>)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
            <span class="text-green-400">"error"</span>: <span class="text-green-400">"No file provided"</span>,
        })
    }
    
    <span class="text-green-400">// Access file metadata</span>
    filename := file.Filename
    size := file.Size
    contentType := file.Header.Get(<span class="text-green-400">"Content-Type"</span>)
    
    <span class="text-green-400">// Process multipart form</span>
    form, err := c.MultipartForm()
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
            <span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid multipart form"</span>,
        })
    }
    
    <span class="text-green-400">// Handle multiple files</span>
    files := form.File[<span class="text-green-400">"files"</span>]
    <span class="text-blue-400">for</span> _, fileHeader := <span class="text-blue-400">range</span> files {
        <span class="text-green-400">// Process each file</span>
        file, err := fileHeader.Open()
        <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
            <span class="text-blue-400">continue</span>
        }
        <span class="text-blue-400">defer</span> file.Close()
        
        <span class="text-green-400">// Save file logic here</span>
        c.Logger.Info(<span class="text-green-400">"Processing file"</span>, <span class="text-green-400">"name"</span>, fileHeader.Filename)
    }
    
    <span class="text-green-400">// Get form values from multipart form</span>
    title := c.FormValue(<span class="text-green-400">"title"</span>)
    description := c.FormValue(<span class="text-green-400">"description"</span>)
    
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">200</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-blue-400">any</span>{
        <span class="text-green-400">"message"</span>: <span class="text-green-400">"Files uploaded successfully"</span>,
        <span class="text-green-400">"filename"</span>: filename,
        <span class="text-green-400">"size"</span>: size,
        <span class="text-green-400">"content_type"</span>: contentType,
        <span class="text-green-400">"title"</span>: title,
    })
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Response Methods -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Response Methods & Content Types</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-send" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">JSON & Data Responses</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Response Formats</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> <span class="text-yellow-400">handleResponses</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// JSON response</span>
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">200</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-blue-400">any</span>{
        <span class="text-green-400">"message"</span>: <span class="text-green-400">"Success"</span>,
        <span class="text-green-400">"data"</span>: []<span class="text-purple-400">string</span>{<span class="text-green-400">"item1"</span>, <span class="text-green-400">"item2"</span>},
        <span class="text-green-400">"count"</span>: <span class="text-purple-400">2</span>,
    })
    
    <span class="text-green-400">// String response</span>
    <span class="text-blue-400">return</span> c.String(<span class="text-purple-400">200</span>, <span class="text-green-400">"Plain text response"</span>)
    
    <span class="text-green-400">// HTML response</span>
    html := <span class="text-green-400">`&lt;h1&gt;Hello World&lt;/h1&gt;&lt;p&gt;This is HTML content&lt;/p&gt;`</span>
    <span class="text-blue-400">return</span> c.HTML(<span class="text-purple-400">200</span>, html)
    
    <span class="text-green-400">// Raw data response</span>
    data := []<span class="text-purple-400">byte</span>(<span class="text-green-400">"binary data here"</span>)
    <span class="text-blue-400">return</span> c.Data(<span class="text-purple-400">200</span>, <span class="text-green-400">"application/octet-stream"</span>, data)
    
    <span class="text-green-400">// File response</span>
    c.File(<span class="text-green-400">"/path/to/file.pdf"</span>)
    
    <span class="text-green-400">// No content response</span>
    <span class="text-blue-400">return</span> c.NoContent()
    
    <span class="text-green-400">// Custom headers with response</span>
    c.SetHeader(<span class="text-green-400">"X-Custom-Header"</span>, <span class="text-green-400">"custom-value"</span>)
    c.SetHeader(<span class="text-green-400">"Cache-Control"</span>, <span class="text-green-400">"max-age=3600"</span>)
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">200</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"status"</span>: <span class="text-green-400">"ok"</span>})
}

<span class="text-green-400">// Error response helper</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">handleError</span>(c *router.Context) <span class="text-purple-400">error</span> {
    err := errors.New(<span class="text-green-400">"something went wrong"</span>)
    <span class="text-blue-400">return</span> c.Error(<span class="text-purple-400">500</span>, err) <span class="text-green-400">// Automatically formats as JSON error</span>
}

<span class="text-green-400">// Redirect responses</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">handleRedirect</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">return</span> c.Redirect(<span class="text-purple-400">302</span>, <span class="text-green-400">"https://example.com"</span>)
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Middleware -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Middleware Usage & Custom Middleware</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Built-in Middleware</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Common Middleware Setup</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">import</span> (
    <span class="text-green-400">"base/core/router"</span>
    <span class="text-green-400">"base/core/router/middleware"</span>
    <span class="text-green-400">"base/core/logger"</span>
)

<span class="text-blue-400">func</span> <span class="text-yellow-400">setupRouter</span>() *router.Router {
    r := router.New()
    log := logger.New()
    
    <span class="text-green-400">// Global middleware (applied to all routes)</span>
    r.Use(middleware.Recovery(log))
    r.Use(middleware.RequestID())
    r.Use(middleware.Logger(middleware.DefaultLoggerConfig(log)))
    r.Use(middleware.RateLimit(middleware.DefaultRateLimitConfig()))
    
    <span class="text-green-400">// Authentication middleware</span>
    authConfig := middleware.DefaultAuthConfig()
    authConfig.TokenValidator = validateJWTToken
    authConfig.SkipPaths = []<span class="text-purple-400">string</span>{<span class="text-green-400">"/login"</span>, <span class="text-green-400">"/register"</span>, <span class="text-green-400">"/health"</span>}
    
    <span class="text-green-400">// Public routes</span>
    r.GET(<span class="text-green-400">"/health"</span>, handleHealth)
    r.POST(<span class="text-green-400">"/login"</span>, handleLogin)
    r.POST(<span class="text-green-400">"/register"</span>, handleRegister)
    
    <span class="text-green-400">// Protected routes group</span>
    api := r.Group(<span class="text-green-400">"/api/v1"</span>, middleware.Auth(authConfig))
    api.GET(<span class="text-green-400">"/profile"</span>, handleProfile)
    api.PUT(<span class="text-green-400">"/profile"</span>, handleUpdateProfile)
    
    <span class="text-green-400">// Admin routes with additional middleware</span>
    admin := r.Group(<span class="text-green-400">"/admin"</span>, 
        middleware.Auth(authConfig),
        middleware.RequireAuth(<span class="text-green-400">"user"</span>),
        adminMiddleware,
    )
    admin.GET(<span class="text-green-400">"/users"</span>, handleGetUsers)
    admin.DELETE(<span class="text-green-400">"/users/:id"</span>, handleDeleteUser)
    
    <span class="text-blue-400">return</span> r
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-wrench" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">Custom Middleware</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Creating Custom Middleware</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Custom CORS middleware</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">CORSMiddleware</span>() router.MiddlewareFunc {
    <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(next router.HandlerFunc) router.HandlerFunc {
        <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
            <span class="text-green-400">// Set CORS headers</span>
            c.SetHeader(<span class="text-green-400">"Access-Control-Allow-Origin"</span>, <span class="text-green-400">"*"</span>)
            c.SetHeader(<span class="text-green-400">"Access-Control-Allow-Methods"</span>, <span class="text-green-400">"GET, POST, PUT, DELETE, OPTIONS"</span>)
            c.SetHeader(<span class="text-green-400">"Access-Control-Allow-Headers"</span>, <span class="text-green-400">"Content-Type, Authorization"</span>)
            
            <span class="text-green-400">// Handle preflight requests</span>
            <span class="text-blue-400">if</span> c.Request.Method == <span class="text-green-400">"OPTIONS"</span> {
                <span class="text-blue-400">return</span> c.NoContent()
            }
            
            <span class="text-blue-400">return</span> next(c)
        }
    }
}

<span class="text-green-400">// Timing middleware</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">TimingMiddleware</span>() router.MiddlewareFunc {
    <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(next router.HandlerFunc) router.HandlerFunc {
        <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
            start := time.Now()
            
            <span class="text-green-400">// Process request</span>
            err := next(c)
            
            <span class="text-green-400">// Add timing header</span>
            duration := time.Since(start)
            c.SetHeader(<span class="text-green-400">"X-Response-Time"</span>, duration.String())
            
            <span class="text-blue-400">return</span> err
        }
    }
}

<span class="text-green-400">// Role-based access control middleware</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">RequireRole</span>(role <span class="text-purple-400">string</span>) router.MiddlewareFunc {
    <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(next router.HandlerFunc) router.HandlerFunc {
        <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
            user, exists := c.Get(<span class="text-green-400">"user"</span>)
            <span class="text-blue-400">if</span> !exists {
                <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">401</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
                    <span class="text-green-400">"error"</span>: <span class="text-green-400">"Authentication required"</span>,
                })
            }
            
            userRole := getUserRole(user)
            <span class="text-blue-400">if</span> userRole != role && userRole != <span class="text-green-400">"admin"</span> {
                <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">403</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
                    <span class="text-green-400">"error"</span>: <span class="text-green-400">"Insufficient permissions"</span>,
                })
            }
            
            <span class="text-blue-400">return</span> next(c)
        }
    }
}

<span class="text-green-400">// API versioning middleware</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">APIVersionMiddleware</span>() router.MiddlewareFunc {
    <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(next router.HandlerFunc) router.HandlerFunc {
        <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
            version := c.Header(<span class="text-green-400">"API-Version"</span>)
            <span class="text-blue-400">if</span> version == <span class="text-green-400">""</span> {
                version = <span class="text-green-400">"v1"</span> <span class="text-green-400">// default</span>
            }
            
            c.Set(<span class="text-green-400">"api_version"</span>, version)
            c.SetHeader(<span class="text-green-400">"API-Version"</span>, version)
            
            <span class="text-blue-400">return</span> next(c)
        }
    }
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Error Handling -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Error Handling & HTTP Status Codes</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-alert-triangle" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Error Responses & Recovery</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Error Handling Patterns</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Custom error types</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">APIError</span> <span class="text-blue-400">struct</span> {
    Code    <span class="text-purple-400">int</span>    <span class="text-gray-400">`json:"code"`</span>
    Message <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"message"`</span>
    Details <span class="text-blue-400">any</span>    <span class="text-gray-400">`json:"details,omitempty"`</span>
}

<span class="text-blue-400">func</span> (e APIError) <span class="text-yellow-400">Error</span>() <span class="text-purple-400">string</span> {
    <span class="text-blue-400">return</span> e.Message
}

<span class="text-green-400">// Error handler with detailed responses</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">handleUserCreate</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">var</span> req CreateUserRequest
    
    <span class="text-blue-400">if</span> err := c.Bind(&req); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, APIError{
            Code:    <span class="text-purple-400">40001</span>,
            Message: <span class="text-green-400">"Invalid request format"</span>,
            Details: err.Error(),
        })
    }
    
    <span class="text-green-400">// Validation</span>
    <span class="text-blue-400">if</span> req.Email == <span class="text-green-400">""</span> {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, APIError{
            Code:    <span class="text-purple-400">40002</span>,
            Message: <span class="text-green-400">"Email is required"</span>,
        })
    }
    
    user, err := userService.Create(req)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">if</span> errors.Is(err, ErrUserExists) {
            <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">409</span>, APIError{
                Code:    <span class="text-purple-400">40901</span>,
                Message: <span class="text-green-400">"User already exists"</span>,
            })
        }
        
        <span class="text-green-400">// Log internal errors but don't expose details</span>
        c.Logger.Error(<span class="text-green-400">"Failed to create user"</span>, <span class="text-green-400">"error"</span>, err)
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">500</span>, APIError{
            Code:    <span class="text-purple-400">50001</span>,
            Message: <span class="text-green-400">"Internal server error"</span>,
        })
    }
    
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">201</span>, user)
}

<span class="text-green-400">// Global error handler</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">ErrorHandler</span>(c *router.Context, err <span class="text-purple-400">error</span>) {
    <span class="text-blue-400">var</span> apiErr APIError
    
    <span class="text-blue-400">switch</span> e := err.(<span class="text-blue-400">type</span>) {
    <span class="text-blue-400">case</span> APIError:
        apiErr = e
    <span class="text-blue-400">case</span> *validation.ValidationError:
        apiErr = APIError{
            Code:    <span class="text-purple-400">40003</span>,
            Message: <span class="text-green-400">"Validation failed"</span>,
            Details: e.Fields,
        }
    <span class="text-blue-400">default</span>:
        apiErr = APIError{
            Code:    <span class="text-purple-400">50000</span>,
            Message: <span class="text-green-400">"Internal server error"</span>,
        }
    }
    
    c.JSON(apiErr.Code/<span class="text-purple-400">100</span>, apiErr)
}

<span class="text-green-400">// Custom 404 handler</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">notFoundHandler</span>(c *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">404</span>, APIError{
        Code:    <span class="text-purple-400">40401</span>,
        Message: <span class="text-green-400">"Endpoint not found"</span>,
        Details: <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
            <span class="text-green-400">"path"</span>:   c.Request.URL.Path,
            <span class="text-green-400">"method"</span>: c.Request.Method,
        },
    })
}

<span class="text-green-400">// Setup router with error handling</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">setupErrorHandling</span>() {
    r := router.New()
    
    <span class="text-green-400">// Set custom 404 handler</span>
    r.NotFound(notFoundHandler)
    
    <span class="text-green-400">// Recovery middleware</span>
    r.Use(middleware.Recovery(logger))
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Performance -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Performance Considerations & Best Practices</h2>
        
        <div class="space-y-6">
          <div class="grid gap-4 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-trending-up" class="h-5 w-5 text-green-500" />
                  <span class="font-semibold">Performance Features</span>
                </div>
              </template>
              <div class="space-y-3 text-sm">
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Zero-allocation radix tree routing</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Context pooling for memory efficiency</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Fast parameter extraction</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Efficient middleware chaining</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Thread-safe operations</span>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-clock" class="h-5 w-5 text-blue-500" />
                  <span class="font-semibold">Benchmarks</span>
                </div>
              </template>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Route lookup:</span>
                  <span class="font-mono text-green-500">~50ns</span>
                </div>
                <div class="flex justify-between">
                  <span>Context creation:</span>
                  <span class="font-mono text-green-500">~0 allocs</span>
                </div>
                <div class="flex justify-between">
                  <span>Parameter extraction:</span>
                  <span class="font-mono text-green-500">~30ns</span>
                </div>
                <div class="flex justify-between">
                  <span>Memory per request:</span>
                  <span class="font-mono text-green-500">~0.5KB</span>
                </div>
                <div class="flex justify-between">
                  <span>Throughput:</span>
                  <span class="font-mono text-green-500">100K+ RPS</span>
                </div>
              </div>
            </UCard>
          </div>

          <UAlert color="green" variant="soft">
            <template #title">✅ Performance Best Practices</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Use route groups to minimize middleware overhead</li>
                <li>Place more specific routes before wildcard routes</li>
                <li>Minimize middleware chain length for critical paths</li>
                <li>Use context pooling (automatic in Base router)</li>
                <li>Implement proper error handling to avoid panics</li>
                <li>Use built-in response methods for better performance</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="red" variant="soft">
            <template #title">❌ Performance Anti-patterns</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Don't create new context instances manually</li>
                <li>Avoid heavy computation in middleware for all routes</li>
                <li>Don't ignore context cancellation signals</li>
                <li>Avoid deep middleware nesting without caching</li>
                <li>Don't use blocking operations in hot paths</li>
                <li>Avoid large response payloads without streaming</li>
              </ul>
            </template>
          </UAlert>
        </div>
      </section>

      <!-- Static Files -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Static File Serving & Advanced Features</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-folder-open" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Static File Configuration</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Static File Setup</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Basic static file serving</span>
r.Static(<span class="text-green-400">"/static"</span>, <span class="text-green-400">"./public"</span>)
r.Static(<span class="text-green-400">"/uploads"</span>, <span class="text-green-400">"./storage/uploads"</span>)

<span class="text-green-400">// Group-specific static files</span>
api := r.Group(<span class="text-green-400">"/api/v1"</span>)
api.Static(<span class="text-green-400">"/assets"</span>, <span class="text-green-400">"./api-assets"</span>)

<span class="text-green-400">// Custom file handler with middleware</span>
r.GET(<span class="text-green-400">"/files/*filepath"</span>, middleware.Auth(authConfig), <span class="text-blue-400">func</span>(c *router.Context) <span class="text-purple-400">error</span> {
    filepath := c.Param(<span class="text-green-400">"filepath"</span>)
    
    <span class="text-green-400">// Security check</span>
    <span class="text-blue-400">if</span> strings.Contains(filepath, <span class="text-green-400">".."</span>) {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid path"</span>})
    }
    
    fullPath := path.Join(<span class="text-green-400">"./secure-files"</span>, filepath)
    
    <span class="text-green-400">// Check file exists and user has access</span>
    <span class="text-blue-400">if</span> !hasFileAccess(c.MustGet(<span class="text-green-400">"user"</span>), fullPath) {
        <span class="text-blue-400">return</span> c.JSON(<span class="text-purple-400">403</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Access denied"</span>})
    }
    
    c.File(fullPath)
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
})

<span class="text-green-400">// Server setup with graceful shutdown</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">main</span>() {
    r := router.New()
    setupRoutes(r)
    
    <span class="text-green-400">// Start server</span>
    <span class="text-blue-400">if</span> err := r.Run(<span class="text-green-400">":8080"</span>); err != <span class="text-purple-400">nil</span> {
        log.Fatal(<span class="text-green-400">"Server failed to start:"</span>, err)
    }
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()

const copyToClipboard = async (text: string, event: Event) => {
  await copy(text)
  const button = event.target as HTMLElement
  const originalText = button.textContent
  button.textContent = 'Copied!'
  button.classList.add('!text-green-400')
  setTimeout(() => {
    button.textContent = originalText
    button.classList.remove('!text-green-400')
  }, 2000)
}
</script>