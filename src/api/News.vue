<template>
  <div class="flux xl:gap-x-8 gap-x-6 bg-slate-800" v-for="news in newsList" :key="news.id">
    <div class="sm:w-1/2 relative">
      <div>
        <h1 class="text-xl mt-5 mb-5 font-semibold text-white">Ности в мире</h1>
        <h2 class="text-xl mt-5 mb-5 font-semibold text-white">{{ news.title }}</h2>
        <div class="absolute bottom-0 left-0 p-6">
          <a href="#"
            class="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
            <p class="pr-2 text-sm font-medium leading-none">Read More</p>
            <svg class="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <img :src="news.urlToImage || defaultImage" class="w-full" alt="news image">
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";

const API_KEY = "3f3f17eb24684c8894d0e6ecc143aade";
const defaultImage = "https://via.placeholder.com/640x360";

export default {
  setup() {
    type News = {
      title: string;
      urlToImage: string;
      id: string;
    };

    const newsList = ref<News[]>([]);

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
    console.log(fetchNews());
   
    onMounted(fetchNews);

    return {
      newsList,
      defaultImage
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



