<template>
  <div class="max-w-2xl mx-auto p-6">
    <h2 class="text-2xl mb-4">Create post</h2>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label class="block">Title</label>
        <input v-model="title" class="w-full border p-2" />
      </div>
      <div class="mb-3">
        <label class="block">Content (Markdown)</label>
        <textarea v-model="content" rows="10" class="w-full border p-2"></textarea>
      </div>
      <button class="btn" type="submit">Publish</button>
    </form>
    <p v-if="message" class="mt-4">{{ message }}</p>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePosts } from '~/composable/usePosts'


const title = ref('')
const content = ref('')
const message = ref('')
const router = useRouter()
const { create } = usePosts()


const save = async () => {
  if (!title.value || !content.value) {
    message.value = 'Title and content are required.'
    return
  }
  const res: any = await create({ title: title.value, content: content.value })
  if (res?.success) {
    message.value = 'Published ✓'
    // navigate to home
    router.push('/')
  } else {
    message.value = res?.message || 'Failed to create post'
  }
}
</script>