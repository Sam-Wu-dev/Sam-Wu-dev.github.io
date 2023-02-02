<script setup lang="ts">
import { RouterView } from "vue-router";
import navbar from './components/navbar/NavBar.vue'
</script>

<template>
    <img class="fixed object-cover" src="./assets/images/mountain.jpg"/>
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
    <navbar/>
    <div class="fixed top-20 px-6 overflow-scroll w-full h-full scrollbar-hide">
      <RouterView class="ring-1"/>
    </div>
</template>

<style scoped>
  .background {
    background-image: url(./assets/images/mountain.jpg);
  }
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
/* For IE, Edge and Firefox */
  .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
</style>
