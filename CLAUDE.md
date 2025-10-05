# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Architecture

This is a TanStack Start + Hono monorepo with three main packages:

- **frontend/**: TanStack Start (React) app with TailwindCSS and Vitest
- **backend/**: Hono API running on Cloudflare Workers with OpenAPI/Zod validation
- **shared/**: Common types and constants shared between frontend and backend

The backend generates OpenAPI types that are automatically synced to the shared package for type-safe API communication.

## Development Commands

### Starting Development

```bash
# Start both frontend and backend
pnpm dev

# Start only frontend (port 3000)
pnpm dev:frontend

# Start only backend (port 8787)
pnpm dev:backend
```

### Building

```bash
# Build all packages
pnpm build

# Build specific package
pnpm build:frontend
pnpm build:backend
```

### Type Generation

```bash
# Generate API types from OpenAPI schema (must run backend first)
pnpm generate-types
```

This command:

1. Generates types from the running backend's OpenAPI schema
2. Places them in `shared/types/api/`
3. Runs lint:fix automatically

### Testing

```bash
# Run frontend tests
pnpm --filter frontend test

# Run tests with UI
pnpm --filter frontend test:ui

# Run tests with coverage
pnpm --filter frontend test:coverage
```

### Linting & Formatting

```bash
# Check all linting/formatting issues
pnpm lint

# Fix all linting/formatting issues
pnpm lint:fix

# Run type checking across all packages
pnpm typecheck
```

The project uses:

- ESLint for code linting
- Biome for additional checks
- Prettier for code formatting
- TypeScript for type checking

### Backend Deployment

```bash
# Deploy to Cloudflare Workers
pnpm --filter backend deploy

# Generate Cloudflare bindings types
pnpm --filter backend cf-typegen
```

## Commit Message Conventions

This project uses Japanese commit messages with gitmoji format:
`<gitmoji> <type>: <message> (<#issue number>)`

Examples:

- ✨ feat: ユーザー登録機能を追加
- 🐛 fix: ログイン時のバグを修正
- 🔧 chore: CI の設定を変更
- 📝 docs: API仕様書を更新 (#52)

Common types: feat, fix, chore, docs, test, refactor, perf, ci

## Key File Locations

- `frontend/src/router.tsx` - TanStack Router configuration
- `backend/src/index.ts` - Hono API entry point
- `backend/openapi-ts.config.ts` - OpenAPI type generation config
- `shared/types/api/` - Generated API types (do not edit manually)
- `shared/constants/` - Shared constants like error codes and HTTP status

## API Development

The backend provides these development URLs:

- Health Check: http://localhost:8787/api/health
- Swagger UI: http://localhost:8787/api/swagger
- OpenAPI Spec: http://localhost:8787/api/openapi.yaml

All API routes are defined in `backend/src/routes/` and use Zod for validation with automatic OpenAPI generation.
