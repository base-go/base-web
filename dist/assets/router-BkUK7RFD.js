import{a as o,_ as x}from"./Card-dhBREXno.js";import{d as u,u as d,c as g,w as a,a as m,b as f,e,f as n,g as s,_ as b,r as w,o as c}from"./index-c5PrNzGP.js";import{_ as y}from"./DocsLayout.vue_vue_type_script_setup_true_lang-D4FaFzot.js";const h={class:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},v={class:"mb-12"},C={class:"grid gap-4 md:grid-cols-3 mb-6"},S={class:"flex items-center space-x-2"},P={class:"flex items-center space-x-2"},R={class:"flex items-center space-x-2"},_={class:"mb-12"},E={class:"space-y-6"},T={class:"flex items-center space-x-2"},A={class:"flex items-center space-x-2"},N={class:"mb-12"},I={class:"space-y-6"},q={class:"flex items-center space-x-2"},H={class:"mb-12"},k={class:"space-y-6"},O={class:"flex items-center space-x-2"},F={class:"flex items-center space-x-2"},U={class:"mb-12"},M={class:"space-y-6"},G={class:"flex items-center space-x-2"},D={class:"flex items-center space-x-2"},J={class:"mb-12"},j={class:"space-y-6"},L={class:"flex items-center space-x-2"},B={class:"mb-12"},V={class:"space-y-6"},z={class:"flex items-center space-x-2"},Q={class:"flex items-center space-x-2"},$={class:"mb-12"},W={class:"space-y-6"},K={class:"flex items-center space-x-2"},X={class:"mb-12"},Z={class:"space-y-6"},Y={class:"grid gap-4 md:grid-cols-2"},ee={class:"flex items-center space-x-2"},se={class:"space-y-3 text-sm"},te={class:"flex items-start space-x-2"},ne={class:"flex items-start space-x-2"},ae={class:"flex items-start space-x-2"},re={class:"flex items-start space-x-2"},le={class:"flex items-start space-x-2"},pe={class:"flex items-center space-x-2"},ce={class:"space-y-6"},ie={class:"flex items-center space-x-2"},me=u({__name:"router",setup(oe){return d(),(xe,t)=>{const p=o,r=b,l=x,i=w("prism");return c(),g(y,null,{default:a(()=>[m((c(),f("div",h,[t[54]||(t[54]=e("div",{class:"mb-8"},[e("h1",{class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},"Router"),e("p",{class:"text-xl text-gray-600 dark:text-gray-300"}," Zero-dependency HTTP router with radix tree routing, middleware chaining, and high-performance request handling ")],-1)),e("section",v,[t[8]||(t[8]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Overview",-1)),n(p,{color:"blue",variant:"soft",class:"mb-6"},{title:a(()=>t[0]||(t[0]=[s("🚀 High-Performance Router",-1)])),description:a(()=>t[1]||(t[1]=[s(" Base Framework's router is a lightweight, zero-dependency HTTP router built with radix tree routing for optimal performance. It features middleware chaining, context pooling, and comprehensive request/response handling. ",-1)])),_:1}),e("div",C,[n(l,null,{header:a(()=>[e("div",S,[n(r,{name:"i-lucide-zap",class:"h-5 w-5 text-yellow-500"}),t[2]||(t[2]=e("span",{class:"font-semibold"},"Radix Tree Routing",-1))])]),default:a(()=>[t[3]||(t[3]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Efficient URL pattern matching with parameter extraction and wildcard support. ",-1))]),_:1,__:[3]}),n(l,null,{header:a(()=>[e("div",P,[n(r,{name:"i-lucide-layers",class:"h-5 w-5 text-blue-500"}),t[4]||(t[4]=e("span",{class:"font-semibold"},"Middleware Chaining",-1))])]),default:a(()=>[t[5]||(t[5]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Composable middleware with global and route-specific support for cross-cutting concerns. ",-1))]),_:1,__:[5]}),n(l,null,{header:a(()=>[e("div",R,[n(r,{name:"i-lucide-cpu",class:"h-5 w-5 text-green-500"}),t[6]||(t[6]=e("span",{class:"font-semibold"},"Context Pooling",-1))])]),default:a(()=>[t[7]||(t[7]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Memory-efficient context reuse with zero-allocation routing for high-throughput applications. ",-1))]),_:1,__:[7]})])]),e("section",_,[t[13]||(t[13]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Route Definition & Registration",-1)),e("div",E,[n(l,null,{header:a(()=>[e("div",T,[n(r,{name:"i-lucide-route",class:"h-5 w-5 text-blue-500"}),t[9]||(t[9]=e("span",{class:"font-semibold"},"Basic Route Registration",-1))])]),default:a(()=>[t[10]||(t[10]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Basic HTTP Methods")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[s("r := router."),e("span",{class:"text-yellow-400"},"New"),s(`()

`),e("span",{class:"text-green-400"},"// Basic HTTP methods"),s(`
r.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/users"'),s(`, handleGetUsers)
r.`),e("span",{class:"text-yellow-400"},"POST"),s("("),e("span",{class:"text-green-400"},'"/users"'),s(`, handleCreateUser)
r.`),e("span",{class:"text-yellow-400"},"PUT"),s("("),e("span",{class:"text-green-400"},'"/users/:id"'),s(`, handleUpdateUser)
r.`),e("span",{class:"text-yellow-400"},"DELETE"),s("("),e("span",{class:"text-green-400"},'"/users/:id"'),s(`, handleDeleteUser)
r.`),e("span",{class:"text-yellow-400"},"PATCH"),s("("),e("span",{class:"text-green-400"},'"/users/:id"'),s(`, handlePatchUser)

`),e("span",{class:"text-green-400"},"// Generic handler for any HTTP method"),s(`
r.`),e("span",{class:"text-yellow-400"},"Handle"),s("("),e("span",{class:"text-green-400"},'"GET"'),s(", "),e("span",{class:"text-green-400"},'"/custom"'),s(", handleCustom)")])])],-1))]),_:1,__:[10]}),n(l,null,{header:a(()=>[e("div",A,[n(r,{name:"i-lucide-folder-tree",class:"h-5 w-5 text-purple-500"}),t[11]||(t[11]=e("span",{class:"font-semibold"},"Route Groups",-1))])]),default:a(()=>[t[12]||(t[12]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Grouping Routes with Prefixes")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// API v1 group"),s(`
api := r.`),e("span",{class:"text-yellow-400"},"Group"),s("("),e("span",{class:"text-green-400"},'"/api/v1"'),s(`)
api.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/users"'),s(`, handleGetUsers)
api.`),e("span",{class:"text-yellow-400"},"POST"),s("("),e("span",{class:"text-green-400"},'"/users"'),s(`, handleCreateUser)

`),e("span",{class:"text-green-400"},"// Admin group with middleware"),s(`
admin := r.`),e("span",{class:"text-yellow-400"},"Group"),s("("),e("span",{class:"text-green-400"},'"/admin"'),s(`, AuthMiddleware(), AdminMiddleware())
admin.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/users"'),s(`, handleAdminGetUsers)
admin.`),e("span",{class:"text-yellow-400"},"DELETE"),s("("),e("span",{class:"text-green-400"},'"/users/:id"'),s(`, handleAdminDeleteUser)

`),e("span",{class:"text-green-400"},"// Nested groups"),s(`
v2 := api.`),e("span",{class:"text-yellow-400"},"Group"),s("("),e("span",{class:"text-green-400"},'"/v2"'),s(`)
v2.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/posts"'),s(`, handleGetPostsV2)

`),e("span",{class:"text-green-400"},"// Group with multiple middleware"),s(`
protected := r.`),e("span",{class:"text-yellow-400"},"Group"),s("("),e("span",{class:"text-green-400"},'"/protected"'),s(`, 
    middleware.Logger(loggerConfig),
    middleware.Auth(authConfig),
    middleware.RateLimit(rateLimitConfig),
)
protected.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/profile"'),s(", handleProfile)")])])],-1))]),_:1,__:[12]})])]),e("section",N,[t[16]||(t[16]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Context API & Request Handling",-1)),e("div",I,[n(l,null,{header:a(()=>[e("div",q,[n(r,{name:"i-lucide-file-text",class:"h-5 w-5 text-green-500"}),t[14]||(t[14]=e("span",{class:"font-semibold"},"Context Interface",-1))])]),default:a(()=>[t[15]||(t[15]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Basic Handler Function")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"handleUser"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-green-400"},"// Access request information"),s(`
    method := c.Request.Method
    path := c.Request.URL.Path
    userAgent := c.Request.UserAgent()
    clientIP := c.ClientIP()
    
    `),e("span",{class:"text-green-400"},"// Get headers"),s(`
    authHeader := c.Header(`),e("span",{class:"text-green-400"},'"Authorization"'),s(`)
    contentType := c.ContentType()
    
    `),e("span",{class:"text-green-400"},"// Store data in context for other middleware/handlers"),s(`
    c.Set(`),e("span",{class:"text-green-400"},'"user_id"'),s(", "),e("span",{class:"text-purple-400"},"123"),s(`)
    c.Set(`),e("span",{class:"text-green-400"},'"request_start"'),s(`, time.Now())
    
    `),e("span",{class:"text-green-400"},"// Retrieve stored data"),s(`
    userID, exists := c.Get(`),e("span",{class:"text-green-400"},'"user_id"'),s(`)
    `),e("span",{class:"text-blue-400"},"if"),s(` exists {
        c.Logger.Info(`),e("span",{class:"text-green-400"},'"Processing for user"'),s(", "),e("span",{class:"text-green-400"},'"id"'),s(`, userID)
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-blue-400"},"any"),s(`{
        `),e("span",{class:"text-green-400"},'"message"'),s(": "),e("span",{class:"text-green-400"},'"Success"'),s(`,
        `),e("span",{class:"text-green-400"},'"ip"'),s(`: clientIP,
        `),e("span",{class:"text-green-400"},'"method"'),s(`: method,
    })
}`)])])],-1))]),_:1,__:[15]})])]),e("section",H,[t[21]||(t[21]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Route Parameters & Query Strings",-1)),e("div",k,[n(l,null,{header:a(()=>[e("div",O,[n(r,{name:"i-lucide-link",class:"h-5 w-5 text-blue-500"}),t[17]||(t[17]=e("span",{class:"font-semibold"},"URL Parameters",-1))])]),default:a(()=>[t[18]||(t[18]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Parameter Extraction")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Route with parameters"),s(`
r.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/users/:id/posts/:postId"'),s(", "),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-green-400"},"// Named parameters"),s(`
    userID := c.Param(`),e("span",{class:"text-green-400"},'"id"'),s(`)
    postID := c.Param(`),e("span",{class:"text-green-400"},'"postId"'),s(`)
    
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
        `),e("span",{class:"text-green-400"},'"user_id"'),s(`: userID,
        `),e("span",{class:"text-green-400"},'"post_id"'),s(`: postID,
    })
})

`),e("span",{class:"text-green-400"},"// Wildcard routes"),s(`
r.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/files/*filepath"'),s(", "),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    filepath := c.Param(`),e("span",{class:"text-green-400"},'"filepath"'),s(`)
    `),e("span",{class:"text-green-400"},"// filepath captures everything after /files/"),s(`
    `),e("span",{class:"text-blue-400"},"return"),s(" c.File("),e("span",{class:"text-green-400"},'"./static/"'),s(` + filepath)
})

`),e("span",{class:"text-green-400"},"// Multiple parameters with validation"),s(`
r.`),e("span",{class:"text-yellow-400"},"GET"),s("("),e("span",{class:"text-green-400"},'"/api/v1/users/:id/orders/:orderNumber"'),s(", "),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    userID := c.Param(`),e("span",{class:"text-green-400"},'"id"'),s(`)
    orderNumber := c.Param(`),e("span",{class:"text-green-400"},'"orderNumber"'),s(`)
    
    `),e("span",{class:"text-green-400"},"// Convert to appropriate types"),s(`
    id, err := strconv.Atoi(userID)
    `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid user ID"'),s(`})
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(` handleOrder(c, id, orderNumber)
})`)])])],-1))]),_:1,__:[18]}),n(l,null,{header:a(()=>[e("div",F,[n(r,{name:"i-lucide-search",class:"h-5 w-5 text-green-500"}),t[19]||(t[19]=e("span",{class:"font-semibold"},"Query Parameters",-1))])]),default:a(()=>[t[20]||(t[20]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Query String Handling")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"handleSearch"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-green-400"},"// Single query parameter"),s(`
    query := c.Query(`),e("span",{class:"text-green-400"},'"q"'),s(`)
    page := c.DefaultQuery(`),e("span",{class:"text-green-400"},'"page"'),s(", "),e("span",{class:"text-green-400"},'"1"'),s(`)
    
    `),e("span",{class:"text-green-400"},"// Check if parameter exists"),s(`
    category, exists := c.GetQuery(`),e("span",{class:"text-green-400"},'"category"'),s(`)
    `),e("span",{class:"text-blue-400"},"if"),s(` !exists {
        category = `),e("span",{class:"text-green-400"},'"all"'),s(`
    }
    
    `),e("span",{class:"text-green-400"},"// Multiple values for same parameter"),s(`
    tags, hasTag := c.GetQueryArray(`),e("span",{class:"text-green-400"},'"tags"'),s(`)
    `),e("span",{class:"text-blue-400"},"if"),s(` hasTag {
        `),e("span",{class:"text-green-400"},"// Process array of tags: ?tags=go&tags=web&tags=api"),s(`
        c.Logger.Info(`),e("span",{class:"text-green-400"},'"Tags"'),s(", "),e("span",{class:"text-green-400"},'"values"'),s(`, tags)
    }
    
    `),e("span",{class:"text-green-400"},"// Convert query parameters"),s(`
    limitStr := c.DefaultQuery(`),e("span",{class:"text-green-400"},'"limit"'),s(", "),e("span",{class:"text-green-400"},'"10"'),s(`)
    limit, err := strconv.Atoi(limitStr)
    `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
            `),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid limit parameter"'),s(`,
        })
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-blue-400"},"any"),s(`{
        `),e("span",{class:"text-green-400"},'"query"'),s(`: query,
        `),e("span",{class:"text-green-400"},'"page"'),s(`: page,
        `),e("span",{class:"text-green-400"},'"category"'),s(`: category,
        `),e("span",{class:"text-green-400"},'"tags"'),s(`: tags,
        `),e("span",{class:"text-green-400"},'"limit"'),s(`: limit,
    })
}`)])])],-1))]),_:1,__:[20]})])]),e("section",U,[t[26]||(t[26]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Request Binding & Validation",-1)),e("div",M,[n(l,null,{header:a(()=>[e("div",G,[n(r,{name:"i-lucide-file-input",class:"h-5 w-5 text-purple-500"}),t[22]||(t[22]=e("span",{class:"font-semibold"},"JSON & Form Binding",-1))])]),default:a(()=>[t[23]||(t[23]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Auto Content-Type Detection")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"type"),s(),e("span",{class:"text-yellow-400"},"CreateUserRequest"),s(),e("span",{class:"text-blue-400"},"struct"),s(` {
    Name     `),e("span",{class:"text-purple-400"},"string"),s(),e("span",{class:"text-gray-400"},'`json:"name" form:"name" validate:"required,min=2"`'),s(`
    Email    `),e("span",{class:"text-purple-400"},"string"),s(),e("span",{class:"text-gray-400"},'`json:"email" form:"email" validate:"required,email"`'),s(`
    Age      `),e("span",{class:"text-purple-400"},"int"),s("    "),e("span",{class:"text-gray-400"},'`json:"age" form:"age" validate:"min=18,max=100"`'),s(`
    IsActive `),e("span",{class:"text-purple-400"},"bool"),s("   "),e("span",{class:"text-gray-400"},'`json:"is_active" form:"is_active"`'),s(`
}

