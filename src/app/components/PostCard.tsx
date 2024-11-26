'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpCircle, MessageCircle, Share2 } from 'lucide-react'

interface PostCardProps {
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
  }
  imageUrl?: string
  votes: number
  comments: number
  timeAgo: string
  isFeatured?: boolean
}

const PostCard = ({
  title,
  excerpt,
  author,
  imageUrl,
  votes,
  comments,
  timeAgo,
  isFeatured = false,
}: PostCardProps) => {
  return (
    <Link href={`/posts/${encodeURIComponent(title)}`} className="block">
      <article
        className={`rounded-lg border bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${
          isFeatured ? 'border-yellow-200 bg-yellow-50' : ''
        }`}
      >
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <button className="group">
              <ArrowUpCircle className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            </button>
            <span className="text-sm font-medium text-gray-700">{votes}</span>
          </div>
          
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Image
                src={author.avatar}
                alt={author.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              <span className="text-sm text-gray-600">
                Posted by {author.name} • {timeAgo}
              </span>
            </div>
            
            <h2 className="mb-2 text-xl font-semibold text-gray-900">{title}</h2>
            <p className="mb-4 text-gray-600">{excerpt}</p>
            
            {imageUrl && (
              <div className="mb-4 aspect-video relative overflow-hidden rounded-lg">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            
            <div className="flex gap-4">
              <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                <MessageCircle className="h-5 w-5" />
                <span className="text-sm">{comments}</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500">
                <Share2 className="h-5 w-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard