<template>
    <div class="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center text-gray-100">
        <div class="flex items-center cursor-pointer">
            <h1 class="text-xl">Designer</h1>
            <span class="text-green-500 text-xl ml-2">
                <i class="bi bi-messenger"></i>
            </span>
        </div>
        <ul class="flex items-center w-auto duration-100 ease-in">
            <li class="mx-3" v-for="link in links">
                <dp :title="link.name" :data="projects" v-if="link.name=='Projects'" class="text-xl hover:text-green-400"></dp>
                <a v-else href="{{link.link}}" class="text-xl hover:text-green-400">{{ link.name }}</a>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed, watch, reactive} from 'vue';
    import dp from './DropDown.vue'
    import { Link } from '../../assets/class'
    const projects = [
        new Link("Arduino","/arduino"),
        new Link("Android","/android"),
        new Link("DeepLearning","/deeplearning"),
    ]
    const links = reactive([
        new Link("Home","/arduino"),
        new Link("About","/arduino"),
        new Link("Projects","/arduino"),
        new Link("Working On","/arduino"),
        ])
</script>
