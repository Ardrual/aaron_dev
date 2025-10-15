# Portfolio Architecture Documentation

## Overview
This is a modern developer portfolio built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Technology Stack

### Core Framework
- **Next.js 15.5.5** - Latest version with App Router for modern React development
- **React 19.1.0** - Latest React with improved performance
- **TypeScript 5** - Type safety and better developer experience

### Styling
- **Tailwind CSS v4** - Utility-first CSS framework with the latest features
- **@tailwindcss/postcss** - PostCSS integration for Tailwind v4
- **CSS Variables** - Design tokens for consistent theming

### UI Components
- **shadcn/ui** - High-quality, customizable UI components
  - Components are installed locally in `src/components/ui/`
  - Easily customizable and themeable
  - Built on Radix UI primitives
- **lucide-react** - Beautiful, consistent icons

### Utilities
- **class-variance-authority** - Type-safe variant management for components
- **clsx** - Utility for constructing className strings
- **tailwind-merge** - Intelligent merging of Tailwind classes

## Project Structure

```
aaron_dev/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles with shadcn/ui CSS variables
│   │   ├── layout.tsx          # Root layout with metadata
│   │   └── page.tsx            # Home page with all sections
│   ├── components/
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx      # Button component
│   │   │   └── card.tsx        # Card component
│   │   └── navigation.tsx      # Custom navigation component
│   └── lib/
│       └── utils.ts            # Utility functions (cn helper)
├── public/                     # Static assets
├── components.json             # shadcn/ui configuration
├── tsconfig.json              # TypeScript configuration
├── next.config.ts             # Next.js configuration
└── package.json               # Dependencies and scripts
```

## Key Design Decisions

### 1. Next.js App Router
- Using the App Router (not Pages Router) for modern React features
- Server Components by default for better performance
- Client Components only where needed (Navigation with scroll effects)

### 2. TypeScript
- Full type safety across the application
- Better IDE support and autocomplete
- Catch errors at compile time

### 3. Tailwind CSS v4
- Latest version with improved performance
- CSS Variables for theming
- Dark mode support built-in
- Utility-first approach for rapid development

### 4. shadcn/ui Components
- Components are copied into your project (not installed as npm package)
- Full control over component code
- Easy to customize and extend
- Consistent design system

### 5. Component Organization
- **UI Components** (`src/components/ui/`): Reusable shadcn/ui components
- **Custom Components** (`src/components/`): Application-specific components
- **App Directory** (`src/app/`): Pages and layouts following Next.js conventions

### 6. Styling Strategy
- CSS Variables for theming (supports light/dark mode)
- Tailwind utilities for component styling
- Component variants using class-variance-authority
- cn() utility for conditional class merging

## Page Structure

The portfolio is a single-page application with sections:

1. **Hero Section**
   - Introduction and call-to-action
   - Social media links
   - Smooth scroll navigation

2. **About Section**
   - Personal introduction
   - Tech stack showcase
   - Skills and experience

3. **Projects Section**
   - Featured projects in card layout
   - Project descriptions
   - Links to code and live demos

4. **Contact Section**
   - Contact information
   - Email call-to-action

5. **Navigation**
   - Fixed header with smooth scroll
   - Backdrop blur effect on scroll
   - Responsive design

## Development Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Customization Guide

### Changing Colors
Edit `src/app/globals.css` to modify CSS variables for light and dark themes.

### Adding Components
Use shadcn/ui CLI or manually copy components to `src/components/ui/`:
```bash
npx shadcn@latest add [component-name]
```

### Modifying Content
- Update `src/app/page.tsx` to change portfolio content
- Modify `src/app/layout.tsx` for metadata (title, description)

### Adding Pages
Create new files in `src/app/` directory:
- `src/app/blog/page.tsx` → `/blog`
- `src/app/about/page.tsx` → `/about`

## Performance Considerations

1. **Turbopack**: Using Turbopack for faster builds and HMR
2. **Server Components**: Default to Server Components for better performance
3. **Code Splitting**: Automatic with Next.js App Router
4. **Image Optimization**: Use Next.js Image component for images
5. **Font Optimization**: Using system fonts to avoid external font loading

## Deployment

This application is ready to deploy to:
- **Vercel** (recommended, zero-config)
- **Netlify**
- **Any Node.js hosting**

Vercel deployment:
```bash
npm run build
# Push to GitHub and connect to Vercel
```

## Future Enhancements

Potential additions:
- Blog section with MDX support
- Contact form with email integration
- Analytics integration
- Animation library (Framer Motion)
- More shadcn/ui components as needed
- CMS integration for content management
- SEO optimization
- Performance monitoring

## Notes

- The project uses system fonts instead of Google Fonts to avoid external dependencies
- Network restrictions were encountered during setup, so components were created manually
- All dependencies are pinned to specific versions for stability
- The setup is optimized for ease of modification and extension
