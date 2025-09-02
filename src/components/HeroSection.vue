
<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 sm:py-24 lg:py-32">
    <!-- Background Pattern -->
    <div class="absolute inset-0">
      <div class="absolute inset-0 bg-grid-gray-900/[0.04] dark:bg-grid-white/[0.02]" />
      <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-indigo-500/10" />
    </div>
    
    <!-- Floating Elements -->
    <div class="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
    <div class="absolute bottom-20 right-10 w-32 h-32 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-1000" />
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <!-- Main Headline -->
        <h1 class="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          The Go Framework
          <br>
          <span class="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            for Modern APIs
          </span>
        </h1>
        
        <!-- Typewriter Subtitle -->
        <div class="h-16 flex items-center justify-center mb-8">
          <p class="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-light">
            {{ typedText }}
            <span v-if="isTyping" class="animate-pulse">|</span>
          </p>
        </div>
        
        
      </div>
      
      <!-- Code Examples Section -->
      <div class="max-w-6xl mx-auto">
        <!-- Tab Navigation -->
        <div class="flex flex-wrap justify-center gap-2 mb-8">
          <button
            v-for="(example, index) in codeExamples"
            :key="index"
            @click="activeExample = index"
            :class="[
              'group px-6 py-3 rounded-xl font-medium transition-all duration-200',
              activeExample === index
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
            ]"
          >
            <div class="text-center">
              <div class="font-semibold">{{ example.title }}</div>
              <div class="text-xs opacity-75 mt-1">{{ example.description }}</div>
            </div>
          </button>
        </div>
        
        <!-- Code Display -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
          <!-- Terminal Header -->
          <div class="flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center space-x-2">
              <div class="w-3 h-3 bg-red-500 rounded-full"></div>
              <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div class="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div class="text-sm text-gray-500 dark:text-gray-400 font-mono">
              {{ codeExamples[activeExample].language }}
            </div>
          </div>
          
          <!-- Code Content -->
          <div class="p-6 bg-gray-900 dark:bg-gray-950">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code v-html="codeExamples[activeExample].code"></code></pre>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
 
interface CodeExample {
  title: string
  description: string
  code: string
  language: string
}

const activeExample = ref(0)
const typedText = ref('')
const isTyping = ref(false)

const codeExamples: CodeExample[] = [
  {
    title: 'Install & Create',
    description: 'Get started in seconds with our one-line installer',
    language: 'bash',
    code: `<span class="text-green-400"># Install Base CLI</span>
<span class="text-blue-400">curl -fsSL https://get.base.al | bash</span>

<span class="text-green-400"># Create your first project</span>
<span class="text-blue-400">base new</span> <span class="text-yellow-400">my-awesome-api</span>
<span class="text-blue-400">cd</span> my-awesome-api

<span class="text-green-400"># Start developing immediately</span>
<span class="text-blue-400">base start</span> <span class="text-gray-400"># Server running on :8100</span>`
  },
  {
    title: 'Generate Structures',
    description: 'Create complete CRUD structures with a single command',
    language: 'bash',
    code: `<span class="text-green-400"># Generate a blog post with relationships</span>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Post</span> title:string content:text author_id:uint

<span class="text-green-400"># Automatically creates:</span>
<span class="text-gray-400"># ✓ GORM model with relationships</span>
<span class="text-gray-400"># ✓ REST API endpoints (GET, POST, PUT, DELETE)</span>
<span class="text-gray-400"># ✓ OpenAPI documentation</span>
<span class="text-gray-400"># ✓ Input validation</span>
<span class="text-gray-400"># ✓ Database migrations</span>`
  },
  {
    title: 'Smart Relationships',
    description: 'Automatic relationship detection and GORM integration',
    language: 'go',
    code: `<span class="text-purple-400">type</span> <span class="text-yellow-400">Post</span> <span class="text-purple-400">struct</span> {
    <span class="text-cyan-400">types.Model</span>                    <span class="text-gray-400">// ID, CreatedAt, UpdatedAt</span>
    Title      <span class="text-purple-400">string</span>   \`json:"title" gorm:"not null"\`
    Content    <span class="text-purple-400">string</span>   \`json:"content" gorm:"type:text"\`
    AuthorId   <span class="text-purple-400">uint</span>     \`json:"author_id" gorm:"index"\`
    
    <span class="text-green-400">// Auto-generated relationships</span>
    Author     <span class="text-cyan-400">User</span>     \`json:"author" gorm:"foreignKey:AuthorId"\`
    Comments   []<span class="text-cyan-400">Comment</span> \`json:"comments" gorm:"foreignKey:PostId"\`
}`
  }
]

const typeWriter = async (text: string, speed = 50) => {
  isTyping.value = true
  typedText.value = ''
  
  for (let i = 0; i <= text.length; i++) {
    typedText.value = text.slice(0, i)
    await new Promise(resolve => setTimeout(resolve, speed))
  }
  
  isTyping.value = false
}

onMounted(() => {
  typeWriter('Build production-ready APIs in minutes, not hours')
})
</script>
