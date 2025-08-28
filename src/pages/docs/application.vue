<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">App Directory</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Understanding Base Framework's application layer, module initialization, and business logic organization.
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          The <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">app/</code> directory is the heart of your Base Framework application. It's where your business logic lives, modules are organized, and application-specific functionality is implemented. Unlike the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">core/</code> directory which contains framework infrastructure, the <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">app/</code> directory is entirely yours to customize.
        </p>

        <UAlert 
          icon="i-heroicons-information-circle"
          color="info"
          variant="soft"
          title="Key Concept"
          description="The app/ directory uses Base Framework's module system to organize business logic into self-contained, testable, and maintainable components."
        />
      </section>

      <!-- Directory Structure -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Directory Structure</h2>
        
        <UCard class="bg-gray-50 dark:bg-gray-800 mb-6">
          <pre class="text-sm overflow-x-auto"><code>app/
├── init.go              # Module registration hub
├── models/              # Shared data models
│   ├── user.go
│   ├── post.go
│   └── category.go
├── post/
|   ├── controller.go  # HTTP handlers
|   ├── service.go     # Business logic
|   └── module.go      # Module definition
├── user/
|   ├── controller.go
|   ├── service.go
|   └── module.go
└── category/
    ├── controller.go
    ├── service.go
    └── module.go</code></pre>
        </UCard>

        <div class="grid md:grid-cols-2 gap-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold text-blue-600 dark:text-blue-400">init.go</h3>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Central module registry that tells the framework which modules to load and initialize. This is the entry point for all your business logic.
            </p>
          </UCard>
          
          <UCard>
            <template #header>
              <h3 class="font-semibold text-green-600 dark:text-green-400">models/</h3>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              Shared data models (GORM structs) that can be used across multiple modules. Centralized to prevent <strong class="text-red-600 dark:text-red-400">circular dependencies</strong>.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Module Initialization Flow -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Module Initialization Flow</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Understanding how modules get initialized is crucial for building maintainable Base applications. Here's what happens under the hood:
        </p>

        <div class="space-y-6">
          <!-- Step 1 -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                <h3 class="font-semibold">Application Startup</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                When your Base application starts, <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">main.go</code> creates the core application infrastructure:
              </p>
              <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
                <li>• Database connection (GORM)</li>
                <li>• Router with middleware</li>
                <li>• Logger, Emitter, Storage systems</li>
                <li>• Email sender and configuration</li>
                <li>• Websocket server</li>
                <li>• Translation system</li>
                <li>• Validator system</li>
                <li>• Helper utilities</li>
                <li>• Error handling</li>
                <li>• Configuration</li>
              </ul>
            </div>
          </UCard>

          <!-- Step 2 -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                <h3 class="font-semibold">Core Modules First</h3>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              The framework initializes core modules (authentication, permissions, etc.) before your app modules. This ensures all foundation services are available.
            </p>
            <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1 ml-4">
              <li>• Authentication module</li>
              <li>• Authorization module</li>
              <li>• Media module</li>
              <li>• OAuth module</li>
              <li>• Profile module</li>
            </ul>
          </UCard>

          <!-- Step 3 -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                <h3 class="font-semibold">App Module Discovery</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                The framework calls <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">app/init.go:GetAppModules()</code> to discover your business modules:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-xs overflow-x-auto"><code class="language-go">func (am *AppModules) GetAppModules(deps module.Dependencies) map[string]module.Module {
    modules := make(map[string]module.Module)
    
    // Add your modules here:
    modules["post"] = post.NewModule(deps)
    modules["user"] = user.NewModule(deps)
    
    return modules
}</code></pre>
              </UCard>
            </div>
          </UCard>

          <!-- Step 4 -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                <h3 class="font-semibold">Module Lifecycle</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">For each module, the framework executes the complete lifecycle:</p>
              <ol class="list-decimal">
                <li>
                  <h4 class="font-medium text-sm mb-2">Registration</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Module is registered in the global registry</p>
                </li>
                <li>
                  <h4 class="font-medium text-sm mb-2">Initialization</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Module's <code>Init()</code> method is called</p>
                </li>
                <li>
                  <h4 class="font-medium text-sm mb-2">Migration</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">Database migrations run via <code>Migrate()</code></p>
                </li>
                <li>
                  <h4 class="font-medium text-sm mb-2">Route Setup</h4>
                  <p class="text-xs text-gray-500 dark:text-gray-400">HTTP routes are registered via <code>Routes()</code></p>
                </li>
              </ol>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Dependency Injection -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Dependency Injection</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Base Framework uses dependency injection to provide your modules with access to framework services. Every module receives a <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Dependencies</code> struct containing:
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">Core Dependencies</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">DB</code> - GORM database instance</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Router</code> - HTTP router for defining endpoints</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Logger</code> - Structured logging service</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Config</code> - Application configuration</li>
            </ul>
          </UCard>
          
          <UCard>
            <template #header>
              <h3 class="font-semibold">Extended Services</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Emitter</code> - Event system for module communication</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Storage</code> - File upload and management</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">EmailSender</code> - Email service integration</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Translation</code> - Internationalization service</li>
              <li><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-xs">Validator</code> - Validation service</li>
            </ul>
            <p class="text-sm text-gray-600 dark:text-gray-400">You can check each service's documentation for more details.</p>
          </UCard>
        </div>

        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Usage Example</h3>
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-go">// In your module's service
func (s *PostService) CreatePost(data CreatePostRequest) (*models.Post, error) {
    // Use injected database
    post := &models.Post{
        Title:   data.Title,
        Content: data.Content,
        UserID:  data.UserID,
    }
    
    if err := s.deps.DB.Create(post).Error; err != nil {
        s.deps.Logger.Error("Failed to create post", logger.String("error", err.Error()))
        return nil, err
    }
    
    // Emit event for other modules to react
    s.deps.Emitter.Emit("post.created", post)
    
    return post, nil
}</code></pre>
          </UCard>
        </div>
      </section>

      <!-- MCS Architecture Pattern -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">MCS Architecture Pattern</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Base Framework implements the Model-Controller-Service (MCS) architecture pattern to ensure clean separation of concerns, maintainability, and testability. Each layer has distinct responsibilities and clear boundaries.
        </p>

        <UAlert 
          icon="i-heroicons-information-circle"
          color="info"
          variant="soft"
          title="Architecture Benefits"
          description="The MCS pattern promotes loose coupling, high cohesion, and makes your code easier to test, maintain, and scale."
          class="mb-6"
        />

        <div class="grid md:grid-cols-3 gap-6 mb-8">
          <!-- Model Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-pencil-ruler" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold text-blue-600 dark:text-blue-400">Model</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <strong>Data Layer:</strong> Defines data structures, validation rules, and data relationships.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• GORM struct definitions</li>
                <li>• Request/Response types</li>
                <li>• Data validation tags</li>
                <li>• Database relationships</li>
                <li>• Serialization methods</li>
              </ul>
              <p class="text-xs text-gray-500 dark:text-gray-500 italic">
                Located in: <code>app/models/</code>
              </p>
            </div>
          </UCard>

          <!-- Controller Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-globe" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold text-green-600 dark:text-green-400">Controller</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <strong>HTTP Layer:</strong> Handles web requests, responses, and HTTP-specific concerns.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Route definitions</li>
                <li>• Request parsing</li>
                <li>• Response formatting</li>
                <li>• HTTP status codes</li>
                <li>• Input validation</li>
              </ul>
              <p class="text-xs text-gray-500 dark:text-gray-500 italic">
                Located in: <code>app/[module]/controller.go</code>
              </p>
            </div>
          </UCard>

          <!-- Service Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-cog" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold text-purple-600 dark:text-purple-400">Service</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                <strong>Business Layer:</strong> Contains business logic, data access, and external integrations.
              </p>
              <ul class="text-xs text-gray-500 dark:text-gray-500 space-y-1">
                <li>• Business rules & validation</li>
                <li>• Database operations</li>
                <li>• External API calls</li>
                <li>• Event emission</li>
                <li>• Inter-service communication</li>
              </ul>
              <p class="text-xs text-gray-500 dark:text-gray-500 italic">
                Located in: <code>app/[module]/service.go</code>
              </p>
            </div>
          </UCard>
        </div>

        <!-- Data Flow -->
        <UCard class="mb-6">
          <template #header>
            <h3 class="font-semibold">Data Flow & Responsibilities</h3>
          </template>
          <div class="space-y-4">
            <div class="flex items-center gap-4 text-sm">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded"></div>
                <span class="font-medium">HTTP Request</span>
              </div>
              <Icon name="i-lucide-arrow-right" class="w-4 h-4 text-gray-400" />
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-green-500 rounded"></div>
                <span class="font-medium">Controller</span>
              </div>
              <Icon name="i-lucide-arrow-right" class="w-4 h-4 text-gray-400" />
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-purple-500 rounded"></div>
                <span class="font-medium">Service</span>
              </div>
              <Icon name="i-lucide-arrow-right" class="w-4 h-4 text-gray-400" />
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 bg-blue-500 rounded"></div>
                <span class="font-medium">Model/Database</span>
              </div>
            </div>
            <UAlert 
              icon="i-heroicons-exclamation-triangle"
              color="yellow"
              variant="soft"
              title="Important Rules"
              description="1) Controllers should NEVER directly access the database or external APIs. 2) Permission checks should be handled by authorization middleware, NOT in the service layer. Services focus on business logic only."
            />
          </div>
        </UCard>
      </section>

      <!-- Business Logic Organization -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Implementation Examples</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Here's how the MCS pattern is implemented in practice with real code examples from generated modules.
        </p>

        <div class="space-y-6">
          <!-- Controller Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-globe" class="w-4 h-4" />
                </div>
                <h3 class="font-semibold">Controller Layer (HTTP)</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Handles HTTP requests, validation, response formatting, and route definitions. Controllers are thin and delegate business logic to services.
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-xs overflow-x-auto"><code class="language-go">func (c *PostController) CreatePost(ctx *router.Context) error {
    var req CreatePostRequest
    if err := ctx.ShouldBindJSON(&req); err != nil {
        return ctx.JSON(400, map[string]any{"error": err.Error()})
    }
    
    post, err := c.service.CreatePost(req)
    if err != nil {
        return ctx.JSON(500, map[string]any{"error": err.Error()})
    }
    
    return ctx.JSON(201, post)
}

