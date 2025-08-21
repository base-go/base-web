<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Emitter</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Thread-safe async event system with context support for decoupled module communication
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>🔗 Event-Driven Architecture</template>
          <template #description>
            Base Framework's Emitter provides a thread-safe, async event system that enables decoupled communication between modules. It supports synchronous and asynchronous event emission, context cancellation, timeouts, and automatic panic recovery for robust event handling.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-shield-check" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Thread-Safe</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Concurrent-safe operations with read-write mutexes ensuring data integrity across goroutines.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-yellow-500" />
                <span class="font-semibold">Async Events</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Support for both blocking and non-blocking event emission with goroutine-based execution.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-clock" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Context Support</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Built-in context cancellation and timeout support for better control over event processing.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Basic Usage -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-play" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Creating and Using an Emitter</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Emitter Initialization and Basic Events</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">import</span> (
    <span class="text-green-400">"base/core/emitter"</span>
    <span class="text-green-400">"base/core/logger"</span>
)

<span class="text-green-400">// Initialize emitter</span>
e := emitter.New()

<span class="text-green-400">// Register event listeners</span>
e.On(<span class="text-green-400">"user.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
    <span class="text-blue-400">if</span> user, ok := data.(*User); ok {
        log.Info(<span class="text-green-400">"New user registered"</span>, 
            logger.String(<span class="text-green-400">"email"</span>, user.Email),
            logger.Int(<span class="text-green-400">"id"</span>, <span class="text-purple-400">int</span>(user.ID)))
    }
})

e.On(<span class="text-green-400">"user.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
    <span class="text-green-400">// Multiple listeners can handle the same event</span>
    <span class="text-blue-400">if</span> user, ok := data.(*User); ok {
        <span class="text-green-400">// Send welcome email, update analytics, etc.</span>
        sendWelcomeEmail(user)
    }
})

<span class="text-green-400">// Emit events</span>
user := &User{ID: <span class="text-purple-400">1</span>, Email: <span class="text-green-400">"john@example.com"</span>}
e.Emit(<span class="text-green-400">"user.created"</span>, user) <span class="text-green-400">// Blocks until all listeners complete</span>

<span class="text-green-400">// Service integration example</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">UserService</span> <span class="text-blue-400">struct</span> {
    DB      *gorm.DB
    Emitter *emitter.Emitter
    Logger  logger.Logger
}

<span class="text-blue-400">func</span> (s *UserService) <span class="text-yellow-400">CreateUser</span>(req CreateUserRequest) (*User, <span class="text-purple-400">error</span>) {
    user := &User{
        Email: req.Email,
        Name:  req.Name,
    }
    
    <span class="text-blue-400">if</span> err := s.DB.Create(user).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Emit event after successful creation</span>
    s.Emitter.Emit(<span class="text-green-400">"user.created"</span>, user)
    
    <span class="text-blue-400">return</span> user, <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- API Reference -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">API Reference</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-code" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Core Methods</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">New() *Emitter</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Creates a new emitter instance with initialized listener map.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  e := emitter.New()
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">On(event string, listener func(any))</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Registers an event listener for the specified event name. Multiple listeners can be registered for the same event.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  e.On("user.login", func(data any) { ... })
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Emit(event string, data any)</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Emits an event synchronously, blocking until all listeners complete. Uses WaitGroup internally to ensure all goroutines finish.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  e.Emit("order.completed", order)
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">EmitAsync(event string, data any)</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Emits an event asynchronously without blocking. Listeners run in separate goroutines and the method returns immediately.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  e.EmitAsync("analytics.track", eventData)
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">EmitWithContext(ctx context.Context, event string, data any) error</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Emits an event with context support. Returns an error if the context is cancelled before all listeners complete.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  err := e.EmitWithContext(ctx, "file.process", fileData)
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">EmitWithTimeout(event string, data any, timeout time.Duration) error</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Emits an event with a timeout. Returns an error if listeners don't complete within the specified duration.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  err := e.EmitWithTimeout("heavy.task", data, 30*time.Second)
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">ListenerCount(event string) int</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Returns the number of listeners registered for a specific event.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  count := e.ListenerCount("user.created")
                </div>
              </div>

              <div class="border-b border-gray-200 dark:border-gray-700 pb-4">
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">EventNames() []string</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Returns all registered event names as a slice of strings.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  events := e.EventNames()
                </div>
              </div>

              <div>
                <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Clear()</h4>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-2">Removes all registered listeners for all events. Useful for testing or cleanup.</p>
                <div class="bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono">
                  e.Clear()
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Async and Context Usage -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Async Events & Context Support</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-yellow-500" />
                <span class="font-semibold">Asynchronous Event Patterns</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Non-blocking Event Emission</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Non-blocking events for analytics, logging, notifications</span>
e.EmitAsync(<span class="text-green-400">"analytics.page_view"</span>, analyticsData)
e.EmitAsync(<span class="text-green-400">"audit.log"</span>, auditEvent)
e.EmitAsync(<span class="text-green-400">"notification.send"</span>, notificationData)

<span class="text-green-400">// Async event handlers</span>
e.On(<span class="text-green-400">"file.uploaded"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
    <span class="text-blue-400">if</span> file, ok := data.(*UploadedFile); ok {
        <span class="text-green-400">// Heavy processing that shouldn't block the request</span>
        <span class="text-blue-400">go</span> processImageThumbnails(file)
        <span class="text-blue-400">go</span> scanForVirus(file)
        <span class="text-blue-400">go</span> updateSearchIndex(file)
    }
})

