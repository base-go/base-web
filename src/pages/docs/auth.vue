<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Authentication & Authorization</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Understand Base Framework's comprehensive authentication system with built-in OAuth, JWT tokens, and role-based access control.
        </p>
      </div>

      <div class="space-y-12">
        <!-- Core Authentication Modules -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Core Authentication Modules</h2>
          
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Base Framework comes with three built-in core modules that work together to provide complete authentication and authorization:
          </p>

          <div class="grid gap-6 md:grid-cols-3">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-user-check" class="h-5 w-5 text-blue-500" />
                  <span class="font-semibold">Authentication</span>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Located at <UKbd size="sm">core/app/authentication/</UKbd>
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• JWT token generation</li>
                  <li>• User login/logout</li>
                  <li>• Password hashing</li>
                  <li>• Token validation</li>
                  <li>• Session management</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-key" class="h-5 w-5 text-green-500" />
                  <span class="font-semibold">OAuth</span>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Located at <UKbd size="sm">core/app/oauth/</UKbd>
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Google OAuth integration</li>
                  <li>• GitHub OAuth support</li>
                  <li>• Facebook login</li>
                  <li>• Custom OAuth providers</li>
                  <li>• Social account linking</li>
                </ul>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield" class="h-5 w-5 text-purple-500" />
                  <span class="font-semibold">Authorization</span>
                </div>
              </template>
              
              <div class="space-y-3">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Located at <UKbd size="sm">core/app/authorization/</UKbd>
                </p>
                <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Role-based access control</li>
                  <li>• Permission management</li>
                  <li>• Route protection</li>
                  <li>• API key authentication</li>
                  <li>• Middleware integration</li>
                </ul>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Authentication Flow -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Authentication Flow</h2>
          
          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-flow-chart" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">JWT Authentication Process</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white">User Registration/Login</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300">POST to <UKbd size="sm">/api/auth/login</UKbd> or <UKbd size="sm">/api/auth/register</UKbd></p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white">Credential Validation</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Password verification using bcrypt hashing</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white">JWT Token Generation</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Signed JWT with user ID, extended data, and expiration</p>
                  </div>
                </div>
                
                <div class="flex items-start space-x-3">
                  <div class="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs font-bold">4</div>
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white">Token Storage</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300">Client stores token in localStorage or httpOnly cookie</p>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-api" class="h-4 w-4 text-green-500" />
                  <span class="font-semibold">API Authentication Example</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Login Request</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">cURL Example</span>
                      <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`curl -X POST http://localhost:8100/api/auth/login \\
  -H &quot;Content-Type: application/json&quot; \\
  -d '{
    &quot;email&quot;: &quot;user@example.com&quot;,
    &quot;password&quot;: &quot;securepassword&quot;
  }'`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">curl</span> -X POST http://localhost:8100/api/auth/login \\
  -H <span class="text-green-400">"Content-Type: application/json"</span> \\
  -d <span class="text-yellow-400">'{
    "email": "user@example.com",
    "password": "securepassword"
  }'</span></code></pre>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Response with Role Information</h5>
                  <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                    <pre class="text-sm text-gray-700 dark:text-gray-300"><code class="language-json">{
  "id": 1,
  "first_name": "John",
  "last_name": "Doe",
  "username": "johndoe",
  "phone": "+1234567890",
  "email": "john@example.com",
  "role_id": 1,
  "role_name": "Owner",
  "avatar_url": "",
  "last_login": "2025-09-02T15:44:05+02:00",
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "exp": 1756908308,
  "extend": {
    "role": {
      "id": 1,
      "name": "Owner"
    },
    "user_id": 1
  }
}</code></pre>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Authenticated API Call</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Using JWT Token</span>
                      <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`curl -X GET http://localhost:8100/api/posts \\
  -H &quot;Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&quot;`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">curl</span> -X GET http://localhost:8100/api/posts \\
  -H <span class="text-green-400">"Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span></code></pre>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- OAuth Integration -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">OAuth Integration</h2>
          
          <div class="space-y-6">
            <UAlert 
              color="blue" 
              variant="soft" 
              title="Social Login Support" 
              description="Base Framework's OAuth module supports multiple providers out of the box with automatic account linking and profile synchronization."
            />

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-users" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Supported OAuth Providers</span>
                </div>
              </template>
              
              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-chrome" class="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 dark:text-white">Google OAuth</h5>
                      <p class="text-sm text-gray-600 dark:text-gray-300">GET <UKbd size="sm">/api/oauth/google</UKbd></p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-github" class="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 dark:text-white">GitHub OAuth</h5>
                      <p class="text-sm text-gray-600 dark:text-gray-300">GET <UKbd size="sm">/api/oauth/github</UKbd></p>
                    </div>
                  </div>
                </div>

                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-facebook" class="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 dark:text-white">Facebook OAuth</h5>
                      <p class="text-sm text-gray-600 dark:text-gray-300">GET <UKbd size="sm">/api/oauth/facebook</UKbd></p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-plus" class="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h5 class="font-medium text-gray-900 dark:text-white">Custom Provider</h5>
                      <p class="text-sm text-gray-600 dark:text-gray-300">Easily add new providers</p>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-settings" class="h-4 w-4 text-purple-500" />
                  <span class="font-semibold">OAuth Configuration</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Configure OAuth providers in your <UKbd size="sm">.env</UKbd> file:
                </p>
                
                <div class="relative bg-gray-50 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-500">.env Configuration</span>
                    <button class="copy-button text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded border border-gray-300 hover:border-gray-400 transition-colors" @click="copyToClipboard(`# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=http://localhost:8100/api/oauth/google/callback

# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_REDIRECT_URL=http://localhost:8100/api/oauth/github/callback`, $event)">
                      Copy
                    </button>
                  </div>
                  <pre class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap"><code><span class="text-green-600"># Google OAuth</span>
<span class="text-blue-600">GOOGLE_CLIENT_ID</span>=your_google_client_id
<span class="text-blue-600">GOOGLE_CLIENT_SECRET</span>=your_google_client_secret
<span class="text-blue-600">GOOGLE_REDIRECT_URL</span>=http://localhost:8100/api/oauth/google/callback

