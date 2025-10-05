# Development Commands

## Starting Development

```bash
# Start both frontend and backend in parallel
pnpm dev

# Start only frontend (http://localhost:3000)
pnpm dev:frontend

# Start only backend (http://localhost:8787)
pnpm dev:backend
```

## Building

```bash
# Build all packages
pnpm build

# Build specific packages
pnpm build:frontend
pnpm build:backend
```

## Type Generation

```bash
# Generate API types from OpenAPI schema (requires backend to be running)
pnpm generate-types
```

This command:

1. Generates types from the running backend's OpenAPI schema
2. Places them in `shared/types/api/`
3. Runs `lint:fix` automatically

## Testing (Frontend)

```bash
# Run tests
pnpm --filter frontend test

# Run tests with UI
pnpm --filter frontend test:ui

# Run tests with coverage
pnpm --filter frontend test:coverage
```

## Linting & Formatting

```bash
# Check all linting/formatting issues
pnpm lint

# Fix all linting/formatting issues
pnpm lint:fix

# Run type checking across all packages
pnpm typecheck
```

### Individual Tools

```bash
# ESLint
pnpm eslint          # Check
pnpm eslint:fix      # Fix
pnpm eslint:ci       # CI mode (max-warnings 0)

# Biome
pnpm biome           # Check
pnpm biome:fix       # Fix
pnpm biome:ci        # CI mode

# Prettier
pnpm prettier        # Check
pnpm prettier:fix    # Fix
pnpm prettier:ci     # CI mode

# Format (runs prettier + biome)
pnpm format          # Check
pnpm format:fix      # Fix
```

## Backend Deployment

```bash
# Deploy to Cloudflare Workers
pnpm --filter backend deploy

# Generate Cloudflare bindings types
pnpm --filter backend cf-typegen
```

## Backend Development URLs

- Health Check: http://localhost:8787/api/health
- Swagger UI: http://localhost:8787/api/swagger
- OpenAPI Spec: http://localhost:8787/api/openapi.yaml

## System Utilities (Darwin/macOS)

Standard Unix commands are available:

- `ls`, `cd`, `grep`, `find`
- `git` for version control
- `which`, `whereis` for locating binaries
