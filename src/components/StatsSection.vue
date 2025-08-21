<script setup lang="ts">
interface Stat {
  value: string
  label: string
}

const stats: Stat[] = [
  { value: '< 1min', label: 'To first API' },
  { value: '1', label: 'Dependency' },
  { value: '∞', label: 'Possibilities' },
  { value: 'cli', label: 'Powered' },
]
</script>

<template>
  <section class="py-20 sm:py-32 bg-primary-600 dark:bg-primary-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="text-center"
        >
          <div class="text-4xl sm:text-5xl font-bold text-white mb-2">
            {{ stat.value }}
          </div>
          <div class="text-lg text-primary-100">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>