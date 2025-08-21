<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Translation</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Comprehensive internationalization (i18n) system for multi-language applications with flexible field translation
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>🌍 Multi-Language Support</template>
          <template #description>
            Base Framework's translation system provides a flexible, database-driven internationalization solution. It supports both static text translation and dynamic field translation at the model level, allowing you to create truly multi-language applications.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-2 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-database" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Database-Driven</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Store translations directly in your database with automatic loading and caching for optimal performance.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Field-Level Translation</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Translate specific model fields with automatic fallback to original values when translations are missing.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Bulk Operations</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Efficiently update multiple translations at once with transaction-based bulk operations.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-api" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">REST API</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Complete REST API for managing translations with filtering, pagination, and language-specific endpoints.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Key Features -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
        
        <div class="space-y-4">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-check-circle" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Translation Field Type</span>
              </div>
            </template>
            <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Custom Field type that handles multiple languages automatically</li>
              <li>JSON marshaling that adapts based on available translations</li>
              <li>Database storage with original value preservation</li>
              <li>Automatic translation loading and caching</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-globe" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Module Integration</span>
              </div>
            </template>
            <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Translatable interface for modules to define translated fields</li>
              <li>Helper functions for retrieving module translations</li>
              <li>Automatic response enrichment with translated content</li>
              <li>Service layer integration for seamless usage</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-settings" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Advanced Operations</span>
              </div>
            </template>
            <ul class="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>Bulk translation updates with transaction support</li>
              <li>Language discovery and supported language listing</li>
              <li>Model-specific translation management</li>
              <li>Translation history and versioning support</li>
            </ul>
          </UCard>
        </div>
      </section>

      <!-- Translation Field Usage -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Translation Field Usage</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-code" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Model Definition</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">models/post.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package models

import (
    &quot;base/core/translation&quot;
    &quot;time&quot;
    &quot;gorm.io/gorm&quot;
)

