<script setup lang="ts">
</script>

<template>
  <section id="get-started" class="py-20 sm:py-32 bg-gray-900 dark:bg-gray-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
        Ready to Build Something Amazing?
      </h2>
      <p class="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
        Join thousands of developers building modern Go applications with Base Framework
      </p>
      
      <div class="bg-gray-800 rounded-2xl p-8 max-w-2xl mx-auto mb-8">
        <div class="bg-gray-900 rounded-lg p-6 overflow-x-auto">
          <pre class="text-left text-sm text-gray-300"><code><span class="text-green-400"># Install Base CLI</span>
curl -fsSL https://get.base.al | sh

<span class="text-green-400"># Create your first project</span>
base new my-awesome-api
cd my-awesome-api

<span class="text-green-400"># Generate your first module</span>
base g User name:string email:string

<span class="text-green-400"># Start development server</span>
base start -r</code></pre>
        </div>
      </div>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="https://github.com/BaseTechStack/basecmd"
          target="_blank"
          class="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg transition-colors"
        >
          <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
          </svg>
          Start Building Now
        </a>
        
        <a
          href="/docs"
          class="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
        >
          Read Documentation
        </a>
      </div>
    </div>
  </section>
</template>