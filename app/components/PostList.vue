<template>
  <div class="grid gap-4">
    <PostCard v-for="p in posts" :key="p.id" :post="p" />
  </div>
</template>


<script setup lang="ts">
import PostCard from '~/components/PostCard.vue'
import type { Post } from '~~/types/posts'
const props = defineProps<{ posts: Post[] }>()
</script>