'use client'

import { Mail } from 'lucide-react'

const Sidebar = () => {
  const newPosts = [
    {
      title: 'The Future of AI in Software Development',
      timeAgo: '1h ago',
      comments: 42,
    },
    {
      title: 'Why TypeScript is Taking Over Frontend Development',
      timeAgo: '2h ago',
      comments: 28,
    },
    {
      title: 'Building Scalable Systems with Microservices',
      timeAgo: '3h ago',
      comments: 35,
    },
  ]

  return (
    <aside className="w-full lg:w-80">
      <div className="rounded-lg bg-[#FAFBFC] p-6 border border-[#E8E8EB]">
        <h3 className="mb-4 text-lg font-semibold text-[#1F364D]">Newsletter</h3>
        <p className="mb-4 text-sm text-[#4F5E6B]">
          Get the latest tech news and insights delivered to your inbox.
        </p>
        <form className="space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-lg border border-[#E8E8EB] bg-white px-4 py-2 text-[#1F364D] placeholder:text-[#9CB3C9] focus:border-[#4799EB] focus:outline-none"
          />
          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4799EB] px-4 py-2 text-white hover:bg-[#5BA4ED] transition-colors"
          >
            <Mail className="h-4 w-4" />
            <span>Subscribe</span>
          </button>
        </form>
      </div>

      <div className="mt-6 rounded-lg bg-[#FAFBFC] p-6 border border-[#E8E8EB]">
        <h3 className="mb-4 text-lg font-semibold text-[#1F364D]">Newest Posts</h3>
        <div className="space-y-4">
          {newPosts.map((post, index) => (
            <div key={index} className="border-b border-[#E8E8EB] pb-4 last:border-0 last:pb-0">
              <h4 className="mb-1 font-medium text-[#1F364D] hover:text-[#4799EB] cursor-pointer">
                {post.title}
              </h4>
              <div className="flex items-center gap-3 text-sm text-[#9CB3C9]">
                <span>{post.timeAgo}</span>
                <span>•</span>
                <span>{post.comments} comments</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}

export default Sidebar