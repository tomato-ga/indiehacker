import { z } from 'zod'

// 著者のスキーマ
export const authorSchema = z.object({
  name: z.string(),
  avatar: z.string().url(),
})

// 返信コメントのスキーマ
export const replySchema = z.object({
  id: z.string(),
  content: z.string(),
  author: authorSchema,
  timeAgo: z.string(),
  votes: z.number(),
})

// コメントのスキーマ
export const commentSchema = z.object({
  id: z.string(),
  content: z.string(),
  author: authorSchema,
  timeAgo: z.string(),
  votes: z.number(),
  replies: z.array(replySchema).optional(),
})

// 投稿のスキーマ
export const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  excerpt: z.string(),
  content: z.string(),
  author: authorSchema,
  imageUrl: z.string().url(),
  votes: z.number(),
  comments: z.number(),
  timeAgo: z.string(),
  isFeatured: z.boolean().optional(),
})

// 型の抽出
export type Author = z.infer<typeof authorSchema>
export type Reply = z.infer<typeof replySchema>
export type CommentType = z.infer<typeof commentSchema>
export type Post = z.infer<typeof postSchema>

// スキーマのエクスポート（バリデーション用）
export const schemas = {
  author: authorSchema,
  reply: replySchema,
  comment: commentSchema,
  post: postSchema,
}