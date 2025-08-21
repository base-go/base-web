import{a as u,_ as d}from"./Card-dhBREXno.js";import{s as x,c as g,w as n,a as m,b,e,f as a,g as t,_ as f,i as y,r as v,o}from"./index-c5PrNzGP.js";const E={},w={class:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},k={class:"mb-12"},h={class:"grid gap-4 md:grid-cols-3 mb-6"},S={class:"flex items-center space-x-2"},P={class:"flex items-center space-x-2"},C={class:"flex items-center space-x-2"},D={class:"mb-12"},_={class:"space-y-6"},L={class:"flex items-center space-x-2"},T={class:"mb-12"},I={class:"space-y-6"},M={class:"flex items-center space-x-2"},A={class:"mb-12"},U={class:"space-y-6"},B={class:"flex items-center space-x-2"},R={class:"flex items-center space-x-2"},N={class:"mb-12"},O={class:"space-y-6"},q={class:"flex items-center space-x-2"},F={class:"flex items-center space-x-2"},z={class:"mb-12"},G={class:"space-y-6"},j={class:"flex items-center space-x-2"},W={class:"grid gap-4 md:grid-cols-2"},H={class:"mb-12"},V={class:"space-y-6"},J={class:"grid gap-4 md:grid-cols-2"},$={class:"flex items-center space-x-2"},K={class:"space-y-3 text-sm"},Z={class:"flex items-start space-x-2"},Q={class:"flex items-start space-x-2"},X={class:"flex items-start space-x-2"},Y={class:"flex items-start space-x-2"},ee={class:"flex items-start space-x-2"},te={class:"flex items-center space-x-2"},se={class:"flex items-center space-x-2"},ne={class:"space-y-6"},ae={class:"flex items-center space-x-2"};function re(le,s){const i=u,r=f,l=d,c=y("DocsLayout"),p=v("prism");return o(),g(c,null,{default:n(()=>[m((o(),b("div",w,[s[48]||(s[48]=e("div",{class:"mb-8"},[e("h1",{class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},"Emitter"),e("p",{class:"text-xl text-gray-600 dark:text-gray-300"}," Thread-safe async event system with context support for decoupled module communication ")],-1)),e("section",k,[s[8]||(s[8]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Overview",-1)),a(i,{color:"blue",variant:"soft",class:"mb-6"},{title:n(()=>s[0]||(s[0]=[t("🔗 Event-Driven Architecture",-1)])),description:n(()=>s[1]||(s[1]=[t(" Base Framework's Emitter provides a thread-safe, async event system that enables decoupled communication between modules. It supports synchronous and asynchronous event emission, context cancellation, timeouts, and automatic panic recovery for robust event handling. ",-1)])),_:1}),e("div",h,[a(l,null,{header:n(()=>[e("div",S,[a(r,{name:"i-lucide-shield-check",class:"h-5 w-5 text-green-500"}),s[2]||(s[2]=e("span",{class:"font-semibold"},"Thread-Safe",-1))])]),default:n(()=>[s[3]||(s[3]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Concurrent-safe operations with read-write mutexes ensuring data integrity across goroutines. ",-1))]),_:1,__:[3]}),a(l,null,{header:n(()=>[e("div",P,[a(r,{name:"i-lucide-zap",class:"h-5 w-5 text-yellow-500"}),s[4]||(s[4]=e("span",{class:"font-semibold"},"Async Events",-1))])]),default:n(()=>[s[5]||(s[5]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Support for both blocking and non-blocking event emission with goroutine-based execution. ",-1))]),_:1,__:[5]}),a(l,null,{header:n(()=>[e("div",C,[a(r,{name:"i-lucide-clock",class:"h-5 w-5 text-blue-500"}),s[6]||(s[6]=e("span",{class:"font-semibold"},"Context Support",-1))])]),default:n(()=>[s[7]||(s[7]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Built-in context cancellation and timeout support for better control over event processing. ",-1))]),_:1,__:[7]})])]),e("section",D,[s[11]||(s[11]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Basic Usage",-1)),e("div",_,[a(l,null,{header:n(()=>[e("div",L,[a(r,{name:"i-lucide-play",class:"h-5 w-5 text-green-500"}),s[9]||(s[9]=e("span",{class:"font-semibold"},"Creating and Using an Emitter",-1))])]),default:n(()=>[s[10]||(s[10]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Emitter Initialization and Basic Events")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"import"),t(` (
    `),e("span",{class:"text-green-400"},'"base/core/emitter"'),t(`
    `),e("span",{class:"text-green-400"},'"base/core/logger"'),t(`
)

`),e("span",{class:"text-green-400"},"// Initialize emitter"),t(`
e := emitter.New()

`),e("span",{class:"text-green-400"},"// Register event listeners"),t(`
e.On(`),e("span",{class:"text-green-400"},'"user.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
    `),e("span",{class:"text-blue-400"},"if"),t(` user, ok := data.(*User); ok {
        log.Info(`),e("span",{class:"text-green-400"},'"New user registered"'),t(`, 
            logger.String(`),e("span",{class:"text-green-400"},'"email"'),t(`, user.Email),
            logger.Int(`),e("span",{class:"text-green-400"},'"id"'),t(", "),e("span",{class:"text-purple-400"},"int"),t(`(user.ID)))
    }
})

e.On(`),e("span",{class:"text-green-400"},'"user.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
    `),e("span",{class:"text-green-400"},"// Multiple listeners can handle the same event"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(` user, ok := data.(*User); ok {
        `),e("span",{class:"text-green-400"},"// Send welcome email, update analytics, etc."),t(`
        sendWelcomeEmail(user)
    }
})

`),e("span",{class:"text-green-400"},"// Emit events"),t(`
user := &User{ID: `),e("span",{class:"text-purple-400"},"1"),t(", Email: "),e("span",{class:"text-green-400"},'"john@example.com"'),t(`}
e.Emit(`),e("span",{class:"text-green-400"},'"user.created"'),t(", user) "),e("span",{class:"text-green-400"},"// Blocks until all listeners complete"),t(`

`),e("span",{class:"text-green-400"},"// Service integration example"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"UserService"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    DB      *gorm.DB
    Emitter *emitter.Emitter
    Logger  logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *UserService) "),e("span",{class:"text-yellow-400"},"CreateUser"),t("(req CreateUserRequest) (*User, "),e("span",{class:"text-purple-400"},"error"),t(`) {
    user := &User{
        Email: req.Email,
        Name:  req.Name,
    }
    
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Create(user).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`, err
    }
    
    `),e("span",{class:"text-green-400"},"// Emit event after successful creation"),t(`
    s.Emitter.Emit(`),e("span",{class:"text-green-400"},'"user.created"'),t(`, user)
    
    `),e("span",{class:"text-blue-400"},"return"),t(" user, "),e("span",{class:"text-purple-400"},"nil"),t(`
}`)])])],-1))]),_:1,__:[10]})])]),e("section",T,[s[14]||(s[14]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"API Reference",-1)),e("div",I,[a(l,null,{header:n(()=>[e("div",M,[a(r,{name:"i-lucide-code",class:"h-5 w-5 text-purple-500"}),s[12]||(s[12]=e("span",{class:"font-semibold"},"Core Methods",-1))])]),default:n(()=>[s[13]||(s[13]=e("div",{class:"space-y-4"},[e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"New() *Emitter"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Creates a new emitter instance with initialized listener map."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"}," e := emitter.New() ")]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"On(event string, listener func(any))"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Registers an event listener for the specified event name. Multiple listeners can be registered for the same event."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"},' e.On("user.login", func(data any) { ... }) ')]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"Emit(event string, data any)"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Emits an event synchronously, blocking until all listeners complete. Uses WaitGroup internally to ensure all goroutines finish."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"},' e.Emit("order.completed", order) ')]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"EmitAsync(event string, data any)"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Emits an event asynchronously without blocking. Listeners run in separate goroutines and the method returns immediately."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"},' e.EmitAsync("analytics.track", eventData) ')]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"EmitWithContext(ctx context.Context, event string, data any) error"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Emits an event with context support. Returns an error if the context is cancelled before all listeners complete."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"},' err := e.EmitWithContext(ctx, "file.process", fileData) ')]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"EmitWithTimeout(event string, data any, timeout time.Duration) error"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Emits an event with a timeout. Returns an error if listeners don't complete within the specified duration."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"},' err := e.EmitWithTimeout("heavy.task", data, 30*time.Second) ')]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"ListenerCount(event string) int"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Returns the number of listeners registered for a specific event."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"},' count := e.ListenerCount("user.created") ')]),e("div",{class:"border-b border-gray-200 dark:border-gray-700 pb-4"},[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"EventNames() []string"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Returns all registered event names as a slice of strings."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"}," events := e.EventNames() ")]),e("div",null,[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"Clear()"),e("p",{class:"text-sm text-gray-600 dark:text-gray-300 mb-2"},"Removes all registered listeners for all events. Useful for testing or cleanup."),e("div",{class:"bg-gray-100 dark:bg-gray-800 rounded p-2 text-sm font-mono"}," e.Clear() ")])],-1))]),_:1,__:[13]})])]),e("section",A,[s[19]||(s[19]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Async Events & Context Support",-1)),e("div",U,[a(l,null,{header:n(()=>[e("div",B,[a(r,{name:"i-lucide-zap",class:"h-5 w-5 text-yellow-500"}),s[15]||(s[15]=e("span",{class:"font-semibold"},"Asynchronous Event Patterns",-1))])]),default:n(()=>[s[16]||(s[16]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Non-blocking Event Emission")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Non-blocking events for analytics, logging, notifications"),t(`
e.EmitAsync(`),e("span",{class:"text-green-400"},'"analytics.page_view"'),t(`, analyticsData)
e.EmitAsync(`),e("span",{class:"text-green-400"},'"audit.log"'),t(`, auditEvent)
e.EmitAsync(`),e("span",{class:"text-green-400"},'"notification.send"'),t(`, notificationData)

