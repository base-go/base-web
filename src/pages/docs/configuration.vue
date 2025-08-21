<template>
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Configuration</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Complete guide to configuring Base Framework with environment variables, security best practices, and deployment strategies.
          </p>
        </div>

        <!-- Quick Start -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1. Create Your Environment File</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code class="language-bash"># Copy the template
cp .env.sample .env

# Edit with your settings
vim .env</code></pre>
              </UCard>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2. Security Best Practices</h3>
              <UAlert 
                icon="i-heroicons-exclamation-triangle" 
                color="amber" 
                variant="soft"
                title="Important Security Notice"
                description="The .env file is not tracked by git for security reasons. This prevents accidentally committing sensitive configuration like passwords, API keys, and secrets."
              />
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3. Required vs Optional Settings</h3>
              <div class="grid md:grid-cols-2 gap-6">
                <UCard>
                  <template #header>
                    <h4 class="font-semibold text-green-600 dark:text-green-400">Required for Development</h4>
                  </template>
                  <ul class="space-y-2 text-sm">
                    <li><code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">SERVER_PORT</code> - Server port (default: 8100)</li>
                    <li><code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">ENV</code> - Environment mode (default: debug)</li>
                  </ul>
                </UCard>
                
                <UCard>
                  <template #header>
                    <h4 class="font-semibold text-blue-600 dark:text-blue-400">Optional but Recommended</h4>
                  </template>
                  <ul class="space-y-2 text-sm">
                    <li><code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">JWT_SECRET</code> - Change from default for security</li>
                    <li><code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">API_KEY</code> - Change from default for security</li>
                    <li><code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">DB_DRIVER</code> - Database type (default: sqlite)</li>
                  </ul>
                </UCard>
              </div>
            </div>
          </div>
        </section>

        <!-- Environment File Structure -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Environment File Structure</h2>
          
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <UCard>
              <template #header>
                <h3 class="font-semibold">.env (Your local configuration)</h3>
              </template>
              <ul class="space-y-2 text-sm">
                <li>✅ Contains your actual configuration values</li>
                <li>🚫 Not tracked by git (listed in .gitignore)</li>
                <li>🔒 Safe to include sensitive data like passwords and API keys</li>
                <li>📋 Created by copying .env.sample</li>
              </ul>
            </UCard>
            
            <UCard>
              <template #header>
                <h3 class="font-semibold">.env.sample (Template)</h3>
              </template>
              <ul class="space-y-2 text-sm">
                <li>📝 Template with example values</li>
                <li>✅ Tracked by git for team sharing</li>
                <li>📚 Contains documentation and examples</li>
                <li>🚫 Never contains real secrets</li>
              </ul>
            </UCard>
          </div>
        </section>

        <!-- Configuration Sections -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration Sections</h2>
          
          <div class="space-y-8">
            <!-- Application Settings -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Application Settings</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>APP_VERSION=1.0.0
ENV=debug                    # debug, development, production</code></pre>
              </UCard>
            </div>

            <!-- Server Configuration -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Server Configuration</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>SERVER_ADDRESS=localhost
SERVER_PORT=8100
APPHOST=http://localhost:8100
CORS_ALLOWED_ORIGINS=http://localhost:3000</code></pre>
              </UCard>
            </div>

            <!-- Feature Toggles -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Feature Toggles</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>SWAGGER_ENABLED=true         # Set to false in production
WS_ENABLED=true             # Enable WebSocket functionality</code></pre>
              </UCard>
              <p class="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Feature toggles allow you to enable/disable functionality based on your deployment needs.
              </p>
            </div>

            <!-- Security -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Security <span class="text-red-500">⚠️ Change in production!</span></h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>JWT_SECRET=change_me_in_production
API_KEY=change_me_in_production
SWAGGER_ENABLED=false
</code></pre>
              </UCard>
              <UAlert 
                icon="i-heroicons-shield-exclamation" 
                color="red" 
                variant="soft"
                title="Security Warning"
                description="Always use strong, unique secrets in production. Default values are for development only."
                class="mt-3"
              />
            </div>

            <!-- Database -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Database</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>DB_DRIVER=sqlite            # sqlite, mysql, postgres
