# Deploy Backend (API Server) to Render - Step-by-Step Guide

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ GitHub account with your repository pushed
- ✅ Render account (create at https://render.com)
- ✅ Backend code ready in `artifacts/api-server/`
- ✅ All dependencies in `package.json` configured

---

## 🔧 Step 1: Prepare Your Application for Deployment

### 1.1 Create a `.gitignore` file (if not already present)

Ensure these files are NOT committed to Git:
```
node_modules/
dist/
.env
.env.local
*.log
```

### 1.2 Verify `package.json` has correct scripts

Check `artifacts/api-server/package.json`:
```json
{
  "scripts": {
    "dev": "cross-env NODE_ENV=development PORT=3000 pnpm run build && cross-env NODE_ENV=development PORT=3000 pnpm run start",
    "build": "node ./build.mjs",
    "start": "node --enable-source-maps ./dist/index.mjs",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  }
}
```

### 1.3 Create a `.nvmrc` file (optional but recommended)

In `artifacts/api-server/.nvmrc`, specify your Node version:
```
22.17.0
```

### 1.4 Ensure Render can access the build output

The start script should point to the built file:
```json
"start": "node --enable-source-maps ./dist/index.mjs"
```

---

## 🚀 Step 2: Push Your Code to GitHub

```bash
# From workspace root
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

Verify your repository is public or private (you'll use this URL on Render).

---

## 🔐 Step 3: Create a Render Account

1. Go to https://render.com
2. Click **Sign Up**
3. Create account with GitHub or email
4. Verify your email

---

## 🛠️ Step 4: Create a New Web Service on Render

### 4.1 Go to Dashboard

1. Log into Render dashboard
2. Click **+ New** button
3. Select **Web Service**

### 4.2 Connect Your GitHub Repository

**Option A: If using GitHub:**
1. Click **Connect GitHub Account**
2. Authorize Render to access your repositories
3. Select your `Design-Showcase` repository
4. Click **Connect**

**Option B: If using Git URL:**
1. Select **Public Git Repository**
2. Enter your repository URL:
   ```
   https://github.com/YOUR_USERNAME/Design-Showcase.git
   ```

### 4.3 Configure Service Settings

Fill in the following details:

| Field | Value |
|-------|-------|
| **Name** | `design-showcase-api` |
| **Environment** | `Node` |
| **Region** | `Oregon` (or closest to you) |
| **Branch** | `main` |
| **Build Command** | `pnpm install && pnpm run build` |
| **Start Command** | `node --enable-source-maps ./dist/index.mjs` |
| **Plan** | `Free` (or paid if needed) |

### 4.4 Root Directory (Important!)

Since your backend is in a subdirectory, set:
- **Root Directory**: `artifacts/api-server`

---

## 📝 Step 5: Add Environment Variables

1. Scroll down to **Environment** section
2. Click **Add Environment Variable**
3. Add the following variables:

```
NODE_ENV = production
PORT = (leave blank - Render assigns automatically)
```

**If using database:**
```
DATABASE_URL = your_database_connection_string
```

Click **Save**

---

## ✅ Step 6: Deploy

1. Click **Create Web Service**
2. Render will:
   - Clone your repository
   - Install dependencies with `pnpm install`
   - Run build command: `pnpm run build`
   - Start the service with: `node --enable-source-maps ./dist/index.mjs`

3. Wait for deployment to complete (typically 2-5 minutes)

---

## 🔍 Step 7: Verify Deployment

### 7.1 Check Deployment Status

Once deployed, you'll see:
```
✓ Your service is live at: https://design-showcase-api.onrender.com
```

### 7.2 Test Your API

Open in browser or use curl:
```bash
curl https://design-showcase-api.onrender.com/health
```

### 7.3 Check Logs

In Render dashboard:
1. Go to your service
2. Click **Logs** tab
3. View real-time logs to verify service is running

Expected log output:
```
[HH:MM:SS.xxx] INFO (xxxxx): Server listening
    port: 10000
```

---

## 🔗 Step 8: Connect Frontend to Backend

Once backend is deployed, update your frontend to use the new API URL.

### For Astra-Vastra Frontend:

Update the API client configuration:

**File:** `artifacts/astra-vastra/src/lib/api-client.ts` (or equivalent)

```typescript
const API_BASE_URL = process.env.VITE_API_URL || 'https://design-showcase-api.onrender.com';
```

Create `.env.production`:
```
VITE_API_URL=https://design-showcase-api.onrender.com
```

---

## 📊 Important Notes

### ✅ What Works on Render Free Tier
- Basic Node.js API server
- TypeScript compilation
- Environment variables
- SSL/HTTPS certificates (automatic)
- 0.5 GB RAM
- Shared CPU

### ❌ Limitations on Free Tier
- Service spins down after 15 minutes of inactivity
- Takes ~30 seconds to wake up on first request
- No persistent storage (reset on redeploy)
- Limited to 1 concurrent request

### Upgrade to Paid Plan If You Need
- Always-on service
- More resources
- Better performance
- Custom domains

---

## 🔄 Step 9: Auto-Deploy on Git Push (Optional)

Render automatically re-deploys when you push to your GitHub branch:

```bash
# Make changes locally
git add .
git commit -m "Update API"
git push origin main

# Render will automatically redeploy
```

You can watch deployment progress in the Render dashboard.

---

## 🐛 Troubleshooting

### Issue: Build fails with "pnpm not found"

**Solution:** Update build command to:
```
npm install -g pnpm && pnpm install && pnpm run build
```

### Issue: Port not specified

**Solution:** Ensure your `start` script reads the PORT environment variable:
```typescript
const port = process.env.PORT || 3000;
```

### Issue: Service keeps spinning down

**Solution:** Upgrade to paid plan for always-on service

### Issue: Service crashes on startup

**Solution:** Check logs in Render dashboard > Logs tab for error messages

---

## 📱 Final Checklist

- ✅ Code pushed to GitHub
- ✅ Render account created
- ✅ Web Service created
- ✅ Root Directory set to `artifacts/api-server`
- ✅ Build command: `pnpm install && pnpm run build`
- ✅ Start command: `node --enable-source-maps ./dist/index.mjs`
- ✅ Environment variables added
- ✅ Deployment completed successfully
- ✅ API tested and working
- ✅ Frontend updated with API URL

---

## 🎉 You're Done!

Your backend is now live on Render! 

**API URL:** `https://design-showcase-api.onrender.com`

---

## 📚 Additional Resources

- [Render Docs](https://render.com/docs)
- [Node.js on Render](https://render.com/docs/deploy-node-express-app)
- [Environment Variables](https://render.com/docs/environment-variables)
- [Custom Domains](https://render.com/docs/custom-domains)