type Post struct {
    ID          uint                   \`gorm:&quot;primarykey&quot;\`
    CreatedAt   time.Time              
    UpdatedAt   time.Time              
    DeletedAt   gorm.DeletedAt         \`gorm:&quot;index&quot;\`
    
    // Translatable fields
    Title       translation.Field      \`gorm:&quot;type:text&quot;\`
    Content     translation.Field      \`gorm:&quot;type:text&quot;\`
    Description translation.Field      \`gorm:&quot;type:text&quot;\`
    
    // Regular fields
    AuthorID    uint                   \`gorm:&quot;not null&quot;\`
    Published   bool                   \`gorm:&quot;default:false&quot;\`
    ViewCount   int                    \`gorm:&quot;default:0&quot;\`
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> models

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"base/core/translation"</span>
    <span class="text-green-400">"time"</span>
    <span class="text-green-400">"gorm.io/gorm"</span>
)

<span class="text-blue-400">type</span> <span class="text-yellow-400">Post</span> <span class="text-blue-400">struct</span> {
    ID          <span class="text-purple-400">uint</span>                   <span class="text-gray-400">`gorm:"primarykey"`</span>
    CreatedAt   time.Time              
    UpdatedAt   time.Time              
    DeletedAt   gorm.DeletedAt         <span class="text-gray-400">`gorm:"index"`</span>
    
    <span class="text-green-400">// Translatable fields</span>
    Title       translation.Field      <span class="text-gray-400">`gorm:"type:text"`</span>
    Content     translation.Field      <span class="text-gray-400">`gorm:"type:text"`</span>
    Description translation.Field      <span class="text-gray-400">`gorm:"type:text"`</span>
    
    <span class="text-green-400">// Regular fields</span>
    AuthorID    <span class="text-purple-400">uint</span>                   <span class="text-gray-400">`gorm:"not null"`</span>
    Published   <span class="text-purple-400">bool</span>                   <span class="text-gray-400">`gorm:"default:false"`</span>
    ViewCount   <span class="text-purple-400">int</span>                    <span class="text-gray-400">`gorm:"default:0"`</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-wrench" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Working with Translation Fields</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Basic Field Operations</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Create a new post with original text
post := &Post{
    Title:       translation.NewField(&quot;Hello World&quot;),
    Content:     translation.NewField(&quot;This is the original content&quot;),
    Description: translation.NewField(&quot;Original description&quot;),
}

// Set translations for different languages
post.Title.SetTranslation(&quot;es&quot;, &quot;Hola Mundo&quot;)
post.Title.SetTranslation(&quot;fr&quot;, &quot;Bonjour le Monde&quot;)

// Get translation for specific language with fallback
titleInSpanish := post.Title.GetTranslationOrOriginal(&quot;es&quot;)  // Returns: &quot;Hola Mundo&quot;
titleInGerman := post.Title.GetTranslationOrOriginal(&quot;de&quot;)   // Returns: &quot;Hello World&quot; (fallback)

// Check if translation exists
hasSpanish := post.Title.HasTranslation(&quot;es&quot;)  // Returns: true
hasGerman := post.Title.HasTranslation(&quot;de&quot;)   // Returns: false

// Get all available languages for a field
languages := post.Title.GetAvailableLanguages()  // Returns: [&quot;es&quot;, &quot;fr&quot;]`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Create a new post with original text</span>
post := &Post{
    Title:       translation.NewField(<span class="text-green-400">"Hello World"</span>),
    Content:     translation.NewField(<span class="text-green-400">"This is the original content"</span>),
    Description: translation.NewField(<span class="text-green-400">"Original description"</span>),
}

<span class="text-green-400">// Set translations for different languages</span>
post.Title.SetTranslation(<span class="text-green-400">"es"</span>, <span class="text-green-400">"Hola Mundo"</span>)
post.Title.SetTranslation(<span class="text-green-400">"fr"</span>, <span class="text-green-400">"Bonjour le Monde"</span>)

<span class="text-green-400">// Get translation for specific language with fallback</span>
titleInSpanish := post.Title.GetTranslationOrOriginal(<span class="text-green-400">"es"</span>)  <span class="text-gray-400">// Returns: "Hola Mundo"</span>
titleInGerman := post.Title.GetTranslationOrOriginal(<span class="text-green-400">"de"</span>)   <span class="text-gray-400">// Returns: "Hello World" (fallback)</span>

<span class="text-green-400">// Check if translation exists</span>
hasSpanish := post.Title.HasTranslation(<span class="text-green-400">"es"</span>)  <span class="text-gray-400">// Returns: true</span>
hasGerman := post.Title.HasTranslation(<span class="text-green-400">"de"</span>)   <span class="text-gray-400">// Returns: false</span>

<span class="text-green-400">// Get all available languages for a field</span>
languages := post.Title.GetAvailableLanguages()  <span class="text-gray-400">// Returns: ["es", "fr"]</span></code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Service Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Service Integration</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-server" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Using Translation Service</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">post/service.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func (s *PostService) CreateWithTranslations(request *CreatePostRequest) (*Post, error) {
    // Create post with original content
    post := &Post{
        Title:       translation.NewField(request.Title),
        Content:     translation.NewField(request.Content),
        Description: translation.NewField(request.Description),
        AuthorID:    request.AuthorID,
        Published:   request.Published,
    }
    
    // Save to database
    if err := s.DB.Create(post).Error; err != nil {
        return nil, err
    }
    
    // Add translations if provided
    if request.Translations != nil {
        for language, translations := range request.Translations {
            translationMap := make(map[string]string)
            
            if translations.Title != &quot;&quot; {
                translationMap[&quot;title&quot;] = translations.Title
            }
            if translations.Content != &quot;&quot; {
                translationMap[&quot;content&quot;] = translations.Content
            }
            if translations.Description != &quot;&quot; {
                translationMap[&quot;description&quot;] = translations.Description
            }
            
            // Bulk set translations using translation service
            err := s.TranslationService.BulkSetTranslations(
                &quot;post&quot;, post.ID, language, translationMap,
            )
            if err != nil {
                s.Logger.Error(&quot;Failed to save translations&quot;, zap.Error(err))
            }
        }
        
        // Reload translations into the post fields
        s.LoadTranslationsForPost(post)
    }
    
    return post, nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">CreateWithTranslations</span>(request *CreatePostRequest) (*Post, <span class="text-purple-400">error</span>) {
    <span class="text-green-400">// Create post with original content</span>
    post := &Post{
        Title:       translation.NewField(request.Title),
        Content:     translation.NewField(request.Content),
        Description: translation.NewField(request.Description),
        AuthorID:    request.AuthorID,
        Published:   request.Published,
    }
    
    <span class="text-green-400">// Save to database</span>
    <span class="text-blue-400">if</span> err := s.DB.Create(post).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Add translations if provided</span>
    <span class="text-blue-400">if</span> request.Translations != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">for</span> language, translations := <span class="text-blue-400">range</span> request.Translations {
            translationMap := <span class="text-yellow-400">make</span>(<span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>)
            
            <span class="text-blue-400">if</span> translations.Title != <span class="text-green-400">""</span> {
                translationMap[<span class="text-green-400">"title"</span>] = translations.Title
            }
            <span class="text-blue-400">if</span> translations.Content != <span class="text-green-400">""</span> {
                translationMap[<span class="text-green-400">"content"</span>] = translations.Content
            }
            <span class="text-blue-400">if</span> translations.Description != <span class="text-green-400">""</span> {
                translationMap[<span class="text-green-400">"description"</span>] = translations.Description
            }
            
            <span class="text-green-400">// Bulk set translations using translation service</span>
            err := s.TranslationService.BulkSetTranslations(
                <span class="text-green-400">"post"</span>, post.ID, language, translationMap,
            )
            <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
                s.Logger.Error(<span class="text-green-400">"Failed to save translations"</span>, zap.Error(err))
            }
        }
        
        <span class="text-green-400">// Reload translations into the post fields</span>
        s.LoadTranslationsForPost(post)
    }
    
    <span class="text-blue-400">return</span> post, <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-download" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Loading Translations</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Loading Translations for Model Fields</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func (s *PostService) LoadTranslationsForPost(post *Post) error {
    // Load translations for each translatable field
    fields := []struct {
        field *translation.Field
        name  string
    }{
        {&post.Title, &quot;title&quot;},
        {&post.Content, &quot;content&quot;},
        {&post.Description, &quot;description&quot;},
    }
    
    for _, f := range fields {
        err := s.TranslationService.LoadTranslationsForField(
            f.field, &quot;post&quot;, post.ID, f.name,
        )
        if err != nil {
            s.Logger.Error(&quot;Failed to load translations&quot;, 
                zap.String(&quot;field&quot;, f.name), zap.Error(err))
        }
    }
    
    return nil
}

