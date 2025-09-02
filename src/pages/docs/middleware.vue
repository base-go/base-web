<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
        <div class="prose prose-gray dark:prose-invert max-w-none">
        <!-- Header -->
        <div class="mb-8">
          <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">🛡️ Configurable Middleware System</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400">
            Convention over Configuration approach to middleware management with environment-driven settings and module-level overrides.
          </p>
        </div>

        <!-- Overview -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">📋 Overview</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Base Framework's configurable middleware system follows "Convention over Configuration" principles, providing sensible defaults that work out-of-the-box while allowing fine-grained control when needed. The system supports environment-based configuration, path-based rules, and module-level overrides.
          </p>

          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🎯 Key Benefits</h3>
              </template>
              <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <li>• <strong>Zero Configuration:</strong> Works immediately with sensible defaults</li>
                <li>• <strong>Environment Driven:</strong> Configure via environment variables</li>
                <li>• <strong>Path-Based Rules:</strong> Different middleware for different endpoints</li>
                <li>• <strong>Module Overrides:</strong> Modules can customize their middleware</li>
                <li>• <strong>Webhook Support:</strong> Special handling for third-party webhooks</li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">⚙️ Configuration Layers</h3>
              </template>
              <div class="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <div class="flex items-center justify-between">
                  <span>Module-specific overrides</span>
                  <span class="text-xs bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded">Highest</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Route-specific configuration</span>
                  <span class="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded">High</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Global environment settings</span>
                  <span class="text-xs bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded">Medium</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>Framework defaults</span>
                  <span class="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded">Lowest</span>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Environment Configuration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">🌍 Environment Configuration</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Configure middleware behavior through environment variables in your <code>.env</code> file. The system provides sensible defaults for immediate use.
          </p>

          <div class="space-y-6">
            <!-- Global Settings -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🌐 Global Middleware Settings</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Global middleware toggles
MIDDLEWARE_API_KEY_ENABLED=true
MIDDLEWARE_AUTH_ENABLED=false
MIDDLEWARE_RATE_LIMIT_ENABLED=true
MIDDLEWARE_LOGGING_ENABLED=true
MIDDLEWARE_RECOVERY_ENABLED=true
MIDDLEWARE_CORS_ENABLED=true</code></pre>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Security Middleware</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• <code>API_KEY_ENABLED</code>: Require X-Api-Key header</li>
                      <li>• <code>AUTH_ENABLED</code>: Require JWT/Bearer tokens</li>
                      <li>• <code>CORS_ENABLED</code>: Enable CORS headers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Performance & Monitoring</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• <code>RATE_LIMIT_ENABLED</code>: Enable request throttling</li>
                      <li>• <code>LOGGING_ENABLED</code>: Enable request logging</li>
                      <li>• <code>RECOVERY_ENABLED</code>: Enable panic recovery</li>
                    </ul>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Path-Based Rules -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🛤️ Path-Based Skip Rules</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Skip middleware for specific paths (comma-separated)