`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"createUser"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-blue-400"},"var"),s(` req CreateUserRequest
    
    `),e("span",{class:"text-green-400"},"// Auto-detects content type and binds accordingly"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" err := c.Bind(&req); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
            `),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid request format"'),s(`,
            `),e("span",{class:"text-green-400"},'"details"'),s(`: err.Error(),
        })
    }
    
    `),e("span",{class:"text-green-400"},"// Manual binding for specific content types"),s(`
    `),e("span",{class:"text-blue-400"},"var"),s(` jsonReq CreateUserRequest
    `),e("span",{class:"text-blue-400"},"if"),s(" err := c.BindJSON(&jsonReq); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid JSON"'),s(`})
    }
    
    `),e("span",{class:"text-green-400"},"// Form binding"),s(`
    `),e("span",{class:"text-blue-400"},"var"),s(` formReq CreateUserRequest
    `),e("span",{class:"text-blue-400"},"if"),s(" err := c.BindForm(&formReq); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid form data"'),s(`})
    }
    
    `),e("span",{class:"text-green-400"},"// Query parameter binding"),s(`
    `),e("span",{class:"text-blue-400"},"var"),s(` queryReq CreateUserRequest
    `),e("span",{class:"text-blue-400"},"if"),s(" err := c.BindQuery(&queryReq); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid query params"'),s(`})
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"201"),s(`, req)
}`)])])],-1))]),_:1,__:[23]}),n(l,null,{header:a(()=>[e("div",D,[n(r,{name:"i-lucide-upload",class:"h-5 w-5 text-orange-500"}),t[24]||(t[24]=e("span",{class:"font-semibold"},"File Upload Handling",-1))])]),default:a(()=>[t[25]||(t[25]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Multipart File Handling")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"uploadFile"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-green-400"},"// Single file upload"),s(`
    file, err := c.FormFile(`),e("span",{class:"text-green-400"},'"upload"'),s(`)
    `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
            `),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"No file provided"'),s(`,
        })
    }
    
    `),e("span",{class:"text-green-400"},"// Access file metadata"),s(`
    filename := file.Filename
    size := file.Size
    contentType := file.Header.Get(`),e("span",{class:"text-green-400"},'"Content-Type"'),s(`)
    
    `),e("span",{class:"text-green-400"},"// Process multipart form"),s(`
    form, err := c.MultipartForm()
    `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
            `),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid multipart form"'),s(`,
        })
    }
    
    `),e("span",{class:"text-green-400"},"// Handle multiple files"),s(`
    files := form.File[`),e("span",{class:"text-green-400"},'"files"'),s(`]
    `),e("span",{class:"text-blue-400"},"for"),s(" _, fileHeader := "),e("span",{class:"text-blue-400"},"range"),s(` files {
        `),e("span",{class:"text-green-400"},"// Process each file"),s(`
        file, err := fileHeader.Open()
        `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
            `),e("span",{class:"text-blue-400"},"continue"),s(`
        }
        `),e("span",{class:"text-blue-400"},"defer"),s(` file.Close()
        
        `),e("span",{class:"text-green-400"},"// Save file logic here"),s(`
        c.Logger.Info(`),e("span",{class:"text-green-400"},'"Processing file"'),s(", "),e("span",{class:"text-green-400"},'"name"'),s(`, fileHeader.Filename)
    }
    
    `),e("span",{class:"text-green-400"},"// Get form values from multipart form"),s(`
    title := c.FormValue(`),e("span",{class:"text-green-400"},'"title"'),s(`)
    description := c.FormValue(`),e("span",{class:"text-green-400"},'"description"'),s(`)
    
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-blue-400"},"any"),s(`{
        `),e("span",{class:"text-green-400"},'"message"'),s(": "),e("span",{class:"text-green-400"},'"Files uploaded successfully"'),s(`,
        `),e("span",{class:"text-green-400"},'"filename"'),s(`: filename,
        `),e("span",{class:"text-green-400"},'"size"'),s(`: size,
        `),e("span",{class:"text-green-400"},'"content_type"'),s(`: contentType,
        `),e("span",{class:"text-green-400"},'"title"'),s(`: title,
    })
}`)])])],-1))]),_:1,__:[25]})])]),e("section",J,[t[29]||(t[29]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Response Methods & Content Types",-1)),e("div",j,[n(l,null,{header:a(()=>[e("div",L,[n(r,{name:"i-lucide-send",class:"h-5 w-5 text-blue-500"}),t[27]||(t[27]=e("span",{class:"font-semibold"},"JSON & Data Responses",-1))])]),default:a(()=>[t[28]||(t[28]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Response Formats")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"handleResponses"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-green-400"},"// JSON response"),s(`
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-blue-400"},"any"),s(`{
        `),e("span",{class:"text-green-400"},'"message"'),s(": "),e("span",{class:"text-green-400"},'"Success"'),s(`,
        `),e("span",{class:"text-green-400"},'"data"'),s(": []"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"item1"'),s(", "),e("span",{class:"text-green-400"},'"item2"'),s(`},
        `),e("span",{class:"text-green-400"},'"count"'),s(": "),e("span",{class:"text-purple-400"},"2"),s(`,
    })
    
    `),e("span",{class:"text-green-400"},"// String response"),s(`
    `),e("span",{class:"text-blue-400"},"return"),s(" c.String("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-green-400"},'"Plain text response"'),s(`)
    
    `),e("span",{class:"text-green-400"},"// HTML response"),s(`
    html := `),e("span",{class:"text-green-400"},"`<h1>Hello World</h1><p>This is HTML content</p>`"),s(`
    `),e("span",{class:"text-blue-400"},"return"),s(" c.HTML("),e("span",{class:"text-purple-400"},"200"),s(`, html)
    
    `),e("span",{class:"text-green-400"},"// Raw data response"),s(`
    data := []`),e("span",{class:"text-purple-400"},"byte"),s("("),e("span",{class:"text-green-400"},'"binary data here"'),s(`)
    `),e("span",{class:"text-blue-400"},"return"),s(" c.Data("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-green-400"},'"application/octet-stream"'),s(`, data)
    
    `),e("span",{class:"text-green-400"},"// File response"),s(`
    c.File(`),e("span",{class:"text-green-400"},'"/path/to/file.pdf"'),s(`)
    
    `),e("span",{class:"text-green-400"},"// No content response"),s(`
    `),e("span",{class:"text-blue-400"},"return"),s(` c.NoContent()
    
    `),e("span",{class:"text-green-400"},"// Custom headers with response"),s(`
    c.SetHeader(`),e("span",{class:"text-green-400"},'"X-Custom-Header"'),s(", "),e("span",{class:"text-green-400"},'"custom-value"'),s(`)
    c.SetHeader(`),e("span",{class:"text-green-400"},'"Cache-Control"'),s(", "),e("span",{class:"text-green-400"},'"max-age=3600"'),s(`)
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"200"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"status"'),s(": "),e("span",{class:"text-green-400"},'"ok"'),s(`})
}

