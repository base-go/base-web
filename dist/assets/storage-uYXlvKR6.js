import{_ as g,b as f}from"./DocsLayout.vue_vue_type_script_setup_true_lang-D4FaFzot.js";import{a as y,_ as b}from"./Card-dhBREXno.js";import{d as v,u as _,c as w,w as a,a as S,b as h,e,f as l,g as t,_ as E,r as T,o as c}from"./index-c5PrNzGP.js";const k={class:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},R={class:"mb-12"},C={class:"grid gap-4 md:grid-cols-3 mb-6"},A={class:"flex items-center space-x-2"},D={class:"flex items-center space-x-2"},G={class:"flex items-center space-x-2"},O={class:"mb-12"},P={class:"space-y-6"},z={class:"flex items-center space-x-2"},j={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},U={class:"flex items-center justify-between mb-2"},N={class:"mb-12"},B={class:"space-y-6"},F={class:"grid gap-4 md:grid-cols-2"},I={class:"flex items-center space-x-2"},L={class:"space-y-3"},M={class:"text-sm"},K={class:"flex flex-wrap gap-2 mt-1"},H={class:"flex items-center space-x-2"},V={class:"space-y-3"},Y={class:"text-sm"},$={class:"flex flex-wrap gap-2 mt-1"},Z={class:"flex items-center space-x-2"},q={class:"space-y-3"},J={class:"text-sm"},Q={class:"flex flex-wrap gap-2 mt-1"},W={class:"flex items-center space-x-2"},X={class:"mb-12"},ee={class:"space-y-6"},te={class:"flex items-center space-x-2"},se={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},ae={class:"flex items-center justify-between mb-2"},le={class:"flex items-center space-x-2"},ne={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},re={class:"flex items-center justify-between mb-2"},oe={class:"flex items-center space-x-2"},ie={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},pe={class:"flex items-center justify-between mb-2"},de={class:"mb-12"},ue={class:"flex items-center space-x-2"},ce={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},xe={class:"flex items-center justify-between mb-2"},me={class:"mb-12"},ge={class:"grid gap-4 md:grid-cols-2"},fe={class:"flex items-center space-x-2"},ye={class:"flex items-center space-x-2"},be={class:"space-y-4"},he=v({__name:"storage",setup(ve){const{copy:x}=_(),d=async(u,s)=>{await x(u);const i=s.target,n=i.textContent;i.textContent="Copied!",i.classList.add("!text-green-400"),setTimeout(()=>{i.textContent=n,i.classList.remove("!text-green-400")},2e3)};return(u,s)=>{const i=y,n=E,o=b,r=f,m=T("prism");return c(),w(g,null,{default:a(()=>[S((c(),h("div",k,[s[72]||(s[72]=e("div",{class:"mb-8"},[e("h1",{class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},"Storage"),e("p",{class:"text-xl text-gray-600 dark:text-gray-300"}," Flexible file storage system with multiple provider support and automatic file handling ")],-1)),e("section",R,[s[13]||(s[13]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Overview",-1)),l(i,{color:"blue",variant:"soft",class:"mb-6"},{title:a(()=>s[5]||(s[5]=[t("🗂️ Multi-Provider Storage",-1)])),description:a(()=>s[6]||(s[6]=[t(" Base Framework's storage system provides a unified interface for file uploads with support for local storage, Amazon S3, and Cloudflare R2. It includes automatic file validation, size limits, and MIME type detection. ",-1)])),_:1}),e("div",C,[l(o,null,{header:a(()=>[e("div",A,[l(n,{name:"i-lucide-hard-drive",class:"h-5 w-5 text-blue-500"}),s[7]||(s[7]=e("span",{class:"font-semibold"},"Local Storage",-1))])]),default:a(()=>[s[8]||(s[8]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Store files directly on your server's filesystem with automatic directory creation. ",-1))]),_:1,__:[8]}),l(o,null,{header:a(()=>[e("div",D,[l(n,{name:"i-lucide-cloud",class:"h-5 w-5 text-green-500"}),s[9]||(s[9]=e("span",{class:"font-semibold"},"Amazon S3",-1))])]),default:a(()=>[s[10]||(s[10]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Scalable cloud storage with S3-compatible APIs and CDN support. ",-1))]),_:1,__:[10]}),l(o,null,{header:a(()=>[e("div",G,[l(n,{name:"i-lucide-globe",class:"h-5 w-5 text-orange-500"}),s[11]||(s[11]=e("span",{class:"font-semibold"},"Cloudflare R2",-1))])]),default:a(()=>[s[12]||(s[12]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Zero egress fee storage with global CDN and S3 compatibility. ",-1))]),_:1,__:[12]})])]),e("section",O,[s[17]||(s[17]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Configuration",-1)),e("div",P,[l(o,null,{header:a(()=>[e("div",z,[l(n,{name:"i-lucide-settings",class:"h-5 w-5 text-purple-500"}),s[14]||(s[14]=e("span",{class:"font-semibold"},"Environment Variables",-1))])]),default:a(()=>[e("div",j,[e("div",U,[s[15]||(s[15]=e("span",{class:"text-xs text-gray-400"},".env Configuration",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[0]||(s[0]=p=>d(`# Storage Provider (local, s3, r2)
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
STORAGE_R2_CDN=https://pub-xxx.r2.dev`,p))}," Copy ")]),s[16]||(s[16]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"# Storage Provider (local, s3, r2)"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_PROVIDER"),t("="),e("span",{class:"text-yellow-400"},"local"),t(`

`),e("span",{class:"text-green-400"},"# Local Storage"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_PATH"),t("="),e("span",{class:"text-yellow-400"},"./uploads"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_BASE_URL"),t("="),e("span",{class:"text-yellow-400"},"http://localhost:3000/uploads"),t(`

`),e("span",{class:"text-green-400"},"# Amazon S3"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_S3_KEY"),t("="),e("span",{class:"text-yellow-400"},"your-access-key"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_S3_SECRET"),t("="),e("span",{class:"text-yellow-400"},"your-secret-key"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_S3_BUCKET"),t("="),e("span",{class:"text-yellow-400"},"your-bucket"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_S3_REGION"),t("="),e("span",{class:"text-yellow-400"},"us-east-1"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_S3_CDN"),t("="),e("span",{class:"text-yellow-400"},"https://cdn.example.com"),t(`

`),e("span",{class:"text-green-400"},"# Cloudflare R2"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_R2_ACCOUNT_ID"),t("="),e("span",{class:"text-yellow-400"},"your-account-id"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_R2_KEY"),t("="),e("span",{class:"text-yellow-400"},"your-access-key"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_R2_SECRET"),t("="),e("span",{class:"text-yellow-400"},"your-secret-key"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_R2_BUCKET"),t("="),e("span",{class:"text-yellow-400"},"your-bucket"),t(`
`),e("span",{class:"text-blue-400"},"STORAGE_R2_CDN"),t("="),e("span",{class:"text-yellow-400"},"https://pub-xxx.r2.dev")])],-1))])]),_:1})])]),e("section",N,[s[46]||(s[46]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"File Types & Validation",-1)),e("div",B,[s[45]||(s[45]=e("p",{class:"text-gray-600 dark:text-gray-300"}," Base Framework automatically validates file types and sizes based on the field type in your models. ",-1)),e("div",F,[l(o,null,{header:a(()=>[e("div",I,[l(n,{name:"i-lucide-image",class:"h-5 w-5 text-blue-500"}),s[18]||(s[18]=e("span",{class:"font-semibold"},"Image Type",-1))])]),default:a(()=>[e("div",L,[s[25]||(s[25]=e("div",{class:"text-sm"},[e("span",{class:"font-medium text-gray-700 dark:text-gray-200"},"Max Size:"),e("span",{class:"text-gray-600 dark:text-gray-300 ml-2"},"5MB")],-1)),e("div",M,[s[24]||(s[24]=e("span",{class:"font-medium text-gray-700 dark:text-gray-200"},"Extensions:",-1)),e("div",K,[l(r,{color:"blue",variant:"soft",size:"xs"},{default:a(()=>s[19]||(s[19]=[t(".jpg",-1)])),_:1,__:[19]}),l(r,{color:"blue",variant:"soft",size:"xs"},{default:a(()=>s[20]||(s[20]=[t(".jpeg",-1)])),_:1,__:[20]}),l(r,{color:"blue",variant:"soft",size:"xs"},{default:a(()=>s[21]||(s[21]=[t(".png",-1)])),_:1,__:[21]}),l(r,{color:"blue",variant:"soft",size:"xs"},{default:a(()=>s[22]||(s[22]=[t(".gif",-1)])),_:1,__:[22]}),l(r,{color:"blue",variant:"soft",size:"xs"},{default:a(()=>s[23]||(s[23]=[t(".webp",-1)])),_:1,__:[23]})])])])]),_:1}),l(o,null,{header:a(()=>[e("div",H,[l(n,{name:"i-lucide-file",class:"h-5 w-5 text-green-500"}),s[26]||(s[26]=e("span",{class:"font-semibold"},"File Type",-1))])]),default:a(()=>[e("div",V,[s[34]||(s[34]=e("div",{class:"text-sm"},[e("span",{class:"font-medium text-gray-700 dark:text-gray-200"},"Max Size:"),e("span",{class:"text-gray-600 dark:text-gray-300 ml-2"},"50MB")],-1)),e("div",Y,[s[33]||(s[33]=e("span",{class:"font-medium text-gray-700 dark:text-gray-200"},"Extensions:",-1)),e("div",$,[l(r,{color:"green",variant:"soft",size:"xs"},{default:a(()=>s[27]||(s[27]=[t(".pdf",-1)])),_:1,__:[27]}),l(r,{color:"green",variant:"soft",size:"xs"},{default:a(()=>s[28]||(s[28]=[t(".doc",-1)])),_:1,__:[28]}),l(r,{color:"green",variant:"soft",size:"xs"},{default:a(()=>s[29]||(s[29]=[t(".docx",-1)])),_:1,__:[29]}),l(r,{color:"green",variant:"soft",size:"xs"},{default:a(()=>s[30]||(s[30]=[t(".xls",-1)])),_:1,__:[30]}),l(r,{color:"green",variant:"soft",size:"xs"},{default:a(()=>s[31]||(s[31]=[t(".xlsx",-1)])),_:1,__:[31]}),l(r,{color:"green",variant:"soft",size:"xs"},{default:a(()=>s[32]||(s[32]=[t(".ppt",-1)])),_:1,__:[32]})])])])]),_:1}),l(o,null,{header:a(()=>[e("div",Z,[l(n,{name:"i-lucide-paperclip",class:"h-5 w-5 text-purple-500"}),s[35]||(s[35]=e("span",{class:"font-semibold"},"Attachment Type",-1))])]),default:a(()=>[e("div",q,[s[42]||(s[42]=e("div",{class:"text-sm"},[e("span",{class:"font-medium text-gray-700 dark:text-gray-200"},"Max Size:"),e("span",{class:"text-gray-600 dark:text-gray-300 ml-2"},"10MB")],-1)),e("div",J,[s[41]||(s[41]=e("span",{class:"font-medium text-gray-700 dark:text-gray-200"},"Extensions:",-1)),e("div",Q,[l(r,{color:"purple",variant:"soft",size:"xs"},{default:a(()=>s[36]||(s[36]=[t(".zip",-1)])),_:1,__:[36]}),l(r,{color:"purple",variant:"soft",size:"xs"},{default:a(()=>s[37]||(s[37]=[t(".rar",-1)])),_:1,__:[37]}),l(r,{color:"purple",variant:"soft",size:"xs"},{default:a(()=>s[38]||(s[38]=[t(".7z",-1)])),_:1,__:[38]}),l(r,{color:"purple",variant:"soft",size:"xs"},{default:a(()=>s[39]||(s[39]=[t(".tar",-1)])),_:1,__:[39]}),l(r,{color:"purple",variant:"soft",size:"xs"},{default:a(()=>s[40]||(s[40]=[t("+ all file types",-1)])),_:1,__:[40]})])])])]),_:1}),l(o,null,{header:a(()=>[e("div",W,[l(n,{name:"i-lucide-file-video",class:"h-5 w-5 text-orange-500"}),s[43]||(s[43]=e("span",{class:"font-semibold"},"Custom Types",-1))])]),default:a(()=>[s[44]||(s[44]=e("div",{class:"text-sm text-gray-600 dark:text-gray-300"}," You can define custom file types with specific extensions and size limits in your models. ",-1))]),_:1,__:[44]})])])]),e("section",X,[s[56]||(s[56]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Usage Examples",-1)),e("div",ee,[l(o,null,{header:a(()=>[e("div",te,[l(n,{name:"i-lucide-code",class:"h-5 w-5 text-blue-500"}),s[47]||(s[47]=e("span",{class:"font-semibold"},"Model Definition",-1))])]),default:a(()=>[e("div",se,[e("div",ae,[s[48]||(s[48]=e("span",{class:"text-xs text-gray-400"},"models/product.go",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[1]||(s[1]=p=>d(`package models

import "base/core/storage"

type Product struct {
    ID          uint                 \`gorm:"primaryKey"\`
    Name        string               \`gorm:"not null"\`
    Description string               \`gorm:"type:text"\`
    Price       float64              \`gorm:"not null"\`
    
    // Single image field
    Thumbnail   storage.Attachment   \`gorm:"type:jsonb" field_type:"image"\`
    
    // Multiple images
    Gallery     []storage.Attachment \`gorm:"type:jsonb" field_type:"image" multiple:"true"\`
    
    // File attachments
    Manual      storage.Attachment   \`gorm:"type:jsonb" field_type:"file"\`
    Downloads   []storage.Attachment \`gorm:"type:jsonb" field_type:"attachment" multiple:"true"\`
}`,p))}," Copy ")]),s[49]||(s[49]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"package"),t(` models

`),e("span",{class:"text-blue-400"},"import"),t(),e("span",{class:"text-green-400"},'"base/core/storage"'),t(`

`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"Product"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    ID          `),e("span",{class:"text-purple-400"},"uint"),t("                 "),e("span",{class:"text-gray-400"},'`gorm:"primaryKey"`'),t(`
    Name        `),e("span",{class:"text-purple-400"},"string"),t("               "),e("span",{class:"text-gray-400"},'`gorm:"not null"`'),t(`
    Description `),e("span",{class:"text-purple-400"},"string"),t("               "),e("span",{class:"text-gray-400"},'`gorm:"type:text"`'),t(`
    Price       `),e("span",{class:"text-purple-400"},"float64"),t("              "),e("span",{class:"text-gray-400"},'`gorm:"not null"`'),t(`
    
    `),e("span",{class:"text-green-400"},"// Single image field"),t(`
    Thumbnail   storage.Attachment   `),e("span",{class:"text-gray-400"},'`gorm:"type:jsonb" field_type:"image"`'),t(`
    
    `),e("span",{class:"text-green-400"},"// Multiple images"),t(`
    Gallery     []storage.Attachment `),e("span",{class:"text-gray-400"},'`gorm:"type:jsonb" field_type:"image" multiple:"true"`'),t(`
    
    `),e("span",{class:"text-green-400"},"// File attachments"),t(`
    Manual      storage.Attachment   `),e("span",{class:"text-gray-400"},'`gorm:"type:jsonb" field_type:"file"`'),t(`
    Downloads   []storage.Attachment `),e("span",{class:"text-gray-400"},'`gorm:"type:jsonb" field_type:"attachment" multiple:"true"`'),t(`
}`)])],-1))])]),_:1}),l(o,null,{header:a(()=>[e("div",le,[l(n,{name:"i-lucide-upload",class:"h-5 w-5 text-green-500"}),s[50]||(s[50]=e("span",{class:"font-semibold"},"File Upload in Service",-1))])]),default:a(()=>[e("div",ne,[e("div",re,[s[51]||(s[51]=e("span",{class:"text-xs text-gray-400"},"services/product_service.go",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[2]||(s[2]=p=>{d(`func (s *ProductService) Create(data CreateProductRequest) (*Product, error) {
    product := &Product{
        Name:        data.Name,
        Description: data.Description,
        Price:       data.Price,
    }
    
    // Handle thumbnail upload
    if data.Thumbnail != nil {
        attachment, err := s.Storage.Upload(data.Thumbnail, "thumbnail", product)
        if err != nil {
            return nil, err
        }
        product.Thumbnail = *attachment
    }
    
    // Handle multiple gallery images
    if len(data.Gallery) > 0 {
        for _, file := range data.Gallery {
            attachment, err := s.Storage.Upload(file, "gallery", product)
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
    s.Emitter.Emit("product.uploaded", product)
    
    return product, nil
}`,p)})}," Copy ")]),s[52]||(s[52]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),t(" (s *ProductService) "),e("span",{class:"text-yellow-400"},"Create"),t("(data CreateProductRequest) (*Product, "),e("span",{class:"text-purple-400"},"error"),t(`) {
    product := &Product{
        Name:        data.Name,
        Description: data.Description,
        Price:       data.Price,
    }
    
    `),e("span",{class:"text-green-400"},"// Handle thumbnail upload"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" data.Thumbnail != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        attachment, err := s.Storage.Upload(data.Thumbnail, `),e("span",{class:"text-green-400"},'"thumbnail"'),t(`, product)
        `),e("span",{class:"text-blue-400"},"if"),t(" err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
            `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`, err
        }
        product.Thumbnail = *attachment
    }
    
    `),e("span",{class:"text-green-400"},"// Handle multiple gallery images"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(),e("span",{class:"text-yellow-400"},"len"),t("(data.Gallery) > "),e("span",{class:"text-purple-400"},"0"),t(` {
        `),e("span",{class:"text-blue-400"},"for"),t(" _, file := "),e("span",{class:"text-blue-400"},"range"),t(` data.Gallery {
            attachment, err := s.Storage.Upload(file, `),e("span",{class:"text-green-400"},'"gallery"'),t(`, product)
            `),e("span",{class:"text-blue-400"},"if"),t(" err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
                `),e("span",{class:"text-blue-400"},"continue"),t(),e("span",{class:"text-green-400"},"// or handle error"),t(`
            }
            product.Gallery = `),e("span",{class:"text-yellow-400"},"append"),t(`(product.Gallery, *attachment)
        }
    }
    
    `),e("span",{class:"text-green-400"},"// Save product with attachments"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Create(product).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`, err
    }
    
    `),e("span",{class:"text-green-400"},"// Emit upload event"),t(`
    s.Emitter.Emit(`),e("span",{class:"text-green-400"},'"product.uploaded"'),t(`, product)
    
    `),e("span",{class:"text-blue-400"},"return"),t(" product, "),e("span",{class:"text-purple-400"},"nil"),t(`
}`)])],-1))])]),_:1}),l(o,null,{header:a(()=>[e("div",oe,[l(n,{name:"i-lucide-trash-2",class:"h-5 w-5 text-red-500"}),s[53]||(s[53]=e("span",{class:"font-semibold"},"File Deletion",-1))])]),default:a(()=>[e("div",ie,[e("div",pe,[s[54]||(s[54]=e("span",{class:"text-xs text-gray-400"},"Deleting Files",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[3]||(s[3]=p=>{d(`// Delete single file
if product.Thumbnail.Path != "" {
    err := s.Storage.Delete(product.Thumbnail.Path)
    if err != nil {
        s.Logger.Error("Failed to delete thumbnail", "error", err)
    }
}

// Delete multiple files
for _, attachment := range product.Gallery {
    if err := s.Storage.Delete(attachment.Path); err != nil {
        s.Logger.Error("Failed to delete gallery image", "error", err)
    }
}

// Clear from database
product.Thumbnail = storage.Attachment{}
product.Gallery = []storage.Attachment{}
s.DB.Save(product)`,p)})}," Copy ")]),s[55]||(s[55]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Delete single file"),t(`
`),e("span",{class:"text-blue-400"},"if"),t(" product.Thumbnail.Path != "),e("span",{class:"text-green-400"},'""'),t(` {
    err := s.Storage.Delete(product.Thumbnail.Path)
    `),e("span",{class:"text-blue-400"},"if"),t(" err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to delete thumbnail"'),t(", "),e("span",{class:"text-green-400"},'"error"'),t(`, err)
    }
}

`),e("span",{class:"text-green-400"},"// Delete multiple files"),t(`
`),e("span",{class:"text-blue-400"},"for"),t(" _, attachment := "),e("span",{class:"text-blue-400"},"range"),t(` product.Gallery {
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.Storage.Delete(attachment.Path); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to delete gallery image"'),t(", "),e("span",{class:"text-green-400"},'"error"'),t(`, err)
    }
}

`),e("span",{class:"text-green-400"},"// Clear from database"),t(`
product.Thumbnail = storage.Attachment{}
product.Gallery = []storage.Attachment{}
s.DB.Save(product)`)])],-1))])]),_:1})])]),e("section",de,[s[60]||(s[60]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"API Response",-1)),l(o,null,{header:a(()=>[e("div",ue,[l(n,{name:"i-lucide-send",class:"h-5 w-5 text-blue-500"}),s[57]||(s[57]=e("span",{class:"font-semibold"},"JSON Response with Attachments",-1))])]),default:a(()=>[e("div",ce,[e("div",xe,[s[58]||(s[58]=e("span",{class:"text-xs text-gray-400"},"GET /api/products/1",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[4]||(s[4]=p=>d(`{
  "id": 1,
  "name": "Premium Laptop",
  "description": "High-performance laptop for professionals",
  "price": 1299.99,
  "thumbnail": {
    "id": 1,
    "filename": "laptop-thumbnail.jpg",
    "path": "products/thumbnails/laptop-thumbnail.jpg",
    "size": 245632,
    "url": "https://cdn.example.com/products/thumbnails/laptop-thumbnail.jpg",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "gallery": [
    {
      "id": 2,
      "filename": "laptop-angle1.jpg",
      "url": "https://cdn.example.com/products/gallery/laptop-angle1.jpg"
    },
    {
      "id": 3,
      "filename": "laptop-angle2.jpg",
      "url": "https://cdn.example.com/products/gallery/laptop-angle2.jpg"
    }
  ],
  "manual": {
    "id": 4,
    "filename": "user-manual.pdf",
    "size": 2458976,
    "url": "https://cdn.example.com/products/manuals/user-manual.pdf"
  }
}`,p))}," Copy ")]),s[59]||(s[59]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[t(`{
  `),e("span",{class:"text-blue-400"},'"id"'),t(": "),e("span",{class:"text-purple-400"},"1"),t(`,
  `),e("span",{class:"text-blue-400"},'"name"'),t(": "),e("span",{class:"text-green-400"},'"Premium Laptop"'),t(`,
  `),e("span",{class:"text-blue-400"},'"description"'),t(": "),e("span",{class:"text-green-400"},'"High-performance laptop for professionals"'),t(`,
  `),e("span",{class:"text-blue-400"},'"price"'),t(": "),e("span",{class:"text-purple-400"},"1299.99"),t(`,
  `),e("span",{class:"text-blue-400"},'"thumbnail"'),t(`: {
    `),e("span",{class:"text-blue-400"},'"id"'),t(": "),e("span",{class:"text-purple-400"},"1"),t(`,
    `),e("span",{class:"text-blue-400"},'"filename"'),t(": "),e("span",{class:"text-green-400"},'"laptop-thumbnail.jpg"'),t(`,
    `),e("span",{class:"text-blue-400"},'"path"'),t(": "),e("span",{class:"text-green-400"},'"products/thumbnails/laptop-thumbnail.jpg"'),t(`,
    `),e("span",{class:"text-blue-400"},'"size"'),t(": "),e("span",{class:"text-purple-400"},"245632"),t(`,
    `),e("span",{class:"text-blue-400"},'"url"'),t(": "),e("span",{class:"text-green-400"},'"https://cdn.example.com/products/thumbnails/laptop-thumbnail.jpg"'),t(`,
    `),e("span",{class:"text-blue-400"},'"created_at"'),t(": "),e("span",{class:"text-green-400"},'"2024-01-15T10:30:00Z"'),t(`
  },
  `),e("span",{class:"text-blue-400"},'"gallery"'),t(`: [
    {
      `),e("span",{class:"text-blue-400"},'"id"'),t(": "),e("span",{class:"text-purple-400"},"2"),t(`,
      `),e("span",{class:"text-blue-400"},'"filename"'),t(": "),e("span",{class:"text-green-400"},'"laptop-angle1.jpg"'),t(`,
      `),e("span",{class:"text-blue-400"},'"url"'),t(": "),e("span",{class:"text-green-400"},'"https://cdn.example.com/products/gallery/laptop-angle1.jpg"'),t(`
    },
    {
      `),e("span",{class:"text-blue-400"},'"id"'),t(": "),e("span",{class:"text-purple-400"},"3"),t(`,
      `),e("span",{class:"text-blue-400"},'"filename"'),t(": "),e("span",{class:"text-green-400"},'"laptop-angle2.jpg"'),t(`,
      `),e("span",{class:"text-blue-400"},'"url"'),t(": "),e("span",{class:"text-green-400"},'"https://cdn.example.com/products/gallery/laptop-angle2.jpg"'),t(`
    }
  ],
  `),e("span",{class:"text-blue-400"},'"manual"'),t(`: {
    `),e("span",{class:"text-blue-400"},'"id"'),t(": "),e("span",{class:"text-purple-400"},"4"),t(`,
    `),e("span",{class:"text-blue-400"},'"filename"'),t(": "),e("span",{class:"text-green-400"},'"user-manual.pdf"'),t(`,
    `),e("span",{class:"text-blue-400"},'"size"'),t(": "),e("span",{class:"text-purple-400"},"2458976"),t(`,
    `),e("span",{class:"text-blue-400"},'"url"'),t(": "),e("span",{class:"text-green-400"},'"https://cdn.example.com/products/manuals/user-manual.pdf"'),t(`
  }
}`)])],-1))])]),_:1})]),e("section",me,[s[65]||(s[65]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Storage Events",-1)),s[66]||(s[66]=e("p",{class:"text-gray-600 dark:text-gray-300 mb-6"}," The storage system emits events that you can listen to for additional processing: ",-1)),e("div",ge,[l(o,null,{header:a(()=>[e("div",fe,[l(n,{name:"i-lucide-upload-cloud",class:"h-5 w-5 text-green-500"}),s[61]||(s[61]=e("span",{class:"font-semibold"},"Upload Events",-1))])]),default:a(()=>[s[62]||(s[62]=e("div",{class:"space-y-2 text-sm"},[e("div",null,[e("code",{class:"text-purple-600 dark:text-purple-400"},"{model}.{field}.uploaded"),t(" - File uploaded")]),e("div",null,[e("code",{class:"text-purple-600 dark:text-purple-400"},"{model}.{field}.processing"),t(" - File processing")]),e("div",null,[e("code",{class:"text-purple-600 dark:text-purple-400"},"{model}.{field}.completed"),t(" - Upload complete")])],-1))]),_:1,__:[62]}),l(o,null,{header:a(()=>[e("div",ye,[l(n,{name:"i-lucide-trash",class:"h-5 w-5 text-red-500"}),s[63]||(s[63]=e("span",{class:"font-semibold"},"Deletion Events",-1))])]),default:a(()=>[s[64]||(s[64]=e("div",{class:"space-y-2 text-sm"},[e("div",null,[e("code",{class:"text-purple-600 dark:text-purple-400"},"{model}.{field}.deleted"),t(" - File deleted")]),e("div",null,[e("code",{class:"text-purple-600 dark:text-purple-400"},"{model}.{field}.cleanup"),t(" - Cleanup performed")]),e("div",null,[e("code",{class:"text-purple-600 dark:text-purple-400"},"{model}.{field}.error"),t(" - Error occurred")])],-1))]),_:1,__:[64]})])]),e("section",null,[s[71]||(s[71]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Best Practices",-1)),e("div",be,[l(i,{color:"green",variant:"soft"},{title:a(()=>s[67]||(s[67]=[t("✅ Do's",-1)])),description:a(()=>s[68]||(s[68]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Validate file types and sizes before upload"),e("li",null,"Use CDN URLs for production environments"),e("li",null,"Clean up orphaned files when records are deleted"),e("li",null,"Use transactions when uploading multiple files"),e("li",null,"Implement virus scanning for user uploads")],-1)])),_:1}),l(i,{color:"red",variant:"soft"},{title:a(()=>s[69]||(s[69]=[t("❌ Don'ts",-1)])),description:a(()=>s[70]||(s[70]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Don't store sensitive files without encryption"),e("li",null,"Don't allow unlimited file sizes"),e("li",null,"Don't trust client-side file validation alone"),e("li",null,"Don't expose internal file paths in APIs"),e("li",null,"Don't forget to set proper CORS headers for CDN")],-1)])),_:1})])])])),[[m]])]),_:1})}}});export{he as default};