`),e("span",{class:"text-green-400"},"// Async event handlers"),t(`
e.On(`),e("span",{class:"text-green-400"},'"file.uploaded"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
    `),e("span",{class:"text-blue-400"},"if"),t(` file, ok := data.(*UploadedFile); ok {
        `),e("span",{class:"text-green-400"},"// Heavy processing that shouldn't block the request"),t(`
        `),e("span",{class:"text-blue-400"},"go"),t(` processImageThumbnails(file)
        `),e("span",{class:"text-blue-400"},"go"),t(` scanForVirus(file)
        `),e("span",{class:"text-blue-400"},"go"),t(` updateSearchIndex(file)
    }
})

`),e("span",{class:"text-green-400"},"// Fire-and-forget pattern for non-critical operations"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *PostService) "),e("span",{class:"text-yellow-400"},"PublishPost"),t("(post *Post) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Save(post).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(` err
    }
    
    `),e("span",{class:"text-green-400"},"// These operations shouldn't block the HTTP response"),t(`
    s.Emitter.EmitAsync(`),e("span",{class:"text-green-400"},'"post.published"'),t(`, post)
    s.Emitter.EmitAsync(`),e("span",{class:"text-green-400"},'"analytics.content_created"'),t(`, post)
    s.Emitter.EmitAsync(`),e("span",{class:"text-green-400"},'"social.auto_share"'),t(`, post)
    
    `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
}