`),e("span",{class:"text-green-400"},"// Error response helper"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"handleError"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    err := errors.New(`),e("span",{class:"text-green-400"},'"something went wrong"'),s(`)
    `),e("span",{class:"text-blue-400"},"return"),s(" c.Error("),e("span",{class:"text-purple-400"},"500"),s(", err) "),e("span",{class:"text-green-400"},"// Automatically formats as JSON error"),s(`
}

`),e("span",{class:"text-green-400"},"// Redirect responses"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"handleRedirect"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-blue-400"},"return"),s(" c.Redirect("),e("span",{class:"text-purple-400"},"302"),s(", "),e("span",{class:"text-green-400"},'"https://example.com"'),s(`)
}`)])])],-1))]),_:1,__:[28]})])]),e("section",B,[t[34]||(t[34]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Middleware Usage & Custom Middleware",-1)),e("div",V,[n(l,null,{header:a(()=>[e("div",z,[n(r,{name:"i-lucide-layers",class:"h-5 w-5 text-purple-500"}),t[30]||(t[30]=e("span",{class:"font-semibold"},"Built-in Middleware",-1))])]),default:a(()=>[t[31]||(t[31]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Common Middleware Setup")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"import"),s(` (
    `),e("span",{class:"text-green-400"},'"base/core/router"'),s(`
    `),e("span",{class:"text-green-400"},'"base/core/router/middleware"'),s(`
    `),e("span",{class:"text-green-400"},'"base/core/logger"'),s(`
)

`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"setupRouter"),s(`() *router.Router {
    r := router.New()
    log := logger.New()
    
    `),e("span",{class:"text-green-400"},"// Global middleware (applied to all routes)"),s(`
    r.Use(middleware.Recovery(log))
    r.Use(middleware.RequestID())
    r.Use(middleware.Logger(middleware.DefaultLoggerConfig(log)))
    r.Use(middleware.RateLimit(middleware.DefaultRateLimitConfig()))
    
    `),e("span",{class:"text-green-400"},"// Authentication middleware"),s(`
    authConfig := middleware.DefaultAuthConfig()
    authConfig.TokenValidator = validateJWTToken
    authConfig.SkipPaths = []`),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"/login"'),s(", "),e("span",{class:"text-green-400"},'"/register"'),s(", "),e("span",{class:"text-green-400"},'"/health"'),s(`}
    
    `),e("span",{class:"text-green-400"},"// Public routes"),s(`
    r.GET(`),e("span",{class:"text-green-400"},'"/health"'),s(`, handleHealth)
    r.POST(`),e("span",{class:"text-green-400"},'"/login"'),s(`, handleLogin)
    r.POST(`),e("span",{class:"text-green-400"},'"/register"'),s(`, handleRegister)
    
    `),e("span",{class:"text-green-400"},"// Protected routes group"),s(`
    api := r.Group(`),e("span",{class:"text-green-400"},'"/api/v1"'),s(`, middleware.Auth(authConfig))
    api.GET(`),e("span",{class:"text-green-400"},'"/profile"'),s(`, handleProfile)
    api.PUT(`),e("span",{class:"text-green-400"},'"/profile"'),s(`, handleUpdateProfile)
    
    `),e("span",{class:"text-green-400"},"// Admin routes with additional middleware"),s(`
    admin := r.Group(`),e("span",{class:"text-green-400"},'"/admin"'),s(`, 
        middleware.Auth(authConfig),
        middleware.RequireAuth(`),e("span",{class:"text-green-400"},'"user"'),s(`),
        adminMiddleware,
    )
    admin.GET(`),e("span",{class:"text-green-400"},'"/users"'),s(`, handleGetUsers)
    admin.DELETE(`),e("span",{class:"text-green-400"},'"/users/:id"'),s(`, handleDeleteUser)
    
    `),e("span",{class:"text-blue-400"},"return"),s(` r
}`)])])],-1))]),_:1,__:[31]}),n(l,null,{header:a(()=>[e("div",Q,[n(r,{name:"i-lucide-wrench",class:"h-5 w-5 text-orange-500"}),t[32]||(t[32]=e("span",{class:"font-semibold"},"Custom Middleware",-1))])]),default:a(()=>[t[33]||(t[33]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Creating Custom Middleware")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Custom CORS middleware"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"CORSMiddleware"),s(`() router.MiddlewareFunc {
    `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s(`(next router.HandlerFunc) router.HandlerFunc {
        `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
            `),e("span",{class:"text-green-400"},"// Set CORS headers"),s(`
            c.SetHeader(`),e("span",{class:"text-green-400"},'"Access-Control-Allow-Origin"'),s(", "),e("span",{class:"text-green-400"},'"*"'),s(`)
            c.SetHeader(`),e("span",{class:"text-green-400"},'"Access-Control-Allow-Methods"'),s(", "),e("span",{class:"text-green-400"},'"GET, POST, PUT, DELETE, OPTIONS"'),s(`)
            c.SetHeader(`),e("span",{class:"text-green-400"},'"Access-Control-Allow-Headers"'),s(", "),e("span",{class:"text-green-400"},'"Content-Type, Authorization"'),s(`)
            
            `),e("span",{class:"text-green-400"},"// Handle preflight requests"),s(`
            `),e("span",{class:"text-blue-400"},"if"),s(" c.Request.Method == "),e("span",{class:"text-green-400"},'"OPTIONS"'),s(` {
                `),e("span",{class:"text-blue-400"},"return"),s(` c.NoContent()
            }
            
            `),e("span",{class:"text-blue-400"},"return"),s(` next(c)
        }
    }
}

`),e("span",{class:"text-green-400"},"// Timing middleware"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"TimingMiddleware"),s(`() router.MiddlewareFunc {
    `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s(`(next router.HandlerFunc) router.HandlerFunc {
        `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
            start := time.Now()
            
            `),e("span",{class:"text-green-400"},"// Process request"),s(`
            err := next(c)
            
            `),e("span",{class:"text-green-400"},"// Add timing header"),s(`
            duration := time.Since(start)
            c.SetHeader(`),e("span",{class:"text-green-400"},'"X-Response-Time"'),s(`, duration.String())
            
            `),e("span",{class:"text-blue-400"},"return"),s(` err
        }
    }
}

