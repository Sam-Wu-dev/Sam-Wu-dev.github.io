<template>
  <div class="text-xl hover:text-blue-700">
    <button
      id="dropdownHoverButton"
      data-dropdown-toggle="dropdownHover"
      data-dropdown-trigger="hover"
      data-dropdown-placement="bottom-start"
      class="inline-flex items-center rounded-lg px-4 py-2.5 text-center text-xl font-medium hover:text-blue-400 focus:ring-1 focus:ring-black dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
    >
      {{ title }}
      <svg
        class="ml-2 h-4 w-4"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    </button>
    <div
      id="dropdownHover"
      class="z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownHoverButton"
      >
        <li v-for="link in data" :key="link.name">
          <router-link
            :to="link.link"
            class="block px-4 py-2 hover:bg-gray-100 hover:text-blue-700 dark:hover:bg-gray-600"
          >
            {{ link.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Link } from '../../assets/class'
defineProps({
  title: {
    type: String,
    default: '?'
  },
  data: {
    type: Array<Link>,
    default: [new Link('a', '#')]
  }
})
</script>
