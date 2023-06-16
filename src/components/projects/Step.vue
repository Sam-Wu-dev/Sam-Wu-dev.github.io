<template>
    <div class="flex flex-col my-10 py-3 px-20">
    <div class="flex items-center justify-between px-60">
        <div>
        <h3 class="text-2xl">{{ step }}</h3>
        <p class="break-words w-40">{{ description }}</p>
        </div>
        <img :src="imageSrc" class="h-50 w-200" />
    </div>
    </div>
</template>

<script lang="ts" setup>
    defineProps({
        step:{
            type:String,
            default: "?",
        },
        description:{
            type:String,
            default: "?",
        },
        imageSrc:{
            type:String,
            default: "/",
        },
    })
</script>