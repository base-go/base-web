<template>
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Base Helpers</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Base Framework provides a comprehensive set of helper functions and utilities to streamline development and reduce boilerplate code.
          </p>
        </div>

        <!-- Overview -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Base Framework includes several helper packages designed to handle common development tasks like JWT management, context operations, slug generation, dynamic model retrieval, standardized responses, error handling, and custom data types. These helpers promote code consistency and reduce repetitive implementation across your modules.
          </p>

          <UAlert 
            icon="i-heroicons-information-circle"
            color="blue"
            variant="soft"
            title="Helper Categories"
            description="Base helpers are organized into logical categories: Core Framework helpers, Context utilities, Authentication helpers, Response helpers, Dynamic model operations, and Error handling types."
          />
        </section>

        <!-- Helper Categories -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Helper Categories</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-wrench" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold text-blue-600 dark:text-blue-400">Core Helpers</h3>
                </div>
              </template>
              <ul class="text-sm space-y-2">
                <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">helper/</code> - General utilities</li>
                <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">base/</code> - Base classes for modules</li>
                <li>• <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">types/</code> - Custom types and response formats</li>
              </ul>
            </UCard>
            
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-key" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold text-green-600 dark:text-green-400">Authentication</h3>
                </div>
              </template>
              <ul class="text-sm space-y-2">
                <li>• JWT token generation</li>
                <li>• Token validation</li>
                <li>• Context-based user retrieval</li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-server" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold text-purple-600 dark:text-purple-400">HTTP Responses</h3>
                </div>
              </template>
              <ul class="text-sm space-y-2">
                <li>• Standardized success responses</li>
                <li>• Error handling utilities</li>
                <li>• Pagination helpers</li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-database" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold text-orange-600 dark:text-orange-400">Dynamic Operations</h3>
                </div>
              </template>
              <ul class="text-sm space-y-2">
                <li>• Dynamic model retrieval</li>
                <li>• Slug generation and validation</li>
                <li>• Context type conversion</li>
              </ul>
            </UCard>
          </div>
        </section>

        <!-- Core Helper Functions -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core Helper Functions</h2>
          
          <div class="space-y-6">
            <!-- JWT Helpers -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-key" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">JWT Authentication Helpers</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Helper functions for JWT token generation and validation:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">// Generate a JWT token for a user
token, err := helper.GenerateJWT(userID)
if err != nil {
    return err
}

// Generate JWT with extended claims
token, err := types.GenerateJWT(userID, map[string]any{
    "role": "admin",
    "permissions": []string{"read", "write"},
})

// Validate JWT token and extract user ID
userID, err := types.ValidateJWT(tokenString)
if err != nil {
    return fmt.Errorf("invalid token: %w", err)
}

// Legacy validation (from helper package)
_, userID, err := helper.ValidateJWT(tokenString)
if err != nil {
    return fmt.Errorf("token validation failed: %w", err)
}</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Context Helpers -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-layers" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Context Utilities</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Type-safe context value retrieval with automatic conversion:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">// Get string values from context
userRole := helper.GetContextString(ctx, "user_role")
authToken := helper.GetContextString(ctx, "auth_token")

// Get numeric values with automatic conversion
userID := helper.GetContextUint(ctx, "user_id")        // Returns uint
priority := helper.GetContextInt(ctx, "priority")      // Returns int
weight := helper.GetContextFloat(ctx, "weight")        // Returns float64

// Get boolean values
isAdmin := helper.GetContextBool(ctx, "is_admin")
isActive := helper.GetContextBool(ctx, "active")

// Context keys are automatically prefixed with "base_"
// So "user_id" becomes "base_user_id" internally</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Dynamic Model Helpers -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-database" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Dynamic Model Operations</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Dynamically retrieve objects based on field names and values:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">// First, register your models for dynamic retrieval
helper.RegisterModel("categories", func() interface{} { 
    return &models.Category{} 
})
helper.RegisterModel("users", func() interface{} { 
    return &models.User{} 
})

// Dynamically get objects by field relationships
// Automatically extracts table name from field name
category, err := helper.GetObject(db, "category_id", 5)
if err != nil {
    return fmt.Errorf("failed to get category: %w", err)
}