<span class="text-green-400">// Fire-and-forget pattern for non-critical operations</span>
<span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">PublishPost</span>(post *Post) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">if</span> err := s.DB.Save(post).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> err
    }
    
    <span class="text-green-400">// These operations shouldn't block the HTTP response</span>
    s.Emitter.EmitAsync(<span class="text-green-400">"post.published"</span>, post)
    s.Emitter.EmitAsync(<span class="text-green-400">"analytics.content_created"</span>, post)
    s.Emitter.EmitAsync(<span class="text-green-400">"social.auto_share"</span>, post)
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}

<span class="text-green-400">// Mixed patterns: critical vs non-critical events</span>
<span class="text-blue-400">func</span> (s *OrderService) <span class="text-yellow-400">ProcessOrder</span>(order *Order) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Critical event - wait for completion</span>
    s.Emitter.Emit(<span class="text-green-400">"order.validated"</span>, order)
    
    <span class="text-blue-400">if</span> err := s.DB.Save(order).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> err
    }
    
    <span class="text-green-400">// Critical notifications</span>
    s.Emitter.Emit(<span class="text-green-400">"order.confirmed"</span>, order)
    
    <span class="text-green-400">// Non-critical analytics and marketing</span>
    s.Emitter.EmitAsync(<span class="text-green-400">"analytics.order"</span>, order)
    s.Emitter.EmitAsync(<span class="text-green-400">"marketing.customer_activity"</span>, order)
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header">
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-clock" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Context and Timeout Handling</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Context-Aware Event Processing</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">import</span> (
    <span class="text-green-400">"context"</span>
    <span class="text-green-400">"time"</span>
)

<span class="text-green-400">// Context cancellation example</span>
<span class="text-blue-400">func</span> (s *FileService) <span class="text-yellow-400">ProcessLargeFile</span>(ctx context.Context, file *File) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Process file with context support</span>
    <span class="text-blue-400">if</span> err := s.EmitWithContext(ctx, <span class="text-green-400">"file.processing"</span>, file); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">if</span> errors.Is(err, context.Canceled) {
            s.Logger.Info(<span class="text-green-400">"File processing cancelled"</span>, logger.String(<span class="text-green-400">"file"</span>, file.Name))
            <span class="text-blue-400">return</span> err
        }
        <span class="text-blue-400">return</span> err
    }
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}

<span class="text-green-400">// Timeout pattern for slow operations</span>
<span class="text-blue-400">func</span> (s *ReportService) <span class="text-yellow-400">GenerateReport</span>(data *ReportData) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Set reasonable timeout for report generation</span>
    err := s.Emitter.EmitWithTimeout(<span class="text-green-400">"report.generate"</span>, data, <span class="text-purple-400">5</span>*time.Minute)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">if</span> errors.Is(err, context.DeadlineExceeded) {
            s.Logger.Error(<span class="text-green-400">"Report generation timed out"</span>)
            <span class="text-blue-400">return</span> errors.New(<span class="text-green-400">"report generation took too long"</span>)
        }
        <span class="text-blue-400">return</span> err
    }
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}

