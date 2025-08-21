import{a as x,_ as m}from"./Card-dhBREXno.js";import{d as y,u as f,c as b,w as r,a as v,b as w,e,f as n,g as t,_ as C,r as S,o as d}from"./index-c5PrNzGP.js";import{_ as E}from"./DocsLayout.vue_vue_type_script_setup_true_lang-D4FaFzot.js";const q={class:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},L={class:"mb-12"},h={class:"grid gap-4 md:grid-cols-3 mb-6"},D={class:"flex items-center space-x-2"},_={class:"flex items-center space-x-2"},k={class:"flex items-center space-x-2"},I={class:"mb-12"},B={class:"space-y-6"},F={class:"flex items-center space-x-2"},U={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},T={class:"flex items-center justify-between mb-2"},A={class:"flex items-center space-x-2"},N={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},O={class:"flex items-center justify-between mb-2"},R={class:"mb-12"},P={class:"space-y-6"},W={class:"grid gap-4 md:grid-cols-2"},j={class:"mb-12"},G={class:"space-y-6"},V={class:"flex items-center space-x-2"},J={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},M={class:"flex items-center justify-between mb-2"},z={class:"mb-12"},Z={class:"space-y-6"},H={class:"flex items-center space-x-2"},$={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},K={class:"flex items-center justify-between mb-2"},Q={class:"mb-12"},X={class:"space-y-6"},Y={class:"flex items-center space-x-2"},ee={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},te={class:"flex items-center justify-between mb-2"},se={class:"flex items-center space-x-2"},re={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},ne={class:"flex items-center justify-between mb-2"},le={class:"mb-12"},ae={class:"space-y-6"},oe={class:"flex items-center space-x-2"},ie={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},ge={class:"flex items-center justify-between mb-2"},pe={class:"flex items-center space-x-2"},de={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},ce={class:"flex items-center justify-between mb-2"},ue={class:"mb-12"},xe={class:"space-y-6"},me={class:"flex items-center space-x-2"},ye={class:"flex items-center space-x-2"},fe={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},be={class:"flex items-center justify-between mb-2"},ve={class:"space-y-4"},qe=y({__name:"logger",setup(we){const{copy:c}=f(),g=async(p,s)=>{await c(p);const i=s.target,o=i.textContent;i.textContent="Copied!",i.classList.add("!text-green-400"),setTimeout(()=>{i.textContent=o,i.classList.remove("!text-green-400")},2e3)};return(p,s)=>{const i=x,o=C,l=m,u=S("prism");return d(),b(E,null,{default:r(()=>[v((d(),w("div",q,[s[74]||(s[74]=e("div",{class:"mb-8"},[e("h1",{class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},"Logger"),e("p",{class:"text-xl text-gray-600 dark:text-gray-300"}," Structured logging system with typed fields, context integration, and beautiful console output ")],-1)),e("section",L,[s[17]||(s[17]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Overview",-1)),n(i,{color:"blue",variant:"soft",class:"mb-6"},{title:r(()=>s[9]||(s[9]=[t("📊 Structured Logging",-1)])),description:r(()=>s[10]||(s[10]=[t(" Base Framework's logger provides structured logging with typed fields, context integration, and multiple output formats. Built on Zap for high performance, it includes beautiful console output with emojis and colors plus JSON file logging for production. ",-1)])),_:1}),e("div",h,[n(l,null,{header:r(()=>[e("div",D,[n(o,{name:"i-lucide-layers",class:"h-5 w-5 text-blue-500"}),s[11]||(s[11]=e("span",{class:"font-semibold"},"Typed Fields",-1))])]),default:r(()=>[s[12]||(s[12]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Use strongly-typed fields like String(), Int(), Duration() for structured, searchable logs. ",-1))]),_:1,__:[12]}),n(l,null,{header:r(()=>[e("div",_,[n(o,{name:"i-lucide-monitor",class:"h-5 w-5 text-green-500"}),s[13]||(s[13]=e("span",{class:"font-semibold"},"Beautiful Console",-1))])]),default:r(()=>[s[14]||(s[14]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Colorized console output with emojis and clear formatting for development. ",-1))]),_:1,__:[14]}),n(l,null,{header:r(()=>[e("div",k,[n(o,{name:"i-lucide-file-text",class:"h-5 w-5 text-orange-500"}),s[15]||(s[15]=e("span",{class:"font-semibold"},"JSON Files",-1))])]),default:r(()=>[s[16]||(s[16]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Production-ready JSON logs written to files for analysis and monitoring. ",-1))]),_:1,__:[16]})])]),e("section",I,[s[24]||(s[24]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Configuration",-1)),e("div",B,[n(l,null,{header:r(()=>[e("div",F,[n(o,{name:"i-lucide-settings",class:"h-5 w-5 text-purple-500"}),s[18]||(s[18]=e("span",{class:"font-semibold"},"Environment Variables",-1))])]),default:r(()=>[e("div",U,[e("div",T,[s[19]||(s[19]=e("span",{class:"text-xs text-gray-400"},".env Configuration",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[0]||(s[0]=a=>g(`# Log Level (debug, info, warn, error, fatal)
LOG_LEVEL=info

# Log Directory Path
LOG_PATH=logs

# Environment (development/production)
ENVIRONMENT=development`,a))}," Copy ")]),s[20]||(s[20]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"# Log Level (debug, info, warn, error, fatal)"),t(`
`),e("span",{class:"text-blue-400"},"LOG_LEVEL"),t("="),e("span",{class:"text-yellow-400"},"info"),t(`

`),e("span",{class:"text-green-400"},"# Log Directory Path"),t(`
`),e("span",{class:"text-blue-400"},"LOG_PATH"),t("="),e("span",{class:"text-yellow-400"},"logs"),t(`

`),e("span",{class:"text-green-400"},"# Environment (development/production)"),t(`
`),e("span",{class:"text-blue-400"},"ENVIRONMENT"),t("="),e("span",{class:"text-yellow-400"},"development")])],-1))])]),_:1}),n(l,null,{header:r(()=>[e("div",A,[n(o,{name:"i-lucide-code",class:"h-5 w-5 text-blue-500"}),s[21]||(s[21]=e("span",{class:"font-semibold"},"Manual Configuration",-1))])]),default:r(()=>[e("div",N,[e("div",O,[s[22]||(s[22]=e("span",{class:"text-xs text-gray-400"},"logger initialization",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[1]||(s[1]=a=>g(`import "base/core/logger"

// Create logger with custom config
config := logger.Config{
    Environment: "development", // or "production"
    LogPath:     "logs",
    Level:       "debug",
}

log, err := logger.NewLogger(config)
if err != nil {
    panic(err)
}

// Use the logger
log.Info("Application started",
    logger.String("version", "1.0.0"),
    logger.String("environment", config.Environment))`,a))}," Copy ")]),s[23]||(s[23]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"import"),t(),e("span",{class:"text-green-400"},'"base/core/logger"'),t(`

`),e("span",{class:"text-green-400"},"// Create logger with custom config"),t(`
config := logger.Config{
    Environment: `),e("span",{class:"text-green-400"},'"development"'),t(", "),e("span",{class:"text-green-400"},'// or "production"'),t(`
    LogPath:     `),e("span",{class:"text-green-400"},'"logs"'),t(`,
    Level:       `),e("span",{class:"text-green-400"},'"debug"'),t(`,
}

log, err := logger.NewLogger(config)
`),e("span",{class:"text-blue-400"},"if"),t(" err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
    `),e("span",{class:"text-blue-400"},"panic"),t(`(err)
}

`),e("span",{class:"text-green-400"},"// Use the logger"),t(`
log.Info(`),e("span",{class:"text-green-400"},'"Application started"'),t(`,
    logger.String(`),e("span",{class:"text-green-400"},'"version"'),t(", "),e("span",{class:"text-green-400"},'"1.0.0"'),t(`),
    logger.String(`),e("span",{class:"text-green-400"},'"environment"'),t(", config.Environment))")])],-1))])]),_:1})])]),e("section",R,[s[36]||(s[36]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Log Levels",-1)),e("div",P,[s[35]||(s[35]=e("p",{class:"text-gray-600 dark:text-gray-300"}," Base Framework supports five log levels, each with specific use cases and visual indicators. ",-1)),e("div",W,[n(l,null,{header:r(()=>s[25]||(s[25]=[e("div",{class:"flex items-center space-x-2"},[e("span",{class:"text-2xl"},"🔍"),e("span",{class:"font-semibold text-purple-600 dark:text-purple-400"},"DEBUG")],-1)])),default:r(()=>[s[26]||(s[26]=e("div",{class:"space-y-2"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Detailed information for diagnosing problems. Only shown in development. "),e("div",{class:"text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded"},[e("code",null,'log.Debug("User query", logger.String("sql", query))')])],-1))]),_:1,__:[26]}),n(l,null,{header:r(()=>s[27]||(s[27]=[e("div",{class:"flex items-center space-x-2"},[e("span",{class:"text-2xl"},"ℹ️"),e("span",{class:"font-semibold text-blue-600 dark:text-blue-400"},"INFO")],-1)])),default:r(()=>[s[28]||(s[28]=e("div",{class:"space-y-2"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," General information about application flow and important events. "),e("div",{class:"text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded"},[e("code",null,'log.Info("User created", logger.Uint("user_id", 123))')])],-1))]),_:1,__:[28]}),n(l,null,{header:r(()=>s[29]||(s[29]=[e("div",{class:"flex items-center space-x-2"},[e("span",{class:"text-2xl"},"⚠️"),e("span",{class:"font-semibold text-yellow-600 dark:text-yellow-400"},"WARN")],-1)])),default:r(()=>[s[30]||(s[30]=e("div",{class:"space-y-2"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Something unexpected happened but the application can continue. "),e("div",{class:"text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded"},[e("code",null,'log.Warn("Email failed", logger.String("recipient", email))')])],-1))]),_:1,__:[30]}),n(l,null,{header:r(()=>s[31]||(s[31]=[e("div",{class:"flex items-center space-x-2"},[e("span",{class:"text-2xl"},"❌"),e("span",{class:"font-semibold text-red-600 dark:text-red-400"},"ERROR")],-1)])),default:r(()=>[s[32]||(s[32]=e("div",{class:"space-y-2"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Error conditions that should be investigated and fixed. "),e("div",{class:"text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded"},[e("code",null,'log.Error("Database error", logger.String("error", err.Error()))')])],-1))]),_:1,__:[32]}),n(l,null,{header:r(()=>s[33]||(s[33]=[e("div",{class:"flex items-center space-x-2"},[e("span",{class:"text-2xl"},"💀"),e("span",{class:"font-semibold text-red-800 dark:text-red-300"},"FATAL")],-1)])),default:r(()=>[s[34]||(s[34]=e("div",{class:"space-y-2"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Critical errors that cause the application to exit immediately. "),e("div",{class:"text-xs bg-gray-100 dark:bg-gray-800 p-2 rounded"},[e("code",null,'log.Fatal("Cannot connect to database", logger.String("dsn", dsn))')])],-1))]),_:1,__:[34]})])])]),e("section",j,[s[40]||(s[40]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Structured Logging with Typed Fields",-1)),e("div",G,[n(l,null,{header:r(()=>[e("div",V,[n(o,{name:"i-lucide-database",class:"h-5 w-5 text-blue-500"}),s[37]||(s[37]=e("span",{class:"font-semibold"},"Available Field Types",-1))])]),default:r(()=>[e("div",J,[e("div",M,[s[38]||(s[38]=e("span",{class:"text-xs text-gray-400"},"Typed Field Examples",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[2]||(s[2]=a=>g(`// String fields
logger.String("username", "john_doe")
logger.String("error", err.Error())

// Numeric fields
logger.Int("status_code", 200)
logger.Int64("user_id", 123456)
logger.Uint("count", 42)
logger.Float64("price", 29.99)

// Boolean fields
logger.Bool("is_admin", true)
logger.Bool("email_verified", false)

// Time and duration
logger.Duration("request_time", time.Since(start))

// Complex data
logger.Any("metadata", map[string]interface{}{
    "ip": "192.168.1.1",
    "user_agent": "Mozilla/5.0...",
})`,a))}," Copy ")]),s[39]||(s[39]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// String fields"),t(`
logger.String(`),e("span",{class:"text-green-400"},'"username"'),t(", "),e("span",{class:"text-green-400"},'"john_doe"'),t(`)
logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error())

`),e("span",{class:"text-green-400"},"// Numeric fields"),t(`
logger.Int(`),e("span",{class:"text-green-400"},'"status_code"'),t(", "),e("span",{class:"text-purple-400"},"200"),t(`)
logger.Int64(`),e("span",{class:"text-green-400"},'"user_id"'),t(", "),e("span",{class:"text-purple-400"},"123456"),t(`)
logger.Uint(`),e("span",{class:"text-green-400"},'"count"'),t(", "),e("span",{class:"text-purple-400"},"42"),t(`)
logger.Float64(`),e("span",{class:"text-green-400"},'"price"'),t(", "),e("span",{class:"text-purple-400"},"29.99"),t(`)

`),e("span",{class:"text-green-400"},"// Boolean fields"),t(`
logger.Bool(`),e("span",{class:"text-green-400"},'"is_admin"'),t(", "),e("span",{class:"text-purple-400"},"true"),t(`)
logger.Bool(`),e("span",{class:"text-green-400"},'"email_verified"'),t(", "),e("span",{class:"text-purple-400"},"false"),t(`)

`),e("span",{class:"text-green-400"},"// Time and duration"),t(`
logger.Duration(`),e("span",{class:"text-green-400"},'"request_time"'),t(`, time.Since(start))

`),e("span",{class:"text-green-400"},"// Complex data"),t(`
logger.Any(`),e("span",{class:"text-green-400"},'"metadata"'),t(", "),e("span",{class:"text-blue-400"},"map"),t("["),e("span",{class:"text-purple-400"},"string"),t("]"),e("span",{class:"text-blue-400"},"interface"),t(`{}{
    `),e("span",{class:"text-green-400"},'"ip"'),t(": "),e("span",{class:"text-green-400"},'"192.168.1.1"'),t(`,
    `),e("span",{class:"text-green-400"},'"user_agent"'),t(": "),e("span",{class:"text-green-400"},'"Mozilla/5.0..."'),t(`,
})`)])],-1))])]),_:1})])]),e("section",z,[s[46]||(s[46]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Context Integration & Request Tracing",-1)),e("div",Z,[n(l,null,{header:r(()=>[e("div",H,[n(o,{name:"i-lucide-git-branch",class:"h-5 w-5 text-green-500"}),s[41]||(s[41]=e("span",{class:"font-semibold"},"Creating Child Loggers",-1))])]),default:r(()=>[e("div",$,[e("div",K,[s[42]||(s[42]=e("span",{class:"text-xs text-gray-400"},"Context-aware logging",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[3]||(s[3]=a=>g(`// Create a child logger with context
requestLogger := logger.With(
    logger.String("request_id", requestID),
    logger.String("user_id", userID),
    logger.String("endpoint", "/api/users"),
)

// All subsequent logs include context
requestLogger.Info("Processing request")
requestLogger.Debug("Validating input", 
    logger.Any("input", requestData))
requestLogger.Info("Request completed", 
    logger.Duration("duration", time.Since(start)))`,a))}," Copy ")]),s[43]||(s[43]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Create a child logger with context"),t(`
requestLogger := logger.With(
    logger.String(`),e("span",{class:"text-green-400"},'"request_id"'),t(`, requestID),
    logger.String(`),e("span",{class:"text-green-400"},'"user_id"'),t(`, userID),
    logger.String(`),e("span",{class:"text-green-400"},'"endpoint"'),t(", "),e("span",{class:"text-green-400"},'"/api/users"'),t(`),
)

`),e("span",{class:"text-green-400"},"// All subsequent logs include context"),t(`
requestLogger.Info(`),e("span",{class:"text-green-400"},'"Processing request"'),t(`)
requestLogger.Debug(`),e("span",{class:"text-green-400"},'"Validating input"'),t(`, 
    logger.Any(`),e("span",{class:"text-green-400"},'"input"'),t(`, requestData))
requestLogger.Info(`),e("span",{class:"text-green-400"},'"Request completed"'),t(`, 
    logger.Duration(`),e("span",{class:"text-green-400"},'"duration"'),t(", time.Since(start)))")])],-1))])]),_:1}),n(i,{color:"blue",variant:"soft"},{'title"':r(()=>s[44]||(s[44]=[t("💡 Context Best Practice",-1)])),description:r(()=>s[45]||(s[45]=[t(" Create child loggers with request-specific context at the beginning of request handlers. This ensures all logs within that request scope are automatically tagged with relevant information like request ID, user ID, and endpoint. ",-1)])),_:1})])]),e("section",Q,[s[53]||(s[53]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Usage Examples",-1)),e("div",X,[n(l,null,{header:r(()=>[e("div",Y,[n(o,{name:"i-lucide-layers",class:"h-5 w-5 text-blue-500"}),s[47]||(s[47]=e("span",{class:"font-semibold"},"Controller Logging",-1))])]),default:r(()=>[e("div",ee,[e("div",te,[s[48]||(s[48]=e("span",{class:"text-xs text-gray-400"},"controller.go",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[4]||(s[4]=a=>{g(`type UserController struct {
    service *UserService
    logger  logger.Logger
}

func (c *UserController) CreateUser(ctx *router.Context) error {
    // Create request-scoped logger
    requestLogger := c.logger.With(
        logger.String("endpoint", "POST /api/users"),
        logger.String("request_id", ctx.Get("request_id").(string)),
    )

    requestLogger.Info("Creating new user")

    var req CreateUserRequest
    if err := ctx.ShouldBind(&req); err != nil {
        requestLogger.Warn("Invalid request data", 
            logger.String("error", err.Error()),
            logger.Any("request", req))
        return ctx.JSON(400, types.ErrorResponse{Error: err.Error()})
    }

    user, err := c.service.Create(&req)
    if err != nil {
        requestLogger.Error("Failed to create user", 
            logger.String("error", err.Error()),
            logger.String("email", req.Email))
        return ctx.JSON(500, types.ErrorResponse{Error: "Internal error"})
    }

    requestLogger.Info("User created successfully", 
        logger.Uint("user_id", user.ID),
        logger.String("email", user.Email))
        
    return ctx.JSON(201, user)
}`,a)})}," Copy ")]),s[49]||(s[49]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"UserController"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    service *UserService
    logger  logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),t(" (c *UserController) "),e("span",{class:"text-yellow-400"},"CreateUser"),t("(ctx *router.Context) "),e("span",{class:"text-purple-400"},"error"),t(` {
    `),e("span",{class:"text-green-400"},"// Create request-scoped logger"),t(`
    requestLogger := c.logger.With(
        logger.String(`),e("span",{class:"text-green-400"},'"endpoint"'),t(", "),e("span",{class:"text-green-400"},'"POST /api/users"'),t(`),
        logger.String(`),e("span",{class:"text-green-400"},'"request_id"'),t(", ctx.Get("),e("span",{class:"text-green-400"},'"request_id"'),t(`).(string)),
    )

    requestLogger.Info(`),e("span",{class:"text-green-400"},'"Creating new user"'),t(`)

    `),e("span",{class:"text-blue-400"},"var"),t(` req CreateUserRequest
    `),e("span",{class:"text-blue-400"},"if"),t(" err := ctx.ShouldBind(&req); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        requestLogger.Warn(`),e("span",{class:"text-green-400"},'"Invalid request data"'),t(`, 
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()),
            logger.Any(`),e("span",{class:"text-green-400"},'"request"'),t(`, req))
        `),e("span",{class:"text-blue-400"},"return"),t(" ctx.JSON("),e("span",{class:"text-purple-400"},"400"),t(`, types.ErrorResponse{Error: err.Error()})
    }

    user, err := c.service.Create(&req)
    `),e("span",{class:"text-blue-400"},"if"),t(" err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        requestLogger.Error(`),e("span",{class:"text-green-400"},'"Failed to create user"'),t(`, 
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()),
            logger.String(`),e("span",{class:"text-green-400"},'"email"'),t(`, req.Email))
        `),e("span",{class:"text-blue-400"},"return"),t(" ctx.JSON("),e("span",{class:"text-purple-400"},"500"),t(", types.ErrorResponse{Error: "),e("span",{class:"text-green-400"},'"Internal error"'),t(`})
    }

    requestLogger.Info(`),e("span",{class:"text-green-400"},'"User created successfully"'),t(`, 
        logger.Uint(`),e("span",{class:"text-green-400"},'"user_id"'),t(`, user.ID),
        logger.String(`),e("span",{class:"text-green-400"},'"email"'),t(`, user.Email))
        
    `),e("span",{class:"text-blue-400"},"return"),t(" ctx.JSON("),e("span",{class:"text-purple-400"},"201"),t(`, user)
}`)])],-1))])]),_:1}),n(l,null,{header:r(()=>[e("div",se,[n(o,{name:"i-lucide-server",class:"h-5 w-5 text-green-500"}),s[50]||(s[50]=e("span",{class:"font-semibold"},"Service Layer Logging",-1))])]),default:r(()=>[e("div",re,[e("div",ne,[s[51]||(s[51]=e("span",{class:"text-xs text-gray-400"},"service.go",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[5]||(s[5]=a=>{g(`type EmailService struct {
    db     *gorm.DB
    logger logger.Logger
}

func (s *EmailService) SendWelcomeEmail(userID uint, email string) error {
    start := time.Now()
    
    // Create service-scoped logger
    serviceLogger := s.logger.With(
        logger.String("service", "EmailService"),
        logger.String("operation", "SendWelcomeEmail"),
        logger.Uint("user_id", userID),
    )

    serviceLogger.Info("Starting email send", 
        logger.String("recipient", email),
        logger.String("template", "welcome"))

    // Fetch user details
    var user User
    if err := s.db.First(&user, userID).Error; err != nil {
        serviceLogger.Error("Failed to fetch user", 
            logger.String("error", err.Error()))
        return err
    }

    serviceLogger.Debug("User fetched", 
        logger.String("name", user.Name),
        logger.Bool("email_verified", user.EmailVerified))

    // Send email (simulated)
    if err := s.sendEmail(email, "welcome", user); err != nil {
        serviceLogger.Error("Email delivery failed", 
            logger.String("error", err.Error()),
            logger.Duration("attempt_duration", time.Since(start)))
        return err
    }

    serviceLogger.Info("Welcome email sent successfully", 
        logger.Duration("total_duration", time.Since(start)))
        
    return nil
}`,a)})}," Copy ")]),s[52]||(s[52]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"type"),t(),e("span",{class:"text-yellow-400"},"EmailService"),t(),e("span",{class:"text-blue-400"},"struct"),t(` {
    db     *gorm.DB
    logger logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),t(" (s *EmailService) "),e("span",{class:"text-yellow-400"},"SendWelcomeEmail"),t("(userID "),e("span",{class:"text-purple-400"},"uint"),t(", email "),e("span",{class:"text-purple-400"},"string"),t(") "),e("span",{class:"text-purple-400"},"error"),t(` {
    start := time.Now()
    
    `),e("span",{class:"text-green-400"},"// Create service-scoped logger"),t(`
    serviceLogger := s.logger.With(
        logger.String(`),e("span",{class:"text-green-400"},'"service"'),t(", "),e("span",{class:"text-green-400"},'"EmailService"'),t(`),
        logger.String(`),e("span",{class:"text-green-400"},'"operation"'),t(", "),e("span",{class:"text-green-400"},'"SendWelcomeEmail"'),t(`),
        logger.Uint(`),e("span",{class:"text-green-400"},'"user_id"'),t(`, userID),
    )

    serviceLogger.Info(`),e("span",{class:"text-green-400"},'"Starting email send"'),t(`, 
        logger.String(`),e("span",{class:"text-green-400"},'"recipient"'),t(`, email),
        logger.String(`),e("span",{class:"text-green-400"},'"template"'),t(", "),e("span",{class:"text-green-400"},'"welcome"'),t(`))

    `),e("span",{class:"text-green-400"},"// Fetch user details"),t(`
    `),e("span",{class:"text-blue-400"},"var"),t(` user User
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.db.First(&user, userID).Error; err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        serviceLogger.Error(`),e("span",{class:"text-green-400"},'"Failed to fetch user"'),t(`, 
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()))
        `),e("span",{class:"text-blue-400"},"return"),t(` err
    }

    serviceLogger.Debug(`),e("span",{class:"text-green-400"},'"User fetched"'),t(`, 
        logger.String(`),e("span",{class:"text-green-400"},'"name"'),t(`, user.Name),
        logger.Bool(`),e("span",{class:"text-green-400"},'"email_verified"'),t(`, user.EmailVerified))

    `),e("span",{class:"text-green-400"},"// Send email (simulated)"),t(`
    `),e("span",{class:"text-blue-400"},"if"),t(" err := s.sendEmail(email, "),e("span",{class:"text-green-400"},'"welcome"'),t(", user); err != "),e("span",{class:"text-purple-400"},"nil"),t(` {
        serviceLogger.Error(`),e("span",{class:"text-green-400"},'"Email delivery failed"'),t(`, 
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),t(`, err.Error()),
            logger.Duration(`),e("span",{class:"text-green-400"},'"attempt_duration"'),t(`, time.Since(start)))
        `),e("span",{class:"text-blue-400"},"return"),t(` err
    }

    serviceLogger.Info(`),e("span",{class:"text-green-400"},'"Welcome email sent successfully"'),t(`, 
        logger.Duration(`),e("span",{class:"text-green-400"},'"total_duration"'),t(`, time.Since(start)))
        
    `),e("span",{class:"text-blue-400"},"return"),t(),e("span",{class:"text-purple-400"},"nil"),t(`
}`)])],-1))])]),_:1})])]),e("section",le,[s[60]||(s[60]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Middleware Integration",-1)),e("div",ae,[n(l,null,{header:r(()=>[e("div",oe,[n(o,{name:"i-lucide-route",class:"h-5 w-5 text-purple-500"}),s[54]||(s[54]=e("span",{class:"font-semibold"},"Request Logging Middleware",-1))])]),default:r(()=>[e("div",ie,[e("div",ge,[s[55]||(s[55]=e("span",{class:"text-xs text-gray-400"},"middleware setup",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[6]||(s[6]=a=>g(`import "base/core/router/middleware"

// Configure logger middleware
loggerConfig := &middleware.LoggerConfig{
    Logger:         log,
    LogLevel:       "info",
    SkipPaths:      []string{"/health", "/metrics"},
    IncludeHeaders: true,  // Include request headers in logs
    IncludeBody:    false, // Don't log request bodies by default
}

// Add to router
router.Use(middleware.Logger(loggerConfig))

// Add recovery middleware with logging
router.Use(middleware.Recovery(log))

// Add request ID middleware for tracing
router.Use(middleware.RequestID())`,a))}," Copy ")]),s[56]||(s[56]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"import"),t(),e("span",{class:"text-green-400"},'"base/core/router/middleware"'),t(`

`),e("span",{class:"text-green-400"},"// Configure logger middleware"),t(`
loggerConfig := &middleware.LoggerConfig{
    Logger:         log,
    LogLevel:       `),e("span",{class:"text-green-400"},'"info"'),t(`,
    SkipPaths:      []`),e("span",{class:"text-purple-400"},"string"),t("{"),e("span",{class:"text-green-400"},'"/health"'),t(", "),e("span",{class:"text-green-400"},'"/metrics"'),t(`},
    IncludeHeaders: `),e("span",{class:"text-purple-400"},"true"),t(",  "),e("span",{class:"text-green-400"},"// Include request headers in logs"),t(`
    IncludeBody:    `),e("span",{class:"text-purple-400"},"false"),t(", "),e("span",{class:"text-green-400"},"// Don't log request bodies by default"),t(`
}

`),e("span",{class:"text-green-400"},"// Add to router"),t(`
router.Use(middleware.Logger(loggerConfig))

`),e("span",{class:"text-green-400"},"// Add recovery middleware with logging"),t(`
router.Use(middleware.Recovery(log))

`),e("span",{class:"text-green-400"},"// Add request ID middleware for tracing"),t(`
router.Use(middleware.RequestID())`)])],-1))])]),_:1}),n(l,null,{header:r(()=>[e("div",pe,[n(o,{name:"i-lucide-activity",class:"h-5 w-5 text-orange-500"}),s[57]||(s[57]=e("span",{class:"font-semibold"},"Custom Access Log Format",-1))])]),default:r(()=>[e("div",de,[e("div",ce,[s[58]||(s[58]=e("span",{class:"text-xs text-gray-400"},"custom access logs",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[7]||(s[7]=a=>g(`// Create custom access log with specific format
format := ":method :path :status :latency :ip - :user_agent"
router.Use(middleware.AccessLog(format, log))

// Example output:
// INFO   GET /api/users 200 45.2ms 127.0.0.1 - Mozilla/5.0...

// Available tokens:
// :method     - HTTP method (GET, POST, etc.)
// :path       - Request path
// :status     - Response status code
// :latency    - Request duration
// :ip         - Client IP address
// :user_agent - User agent string`,a))}," Copy ")]),s[59]||(s[59]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"// Create custom access log with specific format"),t(`
format := `),e("span",{class:"text-green-400"},'":method :path :status :latency :ip - :user_agent"'),t(`
router.Use(middleware.AccessLog(format, log))

`),e("span",{class:"text-green-400"},"// Example output:"),t(`
`),e("span",{class:"text-green-400"},"// INFO   GET /api/users 200 45.2ms 127.0.0.1 - Mozilla/5.0..."),t(`

`),e("span",{class:"text-green-400"},"// Available tokens:"),t(`
`),e("span",{class:"text-green-400"},"// :method     - HTTP method (GET, POST, etc.)"),t(`
`),e("span",{class:"text-green-400"},"// :path       - Request path"),t(`
`),e("span",{class:"text-green-400"},"// :status     - Response status code"),t(`
`),e("span",{class:"text-green-400"},"// :latency    - Request duration"),t(`
`),e("span",{class:"text-green-400"},"// :ip         - Client IP address"),t(`
`),e("span",{class:"text-green-400"},"// :user_agent - User agent string")])],-1))])]),_:1})])]),e("section",ue,[s[66]||(s[66]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Output Examples",-1)),e("div",xe,[n(l,null,{header:r(()=>[e("div",me,[n(o,{name:"i-lucide-monitor",class:"h-5 w-5 text-green-500"}),s[61]||(s[61]=e("span",{class:"font-semibold"},"Console Output (Development)",-1))])]),default:r(()=>[s[62]||(s[62]=e("div",{class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},[e("div",{class:"flex items-center justify-between mb-2"},[e("span",{class:"text-xs text-gray-400"},"Development Console")]),e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{style:{color:"#36CBFB"}},"2024-01-15 14:30:25"),t("  "),e("span",{style:{color:"#3B82F6"}},"ℹ️  INFO "),t("  "),e("span",{style:{color:"#888"}},"main.go:118"),t("  🚀 Starting Base Framework  "),e("span",{style:{color:"#FCD34D"}},"version"),t("="),e("span",{style:{color:"#10B981"}},"1.0.0"),t(),e("span",{style:{color:"#FCD34D"}},"environment"),t("="),e("span",{style:{color:"#10B981"}},"development"),t(`
`),e("span",{style:{color:"#36CBFB"}},"2024-01-15 14:30:25"),t("  "),e("span",{style:{color:"#3B82F6"}},"ℹ️  INFO "),t("  "),e("span",{style:{color:"#888"}},"database.go:45"),t(`  ✅ Database initialized
`),e("span",{style:{color:"#36CBFB"}},"2024-01-15 14:30:26"),t("  "),e("span",{style:{color:"#3B82F6"}},"ℹ️  INFO "),t("  "),e("span",{style:{color:"#888"}},"middleware.go:102"),t("  Request  "),e("span",{style:{color:"#FCD34D"}},"method"),t("="),e("span",{style:{color:"#10B981"}},"GET"),t(),e("span",{style:{color:"#FCD34D"}},"path"),t("="),e("span",{style:{color:"#10B981"}},"/api/users"),t(),e("span",{style:{color:"#FCD34D"}},"status"),t("="),e("span",{style:{color:"#10B981"}},"200"),t(),e("span",{style:{color:"#FCD34D"}},"latency"),t("="),e("span",{style:{color:"#10B981"}},"24.5ms"),t(`
`),e("span",{style:{color:"#36CBFB"}},"2024-01-15 14:30:27"),t("  "),e("span",{style:{color:"#F59E0B"}},"⚠️  WARN "),t("  "),e("span",{style:{color:"#888"}},"user.go:67"),t("  Email delivery failed  "),e("span",{style:{color:"#FCD34D"}},"user_id"),t("="),e("span",{style:{color:"#10B981"}},"123"),t(),e("span",{style:{color:"#FCD34D"}},"error"),t("="),e("span",{style:{color:"#10B981"}},"smtp timeout"),t(`
`),e("span",{style:{color:"#36CBFB"}},"2024-01-15 14:30:28"),t("  "),e("span",{style:{color:"#EF4444"}},"❌ ERROR"),t("  "),e("span",{style:{color:"#888"}},"database.go:89"),t("  Connection lost  "),e("span",{style:{color:"#FCD34D"}},"error"),t("="),e("span",{style:{color:"#10B981"}},"connection refused"),t(),e("span",{style:{color:"#FCD34D"}},"retry_count"),t("="),e("span",{style:{color:"#10B981"}},"3")])])],-1))]),_:1,__:[62]}),n(l,null,{header:r(()=>[e("div",ye,[n(o,{name:"i-lucide-file-text",class:"h-5 w-5 text-blue-500"}),s[63]||(s[63]=e("span",{class:"font-semibold"},"JSON File Output (Production)",-1))])]),default:r(()=>[e("div",fe,[e("div",be,[s[64]||(s[64]=e("span",{class:"text-xs text-gray-400"},"logs/app.log",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:s[8]||(s[8]=a=>g(`{"level":"info","ts":"2024-01-15T14:30:25.123Z","caller":"main.go:118","msg":"Starting Base Framework","version":"1.0.0","environment":"production"}
{"level":"info","ts":"2024-01-15T14:30:26.456Z","caller":"middleware.go:102","msg":"Request","method":"POST","path":"/api/users","status":201,"latency":"45.2ms","ip":"192.168.1.100","user_agent":"PostmanRuntime/7.28.4"}
{"level":"error","ts":"2024-01-15T14:30:27.789Z","caller":"user.go:67","msg":"Failed to create user","user_id":123,"email":"user@example.com","error":"validation failed","request_id":"req_abc123"}`,a))}," Copy ")]),s[65]||(s[65]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[t("{"),e("span",{class:"text-blue-400"},'"level"'),t(":"),e("span",{class:"text-green-400"},'"info"'),t(","),e("span",{class:"text-blue-400"},'"ts"'),t(":"),e("span",{class:"text-green-400"},'"2024-01-15T14:30:25.123Z"'),t(","),e("span",{class:"text-blue-400"},'"caller"'),t(":"),e("span",{class:"text-green-400"},'"main.go:118"'),t(","),e("span",{class:"text-blue-400"},'"msg"'),t(":"),e("span",{class:"text-green-400"},'"Starting Base Framework"'),t(","),e("span",{class:"text-blue-400"},'"version"'),t(":"),e("span",{class:"text-green-400"},'"1.0.0"'),t(","),e("span",{class:"text-blue-400"},'"environment"'),t(":"),e("span",{class:"text-green-400"},'"production"'),t(`}
{`),e("span",{class:"text-blue-400"},'"level"'),t(":"),e("span",{class:"text-green-400"},'"info"'),t(","),e("span",{class:"text-blue-400"},'"ts"'),t(":"),e("span",{class:"text-green-400"},'"2024-01-15T14:30:26.456Z"'),t(","),e("span",{class:"text-blue-400"},'"caller"'),t(":"),e("span",{class:"text-green-400"},'"middleware.go:102"'),t(","),e("span",{class:"text-blue-400"},'"msg"'),t(":"),e("span",{class:"text-green-400"},'"Request"'),t(","),e("span",{class:"text-blue-400"},'"method"'),t(":"),e("span",{class:"text-green-400"},'"POST"'),t(","),e("span",{class:"text-blue-400"},'"path"'),t(":"),e("span",{class:"text-green-400"},'"/api/users"'),t(","),e("span",{class:"text-blue-400"},'"status"'),t(":"),e("span",{class:"text-purple-400"},"201"),t(","),e("span",{class:"text-blue-400"},'"latency"'),t(":"),e("span",{class:"text-green-400"},'"45.2ms"'),t(","),e("span",{class:"text-blue-400"},'"ip"'),t(":"),e("span",{class:"text-green-400"},'"192.168.1.100"'),t(","),e("span",{class:"text-blue-400"},'"user_agent"'),t(":"),e("span",{class:"text-green-400"},'"PostmanRuntime/7.28.4"'),t(`}
{`),e("span",{class:"text-blue-400"},'"level"'),t(":"),e("span",{class:"text-green-400"},'"error"'),t(","),e("span",{class:"text-blue-400"},'"ts"'),t(":"),e("span",{class:"text-green-400"},'"2024-01-15T14:30:27.789Z"'),t(","),e("span",{class:"text-blue-400"},'"caller"'),t(":"),e("span",{class:"text-green-400"},'"user.go:67"'),t(","),e("span",{class:"text-blue-400"},'"msg"'),t(":"),e("span",{class:"text-green-400"},'"Failed to create user"'),t(","),e("span",{class:"text-blue-400"},'"user_id"'),t(":"),e("span",{class:"text-purple-400"},"123"),t(","),e("span",{class:"text-blue-400"},'"email"'),t(":"),e("span",{class:"text-green-400"},'"user@example.com"'),t(","),e("span",{class:"text-blue-400"},'"error"'),t(":"),e("span",{class:"text-green-400"},'"validation failed"'),t(","),e("span",{class:"text-blue-400"},'"request_id"'),t(":"),e("span",{class:"text-green-400"},'"req_abc123"'),t("}")])],-1))])]),_:1})])]),e("section",null,[s[73]||(s[73]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Performance Tips & Best Practices",-1)),e("div",ve,[n(i,{color:"green",variant:"soft"},{title:r(()=>s[67]||(s[67]=[t("✅ Performance Best Practices",-1)])),description:r(()=>s[68]||(s[68]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Use typed fields (String, Int, etc.) instead of Any() when possible"),e("li",null,"Create child loggers with With() for request context instead of repeating fields"),e("li",null,"Set appropriate log levels - use DEBUG sparingly in production"),e("li",null,"Avoid logging large objects with Any() - serialize critical fields only"),e("li",null,"Use Duration() fields to track performance metrics"),e("li",null,"Configure log rotation to prevent disk space issues")],-1)])),_:1}),n(i,{color:"blue",variant:"soft"},{'title"':r(()=>s[69]||(s[69]=[t("💡 Logging Guidelines",-1)])),'description"':r(()=>s[70]||(s[70]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Log at entry/exit points of important functions with context"),e("li",null,"Always log errors with relevant context (user_id, request_id, etc.)"),e("li",null,"Use consistent field names across your application (user_id, not userId)"),e("li",null,"Include correlation IDs to trace requests across services"),e("li",null,"Log business events for analytics and monitoring"),e("li",null,"Don't log sensitive information like passwords or tokens")],-1)])),_:1}),n(i,{color:"orange",variant:"soft"},{'title"':r(()=>s[71]||(s[71]=[t("⚠️ Common Pitfalls",-1)])),'description"':r(()=>s[72]||(s[72]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Don't create new loggers in hot paths - reuse instances"),e("li",null,"Avoid string concatenation in log messages - use fields instead"),e("li",null,"Don't log at DEBUG level in production unless necessary"),e("li",null,"Be careful with Any() - it can impact performance with large objects"),e("li",null,"Don't ignore errors from logging operations in critical paths"),e("li",null,"Avoid excessive logging in loops - consider sampling or batching")],-1)])),_:1})])])])),[[u]])]),_:1})}}});export{qe as default};