func (c *PostController) Routes(router *router.RouterGroup) {
    // Import authorization middleware
    // import "base/core/app/authorization"
    
    // Main CRUD endpoints with authorization middleware
    router.GET("/posts", c.List)                                               // Public read
    router.POST("/posts", authorization.Can("create", "post"), c.Create)       // Requires create permission
    router.GET("/posts/all", c.ListAll)                                        // Public read
    router.GET("/posts/:id", c.Get)                                            // Public read
    router.PUT("/posts/:id", authorization.CanAccess("update", "post", "id"), c.Update)    // Requires resource permission
    router.DELETE("/posts/:id", authorization.CanAccess("delete", "post", "id"), c.Delete) // Requires resource permission
}</code></pre>
              </UCard>
            </div>
          </UCard>

          <!-- Service Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-cog" class="w-4 h-4" />
                </div>
                <h3 class="font-semibold">Service Layer (Business Logic)</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Contains the core business logic, data validation, and business rules. Services can call other services and emit events.
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-xs overflow-x-auto"><code class="language-go">func (s *PostService) CreatePost(data CreatePostRequest) (*models.Post, error) {
    // Business validation only - permissions handled by middleware
    if len(data.Title) < 3 {
        return nil, errors.New("title must be at least 3 characters")
    }
    
    // Business rules
    if data.Content == "" {
        return nil, errors.New("content cannot be empty")
    }
    
    // Database operation
    post := &models.Post{
        Title:     data.Title, 
        Content:   data.Content,
        Published: data.Published,
        UserId:    data.UserID,
    }
    if err := s.deps.DB.Create(post).Error; err != nil {
        return nil, err
    }
    
    // Emit business event
    s.deps.Emitter.Emit("post.created", post)
    return post, nil
}</code></pre>
              </UCard>
            </div>
          </UCard>

          <!-- Module Definition -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-package" class="w-4 h-4" />
                </div>
                <h3 class="font-semibold">Module Definition</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Ties everything together - handles initialization, database migrations, and connects controllers to the router.
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-xs overflow-x-auto"><code class="language-go">type Module struct {
    service    *Service
    controller *Controller
    deps       module.Dependencies
}