<span class="text-green-400">// HTTP request context integration</span>
<span class="text-blue-400">func</span> (c *PostController) <span class="text-yellow-400">CreatePost</span>(ctx *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">var</span> req CreatePostRequest
    <span class="text-blue-400">if</span> err := ctx.Bind(&req); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(<span class="text-purple-400">400</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Invalid request"</span>})
    }
    
    post := &Post{Title: req.Title, Content: req.Content}
    
    <span class="text-green-400">// Use HTTP request context for event emission</span>
    requestCtx := ctx.Request.Context()
    <span class="text-blue-400">if</span> err := c.Service.EmitWithContext(requestCtx, <span class="text-green-400">"post.creating"</span>, post); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(<span class="text-purple-400">500</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{<span class="text-green-400">"error"</span>: <span class="text-green-400">"Failed to process post"</span>})
    }
    
    <span class="text-blue-400">return</span> ctx.JSON(<span class="text-purple-400">201</span>, post)
}

<span class="text-green-400">// Advanced timeout with cleanup</span>
<span class="text-blue-400">func</span> (s *EmailService) <span class="text-yellow-400">SendBulkEmail</span>(emails []EmailData) <span class="text-purple-400">error</span> {
    ctx, cancel := context.WithTimeout(context.Background(), <span class="text-purple-400">10</span>*time.Minute)
    <span class="text-blue-400">defer</span> cancel()
    
    <span class="text-green-400">// Create a channel to track progress</span>
    done := <span class="text-blue-400">make</span>(<span class="text-blue-400">chan</span> <span class="text-blue-400">struct</span>{})
    
    <span class="text-blue-400">go</span> <span class="text-blue-400">func</span>() {
        <span class="text-blue-400">defer</span> <span class="text-blue-400">close</span>(done)
        <span class="text-blue-400">for</span> _, email := <span class="text-blue-400">range</span> emails {
            <span class="text-blue-400">if</span> err := s.Emitter.EmitWithContext(ctx, <span class="text-green-400">"email.send"</span>, email); err != <span class="text-purple-400">nil</span> {
                s.Logger.Error(<span class="text-green-400">"Failed to send email"</span>, logger.String(<span class="text-green-400">"error"</span>, err.Error()))
                <span class="text-blue-400">return</span>
            }
        }
    }()
    
    <span class="text-blue-400">select</span> {
    <span class="text-blue-400">case</span> <-done:
        s.Logger.Info(<span class="text-green-400">"Bulk email sending completed"</span>)
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
    <span class="text-blue-400">case</span> <-ctx.Done():
        s.Logger.Error(<span class="text-green-400">"Bulk email sending timed out"</span>)
        <span class="text-blue-400">return</span> ctx.Err()
    }
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Module Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Module Integration Patterns</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-puzzle" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Cross-Module Communication</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Decoupled Module Design</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// User module emits events</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">UserService</span> <span class="text-blue-400">struct</span> {
    DB      *gorm.DB
    Emitter *emitter.Emitter
    Logger  logger.Logger
}

<span class="text-blue-400">func</span> (s *UserService) <span class="text-yellow-400">CreateUser</span>(req CreateUserRequest) (*User, <span class="text-purple-400">error</span>) {
    user := &User{
        Email: req.Email,
        Name:  req.Name,
    }
    
    <span class="text-blue-400">if</span> err := s.DB.Create(user).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Emit events for other modules to handle</span>
    s.Emitter.Emit(<span class="text-green-400">"user.created"</span>, user)
    s.Emitter.EmitAsync(<span class="text-green-400">"analytics.user_registered"</span>, user)
    
    <span class="text-blue-400">return</span> user, <span class="text-purple-400">nil</span>
}

<span class="text-green-400">// Notification module listens for user events</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">NotificationService</span> <span class="text-blue-400">struct</span> {
    Emitter *emitter.Emitter
    Logger  logger.Logger
    Email   email.Sender
}