user, err := helper.GetObject(db, "user_id", 123)
if err != nil {
    return fmt.Errorf("failed to get user: %w", err)
}

// Type-safe version with generics
category, err := helper.GetObjectAs[models.Category](db, "category_id", 5)
if err != nil {
    return fmt.Errorf("failed to get category: %w", err)
}

// The function automatically:
// 1. Extracts "category" from "category_id"
// 2. Pluralizes to "categories" 
// 3. Looks up the registered model constructor
// 4. Queries the database for id = 5</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Slug Helpers -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-link" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Slug Generation</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Generate URL-friendly slugs with uniqueness guarantees:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">slugHelper := helper.NewSlugHelper()

// Generate slug from title
slug := slugHelper.Normalize("My Blog Post", "", "en")
// Result: "my-blog-post"

// Use custom slug if provided
slug := slugHelper.Normalize("My Blog Post", "custom-slug", "en")
// Result: "custom-slug"

// Generate unique slug with conflict resolution
existsFunc := func(slug string) (bool, error) {
    var count int64
    err := db.Model(&models.Post{}).Where("slug = ?", slug).Count(&count).Error
    return count > 0, err
}

uniqueSlug, err := slugHelper.GenerateUniqueSlug("my-blog-post", existsFunc)
if err != nil {
    return err
}
// Result: "my-blog-post" or "my-blog-post-2" if conflict exists</code></pre>
                </UCard>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Base Classes -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Base Classes</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Base Framework provides base classes that you can embed in your modules to get common functionality automatically.
          </p>

          <div class="space-y-6">
            <!-- Base Module -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-package" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Base Module</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Provides common module functionality with dependency injection:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">import "base/core/base"

type MyModule struct {
    *base.Module
    // Your module-specific fields
}

func NewMyModule(deps base.ModuleDependencies) *MyModule {
    return &MyModule{
        Module: base.NewModule("my-module", deps),
    }
}

func (m *MyModule) SomeMethod() {
    // Logging with module context
    m.LogInfo("Operation started", logger.String("operation", "example"))
    m.LogError("Operation failed", logger.String("error", "example"))
    
    // Emit events with module context
    m.EmitEvent("my-module.operation.completed", data)
    
    // Auto-migrate models
    err := m.AutoMigrate(&models.MyModel{})
    
    // Register routes with logging
    m.RegisterRoutes(router, func(r *router.RouterGroup) {
        r.GET("/api/my-endpoint", handler)
    })
    
    // Validate configuration
    err := m.ValidateConfig(func(cfg *config.Config) error {
        if cfg.MyRequiredField == "" {
            return errors.New("my_required_field is required")
        }
        return nil
    })
}</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Base Service -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-cog" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Base Service</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Common service operations like logging, pagination, and database transactions:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">type MyService struct {
    *base.Service
}

func NewMyService(db *gorm.DB, logger logger.Logger, emitter *emitter.Emitter, storage *storage.ActiveStorage) *MyService {
    return &MyService{
        Service: base.NewService(db, logger, emitter, storage),
    }
}

func (s *MyService) CreatePost(data *CreatePostRequest) (*models.Post, error) {
    // Validate ID
    if err := s.ValidateID(data.UserID); err != nil {
        return nil, err
    }
    
    // Use transaction wrapper
    var post *models.Post
    err := s.WithTransaction(func(tx *gorm.DB) error {
        post = &models.Post{Title: data.Title, Content: data.Content}
        return tx.Create(post).Error
    })
    if err != nil {
        s.LogError("create_post", err, logger.String("title", data.Title))
        return nil, err
    }
    
    // Emit event
    s.EmitEvent("post.created", post)
    s.LogInfo("create_post", "Post created successfully", logger.Uint("post_id", post.ID))
    
    return post, nil
}

func (s *MyService) GetPosts(page, limit int) (*types.PaginatedResponse, error) {
    var posts []models.Post
    var total int64
    
    // Count total
    s.DB.Model(&models.Post{}).Count(&total)
    
    // Get paginated data
    offset := (page - 1) * limit
    s.DB.Offset(offset).Limit(limit).Find(&posts)
    
    // Create paginated response
    return s.CreatePaginatedResponse(posts, total, page, limit), nil
}</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Base Controller -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-globe" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Base Controller</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Standardized HTTP response methods and parameter extraction:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">type MyController struct {
    *base.Controller
    service *MyService
}

