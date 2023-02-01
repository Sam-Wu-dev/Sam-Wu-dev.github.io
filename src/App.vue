<script setup lang="ts">
import { RouterView } from "vue-router";
import navbar from './components/navbar/NavBar.vue'
</script>

<template>
    <img class="fixed object-cover" src="./assets/images/mountain.jpg"/>
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50"></div>
    <navbar/>
    <div class="fixed top-20 px-6 py-4">
      <RouterView/>
    </div>
</template>

<style scoped>
  .background {
    background-image: url(./assets/images/mountain.jpg);
  }
</style>