`),e("span",{class:"text-green-400"},"// Mixed patterns: critical vs non-critical events"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *OrderService) "),e("span",{class:"text-yellow-400"},"ProcessOrder"),t("(order *Order) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-green-400"},"// Critical event - wait for completion"),t(`
    s.Emitter.Emit(`),e("span",{class:"text-green-400"},'"order.validated"'),t(`, order)
    
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Save(order).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(` err
    }
    
    `),e("span",{class:"text-green-400"},"// Critical notifications"),t(`
    s.Emitter.Emit(`),e("span",{class:"text-green-400"},'"order.confirmed"'),t(`, order)
    
    `),e("span",{class:"text-green-400"},"// Non-critical analytics and marketing"),t(`
    s.Emitter.EmitAsync(`),e("span",{class:"text-green-400"},'"analytics.order"'),t(`, order)
    s.Emitter.EmitAsync(`),e("span",{class:"text-green-400"},'"marketing.customer_activity"'),t(`, order)
    
    `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
}`)])])],-1))]),_:1,__:[16]}),a(l,null,{'header"':n(()=>[e("div",R,[a(r,{name:"i-lucide-clock",class:"h-5 w-5 text-blue-500"}),s[17]||(s[17]=e("span",{class:"font-semibold"},"Context and Timeout Handling",-1))])]),default:n(()=>[s[18]||(s[18]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Context-Aware Event Processing")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"import"),t(` (
    `),e("span",{class:"text-green-400"},'"context"'),t(`
    `),e("span",{class:"text-green-400"},'"time"'),t(`
)

`),e("span",{class:"text-green-400"},"// Context cancellation example"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *FileService) "),e("span",{class:"text-yellow-400"},"ProcessLargeFile"),t("(ctx context.Context, file *File) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-green-400"},"// Process file with context support"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.EmitWithContext(ctx, "),e("span",{class:"text-green-400"},'"file.processing"'),t(", file); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"if"),t(` errors.Is(err, context.Canceled) {
            s.Logger.Info(`),e("span",{class:"text-green-400"},'"File processing cancelled"'),t(", logger.String("),e("span",{class:"text-green-400"},'"file"'),t(`, file.Name))
            `),e("span",{class:"text-blue-400"},"return"),t(` err
        }
        `),e("span",{class:"text-blue-400"},"return"),t(` err
    }
    
    `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
}

`),e("span",{class:"text-green-400"},"// Timeout pattern for slow operations"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *ReportService) "),e("span",{class:"text-yellow-400"},"GenerateReport"),t("(data *ReportData) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-green-400"},"// Set reasonable timeout for report generation"),t(`
    err := s.Emitter.EmitWithTimeout(`),e("span",{class:"text-green-400"},'"report.generate"'),t(", data, "),e("span",{class:"text-purple-400"},"5"),t(`*time.Minute)
    `),e("span",{class:"text-blue-400"},"if"),t(" err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"if"),t(` errors.Is(err, context.DeadlineExceeded) {
            s.Logger.Error(`),e("span",{class:"text-green-400"},'"Report generation timed out"'),t(`)
            `),e("span",{class:"text-blue-400"},"return"),t(" errors.New("),e("span",{class:"text-green-400"},'"report generation took too long"'),t(`)
        }
        `),e("span",{class:"text-blue-400"},"return"),t(` err
    }
    
    `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
}

`),e("span",{class:"text-green-400"},"// HTTP request context integration"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (c *PostController) "),e("span",{class:"text-yellow-400"},"CreatePost"),t("(ctx *router.Context) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-blue-400"},"var"),t(` req CreatePostRequest
    `),e("span",{class:"text-blue-400"},"if"),t(" err := ctx.Bind(&req); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(" ctx.JSON("),e("span",{class:"text-purple-400"},"400"),t(", "),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t("]"),e("span",{class:"text-purple-400"},"string"),t("{"),e("span",{class:"text-green-400"},'"error"'),t(": "),e("span",{class:"text-green-400"},'"Invalid request"'),t(`})
    }
    
    post := &Post{Title: req.Title, Content: req.Content}
    
    `),e("span",{class:"text-green-400"},"// Use HTTP request context for event emission"),t(`
    requestCtx := ctx.Request.Context()
    `),e("span",{class:"text-blue-400"},"if"),t(" err := c.Service.EmitWithContext(requestCtx, "),e("span",{class:"text-green-400"},'"post.creating"'),t(", post); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(" ctx.JSON("),e("span",{class:"text-purple-400"},"500"),t(", "),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t("]"),e("span",{class:"text-purple-400"},"string"),t("{"),e("span",{class:"text-green-400"},'"error"'),t(": "),e("span",{class:"text-green-400"},'"Failed to process post"'),t(`})
    }
    
    `),e("span",{class:"text-blue-400"},"return"),t(" ctx.JSON("),e("span",{class:"text-purple-400"},"201"),t(`, post)
}

