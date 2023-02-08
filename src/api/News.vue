<template>
  <div class="flex justify-center items-center bg-slate-900">
    <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    <div class="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
      <div role="main" class="flex flex-col items-center justify-center">
        <h1 class="text-4xl font-semibold leading-9 text-center text-gray-800 dark:text-gray-50">
          Новости недели</h1>
        <p class="text-base leading-normal text-center text-gray-600 dark:text-white mt-4 lg:w-1/2 md:w-10/12 w-11/12">
          Новости по всему миру</p>
      </div>
      <div class="flux items-stretch md:mt-12 mt-8">
        <div class="lg:w-1/2">
          <div class="flux xl:gap-x-8 gap-x-6" v-for="news in newsList" :key="news.id">
            <div class="sm:w-1/2 relative">
              <div>
                <h2 class="text-xl mt-5 mb-5 font-semibold 5 text-white"> {{ news.title }}</h2>
                <div class="absolute bottom-0 left-0 p-6">
                  <a href="javascript:void(0)"
                    class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                    <p class="pr-2 text-sm font-medium leading-none">Read More</p>
                    <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </a>
                </div>
              </div>
              <img :src="news.urlToImage" class="w-full" alt="news image">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

const API_KEY = "3f3f17eb24684c8894d0e6ecc143aade";

export default {
  setup() {
    const newsList = ref([]);

    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
        );
        const data = await response.json();
        newsList.value = data.articles;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(fetchNews);

    return {
      newsList
    };
  }
};
</script>
<style>
.flux {
  display: flex;
  justify-content: space-around;
}
</style>