<span class="text-blue-400">func</span> (s *NotificationService) <span class="text-yellow-400">Init</span>() {
    <span class="text-green-400">// Listen for user events without direct coupling</span>
    s.Emitter.On(<span class="text-green-400">"user.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-blue-400">if</span> user, ok := data.(*User); ok {
            s.sendWelcomeEmail(user)
        }
    })
    
    s.Emitter.On(<span class="text-green-400">"user.password_reset"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-blue-400">if</span> event, ok := data.(*PasswordResetEvent); ok {
            s.sendPasswordResetEmail(event.User, event.Token)
        }
    })
}

<span class="text-green-400">// Analytics module tracks user behavior</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">AnalyticsService</span> <span class="text-blue-400">struct</span> {
    Emitter *emitter.Emitter
    Logger  logger.Logger
    DB      *gorm.DB
}

<span class="text-blue-400">func</span> (s *AnalyticsService) <span class="text-yellow-400">Init</span>() {
    <span class="text-green-400">// Track various user events</span>
    s.Emitter.On(<span class="text-green-400">"user.created"</span>, s.trackUserRegistration)
    s.Emitter.On(<span class="text-green-400">"user.login"</span>, s.trackUserLogin)
    s.Emitter.On(<span class="text-green-400">"post.created"</span>, s.trackContentCreation)
    s.Emitter.On(<span class="text-green-400">"order.completed"</span>, s.trackPurchase)
}

<span class="text-blue-400">func</span> (s *AnalyticsService) <span class="text-yellow-400">trackUserRegistration</span>(data <span class="text-blue-400">any</span>) {
    <span class="text-blue-400">if</span> user, ok := data.(*User); ok {
        event := &AnalyticsEvent{
            Type:      <span class="text-green-400">"user_registration"</span>,
            UserID:    user.ID,
            Timestamp: time.Now(),
            Data:      <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-blue-400">any</span>{<span class="text-green-400">"email"</span>: user.Email},
        }
        
        <span class="text-blue-400">if</span> err := s.DB.Create(event).Error; err != <span class="text-purple-400">nil</span> {
            s.Logger.Error(<span class="text-green-400">"Failed to track user registration"</span>, 
                logger.String(<span class="text-green-400">"error"</span>, err.Error()))
        }
    }
}

<span class="text-green-400">// Post module with file handling</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">PostService</span> <span class="text-blue-400">struct</span> {
    DB      *gorm.DB
    Emitter *emitter.Emitter
    Storage storage.Storage
    Logger  logger.Logger
}

<span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">Init</span>() {
    <span class="text-green-400">// Listen for file upload events from storage</span>
    s.Emitter.On(<span class="text-green-400">"post.featured_image.uploaded"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-blue-400">if</span> post, ok := data.(*Post); ok {
            s.Logger.Info(<span class="text-green-400">"Featured image uploaded"</span>,
                logger.Int(<span class="text-green-400">"post_id"</span>, <span class="text-purple-400">int</span>(post.ID)),
                logger.String(<span class="text-green-400">"image"</span>, post.FeaturedImageURL))
        }
    })
    
    <span class="text-green-400">// Listen for file deletion events</span>
    s.Emitter.On(<span class="text-green-400">"post.featured_image.deleted"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-blue-400">if</span> post, ok := data.(*Post); ok {
            s.Logger.Info(<span class="text-green-400">"Featured image deleted"</span>,
                logger.Int(<span class="text-green-400">"post_id"</span>, <span class="text-purple-400">int</span>(post.ID)))
        }
    })
}

<span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">CreatePost</span>(req CreatePostRequest) (*Post, <span class="text-purple-400">error</span>) {
    post := &Post{
        Title:   req.Title,
        Content: req.Content,
        UserID:  req.UserID,
    }
    
    <span class="text-blue-400">if</span> err := s.DB.Create(post).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Emit creation event for other modules</span>
    s.Emitter.Emit(<span class="text-green-400">"post.created"</span>, post)
    
    <span class="text-blue-400">return</span> post, <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-settings" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Module Registration with Emitter</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Dependency Injection Pattern</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Module structure with emitter injection</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">PostModule</span> <span class="text-blue-400">struct</span> {
    Service    *PostService
    Controller *PostController
    Router     *router.RouterGroup
    Emitter    *emitter.Emitter
    Logger     logger.Logger
}