`),e("span",{class:"text-green-400"},"// Advanced timeout with cleanup"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *EmailService) "),e("span",{class:"text-yellow-400"},"SendBulkEmail"),t("(emails []EmailData) "),e("span",{class:"text-purple-400"},"error"),t(` {
    ctx, cancel := context.WithTimeout(context.Background(), `),e("span",{class:"text-purple-400"},"10"),t(`*time.Minute)
    `),e("span",{class:"text-blue-400"},"defer"),t(` cancel()
    
    `),e("span",{class:"text-green-400"},"// Create a channel to track progress"),t(`
    done := `),e("span",{class:"text-blue-400"},"make"),t("("),e("span",{class:"text-blue-400"},"chan"),t(),e("span",{class:"text-blue-400"},"struct"),t(`{})
    
    `),e("span",{class:"text-blue-400"},"go"),t(),e("span",{class:"text-blue-400"},"func"),t(`() {
        `),e("span",{class:"text-blue-400"},"defer"),t(),e("span",{class:"text-blue-400"},"close"),t(`(done)
        `),e("span",{class:"text-blue-400"},"for"),t(" _, email := "),e("span",{class:"text-blue-400"},"range"),t(` emails {
            `),e("span",{class:"text-blue-400"},"if"),t(" err := s.Emitter.EmitWithContext(ctx, "),e("span",{class:"text-green-400"},'"email.send"'),t(", email); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
                s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to send email"'),t(", logger.String("),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()))
                `),e("span",{class:"text-blue-400"},"return"),t(`
            }
        }
    }()
    
    `),e("span",{class:"text-blue-400"},"select"),t(` {
    `),e("span",{class:"text-blue-400"},"case"),t(` <-done:
        s.Logger.Info(`),e("span",{class:"text-green-400"},'"Bulk email sending completed"'),t(`)
        `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
    `),e("span",{class:"text-blue-400"},"case"),t(` <-ctx.Done():
        s.Logger.Error(`),e("span",{class:"text-green-400"},'"Bulk email sending timed out"'),t(`)
        `),e("span",{class:"text-blue-400"},"return"),t(` ctx.Err()
    }
}`)])])],-1))]),_:1,__:[18]})])]),e("section",N,[s[24]||(s[24]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Module Integration Patterns",-1)),e("div",O,[a(l,null,{header:n(()=>[e("div",q,[a(r,{name:"i-lucide-puzzle",class:"h-5 w-5 text-green-500"}),s[20]||(s[20]=e("span",{class:"font-semibold"},"Cross-Module Communication",-1))])]),default:n(()=>[s[21]||(s[21]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Decoupled Module Design")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// User module emits events"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"UserService"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    DB      *gorm.DB
    Emitter *emitter.Emitter
    Logger  logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *UserService) "),e("span",{class:"text-yellow-400"},"CreateUser"),t("(req CreateUserRequest) (*User, "),e("span",{class:"text-purple-400"},"error"),t(`) {
    user := &User{
        Email: req.Email,
        Name:  req.Name,
    }
    
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Create(user).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`, err
    }
    
    `),e("span",{class:"text-green-400"},"// Emit events for other modules to handle"),t(`
    s.Emitter.Emit(`),e("span",{class:"text-green-400"},'"user.created"'),t(`, user)
    s.Emitter.EmitAsync(`),e("span",{class:"text-green-400"},'"analytics.user_registered"'),t(`, user)
    
    `),e("span",{class:"text-blue-400"},"return"),t(" user, "),e("span",{class:"text-purple-400"},"nil"),t(`
}

`),e("span",{class:"text-green-400"},"// Notification module listens for user events"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"NotificationService"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    Emitter *emitter.Emitter
    Logger  logger.Logger
    Email   email.Sender
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *NotificationService) "),e("span",{class:"text-yellow-400"},"Init"),t(`() {
    `),e("span",{class:"text-green-400"},"// Listen for user events without direct coupling"),t(`
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"user.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-blue-400"},"if"),t(` user, ok := data.(*User); ok {
            s.sendWelcomeEmail(user)
        }
    })
    
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"user.password_reset"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-blue-400"},"if"),t(` event, ok := data.(*PasswordResetEvent); ok {
            s.sendPasswordResetEmail(event.User, event.Token)
        }
    })
}

`),e("span",{class:"text-green-400"},"// Analytics module tracks user behavior"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"AnalyticsService"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    Emitter *emitter.Emitter
    Logger  logger.Logger
    DB      *gorm.DB
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *AnalyticsService) "),e("span",{class:"text-yellow-400"},"Init"),t(`() {
    `),e("span",{class:"text-green-400"},"// Track various user events"),t(`
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"user.created"'),t(`, s.trackUserRegistration)
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"user.login"'),t(`, s.trackUserLogin)
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"post.created"'),t(`, s.trackContentCreation)
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"order.completed"'),t(`, s.trackPurchase)
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *AnalyticsService) "),e("span",{class:"text-yellow-400"},"trackUserRegistration"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
    `),e("span",{class:"text-blue-400"},"if"),t(` user, ok := data.(*User); ok {
        event := &AnalyticsEvent{
            Type:      `),e("span",{class:"text-green-400"},'"user_registration"'),t(`,
            UserID:    user.ID,
            Timestamp: time.Now(),
            Data:      `),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t("]"),e("span",{class:"text-blue-400"},"any"),t("{"),e("span",{class:"text-green-400"},'"email"'),t(`: user.Email},
        }
        
        `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Create(event).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
            s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to track user registration"'),t(`, 
                logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()))
        }
    }
}

