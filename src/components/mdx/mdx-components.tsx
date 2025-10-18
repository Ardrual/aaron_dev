/**
 * Custom MDX components for blog posts
 * These components override default Markdown elements and add custom components
 * Usage: Import in MDX files or reference in blog posts (e.g., <Callout type="info">...</Callout>)
 */
import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'
import { Callout } from './callout'

export const mdxComponents: MDXComponents = {
  // Headings with anchors
  h1: ({ children, ...props }) => (
    <h1 className="text-4xl font-bold mt-8 mb-4" {...props}>
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-bold mt-6 mb-3" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-bold mt-4 mb-2" {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-bold mt-3 mb-2" {...props}>
      {children}
    </h4>
  ),
  // Paragraphs
  p: ({ children, ...props }) => (
    <p className="mb-4 leading-7" {...props}>
      {children}
    </p>
  ),
  // Links
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith('http')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href || '#'}
        className="text-blue-600 hover:text-blue-800 underline"
        {...props}
      >
        {children}
      </Link>
    )
  },
  // Images
  img: ({ src, alt, ...props }) => (
    <Image
      src={src || ''}
      alt={alt || ''}
      width={800}
      height={600}
      className="rounded-lg my-4"
      {...props}
    />
  ),
  // Code blocks
  pre: ({ children, ...props }) => (
    <pre
      className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto my-4"
      {...props}
    >
      {children}
    </pre>
  ),
  code: ({ children, ...props }) => (
    <code
      className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    >
      {children}
    </code>
  ),
  // Blockquotes
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700"
      {...props}
    >
      {children}
    </blockquote>
  ),
  // Lists
  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside mb-4 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside mb-4 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="ml-4" {...props}>
      {children}
    </li>
  ),
  // Tables
  table: ({ children, ...props }) => (
    <div className="overflow-x-auto my-4">
      <table className="min-w-full divide-y divide-gray-200" {...props}>
        {children}
      </table>
    </div>
  ),
  th: ({ children, ...props }) => (
    <th
      className="px-4 py-2 bg-gray-50 text-left text-sm font-semibold text-gray-900"
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }) => (
    <td className="px-4 py-2 text-sm text-gray-700" {...props}>
      {children}
    </td>
  ),
  // Custom components
  Callout,
}