<span class="text-green-600"># GitHub OAuth</span>
<span class="text-blue-600">GITHUB_CLIENT_ID</span>=your_github_client_id
<span class="text-blue-600">GITHUB_CLIENT_SECRET</span>=your_github_client_secret
<span class="text-blue-600">GITHUB_REDIRECT_URL</span>=http://localhost:8100/api/oauth/github/callback</code></pre>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Authorization & Permissions -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Authorization & Permissions</h2>
          
          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-crown" class="h-4 w-4 text-yellow-500" />
                  <span class="font-semibold">First User Owner System</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Base Framework automatically assigns the <strong>Owner</strong> role to the first user who registers, ensuring secure system initialization without manual intervention:
                </p>

                <div class="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <h5 class="font-medium text-yellow-900 dark:text-yellow-100 mb-2">👑 Automatic Role Assignment</h5>
                  <div class="grid gap-3 md:grid-cols-2 text-sm">
                    <div>
                      <strong class="text-yellow-900 dark:text-yellow-100">First User</strong>
                      <ul class="text-yellow-800 dark:text-yellow-200 mt-1 space-y-1">
                        <li>• Automatically receives <strong>Owner</strong> role</li>
                        <li>• Full system access and control</li>
                        <li>• Can manage all users and permissions</li>
                        <li>• No manual role assignment needed</li>
                      </ul>
                    </div>
                    <div>
                      <strong class="text-yellow-900 dark:text-yellow-100">Subsequent Users</strong>
                      <ul class="text-yellow-800 dark:text-yellow-200 mt-1 space-y-1">
                        <li>• Automatically receive <strong>Member</strong> role</li>
                        <li>• Standard limited access</li>
                        <li>• Can be promoted by Owner/Administrator</li>
                        <li>• Secure default permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-users" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Role Hierarchy</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Base Framework uses a hierarchical role system with four default roles, each with specific permissions and access levels:
                </p>

                <div class="space-y-3">
                  <div class="flex items-center space-x-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div class="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-crown" class="h-4 w-4 text-white" />
                    </div>
                    <div class="flex-1">
                      <h5 class="font-medium text-yellow-900 dark:text-yellow-100">Owner (Role ID: 1)</h5>
                      <p class="text-sm text-yellow-800 dark:text-yellow-200">Full system access • Manage all users • System configuration</p>
                    </div>
                    <UBadge color="yellow" variant="soft">First User</UBadge>
                  </div>

                  <div class="flex items-center space-x-3 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                    <div class="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-shield" class="h-4 w-4 text-white" />
                    </div>
                    <div class="flex-1">
                      <h5 class="font-medium text-red-900 dark:text-red-100">Administrator (Role ID: 2)</h5>
                      <p class="text-sm text-red-800 dark:text-red-200">Administrative access • User management • Most operations</p>
                    </div>
                  </div>

                  <div class="flex items-center space-x-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div class="w-8 h-8 bg-green-500 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-user" class="h-4 w-4 text-white" />
                    </div>
                    <div class="flex-1">
                      <h5 class="font-medium text-green-900 dark:text-green-100">Member (Role ID: 3)</h5>
                      <p class="text-sm text-green-800 dark:text-green-200">Standard access • Limited permissions • Default for new users</p>
                    </div>
                    <UBadge color="green" variant="soft">Default</UBadge>
                  </div>

                  <div class="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div class="w-8 h-8 bg-gray-500 rounded flex items-center justify-center">
                      <UIcon name="i-lucide-eye" class="h-4 w-4 text-white" />
                    </div>
                    <div class="flex-1">
                      <h5 class="font-medium text-gray-900 dark:text-gray-100">Viewer (Role ID: 4)</h5>
                      <p class="text-sm text-gray-600 dark:text-gray-300">Read-only access • View permissions only</p>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield-check" class="h-4 w-4 text-green-500" />
                  <span class="font-semibold">Role-Based Access Control (RBAC)</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Base Framework includes a flexible RBAC system that allows you to define roles and permissions for your application:
                </p>

                <div class="grid gap-4 md:grid-cols-3">
                  <div class="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h5 class="font-medium text-blue-900 dark:text-blue-100 mb-2">👤 Users</h5>
                    <p class="text-sm text-blue-800 dark:text-blue-200">Assigned one or more roles</p>
                  </div>

                  <div class="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h5 class="font-medium text-green-900 dark:text-green-100 mb-2">🎭 Roles</h5>
                    <p class="text-sm text-green-800 dark:text-green-200">Collections of permissions</p>
                  </div>

                  <div class="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h5 class="font-medium text-purple-900 dark:text-purple-100 mb-2">🔐 Permissions</h5>
                    <p class="text-sm text-purple-800 dark:text-purple-200">Specific access rights</p>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-route" class="h-4 w-4 text-orange-500" />
                  <span class="font-semibold">Route Protection</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Protect your API endpoints using middleware decorators:
                </p>

                <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">Go Code Example</span>
                    <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Require authentication (basic auth middleware)
router.GET(&quot;/api/protected&quot;, controller.ProtectedEndpoint, authMiddleware)

// Require specific role
router.POST(&quot;/api/admin&quot;, controller.AdminEndpoint, authorization.HasRole(&quot;Administrator&quot;))

// Require specific permission  
router.DELETE(&quot;/api/posts/:id&quot;, controller.DeletePost, authorization.CanAccess(&quot;delete&quot;, &quot;Post&quot;, &quot;id&quot;))

// Multiple middleware combined
router.PUT(&quot;/api/posts/:id&quot;, controller.UpdatePost, 
  authMiddleware, 
  authorization.CanAccess(&quot;update&quot;, &quot;Post&quot;, &quot;id&quot;))`, $event)">
                      Copy
                    </button>
                  </div>
                  <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Require authentication (basic auth middleware)</span>
router.GET(<span class="text-yellow-400">"/api/protected"</span>, controller.ProtectedEndpoint, <span class="text-blue-400">authMiddleware</span>)

<span class="text-green-400">// Require specific role</span>
router.POST(<span class="text-yellow-400">"/api/admin"</span>, controller.AdminEndpoint, <span class="text-purple-400">authorization.HasRole("Administrator")</span>)

<span class="text-green-400">// Require specific permission</span>  
router.DELETE(<span class="text-yellow-400">"/api/posts/:id"</span>, controller.DeletePost, <span class="text-purple-400">authorization.CanAccess("delete", "Post", "id")</span>)

<span class="text-green-400">// Multiple middleware combined</span>
router.PUT(<span class="text-yellow-400">"/api/posts/:id"</span>, controller.UpdatePost, 
  <span class="text-blue-400">authMiddleware</span>, 
  <span class="text-purple-400">authorization.CanAccess("update", "Post", "id")</span>)</code></pre>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-key-round" class="h-4 w-4 text-red-500" />
                  <span class="font-semibold">API Key Authentication</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Base Framework supports multiple authentication methods. <strong>Bearer tokens (JWT) are the default for all generated modules</strong>, while API keys provide additional flexibility for service-to-service communication:
                </p>

                <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <h5 class="font-medium text-blue-900 dark:text-blue-100 mb-2">🔑 Authentication Methods in Base Framework</h5>
                  <div class="grid gap-3 md:grid-cols-2 text-sm">
                    <div>
                      <strong class="text-blue-900 dark:text-blue-100">Bearer Token (JWT) - Default</strong>
                      <ul class="text-blue-800 dark:text-blue-200 mt-1 space-y-1">
                        <li>• Header: <code>Authorization: Bearer token</code></li>
                        <li>• <strong>Default auth for generated modules</strong></li>
                        <li>• User sessions, temporary access</li>
                        <li>• Expires automatically</li>
                        <li>• Contains user context</li>
                      </ul>
                    </div>
                    <div>
                      <strong class="text-blue-900 dark:text-blue-100">API Key - Environment Variable</strong>
                      <ul class="text-blue-800 dark:text-blue-200 mt-1 space-y-1">
                        <li>• Header: <code>X-API-Key: key</code></li>
                        <li>• <strong>Set via environment variable</strong></li>
                        <li>• Required for auth management operations</li>
                        <li>• Service-to-service communication</li>
                        <li>• Application-level access control</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">Configure API Key</h5>
                    <div class="relative bg-gray-50 dark:bg-gray-800 rounded-lg p-3 overflow-x-auto">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-500">.env Configuration</span>
                        <button class="copy-button text-xs text-gray-500 hover:text-gray-700 px-2 py-1 rounded border border-gray-300 hover:border-gray-400 transition-colors" @click="copyToClipboard(`# JWT secret key
JWT_SECRET=my_super_secret_key_123

