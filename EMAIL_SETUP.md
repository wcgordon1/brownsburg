# Email Setup with Resend & Cloudflare Pages

This project uses Resend for email delivery through Cloudflare Pages Functions.

## Setup Instructions

### 1. Set your Resend API Key as a Cloudflare Pages secret

**For Production (Cloudflare Dashboard):**
1. Go to your Cloudflare Pages dashboard
2. Select your project 
3. Go to Settings → Environment Variables
4. Add a new variable:
   - **Name:** `RESEND_API_KEY`
   - **Value:** `re_DYV7Q27b_4w6tfeN8R84J7mJp2DCZKgRi`
   - **Environment:** Production

**For Local Development:**
```bash
# Using Wrangler CLI (run this in your project root)
npx wrangler secret put RESEND_API_KEY

# When prompted, enter: re_DYV7Q27b_4w6tfeN8R84J7mJp2DCZKgRi
```

### 2. Install Wrangler (if you haven't already)

```bash
npm install -g wrangler
```

### 3. Local Development

To test the email functionality locally:

```bash
# Start the local development server with Pages Functions
npx wrangler pages dev

# This will serve your Vite build + the email function at localhost:8788
```

### 4. Deploy to Cloudflare Pages

The email function will automatically deploy when you push to your Git repository, as long as:

1. The `functions/` directory is committed to your repo
2. Your Cloudflare Pages project is connected to the repo  
3. The `RESEND_API_KEY` environment variable is set in your Pages dashboard

## How It Works

- **Frontend forms** send data to `/api/send-email`
- **Cloudflare Pages Function** (`functions/api/send-email.ts`) processes the request
- **Resend API** sends formatted emails to `will@brownsburgpressurewashing.com`

## Email Types Supported

1. **Callback Requests** - From the "Request Call Back" button
2. **Quote Requests** - From quote forms/modals  
3. **Contact Form** - From the main contact page

Each email type gets a different subject line and formatted content.

## Testing

You can test the forms:
1. Locally using `npx wrangler pages dev`
2. On the live site after deployment

All form submissions will send emails to `will@brownsburgpressurewashing.com`.