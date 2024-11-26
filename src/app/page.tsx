import Header from './components/Header'
import PostCard from './components/PostCard'
import Sidebar from './components/Sidebar'
import { type Post } from './types'

export default function Home() {
  const posts: Post[] = [
    {
      id: '1',
      title: 'The Rise of AI-Powered Development Tools',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way developers write and maintain code, from intelligent code completion to automated testing.',
      content: '',
      author: {
        name: 'Sarah Chen',
        avatar: 'https://picsum.photos/seed/sarah/32/32',
      },
      imageUrl: 'https://picsum.photos/seed/ai/800/400',
      votes: 324,
      comments: 56,
      timeAgo: '3 hours ago',
      isFeatured: true,
    },
    {
      id: '2',
      title: 'Web3 Development: A Comprehensive Guide',
      excerpt: 'Learn about the fundamentals of Web3 development, including blockchain integration, smart contracts, and decentralized applications.',
      content: '',
      author: {
        name: 'Michael Rodriguez',
        avatar: 'https://picsum.photos/seed/michael/32/32',
      },
      imageUrl: 'https://picsum.photos/seed/web3/800/400',
      votes: 245,
      comments: 42,
      timeAgo: '5 hours ago',
    },
    {
      id: '3',
      title: 'The Future of Cloud Computing',
      excerpt: 'Discover the latest trends in cloud computing and how they are shaping the future of software infrastructure and deployment.',
      content: '',
      author: {
        name: 'Emily Johnson',
        avatar: 'https://picsum.photos/seed/emily/32/32',
      },
      imageUrl: 'https://picsum.photos/seed/cloud/800/400',
      votes: 198,
      comments: 35,
      timeAgo: '7 hours ago',
    },
  ]

  return (
    <div className="min-h-screen bg-[#1F364D]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 space-y-6">
            <div className="bg-[#FAFBFC] text-[#1F364D] p-6 rounded-lg border border-[#E8E8EB]">
              <h2 className="text-xl font-semibold mb-4">本日のピックアップ 🔥</h2>
              {posts.filter(post => post.isFeatured).map((post) => (
                <PostCard key={post.id} {...post} />
              ))}
            </div>
            
            <div className="space-y-4">
              {posts.filter(post => !post.isFeatured).map((post) => (
                <div key={post.id} className="bg-[#FAFBFC] rounded-lg border border-[#E8E8EB] p-6">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-80 space-y-6">
            <Sidebar />
          </div>
        </div>
      </main>
    </div>
  )
}