DB_PATH=storage/base.db     # For SQLite

# For other databases:
# DB_HOST=localhost
# DB_PORT=3306
# DB_USER=username
# DB_PASSWORD=password
# DB_NAME=database_name</code></pre>
              </UCard>
            </div>

            <!-- Email -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Email</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>EMAIL_PROVIDER=smtp         # smtp, sendgrid, postmark
EMAIL_FROM_ADDRESS=noreply@yourdomain.com

# SMTP settings
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USERNAME=your_username
SMTP_PASSWORD=your_password</code></pre>
              </UCard>
            </div>

            <!-- Storage -->
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Storage</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>STORAGE_PROVIDER=local      # local, s3, r2
STORAGE_PATH=storage/uploads
STORAGE_MAX_SIZE=10485760   # 10MB in bytes
STORAGE_ALLOWED_EXT=.jpg,.jpeg,.png,.gif,.pdf</code></pre>
              </UCard>
            </div>
          </div>
        </section>

        <!-- Environment-Specific Examples -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Environment-Specific Examples</h2>
          
          <UTabs :items="[
            { key: 'development', label: 'Development' },
            { key: 'production', label: 'Production' },
            { key: 'testing', label: 'Testing' }
          ]" class="w-full">
            <template #development>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>ENV=debug
SWAGGER_ENABLED=true
WS_ENABLED=true
DB_DRIVER=sqlite
DB_PATH=storage/dev.db
LOG_LEVEL=debug
JWT_SECRET=dev_secret_not_for_production
API_KEY=dev_api_key</code></pre>
              </UCard>
            </template>
            
            <template #production>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>ENV=production
SWAGGER_ENABLED=false
WS_ENABLED=true
DB_DRIVER=postgres
DB_URL=postgres://user:pass@db:5432/app
LOG_LEVEL=warn
JWT_SECRET=super_secure_production_secret_256_bits
API_KEY=secure_production_api_key
STORAGE_PROVIDER=s3
STORAGE_BUCKET=production-assets</code></pre>
              </UCard>
            </template>
            
            <template #testing>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>ENV=testing
SWAGGER_ENABLED=false
WS_ENABLED=false
DB_DRIVER=sqlite
DB_PATH=storage/test.db
LOG_LEVEL=error</code></pre>
              </UCard>
            </template>
          </UTabs>
        </section>

        <!-- Validation and Troubleshooting -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Validation and Troubleshooting</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Automatic Validation</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                The framework automatically validates your configuration and provides helpful error messages:
              </p>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>config := config.NewConfig()
if errors := config.Validate(); len(errors) > 0 {
    for _, err := range errors {
        log.Printf("Configuration error: %v", err)
    }
}</code></pre>
              </UCard>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Common Issues</h3>
              <div class="space-y-4">
                <UCard>
                  <template #header>
                    <h4 class="font-semibold text-red-600 dark:text-red-400">Port already in use</h4>
                  </template>
                  <UCard class="bg-gray-50 dark:bg-gray-800">
                    <pre class="text-xs"><code># Change the port
SERVER_PORT=8101</code></pre>
                  </UCard>
                </UCard>

                <UCard>
                  <template #header>
                    <h4 class="font-semibold text-red-600 dark:text-red-400">Database connection failed</h4>
                  </template>
                  <UCard class="bg-gray-50 dark:bg-gray-800">
                    <pre class="text-xs"><code># For SQLite, ensure directory exists
mkdir -p storage

# For other databases, check connection settings
DB_HOST=localhost
DB_PORT=3306</code></pre>
                  </UCard>
                </UCard>

                <UCard>
                  <template #header>
                    <h4 class="font-semibold text-red-600 dark:text-red-400">Invalid boolean values</h4>
                  </template>
                  <div class="space-y-2 text-sm">
                    <p class="text-green-600 dark:text-green-400">✅ Correct:</p>
                    <UCard class="bg-gray-50 dark:bg-gray-800">
                      <pre class="text-xs"><code>SWAGGER_ENABLED=true
