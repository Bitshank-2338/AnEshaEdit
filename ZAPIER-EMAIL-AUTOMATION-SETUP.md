// Zapier Email Automation Setup Guide
// This file documents how to set up Zapier + SendGrid for automatic post-to-email notifications

/**
 * STEP 1: Create SendGrid Account (Free Tier)
 * - Go to: https://sendgrid.com/
 * - Sign up for FREE plan (100 emails/day)
 * - Verify sender email: eshasalvi03@gmail.com
 * - Get API key from Settings → API Keys
 * - Keep this key safe (never commit to GitHub)
 */

/**
 * STEP 2: Create Zapier Workflow
 * 
 * TRIGGER:
 * - Service: RSS by Zapier
 * - Feed URL: https://bitshank-2338.github.io/AnEshaEdit/feed.xml
 * - Check every: 15 minutes
 * - Use: New items only
 * 
 * ACTION 1 (Send Email):
 * - Service: SendGrid
 * - Action: Send Email
 * - To Email: Use a formula to insert subscriber emails (see STEP 3)
 * - From Email: eshasalvi03@gmail.com
 * - Subject: New Post: {title from RSS}
 * - Body Template:
 *   Hi,
 *   A new post just published on AnEshaEdit!
 *   
 *   {title}
 *   {description/excerpt}
 *   
 *   Read more: {link from RSS}
 *   
 *   Cheers,
 *   The AnEshaEdit Team
 * 
 * ACTION 2 (Store in Google Sheets):
 * - Service: Google Sheets
 * - Action: Create Spreadsheet Row
 * - Spreadsheet: Create a "AnEshaEdit Posts" sheet
 * - Store: post title, link, date
 *   (This gives you a backup log of all published posts)
 */

/**
 * STEP 3: Handle Subscriber List
 * 
 * Option A (Manual - Low Tech):
 * 1. Create a Google Form at forms.google.com
 * 2. Ask for email address
 * 3. Export responses to Google Sheets
 * 4. In Zapier, loop through all emails in the sheet and send emails
 * 
 * Option B (Automated - Recommended):
 * 1. Use subscribe.html form (stores emails in browser localStorage)
 * 2. Periodically export from browser dev tools
 * 3. OR: Use a Zapier webhook to collect emails directly
 * 
 * Option C (Future - Premium):
 * 1. Upgrade to SendGrid's list management
 * 2. Or use Mailgun (also free tier)
 */

/**
 * STEP 4: Test the Workflow
 * 
 * 1. In Zapier: Click "Test Trigger"
 * 2. Publish a test post via /admin/
 * 3. Wait 15 minutes for RSS check (or manually trigger in Zapier)
 * 4. Check your email - you should receive the automated post email
 */

/**
 * COST BREAKDOWN (All Free)
 * - SendGrid: $0 (100 emails/day)
 * - Zapier: $0 (basic plan, limited tasks/month but enough for daily posts)
 * - Google Forms/Sheets: $0
 * - Google Drive: 15GB free
 * 
 * TOTAL: $0/month
 */

/**
 * ALTERNATIVE: Use Zapier's Built-in Email Service
 * 
 * If you don't want to set up SendGrid, Zapier also has:
 * - "Send Email" action (uses Zapier's email service)
 * - Simpler but less customizable
 * 
 * Trade-off: Less control over email branding, but faster setup (5 mins)
 */