`),e("span",{class:"text-green-400"},"// Role-based access control middleware"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"RequireRole"),s("(role "),e("span",{class:"text-purple-400"},"string"),s(`) router.MiddlewareFunc {
    `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s(`(next router.HandlerFunc) router.HandlerFunc {
        `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
            user, exists := c.Get(`),e("span",{class:"text-green-400"},'"user"'),s(`)
            `),e("span",{class:"text-blue-400"},"if"),s(` !exists {
                `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"401"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
                    `),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Authentication required"'),s(`,
                })
            }
            
            userRole := getUserRole(user)
            `),e("span",{class:"text-blue-400"},"if"),s(" userRole != role && userRole != "),e("span",{class:"text-green-400"},'"admin"'),s(` {
                `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"403"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
                    `),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Insufficient permissions"'),s(`,
                })
            }
            
            `),e("span",{class:"text-blue-400"},"return"),s(` next(c)
        }
    }
}

`),e("span",{class:"text-green-400"},"// API versioning middleware"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"APIVersionMiddleware"),s(`() router.MiddlewareFunc {
    `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s(`(next router.HandlerFunc) router.HandlerFunc {
        `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
            version := c.Header(`),e("span",{class:"text-green-400"},'"API-Version"'),s(`)
            `),e("span",{class:"text-blue-400"},"if"),s(" version == "),e("span",{class:"text-green-400"},'""'),s(` {
                version = `),e("span",{class:"text-green-400"},'"v1"'),s(),e("span",{class:"text-green-400"},"// default"),s(`
            }
            
            c.Set(`),e("span",{class:"text-green-400"},'"api_version"'),s(`, version)
            c.SetHeader(`),e("span",{class:"text-green-400"},'"API-Version"'),s(`, version)
            
            `),e("span",{class:"text-blue-400"},"return"),s(` next(c)
        }
    }
}`)])])],-1))]),_:1,__:[33]})])]),e("section",$,[t[37]||(t[37]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Error Handling & HTTP Status Codes",-1)),e("div",W,[n(l,null,{header:a(()=>[e("div",K,[n(r,{name:"i-lucide-alert-triangle",class:"h-5 w-5 text-red-500"}),t[35]||(t[35]=e("span",{class:"font-semibold"},"Error Responses & Recovery",-1))])]),default:a(()=>[t[36]||(t[36]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Error Handling Patterns")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Custom error types"),s(`
`),e("span",{class:"text-blue-400"},"type"),s(),e("span",{class:"text-yellow-400"},"APIError"),s(),e("span",{class:"text-blue-400"},"struct"),s(` {
    Code    `),e("span",{class:"text-purple-400"},"int"),s("    "),e("span",{class:"text-gray-400"},'`json:"code"`'),s(`
    Message `),e("span",{class:"text-purple-400"},"string"),s(),e("span",{class:"text-gray-400"},'`json:"message"`'),s(`
    Details `),e("span",{class:"text-blue-400"},"any"),s("    "),e("span",{class:"text-gray-400"},'`json:"details,omitempty"`'),s(`
}

`),e("span",{class:"text-blue-400"},"func"),s(" (e APIError) "),e("span",{class:"text-yellow-400"},"Error"),s("() "),e("span",{class:"text-purple-400"},"string"),s(` {
    `),e("span",{class:"text-blue-400"},"return"),s(` e.Message
}

`),e("span",{class:"text-green-400"},"// Error handler with detailed responses"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"handleUserCreate"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-blue-400"},"var"),s(` req CreateUserRequest
    
    `),e("span",{class:"text-blue-400"},"if"),s(" err := c.Bind(&req); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(`, APIError{
            Code:    `),e("span",{class:"text-purple-400"},"40001"),s(`,
            Message: `),e("span",{class:"text-green-400"},'"Invalid request format"'),s(`,
            Details: err.Error(),
        })
    }
    
    `),e("span",{class:"text-green-400"},"// Validation"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" req.Email == "),e("span",{class:"text-green-400"},'""'),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(`, APIError{
            Code:    `),e("span",{class:"text-purple-400"},"40002"),s(`,
            Message: `),e("span",{class:"text-green-400"},'"Email is required"'),s(`,
        })
    }
    
    user, err := userService.Create(req)
    `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"if"),s(` errors.Is(err, ErrUserExists) {
            `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"409"),s(`, APIError{
                Code:    `),e("span",{class:"text-purple-400"},"40901"),s(`,
                Message: `),e("span",{class:"text-green-400"},'"User already exists"'),s(`,
            })
        }
        
        `),e("span",{class:"text-green-400"},"// Log internal errors but don't expose details"),s(`
        c.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to create user"'),s(", "),e("span",{class:"text-green-400"},'"error"'),s(`, err)
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"500"),s(`, APIError{
            Code:    `),e("span",{class:"text-purple-400"},"50001"),s(`,
            Message: `),e("span",{class:"text-green-400"},'"Internal server error"'),s(`,
        })
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"201"),s(`, user)
}

