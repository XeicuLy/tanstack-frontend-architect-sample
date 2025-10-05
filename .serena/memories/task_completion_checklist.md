# Task Completion Checklist

## Required Steps After Completing Any Code Changes

### 1. Linting and Formatting

```bash
# Run comprehensive linting and formatting check
pnpm lint:fix
```

This command runs:

- `pnpm eslint:fix` - Fixes ESLint issues
- `pnpm biome:fix` - Fixes Biome issues
- `pnpm prettier:fix` - Fixes Prettier formatting
- `pnpm typecheck` - Validates TypeScript types

### 2. Type Generation (When Backend Changes Made)

```bash
# If backend API changes were made, regenerate types
pnpm generate-types
```

**Required when:**

- Adding new API endpoints
- Modifying existing API schemas
- Changing Zod validation schemas
- Updating OpenAPI documentation

### 3. Testing (Frontend Changes)

```bash
# Run frontend tests
pnpm --filter frontend test

# For comprehensive testing with coverage
pnpm --filter frontend test:coverage
```

### 4. Build Verification

```bash
# Verify all packages build successfully
pnpm build
```

**Run individually if needed:**

```bash
pnpm build:frontend
pnpm build:backend
```

## Quality Checks Before Committing

### Code Quality

- [ ] All ESLint rules pass
- [ ] Biome checks pass
- [ ] Prettier formatting is applied
- [ ] TypeScript compilation succeeds without errors

### Testing

- [ ] Frontend tests pass (if applicable)
- [ ] New functionality is tested (if applicable)
- [ ] No breaking changes to existing tests

### Documentation

- [ ] API changes are reflected in OpenAPI documentation
- [ ] Comments are updated where necessary
- [ ] CLAUDE.md is updated if development commands change

## Commit Message Format

Use Japanese commit messages with gitmoji:

```
<gitmoji> <type>: <message in Japanese> (<#issue number>)
```

**Example:**

```
✨ feat: ユーザー登録機能を追加
🐛 fix: ログイン時のバグを修正
🔧 chore: CI の設定を変更
📝 docs: API仕様書を更新 (#52)
```

**Common types:**

- `feat` - New features
- `fix` - Bug fixes
- `chore` - Maintenance tasks
- `docs` - Documentation updates
- `test` - Testing
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `ci` - CI/CD changes

## Pre-commit Hooks

The project uses Husky and lint-staged for automated quality checks:

- Automatic linting and formatting on staged files
- Commit message validation with commitlint
- Type checking before commits

## Emergency Bypass (Use Sparingly)

If urgent fixes are needed and checks are failing:

```bash
# Skip pre-commit hooks (NOT RECOMMENDED)
git commit --no-verify -m "🚨 hotfix: urgent fix description"
```

**Only use when:**

- Production is down and fix is critical
- Pre-commit hooks are broken due to infrastructure issues
- Planning to immediately follow up with proper fix

## Development Environment Health Check

Periodically verify development environment:

```bash
# Check if backend is accessible
curl http://localhost:8787/api/health

# Verify frontend is running
curl http://localhost:3000

# Check API documentation
open http://localhost:8787/api/swagger
```
