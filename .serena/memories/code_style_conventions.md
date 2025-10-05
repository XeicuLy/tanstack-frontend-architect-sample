# Code Style Conventions

## Formatting Configuration

### Prettier (prettier.config.mjs)

- **Tab Width**: 2 spaces
- **Print Width**: 120 characters
- **Trailing Commas**: Always
- **End of Line**: LF
- **Semicolons**: Always required
- **Quotes**: Single quotes preferred

### Biome (biome.json)

- **Indent Style**: Spaces (2 width)
- **Line Width**: 120 characters
- **Line Ending**: LF
- **Quote Style**: Single quotes
- **Trailing Commas**: All
- **Semicolons**: Always
- **Import Organization**: Automatic

## TypeScript Configuration

### Frontend (frontend/tsconfig.json)

- **JSX**: react-jsx
- **Module Resolution**: Bundler
- **Target**: ESNext
- **Strict Mode**: Enabled
- **Path Aliases**:
  - `@/*` → `src/*`
  - `#shared/*` → `../shared/*`

### Backend

- Similar TypeScript configuration
- Path alias for shared: `#shared/*`

## File Structure Patterns

### Import Organization

- External dependencies first
- Internal imports grouped by type
- Relative imports last
- Automatic import organization via Biome

### Component Structure (Frontend)

- React components use PascalCase
- Files use PascalCase for components (e.g., `Index.tsx`)
- Functional components preferred
- TypeScript interfaces for props

### API Structure (Backend)

- Route handlers in `/routes` directory
- Schema definitions in `/schema` directory
- Middleware in `/middleware` directory
- OpenAPI route definitions with Zod validation

## Naming Conventions

### Functions

- camelCase for functions and variables
- Descriptive names (e.g., `createErrorResponse`, `resolveHealthError`)

### Constants

- UPPER_SNAKE_CASE for constants
- Error codes follow pattern: `ERROR_TYPES.SERVICE_UNAVAILABLE`

### Types

- PascalCase for types and interfaces
- Descriptive suffixes (e.g., `HealthErrorStatus`, `ErrorCode`)

## Error Handling Patterns

### Backend

- Custom error classes with error codes
- Structured error responses with error codes
- Type-safe error handling with Zod validation
- Consistent HTTP status mapping

### Shared Constants

- Centralized error codes in `shared/constants/errorCode.ts`
- HTTP status constants in `shared/constants/httpStatus.ts`

## Comments and Documentation

### JSDoc Comments

- Japanese comments for API descriptions in OpenAPI schemas
- English for code comments
- Function descriptions where needed

### Code Comments

- Minimal inline comments
- Self-documenting code preferred
- Comments in English for international collaboration

## Linting Rules

### ESLint

- TypeScript-ESLint rules enabled
- TailwindCSS plugin for React components (JSX/TSX files)
- Browser and Node.js globals

### Biome

- Recommended rules enabled
- Automatic import organization
- Code quality and style checks
