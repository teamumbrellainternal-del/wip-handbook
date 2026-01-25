# Cloudflare Pages + Access Deployment Guide

## Prerequisites

- Cloudflare account with access to Pages and Access
- GitHub repository pushed to GitHub
- Domain configured in Cloudflare (optional, but recommended for custom domain + Access)

---

## Part 1: Deploy to Cloudflare Pages

### Step 1: Create Pages Project

1. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** > **Pages**
3. Click **Create application** > **Connect to Git**

### Step 2: Connect Repository

1. Authorize Cloudflare to access your GitHub account
2. Select the **wip-handbook** repository
3. Click **Begin setup**

### Step 3: Configure Build Settings

Use these exact settings:

```
Project name:          umbrella-handbook (or your preferred name)
Production branch:     main (or your default branch)
Framework preset:      Astro
Build command:         npm run build
Build output directory: dist
```

**Environment variables:** None required (leave empty)

### Step 4: Deploy

1. Click **Save and Deploy**
2. Wait for the initial build to complete (typically 1-3 minutes)
3. You'll get a `*.pages.dev` URL (e.g., `umbrella-handbook.pages.dev`)

### Step 5: Verify Deployment

1. Visit your `*.pages.dev` URL
2. Confirm the site loads correctly
3. Check all navigation and pages work

---

## Part 2: Configure Cloudflare Access (Authentication)

Cloudflare Access will protect your handbook behind authentication, allowing only authorized users to view it.

### Step 6: Enable Zero Trust

1. In Cloudflare Dashboard, navigate to **Zero Trust**
2. If this is your first time, you'll need to:
   - Choose a team name (e.g., `umbrella`)
   - Your Zero Trust dashboard will be at `https://umbrella.cloudflareaccess.com`

### Step 7: Add Your Pages Site to Access

1. Go to **Zero Trust** > **Access** > **Applications**
2. Click **Add an application**
3. Select **Self-hosted**

### Step 8: Configure Application

**Application Configuration:**
```
Application name:    Umbrella Handbook
Session Duration:    24 hours (or your preference)
Application domain:
  - Subdomain: umbrella-handbook (your Pages subdomain)
  - Domain: pages.dev
  OR
  - Your custom domain if configured
```

**Application Appearance (Optional):**
```
App Launcher visibility: Show (if you want it in the App Launcher)
Custom logo: Upload umbrella logo if desired
```

Click **Next**

### Step 9: Add Access Policy

**Create an Access Policy:**

**Policy name:** `Allow Umbrella Team`

**Action:** Allow

**Configure rules - Choose one or more:**

**Option A: Email-based access**
```
Selector: Emails
Value: user@example.com (add each team member's email)
```

**Option B: Email domain-based**
```
Selector: Emails ending in
Value: @yourcompany.com
```

**Option C: GitHub Organization**
```
Selector: Login Methods
Value: GitHub
+ Include: GitHub Organization
Value: your-org-name
```

**Option D: Google Workspace**
```
Selector: Login Methods
Value: Google
+ Include: Emails ending in
Value: @yourcompany.com
```

Click **Next** > **Add application**

### Step 10: Configure Identity Providers

If you haven't already, configure at least one identity provider:

1. Go to **Zero Trust** > **Settings** > **Authentication**
2. Click **Add new** under Login methods
3. Choose your provider:
   - **One-time PIN** (email-based, simplest)
   - **Google** (for Google Workspace)
   - **GitHub** (for GitHub-based auth)
   - **Okta, Azure AD, etc.** (for enterprise SSO)

4. Follow the setup wizard for your chosen provider

### Step 11: Test Access Protection

1. Open an incognito/private browser window
2. Navigate to your handbook URL
3. You should see the Cloudflare Access login page
4. Log in with an authorized account
5. Verify you can access the handbook
6. Try with an unauthorized account to confirm it's blocked

---

## Part 3: Custom Domain (Optional)

### Step 12: Add Custom Domain to Pages

1. In **Pages** > Your project > **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain (e.g., `handbook.umbrella.com`)
4. Add the CNAME record to your Cloudflare DNS:
   ```
   CNAME handbook <your-project>.pages.dev
   ```
5. Wait for DNS propagation (usually instant with Cloudflare)

### Step 13: Update Access Application

1. Go back to **Zero Trust** > **Access** > **Applications**
2. Edit your Umbrella Handbook application
3. Update the **Application domain** to your custom domain
4. Save changes

---

## Part 4: Ongoing Operations

### Automatic Deployments

- Every push to your production branch triggers a new deployment automatically
- Pull requests create preview deployments at unique URLs
- You can view all deployments in the Pages dashboard

### Managing Access

To add/remove users:
1. Go to **Zero Trust** > **Access** > **Applications**
2. Edit your application
3. Modify the policies
4. Changes take effect immediately

### Monitoring

- **Deployment logs:** Pages dashboard > Your project > Deployments
- **Access logs:** Zero Trust dashboard > Logs > Access
- **Analytics:** Pages dashboard > Your project > Analytics

---

## Troubleshooting

### Build Fails

- Check the build logs in Cloudflare Pages dashboard
- Ensure Node.js version compatibility (Cloudflare uses Node 18+ by default)
- Verify all dependencies are in `package.json`

### Access Not Working

- Verify your identity provider is configured correctly
- Check that users are using the correct email domain
- Review Access logs for blocked requests
- Ensure the application domain matches exactly

### 404 Errors

- Verify `dist` is the correct output directory
- Check that `npm run build` completes successfully locally
- Ensure all content files are committed to git

---

## Summary

**Deployment URL:** `https://your-project.pages.dev`

**Build command:** `npm run build`

**Output directory:** `dist`

**Authentication:** Cloudflare Access with your chosen identity provider(s)

**Estimated setup time:** 15-20 minutes

---

## Need Help?

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare Access Docs](https://developers.cloudflare.com/cloudflare-one/applications/)
- [Astro Cloudflare Guide](https://docs.astro.build/en/guides/deploy/cloudflare/)
