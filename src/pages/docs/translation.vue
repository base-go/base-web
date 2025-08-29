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

      <!-- CLI Generation -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">CLI Generation</h2>
        
        <UAlert color="amber" variant="soft" class="mb-6">
          <template #title>🚀 Quick Setup</template>
          <template #description>
            Use the Base CLI to automatically generate models with translation fields. The CLI handles all the boilerplate code for you, including automatic translation loading in service methods.
          </template>
        </UAlert>

        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-terminal" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Generate Model with Translation Fields</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Terminal</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400"># Generate a Post model with translatable title field</span>
./cmd g Post title:translation desc:text feat:image

<span class="text-green-400"># Generate a Product model with translatable fields</span>
./cmd g Product name:translation description:translation price:float category_id:uint

<span class="text-green-400"># Generate a Page model with multiple translatable fields</span>
./cmd g Page title:translation content:translation meta_title:translation meta_description:translation slug:string</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-code" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Generated Model Structure</span>
              </div>
            </template>
            
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              When you use <code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">title:translation</code>, the CLI automatically generates:
            </p>

            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">models/post.go</span>
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">type</span> Post <span class="text-blue-400">struct</span> {
    Id        <span class="text-yellow-400">uint</span>                `json:<span class="text-green-400">"id"</span> gorm:<span class="text-green-400">"primarykey"</span>`
    CreatedAt <span class="text-yellow-400">time.Time</span>           `json:<span class="text-green-400">"created_at"</span>`
    UpdatedAt <span class="text-yellow-400">time.Time</span>           `json:<span class="text-green-400">"updated_at"</span>`
    DeletedAt <span class="text-yellow-400">gorm.DeletedAt</span>      `json:<span class="text-green-400">"deleted_at"</span> gorm:<span class="text-green-400">"index"</span>`
    Title     <span class="text-yellow-400">translation.Field</span>   `json:<span class="text-green-400">"title"</span>`  <span class="text-gray-400">// Translatable field</span>
    Desc      <span class="text-yellow-400">string</span>              `json:<span class="text-green-400">"desc"</span>`
    FeatId    <span class="text-yellow-400">uint</span>                `json:<span class="text-green-400">"feat_id,omitempty"</span>`
    Feat      <span class="text-yellow-400">*storage.Attachment</span> `json:<span class="text-green-400">"feat,omitempty"</span>`
}

<span class="text-gray-400">// Request types use string for input</span>
<span class="text-blue-400">type</span> CreatePostRequest <span class="text-blue-400">struct</span> {
    Title <span class="text-yellow-400">string</span> `json:<span class="text-green-400">"title"</span> binding:<span class="text-green-400">"required"</span>`
    Desc  <span class="text-yellow-400">string</span> `json:<span class="text-green-400">"desc"</span>`
}

<span class="text-gray-400">// Response types return translation.Field with full translation object</span>
<span class="text-blue-400">type</span> PostResponse <span class="text-blue-400">struct</span> {
    Id        <span class="text-yellow-400">uint</span>              `json:<span class="text-green-400">"id"</span>`
    CreatedAt <span class="text-yellow-400">time.Time</span>         `json:<span class="text-green-400">"created_at"</span>`
    UpdatedAt <span class="text-yellow-400">time.Time</span>         `json:<span class="text-green-400">"updated_at"</span>`
    DeletedAt <span class="text-yellow-400">gorm.DeletedAt</span>    `json:<span class="text-green-400">"deleted_at"</span>`
    Title     <span class="text-yellow-400">translation.Field</span> `json:<span class="text-green-400">"title"</span>`  <span class="text-gray-400">// Returns translation object</span>
    Desc      <span class="text-yellow-400">string</span>            `json:<span class="text-green-400">"desc"</span>`
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-settings" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Automatic Service Integration</span>
              </div>
            </template>
            
            <p class="text-sm text-gray-600 dark:text-gray-300 mb-4">
              The CLI automatically generates service methods that load translations:
            </p>

            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">posts/service.go - Auto-generated</span>
               
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">GetById</span>(id <span class="text-purple-400">uint</span>) (*models.Post, <span class="text-purple-400">error</span>) {
    <span class="text-blue-400">var</span> item models.Post
    <span class="text-blue-400">if</span> err := s.DB.Preload(clause.Associations).First(&item, id).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Automatically load translations for translation fields</span>
    s.loadTranslationsForItem(&item)
    
    <span class="text-blue-400">return</span> &item, <span class="text-purple-400">nil</span>
}

