# Project Overview

## Purpose

This is a TanStack Start + Hono monorepo that demonstrates modern full-stack TypeScript development. The project serves as a sample architecture for frontend applications with a robust API backend.

## Architecture

The project follows a monorepo structure with three main packages:

- **frontend/**: TanStack Start (React) application with TailwindCSS and Vitest for testing
- **backend/**: Hono API running on Cloudflare Workers with OpenAPI/Zod validation
- **shared/**: Common types and constants shared between frontend and backend

## Key Features

- **Type Safety**: End-to-end type safety from backend to frontend
- **API Documentation**: Automatic OpenAPI documentation generation with Swagger UI
- **Modern Build Tools**: Vite for frontend, Wrangler for Cloudflare Workers deployment
- **Testing**: Vitest for frontend testing with coverage and UI
- **Code Quality**: ESLint, Biome, and Prettier for consistent code style

## Development Philosophy

- Strong typing with TypeScript across all packages
- Shared types and constants to maintain consistency
- Automatic type generation from OpenAPI schemas
- Japanese commit messages with gitmoji format
- Comprehensive linting and formatting setup