`),e("span",{class:"text-green-400"},"// Global error handler"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"ErrorHandler"),s("(c *router.Context, err "),e("span",{class:"text-purple-400"},"error"),s(`) {
    `),e("span",{class:"text-blue-400"},"var"),s(` apiErr APIError
    
    `),e("span",{class:"text-blue-400"},"switch"),s(" e := err.("),e("span",{class:"text-blue-400"},"type"),s(`) {
    `),e("span",{class:"text-blue-400"},"case"),s(` APIError:
        apiErr = e
    `),e("span",{class:"text-blue-400"},"case"),s(` *validation.ValidationError:
        apiErr = APIError{
            Code:    `),e("span",{class:"text-purple-400"},"40003"),s(`,
            Message: `),e("span",{class:"text-green-400"},'"Validation failed"'),s(`,
            Details: e.Fields,
        }
    `),e("span",{class:"text-blue-400"},"default"),s(`:
        apiErr = APIError{
            Code:    `),e("span",{class:"text-purple-400"},"50000"),s(`,
            Message: `),e("span",{class:"text-green-400"},'"Internal server error"'),s(`,
        }
    }
    
    c.JSON(apiErr.Code/`),e("span",{class:"text-purple-400"},"100"),s(`, apiErr)
}

`),e("span",{class:"text-green-400"},"// Custom 404 handler"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"notFoundHandler"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"404"),s(`, APIError{
        Code:    `),e("span",{class:"text-purple-400"},"40401"),s(`,
        Message: `),e("span",{class:"text-green-400"},'"Endpoint not found"'),s(`,
        Details: `),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s(`{
            `),e("span",{class:"text-green-400"},'"path"'),s(`:   c.Request.URL.Path,
            `),e("span",{class:"text-green-400"},'"method"'),s(`: c.Request.Method,
        },
    })
}

