/**
 * Blog utilities for reading and managing MDX blog posts
 * Posts are stored in src/content/blog/ as .mdx files
 */
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface PostMetadata {
  title: string
  date: string
  description: string
  tags?: string[]
  author?: string
  coverImage?: string
  published?: boolean
}

export interface Post {
  slug: string
  metadata: PostMetadata
  content: string
}

const contentDirectory = path.join(process.cwd(), 'src/content/blog')

export function getAllPosts(): Post[] {
  // Check if the content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return []
  }

  const files = fs.readdirSync(contentDirectory)
  const mdxFiles = files.filter((file) => file.endsWith('.mdx'))

  const posts = mdxFiles.map((file) => {
    const slug = file.replace(/\.mdx$/, '')
    return getPostBySlug(slug)
  })

  return posts.filter((post) => post !== null) as Post[]
}

export function getPostBySlug(slug: string): Post | null {
  try {
    const filePath = path.join(contentDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      metadata: data as PostMetadata,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}

export function getSortedPosts(): Post[] {
  const posts = getAllPosts()

  // Filter out unpublished posts and sort by date (newest first)
  return posts
    .filter((post) => post.metadata.published !== false)
    .sort((a, b) => {
      const dateA = new Date(a.metadata.date)
      const dateB = new Date(b.metadata.date)
      return dateB.getTime() - dateA.getTime()
    })
}

export function getPostMetadata(slug: string): PostMetadata | null {
  const post = getPostBySlug(slug)
  return post ? post.metadata : null
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()

  posts.forEach((post) => {
    post.metadata.tags?.forEach((tag) => tags.add(tag))
  })

  return Array.from(tags).sort()
}
