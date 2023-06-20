<template>
    <div class="fixed top-0 left-0 right-0 px-6 py-4 flex justify-between items-center text-gray-900 z-10 bg-gray-100 border-b">
        <div class="flex items-center cursor-pointer">
            <a href="https://github.com/Sam-Wu-dev" class="flex items-center" target="blank">
                <h1 class="text-xl">Sam-Wu</h1>
                <span class="text-gray-900 text-xl ml-2">
                    <i class="bi bi-github"></i>
                </span>
            </a>
        </div>
        <ul class="flex items-center w-auto duration-100 ease-in">
            <li class="mx-3" v-for="link in links">
                <dp :title="link.name" :data="projects" v-if="link.name=='Projects'"></dp>
                <router-link v-else :to="link.link" class="text-xl hover:text-blue-700">{{ link.name }}</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
    import { reactive} from 'vue';
    import dp from './DropDown.vue'
    import { Link } from '../../assets/class'
    const projects = [
        new Link("Arduino音樂盒","/arduino"),
        new Link("Android通訊軟體","/android"),
        new Link("DeepLearning","/deeplearning"),
        new Link("大學專題","/ninjastrikemaster"),
        new Link("Matlab車牌辨識","/licenseplaterecognition"),
    ]
    const links = reactive([
        new Link("Home","/"),
        new Link("About","#"),
        new Link("Projects","#"),
        new Link("Working On","#"),
        ])
</script>
