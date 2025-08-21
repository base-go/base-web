<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Logger</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Structured logging system with typed fields, context integration, and beautiful console output
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>📊 Structured Logging</template>
          <template #description>
            Base Framework's logger provides structured logging with typed fields, context integration, and multiple output formats. Built on Zap for high performance, it includes beautiful console output with emojis and colors plus JSON file logging for production.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Typed Fields</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Use strongly-typed fields like String(), Int(), Duration() for structured, searchable logs.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-monitor" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Beautiful Console</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Colorized console output with emojis and clear formatting for development.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-file-text" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">JSON Files</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Production-ready JSON logs written to files for analysis and monitoring.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Configuration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-settings" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Environment Variables</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">.env Configuration</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`# Log Level (debug, info, warn, error, fatal)
LOG_LEVEL=info

# Log Directory Path
LOG_PATH=logs

# Environment (development/production)
ENVIRONMENT=development`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400"># Log Level (debug, info, warn, error, fatal)</span>
<span class="text-blue-400">LOG_LEVEL</span>=<span class="text-yellow-400">info</span>

<span class="text-green-400"># Log Directory Path</span>
<span class="text-blue-400">LOG_PATH</span>=<span class="text-yellow-400">logs</span>

<span class="text-green-400"># Environment (development/production)</span>
<span class="text-blue-400">ENVIRONMENT</span>=<span class="text-yellow-400">development</span></code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-code" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Manual Configuration</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">logger initialization</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`import &quot;base/core/logger&quot;

// Create logger with custom config
config := logger.Config{
    Environment: &quot;development&quot;, // or &quot;production&quot;
    LogPath:     &quot;logs&quot;,
    Level:       &quot;debug&quot;,
}

log, err := logger.NewLogger(config)
if err != nil {
    panic(err)
}

// Use the logger
log.Info(&quot;Application started&quot;,
    logger.String(&quot;version&quot;, &quot;1.0.0&quot;),
    logger.String(&quot;environment&quot;, config.Environment))`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">import</span> <span class="text-green-400">"base/core/logger"</span>

<span class="text-green-400">// Create logger with custom config</span>
config := logger.Config{
    Environment: <span class="text-green-400">"development"</span>, <span class="text-green-400">// or "production"</span>
    LogPath:     <span class="text-green-400">"logs"</span>,
    Level:       <span class="text-green-400">"debug"</span>,
}

log, err := logger.NewLogger(config)
<span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
    <span class="text-blue-400">panic</span>(err)
}

<span class="text-green-400">// Use the logger</span>
log.Info(<span class="text-green-400">"Application started"</span>,
    logger.String(<span class="text-green-400">"version"</span>, <span class="text-green-400">"1.0.0"</span>),
    logger.String(<span class="text-green-400">"environment"</span>, config.Environment))</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Log Levels -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Log Levels</h2>
        
        <div class="space-y-6">
          <p class="text-gray-600 dark:text-gray-300">
            Base Framework supports five log levels, each with specific use cases and visual indicators.
          </p>

          <div class="grid gap-4 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl">🔍</span>
                  <span class="font-semibold text-purple-600 dark:text-purple-400">DEBUG</span>
                </div>
              </template>
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Detailed information for diagnosing problems. Only shown in development.
                </p>
                <div class="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <code>log.Debug("User query", logger.String("sql", query))</code>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl">ℹ️</span>
                  <span class="font-semibold text-blue-600 dark:text-blue-400">INFO</span>
                </div>
              </template>
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  General information about application flow and important events.
                </p>
                <div class="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <code>log.Info("User created", logger.Uint("user_id", 123))</code>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl">⚠️</span>
                  <span class="font-semibold text-yellow-600 dark:text-yellow-400">WARN</span>
                </div>
              </template>
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Something unexpected happened but the application can continue.
                </p>
                <div class="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <code>log.Warn("Email failed", logger.String("recipient", email))</code>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl">❌</span>
                  <span class="font-semibold text-red-600 dark:text-red-400">ERROR</span>
                </div>
              </template>
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Error conditions that should be investigated and fixed.
                </p>
                <div class="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <code>log.Error("Database error", logger.String("error", err.Error()))</code>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <span class="text-2xl">💀</span>
                  <span class="font-semibold text-red-800 dark:text-red-300">FATAL</span>
                </div>
              </template>
              <div class="space-y-2">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Critical errors that cause the application to exit immediately.
                </p>
                <div class="text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded">
                  <code>log.Fatal("Cannot connect to database", logger.String("dsn", dsn))</code>
                </div>
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Structured Logging -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Structured Logging with Typed Fields</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-database" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Available Field Types</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Typed Field Examples</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// String fields
logger.String(&quot;username&quot;, &quot;john_doe&quot;)
logger.String(&quot;error&quot;, err.Error())

// Numeric fields
logger.Int(&quot;status_code&quot;, 200)
logger.Int64(&quot;user_id&quot;, 123456)
logger.Uint(&quot;count&quot;, 42)
logger.Float64(&quot;price&quot;, 29.99)

// Boolean fields
logger.Bool(&quot;is_admin&quot;, true)
logger.Bool(&quot;email_verified&quot;, false)

// Time and duration
logger.Duration(&quot;request_time&quot;, time.Since(start))

// Complex data
logger.Any(&quot;metadata&quot;, map[string]interface{}{
    &quot;ip&quot;: &quot;192.168.1.1&quot;,
    &quot;user_agent&quot;: &quot;Mozilla/5.0...&quot;,
})`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// String fields</span>
logger.String(<span class="text-green-400">"username"</span>, <span class="text-green-400">"john_doe"</span>)
logger.String(<span class="text-green-400">"error"</span>, err.Error())

