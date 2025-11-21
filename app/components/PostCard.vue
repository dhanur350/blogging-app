<template>
  <article class="p-4 border rounded">
    <h2 class="text-xl font-semibold">
      <NuxtLink :to="`/post/${post.slug}`">{{ post.title }}</NuxtLink>
    </h2>
    <p class="text-sm text-muted">{{ post.createdAt || new Date().getDay() }}</p>
    <p class="mt-2">{{ post.excerpt }}</p>
  </article>
</template>


<script setup lang="ts">
import type { Post } from '~~/types/posts'
const props = defineProps<{ post: Post }>()
</script>