`),e("span",{class:"text-green-400"},"// Post module with file handling"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"PostService"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    DB      *gorm.DB
    Emitter *emitter.Emitter
    Storage storage.Storage
    Logger  logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *PostService) "),e("span",{class:"text-yellow-400"},"Init"),t(`() {
    `),e("span",{class:"text-green-400"},"// Listen for file upload events from storage"),t(`
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"post.featured_image.uploaded"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-blue-400"},"if"),t(` post, ok := data.(*Post); ok {
            s.Logger.Info(`),e("span",{class:"text-green-400"},'"Featured image uploaded"'),t(`,
                logger.Int(`),e("span",{class:"text-green-400"},'"post_id"'),t(", "),e("span",{class:"text-purple-400"},"int"),t(`(post.ID)),
                logger.String(`),e("span",{class:"text-green-400"},'"image"'),t(`, post.FeaturedImageURL))
        }
    })
    
    `),e("span",{class:"text-green-400"},"// Listen for file deletion events"),t(`
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"post.featured_image.deleted"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-blue-400"},"if"),t(` post, ok := data.(*Post); ok {
            s.Logger.Info(`),e("span",{class:"text-green-400"},'"Featured image deleted"'),t(`,
                logger.Int(`),e("span",{class:"text-green-400"},'"post_id"'),t(", "),e("span",{class:"text-purple-400"},"int"),t(`(post.ID)))
        }
    })
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *PostService) "),e("span",{class:"text-yellow-400"},"CreatePost"),t("(req CreatePostRequest) (*Post, "),e("span",{class:"text-purple-400"},"error"),t(`) {
    post := &Post{
        Title:   req.Title,
        Content: req.Content,
        UserID:  req.UserID,
    }
    
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Create(post).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`, err
    }
    
    `),e("span",{class:"text-green-400"},"// Emit creation event for other modules"),t(`
    s.Emitter.Emit(`),e("span",{class:"text-green-400"},'"post.created"'),t(`, post)
    
    `),e("span",{class:"text-blue-400"},"return"),t(" post, "),e("span",{class:"text-purple-400"},"nil"),t(`
}`)])])],-1))]),_:1,__:[21]}),a(l,null,{header:n(()=>[e("div",F,[a(r,{name:"i-lucide-settings",class:"h-5 w-5 text-purple-500"}),s[22]||(s[22]=e("span",{class:"font-semibold"},"Module Registration with Emitter",-1))])]),default:n(()=>[s[23]||(s[23]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Dependency Injection Pattern")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Module structure with emitter injection"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"PostModule"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    Service    *PostService
    Controller *PostController
    Router     *router.RouterGroup
    Emitter    *emitter.Emitter
    Logger     logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),t(),e("span",{class:"text-yellow-400"},"NewPostModule"),t(`(
    db *gorm.DB, 
    router *router.RouterGroup, 
    log logger.Logger, 
    emitter *emitter.Emitter,
    storage *storage.ActiveStorage,
) module.Module {
    service := &PostService{
        DB:      db,
        Emitter: emitter,
        Logger:  log,
        Storage: storage,
    }
    
    controller := &PostController{
        Service: service,
        Logger:  log,
    }
    
    `),e("span",{class:"text-green-400"},"// Initialize event listeners"),t(`
    service.Init()
    
    `),e("span",{class:"text-green-400"},"// Register routes"),t(`
    router.GET(`),e("span",{class:"text-green-400"},'"/posts"'),t(`, controller.GetPosts)
    router.POST(`),e("span",{class:"text-green-400"},'"/posts"'),t(`, controller.CreatePost)
    router.PUT(`),e("span",{class:"text-green-400"},'"/posts/:id"'),t(`, controller.UpdatePost)
    router.DELETE(`),e("span",{class:"text-green-400"},'"/posts/:id"'),t(`, controller.DeletePost)
    
    `),e("span",{class:"text-blue-400"},"return"),t(` &PostModule{
        Service:    service,
        Controller: controller,
        Router:     router,
        Emitter:    emitter,
        Logger:     log,
    }
}

`),e("span",{class:"text-green-400"},"// App initialization with emitter"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (app *App) "),e("span",{class:"text-yellow-400"},"initModules"),t(`() *App {
    `),e("span",{class:"text-green-400"},"// Create shared emitter instance"),t(`
    emitter := emitter.New()
    
    `),e("span",{class:"text-green-400"},"// Register modules with emitter dependency injection"),t(`
    authModule := authentication.NewAuthenticationModule(
        app.db, 
        app.router.Group(`),e("span",{class:"text-green-400"},'"/auth"'),t(`), 
        app.emailSender, 
        app.logger, 
        emitter,
    )
    
    postModule := NewPostModule(
        app.db,
        app.router.Group(`),e("span",{class:"text-green-400"},'"/api/v1"'),t(`),
        app.logger,
        emitter,
        app.storage,
    )
    
    notificationModule := notification.NewNotificationModule(
        app.router.Group(`),e("span",{class:"text-green-400"},'"/notifications"'),t(`),
        app.logger,
        emitter,
        app.emailSender,
    )
    
    `),e("span",{class:"text-green-400"},"// Store modules"),t(`
    app.modules = []module.Module{
        authModule,
        postModule,
        notificationModule,
    }
    
    `),e("span",{class:"text-blue-400"},"return"),t(` app
}

`),e("span",{class:"text-green-400"},"// Module initialization helper"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"ModuleInitializer"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    DB          *gorm.DB
    Router      *router.RouterGroup
    Logger      logger.Logger
    Emitter     *emitter.Emitter
    Storage     *storage.ActiveStorage
    EmailSender email.Sender
}

`),e("span",{class:"text-blue-400"},"func"),t(" (m *ModuleInitializer) "),e("span",{class:"text-yellow-400"},"InitializeAll"),t(`() {
    `),e("span",{class:"text-green-400"},"// Initialize all modules with shared dependencies"),t(`
    modules := []module.Module{
        authentication.NewAuthenticationModule(m.DB, m.Router.Group(`),e("span",{class:"text-green-400"},'"/auth"'),t(`), m.EmailSender, m.Logger, m.Emitter),
        media.NewMediaModule(m.DB, m.Router.Group(`),e("span",{class:"text-green-400"},'"/media"'),t(`), m.Storage, m.Emitter, m.Logger),
        translation.NewTranslationModule(m.DB, m.Router.Group(`),e("span",{class:"text-green-400"},'"/translations"'),t(`), m.Logger, m.Emitter, m.Storage),
    }
    
    `),e("span",{class:"text-blue-400"},"for"),t(" _, mod := "),e("span",{class:"text-blue-400"},"range"),t(` modules {
        `),e("span",{class:"text-blue-400"},"if"),t(" initializer, ok := mod.("),e("span",{class:"text-blue-400"},"interface"),t(`{ Init() }); ok {
            initializer.Init()
        }
    }
}`)])])],-1))]),_:1,__:[23]})])]),e("section",z,[s[31]||(s[31]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Error Handling & Best Practices",-1)),e("div",G,[a(l,null,{header:n(()=>[e("div",j,[a(r,{name:"i-lucide-shield",class:"h-5 w-5 text-red-500"}),s[25]||(s[25]=e("span",{class:"font-semibold"},"Panic Recovery & Error Resilience",-1))])]),default:n(()=>[s[26]||(s[26]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Robust Event Handling")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// The emitter automatically recovers from panics in listeners"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *PostService) "),e("span",{class:"text-yellow-400"},"Init"),t(`() {
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"post.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-green-400"},"// Even if this panics, other listeners will still execute"),t(`
        `),e("span",{class:"text-blue-400"},"panic"),t("("),e("span",{class:"text-green-400"},'"something went wrong"'),t(`)
    })

    s.Emitter.On(`),e("span",{class:"text-green-400"},'"post.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-green-400"},"// This will still run despite the panic above"),t(`
        `),e("span",{class:"text-blue-400"},"if"),t(` post, ok := data.(*Post); ok {
            s.Logger.Info(`),e("span",{class:"text-green-400"},'"Post created"'),t(", logger.Int("),e("span",{class:"text-green-400"},'"id"'),t(", "),e("span",{class:"text-purple-400"},"int"),t(`(post.ID)))
        }
    })
}