<span class="text-blue-400">func</span> (s *PostService) <span class="text-yellow-400">loadTranslationsForItem</span>(item *models.Post) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">if</span> item == <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
    }
    modelName := item.GetModelName()
    modelId := item.GetId()
    
    <span class="text-green-400">// Load translations for Title field</span>
    <span class="text-blue-400">if</span> err := s.TranslationHelper.Service.LoadTranslationsForField(&item.Title, modelName, modelId, <span class="text-green-400">"title"</span>); err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to load translations for Title"</span>, logger.String(<span class="text-green-400">"error"</span>, err.Error()))
    }
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
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
                <span class="text-xs text-gray-400">Generated Service Pattern</span>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// All generated services follow this pattern</span>
<span class="text-blue-400">type</span> YourEntityService <span class="text-blue-400">struct</span> {
    DB                *gorm.DB
    Emitter           *emitter.Emitter
    Storage           *storage.ActiveStorage
    Logger            logger.Logger
    TranslationHelper *translation.Helper  <span class="text-gray-400">// Automatically injected</span>
}

<span class="text-blue-400">func</span> (s *YourEntityService) <span class="text-yellow-400">Create</span>(req *models.CreateYourEntityRequest) (*models.YourEntity, <span class="text-purple-400">error</span>) {
    item := &models.YourEntity{
        <span class="text-green-400">// For translation fields, use translation.NewField()</span>
        TranslatableField: translation.NewField(req.TranslatableField),
        <span class="text-green-400">// For regular fields, use directly</span>
        RegularField: req.RegularField,
    }

    <span class="text-blue-400">if</span> err := s.DB.Create(item).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }

    <span class="text-blue-400">return</span> s.GetById(item.Id)  <span class="text-gray-400">// Automatically loads translations</span>
}

<span class="text-blue-400">func</span> (s *YourEntityService) <span class="text-yellow-400">GetById</span>(id <span class="text-purple-400">uint</span>) (*models.YourEntity, <span class="text-purple-400">error</span>) {
    item := &models.YourEntity{}
    
    <span class="text-blue-400">if</span> err := s.DB.First(item, id).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }

    <span class="text-green-400">// Automatically load translations for all translatable fields</span>
    <span class="text-blue-400">if</span> err := s.loadTranslationsForItem(item); err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to load translations"</span>, logger.String(<span class="text-green-400">"error"</span>, err.Error()))
    }

    <span class="text-blue-400">return</span> item, <span class="text-purple-400">nil</span>
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
                <span class="text-xs text-gray-400">Auto-Generated Translation Loading</span>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// This method is automatically generated for each entity</span>
<span class="text-blue-400">func</span> (s *YourEntityService) <span class="text-yellow-400">loadTranslationsForItem</span>(item *models.YourEntity) <span class="text-purple-400">error</span> {
    <span class="text-blue-400">if</span> item == <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
    }

    modelName := item.GetModelName()
    modelId := item.GetId()

    <span class="text-green-400">// Load translations for each translatable field</span>
    <span class="text-green-400">// This loops through all fields marked with 'translation' type</span>
    <span class="text-blue-400">if</span> err := s.TranslationHelper.Service.LoadTranslationsForField(&item.TranslatableField1, modelName, modelId, <span class="text-green-400">"translatable_field1"</span>); err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to load translations"</span>, logger.String(<span class="text-green-400">"error"</span>, err.Error()))
    }
    
    <span class="text-blue-400">if</span> err := s.TranslationHelper.Service.LoadTranslationsForField(&item.TranslatableField2, modelName, modelId, <span class="text-green-400">"translatable_field2"</span>); err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to load translations"</span>, logger.String(<span class="text-green-400">"error"</span>, err.Error()))
    }

    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}

<span class="text-green-400">// Using the Translation Helper directly</span>
<span class="text-blue-400">func</span> (s *YourEntityService) <span class="text-yellow-400">AddTranslation</span>(id <span class="text-purple-400">uint</span>, field, language, value <span class="text-purple-400">string</span>) <span class="text-purple-400">error</span> {
    modelName := <span class="text-green-400">"your_entity"</span>  <span class="text-gray-400">// matches your model name</span>
    <span class="text-blue-400">return</span> s.TranslationHelper.SetTranslation(modelName, id, field, value, language)
}