<span class="text-blue-400">func</span> <span class="text-yellow-400">NewPostModule</span>(
    db *gorm.DB, 
    router *router.RouterGroup, 
    log logger.Logger, 
    emitter *emitter.Emitter,
    storage *storage.ActiveStorage,
) module.Module {
    service := &PostService{
        DB:      db,
        Emitter: emitter,
        Logger:  log,
        Storage: storage,
    }
    
    controller := &PostController{
        Service: service,
        Logger:  log,
    }
    
    <span class="text-green-400">// Initialize event listeners</span>
    service.Init()
    
    <span class="text-green-400">// Register routes</span>
    router.GET(<span class="text-green-400">"/posts"</span>, controller.GetPosts)
    router.POST(<span class="text-green-400">"/posts"</span>, controller.CreatePost)
    router.PUT(<span class="text-green-400">"/posts/:id"</span>, controller.UpdatePost)
    router.DELETE(<span class="text-green-400">"/posts/:id"</span>, controller.DeletePost)
    
    <span class="text-blue-400">return</span> &PostModule{
        Service:    service,
        Controller: controller,
        Router:     router,
        Emitter:    emitter,
        Logger:     log,
    }
}

<span class="text-green-400">// App initialization with emitter</span>
<span class="text-blue-400">func</span> (app *App) <span class="text-yellow-400">initModules</span>() *App {
    <span class="text-green-400">// Create shared emitter instance</span>
    emitter := emitter.New()
    
    <span class="text-green-400">// Register modules with emitter dependency injection</span>
    authModule := authentication.NewAuthenticationModule(
        app.db, 
        app.router.Group(<span class="text-green-400">"/auth"</span>), 
        app.emailSender, 
        app.logger, 
        emitter,
    )
    
    postModule := NewPostModule(
        app.db,
        app.router.Group(<span class="text-green-400">"/api/v1"</span>),
        app.logger,
        emitter,
        app.storage,
    )
    
    notificationModule := notification.NewNotificationModule(
        app.router.Group(<span class="text-green-400">"/notifications"</span>),
        app.logger,
        emitter,
        app.emailSender,
    )
    
    <span class="text-green-400">// Store modules</span>
    app.modules = []module.Module{
        authModule,
        postModule,
        notificationModule,
    }
    
    <span class="text-blue-400">return</span> app
}

<span class="text-green-400">// Module initialization helper</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">ModuleInitializer</span> <span class="text-blue-400">struct</span> {
    DB          *gorm.DB
    Router      *router.RouterGroup
    Logger      logger.Logger
    Emitter     *emitter.Emitter
    Storage     *storage.ActiveStorage
    EmailSender email.Sender
}

<span class="text-blue-400">func</span> (m *ModuleInitializer) <span class="text-yellow-400">InitializeAll</span>() {
    <span class="text-green-400">// Initialize all modules with shared dependencies</span>
    modules := []module.Module{
        authentication.NewAuthenticationModule(m.DB, m.Router.Group(<span class="text-green-400">"/auth"</span>), m.EmailSender, m.Logger, m.Emitter),
        media.NewMediaModule(m.DB, m.Router.Group(<span class="text-green-400">"/media"</span>), m.Storage, m.Emitter, m.Logger),
        translation.NewTranslationModule(m.DB, m.Router.Group(<span class="text-green-400">"/translations"</span>), m.Logger, m.Emitter, m.Storage),
    }
    
    <span class="text-blue-400">for</span> _, mod := <span class="text-blue-400">range</span> modules {
        <span class="text-blue-400">if</span> initializer, ok := mod.(<span class="text-blue-400">interface</span>{ Init() }); ok {
            initializer.Init()
        }
    }
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Error Handling and Best Practices -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Error Handling & Best Practices</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-shield" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Panic Recovery & Error Resilience</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Robust Event Handling</span>
                 
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// The emitter automatically recovers from panics in listeners</span>
<span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">Init</span>() {
    s.Emitter.On(<span class="text-green-400">"post.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-green-400">// Even if this panics, other listeners will still execute</span>
        <span class="text-blue-400">panic</span>(<span class="text-green-400">"something went wrong"</span>)
    })

    s.Emitter.On(<span class="text-green-400">"post.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-green-400">// This will still run despite the panic above</span>
        <span class="text-blue-400">if</span> post, ok := data.(*Post); ok {
            s.Logger.Info(<span class="text-green-400">"Post created"</span>, logger.Int(<span class="text-green-400">"id"</span>, <span class="text-purple-400">int</span>(post.ID)))
        }
    })
}

