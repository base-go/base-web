

<template>
  <section id="installation" class="mb-16">
    <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Installation</h2>
    
    <div class="space-y-8">
      <div>
        <UAlert 
          color="blue" 
          variant="soft" 
          title="Prerequisites" 
          description="Base Framework requires Go 1.21+ and supports PostgreSQL, MySQL, and SQLite databases."
          class="mb-6"
        />
        
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quick Install</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Install Base CLI with our installation script. This will download the latest version and add it to your PATH:
        </p>
        
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-terminal" class="h-4 w-4 text-gray-500" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Terminal</span>
              </div>
              <UButtonGroup size="xs">
                <UButton
                  variant="ghost"
                  icon="i-heroicons-clipboard-document"
                  @click="copyToClipboard('curl -fsSL https://get.base.al | sh', $event.target as HTMLButtonElement)"
                >
                  Copy
                </UButton>
              </UButtonGroup>
            </div>
          </template>
          
          <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code>curl -fsSL https://get.base.al | sh</code></pre>
          </div>
        </UCard>
      </div>

      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Manual Installation</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Download the latest release for your platform:
        </p>
        
        <div class="overflow-x-auto">
          <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Platform
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Architecture
                </th>
                <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Download
                </th>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">macOS</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">amd64 / arm64</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <UButton 
                    variant="ghost" 
                    size="sm"
                    @click="openLink('https://github.com/BaseTechStack/basecmd/releases')"
                  >
                    GitHub Releases
                  </UButton>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Linux</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">amd64 / arm64</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <UButton 
                    variant="ghost" 
                    size="sm"
                    @click="openLink('https://github.com/BaseTechStack/basecmd/releases')"
                  >
                    GitHub Releases
                  </UButton>
                </td>
              </tr>
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">Windows</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">amd64</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                  <UButton 
                    variant="ghost" 
                    size="sm"
                    @click="openLink('https://github.com/BaseTechStack/basecmd/releases')"
                  >
                    GitHub Releases
                  </UButton>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
 

      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Verify Installation</h3>
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          After installation, verify that Base CLI is correctly installed and accessible:
        </p>
        
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-terminal" class="h-4 w-4 text-gray-500" />
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Terminal</span>
              </div>
              <UButtonGroup size="xs">
                <UButton
                  variant="ghost"
                  icon="i-heroicons-clipboard-document"
                  @click="copyToClipboard('base version', $event.target as HTMLButtonElement)"
                >
                  Copy
                </UButton>
              </UButtonGroup>
            </div>
          </template>
          
          <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code>base version</code></pre>
          </div>
        </UCard>
        
        <div class="mt-4">
          <p class="text-gray-600 dark:text-gray-300 mb-3">You should see output similar to:</p>
          
          <div class="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
            <pre class="text-sm text-gray-700 dark:text-gray-300"><code>Base Framework CLI v1.0.0
Built with Go 1.21.5
Commit: abc123def
Built: 2024-01-15T10:30:00Z</code></pre>
          </div>
        </div>
      </div>
      
      <div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Next Steps</h3>
        
        <div class="prose prose-gray dark:prose-invert max-w-none">
          <p>Once Base CLI is installed, you can:</p>
          <ul>
            <li><strong>Create a new project:</strong> <UKbd class="mx-1">base new my-project</UKbd></li>
            <li><strong>Generate modules:</strong> <UKbd class="mx-1">base g User name:string email:string</UKbd></li>
            <li><strong>Start development server:</strong> <UKbd class="mx-1">base start -r</UKbd></li>
            <li><strong>View help:</strong> <UKbd class="mx-1">base help</UKbd></li>
          </ul>
        </div>
        
        <UAlert 
          color="green" 
          variant="soft" 
          title="Ready to Go!" 
          description="Base CLI is now installed and ready to use. Continue to the Quick Start guide to create your first project."
          class="mt-6"
        />
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ClipboardDocumentIcon } from '@heroicons/vue/24/outline'

const copyToClipboard = async (text: string, button: HTMLButtonElement) => {
  try {
    await navigator.clipboard.writeText(text)
    const originalText = button.textContent
    button.textContent = 'Copied!'
    button.classList.add('bg-green-500')
    setTimeout(() => {
      button.textContent = originalText
      button.classList.remove('bg-green-500')
    }, 2000)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
}
const openLink = (url: string) => {
  window.open(url, '_blank')
}
</script>