SWAGGER_ENABLED=false</code></pre>
                    </UCard>
                    <p class="text-red-600 dark:text-red-400">❌ Invalid (will use default):</p>
                    <UCard class="bg-gray-50 dark:bg-gray-800">
                      <pre class="text-xs"><code>SWAGGER_ENABLED=yes</code></pre>
                    </UCard>
                  </div>
                </UCard>
              </div>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Testing Configuration</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code># Test with specific settings
SWAGGER_ENABLED=false base start

# Test production-like settings
ENV=production SWAGGER_ENABLED=false LOG_LEVEL=warn base start</code></pre>
              </UCard>
            </div>
          </div>
        </section>

        <!-- Security Guidelines -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Security Guidelines</h2>
          
          <div class="grid md:grid-cols-2 gap-6">
            <UCard>
              <template #header>
                <h3 class="font-semibold text-green-600 dark:text-green-400">Development Security</h3>
              </template>
              <ul class="space-y-2 text-sm">
                <li>✅ Use default values for local development</li>
                <li>🔄 Rotate secrets regularly</li>
                <li>🚫 Don't share .env files between developers</li>
              </ul>
            </UCard>
            
            <UCard>
              <template #header>
                <h3 class="font-semibold text-red-600 dark:text-red-400">Production Security</h3>
              </template>
              <ul class="space-y-2 text-sm">
                <li>🔐 Use strong, unique secrets (256-bit minimum)</li>
                <li>🚫 Disable development features (<code class="text-xs">SWAGGER_ENABLED=false</code>)</li>
                <li>☁️ Use secure storage providers</li>
                <li>📊 Set appropriate log levels</li>
                <li>🔑 Use environment variables or secret management systems</li>
              </ul>
            </UCard>
          </div>

          <div class="mt-6">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Secret Management</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div>
                <p class="text-red-600 dark:text-red-400 text-sm font-semibold mb-2">❌ Bad - hardcoded in .env</p>
                <UCard class="bg-red-50 dark:bg-red-900/20">
                  <pre class="text-xs"><code>JWT_SECRET=mysecret123</code></pre>
                </UCard>
              </div>
              <div>
                <p class="text-green-600 dark:text-green-400 text-sm font-semibold mb-2">✅ Good - from environment/vault</p>
                <UCard class="bg-green-50 dark:bg-green-900/20">
                  <pre class="text-xs"><code>JWT_SECRET=${VAULT_JWT_SECRET}
JWT_SECRET=${K8S_SECRET_JWT}</code></pre>
                </UCard>
              </div>
            </div>
          </div>
        </section>

        <!-- Docker Integration -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Docker Integration</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Dockerfile</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code># Copy template but not actual .env
COPY .env.sample /app/.env.sample

# Set production defaults
ENV SWAGGER_ENABLED=false
ENV WS_ENABLED=true
ENV ENV=production</code></pre>
              </UCard>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Docker Compose</h3>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>services:
  base-app:
    image: base-framework
    environment:
      - SWAGGER_ENABLED=false
      - DB_URL=postgres://user:pass@db:5432/app
    env_file:
      - .env.production  # Separate production env file</code></pre>
              </UCard>
            </div>
          </div>
        </section>

        <!-- Git Best Practices -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Git Best Practices</h2>
          
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <UCard>
              <template #header>
                <h3 class="font-semibold text-green-600 dark:text-green-400">What's Tracked</h3>
              </template>
              <ul class="space-y-2 text-sm">
                <li>✅ <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.env.sample</code> - Template file</li>
                <li>✅ <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.gitignore</code> - Includes .env exclusion</li>
                <li>✅ Documentation files</li>
              </ul>
            </UCard>
            
            <UCard>
              <template #header>
                <h3 class="font-semibold text-red-600 dark:text-red-400">What's NOT Tracked</h3>
              </template>
              <ul class="space-y-2 text-sm">
                <li>❌ <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.env</code> - Your local configuration</li>
                <li>❌ <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.env.local</code> - Local overrides</li>
                <li>❌ <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.env.production</code> - Production secrets</li>
                <li>❌ <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">storage/base.db</code> - Local database</li>
              </ul>
            </UCard>
          </div>

          <div>
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Team Collaboration</h3>
            <div class="space-y-2 text-sm">
              <p><span class="font-semibold">1.</span> Update <code class="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">.env.sample</code> when adding new configuration options</p>
              <p><span class="font-semibold">2.</span> Document new settings in comments</p>
              <p><span class="font-semibold">3.</span> Notify team of new required environment variables</p>
              <p><span class="font-semibold">4.</span> Use defaults that work for most developers</p>
            </div>
          </div>
        </section>

        <!-- Migration Guide -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Migration from Old Configuration</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            If you have an existing .env file tracked by git:
          </p>
          
          <UCard class="bg-gray-50 dark:bg-gray-800">
            <pre class="text-sm"><code># Remove from git but keep local file