<span class="text-green-400">// Best practice: Handle errors gracefully in listeners</span>
<span class="text-blue-400">func</span> (s *EmailService) <span class="text-yellow-400">Init</span>() {
    s.Emitter.On(<span class="text-green-400">"user.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        user, ok := data.(*User)
        <span class="text-blue-400">if</span> !ok {
            s.Logger.Error(<span class="text-green-400">"Invalid data type for user.created event"</span>)
            <span class="text-blue-400">return</span>
        }
        
        <span class="text-blue-400">if</span> err := s.sendWelcomeEmail(user); err != <span class="text-purple-400">nil</span> {
            s.Logger.Error(<span class="text-green-400">"Failed to send welcome email"</span>,
                logger.String(<span class="text-green-400">"error"</span>, err.Error()),
                logger.String(<span class="text-green-400">"user_email"</span>, user.Email))
            <span class="text-green-400">// Don't panic - log and continue</span>
            <span class="text-blue-400">return</span>
        }
        
        s.Logger.Info(<span class="text-green-400">"Welcome email sent"</span>, logger.String(<span class="text-green-400">"email"</span>, user.Email))
    })
}

<span class="text-green-400">// Defensive event emission with error checking</span>
<span class="text-blue-400">func</span> (s *OrderService) <span class="text-yellow-400">ProcessOrder</span>(order *Order) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Validate order before processing</span>
    <span class="text-blue-400">if</span> order == <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> errors.New(<span class="text-green-400">"order cannot be nil"</span>)
    }
    
    <span class="text-green-400">// Process order logic</span>
    <span class="text-blue-400">if</span> err := s.DB.Save(order).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> fmt.Errorf(<span class="text-green-400">"failed to save order: %w"</span>, err)
    }
    
    <span class="text-green-400">// Safe event emission with timeout</span>
    ctx, cancel := context.WithTimeout(context.Background(), <span class="text-purple-400">30</span>*time.Second)
    <span class="text-blue-400">defer</span> cancel()
    
    <span class="text-blue-400">if</span> err := s.Emitter.EmitWithContext(ctx, <span class="text-green-400">"order.processed"</span>, order); err != <span class="text-purple-400">nil</span> {
        <span class="text-green-400">// Log error but don't fail the entire operation</span>
        s.Logger.Error(<span class="text-green-400">"Failed to emit order.processed event"</span>,
            logger.String(<span class="text-green-400">"error"</span>, err.Error()),
            logger.Int(<span class="text-green-400">"order_id"</span>, <span class="text-purple-400">int</span>(order.ID)))
    }
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}

<span class="text-green-400">// Testing event listeners with mock data</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">TestPostServiceEvents</span>(t *testing.T) {
    emitter := emitter.New()
    service := &PostService{Emitter: emitter}
    
    <span class="text-blue-400">var</span> receivedPost *Post
    emitter.On(<span class="text-green-400">"post.created"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        <span class="text-blue-400">if</span> post, ok := data.(*Post); ok {
            receivedPost = post
        }
    })
    
    testPost := &Post{ID: <span class="text-purple-400">1</span>, Title: <span class="text-green-400">"Test Post"</span>}
    emitter.Emit(<span class="text-green-400">"post.created"</span>, testPost)
    
    assert.Equal(t, testPost, receivedPost)
}

<span class="text-green-400">// Event listener cleanup for tests</span>
<span class="text-blue-400">func</span> (s *TestSuite) <span class="text-yellow-400">TearDown</span>() {
    <span class="text-green-400">// Clear all listeners after each test</span>
    s.emitter.Clear()
}