func (s *PostService) GetByID(id uint, language string) (*PostResponse, error) {
    var post Post
    if err := s.DB.First(&post, id).Error; err != nil {
        return nil, err
    }
    
    // Load all translations
    s.LoadTranslationsForPost(&post)
    
    // Convert to response with specific language
    response := &PostResponse{
        ID:          post.ID,
        AuthorID:    post.AuthorID,
        Published:   post.Published,
        CreatedAt:   post.CreatedAt,
        UpdatedAt:   post.UpdatedAt,
    }
    
    // Get translations for specific language or original
    if language != &quot;&quot; {
        response.Title = post.Title.GetTranslationOrOriginal(language)
        response.Content = post.Content.GetTranslationOrOriginal(language)
        response.Description = post.Description.GetTranslationOrOriginal(language)
    } else {
        response.Title = post.Title.String()
        response.Content = post.Content.String()
        response.Description = post.Description.String()
    }
    
    return response, nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">LoadTranslationsForPost</span>(post *Post) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Load translations for each translatable field</span>
    fields := []<span class="text-blue-400">struct</span> {
        field *translation.Field
        name  <span class="text-purple-400">string</span>
    }{
        {&post.Title, <span class="text-green-400">"title"</span>},
        {&post.Content, <span class="text-green-400">"content"</span>},
        {&post.Description, <span class="text-green-400">"description"</span>},
    }
    
    <span class="text-blue-400">for</span> _, f := <span class="text-blue-400">range</span> fields {
        err := s.TranslationService.LoadTranslationsForField(
            f.field, <span class="text-green-400">"post"</span>, post.ID, f.name,
        )
        <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
            s.Logger.Error(<span class="text-green-400">"Failed to load translations"</span>, 
                zap.String(<span class="text-green-400">"field"</span>, f.name), zap.Error(err))
        }
    }
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}

