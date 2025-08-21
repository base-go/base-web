<script setup lang="ts">
interface CodeExample {
  title: string
  code: string
}

const detailedExamples: CodeExample[] = [
  {
    title: 'Model Generation',
    code: `<span class="text-green-400"># Generate a blog post model with relationships</span>
<span class="text-blue-400">base g</span> Post title:string content:text author_id:uint category_id:uint tags:toMany:Tag

<span class="text-green-400"># Generated model automatically includes:</span>
<span class="text-green-400"># - GORM relationships (Author, Category, Tags)</span>
<span class="text-green-400"># - JSON serialization</span>
<span class="text-green-400"># - CRUD operations</span>
<span class="text-green-400"># - REST endpoints</span>
<span class="text-green-400"># - Swagger documentation</span>`
  },
  {
    title: 'Many-to-Many Relationships',
    code: `<span class="text-green-400"># Generate models with many-to-many relationships</span>
<span class="text-blue-400">base g</span> User name:string email:string roles:toMany:Role permissions:toMany:Permission

<span class="text-green-400"># Automatically creates join tables and GORM associations</span>
<span class="text-green-400"># Use GORM Association Mode for relationship management:</span>

db.Model(&user).Association("Roles").Append(&adminRole, &userRole)
db.Model(&user).Association("Permissions").Find(&permissions)`
  }
]
</script>

<template>
  <section id="examples" class="py-20 sm:py-32 bg-gray-50 dark:bg-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          See Base in Action
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          From simple commands to complex applications, Base makes development intuitive
        </p>
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