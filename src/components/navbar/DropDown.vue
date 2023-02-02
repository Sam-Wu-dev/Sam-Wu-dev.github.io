<template>
    <div class="text-xl hover:text-green-400">
        <button id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" data-dropdown-placement="bottom-start" class="focus:ring-1 focus:ring-white hover:text-green-400 font-medium rounded-lg text-xl px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{{ title }} <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
        <div id="dropdownHover" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                <li v-for="link in data">
                    <router-link :to="link.link" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-green-400">
                    {{ link.name }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import {Link} from "../../assets/class"
    defineProps({
        title:{
            type:String,
            default: "?",
        },
        data:{
            type:Array<Link>,
            default: [ new Link("a","#")]
        }
    })
</script>