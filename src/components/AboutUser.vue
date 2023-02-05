<template>
  
  <!-- component -->
<div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src="https://i.pinimg.com/564x/7f/48/e1/7f48e14ac3936564d24147fe5b1ce3a5.jpg" alt="image" loading="lazy" width="" height="">
        </div>
        <div class="md:7/12 lg:w-6/12 pb-5">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">Учись в месте с нами </h2>
          <p class="mt-6 text-gray-600">Этот ресур был создан для изучения студентов новым специальностям!</p>
          <p class="mt-4 text-gray-600">Это демо сайт для общения и очения чемуто новому.</p>
          <p class="mt-4 text-gray-600">Сайт сделан на технологиях</p>
          <p class="mt-4 text-gray-800">Frontend:Vue,TypeScript,Tailwind</p>
          <p class="mt-4 text-gray-800">Backend:Node,Php,Laravel</p>
          <RouterLink to="/lenta"  class="mt-20  text-black-100 text-blue-900 border-b-indigo-500">Перейти на сайт</RouterLink>
       
        </div>
        
      </div>
  </div>
</div>
        
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default{
    components:{
      
    },
    data(){
        
    },
   
}
</script>
