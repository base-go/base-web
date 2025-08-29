<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue'

const items = ref<NavigationMenuItem[][]>([
    [
        {
            label: 'Getting Started',
            type: 'label'
        },
        {
            label: 'Installation',
            icon: 'i-lucide-cloud-download',
            description: 'Install Base CLI and get started',
            to: '/docs/installation'
        },
        {
            label: 'Quick Start',
            icon: 'i-lucide-rocket',
            description: 'Create your first project',
            to: '/docs/quick-start'
        },
        {
            label: 'Blog Tutorial',
            icon: 'i-lucide-book-open',
            description: 'Build a complete blog application',
            to: '/docs/tutorial'
        }
    ],
    [
        {
            label: 'Core Concepts',
            type: 'label',
        },
        {
            label: 'Architecture',
            icon: 'i-lucide-cpu',
            description: 'HMVC architecture and design patterns',
            to: '/docs/architecture'
        },
        {
            label: 'Directory Structure',
            icon: 'i-lucide-folder-tree',
            description: 'Project layout and file conventions',
            to: '/docs/structure'
        },
        {
            label: 'App Directory',
            icon: 'i-lucide-toy-brick',
            description: 'Business logic and application logic',
            to: '/docs/application'
        },
        {
            label: 'Configuration',
            icon: 'i-lucide-cog',
            description: 'Configuration and environment variables',
            to: '/docs/configuration'
        },
        {
            label: 'Base Helpers',
            icon: 'i-lucide-folder-tree',
            description: 'Base helpers for easing common tasks',
            to: '/docs/base-helpers'
        },
        {
            label: 'Auth & Auth',
            icon: 'i-lucide-shield-check',
            description: 'JWT, OAuth, RBAC, Social login, Permissions and security',
            to: '/docs/auth'
        },
        {
            label: 'Storage',
            icon: 'i-lucide-cloud-upload',
            description: 'Active storage management, with multiple providers and local storage',
            to: '/docs/storage'
        },
        {
            label: 'Emitter',
            icon: 'i-lucide-bell',
            description: 'Event system for module communication and event emission',
            to: '/docs/emitter'
        },
        {
            label: 'Email',
            icon: 'i-lucide-mail',
            description: 'Email service with multiple providers',
            to: '/docs/email'
        },
        {
            label: 'Validator',
            icon: 'i-lucide-mail',
            description: 'Full validation system for data validation',
            to: '/docs/validator'
        },
        {
            label: 'Logger',
            icon: 'i-lucide-mail',
            description: 'Full logging system for debugging and monitoring',
            to: '/docs/logger'
        },
        {
            label: 'Translation',
            icon: 'i-lucide-mail',
            description: 'Full translation system for multilanguage support',
            to: '/docs/translation'
        },
        {
            label: 'WebSocket',
            icon: 'i-lucide-mail',
            description: 'WebSocket for real-time communication. Built-in!',
            to: '/docs/websocket'
        },
        {
            label: 'Task Scheduler',
            icon: 'i-lucide-clock',
            description: 'Built-in task scheduling with cron and interval support',
            to: '/docs/scheduler'
        },


    ],
    [{
        label: 'CLI',
        type: 'trigger',
    },
    {
        label: 'base new',
        icon: 'i-lucide-terminal',
        description: 'Create new project',
        to: '/docs/cli/#new',
        onClick: () => scrollToSection('new')
    },
    {
        label: 'base generate',
        icon: 'i-lucide-terminal',
        description: 'Generate models, controllers, services',
        to: '/docs/cli/#generate',
        onClick: () => scrollToSection('generate')
    },
    {
        label: 'base destroy',
        icon: 'i-lucide-terminal',
        description: 'Remove modules safely',
        to: '/docs/cli/#destroy',
        onClick: () => scrollToSection('destroy')
    },
    {
        label: 'base start',
        icon: 'i-lucide-terminal',
        description: 'Start your project',
        to: '/docs/cli/#start',
        onClick: () => scrollToSection('start')
    },
    {
        label: 'base docs',
        icon: 'i-lucide-terminal',
        description: 'Generate documentation',
        to: '/docs/cli/#docs',
        onClick: () => scrollToSection('docs')
    },
    {
        label: 'base update',
        icon: 'i-lucide-terminal',
        description: 'Update your project',
        to: '/docs/cli/#update',
        onClick: () => scrollToSection('update')
    },
    {
        label: 'base upgrade',
        icon: 'i-lucide-terminal',
        description: 'Upgrade your project',
        to: '/docs/cli/#upgrade',
        onClick: () => scrollToSection('upgrade')
    },
    ],
    [
        {
            label: 'Resources',
            type: 'label'
        },
        {
            label: 'GitHub',
            icon: 'i-simple-icons-github',
            badge: 'v2.0.1',
            to: 'https://github.com/base-go/cmd',
            target: '_blank'
        },
        {
            label: 'Home',
            icon: 'i-lucide-home',
            to: '/'
        }
    ]
])

const active = ref()

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
    }
}
</script>

<template>
    <div class="sidebar-container fixed left-0 top-16 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 z-40 overflow-y-auto" style="height: calc(100vh - 4rem);">
        <div class="p-4 pb-8">
            <UNavigationMenu highlight highlight-color="primary" orientation="vertical" :items="items"
                class="w-full" :active="active" />
        </div>
    </div>
</template>