MIDDLEWARE_API_KEY_SKIP_PATHS=/health,/,/docs,/swagger
MIDDLEWARE_AUTH_SKIP_PATHS=/api/auth/login,/api/auth/register,/api/auth/forgot-password
MIDDLEWARE_RATE_LIMIT_SKIP_PATHS=/health,/
MIDDLEWARE_LOGGING_SKIP_PATHS=</code></pre>
                
                <UAlert color="blue" variant="soft">
                  <template #title>💡 Wildcard Support</template>
                  <template #description>
                    Use wildcards for path patterns: <code>/api/public/*</code> matches all public endpoints, <code>/webhooks/*</code> matches all webhook endpoints.
                  </template>
                </UAlert>
              </div>
            </UCard>

            <!-- Rate Limiting Configuration -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">⚡ Rate Limiting Configuration</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Rate limiting settings
MIDDLEWARE_RATE_LIMIT_REQUESTS=60
MIDDLEWARE_RATE_LIMIT_WINDOW=1m

# Webhook-specific rate limiting
MIDDLEWARE_WEBHOOK_RATE_LIMIT_REQUESTS=1000
MIDDLEWARE_WEBHOOK_RATE_LIMIT_WINDOW=1h</code></pre>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Standard API Endpoints</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• <strong>60 requests</strong> per minute (default)</li>
                      <li>• Applied to all API endpoints</li>
                      <li>• Based on client IP address</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Webhook Endpoints</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• <strong>1000 requests</strong> per hour (default)</li>
                      <li>• Higher limits for webhook traffic</li>
                      <li>• Prevents webhook spam/abuse</li>
                    </ul>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Webhook Configuration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">🎣 Webhook-Specific Configuration</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Webhooks from third-party services (Stripe, GitHub, PayPal) have different security requirements than regular API endpoints. The system provides special webhook handling.
          </p>

          <div class="space-y-6">
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🔧 Webhook Settings</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Webhook paths and security settings
MIDDLEWARE_WEBHOOK_PATHS=/api/webhooks/*,/webhooks/*
MIDDLEWARE_WEBHOOK_API_KEY_ENABLED=false
MIDDLEWARE_WEBHOOK_AUTH_ENABLED=false
MIDDLEWARE_WEBHOOK_SIGNATURE_ENABLED=true</code></pre>
                
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded border dark:border-blue-800">
                  <h4 class="font-medium text-blue-900 dark:text-blue-100 mb-2">🎯 Webhook Security Model</h4>
                  <ul class="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                    <li>• <strong>No API Key:</strong> Third parties don't have your internal API keys</li>
                    <li>• <strong>No Authentication:</strong> No JWT tokens from external services</li>
                    <li>• <strong>Signature Verification:</strong> HMAC-based webhook signatures</li>
                    <li>• <strong>Rate Limiting:</strong> Higher limits to handle webhook bursts</li>
                  </ul>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🔐 Webhook Signature Secrets</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Webhook signature verification secrets
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret
GITHUB_WEBHOOK_SECRET=your_github_webhook_secret
PAYPAL_WEBHOOK_SECRET=your_paypal_webhook_secret</code></pre>
                
                <UAlert color="amber" variant="soft">
                  <template #title>🔒 Security Note</template>
                  <template #description>
                    Always use environment variables for webhook secrets. Never hardcode secrets in your source code. Each webhook provider has a different signature format and verification process.
                  </template>
                </UAlert>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Module-Level Overrides -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">🧩 Module-Level Overrides</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Modules can override global middleware settings for their specific routes. This provides fine-grained control while maintaining global defaults.
          </p>

          <div class="space-y-6">
            <!-- Module Interface -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">📋 ConfigurableModule Interface</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-go">// Extend your module with middleware configuration
type ConfigurableModule interface {
    Module
    
    // Return middleware overrides for this module
    MiddlewareConfig() *MiddlewareOverrides
}</code></pre>
                
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Implement the <code>ConfigurableModule</code> interface to provide custom middleware settings for your module's routes.
                </p>
              </div>
            </UCard>

            <!-- Webhook Module Example -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🎣 Webhook Module Example</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-go">func (m *WebhooksModule) MiddlewareConfig() *module.MiddlewareOverrides {
    return &module.MiddlewareOverrides{
        PathRules: map[string]module.MiddlewareSettings{
            "/api/webhooks/stripe": {
                APIKey: module.DisableAPIKey().APIKey,
                Auth:   module.DisableAuth().Auth,
                WebhookSignature: module.WebhookSignature(
                    "stripe", "stripe-signature", "STRIPE_WEBHOOK_SECRET",
                ).WebhookSignature,
                RateLimit: module.CustomRateLimit(500, "1h").RateLimit,
            },
            "/api/webhooks/github": {
                APIKey: module.DisableAPIKey().APIKey,
                Auth:   module.DisableAuth().Auth,
                WebhookSignature: module.WebhookSignature(
                    "github", "x-hub-signature-256", "GITHUB_WEBHOOK_SECRET",
                ).WebhookSignature,
            },
        },
    }
}</code></pre>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Helper Functions</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• <code>DisableAPIKey()</code>: Skip API key requirement</li>
                      <li>• <code>DisableAuth()</code>: Skip authentication</li>
                      <li>• <code>CustomRateLimit()</code>: Custom rate limiting</li>
                      <li>• <code>WebhookSignature()</code>: Signature verification</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Override Behavior</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• <code>nil</code>: Use global setting</li>
                      <li>• <code>true</code>: Enable middleware</li>
                      <li>• <code>false</code>: Disable middleware</li>
                      <li>• <code>config</code>: Custom configuration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </UCard>

            <!-- Authentication Module Example -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🔐 Authentication Module Example</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-go">func (m *AuthModule) MiddlewareConfig() *module.MiddlewareOverrides {
    return &module.MiddlewareOverrides{
        PathRules: map[string]module.MiddlewareSettings{
            // Public auth endpoints - no API key or auth required
            "/api/auth/login":    module.DisableAuthAndAPIKey(),
            "/api/auth/register": module.DisableAuthAndAPIKey(),
            "/api/auth/forgot-password": module.DisableAuthAndAPIKey(),
            
            // Protected auth endpoints - require both API key and auth
            "/api/auth/profile":  module.RequireAuth(),
            "/api/auth/logout":   module.RequireAuth(),
        },
    }
}</code></pre>
                
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Authentication modules typically disable security for login/register endpoints while requiring it for protected operations.
                </p>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Advanced Configuration -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">⚙️ Advanced Configuration</h2>
          
          <div class="space-y-6">
            <!-- JSON Overrides -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">📝 JSON Configuration Overrides</h3>
              </template>
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  For complex routing rules, use JSON configuration in environment variables:
                </p>
                
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Complex middleware overrides (JSON format)
MIDDLEWARE_OVERRIDES={
  "api/admin/*": {
    "api_key": "required", 
    "auth": "required", 
    "rate_limit": "strict"
  },
  "api/public/*": {
    "api_key": "disabled", 
    "auth": "disabled"
  },
  "api/webhooks/*": {
    "api_key": "disabled", 
    "auth": "disabled", 
    "rate_limit": "relaxed"
  }
}</code></pre>
                
                <UAlert color="blue" variant="soft">
                  <template #title>💡 JSON vs Module Overrides</template>
                  <template #description>
                    Use JSON overrides for simple path-based rules. Use module overrides for complex logic, custom rate limiting, and webhook signature verification.
                  </template>
                </UAlert>
              </div>
            </UCard>

            <!-- Production Considerations -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🚀 Production Considerations</h3>
              </template>
              <div class="space-y-4">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-4 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Production middleware settings
MIDDLEWARE_API_KEY_ENABLED=true
MIDDLEWARE_AUTH_ENABLED=true
MIDDLEWARE_RATE_LIMIT_ENABLED=true
MIDDLEWARE_RATE_LIMIT_REQUESTS=100
MIDDLEWARE_RATE_LIMIT_WINDOW=1h
MIDDLEWARE_LOGGING_ENABLED=true
MIDDLEWARE_RECOVERY_ENABLED=true</code></pre>
                
                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Security Best Practices</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Enable API key validation in production</li>
                      <li>• Require authentication for sensitive endpoints</li>
                      <li>• Use stricter rate limiting</li>
                      <li>• Always enable recovery middleware</li>
                    </ul>
                  </div>
                  <div>
                    <h4 class="font-medium text-gray-900 dark:text-gray-100 mb-2">Performance Optimization</h4>
                    <ul class="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <li>• Disable logging for high-traffic endpoints</li>
                      <li>• Use appropriate rate limit windows</li>
                      <li>• Skip middleware for health checks</li>
                      <li>• Monitor middleware performance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Use Cases -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">🎯 Common Use Cases</h2>
          
          <div class="grid gap-6 md:grid-cols-1">
            <!-- API Gateway -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🌐 API Gateway Pattern</h3>
              </template>
              <div class="space-y-3">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># All endpoints require API key
MIDDLEWARE_API_KEY_ENABLED=true
MIDDLEWARE_API_KEY_SKIP=/health,/docs

# Auth required except for public endpoints
MIDDLEWARE_AUTH_ENABLED=true
MIDDLEWARE_AUTH_SKIP=/api/public/*,/api/auth/*</code></pre>
                <p class="text-sm text-gray-600 dark:text-gray-400">Secure all endpoints by default, with explicit exceptions for public routes.</p>
              </div>
            </UCard>

            <!-- Microservice -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🔧 Microservice Pattern</h3>
              </template>
              <div class="space-y-3">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Minimal middleware for internal services
MIDDLEWARE_API_KEY_ENABLED=false
MIDDLEWARE_AUTH_ENABLED=false
MIDDLEWARE_RATE_LIMIT_ENABLED=false
MIDDLEWARE_LOGGING_ENABLED=true</code></pre>
                <p class="text-sm text-gray-600 dark:text-gray-400">Lightweight configuration for internal microservices with just logging enabled.</p>
              </div>
            </UCard>

            <!-- Public API -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🌍 Public API Pattern</h3>
              </template>
              <div class="space-y-3">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Strict rate limiting for public APIs
MIDDLEWARE_RATE_LIMIT_ENABLED=true
MIDDLEWARE_RATE_LIMIT_REQUESTS=100
MIDDLEWARE_RATE_LIMIT_WINDOW=1h
MIDDLEWARE_API_KEY_ENABLED=true</code></pre>
                <p class="text-sm text-gray-600 dark:text-gray-400">Conservative rate limiting and API key requirements for public-facing APIs.</p>
              </div>
            </UCard>

            <!-- Development -->
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">🛠️ Development Pattern</h3>
              </template>
              <div class="space-y-3">
                <pre class="text-xs bg-gray-50 dark:bg-gray-800 p-3 rounded border dark:border-gray-700 overflow-x-auto"><code class="language-yml"># Relaxed settings for development
MIDDLEWARE_API_KEY_ENABLED=false
MIDDLEWARE_AUTH_ENABLED=false
MIDDLEWARE_RATE_LIMIT_ENABLED=false
MIDDLEWARE_LOGGING_ENABLED=true</code></pre>
                <p class="text-sm text-gray-600 dark:text-gray-400">Minimal restrictions during development with comprehensive logging for debugging.</p>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Migration Guide -->
        <section class="mb-12">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100">🔄 Migration Guide</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Migrating from manual middleware configuration to the configurable system is straightforward and backward compatible.
          </p>

          <div class="space-y-6">
            <UCard>
              <template #header>
                <h3 class="text-lg font-semibold">📋 Migration Steps</h3>
              </template>
              <div class="space-y-4">
                <div class="space-y-3">
                  <div class="flex items-start space-x-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center justify-center text-xs font-medium">1</span>
                    <div>
                      <h4 class="font-medium text-gray-900 dark:text-gray-100">Add Environment Configuration</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Add middleware configuration to your <code>.env</code> file using the examples above.</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center justify-center text-xs font-medium">2</span>
                    <div>
                      <h4 class="font-medium text-gray-900 dark:text-gray-100">Update main.go</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Replace manual middleware setup with <code>ApplyConfigurableMiddleware()</code> call.</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center justify-center text-xs font-medium">3</span>
                    <div>
                      <h4 class="font-medium text-gray-900 dark:text-gray-100">Implement Module Overrides</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Add <code>MiddlewareConfig()</code> method to modules that need custom middleware.</p>
                    </div>
                  </div>
                  
                  <div class="flex items-start space-x-3">
                    <span class="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full flex items-center justify-center text-xs font-medium">4</span>
                    <div>
                      <h4 class="font-medium text-gray-900 dark:text-gray-100">Test Configuration</h4>
                      <p class="text-sm text-gray-600 dark:text-gray-400">Verify middleware behavior matches your expectations across different endpoints.</p>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UAlert color="green" variant="soft">
              <template #title>✅ Backward Compatibility</template>
              <template #description>
                The configurable middleware system is fully backward compatible. Existing middleware configurations will continue to work while you gradually migrate to the new system.
              </template>
            </UAlert>
          </div>
        </section>
      </div>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
</script>