func (m *Module) Init() error {
    // Module initialization logic
    return nil
}

func (m *Module) Migrate() error {
    // Auto-migrate models
    return m.deps.DB.AutoMigrate(&models.Post{})
}

func (m *Module) Routes(router *router.RouterGroup) {
    // Delegate route registration to the controller
    m.Controller.Routes(router)
}</code></pre>
              </UCard>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Module Communication -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Module Communication</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Modules in Base Framework communicate through events and direct service injection, maintaining loose coupling while enabling powerful integrations.
        </p>

        <div class="flex flex-col gap-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold text-blue-600 dark:text-blue-400">Event-Driven Communication</h3>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Asynchronous, decoupled communication using the built-in event emitter:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-xs"><code class="language-go">// Emit events
emitter.Emit("user.created", user)
emitter.Emit("post.published", post)

// Listen for events
emitter.On("user.created", handleUserCreated)
emitter.On("post.published", handlePostPublished)</code></pre>
              </UCard>
            </div>
          </UCard>
          
          <UCard>
            <template #header>
              <h3 class="font-semibold text-green-600 dark:text-green-400">Direct Service Injection</h3>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Synchronous communication by injecting services directly:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-xs"><code class="language-go">type PostService struct {
    userService *user.Service
    deps        module.Dependencies
}

