<script setup lang="ts">
import { ref } from 'vue'
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'

interface CodeExample {
  title: string
  code: string
}

const activeExample = ref(0)

const codeExamples: CodeExample[] = [
  {
    title: 'Quick Start',
    code: `<span class="text-green-400"># Create a new project in seconds</span>
<span class="text-blue-400">base new</span> my-api

<span class="text-green-400"># Generate a complete module with relationships</span>
<span class="text-blue-400">base g</span> Post title:string content:text author_id:uint tags:manyToMany:Tag

<span class="text-green-400"># Start development server with hot reload</span>
<span class="text-blue-400">base start</span> <span class="text-yellow-400">-r</span>`
  },
  {
    title: 'Generated Model',
    code: `<span class="text-purple-400">type</span> Post <span class="text-purple-400">struct</span> {
    Id         <span class="text-purple-400">uint</span>     \`json:"id" gorm:"primarykey"\`
    Title      <span class="text-purple-400">string</span>   \`json:"title"\`
    Content    <span class="text-purple-400">string</span>   \`json:"content"\`
    AuthorId   <span class="text-purple-400">uint</span>     \`json:"author_id" gorm:"index"\`
    Author     Author   \`json:"author,omitempty" gorm:"foreignKey:AuthorId"\`
    Tags       []*Tag   \`json:"tags,omitempty" gorm:"many2many:post_tags"\`
}`
  },
  {
    title: 'Blog API',
    code: `<span class="text-green-400"># Generate a complete blog API in under a minute</span>
<span class="text-blue-400">base g</span> Author name:string email:email bio:text
<span class="text-blue-400">base g</span> Post title:string content:text author:belongsTo:Author
<span class="text-blue-400">base g</span> Category name:string slug:slug posts:hasMany:Post
<span class="text-blue-400">base g</span> Tag name:string posts:manyToMany:Post
<span class="text-blue-400">base g</span> Comment content:text post:belongsTo:Post author:belongsTo:Author`
  }
]
</script>

<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 sm:py-32">
    <div class="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]" />
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Build Faster with 
          <span class="text-primary-600 dark:text-primary-400">Base</span>
        </h1>
        
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          A modern Go web framework designed for rapid development with automatic relationship detection, 
          powerful code generation, and a modular architecture that scales with your needs.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#get-started"
            class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            <RocketLaunchIcon class="w-5 h-5 mr-2" />
            Get Started
          </a>
          
          <a
            href="https://github.com/BaseTechStack/basecmd"
            target="_blank"
            class="inline-flex items-center px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium rounded-lg transition-colors"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clip-rule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
          <div class="flex flex-wrap gap-2 mb-4 justify-center">
            <button
              v-for="(example, index) in codeExamples"
              :key="index"
              @click="activeExample = index"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-colors',
                activeExample === index
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              ]"
            >
              {{ example.title }}
            </button>
          </div>
          
          <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 overflow-x-auto">
            <pre class="text-sm text-gray-300"><code v-html="codeExamples[activeExample].code"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>