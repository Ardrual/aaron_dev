/**
 * Callout component for highlighting important information in blog posts
 * Usage: <Callout type="info">Your message here</Callout>
 */
import React from 'react'

interface CalloutProps {
  children: React.ReactNode
  type?: 'info' | 'warning' | 'error' | 'success'
}

export function Callout({ children, type = 'info' }: CalloutProps) {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
    error: 'bg-red-50 border-red-200 text-red-900',
    success: 'bg-green-50 border-green-200 text-green-900',
  }

  return (
    <div className={`border-l-4 p-4 my-4 rounded ${styles[type]}`}>
      {children}
    </div>
  )
}