func (s *PostService) CreatePost(data PostData) error {
    // Use injected user service
    user, err := s.userService.GetUser(data.UserID)
    if err != nil {
        return err
    }
    // ... rest of logic
}</code></pre>
              </UCard>
            </div>
          </UCard>
        </div>
      </section>

      <!-- CLI Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">CLI Integration</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          The Base CLI integrates seamlessly with the app directory structure, generating modules that follow the established patterns.
        </p>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold">Generating Modules</h3>
            </template>
            <div class="space-y-3">
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code class="language-bash"># Generate a complete module with CRUD operations
base g post title:string content:text published:bool

# Generate with relationships (auto-detected from _id suffix)
base g comment post_id:uint content:text user_id:uint

# Generate with file uploads
base g profile user_id:uint avatar:image bio:text</code></pre>
              </UCard>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                This automatically creates the module directory, controller, service, model, and updates <code>app/init.go</code> to register the new module.
              </p>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h3 class="font-semibold">What Gets Generated</h3>
            </template>
            <div class="grid grid-cols-1 gap-3">
              <div class="flex items-center gap-3">
                <Icon name="i-lucide-file-text" class="w-4 h-4 text-blue-500" />
                <span class="text-sm"><code>app/models/post.go</code> - GORM model with relationships</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="i-lucide-folder" class="w-4 h-4 text-green-500" />
                <span class="text-sm"><code>app/post/</code> - Module directory</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="i-lucide-globe" class="w-4 h-4 text-purple-500" />
                <span class="text-sm"><code>app/post/controller.go</code> - HTTP handlers</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="i-lucide-cog" class="w-4 h-4 text-orange-500" />
                <span class="text-sm"><code>app/post/service.go</code> - Business logic</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="i-lucide-package" class="w-4 h-4 text-red-500" />
                <span class="text-sm"><code>app/post/module.go</code> - Module definition</span>
              </div>
              <div class="flex items-center gap-3">
                <Icon name="i-lucide-settings" class="w-4 h-4 text-gray-500" />
                <span class="text-sm"><code>app/init.go</code> - Updated with new module registration</span>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>
        
        <div class="grid md:grid-cols-2 gap-6">
          <UCard>
            <template #header>
              <h3 class="font-semibold text-green-600 dark:text-green-400">✅ Do</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Keep controllers thin - delegate to services</li>
              <li>• Use events for cross-module communication</li>
              <li>• Place shared models in <code>app/models/</code></li>
              <li>• Follow the generated module structure</li>
              <li>• Use dependency injection for testability</li>
              <li>• Emit events for important business actions</li>
            </ul>
          </UCard>
          
          <UCard>
            <template #header>
              <h3 class="font-semibold text-red-600 dark:text-red-400">❌ Don't</h3>
            </template>
            <ul class="text-sm space-y-2">
              <li>• Put business logic in controllers</li>
              <li>• Create circular dependencies between modules</li>
              <li>• Access database directly from controllers</li>
              <li>• Hardcode configuration values</li>
              <li>• Skip error handling and logging</li>
              <li>• Ignore the module lifecycle methods</li>
            </ul>
          </UCard>
        </div>
      </section>

      <!-- Example: Complete Module -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Example: Complete Module Implementation</h2>
        
        <p class="text-gray-600 dark:text-gray-400 mb-6">
          Here's how a complete module looks when following Base Framework patterns:
        </p>

        <div class="space-y-6">
          <!-- Controller Tab -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-globe" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Controller (HTTP Layer)</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Handles HTTP requests, validation, and delegates to service layer:
              </p>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-xs overflow-x-auto"><code class="language-go">// app/post/controller.go