func NewMyController(logger logger.Logger, storage *storage.ActiveStorage, service *MyService) *MyController {
    return &MyController{
        Controller: base.NewController(logger, storage),
        service:    service,
    }
}

func (c *MyController) CreatePost(ctx *router.Context) error {
    var req CreatePostRequest
    if err := ctx.ShouldBindJSON(&req); err != nil {
        c.RespondValidationError(ctx, err)
        return nil
    }
    
    post, err := c.service.CreatePost(&req)
    if err != nil {
        c.RespondInternalError(ctx, "Failed to create post")
        return nil
    }
    
    // Standardized success response
    c.RespondCreated(ctx, post, "Post created successfully")
    return nil
}

func (c *MyController) GetPost(ctx *router.Context) error {
    // Extract ID parameter with validation
    id, err := c.GetIDParam(ctx)
    if err != nil {
        c.RespondError(ctx, http.StatusBadRequest, "Invalid ID format")
        return nil
    }
    
    post, err := c.service.GetPostByID(id)
    if err != nil {
        c.RespondNotFound(ctx, "Post")
        return nil
    }
    
    c.RespondSuccess(ctx, post)
    return nil
}

func (c *MyController) ListPosts(ctx *router.Context) error {
    // Extract pagination parameters
    page, limit := c.GetPaginationParams(ctx)
    
    posts, err := c.service.GetPosts(page, limit)
    if err != nil {
        c.RespondInternalError(ctx, "Failed to retrieve posts")
        return nil
    }
    
    c.RespondSuccess(ctx, posts)
    return nil
}</code></pre>
                </UCard>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Custom Types -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Custom Types</h2>
          
          <div class="space-y-6">
            <!-- DateTime Type -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-calendar" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">DateTime Type</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Enhanced datetime handling with flexible parsing and database compatibility:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">import "base/core/types"

type MyModel struct {
    ID        uint            `json:"id"`
    Name      string          `json:"name"`
    CreatedAt types.DateTime  `json:"created_at"`
    UpdatedAt types.DateTime  `json:"updated_at"`
}

// Usage examples
now := types.Now()                           // Current time
dt := types.DateTime{Time: time.Now()}       // From time.Time

// JSON parsing supports multiple formats:
// - RFC3339: "2006-01-02T15:04:05Z07:00"
// - MySQL: "2006-01-02 15:04:05"
// - Date only: "2006-01-02"

// Methods available on DateTime
if !dt.IsZero() {
    formatted := dt.Format("2006-01-02")     // Custom formatting
    future := dt.Add(24 * time.Hour)         // Add duration
    duration := dt.Sub(other)                // Duration between times
    
    isAfter := dt.After(other)               // Comparison
    isBefore := dt.Before(other)             // Comparison
    isEqual := dt.Equal(other)               // Equality
}</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Response Types -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-server" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Standardized Response Types</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Consistent response structures for success, error, and paginated responses:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">// Success Response
successResponse := types.SuccessResponse{
    Success: true,
    Message: "Operation completed",
    Data:    myData,
}

// Error Response
errorResponse := types.ErrorResponse{
    Success: false,
    Error:   "Something went wrong",
    Details: errorDetails, // Optional additional info
}

// Paginated Response
paginatedResponse := types.PaginatedResponse{
    Data: posts,
    Pagination: types.Pagination{
        Total:      100,
        Page:       1,
        PageSize:   10,
        TotalPages: 10,
    },
}

// JSON output examples:
{
  "success": true,
  "message": "Posts retrieved successfully",
  "data": [...]
}

{
  "success": false,
  "error": "Validation failed",
  "details": "Title is required"
}

{
  "data": [...],
  "pagination": {
    "total": 100,
    "page": 1,
    "page_size": 10,
    "total_pages": 10
  }
}</code></pre>
                </UCard>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Error Handling Types -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Error Handling Types</h2>
          
          <div class="space-y-6">
            <!-- Validation Errors -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-alert-circle" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Validation Error Types</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Structured validation error handling with field-specific error messages:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">import "base/core/types"