<span class="text-green-400">// Numeric fields</span>
logger.Int(<span class="text-green-400">"status_code"</span>, <span class="text-purple-400">200</span>)
logger.Int64(<span class="text-green-400">"user_id"</span>, <span class="text-purple-400">123456</span>)
logger.Uint(<span class="text-green-400">"count"</span>, <span class="text-purple-400">42</span>)
logger.Float64(<span class="text-green-400">"price"</span>, <span class="text-purple-400">29.99</span>)

<span class="text-green-400">// Boolean fields</span>
logger.Bool(<span class="text-green-400">"is_admin"</span>, <span class="text-purple-400">true</span>)
logger.Bool(<span class="text-green-400">"email_verified"</span>, <span class="text-purple-400">false</span>)

<span class="text-green-400">// Time and duration</span>
logger.Duration(<span class="text-green-400">"request_time"</span>, time.Since(start))

<span class="text-green-400">// Complex data</span>
logger.Any(<span class="text-green-400">"metadata"</span>, <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-blue-400">interface</span>{}{
    <span class="text-green-400">"ip"</span>: <span class="text-green-400">"192.168.1.1"</span>,
    <span class="text-green-400">"user_agent"</span>: <span class="text-green-400">"Mozilla/5.0..."</span>,
})</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Context Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Context Integration & Request Tracing</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-git-branch" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Creating Child Loggers</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Context-aware logging</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Create a child logger with context
requestLogger := logger.With(
    logger.String(&quot;request_id&quot;, requestID),
    logger.String(&quot;user_id&quot;, userID),
    logger.String(&quot;endpoint&quot;, &quot;/api/users&quot;),
)

// All subsequent logs include context
requestLogger.Info(&quot;Processing request&quot;)
requestLogger.Debug(&quot;Validating input&quot;, 
    logger.Any(&quot;input&quot;, requestData))
