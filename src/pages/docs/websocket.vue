<template>
    <DocsLayout>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
        <div class="mb-8">
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">WebSocket</h1>
          <p class="text-xl text-gray-600 dark:text-gray-300">
            Real-time communication with WebSocket support. Built-in hub management, room-based messaging, and collaborative features.
          </p>
        </div>

        <!-- Overview -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <UCard>
              <div class="p-4">
                <UIcon name="i-lucide-users" class="h-8 w-8 text-blue-500 mb-3" />
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Multi-Room Support</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Organize users into rooms with automatic user list management and room-specific broadcasting.</p>
              </div>
            </UCard>

            <UCard>
              <div class="p-4">
                <UIcon name="i-lucide-zap" class="h-8 w-8 text-yellow-500 mb-3" />
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Real-time Messaging</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Instant message delivery with system notifications and typing indicators.</p>
              </div>
            </UCard>

            <UCard>
              <div class="p-4">
                <UIcon name="i-lucide-mouse-pointer" class="h-8 w-8 text-green-500 mb-3" />
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Collaborative Features</h3>
                <p class="text-sm text-gray-600 dark:text-gray-300">Cursor tracking, collaborative drawing, code editing, and shared whiteboards.</p>
              </div>
            </UCard>
          </div>

          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Base Framework includes a production-ready WebSocket implementation with automatic hub initialization, connection management, and message broadcasting. The system supports multiple rooms, user management, and various collaborative features out of the box.
          </p>

          <UAlert icon="i-lucide-info" color="blue" variant="soft" class="mb-6">
            <template #title>WebSocket Endpoint</template>
            <template #description>
              The WebSocket server runs automatically when you start Base Framework and is available at <code>/api/ws</code>
            </template>
          </UAlert>
        </div>

        <!-- Connection -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Connecting to WebSocket</h2>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Basic Connection</h3>
            <div class="relative">
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Connect to WebSocket server
const socket = new WebSocket('ws://localhost:8100/api/ws?id=user123&nickname=John&room=general');

socket.onopen = function(event) {
    console.log('Connected to WebSocket server');
};

socket.onmessage = function(event) {
    const message = JSON.parse(event.data);
    console.log('Received message:', message);
};

socket.onclose = function(event) {
    console.log('Disconnected from WebSocket server');
};

socket.onerror = function(error) {
    console.error('WebSocket error:', error);
};</code></pre>
             
            </div>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connection Parameters</h3>
            <div class="overflow-hidden">
              <table class="w-full">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Parameter</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Required</th>
                    <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  <tr>
                    <td class="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">id</td>
                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Optional</td>
                    <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Unique client identifier</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">nickname</td>
                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Optional</td>
                    <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Display name for the user</td>
                  </tr>
                  <tr>
                    <td class="px-4 py-3 text-sm font-mono text-gray-900 dark:text-white">room</td>
                    <td class="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">Optional</td>
                    <td class="px-4 py-3 text-sm text-gray-600 dark:text-gray-300">Room to join (default: general)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Message Types -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Message Types</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Chat Messages</h3>
              <div class="relative">
                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Send a chat message
socket.send(JSON.stringify({
    type: 'message',
    content: 'Hello, everyone!',
    room: 'general',
    nickname: 'John'
}));

// Receive chat message
{
    "type": "message",
    "content": "Hello, everyone!",
    "room": "general",
    "nickname": "John"
}</code></pre>
                
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">System Messages</h3>
              <div class="relative">
                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// System notifications (received only)
{
    "type": "system",
    "content": "John joined the room",
    "room": "general",
    "nickname": "System"
}

// User list updates
{
    "type": "users_update",
    "content": ["John", "Jane", "Bob"],
    "room": "general"
}</code></pre>
                  
              </div>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Collaborative Features</h3>
              <div class="relative">
                <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-javascript">// Drawing data
socket.send(JSON.stringify({
    type: 'draw',
    content: {
        fromX: 100, fromY: 150,
        toX: 200, toY: 250,
        color: '#FF0000'
    }
}));

