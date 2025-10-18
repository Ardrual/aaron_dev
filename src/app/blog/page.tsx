import Link from 'next/link'
import { getSortedPosts } from '@/lib/blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest blog posts',
}

export default function BlogPage() {
  const posts = getSortedPosts()

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>

        {posts.length === 0 ? (
          <p className="text-gray-600">No blog posts yet. Check back soon!</p>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition-colors">
                    {post.metadata.title}
                  </h2>
                </Link>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <time dateTime={post.metadata.date}>
                    {new Date(post.metadata.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  {post.metadata.author && (
                    <>
                      <span>•</span>
                      <span>{post.metadata.author}</span>
                    </>
                  )}
                </div>

                <p className="text-foreground/80 mb-4">{post.metadata.description}</p>

                {post.metadata.tags && post.metadata.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
