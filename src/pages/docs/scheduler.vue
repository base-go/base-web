<template>
    <DocsLayout>

        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
            <!-- Header -->
            <div class="mb-8">
                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Task Scheduler</h1>
                <p class="text-xl text-gray-600 dark:text-gray-400">
                    Built-in task scheduling system with support for interval-based and cron-based scheduling
                </p>
            </div>

            <!-- Overview -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
                <div class="prose prose-lg dark:prose-invert max-w-none">
                    <p>
                        Base Framework includes a powerful task scheduling system that allows you to run background
                        tasks at specific intervals or using cron expressions. The scheduler supports two types of
                        scheduling:
                    </p>
                    <ul>
                        <li><strong>Interval-based scheduling</strong> - Run tasks at regular intervals (daily, monthly,
                            custom intervals)</li>
                        <li><strong>Cron-based scheduling</strong> - Use cron expressions for complex scheduling
                            patterns</li>
                    </ul>
                </div>
            </section>

            <!-- Features -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Features</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-clock" class="w-6 h-6 text-blue-600" />
                                <h3 class="font-semibold">Multiple Schedule Types</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Support for daily, monthly, interval, and cron-based scheduling patterns
                        </p>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-activity" class="w-6 h-6 text-green-600" />
                                <h3 class="font-semibold">Task Management</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Enable/disable tasks, run tasks manually, and monitor execution statistics
                        </p>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-shield-check" class="w-6 h-6 text-purple-600" />
                                <h3 class="font-semibold">Error Handling</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Built-in error tracking, timeout protection, and comprehensive logging
                        </p>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-bar-chart" class="w-6 h-6 text-orange-600" />
                                <h3 class="font-semibold">Statistics</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Track run counts, error counts, last run times, and next scheduled runs
                        </p>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-globe" class="w-6 h-6 text-red-600" />
                                <h3 class="font-semibold">HTTP API</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            RESTful API endpoints for managing tasks programmatically
                        </p>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-zap" class="w-6 h-6 text-yellow-600" />
                                <h3 class="font-semibold">Concurrent Execution</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400">
                            Tasks run concurrently with proper context handling and timeout management
                        </p>
                    </UCard>
                </div>
            </section>

            <!-- Quick Start -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>

                <UCard class="mb-6">
                    <template #header>
                        <h3 class="font-semibold">1. Generate a Task with CLI</h3>
                    </template>
                    <UCard class="bg-gray-50 dark:bg-gray-800">
<pre class="text-sm overflow-x-auto"><code class="language-bash"># Generate a new scheduled task
base scheduler generate posts cleanup-old-posts
base scheduler g users send-weekly-digest

# Works with different naming conventions
base scheduler g Post publish  # Finds 'posts' module
base scheduler g posts publish # Direct match</code></pre>
                    </UCard>
                </UCard>

                <UCard class="mb-6">
                    <template #header>
                        <h3 class="font-semibold">2. Implement Your Task Logic</h3>
                    </template>
                    <UCard class="bg-gray-50 dark:bg-gray-800">
    <pre class="text-sm overflow-x-auto"><code class="language-go">// Generated task file: cleanup_old_posts_task.go
func (t *CleanupOldPostsTask) execute(ctx context.Context) error {
    t.logger.Info("Starting cleanup old posts task")

    // Check for cancellation
    select {
    case <-ctx.Done():
        return ctx.Err()
    default:
    }

    // Your task logic here
    // - Clean up old records
    // - Send notifications
    // - Generate reports
    
    t.logger.Info("cleanup old posts task completed successfully")
    return nil
}</code></pre>
                    </UCard>
                </UCard>

                <UCard>
                    <template #header>
                        <h3 class="font-semibold">3. Register and Manage Tasks</h3>
                    </template>
                    <UCard class="bg-gray-50 dark:bg-gray-800">
<pre class="text-sm overflow-x-auto"><code class="language-go">// Register in your module initialization
func (m *PostsModule) Start() error {
    cleanupTask := NewCleanupOldPostsTask(m.Logger)
    cleanupTask.RegisterTask(m.Scheduler)
    return nil
}