# Send this key in the header of the request for endpoints that require it
API_KEY=api`, $event)">
                          Copy
                        </button>
                      </div>
                      <pre class="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-wrap"><code><span class="text-green-600"># JWT secret key</span>
<span class="text-blue-600">JWT_SECRET</span>=my_super_secret_key_123

<span class="text-green-600"># Send this key in the header of the request for endpoints that require it</span>
<span class="text-blue-600">API_KEY</span>=api</code></pre>
                    </div>
                  </div>

                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">Use API Key in Requests</h5>
                    <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">X-API-Key Header</span>
                        <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`curl -X GET http://localhost:8100/api/posts \\
  -H &quot;X-API-Key: api&quot;`, $event)">
                          Copy
                        </button>
                      </div>
                      <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">curl</span> -X GET http://localhost:8100/api/posts \\
  -H <span class="text-green-400">"X-API-Key: api"</span></code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Extended Authentication -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Extended Authentication</h2>
          
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Base Framework supports extending JWT tokens with custom data through the <UKbd size="sm">app.Extend()</UKbd> function. This allows you to include additional context like company IDs, roles, or any other data in both the authentication response and JWT token payload.
          </p>

          <div class="grid gap-6 lg:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-code" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">app.Extend() Function</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Located at <UKbd size="sm">app/init.go</UKbd>, this function is called during authentication to extend the user context with additional data. <strong>You must customize this function in your app to add extended data.</strong>
                </p>

                <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">app/init.go</span>
                    <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func Extend(user_id uint) any {
    // Get database instance
    if database.DB == nil {
        return map[string]any{
            &quot;user_id&quot;: user_id,
        }
    }

    // Example: Add company_id to the context
    return map[string]any{
        &quot;user_id&quot;:    user_id,
        &quot;company_id&quot;: 1,
    }
}`, $event)">
                      Copy
                    </button>
                  </div>
                  <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> <span class="text-yellow-400">Extend</span>(user_id <span class="text-green-400">uint</span>) <span class="text-green-400">any</span> {
    <span class="text-gray-500">// Get database instance</span>
    <span class="text-blue-400">if</span> database.DB == <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-green-400">map</span>[<span class="text-green-400">string</span>]<span class="text-green-400">any</span>{
            <span class="text-red-400">"user_id"</span>: user_id,
        }
    }

    <span class="text-gray-500">// Example: Add company_id to the context</span>
    <span class="text-blue-400">return</span> <span class="text-green-400">map</span>[<span class="text-green-400">string</span>]<span class="text-green-400">any</span>{
        <span class="text-red-400">"user_id"</span>:    user_id,
        <span class="text-red-400">"company_id"</span>: <span class="text-purple-400">1</span>,
    }
}</code></pre>
                </div>

                <div class="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p class="text-sm text-red-800 dark:text-red-200">
                    <strong>⚠️ Important:</strong> You must modify the <UKbd size="xs">app.Extend()</UKbd> function in <UKbd size="xs">base/app/init.go</UKbd> to add your custom extended data. The default implementation only returns the user_id.
                  </p>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-key" class="h-4 w-4 text-green-500" />
                  <span class="font-semibold">Enhanced Login Response</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  When <UKbd size="sm">app.Extend()</UKbd> returns data, it's included in both the login response and embedded in the JWT token payload.
                </p>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Login Request</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">POST /api/auth/login</span>
                      <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`curl -X 'POST' \\
  'http://localhost:8100/api/auth/login' \\
  -H 'accept: application/json' \\
  -H 'X-Api-Key: api' \\
  -H 'Content-Type: application/json' \\
  -d '{
    &quot;email&quot;: &quot;john@example.com&quot;,
    &quot;password&quot;: &quot;password123&quot;
  }'`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">curl</span> -X <span class="text-green-400">'POST'</span> \\
  <span class="text-green-400">'http://localhost:8100/api/auth/login'</span> \\
  -H <span class="text-green-400">'accept: application/json'</span> \\
  -H <span class="text-green-400">'X-Api-Key: api'</span> \\
  -H <span class="text-green-400">'Content-Type: application/json'</span> \\
  -d <span class="text-green-400">'{
    "email": "john@example.com",
    "password": "password123"
  }'</span></code></pre>
                  </div>
                </div>

                <div>
                  <h5 class="font-medium text-gray-900 dark:text-white mb-2">Enhanced Response</h5>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Response with Extended Data</span>
                      <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`{
  &quot;id&quot;: 1,
  &quot;first_name&quot;: &quot;John&quot;,
  &quot;last_name&quot;: &quot;Doe&quot;,
  &quot;username&quot;: &quot;johndoe&quot;,
  &quot;phone&quot;: &quot;+1234567890&quot;,
  &quot;email&quot;: &quot;john@example.com&quot;,
  &quot;avatar_url&quot;: &quot;&quot;,
  &quot;last_login&quot;: &quot;2025-09-02T15:42:51+02:00&quot;,
  &quot;accessToken&quot;: &quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...&quot;,
  &quot;exp&quot;: 1756907010,
  &quot;extend&quot;: {
    &quot;company_id&quot;: 1,
    &quot;user_id&quot;: 1
  }
}`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code>{
  <span class="text-red-400">"id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-red-400">"first_name"</span>: <span class="text-green-400">"John"</span>,
  <span class="text-red-400">"last_name"</span>: <span class="text-green-400">"Doe"</span>,
  <span class="text-red-400">"username"</span>: <span class="text-green-400">"johndoe"</span>,
  <span class="text-red-400">"phone"</span>: <span class="text-green-400">"+1234567890"</span>,
  <span class="text-red-400">"email"</span>: <span class="text-green-400">"john@example.com"</span>,
  <span class="text-red-400">"avatar_url"</span>: <span class="text-green-400">""</span>,
  <span class="text-red-400">"last_login"</span>: <span class="text-green-400">"2025-09-02T15:42:51+02:00"</span>,
  <span class="text-red-400">"accessToken"</span>: <span class="text-green-400">"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."</span>,
  <span class="text-red-400">"exp"</span>: <span class="text-purple-400">1756907010</span>,
  <span class="text-red-400">"extend"</span>: {
    <span class="text-red-400">"company_id"</span>: <span class="text-purple-400">1</span>,
    <span class="text-red-400">"user_id"</span>: <span class="text-purple-400">1</span>
  }
}</code></pre>
                  </div>
                </div>
              </div>
            </UCard>
          </div>

          <div class="mt-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield-check" class="h-4 w-4 text-purple-500" />
                  <span class="font-semibold">JWT Token Structure</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The JWT token payload includes the extended data, making it available for authorization checks and middleware without additional database queries.
                </p>

                <div class="grid gap-4 md:grid-cols-2">
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">JWT Payload Structure</h5>
                    <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">Decoded JWT Payload</span>
                        <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`{
  &quot;exp&quot;: 1756907010,
  &quot;extend&quot;: {
    &quot;company_id&quot;: 1,
    &quot;user_id&quot;: 1
  },
  &quot;user_id&quot;: 1
}`, $event)">
                          Copy
                        </button>
                      </div>
                      <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code>{
  <span class="text-red-400">"exp"</span>: <span class="text-purple-400">1756907010</span>,
  <span class="text-red-400">"extend"</span>: {
    <span class="text-red-400">"company_id"</span>: <span class="text-purple-400">1</span>,
    <span class="text-red-400">"user_id"</span>: <span class="text-purple-400">1</span>
  },
  <span class="text-red-400">"user_id"</span>: <span class="text-purple-400">1</span>
}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">Common Use Cases</h5>
                    <div class="space-y-3">
                      <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                        <h6 class="font-medium text-blue-900 dark:text-blue-100 text-sm mb-1">Multi-tenant Applications</h6>
                        <p class="text-xs text-blue-800 dark:text-blue-200">Include company_id or tenant_id for data isolation</p>
                      </div>
                      <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                        <h6 class="font-medium text-green-900 dark:text-green-100 text-sm mb-1">Role-based Access</h6>
                        <p class="text-xs text-green-800 dark:text-green-200">Embed user roles and permissions in the token</p>
                      </div>
                      <div class="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                        <h6 class="font-medium text-purple-900 dark:text-purple-100 text-sm mb-1">Context Data</h6>
                        <p class="text-xs text-purple-800 dark:text-purple-200">Include any additional context your app needs</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <h5 class="font-medium text-green-900 dark:text-green-100 mb-2">🚀 Benefits</h5>
                  <ul class="text-sm text-green-800 dark:text-green-200 space-y-1">
                    <li>• <strong>Reduced Database Queries:</strong> Context data is embedded in the JWT token</li>
                    <li>• <strong>Consistent Data:</strong> Same extended data available in both response and token</li>
                    <li>• <strong>Flexible Implementation:</strong> Customize the Extend function for your specific needs</li>
                    <li>• <strong>Middleware Ready:</strong> Extended data is available in authorization middleware</li>
                  </ul>
                </div>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Security Features -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Security Features</h2>
          
          <div class="grid gap-6 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-lock" class="h-4 w-4 text-red-500" />
                  <span class="font-semibold">Password Security</span>
                </div>
              </template>
              
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>bcrypt hashing with salt rounds</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Password strength validation</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Password reset flows</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Account lockout protection</span>
                </li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-timer" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Token Management</span>
                </div>
              </template>
              
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>JWT with configurable expiration</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Refresh token rotation</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Token blacklisting</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Session management</span>
                </li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield-alert" class="h-4 w-4 text-orange-500" />
                  <span class="font-semibold">Rate Limiting</span>
                </div>
              </template>
              
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>IP-based rate limiting</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>User-based rate limiting</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Endpoint-specific limits</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Sliding window algorithm</span>
                </li>
              </ul>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-activity" class="h-4 w-4 text-purple-500" />
                  <span class="font-semibold">Audit & Monitoring</span>
                </div>
              </template>
              
              <ul class="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Login attempt logging</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Permission change tracking</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Failed authentication alerts</span>
                </li>
                <li class="flex items-center space-x-2">
                  <UIcon name="i-lucide-check" class="h-4 w-4 text-green-500" />
                  <span>Security event notifications</span>
                </li>
              </ul>
            </UCard>
          </div>
        </section>

        <!-- Context Helpers & Retrieving User -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Context Helpers &amp; Retrieving the Authenticated User</h2>
          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-user-circle" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Using the Request Context</span>
                </div>
              </template>

              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  After successful authentication, the middleware saves the user object in the request <code>context.Context</code> using a type-safe key. Retrieve it anywhere deeper in your application with the helper below:
                </p>

                <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">Go Example</span>
                    <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Inside a handler or service\nif user, ok := middleware.UserFromContext[*models.User](c.Request.Context()); ok {\n    // user is *models.User\n}`, $event)">
                      Copy
                    </button>
                  </div>
                  <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Inside a handler or service</span>
if <span class="text-blue-400">user</span>, <span class="text-blue-400">ok</span> := middleware.<span class="text-yellow-400">UserFromContext[*models.User]</span>(c.Request.Context()); ok {
    <span class="text-green-400">// user is *models.User</span>
}</code></pre>
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The same approach works for API-key data (<code>api_key_data</code>) or any other custom values you attach to the context.
                </p>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Custom Context Values -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Attaching Custom Values to Context</h2>
          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-package" class="h-4 w-4 text-green-500" />
                  <span class="font-semibold">Adding Your Own Context Keys</span>
                </div>
              </template>

              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Need to pass request-scoped data (e.g. <code>project_id</code>) deeper into your services? Define a unique pointer key and use <code>context.WithValue</code> just like the built-in auth middleware:
                </p>

                <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">Go Example</span>
                    <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type ctxKey struct{ name string }\nvar projectIDKey = &ctxKey{&quot;project_id&quot;}\n\n// Middleware that stores project_id from route params\nfunc ProjectIDMiddleware(next router.HandlerFunc) router.HandlerFunc {\n    return func(c *router.Context) error {\n        id := c.Param(&quot;project_id&quot;)\n        ctx := context.WithValue(c.Request.Context(), projectIDKey, id)\n        c.Request = c.Request.WithContext(ctx)\n        return next(c)\n    }\n}\n\n// Helper to retrieve it later\nfunc ProjectIDFromContext(ctx context.Context) (string, bool) {\n    v, ok := ctx.Value(projectIDKey).(string)\n    return v, ok\n}`, $event)">
                      Copy
                    </button>
                  </div>
                  <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> ctxKey <span class="text-blue-400">struct</span>{ name <span class="text-blue-400">string</span> }
<span class="text-blue-400">var</span> projectIDKey = &amp;ctxKey{<span class="text-yellow-400">"project_id"</span>}

<span class="text-green-400">// Middleware that stores project_id from route params</span>
<span class="text-blue-400">func</span> ProjectIDMiddleware(next router.HandlerFunc) router.HandlerFunc {
    <span class="text-blue-400">return</span> <span class="text-blue-400">func</span>(c *router.Context) <span class="text-blue-400">error</span> {
        id := c.Param(<span class="text-yellow-400">"project_id"</span>)
        ctx := context.WithValue(c.Request.Context(), projectIDKey, id)
        c.Request = c.Request.WithContext(ctx)
        <span class="text-blue-400">return</span> next(c)
    }
}

<span class="text-green-400">// Helper to retrieve it later</span>
<span class="text-blue-400">func</span> ProjectIDFromContext(ctx context.Context) (<span class="text-blue-400">string</span>, <span class="text-blue-400">bool</span>) {
    v, ok := ctx.Value(projectIDKey).(<span class="text-blue-400">string</span>)
    <span class="text-blue-400">return</span> v, ok
}</code></pre>
                </div>

                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Remember: context values should be used <em>sparingly</em> for data that needs to travel across API boundaries. For regular function parameters prefer explicit arguments.
                </p>
              </div>
            </UCard>
          </div>
        </section>

        <!-- Authorization System -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Authorization System</h2>
          
          <div class="space-y-6">
            <UAlert 
              color="purple" 
              variant="soft" 
              title="🔐 Comprehensive RBAC System" 
              description="Base Framework's authorization module provides a complete role-based access control system with fine-grained permissions, middleware protection, and frontend integration."
            />

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-database" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Authorization Models</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The authorization system consists of four main data models that work together:
                </p>

                <div class="grid gap-4 md:grid-cols-2">
                  <div class="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <h5 class="font-medium text-blue-900 dark:text-blue-100 mb-2 flex items-center">
                      <UIcon name="i-lucide-user-cog" class="h-4 w-4 mr-2" />
                      Roles
                    </h5>
                    <p class="text-sm text-blue-800 dark:text-blue-200 mb-3">System and custom roles with hierarchical permissions</p>
                    <div class="text-xs text-blue-700 dark:text-blue-300 space-y-1">
                      <div>• <strong>Owner</strong> - Full system access</div>
                      <div>• <strong>Administrator</strong> - Admin privileges</div>
                      <div>• <strong>Member</strong> - Standard user access</div>
                      <div>• <strong>External</strong> - Limited external access</div>
                    </div>
                  </div>

                  <div class="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <h5 class="font-medium text-green-900 dark:text-green-100 mb-2 flex items-center">
                      <UIcon name="i-lucide-key" class="h-4 w-4 mr-2" />
                      Permissions
                    </h5>
                    <p class="text-sm text-green-800 dark:text-green-200 mb-3">Specific action rights on resource types</p>
                    <div class="text-xs text-green-700 dark:text-green-300 space-y-1">
                      <div>• <strong>Actions:</strong> create, read, update, delete, list</div>
                      <div>• <strong>Resources:</strong> posts, users, projects, etc.</div>
                    </div>
                  </div>

                  <div class="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                    <h5 class="font-medium text-purple-900 dark:text-purple-100 mb-2 flex items-center">
                      <UIcon name="i-lucide-link" class="h-4 w-4 mr-2" />
                      Role Permissions
                    </h5>
                    <p class="text-sm text-purple-800 dark:text-purple-200 mb-3">Links roles to their allowed permissions</p>
                    <div class="text-xs text-purple-700 dark:text-purple-300">
                      <div>Many-to-many relationship mapping roles to specific permissions</div>
                    </div>
                  </div>

                  <div class="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                    <h5 class="font-medium text-orange-900 dark:text-orange-100 mb-2 flex items-center">
                      <UIcon name="i-lucide-file-lock" class="h-4 w-4 mr-2" />
                      Resource Permissions
                    </h5>
                    <p class="text-sm text-orange-800 dark:text-orange-200 mb-3">Fine-grained access to specific resources</p>
                    <div class="text-xs text-orange-700 dark:text-orange-300 space-y-1">
                      <div>• <strong>Scopes:</strong> own, team, all</div>
                      <div>• Resource-specific overrides</div>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-shield-check" class="h-4 w-4 text-green-500" />
                  <span class="font-semibold">Authorization Middleware in Controllers</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Base Framework provides intuitive authorization middleware functions with clean, readable syntax:
                </p>

                <div class="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                  <h5 class="font-medium text-green-900 dark:text-green-100 mb-2 flex items-center">
                    <UIcon name="i-lucide-sparkles" class="h-4 w-4 mr-2" />
                    ✨ New Intuitive Syntax
                  </h5>
                  <p class="text-sm text-green-800 dark:text-green-200 mb-3">
                    Use the new <UKbd size="sm">Can()</UKbd> functions for clear, readable authorization checks:
                  </p>
                  <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                    <div class="flex items-center justify-between mb-2">
                      <span class="text-xs text-gray-400">Clean Authorization Syntax</span>
                      <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`import &quot;authorization&quot;

func (c *PostController) Routes(router *router.RouterGroup) {
  // ✨ Clean, readable authorization
  router.POST(&quot;/posts&quot;, c.Create, authorization.Can(&quot;create&quot;, &quot;Post&quot;))
  router.GET(&quot;/posts&quot;, c.List, authorization.Can(&quot;list&quot;, &quot;Post&quot;))
  router.PUT(&quot;/posts/:id&quot;, c.Update, authorization.CanAccess(&quot;update&quot;, &quot;Post&quot;, &quot;id&quot;))
  router.DELETE(&quot;/posts/:id&quot;, c.Delete, authorization.CanAccess(&quot;delete&quot;, &quot;Post&quot;, &quot;id&quot;))
  
  // Role-based protection
  adminGroup := router.Group(&quot;/admin&quot;, authorization.HasRole(&quot;Administrator&quot;))
  ownerGroup := router.Group(&quot;/owner&quot;, authorization.HasRole(&quot;Owner&quot;))
}`, $event)">
                        Copy
                      </button>
                    </div>
                    <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">import</span> <span class="text-green-400">"authorization"</span>