package post

import (
    "base/core/router"
    "net/http"
    "strconv"
)

type Controller struct {
    service *Service
}

func NewController(service *Service) *Controller {
    return &Controller{service: service}
}

func (c *Controller) Create(ctx *router.Context) error {
    var req models.CreatePostRequest
    if err := ctx.ShouldBindJSON(&req); err != nil {
        return ctx.JSON(http.StatusBadRequest, map[string]any{
            "error": err.Error(),
        })
    }

    post, err := c.service.Create(&req)
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, map[string]any{
            "error": err.Error(),
        })
    }

    return ctx.JSON(http.StatusCreated, post.ToResponse())
}

func (c *Controller) List(ctx *router.Context) error {
    posts, err := c.service.GetAll(nil, nil, nil, nil)
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, map[string]any{
            "error": err.Error(),
        })
    }

    return ctx.JSON(http.StatusOK, posts)
}

func (c *Controller) Get(ctx *router.Context) error {
    id, err := strconv.ParseUint(ctx.Param("id"), 10, 32)
    if err != nil {
        return ctx.JSON(http.StatusBadRequest, map[string]any{
            "error": "Invalid ID format",
        })
    }

    post, err := c.service.GetById(uint(id))
    if err != nil {
        return ctx.JSON(http.StatusNotFound, map[string]any{
            "error": "Post not found",
        })
    }

    return ctx.JSON(http.StatusOK, post.ToResponse())
}

func (c *Controller) ListAll(ctx *router.Context) error {
    posts, err := c.service.GetAllForSelect()
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, map[string]any{
            "error": err.Error(),
        })
    }
    return ctx.JSON(http.StatusOK, posts)
}