<span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">GetByID</span>(id <span class="text-purple-400">uint</span>, language <span class="text-purple-400">string</span>) (*PostResponse, <span class="text-purple-400">error</span>) {
    <span class="text-blue-400">var</span> post Post
    <span class="text-blue-400">if</span> err := s.DB.First(&post, id).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Load all translations</span>
    s.LoadTranslationsForPost(&post)
    
    <span class="text-green-400">// Convert to response with specific language</span>
    response := &PostResponse{
        ID:          post.ID,
        AuthorID:    post.AuthorID,
        Published:   post.Published,
        CreatedAt:   post.CreatedAt,
        UpdatedAt:   post.UpdatedAt,
    }
    
    <span class="text-green-400">// Get translations for specific language or original</span>
    <span class="text-blue-400">if</span> language != <span class="text-green-400">""</span> {
        response.Title = post.Title.GetTranslationOrOriginal(language)
        response.Content = post.Content.GetTranslationOrOriginal(language)
        response.Description = post.Description.GetTranslationOrOriginal(language)
    } <span class="text-blue-400">else</span> {
        response.Title = post.Title.String()
        response.Content = post.Content.String()
        response.Description = post.Description.String()
    }
    
    <span class="text-blue-400">return</span> response, <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Module Integration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Module Integration</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-puzzle" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Implementing Translatable Interface</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">post/module.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package post

import (
    &quot;base/core/module&quot;
    &quot;base/core/router&quot;
    &quot;base/core/emitter&quot;
    &quot;base/core/logger&quot;
    &quot;base/core/storage&quot;
    &quot;gorm.io/gorm&quot;
)

type Module struct {
    module.DefaultModule
    DB         *gorm.DB
    Controller *PostController
    Service    *PostService
    Logger     logger.Logger
    Storage    *storage.ActiveStorage
}

// Implement Translatable interface
func (m *Module) TranslatedFields() []string {
    return []string{&quot;title&quot;, &quot;content&quot;, &quot;description&quot;}
}

func NewPostModule(db *gorm.DB, router *router.RouterGroup, log logger.Logger, emitter *emitter.Emitter, storage *storage.ActiveStorage) module.Module {
    service := NewPostService(db, emitter, storage, log)
    controller := NewPostController(service, storage)

    m := &Module{
        DB:         db,
        Service:    service,
        Controller: controller,
        Logger:     log,
        Storage:    storage,
    }

    return m
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> post

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"base/core/module"</span>
    <span class="text-green-400">"base/core/router"</span>
    <span class="text-green-400">"base/core/emitter"</span>
    <span class="text-green-400">"base/core/logger"</span>
    <span class="text-green-400">"base/core/storage"</span>
    <span class="text-green-400">"gorm.io/gorm"</span>
)

<span class="text-blue-400">type</span> <span class="text-yellow-400">Module</span> <span class="text-blue-400">struct</span> {
    module.DefaultModule
    DB         *gorm.DB
    Controller *PostController
    Service    *PostService
    Logger     logger.Logger
    Storage    *storage.ActiveStorage
}

<span class="text-green-400">// Implement Translatable interface</span>
<span class="text-blue-400">func</span> (m *Module) <span class="text-yellow-400">TranslatedFields</span>() []<span class="text-purple-400">string</span> {
    <span class="text-blue-400">return</span> []<span class="text-purple-400">string</span>{<span class="text-green-400">"title"</span>, <span class="text-green-400">"content"</span>, <span class="text-green-400">"description"</span>}
}

