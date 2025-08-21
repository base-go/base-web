<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Validator</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Powerful request validation system with custom error messages and struct tag validation
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>🔍 Comprehensive Validation</template>
          <template #description>
            Base Framework's validator wraps go-playground/validator v10 with enhanced error messages, automatic JSON field name mapping, and seamless integration with request handling. It provides over 100+ built-in validation rules and supports custom validators.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Struct Validation</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Validate entire structs using struct tags with automatic field name resolution.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-message-circle" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Custom Messages</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Automatically generated user-friendly error messages with field-specific context.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-code" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Custom Rules</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Create and register custom validation rules for domain-specific validation logic.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Quick Start -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Quick Start</h2>
        
        <UCard>
          <template #header>
            <div class="flex items-center space-x-2">
              <UIcon name="i-lucide-play" class="h-5 w-5 text-green-500" />
              <span class="font-semibold">Basic Usage</span>
            </div>
          </template>
          
          <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-gray-400">Basic Validation Example</span>
              <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package main

import (
    &quot;base/core/validator&quot;
)

type UserCreateRequest struct {
    Name     string \`json:&quot;name&quot; validate:&quot;required,min=2,max=50&quot;\`
    Email    string \`json:&quot;email&quot; validate:&quot;required,email&quot;\`
    Age      int    \`json:&quot;age&quot; validate:&quot;gte=18,lte=120&quot;\`
    Password string \`json:&quot;password&quot; validate:&quot;required,min=8&quot;\`
}

func validateUser() {
    req := &UserCreateRequest{
        Name:     &quot;&quot;,           // Invalid - required
        Email:    &quot;invalid&quot;,   // Invalid - not email format
        Age:      15,          // Invalid - too young
        Password: &quot;123&quot;,       // Invalid - too short
    }
    
    // Validate using Base validator
    if errors := validator.Validate(req); errors != nil {
        // Handle validation errors
        for _, err := range errors {
            fmt.Printf(&quot;%s: %s\n&quot;, err.Field, err.Message)
        }
    }
}`, $event)">
                Copy
              </button>
            </div>
            <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> main

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"base/core/validator"</span>
)