requestLogger.Info(&quot;Request completed&quot;, 
    logger.Duration(&quot;duration&quot;, time.Since(start)))`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Create a child logger with context</span>
requestLogger := logger.With(
    logger.String(<span class="text-green-400">"request_id"</span>, requestID),
    logger.String(<span class="text-green-400">"user_id"</span>, userID),
    logger.String(<span class="text-green-400">"endpoint"</span>, <span class="text-green-400">"/api/users"</span>),
)

<span class="text-green-400">// All subsequent logs include context</span>
requestLogger.Info(<span class="text-green-400">"Processing request"</span>)
requestLogger.Debug(<span class="text-green-400">"Validating input"</span>, 
    logger.Any(<span class="text-green-400">"input"</span>, requestData))
requestLogger.Info(<span class="text-green-400">"Request completed"</span>, 
    logger.Duration(<span class="text-green-400">"duration"</span>, time.Since(start)))</code></pre>
            </div>
          </UCard>

          <UAlert color="blue" variant="soft">
            <template #title">💡 Context Best Practice</template>
            <template #description>
              Create child loggers with request-specific context at the beginning of request handlers. This ensures all logs within that request scope are automatically tagged with relevant information like request ID, user ID, and endpoint.
            </template>
          </UAlert>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Usage Examples</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Controller Logging</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">controller.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type UserController struct {
    service *UserService
    logger  logger.Logger
}

func (c *UserController) CreateUser(ctx *router.Context) error {
    // Create request-scoped logger
    requestLogger := c.logger.With(
        logger.String(&quot;endpoint&quot;, &quot;POST /api/users&quot;),
        logger.String(&quot;request_id&quot;, ctx.Get(&quot;request_id&quot;).(string)),
    )

    requestLogger.Info(&quot;Creating new user&quot;)

    var req CreateUserRequest
    if err := ctx.ShouldBind(&req); err != nil {
        requestLogger.Warn(&quot;Invalid request data&quot;, 
            logger.String(&quot;error&quot;, err.Error()),
            logger.Any(&quot;request&quot;, req))
        return ctx.JSON(400, types.ErrorResponse{Error: err.Error()})
    }

    user, err := c.service.Create(&req)
    if err != nil {
        requestLogger.Error(&quot;Failed to create user&quot;, 
            logger.String(&quot;error&quot;, err.Error()),
            logger.String(&quot;email&quot;, req.Email))
        return ctx.JSON(500, types.ErrorResponse{Error: &quot;Internal error&quot;})
    }

    requestLogger.Info(&quot;User created successfully&quot;, 
        logger.Uint(&quot;user_id&quot;, user.ID),
        logger.String(&quot;email&quot;, user.Email))
        
    return ctx.JSON(201, user)
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">UserController</span> <span class="text-blue-400">struct</span> {
    service *UserService
    logger  logger.Logger
}

<span class="text-blue-400">func</span> (c *UserController) <span class="text-yellow-400">CreateUser</span>(ctx *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Create request-scoped logger</span>
    requestLogger := c.logger.With(
        logger.String(<span class="text-green-400">"endpoint"</span>, <span class="text-green-400">"POST /api/users"</span>),
        logger.String(<span class="text-green-400">"request_id"</span>, ctx.Get(<span class="text-green-400">"request_id"</span>).(string)),
    )

    requestLogger.Info(<span class="text-green-400">"Creating new user"</span>)

    <span class="text-blue-400">var</span> req CreateUserRequest
    <span class="text-blue-400">if</span> err := ctx.ShouldBind(&req); err != <span class="text-purple-400">nil</span> {
        requestLogger.Warn(<span class="text-green-400">"Invalid request data"</span>, 
            logger.String(<span class="text-green-400">"error"</span>, err.Error()),
            logger.Any(<span class="text-green-400">"request"</span>, req))
        <span class="text-blue-400">return</span> ctx.JSON(<span class="text-purple-400">400</span>, types.ErrorResponse{Error: err.Error()})
    }

    user, err := c.service.Create(&req)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        requestLogger.Error(<span class="text-green-400">"Failed to create user"</span>, 
            logger.String(<span class="text-green-400">"error"</span>, err.Error()),
            logger.String(<span class="text-green-400">"email"</span>, req.Email))
        <span class="text-blue-400">return</span> ctx.JSON(<span class="text-purple-400">500</span>, types.ErrorResponse{Error: <span class="text-green-400">"Internal error"</span>})
    }

    requestLogger.Info(<span class="text-green-400">"User created successfully"</span>, 
        logger.Uint(<span class="text-green-400">"user_id"</span>, user.ID),
        logger.String(<span class="text-green-400">"email"</span>, user.Email))
        
    <span class="text-blue-400">return</span> ctx.JSON(<span class="text-purple-400">201</span>, user)
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-server" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Service Layer Logging</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">service.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type EmailService struct {
    db     *gorm.DB
    logger logger.Logger
}

func (s *EmailService) SendWelcomeEmail(userID uint, email string) error {
    start := time.Now()
    
    // Create service-scoped logger
    serviceLogger := s.logger.With(
        logger.String(&quot;service&quot;, &quot;EmailService&quot;),
        logger.String(&quot;operation&quot;, &quot;SendWelcomeEmail&quot;),
        logger.Uint(&quot;user_id&quot;, userID),
    )

    serviceLogger.Info(&quot;Starting email send&quot;, 
        logger.String(&quot;recipient&quot;, email),
        logger.String(&quot;template&quot;, &quot;welcome&quot;))

    // Fetch user details
    var user User
    if err := s.db.First(&user, userID).Error; err != nil {
        serviceLogger.Error(&quot;Failed to fetch user&quot;, 
            logger.String(&quot;error&quot;, err.Error()))
        return err
    }

    serviceLogger.Debug(&quot;User fetched&quot;, 
        logger.String(&quot;name&quot;, user.Name),
        logger.Bool(&quot;email_verified&quot;, user.EmailVerified))

    // Send email (simulated)
    if err := s.sendEmail(email, &quot;welcome&quot;, user); err != nil {
        serviceLogger.Error(&quot;Email delivery failed&quot;, 
            logger.String(&quot;error&quot;, err.Error()),
            logger.Duration(&quot;attempt_duration&quot;, time.Since(start)))
        return err
    }

    serviceLogger.Info(&quot;Welcome email sent successfully&quot;, 
        logger.Duration(&quot;total_duration&quot;, time.Since(start)))
        
    return nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">EmailService</span> <span class="text-blue-400">struct</span> {
    db     *gorm.DB
    logger logger.Logger
}

<span class="text-blue-400">func</span> (s *EmailService) <span class="text-yellow-400">SendWelcomeEmail</span>(userID <span class="text-purple-400">uint</span>, email <span class="text-purple-400">string</span>) <span class="text-purple-400">error</span> {
    start := time.Now()
    
    <span class="text-green-400">// Create service-scoped logger</span>
    serviceLogger := s.logger.With(
        logger.String(<span class="text-green-400">"service"</span>, <span class="text-green-400">"EmailService"</span>),
        logger.String(<span class="text-green-400">"operation"</span>, <span class="text-green-400">"SendWelcomeEmail"</span>),
        logger.Uint(<span class="text-green-400">"user_id"</span>, userID),
    )

    serviceLogger.Info(<span class="text-green-400">"Starting email send"</span>, 
        logger.String(<span class="text-green-400">"recipient"</span>, email),
        logger.String(<span class="text-green-400">"template"</span>, <span class="text-green-400">"welcome"</span>))

    <span class="text-green-400">// Fetch user details</span>
    <span class="text-blue-400">var</span> user User
    <span class="text-blue-400">if</span> err := s.db.First(&user, userID).Error; err != <span class="text-purple-400">nil</span> {
        serviceLogger.Error(<span class="text-green-400">"Failed to fetch user"</span>, 
            logger.String(<span class="text-green-400">"error"</span>, err.Error()))
        <span class="text-blue-400">return</span> err
    }

    serviceLogger.Debug(<span class="text-green-400">"User fetched"</span>, 
        logger.String(<span class="text-green-400">"name"</span>, user.Name),
        logger.Bool(<span class="text-green-400">"email_verified"</span>, user.EmailVerified))

    <span class="text-green-400">// Send email (simulated)</span>
    <span class="text-blue-400">if</span> err := s.sendEmail(email, <span class="text-green-400">"welcome"</span>, user); err != <span class="text-purple-400">nil</span> {
        serviceLogger.Error(<span class="text-green-400">"Email delivery failed"</span>, 
            logger.String(<span class="text-green-400">"error"</span>, err.Error()),
            logger.Duration(<span class="text-green-400">"attempt_duration"</span>, time.Since(start)))
        <span class="text-blue-400">return</span> err
    }

    serviceLogger.Info(<span class="text-green-400">"Welcome email sent successfully"</span>, 
        logger.Duration(<span class="text-green-400">"total_duration"</span>, time.Since(start)))
        
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Middleware Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Middleware Integration</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-route" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Request Logging Middleware</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">middleware setup</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`import &quot;base/core/router/middleware&quot;