`),e("span",{class:"text-green-400"},"// Best practice: Handle errors gracefully in listeners"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *EmailService) "),e("span",{class:"text-yellow-400"},"Init"),t(`() {
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"user.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        user, ok := data.(*User)
        `),e("span",{class:"text-blue-400"},"if"),t(` !ok {
            s.Logger.Error(`),e("span",{class:"text-green-400"},'"Invalid data type for user.created event"'),t(`)
            `),e("span",{class:"text-blue-400"},"return"),t(`
        }
        
        `),e("span",{class:"text-blue-400"},"if"),t(" err := s.sendWelcomeEmail(user); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
            s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to send welcome email"'),t(`,
                logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()),
                logger.String(`),e("span",{class:"text-green-400"},'"user_email"'),t(`, user.Email))
            `),e("span",{class:"text-green-400"},"// Don't panic - log and continue"),t(`
            `),e("span",{class:"text-blue-400"},"return"),t(`
        }
        
        s.Logger.Info(`),e("span",{class:"text-green-400"},'"Welcome email sent"'),t(", logger.String("),e("span",{class:"text-green-400"},'"email"'),t(`, user.Email))
    })
}

`),e("span",{class:"text-green-400"},"// Defensive event emission with error checking"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *OrderService) "),e("span",{class:"text-yellow-400"},"ProcessOrder"),t("(order *Order) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-green-400"},"// Validate order before processing"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" order == "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(" errors.New("),e("span",{class:"text-green-400"},'"order cannot be nil"'),t(`)
    }
    
    `),e("span",{class:"text-green-400"},"// Process order logic"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.DB.Save(order).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-blue-400"},"return"),t(" fmt.Errorf("),e("span",{class:"text-green-400"},'"failed to save order: %w"'),t(`, err)
    }
    
    `),e("span",{class:"text-green-400"},"// Safe event emission with timeout"),t(`
    ctx, cancel := context.WithTimeout(context.Background(), `),e("span",{class:"text-purple-400"},"30"),t(`*time.Second)
    `),e("span",{class:"text-blue-400"},"defer"),t(` cancel()
    
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.Emitter.EmitWithContext(ctx, "),e("span",{class:"text-green-400"},'"order.processed"'),t(", order); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        `),e("span",{class:"text-green-400"},"// Log error but don't fail the entire operation"),t(`
        s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to emit order.processed event"'),t(`,
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()),
            logger.Int(`),e("span",{class:"text-green-400"},'"order_id"'),t(", "),e("span",{class:"text-purple-400"},"int"),t(`(order.ID)))
    }
    
    `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
}

`),e("span",{class:"text-green-400"},"// Testing event listeners with mock data"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(),e("span",{class:"text-yellow-400"},"TestPostServiceEvents"),t(`(t *testing.T) {
    emitter := emitter.New()
    service := &PostService{Emitter: emitter}
    
    `),e("span",{class:"text-blue-400"},"var"),t(` receivedPost *Post
    emitter.On(`),e("span",{class:"text-green-400"},'"post.created"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        `),e("span",{class:"text-blue-400"},"if"),t(` post, ok := data.(*Post); ok {
            receivedPost = post
        }
    })
    
    testPost := &Post{ID: `),e("span",{class:"text-purple-400"},"1"),t(", Title: "),e("span",{class:"text-green-400"},'"Test Post"'),t(`}
    emitter.Emit(`),e("span",{class:"text-green-400"},'"post.created"'),t(`, testPost)
    
    assert.Equal(t, testPost, receivedPost)
}

`),e("span",{class:"text-green-400"},"// Event listener cleanup for tests"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *TestSuite) "),e("span",{class:"text-yellow-400"},"TearDown"),t(`() {
    `),e("span",{class:"text-green-400"},"// Clear all listeners after each test"),t(`
    s.emitter.Clear()
}

