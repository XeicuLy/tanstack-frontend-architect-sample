# Tech Stack

## Frontend (frontend/)

- **Framework**: TanStack Start 1.132.9 (React-based meta-framework)
- **React**: 19.1.1 with React DOM 19.1.1
- **Router**: TanStack React Router 1.132.7
- **Styling**: TailwindCSS ^3.4.17 with PostCSS and Autoprefixer
- **Build Tool**: Vite 7.1.7 with @vitejs/plugin-react
- **Testing**: Vitest 3.2.4 with @vitest/ui and @vitest/coverage-v8
- **Test Environment**: happy-dom 18.0.1

## Backend (backend/)

- **Framework**: Hono 4.9.9 (lightweight web framework)
- **OpenAPI**: @hono/zod-openapi 1.1.3 for API documentation
- **Validation**: Zod 4.1.11 for schema validation
- **Documentation**: @hono/swagger-ui 0.5.2
- **Runtime**: Cloudflare Workers with Wrangler 4.40.2
- **Type Generation**: @hey-api/openapi-ts 0.84.3

## Shared (shared/)

- Common TypeScript types and constants
- Generated API types from OpenAPI schema
- Error code definitions and HTTP status constants

## Development Tools

- **Package Manager**: pnpm 10.18.0 (managed by Volta)
- **Node.js**: 22.20.0 (managed by Volta)
- **TypeScript**: 5.9.2 across all packages
- **Linting**: ESLint 9.36.0 with typescript-eslint 8.44.1
- **Formatting**: Prettier 3.6.2 + Biome 2.2.4
- **Git Hooks**: Husky 9.1.7 with lint-staged 16.2.3
- **Commit Linting**: commitlint with gitmoji config

## Platform

- **Target Runtime**: Cloudflare Workers (backend)
- **Development OS**: Darwin (macOS)