<span class="text-blue-400">func</span> (c *PostController) <span class="text-yellow-400">Routes</span>(router *router.RouterGroup) {
  <span class="text-green-400">// ✨ Clean, readable authorization</span>
  router.POST(<span class="text-red-400">"/posts"</span>, c.Create, <span class="text-purple-400">authorization.Can("create", "Post")</span>)
  router.GET(<span class="text-red-400">"/posts"</span>, c.List, <span class="text-purple-400">authorization.Can("list", "Post")</span>)
  router.PUT(<span class="text-red-400">"/posts/:id"</span>, c.Update, <span class="text-purple-400">authorization.CanAccess("update", "Post", "id")</span>)
  router.DELETE(<span class="text-red-400">"/posts/:id"</span>, c.Delete, <span class="text-purple-400">authorization.CanAccess("delete", "Post", "id")</span>)
  
  <span class="text-green-400">// Role-based protection</span>
  adminGroup := router.Group(<span class="text-red-400">"/admin"</span>, <span class="text-purple-400">authorization.HasRole("Administrator")</span>)
  ownerGroup := router.Group(<span class="text-red-400">"/owner"</span>, <span class="text-purple-400">authorization.HasRole("Owner")</span>)
}</code></pre>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">1. Can() - General Resource Protection</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      The intuitive way to check if a user has permission to perform an action on a resource type.
                    </p>
                    <div class="grid gap-3 md:grid-cols-2">
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">✨ New Syntax (Recommended)</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">Can() Function</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// ✨ Clean, readable syntax
router.POST(&quot;/posts&quot;, c.Create, authorization.Can(&quot;create&quot;, &quot;Post&quot;))
router.GET(&quot;/posts&quot;, c.List, authorization.Can(&quot;list&quot;, &quot;Post&quot;))
router.PUT(&quot;/posts&quot;, c.Update, authorization.Can(&quot;update&quot;, &quot;Post&quot;))