`),e("span",{class:"text-green-400"},"// Setup router with error handling"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"setupErrorHandling"),s(`() {
    r := router.New()
    
    `),e("span",{class:"text-green-400"},"// Set custom 404 handler"),s(`
    r.NotFound(notFoundHandler)
    
    `),e("span",{class:"text-green-400"},"// Recovery middleware"),s(`
    r.Use(middleware.Recovery(logger))
}`)])])],-1))]),_:1,__:[36]})])]),e("section",X,[t[50]||(t[50]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Performance Considerations & Best Practices",-1)),e("div",Z,[e("div",Y,[n(l,null,{header:a(()=>[e("div",ee,[n(r,{name:"i-lucide-trending-up",class:"h-5 w-5 text-green-500"}),t[38]||(t[38]=e("span",{class:"font-semibold"},"Performance Features",-1))])]),default:a(()=>[e("div",se,[e("div",te,[n(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),t[39]||(t[39]=e("span",null,"Zero-allocation radix tree routing",-1))]),e("div",ne,[n(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),t[40]||(t[40]=e("span",null,"Context pooling for memory efficiency",-1))]),e("div",ae,[n(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),t[41]||(t[41]=e("span",null,"Fast parameter extraction",-1))]),e("div",re,[n(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),t[42]||(t[42]=e("span",null,"Efficient middleware chaining",-1))]),e("div",le,[n(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),t[43]||(t[43]=e("span",null,"Thread-safe operations",-1))])])]),_:1}),n(l,null,{header:a(()=>[e("div",pe,[n(r,{name:"i-lucide-clock",class:"h-5 w-5 text-blue-500"}),t[44]||(t[44]=e("span",{class:"font-semibold"},"Benchmarks",-1))])]),default:a(()=>[t[45]||(t[45]=e("div",{class:"space-y-3 text-sm"},[e("div",{class:"flex justify-between"},[e("span",null,"Route lookup:"),e("span",{class:"font-mono text-green-500"},"~50ns")]),e("div",{class:"flex justify-between"},[e("span",null,"Context creation:"),e("span",{class:"font-mono text-green-500"},"~0 allocs")]),e("div",{class:"flex justify-between"},[e("span",null,"Parameter extraction:"),e("span",{class:"font-mono text-green-500"},"~30ns")]),e("div",{class:"flex justify-between"},[e("span",null,"Memory per request:"),e("span",{class:"font-mono text-green-500"},"~0.5KB")]),e("div",{class:"flex justify-between"},[e("span",null,"Throughput:"),e("span",{class:"font-mono text-green-500"},"100K+ RPS")])],-1))]),_:1,__:[45]})]),n(p,{color:"green",variant:"soft"},{'title"':a(()=>t[46]||(t[46]=[s("✅ Performance Best Practices",-1)])),description:a(()=>t[47]||(t[47]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Use route groups to minimize middleware overhead"),e("li",null,"Place more specific routes before wildcard routes"),e("li",null,"Minimize middleware chain length for critical paths"),e("li",null,"Use context pooling (automatic in Base router)"),e("li",null,"Implement proper error handling to avoid panics"),e("li",null,"Use built-in response methods for better performance")],-1)])),_:1}),n(p,{color:"red",variant:"soft"},{'title"':a(()=>t[48]||(t[48]=[s("❌ Performance Anti-patterns",-1)])),description:a(()=>t[49]||(t[49]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Don't create new context instances manually"),e("li",null,"Avoid heavy computation in middleware for all routes"),e("li",null,"Don't ignore context cancellation signals"),e("li",null,"Avoid deep middleware nesting without caching"),e("li",null,"Don't use blocking operations in hot paths"),e("li",null,"Avoid large response payloads without streaming")],-1)])),_:1})])]),e("section",null,[t[53]||(t[53]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Static File Serving & Advanced Features",-1)),e("div",ce,[n(l,null,{header:a(()=>[e("div",ie,[n(r,{name:"i-lucide-folder-open",class:"h-5 w-5 text-blue-500"}),t[51]||(t[51]=e("span",{class:"font-semibold"},"Static File Configuration",-1))])]),default:a(()=>[t[52]||(t[52]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Static File Setup")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Basic static file serving"),s(`
r.Static(`),e("span",{class:"text-green-400"},'"/static"'),s(", "),e("span",{class:"text-green-400"},'"./public"'),s(`)
r.Static(`),e("span",{class:"text-green-400"},'"/uploads"'),s(", "),e("span",{class:"text-green-400"},'"./storage/uploads"'),s(`)

