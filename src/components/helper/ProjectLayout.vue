<template>
  <div class="max-w-6xl mx-auto px-4 py-8">
    <div class="flex justify-center my-12">
      <slot name="head" />
    </div>
    <div class="my-24 mb-28 text-center">
      <h2 class="text-4xl font-bold mb-8">目標</h2>
      <p class="text-2xl">
        <slot name="target" />
      </p>
    </div>
    <div class="flex justify-center my-12">
      <div class="flex justify-between items-center w-full max-w-4xl">
        <div class="flex flex-col items-center justify-center text-center px-4 py-6 bg-white shadow-lg rounded-lg w-48 h-36">
          <h3 class="text-2xl font-bold mb-2">作者</h3>
          <p>
            <slot name="author" />
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center px-4 py-6 bg-white shadow-lg rounded-lg w-48 h-36">
          <h3 class="text-2xl font-bold mb-2">開發環境</h3>
          <p>
            <slot name="environment" />
          </p>
        </div>
        <div class="flex flex-col items-center justify-center text-center px-4 py-6 bg-white shadow-lg rounded-lg w-48 h-36">
          <h3 class="text-2xl font-bold mb-2">程式語言</h3>
          <p>
            <slot name="language" />
          </p>
        </div>
      </div>
    </div>
    <hr class="my-20 border-gray-200" />
    <slot name="free" />
    <div class="my-12 px-4">
      <h2 class="text-center text-4xl font-bold my-20">實作流程</h2>
      <slot name="process" />
    </div>
    <hr class="my-20 border-gray-200" />
    <div class="pb-20">
      <h2 class="text-center text-4xl font-bold my-20">成果展示</h2>
      <slot name="result" />
    </div>
  </div>
</template>
