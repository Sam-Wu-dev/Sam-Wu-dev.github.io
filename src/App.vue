<script setup lang="ts">
import { RouterView } from "vue-router";
import myFooter from "./components/MyFooter.vue";
import navbar from "./components/navbar/NavBar.vue";
</script>

<template>
  <navbar />
  <div class="relative top-20">
    <RouterView />
    <myFooter></myFooter>
  </div>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

<style>
:target {
  scroll-margin-top: 150px; /* Adjust this to match the height of your navigation bar */
}
</style>