func (c *Controller) Update(ctx *router.Context) error {
    id, err := strconv.ParseUint(ctx.Param("id"), 10, 32)
    if err != nil {
        return ctx.JSON(http.StatusBadRequest, map[string]any{
            "error": "Invalid ID format",
        })
    }

    var req models.UpdatePostRequest
    if err := ctx.ShouldBindJSON(&req); err != nil {
        return ctx.JSON(http.StatusBadRequest, map[string]any{
            "error": err.Error(),
        })
    }

    post, err := c.service.Update(uint(id), &req)
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, map[string]any{
            "error": err.Error(),
        })
    }

    return ctx.JSON(http.StatusOK, post.ToResponse())
}

func (c *Controller) Delete(ctx *router.Context) error {
    id, err := strconv.ParseUint(ctx.Param("id"), 10, 32)
    if err != nil {
        return ctx.JSON(http.StatusBadRequest, map[string]any{
            "error": "Invalid ID format",
        })
    }

    if err := c.service.Delete(uint(id)); err != nil {
        return ctx.JSON(http.StatusInternalServerError, map[string]any{
            "error": err.Error(),
        })
    }

    return ctx.NoContent()
}

// Routes defines all the HTTP routes for this controller
func (c *Controller) Routes(router *router.RouterGroup) {
    // Main CRUD endpoints - specific routes MUST come before parameterized routes
    router.GET("/posts", c.List)          // Paginated list
    router.POST("/posts", c.Create)       // Create
    router.GET("/posts/all", c.ListAll)   // Unpaginated list - MUST be before /:id
    router.GET("/posts/:id", c.Get)       // Get by ID - MUST be after /all
    router.PUT("/posts/:id", c.Update)    // Update
    router.DELETE("/posts/:id", c.Delete) // Delete
}</code></pre>
            </UCard>
            </div>
          </UCard>

          <!-- Service Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-cog" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Service (Business Layer)</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Contains business logic, data access, and event emission:
              </p>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-xs overflow-x-auto"><code class="language-go">// app/post/service.go
package post

import (
    "base/app/models"
    "base/core/module"
    "base/core/logger"
    "base/core/types"
    "errors"
)

type Service struct {
    deps module.Dependencies
}

func NewService(deps module.Dependencies) *Service {
    return &Service{deps: deps}
}

func (s *Service) Create(data *models.CreatePostRequest) (*models.Post, error) {
    // Business validation
    if len(data.Title) < 3 {
        return nil, errors.New("title must be at least 3 characters")
    }

    // Create post
    post := &models.Post{
        Title:     data.Title,
        Content:   data.Content,
        Published: data.Published,
        UserId:    data.UserID,
    }

    if err := s.deps.DB.Create(post).Error; err != nil {
        s.deps.Logger.Error("Failed to create post", 
            logger.String("error", err.Error()))
        return nil, err
    }

    // Emit business event
    s.deps.Emitter.Emit("post.created", post)

    s.deps.Logger.Info("Post created successfully", 
        logger.Uint("post_id", post.Id))

    return post, nil
}

func (s *Service) GetAll(page, limit *int, sortBy, sortOrder *string) (*types.PaginatedResponse, error) {
    var posts []models.Post
    query := s.deps.DB.Model(&models.Post{})
    
    // Apply pagination and sorting logic here
    if err := query.Find(&posts).Error; err != nil {
        return nil, err
    }
    
    return &types.PaginatedResponse{
        Data:  posts,
        Total: int64(len(posts)),
        Page:  1,
        Limit: len(posts),
    }, nil
}

func (s *Service) GetById(id uint) (*models.Post, error) {
    var post models.Post
    if err := s.deps.DB.First(&post, id).Error; err != nil {
        return nil, err
    }
    return &post, nil
}

func (s *Service) GetAllForSelect() ([]*models.Post, error) {
    var posts []*models.Post
    if err := s.deps.DB.Select("id, title").Find(&posts).Error; err != nil {
        return nil, err
    }
    return posts, nil
}