git rm --cached .env

# Add to gitignore (if not already there)
echo ".env" >> .gitignore

# Commit the removal
git add .gitignore
git commit -m "Remove .env from git tracking for security"

# Update team
echo "Team: Please copy .env.sample to .env and configure locally"</code></pre>
          </UCard>
        </section>

        <!-- Feature Control Examples -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Feature Control Examples</h2>
          
          <div class="space-y-4">
            <UCard>
              <template #header>
                <h3 class="font-semibold">Development (all features enabled)</h3>
              </template>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>SWAGGER_ENABLED=true WS_ENABLED=true base start</code></pre>
              </UCard>
            </UCard>

            <UCard>
              <template #header>
                <h3 class="font-semibold">Production (secure configuration)</h3>
              </template>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>ENV=production SWAGGER_ENABLED=false base start</code></pre>
              </UCard>
            </UCard>

            <UCard>
              <template #header>
                <h3 class="font-semibold">API-only deployment (minimal features)</h3>
              </template>
              <UCard class="bg-gray-50 dark:bg-gray-800">
                <pre class="text-sm"><code>SWAGGER_ENABLED=false WS_ENABLED=false base start</code></pre>
              </UCard>
            </UCard>
          </div>
        </section>

        <!-- Configuration Validation -->
        <section class="mb-12">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration Validation</h2>
          
          <p class="text-gray-600 dark:text-gray-400 mb-4">
            Base Framework includes comprehensive configuration validation with helpful error messages and security warnings.
          </p>
          
          <UCard class="bg-gray-50 dark:bg-gray-800 mb-4">
            <pre class="text-sm"><code>config := config.NewConfig()
if errors := config.Validate(); len(errors) > 0 {
    for _, err := range errors {
        log.Printf("Configuration error: %v", err)
    }
}</code></pre>
          </UCard>

          <div class="grid md:grid-cols-3 gap-4">
            <UCard>
              <template #header>
                <h4 class="font-semibold text-green-600 dark:text-green-400">Type Safety</h4>
              </template>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Automatic type conversion with fallback to safe defaults for invalid values.
              </p>
            </UCard>
            
            <UCard>
              <template #header>
                <h4 class="font-semibold text-blue-600 dark:text-blue-400">Security Checks</h4>
              </template>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Warns about insecure defaults in production environments.
              </p>
            </UCard>
            
            <UCard>
              <template #header>
                <h4 class="font-semibold text-purple-600 dark:text-purple-400">Helper Methods</h4>
              </template>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Convenient methods for common operations and environment checks.
              </p>
            </UCard>
          </div>
        </section>

        <!-- Footer -->
        <section>
          <UAlert 
            icon="i-heroicons-information-circle" 
            color="blue" 
            variant="soft"
            title="Need Help?"
            description="This guide ensures secure, consistent configuration management across all environments while maintaining the flexibility needed for different deployment scenarios."
          />
        </section>
      </div>
    </DocsLayout>
  </template>
  
  <script setup lang="ts">
  import DocsLayout from '@/layouts/DocsLayout.vue'
  </script>