<span class="text-green-400">// Bulk set multiple translations</span>
<span class="text-blue-400">func</span> (s *YourEntityService) <span class="text-yellow-400">BulkAddTranslations</span>(id <span class="text-purple-400">uint</span>, language <span class="text-purple-400">string</span>, translations <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>) <span class="text-purple-400">error</span> {
    modelName := <span class="text-green-400">"your_entity"</span>
    <span class="text-blue-400">return</span> s.TranslationHelper.BulkSetTranslations(modelName, id, language, translations)
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
                <span class="font-semibold">Module Integration (Auto-Generated)</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Generated Module Pattern</span>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// All generated modules follow this pattern</span>
<span class="text-blue-400">func</span> <span class="text-yellow-400">Init</span>(deps module.Dependencies) module.Module {
    <span class="text-green-400">// Translation service and helper are automatically created</span>
    translationService := translation.NewTranslationService(deps.DB, deps.Emitter, deps.Storage, deps.Logger)
    translationHelper := translation.NewHelper(translationService)

    <span class="text-green-400">// Service gets translation helper injected</span>
    service := NewYourEntityService(deps.DB, deps.Emitter, deps.Storage, deps.Logger, translationHelper)
    controller := NewYourEntityController(service, deps.Storage)

    mod := &Module{
        DB:                deps.DB,
        Service:           service,
        Controller:        controller,
        TranslationHelper: translationHelper,
    }

    <span class="text-blue-400">return</span> mod
}

<span class="text-green-400">// Module structure includes translation helper</span>
<span class="text-blue-400">type</span> Module <span class="text-blue-400">struct</span> {
    DB                *gorm.DB
    Service           *YourEntityService
    Controller        *YourEntityController
    TranslationHelper *translation.Helper
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
                
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Frontend usage - accessing translation values</span>
<span class="text-green-400">// From API response: {"title": {"original": "Title", "de": "Titel", "sq": "Titulli"}}</span>

<span class="text-green-400">// Get specific language or fallback to original</span>
<span class="text-blue-400">function</span> getTranslation(field, language) {
    <span class="text-blue-400">return</span> field[language] || field.original;
}

<span class="text-green-400">// Usage examples</span>
<span class="text-blue-400">const</span> title_de = getTranslation(post.title, <span class="text-green-400">"de"</span>);  <span class="text-gray-400">// "Titel"</span>
<span class="text-blue-400">const</span> title_en = getTranslation(post.title, <span class="text-green-400">"en"</span>);  <span class="text-gray-400">// "Title" (fallback to original)</span>

<span class="text-green-400">// Backend helper usage</span>
helper := translation.NewHelper(translationService)

<span class="text-green-400">// Set a single translation</span>
err = helper.SetTranslation(<span class="text-green-400">"your_entity"</span>, <span class="text-purple-400">1</span>, <span class="text-green-400">"field_name"</span>, <span class="text-green-400">"Translated Value"</span>, <span class="text-green-400">"de"</span>)

<span class="text-green-400">// Bulk set multiple translations</span>
translationMap := <span class="text-blue-400">map</span>[<span class="text-purple-400">string</span>]<span class="text-purple-400">string</span>{
    <span class="text-green-400">"title"</span>: <span class="text-green-400">"Deutscher Titel"</span>,
    <span class="text-green-400">"description"</span>: <span class="text-green-400">"Deutsche Beschreibung"</span>,
}
err = helper.BulkSetTranslations(<span class="text-green-400">"your_entity"</span>, <span class="text-purple-400">1</span>, <span class="text-green-400">"de"</span>, translationMap)</code></pre>
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

<span class="text-gray-400">// Actual API response (returns full translation field structure)</span>
<span class="text-purple-400">GET</span> <span class="text-green-400">/api/posts/1</span>
{
  <span class="text-blue-400">"id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-blue-400">"created_at"</span>: <span class="text-green-400">"2025-08-28T20:37:28.986523+02:00"</span>,
  <span class="text-blue-400">"updated_at"</span>: <span class="text-green-400">"2025-08-28T20:37:28.986523+02:00"</span>,
  <span class="text-blue-400">"deleted_at"</span>: <span class="text-purple-400">null</span>,
  <span class="text-blue-400">"title"</span>: {
    <span class="text-blue-400">"original"</span>: <span class="text-green-400">"Title"</span>,
    <span class="text-blue-400">"de"</span>: <span class="text-green-400">"Titel"</span>,
    <span class="text-blue-400">"sq"</span>: <span class="text-green-400">"Titulli"</span>
  },
  <span class="text-blue-400">"desc"</span>: <span class="text-green-400">"description"</span> // original value since no translation
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
 
</script>