import type { Post } from '~~/types/posts'


export const usePosts = () => {
  const runtime = useRuntimeConfig()


  const list = async () => {
    const data = await $fetch<Post[]>('/api/posts')
    return data
  }


  const create = async (payload: { title: string; content: string }) => {
    const res = await $fetch('/api/posts', { method: 'POST', body: payload })
    return res
  }


  return { list, create }
}