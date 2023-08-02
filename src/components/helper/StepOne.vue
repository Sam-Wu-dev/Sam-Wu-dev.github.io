<template>
  <div class="my-10 flex flex-col py-3 px-20">
    <div class="flex items-center justify-between px-24">
      <div>
        <h3 class="text-2xl font-bold">{{ step }}</h3>
        <p class="w-60 break-words">{{ description }}</p>
      </div>
      <img :src="imageSrc" class="h-1/5 w-3/5" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  step: {
    type: String,
    default: '?'
  },
  description: {
    type: String,
    default: '?'
  },
  imageSrc: {
    type: String,
    default: '/'
  }
})
</script>