// Or use CLI to manage tasks
// base scheduler list --api-key=your-key
// base scheduler run cleanup-old-posts --api-key=your-key
// base scheduler enable cleanup-old-posts --api-key=your-key</code></pre>
                    </UCard>
                </UCard>
            </section>

            <!-- Schedule Types -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Schedule Types</h2>

                <div class="space-y-6">
                    <!-- Daily Schedule -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-sun" class="w-5 h-5 text-yellow-600" />
                                <h3 class="font-semibold">Daily Schedule</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Run tasks daily at a specific time.
                        </p>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">schedule := &scheduler.DailySchedule{
                        Hour: 14, // 2 PM
                        Minute: 30, // 30 minutes
                        }
                        // Runs every day at 2:30 PM</code></pre>
                        </UCard>
                    </UCard>

                    <!-- Monthly Schedule -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-calendar" class="w-5 h-5 text-blue-600" />
                                <h3 class="font-semibold">Monthly Schedule</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Run tasks monthly on a specific day and time.
                        </p>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">schedule := &scheduler.MonthlySchedule{
                        Day: 1, // 1st of the month
                        Hour: 9, // 9 AM
                        Minute: 0, // 0 minutes
                        }
                        // Runs on the 1st of each month at 9:00 AM</code></pre>
                        </UCard>
                    </UCard>

                    <!-- Interval Schedule -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-repeat" class="w-5 h-5 text-green-600" />
                                <h3 class="font-semibold">Interval Schedule</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Run tasks at regular intervals.
                        </p>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">schedule := &scheduler.IntervalSchedule{
                        Interval: 30 * time.Minute, // Every 30 minutes
                        }

                        // Other examples:
                        // 5 * time.Second // Every 5 seconds
                        // time.Hour // Every hour
                        // 24 * time.Hour // Every 24 hours</code></pre>
                        </UCard>
                    </UCard>

                    <!-- Cron Schedule -->
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-settings" class="w-5 h-5 text-purple-600" />
                                <h3 class="font-semibold">Cron Schedule</h3>
                            </div>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Use cron expressions for complex scheduling patterns.
                        </p>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">// Using CronScheduler for cron
                        expressions
                        cronTask := &scheduler.CronTask{
                        Name: "weekly-report",
                        Description: "Generate weekly reports",
                        CronExpr: "0 0 9 * * MON", // Every Monday at 9:00 AM
                        Handler: func(ctx context.Context) error {
                        // Generate reports
                        return nil
                        },
                        Enabled: true,
                        }

                        cronScheduler.RegisterTask(cronTask)</code></pre>
                        </UCard>

                        <div class="mt-4">
                            <h4 class="font-medium mb-2">Common Cron Expressions:</h4>
                            <div class="text-sm space-y-1">
                                <div class="flex justify-between">
                                    <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">0 0 * * * *</code>
                                    <span class="text-gray-600 dark:text-gray-400">Every hour</span>
                                </div>
                                <div class="flex justify-between">
                                    <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">0 0 0 * * *</code>
                                    <span class="text-gray-600 dark:text-gray-400">Every day at midnight</span>
                                </div>
                                <div class="flex justify-between">
                                    <code
                                        class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">0 0 9 * * MON-FRI</code>
                                    <span class="text-gray-600 dark:text-gray-400">Weekdays at 9 AM</span>
                                </div>
                                <div class="flex justify-between">
                                    <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">0 */15 * * * *</code>
                                    <span class="text-gray-600 dark:text-gray-400">Every 15 minutes</span>
                                </div>
                            </div>
                        </div>
                    </UCard>
                </div>
            </section>

            <!-- Task Management -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Task Management</h2>

                <div class="space-y-6">
                    <!-- Enable/Disable Tasks -->
                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Enable/Disable Tasks</h3>
                        </template>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">// Enable a task
                        err := scheduler.EnableTask("task-name")

                        // Disable a task
                        err := scheduler.DisableTask("task-name")</code></pre>
                        </UCard>
                    </UCard>

                    <!-- Run Tasks Manually -->
                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Run Tasks Manually</h3>
                        </template>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">// Run a task immediately (bypasses
                        schedule)
                        err := scheduler.RunTaskNow("task-name")
                        if err != nil {
                        log.Error("Failed to run task", err)
                        }</code></pre>
                        </UCard>
                    </UCard>

                    <!-- Get Task Information -->
                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Get Task Information</h3>
                        </template>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">// Get a specific task
                        task, exists := scheduler.GetTask("task-name")
                        if exists {
                        fmt.Printf("Task: %s, Enabled: %t\n", task.Name, task.Enabled)
                        }

                        // Get all tasks
                        tasks := scheduler.GetAllTasks()
                        for name, task := range tasks {
                        fmt.Printf("Task: %s, Run Count: %d\n", name, task.RunCount)
                        }</code></pre>
                        </UCard>
                    </UCard>
                </div>
            </section>

            <!-- CLI Management -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">CLI Management</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                    Use the Base CLI to generate and manage scheduled tasks from the command line.
                </p>
                
                <div class="space-y-6">
                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Task Generation</h3>
                        </template>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-bash"># Generate task in specific module