<span class="text-blue-400">func</span> <span class="text-yellow-400">NewPostModule</span>(db *gorm.DB, router *router.RouterGroup, log logger.Logger, emitter *emitter.Emitter, storage *storage.ActiveStorage) module.Module {
    service := NewPostService(db, emitter, storage, log)
    controller := NewPostController(service, storage)

    m := &Module{
        DB:         db,
        Service:    service,
        Controller: controller,
        Logger:     log,
        Storage:    storage,
    }

    <span class="text-blue-400">return</span> m
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-help-circle" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Using Translation Helper</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Using Helper Functions</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Get translated fields for a module
translatedFields := translation.GetTranslatedFields(postModule)
// Returns: [&quot;title&quot;, &quot;content&quot;, &quot;description&quot;]

// Get all translations for a model instance
helper := translation.NewHelper(translationService)
translations, err := helper.GetTranslationsForModel(&quot;post&quot;, 1, &quot;es&quot;)
if err == nil {
    fmt.Println(translations)
    // Output: map[&quot;title&quot;:&quot;Hola Mundo&quot; &quot;content&quot;:&quot;Contenido en español&quot;]
}

// Set a single translation
err = helper.SetTranslation(&quot;post&quot;, 1, &quot;title&quot;, &quot;Nuevo Título&quot;, &quot;es&quot;)

// Bulk set multiple translations
translationMap := map[string]string{
    &quot;title&quot;:       &quot;Título en Español&quot;,
    &quot;content&quot;:     &quot;Contenido en Español&quot;,
    &quot;description&quot;: &quot;Descripción en Español&quot;,
}
err = helper.BulkSetTranslations(&quot;post&quot;, 1, &quot;es&quot;, translationMap)

// Get available languages for a model
languages, err := helper.GetAvailableLanguages(&quot;post&quot;, 1)
// Returns: [&quot;es&quot;, &quot;fr&quot;, &quot;de&quot;]`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Get translated fields for a module</span>
translatedFields := translation.GetTranslatedFields(postModule)
<span class="text-gray-400">// Returns: ["title", "content", "description"]</span>

<span class="text-green-400">// Get all translations for a model instance</span>
helper := translation.NewHelper(translationService)
translations, err := helper.GetTranslationsForModel(<span class="text-green-400">"post"</span>, <span class="text-purple-400">1</span>, <span class="text-green-400">"es"</span>)
<span class="text-blue-400">if</span> err == <span class="text-purple-400">nil</span> {
    fmt.Println(translations)
    <span class="text-gray-400">// Output: map["title":"Hola Mundo" "content":"Contenido en español"]</span>
}

<span class="text-green-400">// Set a single translation</span>
err = helper.SetTranslation(<span class="text-green-400">"post"</span>, <span class="text-purple-400">1</span>, <span class="text-green-400">"title"</span>, <span class="text-green-400">"Nuevo Título"</span>, <span class="text-green-400">"es"</span>)

<span class="text-green-400">// Bulk set multiple translations</span>
translationMap := <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
    <span class="text-green-400">"title"</span>:       <span class="text-green-400">"Título en Español"</span>,
    <span class="text-green-400">"content"</span>:     <span class="text-green-400">"Contenido en Español"</span>,
    <span class="text-green-400">"description"</span>: <span class="text-green-400">"Descripción en Español"</span>,
}
err = helper.BulkSetTranslations(<span class="text-green-400">"post"</span>, <span class="text-purple-400">1</span>, <span class="text-green-400">"es"</span>, translationMap)

