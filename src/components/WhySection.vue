<script setup lang="ts">
interface CodeExample {
  title: string
  code: string
}

const detailedExamples: CodeExample[] = [
  {
    title: 'What takes hours in other Go frameworks, takes seconds in Base',
    code: `<span class="text-green-400"># Other Go frameworks: Write models, controllers, routes, validation...</span>
<span class="text-gray-400"># 📁 models/post.go (50+ lines)</span>
<span class="text-gray-400"># 📁 controllers/post.go (100+ lines)</span>
<span class="text-gray-400"># 📁 routes/post.go (20+ lines)</span>
<span class="text-gray-400"># 📁 validation/post.go (30+ lines)</span>
<span class="text-gray-400"># 📁 migrations/create_posts.sql</span>
<span class="text-gray-400"># Total: 200+ lines, 5+ files, 30+ minutes</span>

<span class="text-green-400"># Base Framework: One command, everything ready</span>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Post</span> title:string content:text author_id:uint
<span class="text-gray-400"># ✅ Complete CRUD API ready in 3 seconds</span>`
  },
  {
    title: 'The CLI that thinks ahead',
    code: `<span class="text-green-400"># Smart relationship detection</span>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Article</span> title:string author_id:uint category_id:uint

<span class="text-green-400"># Base automatically knows:</span>
<span class="text-gray-400"># author_id → belongs to User model</span>
<span class="text-gray-400"># category_id → belongs to Category model</span>
<span class="text-gray-400"># Creates proper GORM relationships</span>
<span class="text-gray-400"># Sets up foreign key constraints</span>
<span class="text-gray-400"># Generates preloading queries</span>

<span class="text-purple-400">// Generated Go code:</span>
<span class="text-purple-400">type</span> Article <span class="text-purple-400">struct</span> {
    AuthorId   <span class="text-purple-400">uint</span> \`json:"author_id"\`
    Author     <span class="text-cyan-400">User</span> \`json:"author" gorm:"foreignKey:AuthorId"\`
    CategoryId <span class="text-purple-400">uint</span> \`json:"category_id"\`  
    Category   <span class="text-cyan-400">Category</span> \`json:"category" gorm:"foreignKey:CategoryId"\`
}`
  },
  {
    title: 'Production-ready from day one',
    code: `<span class="text-green-400"># Generate a complete e-commerce API</span>
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Product</span> name:string price:decimal image:attachment
<span class="text-blue-400">base g</span> <span class="text-yellow-400">Order</span> user_id:uint total:decimal status:string
<span class="text-blue-400">base g</span> <span class="text-yellow-400">OrderItem</span> order_id:uint product_id:uint quantity:int

<span class="text-green-400"># What you get instantly:</span>
<span class="text-gray-400"># 🔐 JWT Authentication</span>
<span class="text-gray-400"># 📁 File upload handling</span>
<span class="text-gray-400"># 🔍 Input validation</span>
<span class="text-gray-400"># 📊 Database relationships</span>
<span class="text-gray-400"># 📚 API documentation</span>
<span class="text-gray-400"># ⚡ High-performance routing</span>
<span class="text-gray-400"># 🎯 Ready for production</span>`
  }
]
</script>

<template>
  <section id="examples" class="py-20 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-20">
        <h2 class="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          Why We Built Base
        </h2>
        <div class="max-w-5xl mx-auto space-y-6">
          <p class="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
            Go is <strong>incredibly powerful</strong> — fast, concurrent, and built for scale. But unlike other languages, 
            Go lacks full-featured frameworks that make development <em>effortless</em>.
          </p>
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            While Laravel gives PHP developers magic, Rails gives Ruby developers elegance, and Django gives Python developers batteries-included power, 
            Go developers have been stuck with basic HTTP routers and endless boilerplate.
          </p>
          <p class="text-xl text-blue-600 dark:text-blue-400 font-semibold">
            Base changes that. We bring the power of Go together with the developer experience you deserve.
          </p>
        </div>
        
        <!-- Feature Highlights -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">⚡</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Go's Power</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Native performance, concurrency, and type safety</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">🚀</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Framework Magic</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">Code generation, auto-relationships, zero config</p>
          </div>
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
            <div class="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">🛠️</div>
            <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Powerful CLI</h3>
            <p class="text-sm text-gray-600 dark:text-gray-300">One command to rule them all</p>
          </div>
        </div>
      </div>
      
      <div class="space-y-12">
        <div
          v-for="example in detailedExamples"
          :key="example.title"
          class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
        >
          <div class="px-6 py-4 bg-gray-100 dark:bg-gray-700 border-b border-gray-200 dark:border-gray-600">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ example.title }}
            </h3>
          </div>
          
          <div class="p-6">
            <div class="bg-gray-900 dark:bg-gray-950 rounded-lg p-6 overflow-x-auto">
              <pre class="text-sm text-gray-300"><code v-html="example.code"></code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>