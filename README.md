# aaron_dev
My developer homepage!

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📖 Documentation

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed information about:
- Technology stack and design decisions
- Project structure
- Customization guide
- Development workflow

## ✨ Features

- **Modern Stack**: Next.js 15, React 19, TypeScript, Tailwind CSS v4
- **UI Components**: shadcn/ui for beautiful, customizable components
- **MDX Blog**: Write blog posts with Markdown + React components
- **Responsive**: Mobile-first design that works on all devices
- **Dark Mode**: Automatic dark mode based on system preferences
- **Performance**: Optimized with Turbopack and Server Components

## 🎨 Customization

All portfolio content can be easily customized in `src/app/page.tsx`. Update the sections to add your own:
- Personal information
- Projects
- Skills
- Contact details
- Social media links

## 📝 Blog

Add new blog posts by creating `.mdx` files in `src/content/blog/`:

```mdx
---
title: "Your Post Title"
date: "2025-01-20"
description: "A brief description"
tags: ["tag1", "tag2"]
author: "Your Name"
published: true
---

# Your Content Here

Write your post using Markdown, and use React components:

<Callout type="info">
This is a custom component!
</Callout>
```

Custom components available: `Callout` (types: info, warning, error, success)