// Configure logger middleware
loggerConfig := &middleware.LoggerConfig{
    Logger:         log,
    LogLevel:       &quot;info&quot;,
    SkipPaths:      []string{&quot;/health&quot;, &quot;/metrics&quot;},
    IncludeHeaders: true,  // Include request headers in logs
    IncludeBody:    false, // Don't log request bodies by default
}

// Add to router
router.Use(middleware.Logger(loggerConfig))

// Add recovery middleware with logging
router.Use(middleware.Recovery(log))

// Add request ID middleware for tracing
router.Use(middleware.RequestID())`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">import</span> <span class="text-green-400">"base/core/router/middleware"</span>

<span class="text-green-400">// Configure logger middleware</span>
loggerConfig := &middleware.LoggerConfig{
    Logger:         log,
    LogLevel:       <span class="text-green-400">"info"</span>,
    SkipPaths:      []<span class="text-purple-400">string</span>{<span class="text-green-400">"/health"</span>, <span class="text-green-400">"/metrics"</span>},
    IncludeHeaders: <span class="text-purple-400">true</span>,  <span class="text-green-400">// Include request headers in logs</span>
    IncludeBody:    <span class="text-purple-400">false</span>, <span class="text-green-400">// Don't log request bodies by default</span>
}

<span class="text-green-400">// Add to router</span>
router.Use(middleware.Logger(loggerConfig))

<span class="text-green-400">// Add recovery middleware with logging</span>
router.Use(middleware.Recovery(log))

<span class="text-green-400">// Add request ID middleware for tracing</span>
router.Use(middleware.RequestID())</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-activity" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">Custom Access Log Format</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">custom access logs</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Create custom access log with specific format
format := &quot;:method :path :status :latency :ip - :user_agent&quot;
router.Use(middleware.AccessLog(format, log))

// Example output:
// INFO   GET /api/users 200 45.2ms 127.0.0.1 - Mozilla/5.0...

// Available tokens:
// :method     - HTTP method (GET, POST, etc.)
// :path       - Request path
// :status     - Response status code
// :latency    - Request duration
// :ip         - Client IP address
// :user_agent - User agent string`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Create custom access log with specific format</span>
format := <span class="text-green-400">":method :path :status :latency :ip - :user_agent"</span>
router.Use(middleware.AccessLog(format, log))