<span class="text-blue-400">type</span> <span class="text-yellow-400">UserCreateRequest</span> <span class="text-blue-400">struct</span> {
    Name     <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"name" validate:"required,min=2,max=50"`</span>
    Email    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"email" validate:"required,email"`</span>
    Age      <span class="text-purple-400">int</span>    <span class="text-gray-400">`json:"age" validate:"gte=18,lte=120"`</span>
    Password <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"password" validate:"required,min=8"`</span>
}

<span class="text-blue-400">func</span> <span class="text-yellow-400">validateUser</span>() {
    req := &UserCreateRequest{
        Name:     <span class="text-green-400">""</span>,           <span class="text-green-400">// Invalid - required</span>
        Email:    <span class="text-green-400">"invalid"</span>,   <span class="text-green-400">// Invalid - not email format</span>
        Age:      <span class="text-purple-400">15</span>,          <span class="text-green-400">// Invalid - too young</span>
        Password: <span class="text-green-400">"123"</span>,       <span class="text-green-400">// Invalid - too short</span>
    }
    
    <span class="text-green-400">// Validate using Base validator</span>
    <span class="text-blue-400">if</span> errors := validator.Validate(req); errors != <span class="text-purple-400">nil</span> {
        <span class="text-green-400">// Handle validation errors</span>
        <span class="text-blue-400">for</span> _, err := <span class="text-blue-400">range</span> errors {
            fmt.Printf(<span class="text-green-400">"%s: %s\n"</span>, err.Field, err.Message)
        }
    }
}</code></pre>
          </div>
        </UCard>
      </section>

      <!-- Built-in Validation Rules -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Built-in Validation Rules</h2>
        
        <div class="space-y-6">
          <p class="text-gray-600 dark:text-gray-300">
            Base Framework includes over 100+ validation rules from go-playground/validator. Here are the most commonly used ones:
          </p>

          <!-- Required & Optional -->
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-asterisk" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Required & Optional</span>
              </div>
            </template>
            
            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Basic Rules</h4>
                <div class="space-y-2 text-sm">
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">required</code> - Field cannot be empty</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">omitempty</code> - Skip validation if empty</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">required_if</code> - Required based on other field</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">required_unless</code> - Required unless other field matches</div>
                </div>
              </div>
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Examples</h4>
                <div class="text-sm text-gray-600 dark:text-gray-300">
                  <div><code>`validate:"required"`</code></div>
                  <div><code>`validate:"omitempty,email"`</code></div>
                  <div><code>`validate:"required_if=Type user"`</code></div>
                  <div><code>`validate:"required_unless=Premium true"`</code></div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- String Validation -->
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-type" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">String Validation</span>
              </div>
            </template>
            
            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Length & Format</h4>
                <div class="space-y-2 text-sm">
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">min=n</code> - Minimum length</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">max=n</code> - Maximum length</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">len=n</code> - Exact length</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">alpha</code> - Letters only</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">alphanum</code> - Letters and numbers</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">numeric</code> - Numbers only</div>
                </div>
              </div>
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Pattern Matching</h4>
                <div class="space-y-2 text-sm">
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">email</code> - Valid email format</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">url</code> - Valid URL format</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">uuid</code> - Valid UUID format</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">contains=text</code> - Contains substring</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">startswith=text</code> - Starts with text</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">endswith=text</code> - Ends with text</div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Numeric Validation -->
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-hash" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Numeric Validation</span>
              </div>
            </template>
            
            <div class="grid gap-4 md:grid-cols-2">
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Comparison</h4>
                <div class="space-y-2 text-sm">
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">gt=n</code> - Greater than</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">gte=n</code> - Greater than or equal</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">lt=n</code> - Less than</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">lte=n</code> - Less than or equal</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">eq=n</code> - Equal to</div>
                  <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">ne=n</code> - Not equal to</div>
                </div>
              </div>
              <div>
                <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Examples</h4>
                <div class="text-sm text-gray-600 dark:text-gray-300">
                  <div><code>`validate:"gte=18,lte=120"`</code></div>
                  <div><code>`validate:"gt=0"`</code></div>
                  <div><code>`validate:"min=1,max=100"`</code></div>
                  <div><code>`validate:"oneof=1 2 3 4 5"`</code></div>
                </div>
              </div>
            </div>
          </UCard>

          <!-- Collection Validation -->
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">Collections & Arrays</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Array/Slice Rules</h4>
                  <div class="space-y-2 text-sm">
                    <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">dive</code> - Validate each element</div>
                    <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">unique</code> - All elements unique</div>
                    <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">min=n</code> - Minimum array length</div>
                    <div><code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-purple-600 dark:text-purple-400">max=n</code> - Maximum array length</div>
                  </div>
                </div>
                <div>
                  <h4 class="font-medium text-gray-700 dark:text-gray-200 mb-2">Example Usage</h4>
                  <div class="text-sm text-gray-600 dark:text-gray-300">
                    <div><code>`validate:"required,dive,email"`</code></div>
                    <div><code>`validate:"min=1,max=10,dive,gt=0"`</code></div>
                    <div><code>`validate:"unique"`</code></div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Request Validation -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Request Validation in Controllers</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-server" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Model Request Structure</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">models/user.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package models

import (
    &quot;time&quot;
    &quot;gorm.io/gorm&quot;
)

// User model
type User struct {
    ID        uint           \`json:&quot;id&quot; gorm:&quot;primarykey&quot;\`
    CreatedAt time.Time      \`json:&quot;created_at&quot;\`
    UpdatedAt time.Time      \`json:&quot;updated_at&quot;\`
    DeletedAt gorm.DeletedAt \`json:&quot;deleted_at&quot; gorm:&quot;index&quot;\`
    Name      string         \`json:&quot;name&quot; gorm:&quot;not null&quot;\`
    Email     string         \`json:&quot;email&quot; gorm:&quot;uniqueIndex&quot;\`
    Age       int            \`json:&quot;age&quot;\`
    Role      string         \`json:&quot;role&quot; gorm:&quot;default:user&quot;\`
}

// CreateUserRequest represents the request payload for creating a user
type CreateUserRequest struct {
    Name     string \`json:&quot;name&quot; validate:&quot;required,min=2,max=50&quot;\`
    Email    string \`json:&quot;email&quot; validate:&quot;required,email&quot;\`
    Age      int    \`json:&quot;age&quot; validate:&quot;gte=18,lte=120&quot;\`
    Role     string \`json:&quot;role&quot; validate:&quot;omitempty,oneof=user admin moderator&quot;\`
    Password string \`json:&quot;password&quot; validate:&quot;required,min=8,containsany=!@#$%^&amp;*&quot;\`
}

// UpdateUserRequest represents the request payload for updating a user
type UpdateUserRequest struct {
    Name string \`json:&quot;name&quot; validate:&quot;omitempty,min=2,max=50&quot;\`
    Age  *int   \`json:&quot;age&quot; validate:&quot;omitempty,gte=18,lte=120&quot;\`
    Role string \`json:&quot;role&quot; validate:&quot;omitempty,oneof=user admin moderator&quot;\`
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> models

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"time"</span>
    <span class="text-green-400">"gorm.io/gorm"</span>
)

<span class="text-green-400">// User model</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">User</span> <span class="text-blue-400">struct</span> {
    ID        <span class="text-purple-400">uint</span>           <span class="text-gray-400">`json:"id" gorm:"primarykey"`</span>
    CreatedAt time.Time      <span class="text-gray-400">`json:"created_at"`</span>
    UpdatedAt time.Time      <span class="text-gray-400">`json:"updated_at"`</span>
    DeletedAt gorm.DeletedAt <span class="text-gray-400">`json:"deleted_at" gorm:"index"`</span>
    Name      <span class="text-purple-400">string</span>         <span class="text-gray-400">`json:"name" gorm:"not null"`</span>
    Email     <span class="text-purple-400">string</span>         <span class="text-gray-400">`json:"email" gorm:"uniqueIndex"`</span>
    Age       <span class="text-purple-400">int</span>            <span class="text-gray-400">`json:"age"`</span>
    Role      <span class="text-purple-400">string</span>         <span class="text-gray-400">`json:"role" gorm:"default:user"`</span>
}

<span class="text-green-400">// CreateUserRequest represents the request payload for creating a user</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">CreateUserRequest</span> <span class="text-blue-400">struct</span> {
    Name     <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"name" validate:"required,min=2,max=50"`</span>
    Email    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"email" validate:"required,email"`</span>
    Age      <span class="text-purple-400">int</span>    <span class="text-gray-400">`json:"age" validate:"gte=18,lte=120"`</span>
    Role     <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"role" validate:"omitempty,oneof=user admin moderator"`</span>
    Password <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"password" validate:"required,min=8,containsany=!@#$%^&*"`</span>
}

<span class="text-green-400">// UpdateUserRequest represents the request payload for updating a user</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">UpdateUserRequest</span> <span class="text-blue-400">struct</span> {
    Name <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"name" validate:"omitempty,min=2,max=50"`</span>
    Age  *<span class="text-purple-400">int</span>   <span class="text-gray-400">`json:"age" validate:"omitempty,gte=18,lte=120"`</span>
    Role <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"role" validate:"omitempty,oneof=user admin moderator"`</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-check-square" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Controller Validation</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">user/controller.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package user

import (
    &quot;net/http&quot;
    
    &quot;base/app/models&quot;
    &quot;base/core/router&quot;
    &quot;base/core/types&quot;
    &quot;base/core/validator&quot;
)

func (c *UserController) Create(ctx *router.Context) error {
    var req models.CreateUserRequest
    
    // Bind JSON request
    if err := ctx.ShouldBindJSON(&amp;req); err != nil {
        return ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error:   &quot;Invalid request format&quot;,
            Success: false,
            Details: err.Error(),
        })
    }
    
    // Validate request using Base validator
    if validationErrors := validator.Validate(&amp;req); validationErrors != nil {
        return ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error:   &quot;Validation failed&quot;,
            Success: false,
            Details: validationErrors,
        })
    }
    
    // Create user through service
    user, err := c.Service.Create(&amp;req)
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, types.ErrorResponse{
            Error:   &quot;Failed to create user&quot;,
            Success: false,
            Details: err.Error(),
        })
    }
    
    return ctx.JSON(http.StatusCreated, types.SuccessResponse{
        Message: &quot;User created successfully&quot;,
        Success: true,
        Data:    user.ToResponse(),
    })
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> user

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"net/http"</span>
    
    <span class="text-green-400">"base/app/models"</span>
    <span class="text-green-400">"base/core/router"</span>
    <span class="text-green-400">"base/core/types"</span>
    <span class="text-green-400">"base/core/validator"</span>
)

<span class="text-blue-400">func</span> (c *UserController) <span class="text-yellow-400">Create</span>(ctx *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">var</span> req models.CreateUserRequest
    
    <span class="text-green-400">// Bind JSON request</span>
    <span class="text-blue-400">if</span> err := ctx.ShouldBindJSON(&req); err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error:   <span class="text-green-400">"Invalid request format"</span>,
            Success: <span class="text-purple-400">false</span>,
            Details: err.Error(),
        })
    }
    
    <span class="text-green-400">// Validate request using Base validator</span>
    <span class="text-blue-400">if</span> validationErrors := validator.Validate(&req); validationErrors != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error:   <span class="text-green-400">"Validation failed"</span>,
            Success: <span class="text-purple-400">false</span>,
            Details: validationErrors,
        })
    }
    
    <span class="text-green-400">// Create user through service</span>
    user, err := c.Service.Create(&req)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(http.StatusInternalServerError, types.ErrorResponse{
            Error:   <span class="text-green-400">"Failed to create user"</span>,
            Success: <span class="text-purple-400">false</span>,
            Details: err.Error(),
        })
    }
    
    <span class="text-blue-400">return</span> ctx.JSON(http.StatusCreated, types.SuccessResponse{
        Message: <span class="text-green-400">"User created successfully"</span>,
        Success: <span class="text-purple-400">true</span>,
        Data:    user.ToResponse(),
    })
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Custom Validation Rules -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Custom Validation Rules</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-settings-2" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Creating Custom Validators</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Custom Validator Example</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package validators

import (
    &quot;regexp&quot;
    &quot;strings&quot;
    
    &quot;base/core/validator&quot;
    &quot;github.com/go-playground/validator/v10&quot;
)

// Init registers all custom validators
func Init() {
    v := validator.New()
    
    // Register custom validators
    v.RegisterValidation(&quot;username&quot;, validateUsername)
    v.RegisterValidation(&quot;strong_password&quot;, validateStrongPassword)
    v.RegisterValidation(&quot;phone&quot;, validatePhone)
    v.RegisterValidation(&quot;slug&quot;, validateSlug)
}

// validateUsername checks if username is valid (alphanumeric, underscore, hyphen)
func validateUsername(fl validator.FieldLevel) bool {
    username := fl.Field().String()
    if len(username) &lt; 3 || len(username) &gt; 20 {
        return false
    }
    
    // Only allow alphanumeric, underscore, and hyphen
    matched, _ := regexp.MatchString(&quot;^[a-zA-Z0-9_-]+$&quot;, username)
    return matched
}

// validateStrongPassword checks password complexity
func validateStrongPassword(fl validator.FieldLevel) bool {
    password := fl.Field().String()
    
    // At least 8 characters
    if len(password) &lt; 8 {
        return false
    }
    
    // Must contain uppercase, lowercase, number, and special character
    hasUpper, _ := regexp.MatchString(&quot;[A-Z]&quot;, password)
    hasLower, _ := regexp.MatchString(&quot;[a-z]&quot;, password)
    hasNumber, _ := regexp.MatchString(&quot;[0-9]&quot;, password)
    hasSpecial, _ := regexp.MatchString(&quot;[!@#$%^&amp;*(),.?\\&quot;:{}|&lt;&gt;]&quot;, password)
    
    return hasUpper &amp;&amp; hasLower &amp;&amp; hasNumber &amp;&amp; hasSpecial
}

// validatePhone validates phone number format
func validatePhone(fl validator.FieldLevel) bool {
    phone := fl.Field().String()
    // Simple international phone validation
    matched, _ := regexp.MatchString(&quot;^\\+?[1-9]\\d{1,14}$&quot;, phone)
    return matched
}

// validateSlug validates URL-friendly slug format
func validateSlug(fl validator.FieldLevel) bool {
    slug := fl.Field().String()
    if len(slug) == 0 {
        return false
    }
    
    // Lowercase letters, numbers, and hyphens only
    matched, _ := regexp.MatchString(&quot;^[a-z0-9-]+$&quot;, slug)
    if !matched {
        return false
    }
    
    // Cannot start or end with hyphen
    return !strings.HasPrefix(slug, &quot;-&quot;) &amp;&amp; !strings.HasSuffix(slug, &quot;-&quot;)
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> validators

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"regexp"</span>
    <span class="text-green-400">"strings"</span>
    
    <span class="text-green-400">"base/core/validator"</span>
    <span class="text-green-400">"github.com/go-playground/validator/v10"</span>
)

<span class="text-green-400">// Init registers all custom validators</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">Init</span>() {
    v := validator.New()
    
    <span class="text-green-400">// Register custom validators</span>
    v.RegisterValidation(<span class="text-green-400">"username"</span>, validateUsername)
    v.RegisterValidation(<span class="text-green-400">"strong_password"</span>, validateStrongPassword)
    v.RegisterValidation(<span class="text-green-400">"phone"</span>, validatePhone)
    v.RegisterValidation(<span class="text-green-400">"slug"</span>, validateSlug)
}

<span class="text-green-400">// validateUsername checks if username is valid (alphanumeric, underscore, hyphen)</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">validateUsername</span>(fl validator.FieldLevel) <span class="text-purple-400">bool</span> {
    username := fl.Field().String()
    <span class="text-blue-400">if</span> <span class="text-yellow-400">len</span>(username) < <span class="text-purple-400">3</span> || <span class="text-yellow-400">len</span>(username) > <span class="text-purple-400">20</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">false</span>
    }
    
    <span class="text-green-400">// Only allow alphanumeric, underscore, and hyphen</span>
    matched, _ := regexp.MatchString(<span class="text-green-400">"^[a-zA-Z0-9_-]+$"</span>, username)
    <span class="text-blue-400">return</span> matched
}

<span class="text-green-400">// validateStrongPassword checks password complexity</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">validateStrongPassword</span>(fl validator.FieldLevel) <span class="text-purple-400">bool</span> {
    password := fl.Field().String()
    
    <span class="text-green-400">// At least 8 characters</span>
    <span class="text-blue-400">if</span> <span class="text-yellow-400">len</span>(password) < <span class="text-purple-400">8</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">false</span>
    }
    
    <span class="text-green-400">// Must contain uppercase, lowercase, number, and special character</span>
    hasUpper, _ := regexp.MatchString(<span class="text-green-400">"[A-Z]"</span>, password)
    hasLower, _ := regexp.MatchString(<span class="text-green-400">"[a-z]"</span>, password)
    hasNumber, _ := regexp.MatchString(<span class="text-green-400">"[0-9]"</span>, password)
    hasSpecial, _ := regexp.MatchString(<span class="text-green-400">"[!@#$%^&*(),.?\":{}|<>]"</span>, password)
    
    <span class="text-blue-400">return</span> hasUpper && hasLower && hasNumber && hasSpecial
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-tag" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Using Custom Validators</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Applying Custom Validation Tags</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type UserRegistrationRequest struct {
    Username string \`json:&quot;username&quot; validate:&quot;required,username&quot;\`
    Email    string \`json:&quot;email&quot; validate:&quot;required,email&quot;\`
    Phone    string \`json:&quot;phone&quot; validate:&quot;omitempty,phone&quot;\`
    Password string \`json:&quot;password&quot; validate:&quot;required,strong_password&quot;\`
}

type BlogPostRequest struct {
    Title   string \`json:&quot;title&quot; validate:&quot;required,min=3,max=200&quot;\`
    Slug    string \`json:&quot;slug&quot; validate:&quot;required,slug&quot;\`
    Content string \`json:&quot;content&quot; validate:&quot;required,min=10&quot;\`
    Tags    []string \`json:&quot;tags&quot; validate:&quot;omitempty,dive,min=2,max=20&quot;\`
}

// Initialize validators in your main.go or init function
func init() {
    validators.Init()
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">UserRegistrationRequest</span> <span class="text-blue-400">struct</span> {
    Username <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"username" validate:"required,username"`</span>
    Email    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"email" validate:"required,email"`</span>
    Phone    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"phone" validate:"omitempty,phone"`</span>
    Password <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"password" validate:"required,strong_password"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">BlogPostRequest</span> <span class="text-blue-400">struct</span> {
    Title   <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"title" validate:"required,min=3,max=200"`</span>
    Slug    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"slug" validate:"required,slug"`</span>
    Content <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"content" validate:"required,min=10"`</span>
    Tags    []<span class="text-purple-400">string</span> <span class="text-gray-400">`json:"tags" validate:"omitempty,dive,min=2,max=20"`</span>
}

<span class="text-green-400">// Initialize validators in your main.go or init function</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">init</span>() {
    validators.Init()
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Error Handling -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Error Handling & Messages</h2>
        
        <div class="space-y-6">
          <UAlert color="amber" variant="soft" class="mb-6">
            <template #title>🎯 User-Friendly Messages</template>
            <template #description>
              Base Framework automatically generates user-friendly error messages from validation tags. Field names use JSON tag names for consistency with API responses.
            </template>
          </UAlert>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-alert-circle" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Validation Error Structure</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Error Response Example</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`{
  &quot;error&quot;: &quot;Validation failed&quot;,
  &quot;success&quot;: false,
  &quot;details&quot;: [
    {
      &quot;field&quot;: &quot;name&quot;,
      &quot;tag&quot;: &quot;required&quot;,
      &quot;value&quot;: &quot;&quot;,
      &quot;message&quot;: &quot;name is required&quot;
    },
    {
      &quot;field&quot;: &quot;email&quot;,
      &quot;tag&quot;: &quot;email&quot;,
      &quot;value&quot;: &quot;invalid-email&quot;,
      &quot;message&quot;: &quot;email must be a valid email address&quot;
    },
    {
      &quot;field&quot;: &quot;age&quot;,
      &quot;tag&quot;: &quot;gte&quot;,
      &quot;value&quot;: &quot;15&quot;,
      &quot;message&quot;: &quot;age must be greater than or equal to 18&quot;
    },
    {
      &quot;field&quot;: &quot;password&quot;,
      &quot;tag&quot;: &quot;min&quot;,
      &quot;value&quot;: &quot;123&quot;,
      &quot;message&quot;: &quot;password must be at least 8 characters long&quot;
    }
  ]
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code>{
  <span class="text-blue-400">"error"</span>: <span class="text-green-400">"Validation failed"</span>,
  <span class="text-blue-400">"success"</span>: <span class="text-purple-400">false</span>,
  <span class="text-blue-400">"details"</span>: [
    {
      <span class="text-blue-400">"field"</span>: <span class="text-green-400">"name"</span>,
      <span class="text-blue-400">"tag"</span>: <span class="text-green-400">"required"</span>,
      <span class="text-blue-400">"value"</span>: <span class="text-green-400">""</span>,
      <span class="text-blue-400">"message"</span>: <span class="text-green-400">"name is required"</span>
    },
    {
      <span class="text-blue-400">"field"</span>: <span class="text-green-400">"email"</span>,
      <span class="text-blue-400">"tag"</span>: <span class="text-green-400">"email"</span>,
      <span class="text-blue-400">"value"</span>: <span class="text-green-400">"invalid-email"</span>,
      <span class="text-blue-400">"message"</span>: <span class="text-green-400">"email must be a valid email address"</span>
    },
    {
      <span class="text-blue-400">"field"</span>: <span class="text-green-400">"age"</span>,
      <span class="text-blue-400">"tag"</span>: <span class="text-green-400">"gte"</span>,
      <span class="text-blue-400">"value"</span>: <span class="text-green-400">"15"</span>,
      <span class="text-blue-400">"message"</span>: <span class="text-green-400">"age must be greater than or equal to 18"</span>
    },
    {
      <span class="text-blue-400">"field"</span>: <span class="text-green-400">"password"</span>,
      <span class="text-blue-400">"tag"</span>: <span class="text-green-400">"min"</span>,
      <span class="text-blue-400">"value"</span>: <span class="text-green-400">"123"</span>,
      <span class="text-blue-400">"message"</span>: <span class="text-green-400">"password must be at least 8 characters long"</span>
    }
  ]
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-message-square" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Custom Error Messages</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Enhanced Error Message Handling</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package validators

import (
    &quot;fmt&quot;
    &quot;base/core/validator&quot;
)

// CustomMessageValidator extends the base validator with custom messages
type CustomMessageValidator struct {
    *validator.Validator
    messages map[string]string
}

func NewCustomValidator() *CustomMessageValidator {
    return &amp;CustomMessageValidator{
        Validator: validator.New(),
        messages: map[string]string{
            &quot;required&quot;:      &quot;This field is required&quot;,
            &quot;email&quot;:         &quot;Please enter a valid email address&quot;,
            &quot;min&quot;:           &quot;This field must be at least %s characters&quot;,
            &quot;max&quot;:           &quot;This field cannot exceed %s characters&quot;,
            &quot;gte&quot;:           &quot;Value must be at least %s&quot;,
            &quot;lte&quot;:           &quot;Value cannot exceed %s&quot;,
            &quot;username&quot;:      &quot;Username must be 3-20 characters with letters, numbers, underscore or hyphen only&quot;,
            &quot;strong_password&quot;: &quot;Password must be at least 8 characters with uppercase, lowercase, number and special character&quot;,
        },
    }
}

func (cv *CustomMessageValidator) GetCustomMessage(field, tag, param string) string {
    if msg, exists := cv.messages[tag]; exists {
        if param != &quot;&quot; {
            return fmt.Sprintf(&quot;%s: &quot;+msg, field, param)
        }
        return fmt.Sprintf(&quot;%s: &quot;+msg, field)
    }
    return fmt.Sprintf(&quot;%s is invalid&quot;, field)
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> validators

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"fmt"</span>
    <span class="text-green-400">"base/core/validator"</span>
)

<span class="text-green-400">// CustomMessageValidator extends the base validator with custom messages</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">CustomMessageValidator</span> <span class="text-blue-400">struct</span> {
    *validator.Validator
    messages <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>
}

<span class="text-blue-400">func</span> <span class="text-yellow-400">NewCustomValidator</span>() *CustomMessageValidator {
    <span class="text-blue-400">return</span> &CustomMessageValidator{
        Validator: validator.New(),
        messages: <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
            <span class="text-green-400">"required"</span>:      <span class="text-green-400">"This field is required"</span>,
            <span class="text-green-400">"email"</span>:         <span class="text-green-400">"Please enter a valid email address"</span>,
            <span class="text-green-400">"min"</span>:           <span class="text-green-400">"This field must be at least %s characters"</span>,
            <span class="text-green-400">"max"</span>:           <span class="text-green-400">"This field cannot exceed %s characters"</span>,
            <span class="text-green-400">"gte"</span>:           <span class="text-green-400">"Value must be at least %s"</span>,
            <span class="text-green-400">"lte"</span>:           <span class="text-green-400">"Value cannot exceed %s"</span>,
            <span class="text-green-400">"username"</span>:      <span class="text-green-400">"Username must be 3-20 characters with letters, numbers, underscore or hyphen only"</span>,
            <span class="text-green-400">"strong_password"</span>: <span class="text-green-400">"Password must be at least 8 characters with uppercase, lowercase, number and special character"</span>,
        },
    }
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Validation with File Uploads -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Validation with File Uploads</h2>
        
        <div class="space-y-6">
          <p class="text-gray-600 dark:text-gray-300">
            Base Framework integrates validation seamlessly with file uploads, providing automatic file type and size validation.
          </p>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-upload" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">File Upload Validation</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">File Upload with Validation</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type ProductCreateRequest struct {
    Name        string                \`json:&quot;name&quot; validate:&quot;required,min=2,max=100&quot;\`
    Description string                \`json:&quot;description&quot; validate:&quot;required,min=10,max=1000&quot;\`
    Price       float64               \`json:&quot;price&quot; validate:&quot;required,gt=0&quot;\`
    Category    string                \`json:&quot;category&quot; validate:&quot;required,oneof=electronics clothing books&quot;\`
    Images      []*multipart.FileHeader \`json:&quot;images&quot; validate:&quot;omitempty,dive,max=5242880&quot;\` // 5MB limit
    Manual      *multipart.FileHeader   \`json:&quot;manual&quot; validate:&quot;omitempty&quot;\`
}

func (c *ProductController) CreateWithFiles(ctx *router.Context) error {
    var req ProductCreateRequest
    
    // Parse multipart form
    if err := ctx.Request.ParseMultipartForm(32 &lt;&lt; 20); err != nil { // 32MB
        return ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error: &quot;Failed to parse form data&quot;,
        })
    }
    
    // Bind form data
    req.Name = ctx.FormValue(&quot;name&quot;)
    req.Description = ctx.FormValue(&quot;description&quot;)
    
    // Parse price
    if priceStr := ctx.FormValue(&quot;price&quot;); priceStr != &quot;&quot; {
        if price, err := strconv.ParseFloat(priceStr, 64); err == nil {
            req.Price = price
        }
    }
    
    req.Category = ctx.FormValue(&quot;category&quot;)
    
    // Get files
    form := ctx.Request.MultipartForm
    if files, exists := form.File[&quot;images&quot;]; exists {
        req.Images = files
    }
    if files, exists := form.File[&quot;manual&quot;]; exists &amp;&amp; len(files) &gt; 0 {
        req.Manual = files[0]
    }
    
    // Validate request
    if validationErrors := validator.Validate(&amp;req); validationErrors != nil {
        return ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error:   &quot;Validation failed&quot;,
            Details: validationErrors,
        })
    }
    
    // Additional file validation
    if err := c.validateFiles(&amp;req); err != nil {
        return ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error: err.Error(),
        })
    }
    
    // Process upload through service
    product, err := c.Service.CreateWithFiles(&amp;req)
    if err != nil {
        return ctx.JSON(http.StatusInternalServerError, types.ErrorResponse{
            Error: &quot;Failed to create product: &quot; + err.Error(),
        })
    }
    
    return ctx.JSON(http.StatusCreated, product.ToResponse())
}

func (c *ProductController) validateFiles(req *ProductCreateRequest) error {
    // Validate image files
    for _, file := range req.Images {
        if !isValidImageType(file.Header.Get(&quot;Content-Type&quot;)) {
            return fmt.Errorf(&quot;invalid image type for file %s&quot;, file.Filename)
        }
        if file.Size &gt; 5*1024*1024 { // 5MB
            return fmt.Errorf(&quot;image file %s exceeds size limit&quot;, file.Filename)
        }
    }
    
    // Validate manual file
    if req.Manual != nil {
        if !isValidDocumentType(req.Manual.Header.Get(&quot;Content-Type&quot;)) {
            return fmt.Errorf(&quot;invalid manual file type&quot;)
        }
        if req.Manual.Size &gt; 50*1024*1024 { // 50MB
            return fmt.Errorf(&quot;manual file exceeds size limit&quot;)
        }
    }
    
    return nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">ProductCreateRequest</span> <span class="text-blue-400">struct</span> {
    Name        <span class="text-purple-400">string</span>                <span class="text-gray-400">`json:"name" validate:"required,min=2,max=100"`</span>
    Description <span class="text-purple-400">string</span>                <span class="text-gray-400">`json:"description" validate:"required,min=10,max=1000"`</span>
    Price       <span class="text-purple-400">float64</span>               <span class="text-gray-400">`json:"price" validate:"required,gt=0"`</span>
    Category    <span class="text-purple-400">string</span>                <span class="text-gray-400">`json:"category" validate:"required,oneof=electronics clothing books"`</span>
    Images      []*multipart.FileHeader <span class="text-gray-400">`json:"images" validate:"omitempty,dive,max=5242880"`</span> <span class="text-green-400">// 5MB limit</span>
    Manual      *multipart.FileHeader   <span class="text-gray-400">`json:"manual" validate:"omitempty"`</span>
}

<span class="text-blue-400">func</span> (c *ProductController) <span class="text-yellow-400">CreateWithFiles</span>(ctx *router.Context) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">var</span> req ProductCreateRequest
    
    <span class="text-green-400">// Parse multipart form</span>
    <span class="text-blue-400">if</span> err := ctx.Request.ParseMultipartForm(<span class="text-purple-400">32</span> << <span class="text-purple-400">20</span>); err != <span class="text-purple-400">nil</span> { <span class="text-green-400">// 32MB</span>
        <span class="text-blue-400">return</span> ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error: <span class="text-green-400">"Failed to parse form data"</span>,
        })
    }
    
    <span class="text-green-400">// Bind form data</span>
    req.Name = ctx.FormValue(<span class="text-green-400">"name"</span>)
    req.Description = ctx.FormValue(<span class="text-green-400">"description"</span>)
    
    <span class="text-green-400">// Validate request</span>
    <span class="text-blue-400">if</span> validationErrors := validator.Validate(&req); validationErrors != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(http.StatusBadRequest, types.ErrorResponse{
            Error:   <span class="text-green-400">"Validation failed"</span>,
            Details: validationErrors,
        })
    }
    
    <span class="text-green-400">// Process upload through service</span>
    product, err := c.Service.CreateWithFiles(&req)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> ctx.JSON(http.StatusInternalServerError, types.ErrorResponse{
            Error: <span class="text-green-400">"Failed to create product: "</span> + err.Error(),
        })
    }
    
    <span class="text-blue-400">return</span> ctx.JSON(http.StatusCreated, product.ToResponse())
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Advanced Validation Patterns -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Advanced Validation Patterns</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-link" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Cross-Field Validation</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Cross-Field Validation Examples</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type UserUpdateRequest struct {
    CurrentPassword string \`json:&quot;current_password&quot; validate:&quot;required_with=NewPassword&quot;\`
    NewPassword     string \`json:&quot;new_password&quot; validate:&quot;omitempty,min=8,nefield=CurrentPassword&quot;\`
    ConfirmPassword string \`json:&quot;confirm_password&quot; validate:&quot;required_with=NewPassword,eqfield=NewPassword&quot;\`
}

type EventScheduleRequest struct {
    StartDate time.Time \`json:&quot;start_date&quot; validate:&quot;required&quot;\`
    EndDate   time.Time \`json:&quot;end_date&quot; validate:&quot;required,gtfield=StartDate&quot;\`
    Duration  int       \`json:&quot;duration&quot; validate:&quot;required,gte=1&quot;\`
}

type PricingRequest struct {
    RegularPrice float64 \`json:&quot;regular_price&quot; validate:&quot;required,gt=0&quot;\`
    SalePrice    float64 \`json:&quot;sale_price&quot; validate:&quot;omitempty,gt=0,ltfield=RegularPrice&quot;\`
    Currency     string  \`json:&quot;currency&quot; validate:&quot;required,oneof=USD EUR GBP&quot;\`
}

type ConditionalValidationRequest struct {
    Type         string  \`json:&quot;type&quot; validate:&quot;required,oneof=personal business&quot;\`
    CompanyName  string  \`json:&quot;company_name&quot; validate:&quot;required_if=Type business&quot;\`
    TaxID        string  \`json:&quot;tax_id&quot; validate:&quot;required_if=Type business&quot;\`
    PersonalName string  \`json:&quot;personal_name&quot; validate:&quot;required_if=Type personal&quot;\`
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">UserUpdateRequest</span> <span class="text-blue-400">struct</span> {
    CurrentPassword <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"current_password" validate:"required_with=NewPassword"`</span>
    NewPassword     <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"new_password" validate:"omitempty,min=8,nefield=CurrentPassword"`</span>
    ConfirmPassword <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"confirm_password" validate:"required_with=NewPassword,eqfield=NewPassword"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">EventScheduleRequest</span> <span class="text-blue-400">struct</span> {
    StartDate time.Time <span class="text-gray-400">`json:"start_date" validate:"required"`</span>
    EndDate   time.Time <span class="text-gray-400">`json:"end_date" validate:"required,gtfield=StartDate"`</span>
    Duration  <span class="text-purple-400">int</span>       <span class="text-gray-400">`json:"duration" validate:"required,gte=1"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">PricingRequest</span> <span class="text-blue-400">struct</span> {
    RegularPrice <span class="text-purple-400">float64</span> <span class="text-gray-400">`json:"regular_price" validate:"required,gt=0"`</span>
    SalePrice    <span class="text-purple-400">float64</span> <span class="text-gray-400">`json:"sale_price" validate:"omitempty,gt=0,ltfield=RegularPrice"`</span>
    Currency     <span class="text-purple-400">string</span>  <span class="text-gray-400">`json:"currency" validate:"required,oneof=USD EUR GBP"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">ConditionalValidationRequest</span> <span class="text-blue-400">struct</span> {
    Type         <span class="text-purple-400">string</span>  <span class="text-gray-400">`json:"type" validate:"required,oneof=personal business"`</span>
    CompanyName  <span class="text-purple-400">string</span>  <span class="text-gray-400">`json:"company_name" validate:"required_if=Type business"`</span>
    TaxID        <span class="text-purple-400">string</span>  <span class="text-gray-400">`json:"tax_id" validate:"required_if=Type business"`</span>
    PersonalName <span class="text-purple-400">string</span>  <span class="text-gray-400">`json:"personal_name" validate:"required_if=Type personal"`</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Nested Struct Validation</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Nested Validation Example</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`type Address struct {
    Street     string \`json:&quot;street&quot; validate:&quot;required,min=5,max=100&quot;\`
    City       string \`json:&quot;city&quot; validate:&quot;required,min=2,max=50&quot;\`
    State      string \`json:&quot;state&quot; validate:&quot;required,min=2,max=50&quot;\`
    PostalCode string \`json:&quot;postal_code&quot; validate:&quot;required,len=5|len=9&quot;\`
    Country    string \`json:&quot;country&quot; validate:&quot;required,len=2&quot;\`
}

type ContactInfo struct {
    Email string \`json:&quot;email&quot; validate:&quot;required,email&quot;\`
    Phone string \`json:&quot;phone&quot; validate:&quot;omitempty,phone&quot;\`
}

type UserRegistrationRequest struct {
    Name        string      \`json:&quot;name&quot; validate:&quot;required,min=2,max=50&quot;\`
    Contact     ContactInfo \`json:&quot;contact&quot; validate:&quot;required&quot;\`
    Address     Address     \`json:&quot;address&quot; validate:&quot;required&quot;\`
    ShippingAddress *Address \`json:&quot;shipping_address&quot; validate:&quot;omitempty&quot;\`
    Preferences []string    \`json:&quot;preferences&quot; validate:&quot;omitempty,dive,oneof=email sms newsletter&quot;\`
    Tags        []Tag       \`json:&quot;tags&quot; validate:&quot;omitempty,dive&quot;\`
}

type Tag struct {
    Name  string \`json:&quot;name&quot; validate:&quot;required,min=2,max=20&quot;\`
    Color string \`json:&quot;color&quot; validate:&quot;omitempty,hexcolor&quot;\`
}

// Validation will automatically dive into nested structs
func validateComplexRequest() {
    req := &amp;UserRegistrationRequest{
        Name: &quot;John Doe&quot;,
        Contact: ContactInfo{
            Email: &quot;john@example.com&quot;,
            Phone: &quot;+1234567890&quot;,
        },
        Address: Address{
            Street:     &quot;123 Main St&quot;,
            City:       &quot;Anytown&quot;,
            State:      &quot;CA&quot;,
            PostalCode: &quot;12345&quot;,
            Country:    &quot;US&quot;,
        },
        Tags: []Tag{
            {Name: &quot;vip&quot;, Color: &quot;#ff0000&quot;},
            {Name: &quot;premium&quot;, Color: &quot;#00ff00&quot;},
        },
    }
    
    if errors := validator.Validate(req); errors != nil {
        // Handle nested validation errors
        for _, err := range errors {
            fmt.Printf(&quot;Field: %s, Error: %s\n&quot;, err.Field, err.Message)
        }
    }
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> <span class="text-yellow-400">Address</span> <span class="text-blue-400">struct</span> {
    Street     <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"street" validate:"required,min=5,max=100"`</span>
    City       <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"city" validate:"required,min=2,max=50"`</span>
    State      <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"state" validate:"required,min=2,max=50"`</span>
    PostalCode <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"postal_code" validate:"required,len=5|len=9"`</span>
    Country    <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"country" validate:"required,len=2"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">ContactInfo</span> <span class="text-blue-400">struct</span> {
    Email <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"email" validate:"required,email"`</span>
    Phone <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"phone" validate:"omitempty,phone"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">UserRegistrationRequest</span> <span class="text-blue-400">struct</span> {
    Name        <span class="text-purple-400">string</span>      <span class="text-gray-400">`json:"name" validate:"required,min=2,max=50"`</span>
    Contact     ContactInfo <span class="text-gray-400">`json:"contact" validate:"required"`</span>
    Address     Address     <span class="text-gray-400">`json:"address" validate:"required"`</span>
    ShippingAddress *Address <span class="text-gray-400">`json:"shipping_address" validate:"omitempty"`</span>
    Preferences []<span class="text-purple-400">string</span>    <span class="text-gray-400">`json:"preferences" validate:"omitempty,dive,oneof=email sms newsletter"`</span>
    Tags        []Tag       <span class="text-gray-400">`json:"tags" validate:"omitempty,dive"`</span>
}

<span class="text-blue-400">type</span> <span class="text-yellow-400">Tag</span> <span class="text-blue-400">struct</span> {
    Name  <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"name" validate:"required,min=2,max=20"`</span>
    Color <span class="text-purple-400">string</span> <span class="text-gray-400">`json:"color" validate:"omitempty,hexcolor"`</span>
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Best Practices -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>
        
        <div class="space-y-4">
          <UAlert color="green" variant="soft">
            <template #title">✅ Do's</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Use JSON tag names for consistent field naming in validation messages</li>
                <li>Combine multiple validation rules for comprehensive checks</li>
                <li>Use omitempty for optional fields to skip validation when empty</li>
                <li>Create custom validators for domain-specific business rules</li>
                <li>Validate at the controller level before processing requests</li>
                <li>Use dive tag for validating array/slice elements</li>
                <li>Implement cross-field validation for related fields</li>
                <li>Return structured validation errors with field-specific messages</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="red" variant="soft">
            <template #title">❌ Don'ts</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Don't skip validation on user input</li>
                <li>Don't use validation tags on unexported fields</li>
                <li>Don't forget to handle validation errors properly</li>
                <li>Don't rely solely on client-side validation</li>
                <li>Don't validate in multiple layers unnecessarily</li>
                <li>Don't ignore the JSON tag for field naming</li>
                <li>Don't create overly complex validation rules in single tags</li>
                <li>Don't expose internal validation library errors to users</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="amber" variant="soft">
            <template #title">💡 Tips</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Use the Base CLI generator to automatically create validated request structs</li>
                <li>Test your validation rules with edge cases and boundary values</li>
                <li>Consider performance when using complex validation on large datasets</li>
                <li>Document custom validation rules for team members</li>
                <li>Use validation aliases for commonly repeated rule combinations</li>
                <li>Keep validation logic in the request layer, not in models or services</li>
              </ul>
            </template>
          </UAlert>
        </div>
      </section>
    </div>
  </DocsLayout>
</template>

<script setup lang="ts">
import DocsLayout from '@/layouts/DocsLayout.vue'
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard()

const copyToClipboard = async (text: string, event: Event) => {
  await copy(text)
  const button = event.target as HTMLElement
  const originalText = button.textContent
  button.textContent = 'Copied!'
  button.classList.add('!text-green-400')
  setTimeout(() => {
    button.textContent = originalText
    button.classList.remove('!text-green-400')
  }, 2000)
}
</script>