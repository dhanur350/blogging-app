<template>
  <div class="max-w-3xl mx-auto p-6">
    <header class="flex justify-between items-center mb-6">
      <h1 class="text-3xl">My Blog</h1>
      <NuxtLink to="/admin/create" class="btn">New Post</NuxtLink>
    </header>


    <PostList :posts="posts" />
  </div>
</template>


<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PostList from '~/components/PostList.vue'
import { usePosts } from '~/composable/usePosts'
import type { Post } from '~~/types/posts'


const posts = ref<Post[]>([])
const { list } = usePosts()


onMounted(async () => {
  const res = await list()
  posts.value = res
})
</script>