<span class="text-green-400">// Example output:</span>
<span class="text-green-400">// INFO   GET /api/users 200 45.2ms 127.0.0.1 - Mozilla/5.0...</span>

<span class="text-green-400">// Available tokens:</span>
<span class="text-green-400">// :method     - HTTP method (GET, POST, etc.)</span>
<span class="text-green-400">// :path       - Request path</span>
<span class="text-green-400">// :status     - Response status code</span>
<span class="text-green-400">// :latency    - Request duration</span>
<span class="text-green-400">// :ip         - Client IP address</span>
<span class="text-green-400">// :user_agent - User agent string</span></code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Output Examples -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Output Examples</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-monitor" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Console Output (Development)</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Development Console</span>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span style="color: #36CBFB;">2024-01-15 14:30:25</span>  <span style="color: #3B82F6;">ℹ️  INFO </span>  <span style="color: #888;">main.go:118</span>  🚀 Starting Base Framework  <span style="color: #FCD34D;">version</span>=<span style="color: #10B981;">1.0.0</span> <span style="color: #FCD34D;">environment</span>=<span style="color: #10B981;">development</span>
<span style="color: #36CBFB;">2024-01-15 14:30:25</span>  <span style="color: #3B82F6;">ℹ️  INFO </span>  <span style="color: #888;">database.go:45</span>  ✅ Database initialized
<span style="color: #36CBFB;">2024-01-15 14:30:26</span>  <span style="color: #3B82F6;">ℹ️  INFO </span>  <span style="color: #888;">middleware.go:102</span>  Request  <span style="color: #FCD34D;">method</span>=<span style="color: #10B981;">GET</span> <span style="color: #FCD34D;">path</span>=<span style="color: #10B981;">/api/users</span> <span style="color: #FCD34D;">status</span>=<span style="color: #10B981;">200</span> <span style="color: #FCD34D;">latency</span>=<span style="color: #10B981;">24.5ms</span>
<span style="color: #36CBFB;">2024-01-15 14:30:27</span>  <span style="color: #F59E0B;">⚠️  WARN </span>  <span style="color: #888;">user.go:67</span>  Email delivery failed  <span style="color: #FCD34D;">user_id</span>=<span style="color: #10B981;">123</span> <span style="color: #FCD34D;">error</span>=<span style="color: #10B981;">smtp timeout</span>
<span style="color: #36CBFB;">2024-01-15 14:30:28</span>  <span style="color: #EF4444;">❌ ERROR</span>  <span style="color: #888;">database.go:89</span>  Connection lost  <span style="color: #FCD34D;">error</span>=<span style="color: #10B981;">connection refused</span> <span style="color: #FCD34D;">retry_count</span>=<span style="color: #10B981;">3</span></code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-file-text" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">JSON File Output (Production)</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">logs/app.log</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`{&quot;level&quot;:&quot;info&quot;,&quot;ts&quot;:&quot;2024-01-15T14:30:25.123Z&quot;,&quot;caller&quot;:&quot;main.go:118&quot;,&quot;msg&quot;:&quot;Starting Base Framework&quot;,&quot;version&quot;:&quot;1.0.0&quot;,&quot;environment&quot;:&quot;production&quot;}
{&quot;level&quot;:&quot;info&quot;,&quot;ts&quot;:&quot;2024-01-15T14:30:26.456Z&quot;,&quot;caller&quot;:&quot;middleware.go:102&quot;,&quot;msg&quot;:&quot;Request&quot;,&quot;method&quot;:&quot;POST&quot;,&quot;path&quot;:&quot;/api/users&quot;,&quot;status&quot;:201,&quot;latency&quot;:&quot;45.2ms&quot;,&quot;ip&quot;:&quot;192.168.1.100&quot;,&quot;user_agent&quot;:&quot;PostmanRuntime/7.28.4&quot;}
{&quot;level&quot;:&quot;error&quot;,&quot;ts&quot;:&quot;2024-01-15T14:30:27.789Z&quot;,&quot;caller&quot;:&quot;user.go:67&quot;,&quot;msg&quot;:&quot;Failed to create user&quot;,&quot;user_id&quot;:123,&quot;email&quot;:&quot;user@example.com&quot;,&quot;error&quot;:&quot;validation failed&quot;,&quot;request_id&quot;:&quot;req_abc123&quot;}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code>{<span class="text-blue-400">"level"</span>:<span class="text-green-400">"info"</span>,<span class="text-blue-400">"ts"</span>:<span class="text-green-400">"2024-01-15T14:30:25.123Z"</span>,<span class="text-blue-400">"caller"</span>:<span class="text-green-400">"main.go:118"</span>,<span class="text-blue-400">"msg"</span>:<span class="text-green-400">"Starting Base Framework"</span>,<span class="text-blue-400">"version"</span>:<span class="text-green-400">"1.0.0"</span>,<span class="text-blue-400">"environment"</span>:<span class="text-green-400">"production"</span>}
{<span class="text-blue-400">"level"</span>:<span class="text-green-400">"info"</span>,<span class="text-blue-400">"ts"</span>:<span class="text-green-400">"2024-01-15T14:30:26.456Z"</span>,<span class="text-blue-400">"caller"</span>:<span class="text-green-400">"middleware.go:102"</span>,<span class="text-blue-400">"msg"</span>:<span class="text-green-400">"Request"</span>,<span class="text-blue-400">"method"</span>:<span class="text-green-400">"POST"</span>,<span class="text-blue-400">"path"</span>:<span class="text-green-400">"/api/users"</span>,<span class="text-blue-400">"status"</span>:<span class="text-purple-400">201</span>,<span class="text-blue-400">"latency"</span>:<span class="text-green-400">"45.2ms"</span>,<span class="text-blue-400">"ip"</span>:<span class="text-green-400">"192.168.1.100"</span>,<span class="text-blue-400">"user_agent"</span>:<span class="text-green-400">"PostmanRuntime/7.28.4"</span>}
{<span class="text-blue-400">"level"</span>:<span class="text-green-400">"error"</span>,<span class="text-blue-400">"ts"</span>:<span class="text-green-400">"2024-01-15T14:30:27.789Z"</span>,<span class="text-blue-400">"caller"</span>:<span class="text-green-400">"user.go:67"</span>,<span class="text-blue-400">"msg"</span>:<span class="text-green-400">"Failed to create user"</span>,<span class="text-blue-400">"user_id"</span>:<span class="text-purple-400">123</span>,<span class="text-blue-400">"email"</span>:<span class="text-green-400">"user@example.com"</span>,<span class="text-blue-400">"error"</span>:<span class="text-green-400">"validation failed"</span>,<span class="text-blue-400">"request_id"</span>:<span class="text-green-400">"req_abc123"</span>}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Best Practices -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Performance Tips & Best Practices</h2>
        
        <div class="space-y-4">
          <UAlert color="green" variant="soft">
            <template #title>✅ Performance Best Practices</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Use typed fields (String, Int, etc.) instead of Any() when possible</li>
                <li>Create child loggers with With() for request context instead of repeating fields</li>
                <li>Set appropriate log levels - use DEBUG sparingly in production</li>
                <li>Avoid logging large objects with Any() - serialize critical fields only</li>
                <li>Use Duration() fields to track performance metrics</li>
                <li>Configure log rotation to prevent disk space issues</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="blue" variant="soft">
            <template #title">💡 Logging Guidelines</template>
            <template #description">
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Log at entry/exit points of important functions with context</li>
                <li>Always log errors with relevant context (user_id, request_id, etc.)</li>
                <li>Use consistent field names across your application (user_id, not userId)</li>
                <li>Include correlation IDs to trace requests across services</li>
                <li>Log business events for analytics and monitoring</li>
                <li>Don't log sensitive information like passwords or tokens</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="orange" variant="soft">
            <template #title">⚠️ Common Pitfalls</template>
            <template #description">
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Don't create new loggers in hot paths - reuse instances</li>
                <li>Avoid string concatenation in log messages - use fields instead</li>
                <li>Don't log at DEBUG level in production unless necessary</li>
                <li>Be careful with Any() - it can impact performance with large objects</li>
                <li>Don't ignore errors from logging operations in critical paths</li>
                <li>Avoid excessive logging in loops - consider sampling or batching</li>
              </ul>
            </template>
          </UAlert>
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