`),e("span",{class:"text-green-400"},"// Monitoring event listener performance"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (s *AnalyticsService) "),e("span",{class:"text-yellow-400"},"trackEventPerformance"),t(`() {
    s.Emitter.On(`),e("span",{class:"text-green-400"},'"performance.track"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        start := time.Now()
        `),e("span",{class:"text-blue-400"},"defer"),t(),e("span",{class:"text-blue-400"},"func"),t(`() {
            duration := time.Since(start)
            s.Logger.Debug(`),e("span",{class:"text-green-400"},'"Event processing time"'),t(`,
                logger.String(`),e("span",{class:"text-green-400"},'"duration"'),t(`, duration.String()))
        }()
        
        `),e("span",{class:"text-green-400"},"// Process analytics data"),t(`
        s.processAnalyticsData(data)
    })
}`)])])],-1))]),_:1,__:[26]}),e("div",W,[a(i,{color:"green",variant:"soft"},{title:n(()=>s[27]||(s[27]=[t("✅ Best Practices",-1)])),description:n(()=>s[28]||(s[28]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2 text-sm"},[e("li",null,"Use EmitAsync for non-critical operations like analytics"),e("li",null,"Always validate data types in event listeners"),e("li",null,"Handle errors gracefully - don't panic in listeners"),e("li",null,"Use meaningful event names following module.action pattern"),e("li",null,"Implement proper logging in event handlers"),e("li",null,"Use context cancellation for long-running operations"),e("li",null,"Clear listeners in tests to avoid interference")],-1)])),_:1}),a(i,{color:"red",variant:"soft"},{'title"':n(()=>s[29]||(s[29]=[t("❌ Anti-Patterns",-1)])),description:n(()=>s[30]||(s[30]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2 text-sm"},[e("li",null,"Don't emit events for every database operation"),e("li",null,"Avoid deep event chains that create circular dependencies"),e("li",null,"Don't use events for synchronous data exchange"),e("li",null,"Never assume listeners will complete successfully"),e("li",null,"Don't emit sensitive data without sanitization"),e("li",null,"Avoid blocking operations in async event handlers"),e("li",null,"Don't ignore context cancellation in listeners")],-1)])),_:1})])])]),e("section",H,[s[42]||(s[42]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Performance & Thread Safety",-1)),e("div",V,[e("div",J,[a(l,null,{header:n(()=>[e("div",$,[a(r,{name:"i-lucide-trending-up",class:"h-5 w-5 text-green-500"}),s[32]||(s[32]=e("span",{class:"font-semibold"},"Performance Features",-1))])]),default:n(()=>[e("div",K,[e("div",Z,[a(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),s[33]||(s[33]=e("span",null,"Thread-safe with read-write mutexes",-1))]),e("div",Q,[a(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),s[34]||(s[34]=e("span",null,"Goroutine-based parallel listener execution",-1))]),e("div",X,[a(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),s[35]||(s[35]=e("span",null,"Automatic panic recovery in listeners",-1))]),e("div",Y,[a(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),s[36]||(s[36]=e("span",null,"Context cancellation and timeout support",-1))]),e("div",ee,[a(r,{name:"i-lucide-check",class:"h-4 w-4 text-green-500 mt-0.5"}),s[37]||(s[37]=e("span",null,"Zero allocation for listener management",-1))])])]),_:1}),a(l,null,{header:n(()=>[e("div",te,[a(r,{name:"i-lucide-shield-check",class:"h-5 w-5 text-blue-500"}),s[38]||(s[38]=e("span",{class:"font-semibold"},"Thread Safety",-1))])]),default:n(()=>[s[39]||(s[39]=e("div",{class:"space-y-3 text-sm"},[e("div",{class:"flex justify-between"},[e("span",null,"Concurrent emissions:"),e("span",{class:"font-mono text-green-500"},"✓ Safe")]),e("div",{class:"flex justify-between"},[e("span",null,"Listener registration:"),e("span",{class:"font-mono text-green-500"},"✓ Safe")]),e("div",{class:"flex justify-between"},[e("span",null,"Event introspection:"),e("span",{class:"font-mono text-green-500"},"✓ Safe")]),e("div",{class:"flex justify-between"},[e("span",null,"Memory consistency:"),e("span",{class:"font-mono text-green-500"},"✓ Guaranteed")]),e("div",{class:"flex justify-between"},[e("span",null,"Goroutine safety:"),e("span",{class:"font-mono text-green-500"},"✓ Full support")])],-1))]),_:1,__:[39]})]),a(l,null,{'header"':n(()=>[e("div",se,[a(r,{name:"i-lucide-zap",class:"h-5 w-5 text-yellow-500"}),s[40]||(s[40]=e("span",{class:"font-semibold"},"Performance Monitoring Example",-1))])]),default:n(()=>[s[41]||(s[41]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Event Performance Tracking")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Performance monitoring service"),t(`
`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"EventMonitor"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    emitter *emitter.Emitter
    logger  logger.Logger
    metrics `),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t(`]*EventMetrics
    mutex   sync.RWMutex
}

`),e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"EventMetrics"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    TotalEmissions  `),e("span",{class:"text-purple-400"},"int64"),t(`
    TotalListeners  `),e("span",{class:"text-purple-400"},"int64"),t(`
    AverageLatency  time.Duration
    ErrorCount      `),e("span",{class:"text-purple-400"},"int64"),t(`
}

`),e("span",{class:"text-blue-400"},"func"),t(" (m *EventMonitor) "),e("span",{class:"text-yellow-400"},"Init"),t(`() {
    m.metrics = `),e("span",{class:"text-blue-400"},"make"),t("("),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t(`]*EventMetrics)
    
    `),e("span",{class:"text-green-400"},"// Monitor all events by wrapping emitter methods"),t(`
    originalEmit := m.emitter.Emit
    m.emitter.Emit = `),e("span",{class:"text-blue-400"},"func"),t("(event "),e("span",{class:"text-purple-400"},"string"),t(", data "),e("span",{class:"text-blue-400"},"any"),t(`) {
        start := time.Now()
        originalEmit(event, data)
        m.recordMetrics(event, time.Since(start))
    }
}

