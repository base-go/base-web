<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Storage</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Flexible file storage system with multiple provider support and automatic file handling
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>🗂️ Multi-Provider Storage</template>
          <template #description>
            Base Framework's storage system provides a unified interface for file uploads with support for local storage, Amazon S3, and Cloudflare R2. It includes automatic file validation, size limits, and MIME type detection.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-hard-drive" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Local Storage</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Store files directly on your server's filesystem with automatic directory creation.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-cloud" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Amazon S3</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Scalable cloud storage with S3-compatible APIs and CDN support.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-globe" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">Cloudflare R2</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Zero egress fee storage with global CDN and S3 compatibility.
            </p>
          </UCard>
        </div>
      </section>

      <!-- Configuration -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Configuration</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-settings" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">Environment Variables</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">.env Configuration</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`# Storage Provider (local, s3, r2)
STORAGE_PROVIDER=local

# Local Storage
STORAGE_PATH=./uploads
STORAGE_BASE_URL=http://localhost:3000/uploads

# Amazon S3
STORAGE_S3_KEY=your-access-key
STORAGE_S3_SECRET=your-secret-key
STORAGE_S3_BUCKET=your-bucket
STORAGE_S3_REGION=us-east-1
STORAGE_S3_CDN=https://cdn.example.com

# Cloudflare R2
STORAGE_R2_ACCOUNT_ID=your-account-id
STORAGE_R2_KEY=your-access-key
STORAGE_R2_SECRET=your-secret-key
STORAGE_R2_BUCKET=your-bucket
STORAGE_R2_CDN=https://pub-xxx.r2.dev`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400"># Storage Provider (local, s3, r2)</span>
<span class="text-blue-400">STORAGE_PROVIDER</span>=<span class="text-yellow-400">local</span>

<span class="text-green-400"># Local Storage</span>
<span class="text-blue-400">STORAGE_PATH</span>=<span class="text-yellow-400">./uploads</span>
<span class="text-blue-400">STORAGE_BASE_URL</span>=<span class="text-yellow-400">http://localhost:3000/uploads</span>

<span class="text-green-400"># Amazon S3</span>
<span class="text-blue-400">STORAGE_S3_KEY</span>=<span class="text-yellow-400">your-access-key</span>
<span class="text-blue-400">STORAGE_S3_SECRET</span>=<span class="text-yellow-400">your-secret-key</span>
<span class="text-blue-400">STORAGE_S3_BUCKET</span>=<span class="text-yellow-400">your-bucket</span>
<span class="text-blue-400">STORAGE_S3_REGION</span>=<span class="text-yellow-400">us-east-1</span>
<span class="text-blue-400">STORAGE_S3_CDN</span>=<span class="text-yellow-400">https://cdn.example.com</span>