// Multiple permissions
router.POST(&quot;/posts&quot;, c.Create, 
  authorization.Can(&quot;create&quot;, &quot;Post&quot;),
  authorization.HasRole(&quot;Member&quot;))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// ✨ Clean, readable syntax</span>
router.POST(<span class="text-red-400">"/posts"</span>, c.Create, <span class="text-purple-400">authorization.Can("create", "Post")</span>)
router.GET(<span class="text-red-400">"/posts"</span>, c.List, <span class="text-purple-400">authorization.Can("list", "Post")</span>)
router.PUT(<span class="text-red-400">"/posts"</span>, c.Update, <span class="text-purple-400">authorization.Can("update", "Post")</span>)

<span class="text-green-400">// Multiple permissions</span>
router.POST(<span class="text-red-400">"/posts"</span>, c.Create, 
  <span class="text-purple-400">authorization.Can("create", "Post")</span>,
  <span class="text-purple-400">authorization.HasRole("Member")</span>)</code></pre>
                        </div>
                      </div>
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">🔧 Legacy Syntax</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">AuthMiddleware</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Legacy syntax (still supported)
router.POST(&quot;/posts&quot;, c.Create, 
  authorization.AuthMiddleware(&quot;post&quot;, &quot;create&quot;))
router.GET(&quot;/posts&quot;, c.List,
  authorization.AuthMiddleware(&quot;post&quot;, &quot;list&quot;))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Legacy syntax (still supported)</span>
router.POST(<span class="text-red-400">"/posts"</span>, c.Create, 
  <span class="text-gray-400">authorization.AuthMiddleware("post", "create")</span>)
router.GET(<span class="text-red-400">"/posts"</span>, c.List,
  <span class="text-gray-400">authorization.AuthMiddleware("post", "list")</span>)</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">2. CanAccess() - Specific Resource Protection</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Checks if a user has permission to perform an action on a specific resource instance.
                    </p>
                    <div class="grid gap-3 md:grid-cols-2">
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">✨ New Syntax (Recommended)</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">CanAccess() Function</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// ✨ Check access to specific resources
router.PUT(&quot;/posts/:id&quot;, c.Update, 
  authorization.CanAccess(&quot;update&quot;, &quot;Post&quot;, &quot;id&quot;))
  
router.DELETE(&quot;/posts/:id&quot;, c.Delete, 
  authorization.CanAccess(&quot;delete&quot;, &quot;Post&quot;, &quot;id&quot;))

// Different parameter names
router.PUT(&quot;/users/:userId/posts/:postId&quot;, c.UpdateUserPost, 
  authorization.CanAccess(&quot;update&quot;, &quot;Post&quot;, &quot;postId&quot;))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// ✨ Check access to specific resources</span>
router.PUT(<span class="text-red-400">"/posts/:id"</span>, c.Update, 
  <span class="text-purple-400">authorization.CanAccess("update", "Post", "id")</span>)
  
router.DELETE(<span class="text-red-400">"/posts/:id"</span>, c.Delete, 
  <span class="text-purple-400">authorization.CanAccess("delete", "Post", "id")</span>)

<span class="text-green-400">// Different parameter names</span>
router.PUT(<span class="text-red-400">"/users/:userId/posts/:postId"</span>, c.UpdateUserPost, 
  <span class="text-purple-400">authorization.CanAccess("update", "Post", "postId")</span>)</code></pre>
                        </div>
                      </div>
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">🔧 Legacy Syntax</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">ResourceAuthMiddleware</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Legacy syntax (still supported)
router.PUT(&quot;/posts/:id&quot;, c.Update, 
  authorization.ResourceAuthMiddleware(&quot;post&quot;, &quot;update&quot;, &quot;id&quot;))
  
router.DELETE(&quot;/posts/:id&quot;, c.Delete,
  authorization.ResourceAuthMiddleware(&quot;post&quot;, &quot;delete&quot;, &quot;id&quot;))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Legacy syntax (still supported)</span>
router.PUT(<span class="text-red-400">"/posts/:id"</span>, c.Update, 
  <span class="text-gray-400">authorization.ResourceAuthMiddleware("post", "update", "id")</span>)
  
router.DELETE(<span class="text-red-400">"/posts/:id"</span>, c.Delete,
  <span class="text-gray-400">authorization.ResourceAuthMiddleware("post", "delete", "id")</span>)</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">3. HasRole() - Role-Based Protection</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Ensures the user has a specific role (Owner, Administrator, Member, External).
                    </p>
                    <div class="grid gap-3 md:grid-cols-2">
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">✨ New Syntax (Recommended)</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">HasRole() Function</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// ✨ Clean role checking
adminGroup := router.Group(&quot;/admin&quot;, 
  authorization.HasRole(&quot;Administrator&quot;))

ownerGroup := router.Group(&quot;/owner&quot;, 
  authorization.HasRole(&quot;Owner&quot;))

// Individual routes  
router.GET(&quot;/admin/settings&quot;, c.GetSettings, 
  authorization.HasRole(&quot;Administrator&quot;))

// Multiple role checks
router.POST(&quot;/posts&quot;, c.Create,
  authorization.HasRole(&quot;Member&quot;),
  authorization.Can(&quot;create&quot;, &quot;Post&quot;))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// ✨ Clean role checking</span>
adminGroup := router.Group(<span class="text-red-400">"/admin"</span>, 
  <span class="text-purple-400">authorization.HasRole("Administrator")</span>)

ownerGroup := router.Group(<span class="text-red-400">"/owner"</span>, 
  <span class="text-purple-400">authorization.HasRole("Owner")</span>)

<span class="text-green-400">// Individual routes</span>  
router.GET(<span class="text-red-400">"/admin/settings"</span>, c.GetSettings, 
  <span class="text-purple-400">authorization.HasRole("Administrator")</span>)

<span class="text-green-400">// Multiple role checks</span>
router.POST(<span class="text-red-400">"/posts"</span>, c.Create,
  <span class="text-purple-400">authorization.HasRole("Member")</span>,
  <span class="text-purple-400">authorization.Can("create", "Post")</span>)</code></pre>
                        </div>
                      </div>
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">🔧 Legacy Syntax</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">RequireRole</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Legacy syntax (still supported)
adminGroup := router.Group(&quot;/admin&quot;,
  authorization.RequireRole(&quot;Administrator&quot;))
  
ownerGroup := router.Group(&quot;/owner&quot;,
  authorization.RequireRole(&quot;Owner&quot;))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Legacy syntax (still supported)</span>
adminGroup := router.Group(<span class="text-red-400">"/admin"</span>,
  <span class="text-gray-400">authorization.RequireRole("Administrator")</span>)
  
ownerGroup := router.Group(<span class="text-red-400">"/owner"</span>,
  <span class="text-gray-400">authorization.RequireRole("Owner")</span>)</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">4. Advanced Permission Checks</h5>
                    <p class="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      Additional flexible authorization functions for complex scenarios.
                    </p>
                    <div class="grid gap-3 md:grid-cols-2">
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">🔄 CanAny() - Any Permission</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">OR Logic</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// User needs ANY of these permissions
router.GET(&quot;/posts/moderate&quot;, c.ModeratePosts,
  authorization.CanAny([]string{
    &quot;moderate:Post&quot;,
    &quot;delete:Post&quot;,
    &quot;update:Post&quot;,
  }))

