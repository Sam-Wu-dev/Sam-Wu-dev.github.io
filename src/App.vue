<script setup lang="ts">
import { RouterView } from "vue-router";
import myFooter from "./components/MyFooter.vue";
import navbar from './components/navbar/NavBar.vue'
</script>

<template>
    <!-- <img class="fixed object-cover" src="./assets/images/mountain.jpg"/>
    <div class="fixed inset-0 bg-gray-900 bg-opacity-50"></div> -->
    <navbar/>
    <div class="relative top-20">
      <RouterView/>   
      <myFooter></myFooter>
    </div>

</template>

<style scoped>
  .scrollbar-hide::-webkit-scrollbar {
      display: none;
  }
/* For IE, Edge and Firefox */
  .scrollbar-hide {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
  }
</style>

<style>
:target {
    scroll-margin-top: 150px; /* Adjust this to match the height of your navigation bar */
    }
</style>
