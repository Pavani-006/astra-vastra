# Design-Showcase Application - Setup & Run Guide

## ✅ All Issues Fixed - Your Application is Ready to Run

### Fixed Issues:
1. **Windows Shell Script Error** - Replaced Unix `sh` command with cross-platform Node.js in preinstall script
2. **Missing Rollup Windows Binary** - Added `@rollup/rollup-win32-x64-msvc`
3. **Missing LightningCSS Windows Binary** - Added `lightningcss-win32-x64-msvc`
4. **Missing Tailwind Oxide Windows Binary** - Added `@tailwindcss/oxide-win32-x64-msvc`
5. **Workspace Dependencies** - Configured pnpm hoisting for proper module resolution

---

## 📋 Workspace Overview

Your project is a **monorepo** with multiple applications:

### Applications:
- **`artifacts/astra-vastra`** - Main React Design Showcase Frontend (Vite) - **PORT 5173**
- **`artifacts/mockup-sandbox`** - Secondary React App (Vite) - **PORT 5174**
- **`artifacts/api-server`** - Express.js Backend API - **PORT 3000**

### Shared Libraries:
- **`lib/db`** - Drizzle ORM database layer
- **`lib/api-client-react`** - React Query API client wrapper
- **`lib/api-zod`** - Zod validation schemas for API

---

## 🚀 How to Run the Application

### **Option 1: Run Everything Together (Development Mode)**

```bash
# From the workspace root
pnpm run dev
```

This will start:
- Backend API (Express) on `http://localhost:3000`
- Frontend (Vite dev server) on `http://localhost:5173`

### **Option 2: Run Individual Applications**

#### **Start the Backend API:**
```bash
cd artifacts/api-server
pnpm run dev
```
- Runs on port 3000
- Enables auto-rebuild on file changes
- Includes TypeScript source maps

#### **Start the Main Frontend (astra-vastra):**
```bash
cd artifacts/astra-vastra
# Set environment variables first (see below)
pnpm run dev
```
- Runs on port 5173 (configurable via PORT env var)
- Hot module reload enabled
- Full Vite development server features

#### **Start the Sandbox Frontend (mockup-sandbox):**
```bash
cd artifacts/mockup-sandbox
pnpm run dev
```
- Runs on port 5174
- Similar Vite dev server setup

### **Option 3: Build for Production**

```bash
# From the workspace root - builds all packages
pnpm run build
```

This creates:
- `artifacts/astra-vastra/dist/` - Production build
- `artifacts/mockup-sandbox/dist/` - Production build
- `artifacts/api-server/dist/` - Minified server bundle

---

## ⚙️ Environment Variables

The frontend applications require **required** environment variables:

### For `astra-vastra`:
```bash
PORT=5173           # Development server port
BASE_PATH=/         # Base path for routing
NODE_ENV=development
```

### For `mockup-sandbox`:
```bash
PORT=5174           # Development server port  
BASE_PATH=/         # Base path for routing
NODE_ENV=development
```

### For `api-server`:
```bash
NODE_ENV=development
# Database configuration (if using database features)
DATABASE_URL=your_db_connection_string
```

**Set these before running:**
```bash
# PowerShell
$env:PORT = "5173"
$env:BASE_PATH = "/"
$env:NODE_ENV = "development"

# Command Prompt
set PORT=5173
set BASE_PATH=/
set NODE_ENV=development
```

---

## 📦 Available Commands

### Root Workspace:
```bash
pnpm run build        # Build all packages (with typecheck)
pnpm run typecheck    # Run TypeScript checks
pnpm install          # Install/update dependencies
pnpm add <pkg>        # Add new package (use -w flag for workspace root)
pnpm -r run dev       # Run dev command in all packages
```

### Individual Package Scripts:

**astra-vastra:**
```bash
cd artifacts/astra-vastra
pnpm run dev          # Start dev server
pnpm run build        # Production build
pnpm run typecheck    # TypeScript check
pnpm run serve        # Preview production build
```

**api-server:**
```bash
cd artifacts/api-server
pnpm run dev          # Development mode with auto-rebuild
pnpm run build        # Create production bundle
pnpm run start        # Run compiled server
pnpm run typecheck    # TypeScript check
```

---

## 🔧 Troubleshooting

### If you get build errors:
```bash
# Clean install
rm -r node_modules pnpm-lock.yaml
pnpm install
pnpm run build
```

### If port is already in use:
```bash
# Change the port
$env:PORT = "5175"  # Use a different port
pnpm run dev
```

### If dependencies are missing:
```bash
# Reinstall from workspace root
pnpm install
pnpm approve-builds --all  # Approve build scripts if prompted
```

---

## 📁 Key Files

- **`pnpm-workspace.yaml`** - Monorepo configuration
- **`package.json`** - Workspace root dependencies
- **`tsconfig.json`** - TypeScript configuration
- **`.npmrc`** - pnpm configuration (hoisting enabled)

---

## ✨ What Was Already Fixed

Your application had several Windows compatibility issues that have been resolved:

✅ **Cross-platform preinstall script** - Works on Windows, Mac, Linux  
✅ **Native module binaries** - All platform-specific packages installed  
✅ **Dependency hoisting** - pnpm configured to properly resolve modules  
✅ **Build verification** - All packages successfully typecheck and build  

---

## 📝 Next Steps

1. Set up environment variables (see above)
2. Run `pnpm run dev` from the workspace root
3. Open `http://localhost:5173` in your browser
4. Start developing!

---

**Happy coding! 🎨**