<span class="text-green-400">// Get available languages for a model</span>
languages, err := helper.GetAvailableLanguages(<span class="text-green-400">"post"</span>, <span class="text-purple-400">1</span>)
<span class="text-gray-400">// Returns: ["es", "fr", "de"]</span></code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- API Reference -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">API Reference</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-list" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Translation Endpoints</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <div class="grid gap-4 md:grid-cols-2">
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="blue" variant="soft" size="xs">GET</UBadge>
                    <code class="text-sm">/translations</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">List all translations with pagination and filtering</p>
                </div>
                
                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="green" variant="soft" size="xs">POST</UBadge>
                    <code class="text-sm">/translations</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Create a new translation</p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="blue" variant="soft" size="xs">GET</UBadge>
                    <code class="text-sm">/translations/by-id/{id}</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Get a specific translation by ID</p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="orange" variant="soft" size="xs">PUT</UBadge>
                    <code class="text-sm">/translations/by-id/{id}</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Update an existing translation</p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="red" variant="soft" size="xs">DELETE</UBadge>
                    <code class="text-sm">/translations/by-id/{id}</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Delete a translation</p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="purple" variant="soft" size="xs">POST</UBadge>
                    <code class="text-sm">/translations/bulk</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Bulk update multiple translations</p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="blue" variant="soft" size="xs">GET</UBadge>
                    <code class="text-sm">/translations/languages</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Get supported languages</p>
                </div>

                <div class="space-y-2">
                  <div class="flex items-center space-x-2">
                    <UBadge color="blue" variant="soft" size="xs">GET</UBadge>
                    <code class="text-sm">/translations/models/{model}/{id}</code>
                  </div>
                  <p class="text-sm text-gray-600 dark:text-gray-300">Get all translations for a model</p>
                </div>
              </div>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-send" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">API Request Examples</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Create Translation</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`POST /api/translations
Content-Type: application/json

{
  &quot;key&quot;: &quot;title&quot;,
  &quot;value&quot;: &quot;Hola Mundo&quot;,
  &quot;model&quot;: &quot;post&quot;,
  &quot;model_id&quot;: 1,
  &quot;language&quot;: &quot;es&quot;
}

// Bulk Update Translations
POST /api/translations/bulk
Content-Type: application/json

{
  &quot;model&quot;: &quot;post&quot;,
  &quot;model_id&quot;: 1,
  &quot;language&quot;: &quot;es&quot;,
  &quot;translations&quot;: {
    &quot;title&quot;: &quot;Título en Español&quot;,
    &quot;content&quot;: &quot;Contenido en Español&quot;,
    &quot;description&quot;: &quot;Descripción en Español&quot;
  }
}

// Get Model Translations
GET /api/translations/models/post/1/es

// List with Filters
GET /api/translations?model=post&model_id=1&page=1&limit=20`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-purple-400">POST</span> <span class="text-green-400">/api/translations</span>
<span class="text-blue-400">Content-Type:</span> application/json

{
  <span class="text-blue-400">"key"</span>: <span class="text-green-400">"title"</span>,
  <span class="text-blue-400">"value"</span>: <span class="text-green-400">"Hola Mundo"</span>,
  <span class="text-blue-400">"model"</span>: <span class="text-green-400">"post"</span>,
  <span class="text-blue-400">"model_id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-blue-400">"language"</span>: <span class="text-green-400">"es"</span>
}

<span class="text-gray-400">// Bulk Update Translations</span>
<span class="text-purple-400">POST</span> <span class="text-green-400">/api/translations/bulk</span>
<span class="text-blue-400">Content-Type:</span> application/json

{
  <span class="text-blue-400">"model"</span>: <span class="text-green-400">"post"</span>,
  <span class="text-blue-400">"model_id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-blue-400">"language"</span>: <span class="text-green-400">"es"</span>,
  <span class="text-blue-400">"translations"</span>: {
    <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Título en Español"</span>,
    <span class="text-blue-400">"content"</span>: <span class="text-green-400">"Contenido en Español"</span>,
    <span class="text-blue-400">"description"</span>: <span class="text-green-400">"Descripción en Español"</span>
  }
}

<span class="text-gray-400">// Get Model Translations</span>
<span class="text-purple-400">GET</span> <span class="text-green-400">/api/translations/models/post/1/es</span>

<span class="text-gray-400">// List with Filters</span>
<span class="text-purple-400">GET</span> <span class="text-green-400">/api/translations?model=post&model_id=1&page=1&limit=20</span></code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- JSON Response Format -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">JSON Response Format</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-file-json" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Translation Field JSON Output</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Adaptive JSON Marshaling</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// When no translations are loaded (original value only)
{
  &quot;title&quot;: &quot;Hello World&quot;,
  &quot;content&quot;: &quot;This is the original content&quot;
}

// When translations are loaded (translation map)
{
  &quot;title&quot;: {
    &quot;es&quot;: &quot;Hola Mundo&quot;,
    &quot;fr&quot;: &quot;Bonjour le Monde&quot;,
    &quot;de&quot;: &quot;Hallo Welt&quot;
  },
  &quot;content&quot;: {
    &quot;es&quot;: &quot;Este es el contenido original&quot;,
    &quot;fr&quot;: &quot;Ceci est le contenu original&quot;
  }
}