<span class="text-green-400"># Cloudflare R2</span>
<span class="text-blue-400">STORAGE_R2_ACCOUNT_ID</span>=<span class="text-yellow-400">your-account-id</span>
<span class="text-blue-400">STORAGE_R2_KEY</span>=<span class="text-yellow-400">your-access-key</span>
<span class="text-blue-400">STORAGE_R2_SECRET</span>=<span class="text-yellow-400">your-secret-key</span>
<span class="text-blue-400">STORAGE_R2_BUCKET</span>=<span class="text-yellow-400">your-bucket</span>
<span class="text-blue-400">STORAGE_R2_CDN</span>=<span class="text-yellow-400">https://pub-xxx.r2.dev</span></code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- File Types -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">File Types & Validation</h2>
        
        <div class="space-y-6">
          <p class="text-gray-600 dark:text-gray-300">
            Base Framework automatically validates file types and sizes based on the field type in your models.
          </p>

          <div class="grid gap-4 md:grid-cols-2">
            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-image" class="h-5 w-5 text-blue-500" />
                  <span class="font-semibold">Image Type</span>
                </div>
              </template>
              <div class="space-y-3">
                <div class="text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Max Size:</span>
                  <span class="text-gray-600 dark:text-gray-300 ml-2">5MB</span>
                </div>
                <div class="text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Extensions:</span>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <UBadge color="blue" variant="soft" size="xs">.jpg</UBadge>
                    <UBadge color="blue" variant="soft" size="xs">.jpeg</UBadge>
                    <UBadge color="blue" variant="soft" size="xs">.png</UBadge>
                    <UBadge color="blue" variant="soft" size="xs">.gif</UBadge>
                    <UBadge color="blue" variant="soft" size="xs">.webp</UBadge>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-file" class="h-5 w-5 text-green-500" />
                  <span class="font-semibold">File Type</span>
                </div>
              </template>
              <div class="space-y-3">
                <div class="text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Max Size:</span>
                  <span class="text-gray-600 dark:text-gray-300 ml-2">50MB</span>
                </div>
                <div class="text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Extensions:</span>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <UBadge color="green" variant="soft" size="xs">.pdf</UBadge>
                    <UBadge color="green" variant="soft" size="xs">.doc</UBadge>
                    <UBadge color="green" variant="soft" size="xs">.docx</UBadge>
                    <UBadge color="green" variant="soft" size="xs">.xls</UBadge>
                    <UBadge color="green" variant="soft" size="xs">.xlsx</UBadge>
                    <UBadge color="green" variant="soft" size="xs">.ppt</UBadge>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-paperclip" class="h-5 w-5 text-purple-500" />
                  <span class="font-semibold">Attachment Type</span>
                </div>
              </template>
              <div class="space-y-3">
                <div class="text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Max Size:</span>
                  <span class="text-gray-600 dark:text-gray-300 ml-2">10MB</span>
                </div>
                <div class="text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-200">Extensions:</span>
                  <div class="flex flex-wrap gap-2 mt-1">
                    <UBadge color="purple" variant="soft" size="xs">.zip</UBadge>
                    <UBadge color="purple" variant="soft" size="xs">.rar</UBadge>
                    <UBadge color="purple" variant="soft" size="xs">.7z</UBadge>
                    <UBadge color="purple" variant="soft" size="xs">.tar</UBadge>
                    <UBadge color="purple" variant="soft" size="xs">+ all file types</UBadge>
                  </div>
                </div>
              </div>
            </UCard>

            <UCard>
              <template #header>
                <div class="flex items-center space-x-2">
                  <UIcon name="i-lucide-file-video" class="h-5 w-5 text-orange-500" />
                  <span class="font-semibold">Custom Types</span>
                </div>
              </template>
              <div class="text-sm text-gray-600 dark:text-gray-300">
                You can define custom file types with specific extensions and size limits in your models.
              </div>
            </UCard>
          </div>
        </div>
      </section>

      <!-- Usage Examples -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Usage Examples</h2>
        
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
                <span class="text-xs text-gray-400">models/product.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package models

import &quot;base/core/storage&quot;