`),e("span",{class:"text-blue-400"},"func"),t(" (m *EventMonitor) "),e("span",{class:"text-yellow-400"},"recordMetrics"),t("(event "),e("span",{class:"text-purple-400"},"string"),t(`, duration time.Duration) {
    m.mutex.Lock()
    `),e("span",{class:"text-blue-400"},"defer"),t(` m.mutex.Unlock()
    
    `),e("span",{class:"text-blue-400"},"if"),t(` _, exists := m.metrics[event]; !exists {
        m.metrics[event] = &EventMetrics{}
    }
    
    metrics := m.metrics[event]
    metrics.TotalEmissions++
    metrics.TotalListeners = `),e("span",{class:"text-purple-400"},"int64"),t(`(m.emitter.ListenerCount(event))
    
    `),e("span",{class:"text-green-400"},"// Calculate running average"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" metrics.TotalEmissions == "),e("span",{class:"text-purple-400"},"1"),t(` {
        metrics.AverageLatency = duration
    } `),e("span",{class:"text-blue-400"},"else"),t(` {
        metrics.AverageLatency = time.Duration(
            (`),e("span",{class:"text-purple-400"},"int64"),t("(metrics.AverageLatency)*metrics.TotalEmissions + "),e("span",{class:"text-purple-400"},"int64"),t(`(duration)) / 
            (metrics.TotalEmissions + `),e("span",{class:"text-purple-400"},"1"),t(`),
        )
    }
}

`),e("span",{class:"text-green-400"},"// Get performance stats"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(" (m *EventMonitor) "),e("span",{class:"text-yellow-400"},"GetStats"),t("() "),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t(`]*EventMetrics {
    m.mutex.RLock()
    `),e("span",{class:"text-blue-400"},"defer"),t(` m.mutex.RUnlock()
    
    stats := `),e("span",{class:"text-blue-400"},"make"),t("("),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t(`]*EventMetrics)
    `),e("span",{class:"text-blue-400"},"for"),t(" event, metrics := "),e("span",{class:"text-blue-400"},"range"),t(` m.metrics {
        stats[event] = &EventMetrics{
            TotalEmissions:  metrics.TotalEmissions,
            TotalListeners:  metrics.TotalListeners,
            AverageLatency:  metrics.AverageLatency,
            ErrorCount:      metrics.ErrorCount,
        }
    }
    `),e("span",{class:"text-blue-400"},"return"),t(` stats
}

`),e("span",{class:"text-green-400"},"// Concurrent event emission test"),t(`
`),e("span",{class:"text-blue-400"},"func"),t(),e("span",{class:"text-yellow-400"},"BenchmarkConcurrentEmit"),t(`(b *testing.B) {
    emitter := emitter.New()
    
    `),e("span",{class:"text-green-400"},"// Register multiple listeners"),t(`
    `),e("span",{class:"text-blue-400"},"for"),t(" i := "),e("span",{class:"text-purple-400"},"0"),t("; i < "),e("span",{class:"text-purple-400"},"10"),t(`; i++ {
        emitter.On(`),e("span",{class:"text-green-400"},'"benchmark.event"'),t(", "),e("span",{class:"text-blue-400"},"func"),t("(data "),e("span",{class:"text-blue-400"},"any"),t(`) {
            time.Sleep(time.Microsecond) `),e("span",{class:"text-green-400"},"// Simulate work"),t(`
        })
    }
    
    b.ResetTimer()
    b.RunParallel(`),e("span",{class:"text-blue-400"},"func"),t(`(pb *testing.PB) {
        `),e("span",{class:"text-blue-400"},"for"),t(` pb.Next() {
            emitter.Emit(`),e("span",{class:"text-green-400"},'"benchmark.event"'),t(", "),e("span",{class:"text-green-400"},'"test data"'),t(`)
        }
    })
}`)])])],-1))]),_:1,__:[41]})])]),e("section",null,[s[47]||(s[47]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Common Event Patterns",-1)),e("div",ne,[a(l,null,{header:n(()=>[e("div",ae,[a(r,{name:"i-lucide-map",class:"h-5 w-5 text-purple-500"}),s[43]||(s[43]=e("span",{class:"font-semibold"},"Event Naming Conventions",-1))])]),default:n(()=>[s[44]||(s[44]=e("div",{class:"space-y-4"},[e("div",{class:"grid gap-4 md:grid-cols-2"},[e("div",null,[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"Entity Lifecycle Events"),e("ul",{class:"text-sm space-y-1 text-gray-600 dark:text-gray-300"},[e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"user.created")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"user.updated")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"user.deleted")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"post.published")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"order.completed")])])]),e("div",null,[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"Action Events"),e("ul",{class:"text-sm space-y-1 text-gray-600 dark:text-gray-300"},[e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"user.login_attempt")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"email.sent")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"file.uploaded")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"payment.processed")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"cache.invalidated")])])]),e("div",null,[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"File Events"),e("ul",{class:"text-sm space-y-1 text-gray-600 dark:text-gray-300"},[e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"post.image.uploaded")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"user.avatar.deleted")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"document.file.processed")])])]),e("div",null,[e("h4",{class:"font-semibold text-gray-900 dark:text-white mb-2"},"System Events"),e("ul",{class:"text-sm space-y-1 text-gray-600 dark:text-gray-300"},[e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"system.startup")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"analytics.track")]),e("li",null,[t("• "),e("code",{class:"bg-gray-100 dark:bg-gray-800 px-1 rounded"},"audit.log")])])])])],-1))]),_:1,__:[44]}),a(i,{color:"blue",variant:"soft"},{title:n(()=>s[45]||(s[45]=[t("💡 Event Design Tips",-1)])),description:n(()=>s[46]||(s[46]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Use dot notation for hierarchical event names (module.action.detail)"),e("li",null,"Keep event data immutable - pass copies, not references to mutable objects"),e("li",null,"Include sufficient context in event data for listeners to work independently"),e("li",null,"Use past tense for completed actions (created, updated) and present for ongoing (creating, updating)"),e("li",null,"Consider event versioning for breaking changes (user.created.v2)"),e("li",null,"Document your events and their data structures for other developers")],-1)])),_:1})])])])),[[p]])]),_:1})}const ce=x(E,[["render",re]]);export{ce as default};
