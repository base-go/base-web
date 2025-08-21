import{a as g,_ as x}from"./Card-dhBREXno.js";import{d as y,u as f,c as b,w as r,a as v,b as w,e,f as a,g as s,_ as S,r as E,o as m}from"./index-c5PrNzGP.js";import{_ as k}from"./DocsLayout.vue_vue_type_script_setup_true_lang-D4FaFzot.js";const h={class:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8"},T={class:"mb-12"},_={class:"grid gap-4 md:grid-cols-3 mb-6"},P={class:"flex items-center space-x-2"},R={class:"flex items-center space-x-2"},M={class:"flex items-center space-x-2"},I={class:"mb-12"},C={class:"space-y-6"},L={class:"flex items-center space-x-2"},D={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},U={class:"flex items-center justify-between mb-2"},A={class:"mb-12"},B={class:"space-y-6"},j={class:"flex items-center space-x-2"},H={class:"flex items-center space-x-2"},O={class:"flex items-center space-x-2"},N={class:"mb-12"},W={class:"space-y-6"},F={class:"flex items-center space-x-2"},G={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},K={class:"flex items-center justify-between mb-2"},q={class:"flex items-center space-x-2"},z={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},V={class:"flex items-center justify-between mb-2"},Y={class:"mb-12"},$={class:"space-y-6"},J={class:"flex items-center space-x-2"},Q={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},X={class:"flex items-center justify-between mb-2"},Z={class:"mb-12"},ee={class:"space-y-6"},se={class:"flex items-center space-x-2"},te={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},re={class:"flex items-center justify-between mb-2"},ae={class:"flex items-center space-x-2"},ne={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},le={class:"flex items-center justify-between mb-2"},ie={class:"mb-12"},oe={class:"space-y-6"},de={class:"flex items-center space-x-2"},pe={class:"relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto"},me={class:"flex items-center justify-between mb-2"},ue={class:"flex items-center space-x-2"},ce={class:"space-y-4"},be=y({__name:"email",setup(ge){const{copy:u}=f(),d=async(p,t)=>{await u(p);const o=t.target,n=o.textContent;o.textContent="Copied!",o.classList.add("!text-green-400"),setTimeout(()=>{o.textContent=n,o.classList.remove("!text-green-400")},2e3)};return(p,t)=>{const o=g,n=S,l=x,c=E("prism");return m(),b(k,null,{default:r(()=>[v((m(),w("div",h,[t[58]||(t[58]=e("div",{class:"mb-8"},[e("h1",{class:"text-4xl font-bold text-gray-900 dark:text-white mb-4"},"Email"),e("p",{class:"text-xl text-gray-600 dark:text-gray-300"}," Multi-provider email system with unified interface and comprehensive template support ")],-1)),e("section",T,[t[15]||(t[15]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Overview",-1)),a(o,{color:"blue",variant:"soft",class:"mb-6"},{title:r(()=>t[7]||(t[7]=[s("📧 Flexible Email System",-1)])),description:r(()=>t[8]||(t[8]=[s(" Base Framework's email system provides a unified interface for sending emails with support for multiple providers including SMTP, SendGrid, and Postmark. It includes dependency injection, structured logging, and error handling. ",-1)])),_:1}),e("div",_,[a(l,null,{header:r(()=>[e("div",P,[a(n,{name:"i-lucide-mail",class:"h-5 w-5 text-blue-500"}),t[9]||(t[9]=e("span",{class:"font-semibold"},"SMTP",-1))])]),default:r(()=>[t[10]||(t[10]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Standard email protocol with support for any SMTP server including Gmail, Outlook, and custom servers. ",-1))]),_:1,__:[10]}),a(l,null,{header:r(()=>[e("div",R,[a(n,{name:"i-lucide-send",class:"h-5 w-5 text-green-500"}),t[11]||(t[11]=e("span",{class:"font-semibold"},"SendGrid",-1))])]),default:r(()=>[t[12]||(t[12]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Cloud email service by Twilio with high deliverability, analytics, and template support. ",-1))]),_:1,__:[12]}),a(l,null,{header:r(()=>[e("div",M,[a(n,{name:"i-lucide-zap",class:"h-5 w-5 text-orange-500"}),t[13]||(t[13]=e("span",{class:"font-semibold"},"Postmark",-1))])]),default:r(()=>[t[14]||(t[14]=e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Specialized transactional email service with fast delivery and detailed bounce handling. ",-1))]),_:1,__:[14]})])]),e("section",I,[t[19]||(t[19]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Configuration",-1)),e("div",C,[a(l,null,{header:r(()=>[e("div",L,[a(n,{name:"i-lucide-settings",class:"h-5 w-5 text-purple-500"}),t[16]||(t[16]=e("span",{class:"font-semibold"},"Environment Variables",-1))])]),default:r(()=>[e("div",D,[e("div",U,[t[17]||(t[17]=e("span",{class:"text-xs text-gray-400"},".env Configuration",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[0]||(t[0]=i=>d(`# Email Provider (smtp, sendgrid, postmark, default)
EMAIL_PROVIDER=smtp
EMAIL_FROM_ADDRESS=noreply@example.com

# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USERNAME=your-username@gmail.com
SMTP_PASSWORD=your-app-password

# SendGrid Configuration
SENDGRID_API_KEY=your-sendgrid-api-key

# Postmark Configuration
POSTMARK_SERVER_TOKEN=your-postmark-server-token
POSTMARK_ACCOUNT_TOKEN=your-postmark-account-token`,i))}," Copy ")]),t[18]||(t[18]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-green-400"},"# Email Provider (smtp, sendgrid, postmark, default)"),s(`
`),e("span",{class:"text-blue-400"},"EMAIL_PROVIDER"),s("="),e("span",{class:"text-yellow-400"},"smtp"),s(`
`),e("span",{class:"text-blue-400"},"EMAIL_FROM_ADDRESS"),s("="),e("span",{class:"text-yellow-400"},"noreply@example.com"),s(`

`),e("span",{class:"text-green-400"},"# SMTP Configuration"),s(`
`),e("span",{class:"text-blue-400"},"SMTP_HOST"),s("="),e("span",{class:"text-yellow-400"},"smtp.gmail.com"),s(`
`),e("span",{class:"text-blue-400"},"SMTP_PORT"),s("="),e("span",{class:"text-yellow-400"},"587"),s(`
`),e("span",{class:"text-blue-400"},"SMTP_USERNAME"),s("="),e("span",{class:"text-yellow-400"},"your-username@gmail.com"),s(`
`),e("span",{class:"text-blue-400"},"SMTP_PASSWORD"),s("="),e("span",{class:"text-yellow-400"},"your-app-password"),s(`

`),e("span",{class:"text-green-400"},"# SendGrid Configuration"),s(`
`),e("span",{class:"text-blue-400"},"SENDGRID_API_KEY"),s("="),e("span",{class:"text-yellow-400"},"your-sendgrid-api-key"),s(`

`),e("span",{class:"text-green-400"},"# Postmark Configuration"),s(`
`),e("span",{class:"text-blue-400"},"POSTMARK_SERVER_TOKEN"),s("="),e("span",{class:"text-yellow-400"},"your-postmark-server-token"),s(`
`),e("span",{class:"text-blue-400"},"POSTMARK_ACCOUNT_TOKEN"),s("="),e("span",{class:"text-yellow-400"},"your-postmark-account-token")])],-1))])]),_:1})])]),e("section",A,[t[26]||(t[26]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Provider Setup",-1)),e("div",B,[a(l,null,{header:r(()=>[e("div",j,[a(n,{name:"i-lucide-mail",class:"h-5 w-5 text-blue-500"}),t[20]||(t[20]=e("span",{class:"font-semibold"},"SMTP Setup",-1))])]),default:r(()=>[t[21]||(t[21]=e("div",{class:"space-y-4"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," SMTP is the most common email protocol. Here are configurations for popular providers: "),e("div",{class:"space-y-3"},[e("div",{class:"bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"},[e("div",{class:"font-medium text-sm mb-1"},"Gmail"),e("div",{class:"text-xs text-gray-600 dark:text-gray-400 space-y-1"},[e("div",null,"Host: smtp.gmail.com | Port: 587"),e("div",null,"Requires app password (not your regular password)")])]),e("div",{class:"bg-gray-50 dark:bg-gray-800 p-3 rounded-lg"},[e("div",{class:"font-medium text-sm mb-1"},"Outlook/Hotmail"),e("div",{class:"text-xs text-gray-600 dark:text-gray-400 space-y-1"},[e("div",null,"Host: smtp-mail.outlook.com | Port: 587"),e("div",null,"Uses your regular Microsoft account credentials")])])])],-1))]),_:1,__:[21]}),a(l,null,{header:r(()=>[e("div",H,[a(n,{name:"i-lucide-send",class:"h-5 w-5 text-green-500"}),t[22]||(t[22]=e("span",{class:"font-semibold"},"SendGrid Setup",-1))])]),default:r(()=>[t[23]||(t[23]=e("div",{class:"space-y-4"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," SendGrid requires only an API key from your SendGrid account: "),e("ol",{class:"list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1"},[e("li",null,"Create a SendGrid account at sendgrid.com"),e("li",null,"Go to Settings → API Keys"),e("li",null,"Create a new API key with Mail Send permissions"),e("li",null,"Copy the API key to your SENDGRID_API_KEY environment variable")])],-1))]),_:1,__:[23]}),a(l,null,{header:r(()=>[e("div",O,[a(n,{name:"i-lucide-zap",class:"h-5 w-5 text-orange-500"}),t[24]||(t[24]=e("span",{class:"font-semibold"},"Postmark Setup",-1))])]),default:r(()=>[t[25]||(t[25]=e("div",{class:"space-y-4"},[e("p",{class:"text-sm text-gray-600 dark:text-gray-300"}," Postmark requires both server and account tokens: "),e("ol",{class:"list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1"},[e("li",null,"Create a Postmark account at postmarkapp.com"),e("li",null,"Create a new server for your application"),e("li",null,"Copy the Server Token to POSTMARK_SERVER_TOKEN"),e("li",null,"Get your Account Token from Account → API Tokens"),e("li",null,"Copy the Account Token to POSTMARK_ACCOUNT_TOKEN")])],-1))]),_:1,__:[25]})])]),e("section",N,[t[33]||(t[33]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Basic Usage",-1)),e("div",W,[a(l,null,{header:r(()=>[e("div",F,[a(n,{name:"i-lucide-code",class:"h-5 w-5 text-blue-500"}),t[27]||(t[27]=e("span",{class:"font-semibold"},"Initialize Email System",-1))])]),default:r(()=>[e("div",G,[e("div",K,[t[28]||(t[28]=e("span",{class:"text-xs text-gray-400"},"main.go",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[1]||(t[1]=i=>{d(`package main

import (
    "base/core/config"
    "base/core/email"
    "log"
)

func main() {
    // Load configuration
    cfg := config.Load()
    
    // Initialize email system
    if err := email.Initialize(cfg); err != nil {
        log.Fatal("Failed to initialize email system:", err)
    }
    
    // Email system is now ready to use
}`,i)})}," Copy ")]),t[29]||(t[29]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"package"),s(` main

`),e("span",{class:"text-blue-400"},"import"),s(` (
    `),e("span",{class:"text-green-400"},'"base/core/config"'),s(`
    `),e("span",{class:"text-green-400"},'"base/core/email"'),s(`
    `),e("span",{class:"text-green-400"},'"log"'),s(`
)

`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"main"),s(`() {
    `),e("span",{class:"text-green-400"},"// Load configuration"),s(`
    cfg := config.Load()
    
    `),e("span",{class:"text-green-400"},"// Initialize email system"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" err := email.Initialize(cfg); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        log.Fatal(`),e("span",{class:"text-green-400"},'"Failed to initialize email system:"'),s(`, err)
    }
    
    `),e("span",{class:"text-green-400"},"// Email system is now ready to use"),s(`
}`)])],-1))])]),_:1}),a(l,null,{header:r(()=>[e("div",q,[a(n,{name:"i-lucide-send",class:"h-5 w-5 text-green-500"}),t[30]||(t[30]=e("span",{class:"font-semibold"},"Send Simple Text Email",-1))])]),default:r(()=>[e("div",z,[e("div",V,[t[31]||(t[31]=e("span",{class:"text-xs text-gray-400"},"Simple Email Example",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[2]||(t[2]=i=>d(`package main

import "base/core/email"

func sendWelcomeEmail(userEmail string) error {
    msg := email.Message{
        To:      []string{userEmail},
        Subject: "Welcome to Base Framework",
        Body:    "Thank you for joining us! We're excited to have you on board.",
        IsHTML:  false,
    }
    
    return email.Send(msg)
}`,i))}," Copy ")]),t[32]||(t[32]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"package"),s(` main

`),e("span",{class:"text-blue-400"},"import"),s(),e("span",{class:"text-green-400"},'"base/core/email"'),s(`

`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"sendWelcomeEmail"),s("(userEmail "),e("span",{class:"text-purple-400"},"string"),s(") "),e("span",{class:"text-purple-400"},"error"),s(` {
    msg := email.Message{
        To:      []`),e("span",{class:"text-purple-400"},"string"),s(`{userEmail},
        Subject: `),e("span",{class:"text-green-400"},'"Welcome to Base Framework"'),s(`,
        Body:    `),e("span",{class:"text-green-400"},`"Thank you for joining us! We're excited to have you on board."`),s(`,
        IsHTML:  `),e("span",{class:"text-purple-400"},"false"),s(`,
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(` email.Send(msg)
}`)])],-1))])]),_:1})])]),e("section",Y,[t[37]||(t[37]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"HTML Email Templates",-1)),e("div",$,[a(l,null,{header:r(()=>[e("div",J,[a(n,{name:"i-lucide-layout",class:"h-5 w-5 text-purple-500"}),t[34]||(t[34]=e("span",{class:"font-semibold"},"HTML Email with Styling",-1))])]),default:r(()=>[e("div",Q,[e("div",X,[t[35]||(t[35]=e("span",{class:"text-xs text-gray-400"},"HTML Email Template",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[3]||(t[3]=i=>{d(`func sendWelcomeEmailHTML(userName, userEmail string) error {
    htmlBody := fmt.Sprintf(\`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Welcome to Base Framework</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .button { display: inline-block; background: #3b82f6; color: white; 
                     padding: 12px 24px; text-decoration: none; border-radius: 4px; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; 
                     font-size: 14px; color: #6b7280; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Welcome to Base Framework!</h1>
            </div>
            <div class="content">
                <h2>Hello %s,</h2>
                <p>Thank you for joining Base Framework. We're excited to have you on board!</p>
                
                <p>Here's what you can do next:</p>
                <ul>
                    <li>Complete your profile setup</li>
                    <li>Explore our documentation</li>
                    <li>Join our community</li>
                </ul>
                
                <p>
                    <a href="https://example.com/get-started" class="button">
                        Get Started
                    </a>
                </p>
            </div>
            <div class="footer">
                <p>This email was sent to %s</p>
                <p>© 2024 Base Framework. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    \`, userName, userEmail)

    msg := email.Message{
        To:      []string{userEmail},
        Subject: "Welcome to Base Framework",
        Body:    htmlBody,
        IsHTML:  true,
    }
    
    return email.Send(msg)
}`,i)})}," Copy ")]),t[36]||(t[36]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"sendWelcomeEmailHTML"),s("(userName, userEmail "),e("span",{class:"text-purple-400"},"string"),s(") "),e("span",{class:"text-purple-400"},"error"),s(` {
    htmlBody := fmt.Sprintf(\`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=`),e("span",{class:"text-green-400"},'"utf-8"'),s(`>
        <meta name=`),e("span",{class:"text-green-400"},'"viewport"'),s(" content="),e("span",{class:"text-green-400"},'"width=device-width, initial-scale=1"'),s(`>
        <title>Welcome to Base Framework</title>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .button { display: inline-block; background: #3b82f6; color: white; 
                     padding: 12px 24px; text-decoration: none; border-radius: 4px; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; 
                     font-size: 14px; color: #6b7280; }
        </style>
    </head>
    <body>
        <div class=`),e("span",{class:"text-green-400"},'"container"'),s(`>
            <div class=`),e("span",{class:"text-green-400"},'"header"'),s(`>
                <h1>Welcome to Base Framework!</h1>
            </div>
            <div class=`),e("span",{class:"text-green-400"},'"content"'),s(`>
                <h2>Hello %s,</h2>
                <p>Thank you for joining Base Framework. We're excited to have you on board!</p>
                
                <p>Here's what you can do next:</p>
                <ul>
                    <li>Complete your profile setup</li>
                    <li>Explore our documentation</li>
                    <li>Join our community</li>
                </ul>
                
                <p>
                    <a href=`),e("span",{class:"text-green-400"},'"https://example.com/get-started"'),s(" class="),e("span",{class:"text-green-400"},'"button"'),s(`>
                        Get Started
                    </a>
                </p>
            </div>
            <div class=`),e("span",{class:"text-green-400"},'"footer"'),s(`>
                <p>This email was sent to %s</p>
                <p>© 2024 Base Framework. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    \`, userName, userEmail)

    msg := email.Message{
        To:      []`),e("span",{class:"text-purple-400"},"string"),s(`{userEmail},
        Subject: `),e("span",{class:"text-green-400"},'"Welcome to Base Framework"'),s(`,
        Body:    htmlBody,
        IsHTML:  `),e("span",{class:"text-purple-400"},"true"),s(`,
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(` email.Send(msg)
}`)])],-1))])]),_:1})])]),e("section",Z,[t[44]||(t[44]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Service Integration",-1)),e("div",ee,[a(l,null,{header:r(()=>[e("div",se,[a(n,{name:"i-lucide-layers",class:"h-5 w-5 text-blue-500"}),t[38]||(t[38]=e("span",{class:"font-semibold"},"Email Service with Dependency Injection",-1))])]),default:r(()=>[e("div",te,[e("div",re,[t[39]||(t[39]=e("span",{class:"text-xs text-gray-400"},"services/user_service.go",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[4]||(t[4]=i=>{d(`package user

import (
    "fmt"
    "base/core/email"
    "base/core/logger"
    "base/app/models"
    "gorm.io/gorm"
)

type UserService struct {
    DB          *gorm.DB
    EmailSender email.Sender
    Logger      logger.Logger
}

func NewUserService(db *gorm.DB, emailSender email.Sender, logger logger.Logger) *UserService {
    return &UserService{
        DB:          db,
        EmailSender: emailSender,
        Logger:      logger,
    }
}

func (s *UserService) CreateUser(userData CreateUserRequest) (*models.User, error) {
    user := &models.User{
        Name:  userData.Name,
        Email: userData.Email,
    }
    
    // Save user to database
    if err := s.DB.Create(user).Error; err != nil {
        return nil, err
    }
    
    // Send welcome email
    if err := s.sendWelcomeEmail(user); err != nil {
        s.Logger.Error("Failed to send welcome email",
            logger.String("user_id", fmt.Sprintf("%d", user.ID)),
            logger.String("error", err.Error()))
        // Don't fail user creation if email fails
    }
    
    return user, nil
}

func (s *UserService) sendWelcomeEmail(user *models.User) error {
    msg := email.Message{
        To:      []string{user.Email},
        Subject: "Welcome to Our Platform",
        Body:    fmt.Sprintf("Hello %s, welcome to our platform!", user.Name),
        IsHTML:  false,
    }
    
    err := s.EmailSender.Send(msg)
    if err != nil {
        return fmt.Errorf("failed to send welcome email: %w", err)
    }
    
    s.Logger.Info("Welcome email sent successfully",
        logger.String("user_email", user.Email))
    
    return nil
}`,i)})}," Copy ")]),t[40]||(t[40]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"package"),s(` user

`),e("span",{class:"text-blue-400"},"import"),s(` (
    `),e("span",{class:"text-green-400"},'"fmt"'),s(`
    `),e("span",{class:"text-green-400"},'"base/core/email"'),s(`
    `),e("span",{class:"text-green-400"},'"base/core/logger"'),s(`
    `),e("span",{class:"text-green-400"},'"base/app/models"'),s(`
    `),e("span",{class:"text-green-400"},'"gorm.io/gorm"'),s(`
)

`),e("span",{class:"text-blue-400"},"type"),s(),e("span",{class:"text-yellow-400"},"UserService"),s(),e("span",{class:"text-blue-400"},"struct"),s(` {
    DB          *gorm.DB
    EmailSender email.Sender
    Logger      logger.Logger
}

`),e("span",{class:"text-blue-400"},"func"),s(),e("span",{class:"text-yellow-400"},"NewUserService"),s(`(db *gorm.DB, emailSender email.Sender, logger logger.Logger) *UserService {
    `),e("span",{class:"text-blue-400"},"return"),s(` &UserService{
        DB:          db,
        EmailSender: emailSender,
        Logger:      logger,
    }
}

`),e("span",{class:"text-blue-400"},"func"),s(" (s *UserService) "),e("span",{class:"text-yellow-400"},"CreateUser"),s("(userData CreateUserRequest) (*models.User, "),e("span",{class:"text-purple-400"},"error"),s(`) {
    user := &models.User{
        Name:  userData.Name,
        Email: userData.Email,
    }
    
    `),e("span",{class:"text-green-400"},"// Save user to database"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" err := s.DB.Create(user).Error; err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-purple-400"},"nil"),s(`, err
    }
    
    `),e("span",{class:"text-green-400"},"// Send welcome email"),s(`
    `),e("span",{class:"text-blue-400"},"if"),s(" err := s.sendWelcomeEmail(user); err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to send welcome email"'),s(`,
            logger.String(`),e("span",{class:"text-green-400"},'"user_id"'),s(", fmt.Sprintf("),e("span",{class:"text-green-400"},'"%d"'),s(`, user.ID)),
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),s(`, err.Error()))
        `),e("span",{class:"text-green-400"},"// Don't fail user creation if email fails"),s(`
    }
    
    `),e("span",{class:"text-blue-400"},"return"),s(" user, "),e("span",{class:"text-purple-400"},"nil"),s(`
}`)])],-1))])]),_:1}),a(l,null,{header:r(()=>[e("div",ae,[a(n,{name:"i-lucide-key",class:"h-5 w-5 text-red-500"}),t[41]||(t[41]=e("span",{class:"font-semibold"},"Password Reset Email",-1))])]),default:r(()=>[e("div",ne,[e("div",le,[t[42]||(t[42]=e("span",{class:"text-xs text-gray-400"},"Password Reset Implementation",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[5]||(t[5]=i=>{d(`func (s *UserService) SendPasswordResetEmail(user *models.User, token string) error {
    resetURL := fmt.Sprintf("%s/reset-password?token=%s", config.AppURL, token)
    
    htmlBody := fmt.Sprintf(\`
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #ef4444; color: white; padding: 20px; text-align: center;">
            <h1>Password Reset Request</h1>
        </div>
        <div style="padding: 20px;">
            <h2>Hello %s,</h2>
            <p>We received a request to reset your password. If you made this request, 
               click the button below to proceed:</p>
            
            <div style="text-align: center; margin: 30px 0;">
                <a href="%s" 
                   style="display: inline-block; background: #ef4444; color: white; 
                          padding: 12px 24px; text-decoration: none; border-radius: 4px;">
                    Reset My Password
                </a>
            </div>
            
            <p style="color: #6b7280;">
                <strong>Important:</strong> This link will expire in 1 hour for security reasons.
            </p>
            
            <p style="color: #6b7280;">
                If you didn't request this password reset, please ignore this email. 
                Your password will remain unchanged.
            </p>
        </div>
        <div style="background: #f3f4f6; padding: 20px; text-align: center; 
                    font-size: 14px; color: #6b7280;">
            <p>This email was sent to %s</p>
        </div>
    </div>
    \`, user.Name, resetURL, user.Email)

    msg := email.Message{
        To:      []string{user.Email},
        Subject: "Password Reset Request",
        Body:    htmlBody,
        IsHTML:  true,
    }

    err := s.EmailSender.Send(msg)
    if err != nil {
        s.Logger.Error("Failed to send password reset email",
            logger.String("user_email", user.Email),
            logger.String("error", err.Error()))
        return fmt.Errorf("failed to send password reset email: %w", err)
    }

    s.Logger.Info("Password reset email sent",
        logger.String("user_email", user.Email))
    
    return nil
}`,i)})}," Copy ")]),t[43]||(t[43]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(" (s *UserService) "),e("span",{class:"text-yellow-400"},"SendPasswordResetEmail"),s("(user *models.User, token "),e("span",{class:"text-purple-400"},"string"),s(") "),e("span",{class:"text-purple-400"},"error"),s(` {
    resetURL := fmt.Sprintf(`),e("span",{class:"text-green-400"},'"%s/reset-password?token=%s"'),s(`, config.AppURL, token)
    
    htmlBody := fmt.Sprintf(\`
    <div style=`),e("span",{class:"text-green-400"},'"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"'),s(`>
        <div style=`),e("span",{class:"text-green-400"},'"background: #ef4444; color: white; padding: 20px; text-align: center;"'),s(`>
            <h1>Password Reset Request</h1>
        </div>
        <div style=`),e("span",{class:"text-green-400"},'"padding: 20px;"'),s(`>
            <h2>Hello %s,</h2>
            <p>We received a request to reset your password. If you made this request, 
               click the button below to proceed:</p>
            
            <div style=`),e("span",{class:"text-green-400"},'"text-align: center; margin: 30px 0;"'),s(`>
                <a href=`),e("span",{class:"text-green-400"},'"%s"'),s(` 
                   style=`),e("span",{class:"text-green-400"},`"display: inline-block; background: #ef4444; color: white; 
                          padding: 12px 24px; text-decoration: none; border-radius: 4px;"`),s(`>
                    Reset My Password
                </a>
            </div>
            
            <p style=`),e("span",{class:"text-green-400"},'"color: #6b7280;"'),s(`>
                <strong>Important:</strong> This link will expire in 1 hour for security reasons.
            </p>
            
            <p style=`),e("span",{class:"text-green-400"},'"color: #6b7280;"'),s(`>
                If you didn't request this password reset, please ignore this email. 
                Your password will remain unchanged.
            </p>
        </div>
    </div>
    \`, user.Name, resetURL, user.Email)

    msg := email.Message{
        To:      []`),e("span",{class:"text-purple-400"},"string"),s(`{user.Email},
        Subject: `),e("span",{class:"text-green-400"},'"Password Reset Request"'),s(`,
        Body:    htmlBody,
        IsHTML:  `),e("span",{class:"text-purple-400"},"true"),s(`,
    }

    err := s.EmailSender.Send(msg)
    `),e("span",{class:"text-blue-400"},"if"),s(" err != "),e("span",{class:"text-purple-400"},"nil"),s(` {
        s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to send password reset email"'),s(`,
            logger.String(`),e("span",{class:"text-green-400"},'"user_email"'),s(`, user.Email),
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),s(`, err.Error()))
        `),e("span",{class:"text-blue-400"},"return"),s(" fmt.Errorf("),e("span",{class:"text-green-400"},'"failed to send password reset email: %w"'),s(`, err)
    }

    s.Logger.Info(`),e("span",{class:"text-green-400"},'"Password reset email sent"'),s(`,
        logger.String(`),e("span",{class:"text-green-400"},'"user_email"'),s(`, user.Email))
    
    `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-purple-400"},"nil"),s(`
}`)])],-1))])]),_:1})])]),e("section",ie,[t[50]||(t[50]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Error Handling & Debugging",-1)),e("div",oe,[a(l,null,{header:r(()=>[e("div",de,[a(n,{name:"i-lucide-alert-triangle",class:"h-5 w-5 text-yellow-500"}),t[45]||(t[45]=e("span",{class:"font-semibold"},"Robust Error Handling",-1))])]),default:r(()=>[e("div",pe,[e("div",me,[t[46]||(t[46]=e("span",{class:"text-xs text-gray-400"},"Error Handling Best Practices",-1)),e("button",{class:"copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors",onClick:t[6]||(t[6]=i=>{d(`func (s *UserService) SendEmailWithRetry(user *models.User, subject, body string, isHTML bool) error {
    msg := email.Message{
        To:      []string{user.Email},
        Subject: subject,
        Body:    body,
        IsHTML:  isHTML,
    }
    
    const maxRetries = 3
    const retryDelay = time.Second * 2
    
    for attempt := 1; attempt <= maxRetries; attempt++ {
        err := s.EmailSender.Send(msg)
        if err == nil {
            s.Logger.Info("Email sent successfully",
                logger.String("user_email", user.Email),
                logger.String("subject", subject),
                logger.Int("attempt", attempt))
            return nil
        }
        
        s.Logger.Warn("Email send attempt failed",
            logger.String("user_email", user.Email),
            logger.String("error", err.Error()),
            logger.Int("attempt", attempt),
            logger.Int("max_retries", maxRetries))
        
        // Don't retry on the last attempt
        if attempt < maxRetries {
            time.Sleep(retryDelay)
        }
    }
    
    // All retries failed
    s.Logger.Error("Failed to send email after all retries",
        logger.String("user_email", user.Email),
        logger.String("subject", subject),
        logger.Int("max_retries", maxRetries))
    
    return fmt.Errorf("failed to send email after %d attempts", maxRetries)
}

// Validate email before sending
func (s *UserService) ValidateAndSendEmail(user *models.User, subject, body string) error {
    // Validate user email
    if user.Email == "" {
        return fmt.Errorf("user email is empty")
    }
    
    // Basic email format validation
    if !strings.Contains(user.Email, "@") {
        return fmt.Errorf("invalid email format: %s", user.Email)
    }
    
    // Validate content
    if subject == "" {
        return fmt.Errorf("email subject cannot be empty")
    }
    
    if body == "" {
        return fmt.Errorf("email body cannot be empty")
    }
    
    return s.SendEmailWithRetry(user, subject, body, false)
}`,i)})}," Copy ")]),t[47]||(t[47]=e("pre",{class:"text-sm text-gray-300 whitespace-pre-wrap"},[e("code",null,[e("span",{class:"text-blue-400"},"func"),s(" (s *UserService) "),e("span",{class:"text-yellow-400"},"SendEmailWithRetry"),s("(user *models.User, subject, body "),e("span",{class:"text-purple-400"},"string"),s(", isHTML "),e("span",{class:"text-purple-400"},"bool"),s(") "),e("span",{class:"text-purple-400"},"error"),s(` {
    msg := email.Message{
        To:      []`),e("span",{class:"text-purple-400"},"string"),s(`{user.Email},
        Subject: subject,
        Body:    body,
        IsHTML:  isHTML,
    }
    
    `),e("span",{class:"text-blue-400"},"const"),s(" maxRetries = "),e("span",{class:"text-purple-400"},"3"),s(`
    `),e("span",{class:"text-blue-400"},"const"),s(" retryDelay = time.Second * "),e("span",{class:"text-purple-400"},"2"),s(`
    
    `),e("span",{class:"text-blue-400"},"for"),s(" attempt := "),e("span",{class:"text-purple-400"},"1"),s(`; attempt <= maxRetries; attempt++ {
        err := s.EmailSender.Send(msg)
        `),e("span",{class:"text-blue-400"},"if"),s(" err == "),e("span",{class:"text-purple-400"},"nil"),s(` {
            s.Logger.Info(`),e("span",{class:"text-green-400"},'"Email sent successfully"'),s(`,
                logger.String(`),e("span",{class:"text-green-400"},'"user_email"'),s(`, user.Email),
                logger.String(`),e("span",{class:"text-green-400"},'"subject"'),s(`, subject),
                logger.Int(`),e("span",{class:"text-green-400"},'"attempt"'),s(`, attempt))
            `),e("span",{class:"text-blue-400"},"return"),s(),e("span",{class:"text-purple-400"},"nil"),s(`
        }
        
        s.Logger.Warn(`),e("span",{class:"text-green-400"},'"Email send attempt failed"'),s(`,
            logger.String(`),e("span",{class:"text-green-400"},'"user_email"'),s(`, user.Email),
            logger.String(`),e("span",{class:"text-green-400"},'"error"'),s(`, err.Error()),
            logger.Int(`),e("span",{class:"text-green-400"},'"attempt"'),s(`, attempt),
            logger.Int(`),e("span",{class:"text-green-400"},'"max_retries"'),s(`, maxRetries))
        
        `),e("span",{class:"text-green-400"},"// Don't retry on the last attempt"),s(`
        `),e("span",{class:"text-blue-400"},"if"),s(` attempt < maxRetries {
            time.Sleep(retryDelay)
        }
    }
    
    `),e("span",{class:"text-green-400"},"// All retries failed"),s(`
    s.Logger.Error(`),e("span",{class:"text-green-400"},'"Failed to send email after all retries"'),s(`,
        logger.String(`),e("span",{class:"text-green-400"},'"user_email"'),s(`, user.Email),
        logger.String(`),e("span",{class:"text-green-400"},'"subject"'),s(`, subject),
        logger.Int(`),e("span",{class:"text-green-400"},'"max_retries"'),s(`, maxRetries))
    
    `),e("span",{class:"text-blue-400"},"return"),s(" fmt.Errorf("),e("span",{class:"text-green-400"},'"failed to send email after %d attempts"'),s(`, maxRetries)
}`)])],-1))])]),_:1}),a(l,null,{header:r(()=>[e("div",ue,[a(n,{name:"i-lucide-bug",class:"h-5 w-5 text-red-500"}),t[48]||(t[48]=e("span",{class:"font-semibold"},"Common Issues & Solutions",-1))])]),default:r(()=>[t[49]||(t[49]=e("div",{class:"space-y-4"},[e("div",{class:"space-y-3"},[e("div",{class:"bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"},[e("div",{class:"font-medium text-sm mb-1 text-red-800 dark:text-red-200"},"SMTP Authentication Failed"),e("div",{class:"text-xs text-red-600 dark:text-red-300 space-y-1"},[e("div",null,"• Use app passwords for Gmail (not your regular password)"),e("div",null,"• Enable 2FA and generate an app-specific password"),e("div",null,"• Check SMTP host and port settings")])]),e("div",{class:"bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg"},[e("div",{class:"font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200"},"SendGrid API Errors"),e("div",{class:"text-xs text-yellow-600 dark:text-yellow-300 space-y-1"},[e("div",null,"• Verify API key has Mail Send permissions"),e("div",null,"• Check sender email is verified in SendGrid"),e("div",null,"• Ensure you're not exceeding rate limits")])]),e("div",{class:"bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg"},[e("div",{class:"font-medium text-sm mb-1 text-blue-800 dark:text-blue-200"},"Email Not Initialized"),e("div",{class:"text-xs text-blue-600 dark:text-blue-300 space-y-1"},[e("div",null,"• Call email.Initialize(cfg) in your main function"),e("div",null,"• Ensure configuration is loaded before initialization"),e("div",null,"• Check EMAIL_PROVIDER environment variable is set")])])])],-1))]),_:1,__:[49]})])]),e("section",null,[t[57]||(t[57]=e("h2",{class:"text-3xl font-bold text-gray-900 dark:text-white mb-6"},"Best Practices",-1)),e("div",ce,[a(o,{color:"green",variant:"soft"},{'title"':r(()=>t[51]||(t[51]=[s("✅ Do's",-1)])),description:r(()=>t[52]||(t[52]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Always validate email addresses before sending"),e("li",null,"Use HTML templates for better user experience"),e("li",null,"Implement retry logic for failed email sends"),e("li",null,"Log email operations for debugging and monitoring"),e("li",null,"Use dependency injection for testable code"),e("li",null,"Include unsubscribe links in marketing emails"),e("li",null,"Test email templates across different email clients")],-1)])),_:1}),a(o,{color:"red",variant:"soft"},{'title"':r(()=>t[53]||(t[53]=[s("❌ Don'ts",-1)])),description:r(()=>t[54]||(t[54]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Don't fail critical operations if email fails"),e("li",null,"Don't send emails without proper error handling"),e("li",null,"Don't hardcode email templates in your code"),e("li",null,"Don't forget to handle multiple recipients properly"),e("li",null,"Don't send emails without rate limiting for bulk operations"),e("li",null,"Don't expose email provider credentials in logs"),e("li",null,"Don't send emails from localhost in production")],-1)])),_:1}),a(o,{color:"blue",variant:"soft"},{'title"':r(()=>t[55]||(t[55]=[s("💡 Pro Tips",-1)])),description:r(()=>t[56]||(t[56]=[e("ul",{class:"list-disc list-inside space-y-1 mt-2"},[e("li",null,"Use the default provider for development and testing"),e("li",null,"Switch to professional providers for production"),e("li",null,"Monitor email delivery rates and bounce rates"),e("li",null,"Consider using email queues for high-volume sending"),e("li",null,"Keep email templates in separate files for maintainability"),e("li",null,"Use email events to trigger additional business logic")],-1)])),_:1})])])])),[[c]])]),_:1})}}});export{be as default};