// Editor or admin access
router.POST(&quot;/content&quot;, c.CreateContent,
  authorization.CanAny([]string{
    &quot;create:Content&quot;,
    &quot;edit:Content&quot;,
  }))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// User needs ANY of these permissions</span>
router.GET(<span class="text-red-400">"/posts/moderate"</span>, c.ModeratePosts,
  <span class="text-purple-400">authorization.CanAny([]string{
    "moderate:Post",
    "delete:Post",
    "update:Post",
  })</span>)

<span class="text-green-400">// Editor or admin access</span>
router.POST(<span class="text-red-400">"/content"</span>, c.CreateContent,
  <span class="text-purple-400">authorization.CanAny([]string{
    "create:Content",
    "edit:Content",
  })</span>)</code></pre>
                        </div>
                      </div>
                      <div>
                        <h6 class="text-sm font-medium text-gray-900 dark:text-white mb-2">🔒 CanAll() - All Permissions</h6>
                        <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                          <div class="flex items-center justify-between mb-2">
                            <span class="text-xs text-gray-400">AND Logic</span>
                            <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// User needs ALL of these permissions  
router.POST(&quot;/posts/publish&quot;, c.PublishPost,
  authorization.CanAll([]string{
    &quot;create:Post&quot;,
    &quot;publish:Post&quot;,
    &quot;read:Post&quot;,
  }))

// Requires multiple related permissions
router.DELETE(&quot;/users/:id&quot;, c.DeleteUser,
  authorization.CanAll([]string{
    &quot;delete:User&quot;,
    &quot;manage:User&quot;,
  }))`, $event)">
                              Copy
                            </button>
                          </div>
                          <pre class="text-xs text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// User needs ALL of these permissions</span>  
router.POST(<span class="text-red-400">"/posts/publish"</span>, c.PublishPost,
  <span class="text-purple-400">authorization.CanAll([]string{
    "create:Post",
    "publish:Post",
    "read:Post",
  })</span>)

<span class="text-green-400">// Requires multiple related permissions</span>
router.DELETE(<span class="text-red-400">"/users/:id"</span>, c.DeleteUser,
  <span class="text-purple-400">authorization.CanAll([]string{
    "delete:User",
    "manage:User",
  })</span>)</code></pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-settings-2" class="h-4 w-4 text-orange-500" />
                  <span class="font-semibold">Authorization API Endpoints</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  The authorization module exposes REST API endpoints for managing roles, permissions, and checking access:
                </p>

                <div class="grid gap-4 md:grid-cols-2">
                  <div class="space-y-3">
                    <h5 class="font-medium text-gray-900 dark:text-white">Role Management</h5>
                    <div class="space-y-2 text-sm">
                      <div class="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                        <span class="text-green-800 dark:text-green-200">GET /authorization/roles</span>
                        <UBadge color="green" variant="soft" size="xs">List</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <span class="text-blue-800 dark:text-blue-200">GET /authorization/roles/:id</span>
                        <UBadge color="blue" variant="soft" size="xs">Get</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <span class="text-purple-800 dark:text-purple-200">POST /authorization/roles</span>
                        <UBadge color="purple" variant="soft" size="xs">Create</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-orange-50 dark:bg-orange-900/20 rounded">
                        <span class="text-orange-800 dark:text-orange-200">PUT /authorization/roles/:id</span>
                        <UBadge color="orange" variant="soft" size="xs">Update</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-red-50 dark:bg-red-900/20 rounded">
                        <span class="text-red-800 dark:text-red-200">DELETE /authorization/roles/:id</span>
                        <UBadge color="red" variant="soft" size="xs">Delete</UBadge>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-3">
                    <h5 class="font-medium text-gray-900 dark:text-white">Permission Management</h5>
                    <div class="space-y-2 text-sm">
                      <div class="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded">
                        <span class="text-green-800 dark:text-green-200">GET /authorization/roles/:id/permissions</span>
                        <UBadge color="green" variant="soft" size="xs">List</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded">
                        <span class="text-purple-800 dark:text-purple-200">POST /authorization/roles/:id/permissions</span>
                        <UBadge color="purple" variant="soft" size="xs">Assign</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-red-50 dark:bg-red-900/20 rounded">
                        <span class="text-red-800 dark:text-red-200">DELETE /authorization/roles/:id/permissions/:permId</span>
                        <UBadge color="red" variant="soft" size="xs">Revoke</UBadge>
                      </div>
                      <div class="flex items-center justify-between p-2 bg-blue-50 dark:bg-blue-900/20 rounded">
                        <span class="text-blue-800 dark:text-blue-200">POST /authorization/check</span>
                        <UBadge color="blue" variant="soft" size="xs">Check</UBadge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-globe" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Frontend Permission Checking</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  Check user permissions from your frontend using the authorization API endpoints:
                </p>

                <div class="space-y-4">
                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">Vue.js Composable Example</h5>
                    <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">useAuth.js Composable</span>
                        <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// composables/useAuth.js
import { ref, computed } from 'vue'

const user = ref(null)
const token = ref(localStorage.getItem('auth_token'))

export function useAuth() {
  const isAuthenticated = computed(() => !!token.value && !!user.value)

  // Check if user has permission for a resource type and action
  const checkPermission = async (resourceType, action, resourceId = null) => {
    if (!isAuthenticated.value) return false

    try {
      const response = await fetch('/api/authorization/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${token.value}\`,
          'Base-Orgid': getCurrentOrgId() // Your org ID
        },
        body: JSON.stringify({
          user_id: user.value.id,
          organization_id: getCurrentOrgId(),
          resource_type: resourceType,
          action: action,
          resource_id: resourceId
        })
      })

      const data = await response.json()
      return data.has_permission || false
    } catch (error) {
      console.error('Permission check failed:', error)
      return false
    }
  }

  // Check if user has a specific role
  const hasRole = (roleName) => {
    return user.value?.roles?.some(role => role.name === roleName) || false
  }

  return {
    user,
    token,
    isAuthenticated,
    checkPermission,
    hasRole
  }
}`, $event)">
                          Copy
                        </button>
                      </div>
                      <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// composables/useAuth.js</span>
<span class="text-blue-400">import</span> { ref, computed } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span>

<span class="text-blue-400">const</span> user = <span class="text-yellow-400">ref</span>(<span class="text-purple-400">null</span>)
<span class="text-blue-400">const</span> token = <span class="text-yellow-400">ref</span>(<span class="text-yellow-400">localStorage.getItem</span>(<span class="text-green-400">'auth_token'</span>))

