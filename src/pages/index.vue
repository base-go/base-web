<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import WhySection from '@/components/WhySection.vue'
import StatsSection from '@/components/StatsSection.vue'
import CTASection from '@/components/CTASection.vue'
import TheFooter from '@/components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
    <TheHeader />
    
    <main>
      <HeroSection />
      <FeaturesSection />
      <WhySection />
      <StatsSection />
      <CTASection />
    </main>
    
    <TheFooter />
  </div>
</template>