// Cursor movement
socket.send(JSON.stringify({
    type: 'cursor_move',
    content: { x: 150, y: 200 }
}));

// Code updates
socket.send(JSON.stringify({
    type: 'code_update',
    content: {
        code: 'console.log("Hello World");',
        language: 'javascript'
    }
}));</code></pre>
                 
              </div>
            </div>
          </div>
        </div>

        <!-- Live Examples -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Live Examples</h2>
          
          <p class="text-gray-600 dark:text-gray-300 mb-6">
            Base Framework includes several built-in WebSocket examples that you can access when running your server. These examples demonstrate different real-time features and can be used as templates for your own applications.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <UCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UIcon name="i-lucide-message-circle" class="h-6 w-6 text-blue-500 mr-3" />
                  <h3 class="font-semibold text-gray-900 dark:text-white">Chat Application</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Multi-room chat with user lists, system notifications, and real-time messaging.
                </p>
                <div class="flex items-center justify-between">
                  <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/static/chat.html</code>
                  <UButton size="xs" variant="soft" color="blue">
                    <UIcon name="i-lucide-external-link" class="h-3 w-3 mr-1" />
                    View Example
                  </UButton>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UIcon name="i-lucide-paintbrush" class="h-6 w-6 text-green-500 mr-3" />
                  <h3 class="font-semibold text-gray-900 dark:text-white">Collaborative Drawing</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Real-time drawing canvas with cursor tracking and collaborative sketching.
                </p>
                <div class="flex items-center justify-between">
                  <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/static/draw.html</code>
                  <UButton size="xs" variant="soft" color="green">
                    <UIcon name="i-lucide-external-link" class="h-3 w-3 mr-1" />
                    View Example
                  </UButton>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UIcon name="i-lucide-kanban-square" class="h-6 w-6 text-purple-500 mr-3" />
                  <h3 class="font-semibold text-gray-900 dark:text-white">Kanban Board</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Collaborative task management with drag-and-drop and real-time updates.
                </p>
                <div class="flex items-center justify-between">
                  <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/static/kanban.html</code>
                  <UButton size="xs" variant="soft" color="purple">
                    <UIcon name="i-lucide-external-link" class="h-3 w-3 mr-1" />
                    View Example
                  </UButton>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UIcon name="i-lucide-code" class="h-6 w-6 text-orange-500 mr-3" />
                  <h3 class="font-semibold text-gray-900 dark:text-white">Code Editor</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Collaborative code editing with syntax highlighting and real-time changes.
                </p>
                <div class="flex items-center justify-between">
                  <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/static/editor.html</code>
                  <UButton size="xs" variant="soft" color="orange">
                    <UIcon name="i-lucide-external-link" class="h-3 w-3 mr-1" />
                    View Example
                  </UButton>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UIcon name="i-lucide-activity" class="h-6 w-6 text-red-500 mr-3" />
                  <h3 class="font-semibold text-gray-900 dark:text-white">System Monitor</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Real-time system metrics dashboard with live charts and monitoring.
                </p>
                <div class="flex items-center justify-between">
                  <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/static/monitor.html</code>
                  <UButton size="xs" variant="soft" color="red">
                    <UIcon name="i-lucide-external-link" class="h-3 w-3 mr-1" />
                    View Example
                  </UButton>
                </div>
              </div>
            </UCard>

            <UCard>
              <div class="p-6">
                <div class="flex items-center mb-4">
                  <UIcon name="i-lucide-table" class="h-6 w-6 text-teal-500 mr-3" />
                  <h3 class="font-semibold text-gray-900 dark:text-white">Collaborative Spreadsheet</h3>
                </div>
                <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Real-time spreadsheet editing with cell updates and collaborative features.
                </p>
                <div class="flex items-center justify-between">
                  <code class="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">/static/spreadsheet.html</code>
                  <UButton size="xs" variant="soft" color="teal">
                    <UIcon name="i-lucide-external-link" class="h-3 w-3 mr-1" />
                    View Example
                  </UButton>
                </div>
              </div>
            </UCard>
          </div>

          <UAlert icon="i-lucide-globe" color="green" variant="soft">
            <template #title>Access Examples</template>
            <template #description>
              When your Base Framework server is running, visit <code>http://localhost:8100/static/</code> to see all available examples. Each example includes full source code you can adapt for your needs.
            </template>
          </UAlert>
        </div>

        <!-- Integration -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Integration with Base Framework</h2>
          
          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Configuration</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              WebSocket support can be enabled or disabled using the <code>WS_ENABLED</code> environment variable. By default, WebSocket is enabled.
            </p>
            
            <div class="relative mb-4">
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-bash"># Enable WebSocket support (default)
WS_ENABLED=true