<span class="text-blue-400">export function</span> <span class="text-yellow-400">useAuth</span>() {
  <span class="text-blue-400">const</span> isAuthenticated = <span class="text-yellow-400">computed</span>(() => !!token.value && !!user.value)

  <span class="text-green-400">// Check if user has permission for a resource type and action</span>
  <span class="text-blue-400">const</span> <span class="text-yellow-400">checkPermission</span> = <span class="text-blue-400">async</span> (resourceType, action, resourceId = <span class="text-purple-400">null</span>) => {
    <span class="text-blue-400">if</span> (!isAuthenticated.value) <span class="text-blue-400">return</span> <span class="text-purple-400">false</span>

    <span class="text-blue-400">try</span> {
      <span class="text-blue-400">const</span> response = <span class="text-blue-400">await</span> <span class="text-yellow-400">fetch</span>(<span class="text-green-400">'/api/authorization/check'</span>, {
        method: <span class="text-green-400">'POST'</span>,
        headers: {
          <span class="text-green-400">'Content-Type'</span>: <span class="text-green-400">'application/json'</span>,
          <span class="text-green-400">'Authorization'</span>: <span class="text-green-400">`Bearer ${token.value}`</span>,
          <span class="text-green-400">'Base-Orgid'</span>: <span class="text-yellow-400">getCurrentOrgId</span>() <span class="text-green-400">// Your org ID</span>
        },
        body: <span class="text-blue-400">JSON.stringify</span>({
          user_id: user.value.id,
          organization_id: <span class="text-yellow-400">getCurrentOrgId</span>(),
          resource_type: resourceType,
          action: action,
          resource_id: resourceId
        })
      })

      <span class="text-blue-400">const</span> data = <span class="text-blue-400">await</span> response.json()
      <span class="text-blue-400">return</span> data.has_permission || <span class="text-purple-400">false</span>
    } <span class="text-blue-400">catch</span> (error) {
      console.error(<span class="text-green-400">'Permission check failed:'</span>, error)
      <span class="text-blue-400">return</span> <span class="text-purple-400">false</span>
    }
  }

  <span class="text-green-400">// Check if user has a specific role</span>
  <span class="text-blue-400">const</span> <span class="text-yellow-400">hasRole</span> = (roleName) => {
    <span class="text-blue-400">return</span> user.value?.roles?.some(role => role.name === roleName) || <span class="text-purple-400">false</span>
  }

  <span class="text-blue-400">return</span> {
    user,
    token,
    isAuthenticated,
    checkPermission,
    hasRole
  }
}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">Vue Component Usage</h5>
                    <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">Component Example</span>
                        <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`<template>
  <div class=&quot;post-actions&quot;>
    <!-- Show edit button only if user can update posts -->
    <button 
      v-if=&quot;canEditPost&quot; 
      @click=&quot;editPost&quot;
      class=&quot;btn btn-primary&quot;>
      Edit Post
    </button>
    
    <!-- Show delete button only if user can delete this specific post -->
    <button 
      v-if=&quot;canDeletePost&quot; 
      @click=&quot;deletePost&quot;
      class=&quot;btn btn-danger&quot;>
      Delete Post
    </button>
    
    <!-- Show admin panel only for administrators -->
    <router-link 
      v-if=&quot;isAdmin&quot; 
      to=&quot;/admin&quot;
      class=&quot;btn btn-secondary&quot;>
      Admin Panel
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useAuth } from '@/composables/useAuth'

const props = defineProps(['post'])
const { checkPermission, hasRole } = useAuth()

const canEditPost = ref(false)
const canDeletePost = ref(false) 
const isAdmin = ref(false)

onMounted(async () => {
  // Check general permission to update posts
  canEditPost.value = await checkPermission('post', 'update')
  
  // Check permission to delete this specific post
  canDeletePost.value = await checkPermission('post', 'delete', props.post.id)
  
  // Check if user has Administrator role
  isAdmin.value = hasRole('Administrator')
})
</script>`, $event)">
                          Copy
                        </button>
                      </div>
                      <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">&lt;template&gt;</span>
  <span class="text-blue-400">&lt;div</span> <span class="text-green-400">class=</span><span class="text-red-400">"post-actions"</span><span class="text-blue-400">&gt;</span>
    <span class="text-green-400">&lt;!-- Show edit button only if user can update posts --&gt;</span>
    <span class="text-blue-400">&lt;button</span> 
      <span class="text-green-400">v-if=</span><span class="text-red-400">"canEditPost"</span> 
      <span class="text-green-400">@click=</span><span class="text-red-400">"editPost"</span>
      <span class="text-green-400">class=</span><span class="text-red-400">"btn btn-primary"</span><span class="text-blue-400">&gt;</span>
      Edit Post
    <span class="text-blue-400">&lt;/button&gt;</span>
    
    <span class="text-green-400">&lt;!-- Show delete button only if user can delete this specific post --&gt;</span>
    <span class="text-blue-400">&lt;button</span> 
      <span class="text-green-400">v-if=</span><span class="text-red-400">"canDeletePost"</span> 
      <span class="text-green-400">@click=</span><span class="text-red-400">"deletePost"</span>
      <span class="text-green-400">class=</span><span class="text-red-400">"btn btn-danger"</span><span class="text-blue-400">&gt;</span>
      Delete Post
    <span class="text-blue-400">&lt;/button&gt;</span>
    
    <span class="text-green-400">&lt;!-- Show admin panel only for administrators --&gt;</span>
    <span class="text-blue-400">&lt;router-link</span> 
      <span class="text-green-400">v-if=</span><span class="text-red-400">"isAdmin"</span> 
      <span class="text-green-400">to=</span><span class="text-red-400">"/admin"</span>
      <span class="text-green-400">class=</span><span class="text-red-400">"btn btn-secondary"</span><span class="text-blue-400">&gt;</span>
      Admin Panel
    <span class="text-blue-400">&lt;/router-link&gt;</span>
  <span class="text-blue-400">&lt;/div&gt;</span>
<span class="text-blue-400">&lt;/template&gt;</span>

<span class="text-blue-400">&lt;script setup&gt;</span>
<span class="text-blue-400">import</span> { ref, onMounted } <span class="text-blue-400">from</span> <span class="text-green-400">'vue'</span>
<span class="text-blue-400">import</span> { useAuth } <span class="text-blue-400">from</span> <span class="text-green-400">'@/composables/useAuth'</span>

<span class="text-blue-400">const</span> props = <span class="text-yellow-400">defineProps</span>([<span class="text-green-400">'post'</span>])
<span class="text-blue-400">const</span> { checkPermission, hasRole } = <span class="text-yellow-400">useAuth</span>()

<span class="text-blue-400">const</span> canEditPost = <span class="text-yellow-400">ref</span>(<span class="text-purple-400">false</span>)
<span class="text-blue-400">const</span> canDeletePost = <span class="text-yellow-400">ref</span>(<span class="text-purple-400">false</span>) 
<span class="text-blue-400">const</span> isAdmin = <span class="text-yellow-400">ref</span>(<span class="text-purple-400">false</span>)

<span class="text-yellow-400">onMounted</span>(<span class="text-blue-400">async</span> () => {
  <span class="text-green-400">// Check general permission to update posts</span>
  canEditPost.value = <span class="text-blue-400">await</span> <span class="text-yellow-400">checkPermission</span>(<span class="text-green-400">'post'</span>, <span class="text-green-400">'update'</span>)
  
  <span class="text-green-400">// Check permission to delete this specific post</span>
  canDeletePost.value = <span class="text-blue-400">await</span> <span class="text-yellow-400">checkPermission</span>(<span class="text-green-400">'post'</span>, <span class="text-green-400">'delete'</span>, props.post.id)
  
  <span class="text-green-400">// Check if user has Administrator role</span>
  isAdmin.value = <span class="text-yellow-400">hasRole</span>(<span class="text-green-400">'Administrator'</span>)
})
<span class="text-blue-400">&lt;/script&gt;</span></code></pre>
                    </div>
                  </div>

                  <div>
                    <h5 class="font-medium text-gray-900 dark:text-white mb-2">JavaScript/React Example</h5>
                    <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-3 overflow-x-auto">
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs text-gray-400">React Hook</span>
                        <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// hooks/usePermissions.js
import { useState, useEffect } from 'react'
import { useAuth } from './useAuth'

export function usePermissions() {
  const { user, token, isAuthenticated } = useAuth()

  const checkPermission = async (resourceType, action, resourceId = null) => {
    if (!isAuthenticated) return false

    try {
      const response = await fetch('/api/authorization/check', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': \`Bearer \${token}\`,
          'Base-Orgid': getCurrentOrgId()
        },
        body: JSON.stringify({
          user_id: user.id,
          organization_id: getCurrentOrgId(),
          resource_type: resourceType,
          action: action,
          resource_id: resourceId
        })
      })

      const data = await response.json()
      return data.has_permission || false
    } catch (error) {
      console.error('Permission check failed:', error)
      return false
    }
  }

  return { checkPermission }
}

