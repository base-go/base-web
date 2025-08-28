<script setup lang="ts">
const footerSections = [
  {
    title: 'Framework',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Examples', href: '#examples' },
      { label: 'GitHub', href: 'https://github.com/base-go/cmd' },
      { label: 'Releases', href: 'https://github.com/base-go/cmd/releases' }
    ]
  },
  {
    title: 'Documentation',
    links: [
      { label: 'Getting Started', href: '#' },
      { label: 'CLI Reference', href: '#' },
      { label: 'Changelog', href: 'https://github.com/base-go/cmd/blob/main/CHANGELOG.md' },
      { label: 'API Documentation', href: '#' }
    ]
  },
  {
    title: 'Community',
    links: [
      { label: 'Issues', href: 'https://github.com/base-go/cmd/issues' },
      { label: 'Discussions', href: 'https://github.com/base-go/cmd/discussions' },
      { label: 'Discord', href: '#' },
      { label: 'Twitter', href: '#' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Tutorials', href: '#' },
      { label: 'Best Practices', href: '#' },
      { label: 'Installation Guide', href: '#' },
      { label: 'Contributing', href: 'https://github.com/base-go/cmd/blob/main/CONTRIBUTING.md' }
    ]
  }
]
</script>

<template>
  <footer class="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
        <div
          v-for="section in footerSections"
          :key="section.title"
          class="space-y-4"
        >
          <h4 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ section.title }}
          </h4>
          <ul class="space-y-2">
            <li v-for="link in section.links" :key="link.label">
              <a
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <p class="text-gray-600 dark:text-gray-400">
          &copy; 2025 Base Framework. Built with ❤️ for the Go community.
        </p>
      </div>
    </div>
  </footer>
</template>