# Disable WebSocket support
WS_ENABLED=false</code></pre>
               
            </div>

            <UAlert icon="i-lucide-settings" color="blue" variant="soft" class="mb-6">
              <template #title>Conditional Initialization</template>
              <template #description>
                When <code>WS_ENABLED=false</code>, the WebSocket hub is not initialized and the <code>/api/ws</code> endpoint is not registered, reducing memory usage and startup time.
              </template>
            </UAlert>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Automatic Initialization</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              When WebSocket is enabled, it's automatically initialized during application startup. The WebSocket hub starts automatically and registers the <code>/api/ws</code> endpoint.
            </p>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Broadcasting from Controllers</h3>
            <div class="relative">
              <pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto"><code class="language-go">// Access WebSocket hub in your controllers
func (c *YourController) BroadcastUpdate(ctx *router.Context) error {
    // Get the WebSocket hub (this would need to be injected)
    // hub.BroadcastMessage("update", map[string]any{
    //     "type": "data_update",
    //     "payload": yourData,
    // })
    
    return ctx.JSON(200, map[string]any{"status": "broadcasted"})
}</code></pre>
               
            </div>
          </div>

          <div class="mb-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Event Integration</h3>
            <p class="text-gray-600 dark:text-gray-300 mb-4">
              WebSocket integrates seamlessly with Base Framework's event system. You can listen for model changes and automatically broadcast updates to connected clients.
            </p>
          </div>
        </div>

        <!-- Security -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Security & Best Practices</h2>
          
          <div class="space-y-6">
            <UAlert icon="i-lucide-shield-check" color="amber" variant="soft">
              <template #title>CORS Configuration</template>
              <template #description>
                The WebSocket upgrader currently allows all origins for development. In production, configure the CheckOrigin function to validate allowed origins.
              </template>
            </UAlert>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Authentication</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                WebSocket connections can be authenticated using query parameters, headers, or by validating tokens during the connection upgrade process.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Rate Limiting</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Implement rate limiting for WebSocket messages to prevent spam and abuse. Consider limiting messages per user per second.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Message Validation</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Always validate incoming WebSocket messages on the server side. Never trust client-provided data without proper validation and sanitization.
              </p>
            </div>
          </div>
        </div>

        <!-- Architecture -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Architecture</h2>
          
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Hub Pattern</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                Base Framework uses a centralized hub pattern for WebSocket management. The hub maintains all active connections, handles room management, and coordinates message broadcasting between clients.
              </p>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Connection Lifecycle</h3>
              <ul class="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                <li><strong>Connect:</strong> Client upgrades HTTP connection to WebSocket</li>
                <li><strong>Register:</strong> Client is added to the hub and assigned to a room</li>
                <li><strong>Message Handling:</strong> Incoming messages are processed and broadcast</li>
                <li><strong>Disconnect:</strong> Client is removed from hub and room notifications sent</li>
              </ul>
            </div>

            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Scalability</h3>
              <p class="text-gray-600 dark:text-gray-300 mb-4">
                For high-scale applications, consider using Redis or other message brokers to enable WebSocket clustering across multiple server instances.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </DocsLayout>
  </template>
  
  <script setup lang="ts">
  import DocsLayout from '@/layouts/DocsLayout.vue'
  </script>