<span class="text-green-400">// Monitoring event listener performance</span>
<span class="text-blue-400">func</span> (s *AnalyticsService) <span class="text-yellow-400">trackEventPerformance</span>() {
    s.Emitter.On(<span class="text-green-400">"performance.track"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
        start := time.Now()
        <span class="text-blue-400">defer</span> <span class="text-blue-400">func</span>() {
            duration := time.Since(start)
            s.Logger.Debug(<span class="text-green-400">"Event processing time"</span>,
                logger.String(<span class="text-green-400">"duration"</span>, duration.String()))
        }()
        
        <span class="text-green-400">// Process analytics data</span>
        s.processAnalyticsData(data)
    })
}</code></pre>
            </div>
          </UCard>

          <div class="grid gap-4 md:grid-cols-2">
            <UAlert color="green" variant="soft">
              <template #title>✅ Best Practices</template>
              <template #description>
                <ul class="list-disc list-inside space-y-1 mt-2 text-sm">
                  <li>Use EmitAsync for non-critical operations like analytics</li>
                  <li>Always validate data types in event listeners</li>
                  <li>Handle errors gracefully - don't panic in listeners</li>
                  <li>Use meaningful event names following module.action pattern</li>
                  <li>Implement proper logging in event handlers</li>
                  <li>Use context cancellation for long-running operations</li>
                  <li>Clear listeners in tests to avoid interference</li>
                </ul>
              </template>
            </UAlert>

            <UAlert color="red" variant="soft">
              <template #title">❌ Anti-Patterns</template>
              <template #description>
                <ul class="list-disc list-inside space-y-1 mt-2 text-sm">
                  <li>Don't emit events for every database operation</li>
                  <li>Avoid deep event chains that create circular dependencies</li>
                  <li>Don't use events for synchronous data exchange</li>
                  <li>Never assume listeners will complete successfully</li>
                  <li>Don't emit sensitive data without sanitization</li>
                  <li>Avoid blocking operations in async event handlers</li>
                  <li>Don't ignore context cancellation in listeners</li>
                </ul>
              </template>
            </UAlert>
          </div>
        </div>
      </section>

      <!-- Performance and Thread Safety -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Performance & Thread Safety</h2>
        
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
                  <span>Thread-safe with read-write mutexes</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Goroutine-based parallel listener execution</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Automatic panic recovery in listeners</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Context cancellation and timeout support</span>
                </div>
                <div class="flex items-start space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500 mt-0.5" />
                  <span>Zero allocation for listener management</span>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield-check" class="h-5 w-5 text-blue-500" />
                  <span class="font-semibold">Thread Safety</span>
                </div>
              </template>
              <div class="space-y-3 text-sm">
                <div class="flex justify-between">
                  <span>Concurrent emissions:</span>
                  <span class="font-mono text-green-500">✓ Safe</span>
                </div>
                <div class="flex justify-between">
                  <span>Listener registration:</span>
                  <span class="font-mono text-green-500">✓ Safe</span>
                </div>
                <div class="flex justify-between">
                  <span>Event introspection:</span>
                  <span class="font-mono text-green-500">✓ Safe</span>
                </div>
                <div class="flex justify-between">
                  <span>Memory consistency:</span>
                  <span class="font-mono text-green-500">✓ Guaranteed</span>
                </div>
                <div class="flex justify-between">
                  <span>Goroutine safety:</span>
                  <span class="font-mono text-green-500">✓ Full support</span>
                </div>
              </div>
            </UCard>
          </div>

          <UCard>
            <template #header">
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-yellow-500" />
                <span class="font-semibold">Performance Monitoring Example</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Event Performance Tracking</span>
               
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Performance monitoring service</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">EventMonitor</span> <span class="text-blue-400">struct</span> {
    emitter *emitter.Emitter
    logger  logger.Logger
    metrics <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]*EventMetrics
    mutex   sync.RWMutex
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">EventMetrics</span> <span class="text-blue-400">struct</span> {
    TotalEmissions  <span class="text-purple-400">int64</span>
    TotalListeners  <span class="text-purple-400">int64</span>
    AverageLatency  time.Duration
    ErrorCount      <span class="text-purple-400">int64</span>
}

<span class="text-blue-400">func</span> (m *EventMonitor) <span class="text-yellow-400">Init</span>() {
    m.metrics = <span class="text-blue-400">make</span>(<span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]*EventMetrics)
    
    <span class="text-green-400">// Monitor all events by wrapping emitter methods</span>
    originalEmit := m.emitter.Emit
    m.emitter.Emit = <span class="text-blue-400">func</span>(event <span class="text-purple-400">string</span>, data <span class="text-blue-400">any</span>) {
        start := time.Now()
        originalEmit(event, data)
        m.recordMetrics(event, time.Since(start))
    }
}

