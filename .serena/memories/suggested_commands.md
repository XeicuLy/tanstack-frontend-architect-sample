# Suggested Commands

## Essential Development Commands

### Start Development

```bash
pnpm dev                    # Start both frontend and backend
pnpm dev:frontend          # Start frontend only (port 3000)
pnpm dev:backend           # Start backend only (port 8787)
```

### Code Quality (MOST IMPORTANT)

```bash
pnpm lint:fix              # Fix all linting, formatting, and type issues
pnpm typecheck             # Check TypeScript types only
pnpm generate-types        # Generate API types from backend
```

### Testing

```bash
pnpm --filter frontend test                # Run tests
pnpm --filter frontend test:coverage       # Run with coverage
pnpm --filter frontend test:ui             # Run with UI
```

### Building

```bash
pnpm build                 # Build all packages
pnpm build:frontend        # Build frontend only
pnpm build:backend         # Build backend only
```

## Individual Linting Tools (if needed)

```bash
pnpm eslint:fix            # Fix ESLint issues
pnpm biome:fix             # Fix Biome issues
pnpm prettier:fix          # Fix Prettier formatting
```

## Backend Deployment

```bash
pnpm --filter backend deploy              # Deploy to Cloudflare Workers
pnpm --filter backend cf-typegen          # Generate CF bindings
```

## Development URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:8787/api/health
- API Documentation: http://localhost:8787/api/swagger
- OpenAPI Spec: http://localhost:8787/api/openapi.yaml

## System Commands (Darwin/macOS)

```bash
# File operations
ls -la                     # List files with details
find . -name "*.ts"        # Find TypeScript files
grep -r "pattern" src/     # Search for pattern in source

# Git operations
git status                 # Check repo status
git log --oneline -10      # Recent commits
git diff                   # Show changes

# Process management
ps aux | grep node         # Find Node processes
lsof -i :3000             # Check what's using port 3000
kill -9 <PID>             # Kill process by ID
```

## Package Management

```bash
pnpm install              # Install dependencies
pnpm add <package>         # Add new dependency
pnpm run <script>          # Run package script
pnpm --filter <package> <command>  # Run command in specific package
```

## Quick Health Checks

```bash
# Check if services are running
curl http://localhost:3000                    # Frontend
curl http://localhost:8787/api/health         # Backend health

# Verify development environment
node --version             # Check Node version
pnpm --version             # Check pnpm version
git --version              # Check Git version
```

## Troubleshooting Commands

```bash
# Clear caches and restart
rm -rf node_modules && pnpm install         # Reinstall deps
pnpm --filter frontend dev --force          # Force restart frontend
pnpm --filter backend dev --force           # Force restart backend

# Check for port conflicts
lsof -i :3000              # Frontend port
lsof -i :8787              # Backend port

# View logs
tail -f ~/.npmrc           # npm config
pnpm config list           # pnpm settings
```

## Most Critical Commands to Remember

1. `pnpm dev` - Start development
2. `pnpm lint:fix` - Fix all code issues (RUN AFTER EVERY CHANGE)
3. `pnpm generate-types` - Update API types when backend changes
4. `pnpm build` - Verify everything builds
5. `curl http://localhost:8787/api/health` - Check backend is running