// Language-specific API response
GET /api/posts/1?lang=es
{
  &quot;id&quot;: 1,
  &quot;title&quot;: &quot;Hola Mundo&quot;,
  &quot;content&quot;: &quot;Este es el contenido original&quot;,
  &quot;description&quot;: &quot;Descripción original&quot;,
  &quot;author_id&quot;: 1,
  &quot;published&quot;: true
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-gray-400">// When no translations are loaded (original value only)</span>
{
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Hello World"</span>,
  <span class="text-blue-400">"content"</span>: <span class="text-green-400">"This is the original content"</span>
}

<span class="text-gray-400">// When translations are loaded (translation map)</span>
{
  <span class="text-blue-400">"title"</span>: {
    <span class="text-blue-400">"es"</span>: <span class="text-green-400">"Hola Mundo"</span>,
    <span class="text-blue-400">"fr"</span>: <span class="text-green-400">"Bonjour le Monde"</span>,
    <span class="text-blue-400">"de"</span>: <span class="text-green-400">"Hallo Welt"</span>
  },
  <span class="text-blue-400">"content"</span>: {
    <span class="text-blue-400">"es"</span>: <span class="text-green-400">"Este es el contenido original"</span>,
    <span class="text-blue-400">"fr"</span>: <span class="text-green-400">"Ceci est le contenu original"</span>
  }
}

<span class="text-gray-400">// Language-specific API response</span>
<span class="text-purple-400">GET</span> <span class="text-green-400">/api/posts/1?lang=es</span>
{
  <span class="text-blue-400">"id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-blue-400">"title"</span>: <span class="text-green-400">"Hola Mundo"</span>,
  <span class="text-blue-400">"content"</span>: <span class="text-green-400">"Este es el contenido original"</span>,
  <span class="text-blue-400">"description"</span>: <span class="text-green-400">"Descripción original"</span>,
  <span class="text-blue-400">"author_id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-blue-400">"published"</span>: <span class="text-purple-400">true</span>
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Best Practices -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>
        
        <div class="space-y-4">
          <UAlert color="green" variant="soft">
            <template #title>✅ Do's</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Always provide meaningful original values in your default language</li>
                <li>Use standard language codes (ISO 639-1) like "en", "es", "fr"</li>
                <li>Implement fallback logic to handle missing translations gracefully</li>
                <li>Use bulk operations for updating multiple translations efficiently</li>
                <li>Implement the Translatable interface for modules with translated fields</li>
                <li>Load translations only when needed to optimize performance</li>
                <li>Use transactions when updating multiple translations together</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="orange" variant="soft">
            <template #title>⚠️ Considerations</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Translation fields store original values in the main table for performance</li>
                <li>Translations are stored separately and loaded on demand</li>
                <li>Consider caching strategies for frequently accessed translations</li>
                <li>Plan your database indexing strategy for translation queries</li>
                <li>Be mindful of character limits and text expansion in translations</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="red" variant="soft">
            <template #title>❌ Don'ts</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Don't rely solely on translations without original fallbacks</li>
                <li>Don't use translation fields for data that doesn't need localization</li>
                <li>Don't forget to handle cases where translations might be empty</li>
                <li>Don't load all translations when only specific languages are needed</li>
                <li>Don't hardcode language codes in your application logic</li>
                <li>Don't forget to clean up orphaned translations when deleting records</li>
              </ul>
            </template>
          </UAlert>
        </div>
      </section>

      <!-- Advanced Usage -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Advanced Usage</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-search" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Querying with Translations</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Advanced Query Examples</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Search in original values (faster)
var posts []Post
db.Where(&quot;title LIKE ?&quot;, &quot;%search%&quot;).Find(&posts)

// Search in translations (requires join)
db.Joins(&quot;LEFT JOIN translations t ON t.model = 'post' AND t.model_id = posts.id&quot;).
   Where(&quot;t.key = 'title' AND t.language = 'es' AND t.value LIKE ?&quot;, &quot;%búsqueda%&quot;).
   Find(&posts)

// Get posts with specific translation availability
db.Joins(&quot;INNER JOIN translations t ON t.model = 'post' AND t.model_id = posts.id&quot;).
   Where(&quot;t.language = ?&quot;, &quot;es&quot;).
   Distinct(&quot;posts.*&quot;).
   Find(&posts)

// Count translations by language
type LanguageCount struct {
    Language string
    Count    int64
}

var counts []LanguageCount
db.Model(&Translation{}).
   Select(&quot;language, count(*) as count&quot;).
   Where(&quot;model = ?&quot;, &quot;post&quot;).
   Group(&quot;language&quot;).
   Find(&counts)`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Search in original values (faster)</span>
<span class="text-blue-400">var</span> posts []Post
db.Where(<span class="text-green-400">"title LIKE ?"</span>, <span class="text-green-400">"%search%"</span>).Find(&posts)

<span class="text-green-400">// Search in translations (requires join)</span>
db.Joins(<span class="text-green-400">"LEFT JOIN translations t ON t.model = 'post' AND t.model_id = posts.id"</span>).
   Where(<span class="text-green-400">"t.key = 'title' AND t.language = 'es' AND t.value LIKE ?"</span>, <span class="text-green-400">"%búsqueda%"</span>).
   Find(&posts)

<span class="text-green-400">// Get posts with specific translation availability</span>
db.Joins(<span class="text-green-400">"INNER JOIN translations t ON t.model = 'post' AND t.model_id = posts.id"</span>).
   Where(<span class="text-green-400">"t.language = ?"</span>, <span class="text-green-400">"es"</span>).
   Distinct(<span class="text-green-400">"posts.*"</span>).
   Find(&posts)

<span class="text-green-400">// Count translations by language</span>
<span class="text-blue-400">type</span> <span class="text-yellow-400">LanguageCount</span> <span class="text-blue-400">struct</span> {
    Language <span class="text-purple-400">string</span>
    Count    <span class="text-purple-400">int64</span>
}

<span class="text-blue-400">var</span> counts []LanguageCount
db.Model(&Translation{}).
   Select(<span class="text-green-400">"language, count(*) as count"</span>).
   Where(<span class="text-green-400">"model = ?"</span>, <span class="text-green-400">"post"</span>).
   Group(<span class="text-green-400">"language"</span>).
   Find(&counts)</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-database" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Migration and Setup</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Database Migration</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// The Translation module automatically creates this table:
CREATE TABLE translations (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    \`key\` VARCHAR(255) NOT NULL,
    value TEXT NOT NULL,
    model VARCHAR(255) NOT NULL,
    model_id INTEGER NOT NULL,
    language VARCHAR(5) NOT NULL,
    
    INDEX idx_translation_lookup (\`key\`, model, model_id, language),
    INDEX idx_deleted_at (deleted_at)
);

// Register the translation module in app/init.go
func RegisterModules(deps module.Dependencies) error {
    // Core modules
    translationModule := translation.NewTranslationModule(
        deps.DB, deps.Router, deps.Logger, deps.Emitter, deps.Storage,
    )
    module.RegisterModule(&quot;translation&quot;, translationModule)
    
    // Your app modules...
    
    return nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// The Translation module automatically creates this table:</span>
<span class="text-blue-400">CREATE TABLE</span> translations (
    id <span class="text-purple-400">SERIAL PRIMARY KEY</span>,
    created_at <span class="text-purple-400">TIMESTAMP NOT NULL</span>,
    updated_at <span class="text-purple-400">TIMESTAMP NOT NULL</span>,
    deleted_at <span class="text-purple-400">TIMESTAMP</span>,
    <span class="text-green-400">`key`</span> <span class="text-purple-400">VARCHAR(255) NOT NULL</span>,
    value <span class="text-purple-400">TEXT NOT NULL</span>,
    model <span class="text-purple-400">VARCHAR(255) NOT NULL</span>,
    model_id <span class="text-purple-400">INTEGER NOT NULL</span>,
    language <span class="text-purple-400">VARCHAR(5) NOT NULL</span>,
    
    <span class="text-blue-400">INDEX</span> idx_translation_lookup (<span class="text-green-400">`key`</span>, model, model_id, language),
    <span class="text-blue-400">INDEX</span> idx_deleted_at (deleted_at)
);

<span class="text-green-400">// Register the translation module in app/init.go</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">RegisterModules</span>(deps module.Dependencies) <span class="text-purple-400">error</span> {
    <span class="text-green-400">// Core modules</span>
    translationModule := translation.NewTranslationModule(
        deps.DB, deps.Router, deps.Logger, deps.Emitter, deps.Storage,
    )
    module.RegisterModule(<span class="text-green-400">"translation"</span>, translationModule)
    
    <span class="text-green-400">// Your app modules...</span>
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>
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