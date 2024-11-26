import { type Post, type CommentType } from '../../types'
import Header from '@/app/components/Header'
import Image from 'next/image'

export default function PostPage() {
  // モックデータ
  const post: Post = {
    id: '1',
    title: '個人開発で月収50万円を達成した話',
    excerpt: 'サイドプロジェクトとして始めたアプリケーションが、予想以上の成果を上げることができました。',
    content: `
      # 始めたきっかけ
      
      普段はフリーランスエンジニアとして働いていますが、
      自分のプロダクトを作って収入を得たいと思い、個人開発を始めました。

      # 開発したもの

      飲食店向けの予約管理システムを開発しました。
      特徴は以下の通りです：
      
      - LINEと連携した予約受付
      - AIによる自動応答
      - 顧客管理機能
      
      # 収益化までの道のり
      
      最初の3ヶ月は全く収益が上がりませんでしたが、
      飲食店を直接訪問して営業を行い、少しずつユーザーを増やしていきました。
    `,
    author: {
      name: '山田太郎',
      avatar: 'https://picsum.photos/seed/taro/32/32',
    },
    imageUrl: 'https://picsum.photos/seed/success/800/400',
    votes: 423,
    comments: 89,
    timeAgo: '2日前',
    isFeatured: true,
  }

  const comments: CommentType[] = [
    {
      id: '1',
      content: '大変参考になりました！私も頑張ってみようと思います。',
      author: {
        name: '佐藤花子',
        avatar: 'https://picsum.photos/seed/hanako/32/32',
      },
      timeAgo: '1時間前',
      votes: 12,
      replies: [],
    },
    {
      id: '2',
      content: '営業方法についてもう少し詳しく知りたいです。',
      author: {
        name: '鈴木一郎',
        avatar: 'https://picsum.photos/seed/ichiro/32/32',
      },
      timeAgo: '3時間前',
      votes: 8,
      replies: [
        {
          id: '3',
          content: '私も同じように思います。営業戦略を共有していただけると嬉しいです。',
          author: {
            name: '田中美咲',
            avatar: 'https://picsum.photos/seed/misaki/32/32',
          },
          timeAgo: '2時間前',
          votes: 4,
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-[#1F364D]">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <article className="bg-[#FAFBFC] rounded-lg border border-[#E8E8EB] p-6 mb-8">
          {post.imageUrl && (
            <div className="relative w-full h-[400px] mb-6">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          )}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-12 h-12">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-[#1F364D]">{post.author.name}</h3>
              <p className="text-[#9CB3C9] text-sm">{post.timeAgo}</p>
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <div className="prose max-w-none">
            {post.content.split('\n').map((line: string, index: number) => (
              <p key={index}>{line}</p>
            ))}
          </div>
          <div className="flex items-center gap-4 mt-6">
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <span>👍</span>
              <span>{post.votes}</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
              <span>💬</span>
              <span>{post.comments}</span>
            </button>
          </div>
        </article>

        <section className="bg-[#FAFBFC] rounded-lg border border-[#E8E8EB] p-6">
          <h2 className="text-2xl font-semibold text-[#1F364D] mb-6">コメント</h2>
          <div className="space-y-6">
            {comments.map((comment: CommentType) => (
              <div key={comment.id} className="border-b border-[#E8E8EB] pb-4">
                <div className="flex items-center gap-4 mb-2">
                  <div className="relative w-8 h-8">
                    <Image
                      src={comment.author.avatar}
                      alt={comment.author.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F364D]">{comment.author.name}</h3>
                    <p className="text-[#9CB3C9] text-sm">{comment.timeAgo}</p>
                  </div>
                </div>
                <p className="mb-2">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                    <span>👍</span>
                    <span>{comment.votes}</span>
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">返信</button>
                </div>
                {comment.replies && comment.replies.length > 0 && (
                  <div className="ml-8 mt-4 space-y-4">
                    {comment.replies.map((reply: CommentType) => (
                      <div key={reply.id} className="border-l-2 border-[#E8E8EB] pl-4">
                        <div className="flex items-center gap-4 mb-2">
                          <div className="relative w-8 h-8">
                            <Image
                              src={reply.author.avatar}
                              alt={reply.author.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-semibold text-[#1F364D]">{reply.author.name}</h3>
                            <p className="text-[#9CB3C9] text-sm">{reply.timeAgo}</p>
                          </div>
                        </div>
                        <p className="mb-2">{reply.content}</p>
                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700">
                            <span>👍</span>
                            <span>{reply.votes}</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
} 