// Single validation error
validationErr := types.ValidationError{
    Field:   "email",
    Message: "Email address is required",
}

// Multiple validation errors
validationResponse := types.ValidationErrorResponse{
    Errors: []types.ValidationError{
        {Field: "title", Message: "Title must be at least 3 characters"},
        {Field: "content", Message: "Content cannot be empty"},
        {Field: "category_id", Message: "Valid category is required"},
    },
}

// Usage in controllers
func (c *Controller) ValidatePost(ctx *router.Context) error {
    var errors []types.ValidationError
    
    if req.Title == "" {
        errors = append(errors, types.ValidationError{
            Field: "title", Message: "Title is required",
        })
    }
    
    if len(errors) > 0 {
        return ctx.JSON(400, types.ValidationErrorResponse{Errors: errors})
    }
    
    return nil
}</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- Predefined Errors -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-x-circle" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Predefined Common Errors</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Ready-to-use error constants for common scenarios:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">import "base/core/types"

// Authentication and authorization errors
if err := validateToken(token); err != nil {
    return types.ErrInvalidToken
}

if time.Now().After(claims.ExpiresAt.Time) {
    return types.ErrTokenExpired
}

// User management errors
user, err := getUserByEmail(email)
if err != nil {
    return types.ErrUserNotFound
}

if !bcrypt.CompareHashAndPassword(user.Password, []byte(password)) {
    return types.ErrInvalidPassword
}

// Registration validation
if userExists(email) {
    return types.ErrEmailExists
}

if !isValidEmail(email) {
    return types.ErrInvalidEmail
}

// Custom error wrapping
func (s *AuthService) Login(email, password string) error {
    user, err := s.GetUserByEmail(email)
    if err != nil {
        s.Logger.Error("User lookup failed", logger.String("email", email))
        return fmt.Errorf("login failed: %w", types.ErrUserNotFound)
    }
    
    if !s.ValidatePassword(user, password) {
        s.Logger.Warn("Invalid password attempt", logger.String("email", email))
        return fmt.Errorf("login failed: %w", types.ErrInvalidPassword)
    }
    
    return nil
}</code></pre>
                </UCard>
              </div>
            </UCard>

            <!-- UserData Type -->
            <UCard>
              <template #header>
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded flex items-center justify-center">
                    <Icon name="i-lucide-user" class="w-5 h-5" />
                  </div>
                  <h3 class="font-semibold">Standard User Data Type</h3>
                </div>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Standardized user data structure for consistent user representation:
                </p>
                <UCard class="bg-gray-50 dark:bg-gray-800">
                  <pre class="text-sm overflow-x-auto"><code class="language-go">import "base/core/types"

// Standard user data structure
userData := types.UserData{
    Id:        user.ID,
    FirstName: user.FirstName,
    LastName:  user.LastName,
    Email:     user.Email,
    Username:  user.Username,
}

// Usage in responses
func (c *AuthController) GetProfile(ctx *router.Context) error {
    userID := c.GetContextUint(ctx, "user_id")
    
    user, err := c.service.GetUser(userID)
    if err != nil {
        return c.RespondNotFound(ctx, "User")
    }
    
    // Convert to standard format
    userData := types.UserData{
        Id:        user.ID,
        FirstName: user.FirstName,
        LastName:  user.LastName,
        Email:     user.Email,
        Username:  user.Username,
    }
    
    return c.RespondSuccess(ctx, userData)
}