type Product struct {
    ID          uint                 \`gorm:&quot;primaryKey&quot;\`
    Name        string               \`gorm:&quot;not null&quot;\`
    Description string               \`gorm:&quot;type:text&quot;\`
    Price       float64              \`gorm:&quot;not null&quot;\`
    
    // Single image field
    Thumbnail   storage.Attachment   \`gorm:&quot;foreignKey:ModelId;references:Id&quot; field_type:&quot;image&quot;\`
    
    // Multiple images
    Gallery     []storage.Attachment \`gorm:&quot;foreignKey:ModelId;references:Id&quot; field_type:&quot;image&quot; multiple:&quot;true&quot;\`
    
    // File attachments
    Manual      storage.Attachment   \`gorm:&quot;foreignKey:ModelId;references:Id&quot; field_type:&quot;file&quot;\`
    Downloads   []storage.Attachment \`gorm:&quot;foreignKey:ModelId;references:Id&quot; field_type:&quot;attachment&quot; multiple:&quot;true&quot;\`
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> models

<span class="text-blue-400">import</span> <span class="text-green-400">"base/core/storage"</span>

<span class="text-blue-400">type</span> <span class="text-yellow-400">Product</span> <span class="text-blue-400">struct</span> {
    ID          <span class="text-purple-400">uint</span>                 <span class="text-gray-400">`gorm:"primaryKey"`</span>
    Name        <span class="text-purple-400">string</span>               <span class="text-gray-400">`gorm:"not null"`</span>
    Description <span class="text-purple-400">string</span>               <span class="text-gray-400">`gorm:"type:text"`</span>
    Price       <span class="text-purple-400">float64</span>              <span class="text-gray-400">`gorm:"not null"`</span>
    
    <span class="text-green-400">// Single image field</span>
    Thumbnail   storage.Attachment   <span class="text-gray-400">`gorm:"foreignKey:ModelId;references:Id" field_type:"image"`</span>
    
    <span class="text-green-400">// Multiple images</span>
    Gallery     []storage.Attachment <span class="text-gray-400">`gorm:"foreignKey:ModelId;references:Id" field_type:"image" multiple:"true"`</span>
    
    <span class="text-green-400 ">// File attachments</span>
    Manual      storage.Attachment   <span class="text-gray-400 text-nowrap">`gorm:"foreignKey:ModelId;references:Id"`</span>
    Downloads   []storage.Attachment <span class="text-gray-400">`gorm:"foreignKey:ModelId;references:Id" multiple:"true"`</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-upload" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">File Upload in Service</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">services/product_service.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func (s *ProductService) Create(data CreateProductRequest) (*Product, error) {
    product := &Product{
        Name:        data.Name,
        Description: data.Description,
        Price:       data.Price,
    }
    
    // Handle thumbnail upload
    if data.Thumbnail != nil {
        attachment, err := s.Storage.Upload(data.Thumbnail, &quot;thumbnail&quot;, product)
        if err != nil {
            return nil, err
        }
        product.Thumbnail = *attachment
    }
    
    // Handle multiple gallery images
    if len(data.Gallery) > 0 {
        for _, file := range data.Gallery {
            attachment, err := s.Storage.Upload(file, &quot;gallery&quot;, product)
            if err != nil {
                continue // or handle error
            }
            product.Gallery = append(product.Gallery, *attachment)
        }
    }
    
    // Save product with attachments
    if err := s.DB.Create(product).Error; err != nil {
        return nil, err
    }
    
    // Emit upload event
    s.Emitter.Emit(&quot;product.uploaded&quot;, product)
    
    return product, nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (s *ProductService) <span class="text-yellow-400">Create</span>(data CreateProductRequest) (*Product, <span class="text-purple-400">error</span>) {
    product := &Product{
        Name:        data.Name,
        Description: data.Description,
        Price:       data.Price,
    }
    
    <span class="text-green-400">// Handle thumbnail upload</span>
    <span class="text-blue-400">if</span> data.Thumbnail != <span class="text-purple-400">nil</span> {
        attachment, err := s.Storage.Upload(data.Thumbnail, <span class="text-green-400">"thumbnail"</span>, product)
        <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
            <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
        }
        product.Thumbnail = *attachment
    }
    
    <span class="text-green-400">// Handle multiple gallery images</span>
    <span class="text-blue-400">if</span> <span class="text-yellow-400">len</span>(data.Gallery) > <span class="text-purple-400">0</span> {
        <span class="text-blue-400">for</span> _, file := <span class="text-blue-400">range</span> data.Gallery {
            attachment, err := s.Storage.Upload(file, <span class="text-green-400">"gallery"</span>, product)
            <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
                <span class="text-blue-400">continue</span> <span class="text-green-400">// or handle error</span>
            }
            product.Gallery = <span class="text-yellow-400">append</span>(product.Gallery, *attachment)
        }
    }
    
    <span class="text-green-400">// Save product with attachments</span>
    <span class="text-blue-400">if</span> err := s.DB.Create(product).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Emit upload event</span>
    s.Emitter.Emit(<span class="text-green-400">"product.uploaded"</span>, product)
    
    <span class="text-blue-400">return</span> product, <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-trash-2" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">File Deletion</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Deleting Files</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`// Delete single file
if product.Thumbnail.Path != &quot;&quot; {
    err := s.Storage.Delete(product.Thumbnail.Path)
    if err != nil {
        s.Logger.Error(&quot;Failed to delete thumbnail&quot;, &quot;error&quot;, err)
    }
}

// Delete multiple files
for _, attachment := range product.Gallery {
    if err := s.Storage.Delete(attachment.Path); err != nil {
        s.Logger.Error(&quot;Failed to delete gallery image&quot;, &quot;error&quot;, err)
    }
}

// Clear from database
product.Thumbnail = storage.Attachment{}
product.Gallery = []storage.Attachment{}
s.DB.Save(product)`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400">// Delete single file</span>
<span class="text-blue-400">if</span> product.Thumbnail.Path != <span class="text-green-400">""</span> {
    err := s.Storage.Delete(product.Thumbnail.Path)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to delete thumbnail"</span>, <span class="text-green-400">"error"</span>, err)
    }
}

<span class="text-green-400">// Delete multiple files</span>
<span class="text-blue-400">for</span> _, attachment := <span class="text-blue-400">range</span> product.Gallery {
    <span class="text-blue-400">if</span> err := s.Storage.Delete(attachment.Path); err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to delete gallery image"</span>, <span class="text-green-400">"error"</span>, err)
    }
}

<span class="text-green-400">// Clear from database</span>
product.Thumbnail = storage.Attachment{}
product.Gallery = []storage.Attachment{}
s.DB.Save(product)</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- API Response -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">API Response</h2>
        
        <UCard>
          <template #header>
            <div class="flex items-center space-x-2">
              <UIcon name="i-lucide-send" class="h-5 w-5 text-blue-500" />
              <span class="font-semibold">JSON Response with Attachments</span>
            </div>
          </template>
          
          <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-gray-400">GET /api/products/1</span>
              <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`{
  &quot;id&quot;: 1,
  &quot;name&quot;: &quot;Premium Laptop&quot;,
  &quot;description&quot;: &quot;High-performance laptop for professionals&quot;,
  &quot;price&quot;: 1299.99,
  &quot;thumbnail&quot;: {
    &quot;id&quot;: 1,
    &quot;filename&quot;: &quot;laptop-thumbnail.jpg&quot;,
    &quot;path&quot;: &quot;products/thumbnails/laptop-thumbnail.jpg&quot;,
    &quot;size&quot;: 245632,
    &quot;url&quot;: &quot;https://cdn.example.com/products/thumbnails/laptop-thumbnail.jpg&quot;,
    &quot;created_at&quot;: &quot;2024-01-15T10:30:00Z&quot;
  },
  &quot;gallery&quot;: [
    {
      &quot;id&quot;: 2,
      &quot;filename&quot;: &quot;laptop-angle1.jpg&quot;,
      &quot;url&quot;: &quot;https://cdn.example.com/products/gallery/laptop-angle1.jpg&quot;
    },
    {
      &quot;id&quot;: 3,
      &quot;filename&quot;: &quot;laptop-angle2.jpg&quot;,
      &quot;url&quot;: &quot;https://cdn.example.com/products/gallery/laptop-angle2.jpg&quot;
    }
  ],
  &quot;manual&quot;: {
    &quot;id&quot;: 4,
    &quot;filename&quot;: &quot;user-manual.pdf&quot;,
    &quot;size&quot;: 2458976,
    &quot;url&quot;: &quot;https://cdn.example.com/products/manuals/user-manual.pdf&quot;
  }
}`, $event)">
                Copy
              </button>
            </div>
            <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code>{
  <span class="text-blue-400">"id"</span>: <span class="text-purple-400">1</span>,
  <span class="text-blue-400">"name"</span>: <span class="text-green-400">"Premium Laptop"</span>,
  <span class="text-blue-400">"description"</span>: <span class="text-green-400">"High-performance laptop for professionals"</span>,
  <span class="text-blue-400">"price"</span>: <span class="text-purple-400">1299.99</span>,
  <span class="text-blue-400">"thumbnail"</span>: {
    <span class="text-blue-400">"id"</span>: <span class="text-purple-400">1</span>,
    <span class="text-blue-400">"filename"</span>: <span class="text-green-400">"laptop-thumbnail.jpg"</span>,
    <span class="text-blue-400">"path"</span>: <span class="text-green-400">"products/thumbnails/laptop-thumbnail.jpg"</span>,
    <span class="text-blue-400">"size"</span>: <span class="text-purple-400">245632</span>,
    <span class="text-blue-400">"url"</span>: <span class="text-green-400">"https://cdn.example.com/products/thumbnails/laptop-thumbnail.jpg"</span>,
    <span class="text-blue-400">"created_at"</span>: <span class="text-green-400">"2024-01-15T10:30:00Z"</span>
  },
  <span class="text-blue-400">"gallery"</span>: [
    {
      <span class="text-blue-400">"id"</span>: <span class="text-purple-400">2</span>,
      <span class="text-blue-400">"filename"</span>: <span class="text-green-400">"laptop-angle1.jpg"</span>,
      <span class="text-blue-400">"url"</span>: <span class="text-green-400">"https://cdn.example.com/products/gallery/laptop-angle1.jpg"</span>
    },
    {
      <span class="text-blue-400">"id"</span>: <span class="text-purple-400">3</span>,
      <span class="text-blue-400">"filename"</span>: <span class="text-green-400">"laptop-angle2.jpg"</span>,
      <span class="text-blue-400">"url"</span>: <span class="text-green-400">"https://cdn.example.com/products/gallery/laptop-angle2.jpg"</span>
    }
  ],
  <span class="text-blue-400">"manual"</span>: {
    <span class="text-blue-400">"id"</span>: <span class="text-purple-400">4</span>,
    <span class="text-blue-400">"filename"</span>: <span class="text-green-400">"user-manual.pdf"</span>,
    <span class="text-blue-400">"size"</span>: <span class="text-purple-400">2458976</span>,
    <span class="text-blue-400">"url"</span>: <span class="text-green-400">"https://cdn.example.com/products/manuals/user-manual.pdf"</span>
  }
}</code></pre>
          </div>
        </UCard>
      </section>

      <!-- Events -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Storage Events</h2>
        
        <p class="text-gray-600 dark:text-gray-300 mb-6">
          The storage system emits events that you can listen to for additional processing:
        </p>

        <div class="grid gap-4 md:grid-cols-2">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-upload-cloud" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Upload Events</span>
              </div>
            </template>
            <div class="space-y-2 text-sm">
              <div><code class="text-purple-600 dark:text-purple-400">{model}.{field}.uploaded</code> - File uploaded</div>
              <div><code class="text-purple-600 dark:text-purple-400">{model}.{field}.processing</code> - File processing</div>
              <div><code class="text-purple-600 dark:text-purple-400">{model}.{field}.completed</code> - Upload complete</div>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-trash" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Deletion Events</span>
              </div>
            </template>
            <div class="space-y-2 text-sm">
              <div><code class="text-purple-600 dark:text-purple-400">{model}.{field}.deleted</code> - File deleted</div>
              <div><code class="text-purple-600 dark:text-purple-400">{model}.{field}.cleanup</code> - Cleanup performed</div>
              <div><code class="text-purple-600 dark:text-purple-400">{model}.{field}.error</code> - Error occurred</div>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Best Practices -->
      <section>
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Best Practices</h2>
        
        <div class="space-y-4">
          <UAlert color="green" variant="soft">
            <template #title>✅ Do's</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Validate file types and sizes before upload</li>
                <li>Use CDN URLs for production environments</li>
                <li>Clean up orphaned files when records are deleted</li>
                <li>Use transactions when uploading multiple files</li>
                <li>Implement virus scanning for user uploads</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="red" variant="soft">
            <template #title>❌ Don'ts</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Don't store sensitive files without encryption</li>
                <li>Don't allow unlimited file sizes</li>
                <li>Don't trust client-side file validation alone</li>
                <li>Don't expose internal file paths in APIs</li>
                <li>Don't forget to set proper CORS headers for CDN</li>
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