`),e("span",{class:"text-green-400"},"// Group-specific static files"),s(`
api := r.Group(`),e("span",{class:"text-green-400"},'"/api/v1"'),s(`)
api.Static(`),e("span",{class:"text-green-400"},'"/assets"'),s(", "),e("span",{class:"text-green-400"},'"./api-assets"'),s(`)

`),e("span",{class:"text-green-400"},"// Custom file handler with middleware"),s(`
r.GET(`),e("span",{class:"text-green-400"},'"/files/*filepath"'),s(", middleware.Auth(authConfig), "),e("span",{class:"text-blue-400"},"func"),s("(c *router.Context) "),e("span",{class:"text-purple-400"},"error"),s(` {
    filepath := c.Param(`),e("span",{class:"text-green-400"},'"filepath"'),s(`)
    
    `),e("span",{class:"text-green-400"},"// Security check"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" strings.Contains(filepath, "),e("span",{class:"text-green-400"},'".."'),s(`) {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"400"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Invalid path"'),s(`})
    }
    
    fullPath := path.Join(`),e("span",{class:"text-green-400"},'"./secure-files"'),s(`, filepath)
    
    `),e("span",{class:"text-green-400"},"// Check file exists and user has access"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" !hasFileAccess(c.MustGet("),e("span",{class:"text-green-400"},'"user"'),s(`), fullPath) {
        `),e("span",{class:"text-blue-400"},"return"),s(" c.JSON("),e("span",{class:"text-purple-400"},"403"),s(", "),e("span",{class:"text-blue-400"},"map"),s("["),e("span",{class:"text-purple-400"},"string"),s("]"),e("span",{class:"text-purple-400"},"string"),s("{"),e("span",{class:"text-green-400"},'"error"'),s(": "),e("span",{class:"text-green-400"},'"Access denied"'),s(`})
    }
    
    c.File(fullPath)
    `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-purple-400"},"nil"),s(`
})

`),e("span",{class:"text-green-400"},"// Server setup with graceful shutdown"),s(`
`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"main"),s(`() {
    r := router.New()
    setupRoutes(r)
    
    `),e("span",{class:"text-green-400"},"// Start server"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" err := r.Run("),e("span",{class:"text-green-400"},'":8080"'),s("); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        log.Fatal(`),e("span",{class:"text-green-400"},'"Server failed to start:"'),s(`, err)
    }
}`)])])],-1))]),_:1,__:[52]})])])])),[[i]])]),_:1})}}});export{me as default};