// Component usage
function PostComponent({ post }) {
  const [canEdit, setCanEdit] = useState(false)
  const [canDelete, setCanDelete] = useState(false)
  const { checkPermission } = usePermissions()

  useEffect(() => {
    const checkPermissions = async () => {
      setCanEdit(await checkPermission('post', 'update'))
      setCanDelete(await checkPermission('post', 'delete', post.id))
    }
    
    checkPermissions()
  }, [post.id])

  return (
    <div className=&quot;post-actions&quot;>
      {canEdit && <button onClick={editPost}>Edit</button>}
      {canDelete && <button onClick={deletePost}>Delete</button>}
    </div>
  )
}`, $event)">
                          Copy
                        </button>
                      </div>
                      <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// hooks/usePermissions.js</span>
<span class="text-blue-400">import</span> { useState, useEffect } <span class="text-blue-400">from</span> <span class="text-green-400">'react'</span>
<span class="text-blue-400">import</span> { useAuth } <span class="text-blue-400">from</span> <span class="text-green-400">'./useAuth'</span>

<span class="text-blue-400">export function</span> <span class="text-yellow-400">usePermissions</span>() {
  <span class="text-blue-400">const</span> { user, token, isAuthenticated } = <span class="text-yellow-400">useAuth</span>()

  <span class="text-blue-400">const</span> <span class="text-yellow-400">checkPermission</span> = <span class="text-blue-400">async</span> (resourceType, action, resourceId = <span class="text-purple-400">null</span>) => {
    <span class="text-blue-400">if</span> (!isAuthenticated) <span class="text-blue-400">return</span> <span class="text-purple-400">false</span>

    <span class="text-blue-400">try</span> {
      <span class="text-blue-400">const</span> response = <span class="text-blue-400">await</span> <span class="text-yellow-400">fetch</span>(<span class="text-green-400">'/api/authorization/check'</span>, {
        method: <span class="text-green-400">'POST'</span>,
        headers: {
          <span class="text-green-400">'Content-Type'</span>: <span class="text-green-400">'application/json'</span>,
          <span class="text-green-400">'Authorization'</span>: <span class="text-green-400">`Bearer ${token}`</span>,
          <span class="text-green-400">'Base-Orgid'</span>: <span class="text-yellow-400">getCurrentOrgId</span>()
        },
        body: <span class="text-blue-400">JSON.stringify</span>({
          user_id: user.id,
          organization_id: <span class="text-yellow-400">getCurrentOrgId</span>(),
          resource_type: resourceType,
          action: action,
          resource_id: resourceId
        })
      })

      <span class="text-blue-400">const</span> data = <span class="text-blue-400">await</span> response.json()
      <span class="text-blue-400">return</span> data.has_permission || <span class="text-purple-400">false</span>
    } <span class="text-blue-400">catch</span> (error) {
      console.error(<span class="text-green-400">'Permission check failed:'</span>, error)
      <span class="text-blue-400">return</span> <span class="text-purple-400">false</span>
    }
  }

  <span class="text-blue-400">return</span> { checkPermission }
}

<span class="text-green-400">// Component usage</span>
<span class="text-blue-400">function</span> <span class="text-yellow-400">PostComponent</span>({ post }) {
  <span class="text-blue-400">const</span> [canEdit, setCanEdit] = <span class="text-yellow-400">useState</span>(<span class="text-purple-400">false</span>)
  <span class="text-blue-400">const</span> [canDelete, setCanDelete] = <span class="text-yellow-400">useState</span>(<span class="text-purple-400">false</span>)
  <span class="text-blue-400">const</span> { checkPermission } = <span class="text-yellow-400">usePermissions</span>()

  <span class="text-yellow-400">useEffect</span>(() => {
    <span class="text-blue-400">const</span> <span class="text-yellow-400">checkPermissions</span> = <span class="text-blue-400">async</span> () => {
      <span class="text-yellow-400">setCanEdit</span>(<span class="text-blue-400">await</span> <span class="text-yellow-400">checkPermission</span>(<span class="text-green-400">'post'</span>, <span class="text-green-400">'update'</span>))
      <span class="text-yellow-400">setCanDelete</span>(<span class="text-blue-400">await</span> <span class="text-yellow-400">checkPermission</span>(<span class="text-green-400">'post'</span>, <span class="text-green-400">'delete'</span>, post.id))
    }
    
    <span class="text-yellow-400">checkPermissions</span>()
  }, [post.id])

  <span class="text-blue-400">return</span> (
    <span class="text-blue-400">&lt;div</span> <span class="text-green-400">className=</span><span class="text-red-400">"post-actions"</span><span class="text-blue-400">&gt;</span>
      {canEdit && <span class="text-blue-400">&lt;button</span> <span class="text-green-400">onClick=</span><span class="text-yellow-400">{editPost}</span><span class="text-blue-400">&gt;</span>Edit<span class="text-blue-400">&lt;/button&gt;</span>}
      {canDelete && <span class="text-blue-400">&lt;button</span> <span class="text-green-400">onClick=</span><span class="text-yellow-400">{deletePost}</span><span class="text-blue-400">&gt;</span>Delete<span class="text-blue-400">&lt;/button&gt;</span>}
    <span class="text-blue-400">&lt;/div&gt;</span>
  )
}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </UCard>

            <UAlert 
              color="emerald" 
              variant="soft" 
              title="🔐 Complete Authorization System!" 
              description="Base Framework's authorization module provides enterprise-grade RBAC with middleware protection, API endpoints for role management, and seamless frontend integration for permission checking."
            />
          </div>
        </section>

        <!-- Integration Examples -->
        <section>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Integration Examples</h2>
          
          <div class="space-y-6">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-code" class="h-4 w-4 text-blue-500" />
                  <span class="font-semibold">Protecting Generated Modules</span>
                </div>
              </template>
              
              <div class="space-y-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">
                  When you generate modules with Base Framework, you can easily add authentication to protect your endpoints:
                </p>

                <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-xs text-gray-400">Generated Controller with Auth</span>
                    <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func (c *PostController) Routes(router *router.RouterGroup) {
  // Public endpoints (no auth required)
  router.GET(&quot;/posts&quot;, c.List)                    // Public post listing
  router.GET(&quot;/posts/:id&quot;, c.Get)               // Public post view
  
  // Protected endpoints - using new intuitive syntax
  router.POST(&quot;/posts&quot;, c.Create, authorization.Can(&quot;create&quot;, &quot;Post&quot;))
  router.PUT(&quot;/posts/:id&quot;, c.Update, authorization.CanAccess(&quot;update&quot;, &quot;Post&quot;, &quot;id&quot;))
  router.DELETE(&quot;/posts/:id&quot;, c.Delete, authorization.CanAccess(&quot;delete&quot;, &quot;Post&quot;, &quot;id&quot;))
  
  // Admin endpoints (role-based protection)
  adminGroup := router.Group(&quot;/admin/posts&quot;, authorization.HasRole(&quot;Administrator&quot;))
  {
    adminGroup.DELETE(&quot;/:id&quot;, c.ForceDelete)      // Admin force delete
    adminGroup.PUT(&quot;/:id/featured&quot;, c.SetFeatured) // Admin feature post
    adminGroup.POST(&quot;/bulk-delete&quot;, c.BulkDelete)  // Admin bulk operations
  }
  
  // Mixed protection: role + permission
  router.POST(&quot;/posts/publish&quot;, c.PublishPost,
    authorization.HasRole(&quot;Member&quot;),
    authorization.Can(&quot;publish&quot;, &quot;Post&quot;))
}`, $event)">
                      Copy
                    </button>
                  </div>
                  <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (c *PostController) <span class="text-yellow-400">Routes</span>(router *router.RouterGroup) {
  <span class="text-green-400">// Public endpoints (no auth required)</span>
  router.GET(<span class="text-red-400">"/posts"</span>, c.List)                    <span class="text-green-400">// Public post listing</span>
  router.GET(<span class="text-red-400">"/posts/:id"</span>, c.Get)               <span class="text-green-400">// Public post view</span>
  
  <span class="text-green-400">// Protected endpoints - using new intuitive syntax</span>
  router.POST(<span class="text-red-400">"/posts"</span>, c.Create, <span class="text-purple-400">authorization.Can("create", "Post")</span>)
  router.PUT(<span class="text-red-400">"/posts/:id"</span>, c.Update, <span class="text-purple-400">authorization.CanAccess("update", "Post", "id")</span>)
  router.DELETE(<span class="text-red-400">"/posts/:id"</span>, c.Delete, <span class="text-purple-400">authorization.CanAccess("delete", "Post", "id")</span>)
  
  <span class="text-green-400">// Admin endpoints (role-based protection)</span>
  adminGroup := router.Group(<span class="text-red-400">"/admin/posts"</span>, <span class="text-purple-400">authorization.HasRole("Administrator")</span>)
  {
    adminGroup.DELETE(<span class="text-red-400">"/:id"</span>, c.ForceDelete)      <span class="text-green-400">// Admin force delete</span>
    adminGroup.PUT(<span class="text-red-400">"/:id/featured"</span>, c.SetFeatured) <span class="text-green-400">// Admin feature post</span>
    adminGroup.POST(<span class="text-red-400">"/bulk-delete"</span>, c.BulkDelete)  <span class="text-green-400">// Admin bulk operations</span>
  }
  
  <span class="text-green-400">// Mixed protection: role + permission</span>
  router.POST(<span class="text-red-400">"/posts/publish"</span>, c.PublishPost,
    <span class="text-purple-400">authorization.HasRole("Member")</span>,
    <span class="text-purple-400">authorization.Can("publish", "Post")</span>)
}</code></pre>
                </div>
              </div>
            </UCard>

            <UAlert 
              color="green" 
              variant="soft" 
              title="🎉 Complete Authentication Solution!" 
              description="Base Framework's core authentication modules provide everything you need for secure user management, from social login to enterprise-grade authorization - all built-in and ready to use!"
            />
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