<span class="text-blue-400">func</span> (m *EventMonitor) <span class="text-yellow-400">recordMetrics</span>(event <span class="text-purple-400">string</span>, duration time.Duration) {
    m.mutex.Lock()
    <span class="text-blue-400">defer</span> m.mutex.Unlock()
    
    <span class="text-blue-400">if</span> _, exists := m.metrics[event]; !exists {
        m.metrics[event] = &EventMetrics{}
    }
    
    metrics := m.metrics[event]
    metrics.TotalEmissions++
    metrics.TotalListeners = <span class="text-purple-400">int64</span>(m.emitter.ListenerCount(event))
    
    <span class="text-green-400">// Calculate running average</span>
    <span class="text-blue-400">if</span> metrics.TotalEmissions == <span class="text-purple-400">1</span> {
        metrics.AverageLatency = duration
    } <span class="text-blue-400">else</span> {
        metrics.AverageLatency = time.Duration(
            (<span class="text-purple-400">int64</span>(metrics.AverageLatency)*metrics.TotalEmissions + <span class="text-purple-400">int64</span>(duration)) / 
            (metrics.TotalEmissions + <span class="text-purple-400">1</span>),
        )
    }
}

<span class="text-green-400">// Get performance stats</span>
<span class="text-blue-400">func</span> (m *EventMonitor) <span class="text-yellow-400">GetStats</span>() <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]*EventMetrics {
    m.mutex.RLock()
    <span class="text-blue-400">defer</span> m.mutex.RUnlock()
    
    stats := <span class="text-blue-400">make</span>(<span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]*EventMetrics)
    <span class="text-blue-400">for</span> event, metrics := <span class="text-blue-400">range</span> m.metrics {
        stats[event] = &EventMetrics{
            TotalEmissions:  metrics.TotalEmissions,
            TotalListeners:  metrics.TotalListeners,
            AverageLatency:  metrics.AverageLatency,
            ErrorCount:      metrics.ErrorCount,
        }
    }
    <span class="text-blue-400">return</span> stats
}

<span class="text-green-400">// Concurrent event emission test</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">BenchmarkConcurrentEmit</span>(b *testing.B) {
    emitter := emitter.New()
    
    <span class="text-green-400">// Register multiple listeners</span>
    <span class="text-blue-400">for</span> i := <span class="text-purple-400">0</span>; i < <span class="text-purple-400">10</span>; i++ {
        emitter.On(<span class="text-green-400">"benchmark.event"</span>, <span class="text-blue-400">func</span>(data <span class="text-blue-400">any</span>) {
            time.Sleep(time.Microsecond) <span class="text-green-400">// Simulate work</span>
        })
    }
    
    b.ResetTimer()
    b.RunParallel(<span class="text-blue-400">func</span>(pb *testing.PB) {
        <span class="text-blue-400">for</span> pb.Next() {
            emitter.Emit(<span class="text-green-400">"benchmark.event"</span>, <span class="text-green-400">"test data"</span>)
        }
    })
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Common Event Patterns -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Common Event Patterns</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-map" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Event Naming Conventions</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Entity Lifecycle Events</h4>
                  <ul class="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">user.created</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">user.updated</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">user.deleted</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">post.published</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">order.completed</code></li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">Action Events</h4>
                  <ul class="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">user.login_attempt</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">email.sent</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">file.uploaded</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">payment.processed</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">cache.invalidated</code></li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">File Events</h4>
                  <ul class="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">post.image.uploaded</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">user.avatar.deleted</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">document.file.processed</code></li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900 dark:text-white mb-2">System Events</h4>
                  <ul class="text-sm space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">system.startup</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">analytics.track</code></li>
                    <li>• <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">audit.log</code></li>
                  </ul>
                </div>
              </div>
            </div>
          </UCard>

          <UAlert color="blue" variant="soft">
            <template #title>💡 Event Design Tips</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Use dot notation for hierarchical event names (module.action.detail)</li>
                <li>Keep event data immutable - pass copies, not references to mutable objects</li>
                <li>Include sufficient context in event data for listeners to work independently</li>
                <li>Use past tense for completed actions (created, updated) and present for ongoing (creating, updating)</li>
                <li>Consider event versioning for breaking changes (user.created.v2)</li>
                <li>Document your events and their data structures for other developers</li>
              </ul>
            </template>
          </UAlert>
        </div>
      </section>
    </div>
  </DocsLayout>
</template>

 