// JSON output
{
  "success": true,
  "data": {
    "id": 123,
    "firstname": "John",
    "lastname": "Doe", 
    "email": "john@example.com",
    "username": "johndoe"
  }
}</code></pre>
                </UCard>
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
                <li>• Use base classes to inherit common functionality</li>
                <li>• Register models for dynamic retrieval early in initialization</li>
                <li>• Use standardized response types for consistency</li>
                <li>• Leverage transaction helpers for data integrity</li>
                <li>• Use context helpers for type-safe value extraction</li>
                <li>• Generate unique slugs to avoid conflicts</li>
                <li>• Use the DateTime type for flexible time handling</li>
                <li>• Use predefined error constants for common scenarios</li>
                <li>• Structure validation errors with field-specific messages</li>
              </ul>
            </UCard>
            
            <UCard>
              <template #header>
                <h3 class="font-semibold text-red-600 dark:text-red-400">❌ Don't</h3>
              </template>
              <ul class="text-sm space-y-2">
                <li>• Reimplement functionality already provided by helpers</li>
                <li>• Forget to register models before using dynamic retrieval</li>
                <li>• Skip error handling in helper functions</li>
                <li>• Use raw time.Time when DateTime provides better features</li>
                <li>• Hardcode response structures instead of using types</li>
                <li>• Ignore transaction boundaries for related operations</li>
                <li>• Access context values without type checking</li>
                <li>• Create custom error types for common error scenarios</li>
                <li>• Return generic errors without field-specific validation messages</li>
              </ul>
            </UCard>
          </div>
        </section>

        <!-- Integration Examples -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Integration Example</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Here's how to use multiple helpers together in a real module:
          </p>

          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm overflow-x-auto"><code class="language-go">// Module with integrated helpers
type BlogModule struct {
    *base.Module
    service    *BlogService
    controller *BlogController
}

func NewBlogModule(deps base.ModuleDependencies) *BlogModule {
    // Register models for dynamic retrieval
    helper.RegisterModel("categories", func() interface{} { return &models.Category{} })
    helper.RegisterModel("users", func() interface{} { return &models.User{} })
    
    // Create services with base functionality
    service := &BlogService{
        Service: base.NewService(deps.GetDB(), deps.GetLogger(), deps.GetEmitter(), deps.GetStorage()),
        slugHelper: helper.NewSlugHelper(),
    }
    
    // Create controller with base functionality
    controller := &BlogController{
        Controller: base.NewController(deps.GetLogger(), deps.GetStorage()),
        service:    service,
    }
    
    return &BlogModule{
        Module:     base.NewModule("blog", deps),
        service:    service,
        controller: controller,
    }
}

type BlogService struct {
    *base.Service
    slugHelper *helper.SlugHelper
}

func (s *BlogService) CreatePost(data *CreatePostRequest) (*models.Post, error) {
    // Validate relationships using dynamic helpers
    category, err := helper.GetObjectAs[models.Category](s.DB, "category_id", data.CategoryID)
    if err != nil {
        return nil, fmt.Errorf("invalid category: %w", err)
    }
    
    author, err := helper.GetObjectAs[models.User](s.DB, "user_id", data.AuthorID)
    if err != nil {
        return nil, fmt.Errorf("invalid author: %w", err)
    }
    
    // Generate unique slug
    baseSlug := s.slugHelper.Normalize(data.Title, data.Slug, "en")
    uniqueSlug, err := s.slugHelper.GenerateUniqueSlug(baseSlug, func(slug string) (bool, error) {
        var count int64
        err := s.DB.Model(&models.Post{}).Where("slug = ?", slug).Count(&count).Error
        return count > 0, err
    })
    if err != nil {
        return nil, err
    }
    
    // Create post with transaction
    var post *models.Post
    err = s.WithTransaction(func(tx *gorm.DB) error {
        post = &models.Post{
            Title:      data.Title,
            Content:    data.Content,
            Slug:       uniqueSlug,
            CategoryID: category.ID,
            AuthorID:   author.ID,
            CreatedAt:  types.Now(),
        }
        return tx.Create(post).Error
    })
    
    if err != nil {
        s.LogError("create_post", err, 
            logger.String("title", data.Title),
            logger.String("slug", uniqueSlug))
        return nil, err
    }
    
    // Emit event and log success
    s.EmitEvent("blog.post.created", post)
    s.LogInfo("create_post", "Post created successfully", 
        logger.Uint("post_id", post.ID),
        logger.String("slug", uniqueSlug))
    
    return post, nil
}</code></pre>
          </UCard>
        </section>

        <!-- Footer -->
        <section>
          <UAlert 
            icon="i-heroicons-information-circle" 
            color="blue" 
            variant="soft"
            title="Next Steps"
            description="Explore the specific framework components like Storage, Email, and Authentication to see how they integrate with these helper functions for complete application development."
          />
        </section>
      </div>
    </DocsLayout>
</template>

<script setup>
import DocsLayout from '@/layouts/DocsLayout.vue'
</script>