base scheduler generate posts cleanup-old-posts
base scheduler g users send-weekly-digest
base scheduler g core backup-database

# Smart module detection (case-insensitive, pluralization)
base scheduler g Post publish    # Finds 'posts' module
base scheduler g User reminder   # Finds 'users' module</code></pre>
                        </UCard>
                    </UCard>

                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Task Management Commands</h3>
                        </template>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-bash"># List all tasks
base scheduler list --api-key=your-key

# Run task immediately
base scheduler run cleanup-old-posts --api-key=your-key

# Enable/disable tasks
base scheduler enable cleanup-old-posts --api-key=your-key
base scheduler disable cleanup-old-posts --api-key=your-key

# Get scheduler status
base scheduler status --api-key=your-key</code></pre>
                        </UCard>
                    </UCard>

                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Generated Task Structure</h3>
                        </template>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Each generated task includes a complete, ready-to-use structure:
                        </p>
                        <ul class="text-sm space-y-2 mb-4">
                            <li>• <strong>Task struct</strong> with logger integration</li>
                            <li>• <strong>Constructor function</strong> for dependency injection</li>
                            <li>• <strong>RegisterTask method</strong> for interval-based scheduling</li>
                            <li>• <strong>RegisterCronTask method</strong> for cron-based scheduling</li>
                            <li>• <strong>Execute function</strong> with context cancellation support</li>
                            <li>• <strong>GetTaskInfo method</strong> for metadata</li>
                        </ul>
                    </UCard>
                </div>
            </section>

            <!-- HTTP API -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">HTTP API</h2>
                <p class="text-gray-600 dark:text-gray-400 mb-6">
                    The scheduler provides RESTful API endpoints for managing tasks programmatically.
                </p>

                <div class="space-y-6">
                    <!-- API Endpoints Table -->
                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">Available Endpoints</h3>
                        </template>
                        <div class="overflow-x-auto">
                            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead class="bg-gray-50 dark:bg-gray-800">
                                    <tr>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Method</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Endpoint</th>
                                        <th
                                            class="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                            Description</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-green-600">GET</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/status</td>
                                        <td class="px-6 py-4 text-sm">Get scheduler status and statistics</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-green-600">GET</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/tasks</td>
                                        <td class="px-6 py-4 text-sm">List all registered tasks</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-green-600">GET</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/tasks/{name}</td>
                                        <td class="px-6 py-4 text-sm">Get specific task details</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-blue-600">POST</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/tasks/{name}/run</td>
                                        <td class="px-6 py-4 text-sm">Run a task immediately</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-orange-600">PUT</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/tasks/{name}/enable</td>
                                        <td class="px-6 py-4 text-sm">Enable a task</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-orange-600">PUT</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/tasks/{name}/disable</td>
                                        <td class="px-6 py-4 text-sm">Disable a task</td>
                                    </tr>
                                    <tr>
                                        <td class="px-6 py-4 text-sm font-mono text-green-600">GET</td>
                                        <td class="px-6 py-4 text-sm font-mono">/api/scheduler/stats</td>
                                        <td class="px-6 py-4 text-sm">Get detailed scheduler statistics</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </UCard>

                    <!-- API Examples -->
                    <UCard>
                        <template #header>
                            <h3 class="font-semibold">API Usage Examples</h3>
                        </template>
                        <div class="space-y-4">
                            <div>
                                <h4 class="font-medium mb-2">Get All Tasks</h4>
                                <UCard class="bg-gray-50 dark:bg-gray-800">
                                    <pre class="text-sm overflow-x-auto"><code class="language-bash">curl -X GET
                                "http://localhost:8100/api/scheduler/tasks" \
                                -H "X-Api-Key: your-api-key"</code></pre>
                                </UCard>
                            </div>

                            <div>
                                <h4 class="font-medium mb-2">Run Task Immediately</h4>
                                <UCard class="bg-gray-50 dark:bg-gray-800">
                                    <pre class="text-sm overflow-x-auto"><code class="language-bash">curl -X POST
                                "http://localhost:8100/api/scheduler/tasks/daily-cleanup/run" \
                                -H "X-Api-Key: your-api-key"</code></pre>
                                </UCard>
                            </div>

                            <div>
                                <h4 class="font-medium mb-2">Enable/Disable Task</h4>
                                <UCard class="bg-gray-50 dark:bg-gray-800">
                                    <pre class="text-sm overflow-x-auto"><code class="language-bash"># Enable task
                                curl -X PUT "http://localhost:8100/api/scheduler/tasks/daily-cleanup/enable" \
                                -H "X-Api-Key: your-api-key"

                                # Disable task
                                curl -X PUT "http://localhost:8100/api/scheduler/tasks/daily-cleanup/disable" \
                                -H "X-Api-Key: your-api-key"</code></pre>
                                </UCard>
                            </div>
                        </div>
                    </UCard>
                </div>
            </section>

            <!-- Best Practices -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>

                <div class="space-y-6">
                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-lightbulb" class="w-5 h-5 text-yellow-600" />
                                <h3 class="font-semibold">Task Design</h3>
                            </div>
                        </template>
                        <ul class="text-sm space-y-2">
                            <li>• Keep tasks idempotent - they should be safe to run multiple times</li>
                            <li>• Use meaningful task names and descriptions</li>
                            <li>• Handle errors gracefully and log important information</li>
                            <li>• Avoid long-running tasks (use timeouts)</li>
                        </ul>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-shield" class="w-5 h-5 text-blue-600" />
                                <h3 class="font-semibold">Error Handling</h3>
                            </div>
                        </template>
                        <UCard class="bg-gray-50 dark:bg-gray-800">
                            <pre class="text-sm overflow-x-auto"><code class="language-go">Handler: func(ctx context.Context) error
                        {
                        // Check if context is cancelled
                        select {
                        case <-ctx.Done(): return ctx.Err() default: } // Your task logic with proper error handling if
                            err :=doSomething(); err !=nil { log.Error("Task failed", "error" , err) return err } return
                            nil },</code></pre>
                        </UCard>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-monitor" class="w-5 h-5 text-green-600" />
                                <h3 class="font-semibold">Monitoring</h3>
                            </div>
                        </template>
                        <ul class="text-sm space-y-2">
                            <li>• Monitor task execution statistics regularly</li>
                            <li>• Set up alerts for tasks with high error rates</li>
                            <li>• Use the HTTP API to integrate with monitoring systems</li>
                            <li>• Check logs for task execution details</li>
                        </ul>
                    </UCard>

                    <UCard>
                        <template #header>
                            <div class="flex items-center gap-3">
                                <Icon name="i-lucide-zap" class="w-5 h-5 text-purple-600" />
                                <h3 class="font-semibold">Performance</h3>
                            </div>
                        </template>
                        <ul class="text-sm space-y-2">
                            <li>• Tasks run concurrently, so design for thread safety</li>
                            <li>• Use appropriate check intervals for the scheduler</li>
                            <li>• Consider using cron scheduler for complex patterns</li>
                            <li>• Disable tasks that are no longer needed</li>
                        </ul>
                    </UCard>
                </div>
            </section>

            <!-- Example Implementation -->
            <section class="mb-12">
                <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Complete Example</h2>

                <UCard>
                    <template #header>
                        <h3 class="font-semibold">Email Notification Service with Scheduled Tasks</h3>
                    </template>
                    <UCard class="bg-gray-50 dark:bg-gray-800">
                        <pre class="text-sm overflow-x-auto"><code class="language-go">package main

                    import (
                    "context"
                    "fmt"
                    "time"

                    "base/core/scheduler"
                    "base/core/logger"
                    )

                    type EmailService struct {
                    scheduler *scheduler.Scheduler
                    logger logger.Logger
                    }

                    func NewEmailService(s *scheduler.Scheduler, log logger.Logger) *EmailService {
                    service := &EmailService{
                    scheduler: s,
                    logger: log,
                    }

                    // Register tasks
                    service.registerTasks()

                    return service
                    }

                    func (e *EmailService) registerTasks() {
                    // Daily digest email
                    dailyDigest := &scheduler.Task{
                    Name: "daily-digest",
                    Description: "Send daily digest emails to users",
                    Schedule: &scheduler.DailySchedule{Hour: 8, Minute: 0}, // 8:00 AM
                    Handler: e.sendDailyDigest,
                    Enabled: true,
                    }

                    // Weekly report
                    weeklyReport := &scheduler.Task{
                    Name: "weekly-report",
                    Description: "Generate and send weekly reports",
                    Schedule: &scheduler.DailySchedule{Hour: 9, Minute: 0}, // 9:00 AM on Mondays
                    Handler: e.sendWeeklyReport,
                    Enabled: true,
                    }

                    // Cleanup old emails every 6 hours
                    cleanup := &scheduler.Task{
                    Name: "email-cleanup",
                    Description: "Clean up old email logs",
                    Schedule: &scheduler.IntervalSchedule{Interval: 6 * time.Hour},
                    Handler: e.cleanupOldEmails,
                    Enabled: true,
                    }

                    // Register all tasks
                    e.scheduler.RegisterTask(dailyDigest)
                    e.scheduler.RegisterTask(weeklyReport)
                    e.scheduler.RegisterTask(cleanup)
                    }

                    func (e *EmailService) sendDailyDigest(ctx context.Context) error {
                    e.logger.Info("Sending daily digest emails...")

                    // Check for cancellation
                    select {
                    case <-ctx.Done(): return ctx.Err() default: } // Your email sending logic here // This is just a
                        simulation time.Sleep(2 * time.Second) e.logger.Info("Daily digest emails sent successfully")
                        return nil } func (e *EmailService) sendWeeklyReport(ctx context.Context) error { // Only run on
                        Mondays if time.Now().Weekday() !=time.Monday { return nil } e.logger.Info("Generating weekly
                        reports...") select { case <-ctx.Done(): return ctx.Err() default: } // Generate and send
                        reports time.Sleep(5 * time.Second) e.logger.Info("Weekly reports sent successfully") return nil
                        } func (e *EmailService) cleanupOldEmails(ctx context.Context) error { e.logger.Info("Cleaning
                        up old email logs...") select { case <-ctx.Done(): return ctx.Err() default: } // Cleanup logic
                        time.Sleep(1 * time.Second) e.logger.Info("Email cleanup completed") return nil }</code></pre>
                    </UCard>
                </UCard>
            </section>
        </div>
    </DocsLayout>
</template>

<script setup>
// Page metadata
import DocsLayout from '@/layouts/DocsLayout.vue'
 
</script>
