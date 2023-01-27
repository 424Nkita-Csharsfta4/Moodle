<template>
    <div class="h-full bg-gray-200 p-8">
        <div class="bg-white rounded-lg shadow-xl pb-8">
         
            <div class="bgsh w-full h-[250px]">
               
            </div>
            <div class="flex flex-col items-center -mt-20">
                <img src="https://media0.giphy.com/media/zOvBKUUEERdNm/giphy.gif?cid=ecf05e47a3axxz63e5bctlhmml85l82mp9wh5smx7pgcd9vq&rid=giphy.gif&ct=g" class="w-20 h-20 object-cover rounded-full mx-4">
                <div class="flex items-center space-x-2 mt-5">
                    <p class="text-2xl text-orange-500 ">Moodle Social</p>
                    <span class="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                </div>
                <p class="text-gray-700">313гр</p>
              
            </div>
            
        </div>

        <div class="my-4  flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">

            <div class="flex flex-col w-full 2xl:w-2/3">
                <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                    
                    <h4 class="text-xl text-gray-900 font-bold">О бо мне</h4> <img src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album" class="w-20 h-20 object-cover rounded-full mx-4">
                    <p class="mt-2 text-gray-700">Меня зовут Никита я начинающий Frontend разработчик. Мои личные качества: способность достигать целей, настойчивость, стремление к профессиональному развитию. Когда работаю над каждой задачей или проектом, узнаю что-то новое, не боюсь попросить помощи и совета. Для меня важно не только набраться опыта, но и занять свое место в команде, где я могу быть полезен.</p>
                </div>
                <div class="mt-2 mb-2 flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 class="text-xl text-gray-900 font-bold">О бо мне</h4> <img src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album" class="w-20 h-20 object-cover rounded-full mx-4">
                    <p class="mt-2 text-gray-700">Меня зовут Влад я начинающий Bekend разработчик. Мои личные качества: способность достигать целей, настойчивость, стремление к профессиональному развитию. Когда работаю над каждой задачей или проектом, узнаю что-то новое, не боюсь попросить помощи и совета. Для меня важно не только набраться опыта, но и занять свое место в команде, где я могу быть полезен.</p>
                </div>
                <div class=" bg-gray-900 flex flex-col justify-center relative overflow-hidden sm:py-12">
  <div class="max-w-7xl mx-auto">
    <div class="relative group">
      <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
      <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <svg class="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
        </svg>
        <div class="space-y-2 pt-2">
         
          <RouterLink to="/lenta"  class="mt-15 text-black-100 hover:text-red-700 px-4 py-2">Перейти к ленте</RouterLink>
        </div>
      </div>
    </div>
  </div>
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
    DATA_SET_VERTICAL_BAR_CHART_1(){
        [68.106, 26.762, 94.255, 72.021, 74.082, 64.923, 85.565, 32.432, 54.664, 87.654, 43.013, 91.443]
    },
    labels_vertical_bar_chart(){
        ['January', 'February', 'Mart', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']
    }
   
}
</script>
<style>
.bgsh{
    background: linear-gradient(45deg, rgba(103, 0, 31, .8), rgba(34, 101, 163, .5)), url(https://sun9-east.userapi.com/sun9-31/s/v1/ig2/_DWyBwebczJdtY2QZIRFH3gOku24OQYpelASbedOERQ_FKm0bZworvyJk6cjKHCh6ON3hKmuAGLlMzkpY2fp_OAq.jpg?size=1080x1080&quality=95&type=album); 
  background-size: cover;
}
.profile{
    margin-top: 20em;
}
.bgshka{
    height: 127%;
}
</style>