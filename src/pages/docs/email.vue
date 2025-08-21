<template>
  <DocsLayout>
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8" v-prism>
      <div class="mb-8">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Email</h1>
        <p class="text-xl text-gray-600 dark:text-gray-300">
          Multi-provider email system with unified interface and comprehensive template support
        </p>
      </div>

      <!-- Overview -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Overview</h2>
        
        <UAlert color="blue" variant="soft" class="mb-6">
          <template #title>📧 Flexible Email System</template>
          <template #description>
            Base Framework's email system provides a unified interface for sending emails with support for multiple providers including SMTP, SendGrid, and Postmark. It includes dependency injection, structured logging, and error handling.
          </template>
        </UAlert>

        <div class="grid gap-4 md:grid-cols-3 mb-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-mail" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">SMTP</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Standard email protocol with support for any SMTP server including Gmail, Outlook, and custom servers.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-send" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">SendGrid</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Cloud email service by Twilio with high deliverability, analytics, and template support.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">Postmark</span>
              </div>
            </template>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Specialized transactional email service with fast delivery and detailed bounce handling.
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
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`# Email Provider (smtp, sendgrid, postmark, default)
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
POSTMARK_ACCOUNT_TOKEN=your-postmark-account-token`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-green-400"># Email Provider (smtp, sendgrid, postmark, default)</span>
<span class="text-blue-400">EMAIL_PROVIDER</span>=<span class="text-yellow-400">smtp</span>
<span class="text-blue-400">EMAIL_FROM_ADDRESS</span>=<span class="text-yellow-400">noreply@example.com</span>

<span class="text-green-400"># SMTP Configuration</span>
<span class="text-blue-400">SMTP_HOST</span>=<span class="text-yellow-400">smtp.gmail.com</span>
<span class="text-blue-400">SMTP_PORT</span>=<span class="text-yellow-400">587</span>
<span class="text-blue-400">SMTP_USERNAME</span>=<span class="text-yellow-400">your-username@gmail.com</span>
<span class="text-blue-400">SMTP_PASSWORD</span>=<span class="text-yellow-400">your-app-password</span>

<span class="text-green-400"># SendGrid Configuration</span>
<span class="text-blue-400">SENDGRID_API_KEY</span>=<span class="text-yellow-400">your-sendgrid-api-key</span>

<span class="text-green-400"># Postmark Configuration</span>
<span class="text-blue-400">POSTMARK_SERVER_TOKEN</span>=<span class="text-yellow-400">your-postmark-server-token</span>
<span class="text-blue-400">POSTMARK_ACCOUNT_TOKEN</span>=<span class="text-yellow-400">your-postmark-account-token</span></code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Provider Setup -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Provider Setup</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-mail" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">SMTP Setup</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                SMTP is the most common email protocol. Here are configurations for popular providers:
              </p>
              
              <div class="space-y-3">
                <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div class="font-medium text-sm mb-1">Gmail</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <div>Host: smtp.gmail.com | Port: 587</div>
                    <div>Requires app password (not your regular password)</div>
                  </div>
                </div>
                
                <div class="bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                  <div class="font-medium text-sm mb-1">Outlook/Hotmail</div>
                  <div class="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                    <div>Host: smtp-mail.outlook.com | Port: 587</div>
                    <div>Uses your regular Microsoft account credentials</div>
                  </div>
                </div>
              </div>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-send" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">SendGrid Setup</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                SendGrid requires only an API key from your SendGrid account:
              </p>
              
              <ol class="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Create a SendGrid account at sendgrid.com</li>
                <li>Go to Settings → API Keys</li>
                <li>Create a new API key with Mail Send permissions</li>
                <li>Copy the API key to your SENDGRID_API_KEY environment variable</li>
              </ol>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-zap" class="h-5 w-5 text-orange-500" />
                <span class="font-semibold">Postmark Setup</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Postmark requires both server and account tokens:
              </p>
              
              <ol class="list-decimal list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Create a Postmark account at postmarkapp.com</li>
                <li>Create a new server for your application</li>
                <li>Copy the Server Token to POSTMARK_SERVER_TOKEN</li>
                <li>Get your Account Token from Account → API Tokens</li>
                <li>Copy the Account Token to POSTMARK_ACCOUNT_TOKEN</li>
              </ol>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Basic Usage -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Basic Usage</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-code" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Initialize Email System</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">main.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package main

