# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a React-based landing page for Cogintech AI, built with TypeScript, Vite, and Tailwind CSS. The project uses shadcn/ui components and integrates with Supabase for backend services.

## Development Commands

### Core Development
- `npm run dev` - Start development server on port 8080
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run build:prod` - Production build with production optimizations
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment-Specific Builds
The project supports different build modes with environment-specific configurations:
- Development: `npm run build:dev` (disables caching, enables debug features)
- Production: `npm run build:prod` (enables caching, analytics, performance monitoring)

## Architecture

### Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   └── new-landing/     # New landing page specific components
├── pages/               # Page components (routing)
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
├── integrations/        # External service integrations
│   └── supabase/        # Supabase client and types
└── main.tsx            # Application entry point
```

### Key Architecture Patterns

#### Component Organization
- UI components in `/components/ui/` follow shadcn/ui patterns
- Landing page components are modularized in `/components/new-landing/`
- Each page component corresponds to a route in `App.tsx`

#### Routing Structure
- Primary landing: `/` → `NewLanding` component
- Legacy landing: `/old-landing` → `Index` component
- Catch-all 404 handling with `NotFound` component
- Security feature: blocks URLs with `?p=` parameter (returns 401)

#### Environment Management
- Environment detection utilities in `src/lib/env.ts`
- Mode-specific configurations for API endpoints, caching, and features
- Development vs production feature flags

#### State Management
- React Query (`@tanstack/react-query`) for server state
- Local component state with React hooks
- Custom hooks for form validation and mobile detection

#### Styling System
- Tailwind CSS with custom design system
- Custom color palette (cogintech brand colors)
- CSS custom properties for theming
- shadcn/ui components with class-variance-authority

#### Backend Integration
- Supabase client in `src/integrations/supabase/`
- TypeScript types generated from Supabase schema
- Form submissions and data storage handled through Supabase

### Build Configuration

#### Vite Optimizations
- Manual chunk splitting for better caching
- Asset optimization with cache-friendly naming
- Environment-specific configurations
- Development: no caching headers, component tagging
- Production: cache headers, minification, chunk splitting

#### Bundle Organization
- `vendor`: React core libraries
- `ui`: Radix UI components  
- `router`: React Router
- `forms`: Form handling libraries
- `supabase`: Database client
- `utils`: Utility libraries

## Development Guidelines

### Component Development
- Follow shadcn/ui patterns for new UI components
- Use the established component structure in `components/new-landing/`
- Import paths use `@/` alias pointing to `src/`

### Form Handling
- Use `react-hook-form` with `zod` validation
- Custom hooks available: `useSecureForm`, `useEmailValidation`
- Supabase integration for form submissions

### Styling
- Use Tailwind utility classes
- Leverage custom CSS properties for theming
- Follow the established color system (cogintech brand colors)

### Environment Detection
- Use utilities from `src/lib/env.ts` for environment-specific behavior
- Leverage build-time constants: `__IS_DEVELOPMENT__`, `__IS_PRODUCTION__`

## Deployment

### Build Process
- Production builds are optimized with asset chunking and minification
- Environment files: `env.development` and `env.production`
- Multiple deployment targets supported (Netlify, Vercel, TimeWeb)

### Cache Strategy
- Development: no caching for immediate updates
- Production: aggressive caching with versioned assets
- Cache clearing utilities available (`clear-cache.bat`)

## Security Features
- URL parameter filtering (blocks `?p=` parameters)
- Secure form handling with validation
- Environment-based configuration isolation