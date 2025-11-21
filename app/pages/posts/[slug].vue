<template>
  <div class="max-w-3xl mx-auto p-6">
    <h1 class="text-3xl mb-2">{{ post?.title }}</h1>
    <p class="text-sm text-muted mb-6">{{ post?.createdAt }}</p>
    <div v-html="html"></div>
  </div>
</template>


<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import type { Post } from '~~/types/posts';


const md = new MarkdownIt()
const route = useRoute()
const slug = route.params.slug as string
const post = ref<Post | null>(null)
const html = ref('')


onMounted(async () => {
  const res: any = await $fetch('/api/posts')
  const posts: Post[] = res.data
  const found = posts.find(p => p.slug === slug)
  if (found) {
    post.value = found
    html.value = md.render(found.content)
  }
})
</script>