func (s *Service) Update(id uint, data *models.UpdatePostRequest) (*models.Post, error) {
    var post models.Post
    if err := s.deps.DB.First(&post, id).Error; err != nil {
        return nil, err
    }

    // Update fields
    if data.Title != "" {
        post.Title = data.Title
    }
    if data.Content != "" {
        post.Content = data.Content
    }
    if data.Published != nil {
        post.Published = *data.Published
    }

    if err := s.deps.DB.Save(&post).Error; err != nil {
        return nil, err
    }

    // Emit update event
    s.deps.Emitter.Emit("post.updated", post)
    
    return &post, nil
}

func (s *Service) Delete(id uint) error {
    var post models.Post
    if err := s.deps.DB.First(&post, id).Error; err != nil {
        return err
    }

    if err := s.deps.DB.Delete(&post).Error; err != nil {
        return err
    }

    // Emit delete event
    s.deps.Emitter.Emit("post.deleted", map[string]any{
        "post_id": id,
        "title": post.Title,
    })

    return nil
}</code></pre>
            </UCard>
            </div>
          </UCard>

          <!-- Module Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-package" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Module (Registration & Wiring)</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Ties everything together with dependency injection and route registration:
              </p>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-xs overflow-x-auto"><code class="language-go">// app/posts/module.go
package posts

import (
    "base/app/models"
    "base/core/module"
    "base/core/router"
    "gorm.io/gorm"
)

type Module struct {
    module.DefaultModule
    DB         *gorm.DB
    Service    *Service
    Controller *Controller
}

// Init creates and initializes the Post module with all dependencies
func Init(deps module.Dependencies) module.Module {
    // Initialize service and controller
    service := NewService(deps)
    controller := NewController(service)

    // Create module
    mod := &Module{
        DB:         deps.DB,
        Service:    service,
        Controller: controller,
    }

    return mod
}

// Routes registers the module routes
func (m *Module) Routes(router *router.RouterGroup) {
    m.Controller.Routes(router)
}

func (m *Module) Init() error {
    return nil
}

func (m *Module) Migrate() error {
    return m.DB.AutoMigrate(&models.Post{})
}

func (m *Module) GetModels() []any {
    return []any{
        &models.Post{},
    }
}</code></pre>
            </UCard>
            </div>
          </UCard>

          <!-- Registration Layer -->
          <UCard>
            <template #header>
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                  <Icon name="i-lucide-settings" class="w-5 h-5" />
                </div>
                <h3 class="font-semibold">Registration (App Init)</h3>
              </div>
            </template>
            <div class="space-y-3">
              <p class="text-sm text-gray-600 dark:text-gray-400">
                How the module gets registered in the application startup:
              </p>
            <UCard class="bg-gray-50 dark:bg-gray-800">
              <pre class="text-xs overflow-x-auto"><code class="language-go">// app/init.go
package app

import (
    "base/app/posts"
    "base/core/module"
)

// AppModules implements module.AppModuleProvider interface
type AppModules struct{}

// GetAppModules returns the list of app modules to initialize
// This is the only function that needs to be updated when adding new app modules
func (am *AppModules) GetAppModules(deps module.Dependencies) map[string]module.Module {
    modules := make(map[string]module.Module)

    // Posts module
    modules["posts"] = posts.Init(deps)
    
    return modules
}

// NewAppModules creates a new AppModules provider
func NewAppModules() *AppModules {
    return &AppModules{}
}</code></pre>
            </UCard>
          </div>
        </UCard>
        </div>
      </section>

      <!-- Footer -->
      <section>
        <UAlert 
          icon="i-heroicons-information-circle" 
          color="blue" 
          variant="soft"
          title="Next Steps"
          description="Now that you understand the app directory structure, explore other Base Framework features like Storage, Authentication, and Events to build comprehensive applications."
        />
      </section>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
 </script>