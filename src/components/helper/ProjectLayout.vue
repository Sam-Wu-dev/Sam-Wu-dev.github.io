<template>
  <div class="relative px-24">
    <div class="relative my-24">
      <slot name="head" />
    </div>
    <div class="relative my-24">
      <h2 class="pb-8 text-center text-4xl font-bold">目標</h2>
      <p class="text-center text-2xl">
        <slot name="target" />
      </p>
    </div>
    <div class="relative my-24">
      <div class="flex justify-between px-72">
        <div class="flex h-36 w-48 flex-col items-center justify-center text-center">
          <h3 class="pb-2 text-2xl font-bold">作者</h3>
          <p class="break-words">
            <slot name="author" />
          </p>
        </div>
        <div class="flex h-36 w-48 flex-col items-center justify-center text-center">
          <h3 class="pb-2 text-2xl font-bold">開發環境</h3>
          <p class="break-words">
            <slot name="environment" />
          </p>
        </div>
        <div class="flex h-36 w-48 flex-col items-center justify-center text-center">
          <h3 class="pb-2 text-2xl font-bold">程式語言</h3>
          <p class="break-words">
            <slot name="language" />
          </p>
        </div>
      </div>
    </div>
    <hr class="my-20 border-gray-200" />
    <div class="relative my-24 px-20">
      <h2 class="my-20 text-center text-4xl font-bold">實作流程</h2>
      <slot name="process" />
    </div>
    <hr class="my-20 border-gray-200" />
    <div class="relative pb-20">
      <h2 class="my-20 text-center text-4xl font-bold">成果展示</h2>
      <slot name="result" />
    </div>
  </div>
</template>