import (
    &quot;base/core/config&quot;
    &quot;base/core/email&quot;
    &quot;log&quot;
)

func main() {
    // Load configuration
    cfg := config.Load()
    
    // Initialize email system
    if err := email.Initialize(cfg); err != nil {
        log.Fatal(&quot;Failed to initialize email system:&quot;, err)
    }
    
    // Email system is now ready to use
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> main

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"base/core/config"</span>
    <span class="text-green-400">"base/core/email"</span>
    <span class="text-green-400">"log"</span>
)

<span class="text-blue-400">func</span> <span class="text-yellow-400">main</span>() {
    <span class="text-green-400">// Load configuration</span>
    cfg := config.Load()
    
    <span class="text-green-400">// Initialize email system</span>
    <span class="text-blue-400">if</span> err := email.Initialize(cfg); err != <span class="text-purple-400">nil</span> {
        log.Fatal(<span class="text-green-400">"Failed to initialize email system:"</span>, err)
    }
    
    <span class="text-green-400">// Email system is now ready to use</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-send" class="h-5 w-5 text-green-500" />
                <span class="font-semibold">Send Simple Text Email</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Simple Email Example</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package main

import &quot;base/core/email&quot;

func sendWelcomeEmail(userEmail string) error {
    msg := email.Message{
        To:      []string{userEmail},
        Subject: &quot;Welcome to Base Framework&quot;,
        Body:    &quot;Thank you for joining us! We're excited to have you on board.&quot;,
        IsHTML:  false,
    }
    
    return email.Send(msg)
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> main

<span class="text-blue-400">import</span> <span class="text-green-400">"base/core/email"</span>

<span class="text-blue-400">func</span> <span class="text-yellow-400">sendWelcomeEmail</span>(userEmail <span class="text-purple-400">string</span>) <span class="text-purple-400">error</span> {
    msg := email.Message{
        To:      []<span class="text-purple-400">string</span>{userEmail},
        Subject: <span class="text-green-400">"Welcome to Base Framework"</span>,
        Body:    <span class="text-green-400">"Thank you for joining us! We're excited to have you on board."</span>,
        IsHTML:  <span class="text-purple-400">false</span>,
    }
    
    <span class="text-blue-400">return</span> email.Send(msg)
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- HTML Templates -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">HTML Email Templates</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-layout" class="h-5 w-5 text-purple-500" />
                <span class="font-semibold">HTML Email with Styling</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">HTML Email Template</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func sendWelcomeEmailHTML(userName, userEmail string) error {
    htmlBody := fmt.Sprintf(\`
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset=&quot;utf-8&quot;>
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;>
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
        <div class=&quot;container&quot;>
            <div class=&quot;header&quot;>
                <h1>Welcome to Base Framework!</h1>
            </div>
            <div class=&quot;content&quot;>
                <h2>Hello %s,</h2>
                <p>Thank you for joining Base Framework. We're excited to have you on board!</p>
                
                <p>Here's what you can do next:</p>
                <ul>
                    <li>Complete your profile setup</li>
                    <li>Explore our documentation</li>
                    <li>Join our community</li>
                </ul>
                
                <p>
                    <a href=&quot;https://example.com/get-started&quot; class=&quot;button&quot;>
                        Get Started
                    </a>
                </p>
            </div>
            <div class=&quot;footer&quot;>
                <p>This email was sent to %s</p>
                <p>© 2024 Base Framework. All rights reserved.</p>
            </div>
        </div>
    </body>
    </html>
    \`, userName, userEmail)

    msg := email.Message{
        To:      []string{userEmail},
        Subject: &quot;Welcome to Base Framework&quot;,
        Body:    htmlBody,
        IsHTML:  true,
    }
    
    return email.Send(msg)
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> <span class="text-yellow-400">sendWelcomeEmailHTML</span>(userName, userEmail <span class="text-purple-400">string</span>) <span class="text-purple-400">error</span> {
    htmlBody := fmt.Sprintf(`
    &lt;!DOCTYPE html&gt;
    &lt;html&gt;
    &lt;head&gt;
        &lt;meta charset=<span class="text-green-400">"utf-8"</span>&gt;
        &lt;meta name=<span class="text-green-400">"viewport"</span> content=<span class="text-green-400">"width=device-width, initial-scale=1"</span>&gt;
        &lt;title&gt;Welcome to Base Framework&lt;/title&gt;
        &lt;style&gt;
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #3b82f6; color: white; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .button { display: inline-block; background: #3b82f6; color: white; 
                     padding: 12px 24px; text-decoration: none; border-radius: 4px; }
            .footer { background: #f3f4f6; padding: 20px; text-align: center; 
                     font-size: 14px; color: #6b7280; }
        &lt;/style&gt;
    &lt;/head&gt;
    &lt;body&gt;
        &lt;div class=<span class="text-green-400">"container"</span>&gt;
            &lt;div class=<span class="text-green-400">"header"</span>&gt;
                &lt;h1&gt;Welcome to Base Framework!&lt;/h1&gt;
            &lt;/div&gt;
            &lt;div class=<span class="text-green-400">"content"</span>&gt;
                &lt;h2&gt;Hello %s,&lt;/h2&gt;
                &lt;p&gt;Thank you for joining Base Framework. We're excited to have you on board!&lt;/p&gt;
                
                &lt;p&gt;Here's what you can do next:&lt;/p&gt;
                &lt;ul&gt;
                    &lt;li&gt;Complete your profile setup&lt;/li&gt;
                    &lt;li&gt;Explore our documentation&lt;/li&gt;
                    &lt;li&gt;Join our community&lt;/li&gt;
                &lt;/ul&gt;
                
                &lt;p&gt;
                    &lt;a href=<span class="text-green-400">"https://example.com/get-started"</span> class=<span class="text-green-400">"button"</span>&gt;
                        Get Started
                    &lt;/a&gt;
                &lt;/p&gt;
            &lt;/div&gt;
            &lt;div class=<span class="text-green-400">"footer"</span>&gt;
                &lt;p&gt;This email was sent to %s&lt;/p&gt;
                &lt;p&gt;© 2024 Base Framework. All rights reserved.&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/body&gt;
    &lt;/html&gt;
    `, userName, userEmail)

    msg := email.Message{
        To:      []<span class="text-purple-400">string</span>{userEmail},
        Subject: <span class="text-green-400">"Welcome to Base Framework"</span>,
        Body:    htmlBody,
        IsHTML:  <span class="text-purple-400">true</span>,
    }
    
    <span class="text-blue-400">return</span> email.Send(msg)
}</code></pre>
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
                <UIcon name="i-lucide-layers" class="h-5 w-5 text-blue-500" />
                <span class="font-semibold">Email Service with Dependency Injection</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">services/user_service.go</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`package user

import (
    &quot;fmt&quot;
    &quot;base/core/email&quot;
    &quot;base/core/logger&quot;
    &quot;base/app/models&quot;
    &quot;gorm.io/gorm&quot;
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
        s.Logger.Error(&quot;Failed to send welcome email&quot;,
            logger.String(&quot;user_id&quot;, fmt.Sprintf(&quot;%d&quot;, user.ID)),
            logger.String(&quot;error&quot;, err.Error()))
        // Don't fail user creation if email fails
    }
    
    return user, nil
}

func (s *UserService) sendWelcomeEmail(user *models.User) error {
    msg := email.Message{
        To:      []string{user.Email},
        Subject: &quot;Welcome to Our Platform&quot;,
        Body:    fmt.Sprintf(&quot;Hello %s, welcome to our platform!&quot;, user.Name),
        IsHTML:  false,
    }
    
    err := s.EmailSender.Send(msg)
    if err != nil {
        return fmt.Errorf(&quot;failed to send welcome email: %w&quot;, err)
    }
    
    s.Logger.Info(&quot;Welcome email sent successfully&quot;,
        logger.String(&quot;user_email&quot;, user.Email))
    
    return nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">package</span> user

<span class="text-blue-400">import</span> (
    <span class="text-green-400">"fmt"</span>
    <span class="text-green-400">"base/core/email"</span>
    <span class="text-green-400">"base/core/logger"</span>
    <span class="text-green-400">"base/app/models"</span>
    <span class="text-green-400">"gorm.io/gorm"</span>
)

<span class="text-blue-400">type</span> <span class="text-yellow-400">UserService</span> <span class="text-blue-400">struct</span> {
    DB          *gorm.DB
    EmailSender email.Sender
    Logger      logger.Logger
}

<span class="text-blue-400">func</span> <span class="text-yellow-400">NewUserService</span>(db *gorm.DB, emailSender email.Sender, logger logger.Logger) *UserService {
    <span class="text-blue-400">return</span> &UserService{
        DB:          db,
        EmailSender: emailSender,
        Logger:      logger,
    }
}

<span class="text-blue-400">func</span> (s *UserService) <span class="text-yellow-400">CreateUser</span>(userData CreateUserRequest) (*models.User, <span class="text-purple-400">error</span>) {
    user := &models.User{
        Name:  userData.Name,
        Email: userData.Email,
    }
    
    <span class="text-green-400">// Save user to database</span>
    <span class="text-blue-400">if</span> err := s.DB.Create(user).Error; err != <span class="text-purple-400">nil</span> {
        <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>, err
    }
    
    <span class="text-green-400">// Send welcome email</span>
    <span class="text-blue-400">if</span> err := s.sendWelcomeEmail(user); err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to send welcome email"</span>,
            logger.String(<span class="text-green-400">"user_id"</span>, fmt.Sprintf(<span class="text-green-400">"%d"</span>, user.ID)),
            logger.String(<span class="text-green-400">"error"</span>, err.Error()))
        <span class="text-green-400">// Don't fail user creation if email fails</span>
    }
    
    <span class="text-blue-400">return</span> user, <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-key" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Password Reset Email</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Password Reset Implementation</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func (s *UserService) SendPasswordResetEmail(user *models.User, token string) error {
    resetURL := fmt.Sprintf(&quot;%s/reset-password?token=%s&quot;, config.AppURL, token)
    
    htmlBody := fmt.Sprintf(\`
    &lt;div style=&quot;font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;&quot;&gt;
        &lt;div style=&quot;background: #ef4444; color: white; padding: 20px; text-align: center;&quot;&gt;
            &lt;h1&gt;Password Reset Request&lt;/h1&gt;
        &lt;/div&gt;
        &lt;div style=&quot;padding: 20px;&quot;&gt;
            &lt;h2&gt;Hello %s,&lt;/h2&gt;
            &lt;p&gt;We received a request to reset your password. If you made this request, 
               click the button below to proceed:&lt;/p&gt;
            
            &lt;div style=&quot;text-align: center; margin: 30px 0;&quot;&gt;
                &lt;a href=&quot;%s&quot; 
                   style=&quot;display: inline-block; background: #ef4444; color: white; 
                          padding: 12px 24px; text-decoration: none; border-radius: 4px;&quot;&gt;
                    Reset My Password
                &lt;/a&gt;
            &lt;/div&gt;
            
            &lt;p style=&quot;color: #6b7280;&quot;&gt;
                &lt;strong&gt;Important:&lt;/strong&gt; This link will expire in 1 hour for security reasons.
            &lt;/p&gt;
            
            &lt;p style=&quot;color: #6b7280;&quot;&gt;
                If you didn't request this password reset, please ignore this email. 
                Your password will remain unchanged.
            &lt;/p&gt;
        &lt;/div&gt;
        &lt;div style=&quot;background: #f3f4f6; padding: 20px; text-align: center; 
                    font-size: 14px; color: #6b7280;&quot;&gt;
            &lt;p&gt;This email was sent to %s&lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    \`, user.Name, resetURL, user.Email)

    msg := email.Message{
        To:      []string{user.Email},
        Subject: &quot;Password Reset Request&quot;,
        Body:    htmlBody,
        IsHTML:  true,
    }

    err := s.EmailSender.Send(msg)
    if err != nil {
        s.Logger.Error(&quot;Failed to send password reset email&quot;,
            logger.String(&quot;user_email&quot;, user.Email),
            logger.String(&quot;error&quot;, err.Error()))
        return fmt.Errorf(&quot;failed to send password reset email: %w&quot;, err)
    }

    s.Logger.Info(&quot;Password reset email sent&quot;,
        logger.String(&quot;user_email&quot;, user.Email))
    
    return nil
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (s *UserService) <span class="text-yellow-400">SendPasswordResetEmail</span>(user *models.User, token <span class="text-purple-400">string</span>) <span class="text-purple-400">error</span> {
    resetURL := fmt.Sprintf(<span class="text-green-400">"%s/reset-password?token=%s"</span>, config.AppURL, token)
    
    htmlBody := fmt.Sprintf(`
    &lt;div style=<span class="text-green-400">"font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;"</span>&gt;
        &lt;div style=<span class="text-green-400">"background: #ef4444; color: white; padding: 20px; text-align: center;"</span>&gt;
            &lt;h1&gt;Password Reset Request&lt;/h1&gt;
        &lt;/div&gt;
        &lt;div style=<span class="text-green-400">"padding: 20px;"</span>&gt;
            &lt;h2&gt;Hello %s,&lt;/h2&gt;
            &lt;p&gt;We received a request to reset your password. If you made this request, 
               click the button below to proceed:&lt;/p&gt;
            
            &lt;div style=<span class="text-green-400">"text-align: center; margin: 30px 0;"</span>&gt;
                &lt;a href=<span class="text-green-400">"%s"</span> 
                   style=<span class="text-green-400">"display: inline-block; background: #ef4444; color: white; 
                          padding: 12px 24px; text-decoration: none; border-radius: 4px;"</span>&gt;
                    Reset My Password
                &lt;/a&gt;
            &lt;/div&gt;
            
            &lt;p style=<span class="text-green-400">"color: #6b7280;"</span>&gt;
                &lt;strong&gt;Important:&lt;/strong&gt; This link will expire in 1 hour for security reasons.
            &lt;/p&gt;
            
            &lt;p style=<span class="text-green-400">"color: #6b7280;"</span>&gt;
                If you didn't request this password reset, please ignore this email. 
                Your password will remain unchanged.
            &lt;/p&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    `, user.Name, resetURL, user.Email)

    msg := email.Message{
        To:      []<span class="text-purple-400">string</span>{user.Email},
        Subject: <span class="text-green-400">"Password Reset Request"</span>,
        Body:    htmlBody,
        IsHTML:  <span class="text-purple-400">true</span>,
    }

    err := s.EmailSender.Send(msg)
    <span class="text-blue-400">if</span> err != <span class="text-purple-400">nil</span> {
        s.Logger.Error(<span class="text-green-400">"Failed to send password reset email"</span>,
            logger.String(<span class="text-green-400">"user_email"</span>, user.Email),
            logger.String(<span class="text-green-400">"error"</span>, err.Error()))
        <span class="text-blue-400">return</span> fmt.Errorf(<span class="text-green-400">"failed to send password reset email: %w"</span>, err)
    }

    s.Logger.Info(<span class="text-green-400">"Password reset email sent"</span>,
        logger.String(<span class="text-green-400">"user_email"</span>, user.Email))
    
    <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
}</code></pre>
            </div>
          </UCard>
        </div>
      </section>

      <!-- Error Handling -->
      <section class="mb-12">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Error Handling & Debugging</h2>
        
        <div class="space-y-6">
          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-alert-triangle" class="h-5 w-5 text-yellow-500" />
                <span class="font-semibold">Robust Error Handling</span>
              </div>
            </template>
            
            <div class="relative bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <div class="flex items-center justify-between mb-2">
                <span class="text-xs text-gray-400">Error Handling Best Practices</span>
                <button class="copy-button text-xs text-gray-400 hover:text-gray-200 px-2 py-1 rounded border border-gray-600 hover:border-gray-400 transition-colors" @click="copyToClipboard(`func (s *UserService) SendEmailWithRetry(user *models.User, subject, body string, isHTML bool) error {
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
            s.Logger.Info(&quot;Email sent successfully&quot;,
                logger.String(&quot;user_email&quot;, user.Email),
                logger.String(&quot;subject&quot;, subject),
                logger.Int(&quot;attempt&quot;, attempt))
            return nil
        }
        
        s.Logger.Warn(&quot;Email send attempt failed&quot;,
            logger.String(&quot;user_email&quot;, user.Email),
            logger.String(&quot;error&quot;, err.Error()),
            logger.Int(&quot;attempt&quot;, attempt),
            logger.Int(&quot;max_retries&quot;, maxRetries))
        
        // Don't retry on the last attempt
        if attempt < maxRetries {
            time.Sleep(retryDelay)
        }
    }
    
    // All retries failed
    s.Logger.Error(&quot;Failed to send email after all retries&quot;,
        logger.String(&quot;user_email&quot;, user.Email),
        logger.String(&quot;subject&quot;, subject),
        logger.Int(&quot;max_retries&quot;, maxRetries))
    
    return fmt.Errorf(&quot;failed to send email after %d attempts&quot;, maxRetries)
}

// Validate email before sending
func (s *UserService) ValidateAndSendEmail(user *models.User, subject, body string) error {
    // Validate user email
    if user.Email == &quot;&quot; {
        return fmt.Errorf(&quot;user email is empty&quot;)
    }
    
    // Basic email format validation
    if !strings.Contains(user.Email, &quot;@&quot;) {
        return fmt.Errorf(&quot;invalid email format: %s&quot;, user.Email)
    }
    
    // Validate content
    if subject == &quot;&quot; {
        return fmt.Errorf(&quot;email subject cannot be empty&quot;)
    }
    
    if body == &quot;&quot; {
        return fmt.Errorf(&quot;email body cannot be empty&quot;)
    }
    
    return s.SendEmailWithRetry(user, subject, body, false)
}`, $event)">
                  Copy
                </button>
              </div>
              <pre class="text-sm text-gray-300 whitespace-pre-wrap"><code><span class="text-blue-400">func</span> (s *UserService) <span class="text-yellow-400">SendEmailWithRetry</span>(user *models.User, subject, body <span class="text-purple-400">string</span>, isHTML <span class="text-purple-400">bool</span>) <span class="text-purple-400">error</span> {
    msg := email.Message{
        To:      []<span class="text-purple-400">string</span>{user.Email},
        Subject: subject,
        Body:    body,
        IsHTML:  isHTML,
    }
    
    <span class="text-blue-400">const</span> maxRetries = <span class="text-purple-400">3</span>
    <span class="text-blue-400">const</span> retryDelay = time.Second * <span class="text-purple-400">2</span>
    
    <span class="text-blue-400">for</span> attempt := <span class="text-purple-400">1</span>; attempt <= maxRetries; attempt++ {
        err := s.EmailSender.Send(msg)
        <span class="text-blue-400">if</span> err == <span class="text-purple-400">nil</span> {
            s.Logger.Info(<span class="text-green-400">"Email sent successfully"</span>,
                logger.String(<span class="text-green-400">"user_email"</span>, user.Email),
                logger.String(<span class="text-green-400">"subject"</span>, subject),
                logger.Int(<span class="text-green-400">"attempt"</span>, attempt))
            <span class="text-blue-400">return</span> <span class="text-purple-400">nil</span>
        }
        
        s.Logger.Warn(<span class="text-green-400">"Email send attempt failed"</span>,
            logger.String(<span class="text-green-400">"user_email"</span>, user.Email),
            logger.String(<span class="text-green-400">"error"</span>, err.Error()),
            logger.Int(<span class="text-green-400">"attempt"</span>, attempt),
            logger.Int(<span class="text-green-400">"max_retries"</span>, maxRetries))
        
        <span class="text-green-400">// Don't retry on the last attempt</span>
        <span class="text-blue-400">if</span> attempt < maxRetries {
            time.Sleep(retryDelay)
        }
    }
    
    <span class="text-green-400">// All retries failed</span>
    s.Logger.Error(<span class="text-green-400">"Failed to send email after all retries"</span>,
        logger.String(<span class="text-green-400">"user_email"</span>, user.Email),
        logger.String(<span class="text-green-400">"subject"</span>, subject),
        logger.Int(<span class="text-green-400">"max_retries"</span>, maxRetries))
    
    <span class="text-blue-400">return</span> fmt.Errorf(<span class="text-green-400">"failed to send email after %d attempts"</span>, maxRetries)
}</code></pre>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <div class="flex items-center space-x-2">
                <UIcon name="i-lucide-bug" class="h-5 w-5 text-red-500" />
                <span class="font-semibold">Common Issues & Solutions</span>
              </div>
            </template>
            
            <div class="space-y-4">
              <div class="space-y-3">
                <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <div class="font-medium text-sm mb-1 text-red-800 dark:text-red-200">SMTP Authentication Failed</div>
                  <div class="text-xs text-red-600 dark:text-red-300 space-y-1">
                    <div>• Use app passwords for Gmail (not your regular password)</div>
                    <div>• Enable 2FA and generate an app-specific password</div>
                    <div>• Check SMTP host and port settings</div>
                  </div>
                </div>
                
                <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg">
                  <div class="font-medium text-sm mb-1 text-yellow-800 dark:text-yellow-200">SendGrid API Errors</div>
                  <div class="text-xs text-yellow-600 dark:text-yellow-300 space-y-1">
                    <div>• Verify API key has Mail Send permissions</div>
                    <div>• Check sender email is verified in SendGrid</div>
                    <div>• Ensure you're not exceeding rate limits</div>
                  </div>
                </div>
                
                <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                  <div class="font-medium text-sm mb-1 text-blue-800 dark:text-blue-200">Email Not Initialized</div>
                  <div class="text-xs text-blue-600 dark:text-blue-300 space-y-1">
                    <div>• Call email.Initialize(cfg) in your main function</div>
                    <div>• Ensure configuration is loaded before initialization</div>
                    <div>• Check EMAIL_PROVIDER environment variable is set</div>
                  </div>
                </div>
              </div>
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
                <li>Always validate email addresses before sending</li>
                <li>Use HTML templates for better user experience</li>
                <li>Implement retry logic for failed email sends</li>
                <li>Log email operations for debugging and monitoring</li>
                <li>Use dependency injection for testable code</li>
                <li>Include unsubscribe links in marketing emails</li>
                <li>Test email templates across different email clients</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="red" variant="soft">
            <template #title">❌ Don'ts</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Don't fail critical operations if email fails</li>
                <li>Don't send emails without proper error handling</li>
                <li>Don't hardcode email templates in your code</li>
                <li>Don't forget to handle multiple recipients properly</li>
                <li>Don't send emails without rate limiting for bulk operations</li>
                <li>Don't expose email provider credentials in logs</li>
                <li>Don't send emails from localhost in production</li>
              </ul>
            </template>
          </UAlert>

          <UAlert color="blue" variant="soft">
            <template #title">💡 Pro Tips</template>
            <template #description>
              <ul class="list-disc list-inside space-y-1 mt-2">
                <li>Use the default provider for development and testing</li>
                <li>Switch to professional providers for production</li>
                <li>Monitor email delivery rates and bounce rates</li>
                <li>Consider using email queues for high-volume sending</li>
                <li>Keep email templates in separate files for maintainability</li>
                <li>Use email events to trigger additional business logic</li>
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