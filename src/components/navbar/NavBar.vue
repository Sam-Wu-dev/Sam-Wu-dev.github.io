<template>
  <div
    class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between border-b bg-gray-100 px-12 py-4 text-gray-900"
  >
    <div class="flex cursor-pointer items-center">
      <a href="https://github.com/Sam-Wu-dev" class="flex items-center" target="blank">
        
        <img src="../../assets/images/ionia.jpg" class="mr-3 w-8 h-8 rounded-full"/>

        <h1 class="text-xl">Sam-Wu</h1>
        <!-- <span class="ml-2 text-xl text-gray-900">
          <i class="bi bi-github"></i>
        </span> -->
      </a>
    </div>
    <ul class="flex w-auto items-center duration-100 ease-in">
      <li class="mx-3" v-for="link in links" :key="link.name">
        <dp :title="link.name" :data="projects" v-if="link.name == 'Projects'"></dp>
        <router-link v-else :to="link.link" class="text-xl hover:text-blue-700">{{
          link.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import dp from './DropDown.vue'
import { Link } from '../../assets/class'
const projects = [
  new Link('Arduino音樂盒', '/arduino'),
  new Link('OpenGL渲染器', '/opengl'),
  new Link('Matlab車牌辨識', '/licenseplaterecognition'),
  new Link('大學專題', '/ninjastrikemaster')
]
const links = reactive([
  new Link('Home', '/'),
  new Link('Projects', '#')
])
</script>
