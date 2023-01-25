<template>
    <div class="h-full bg-gray-200 p-8">
        <div class="bg-white rounded-lg shadow-xl pb-8">
            <RouterLink to="/lenta" class=" text-black-100 hover:text-red-700 px-4 py-2 rounded text-sm space-x-2 transition duration-100">Лента</RouterLink>
            <div class="w-full h-[250px]">
                <img src="https://media4.giphy.com/media/zOvBKUUEERdNm/giphy.gif?cid=ecf05e479kbkwocaeg42o3uk4453ri78h6bx9ax4qi9tz9ur&rid=giphy.gif&ct=g"  class="w-full bgshka rounded-tl-lg rounded-tr-lg">
            </div>
            <div class="flex flex-col items-center -mt-20">
                <img src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album" class="w-20 h-20 object-cover rounded-full mx-4">
                <div class="flex items-center space-x-2 mt-5">
                    <p class="text-2xl text-orange-500 ">Мошой Никита</p>
                    <span class="bg-blue-500 rounded-full p-1" title="Verified">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </span>
                </div>
                <p class="text-gray-700">313гр</p>
                <p class="text-sm text-gray-500">Програмирование в компьютерных комплексах</p>
            </div>
            <div class="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
                <div class="flex items-center space-x-4 mt-2">
                    <button class="flex items-center bg-blue-600 hover:bg-red-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                        </svg>
                        <span>Добавитьв друзья</span>
                    </button>
                    <button class="flex items-center bg-blue-600 hover:bg-green-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                        </svg>
                        <span>Написать</span>
                    </button>
                   
                </div>
            </div>
        </div>

        <div class="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
            <div class="w-full flex flex-col 2xl:w-1/3">
                <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 class="text-xl text-gray-900 font-bold">Персональная информация</h4>
                    <ul class="mt-2 text-gray-700">
                        <li class="flex border-y py-2">
                            <span class="font-bold w-24">Полное имя:</span>
                            <span class="text-gray-700">Никита</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">ДР:</span>
                            <span class="text-gray-700">18 Sep, 1945</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Зарег:</span>
                            <span class="text-gray-700">24 Jan 2023 (1 days ago)</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Телефон:</span>
                            <span class="text-gray-700">666-777-888</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Email:</span>
                            <span class="text-gray-700">gamburger@gmail.com</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Место положение:</span>
                            <span class="text-gray-700">Japan, city:Oska</span>
                        </li>
                        <li class="flex border-b py-2">
                            <span class="font-bold w-24">Языки:</span>
                            <span class="text-gray-700">English, Русский,Japan</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex flex-col w-full 2xl:w-2/3">
                <div class="flex-1 bg-white rounded-lg shadow-xl p-8">
                    <h4 class="text-xl text-gray-900 font-bold">О бо мне</h4>
                    <p class="mt-2 text-gray-700">Меня зовут Никита я начинающий Frontend разработчик. Мои личные качества: способность достигать целей, настойчивость, стремление к профессиональному развитию. Когда работаю над каждой задачей или проектом, узнаю что-то новое, не боюсь попросить помощи и совета. Для меня важно не только набраться опыта, но и занять свое место в команде, где я могу быть полезен.</p>
                </div>
            </div>
        </div>
        <Curses/>
        <div class="bg-white rounded-lg shadow-xl p-8">
            <div class="flex items-center justify-between">
                <h4 class="text-xl text-gray-900 font-bold">Список пользователей (30)</h4>
                <a href="#" title="View All">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 hover:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </a>
            </div>
          
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-8 mt-8">
                <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200" class="w-10 h-10 object-cover rounded-full mx-4 ">
                    <p class="text-center font-bold text-sm mt-1">Дуэйн Джонсон</p>
                    <p class="text-xs text-gray-500 text-center">Скала</p>
                </a>
                <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://avatars.dzeninfra.ru/get-zen_doc/3300410/pub_631a459d8cfe570980e79013_631a45afaaf64a48b9ad7f9e/scale_1200" class="w-10 h-10 object-cover rounded-full mx-4">
                    <p class="text-center font-bold text-sm mt-1">Джефф Безос</p>
                    <p class="text-xs text-gray-500 text-center">Amazon</p>
                </a>
                <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://avatars.dzeninfra.ru/get-zen_doc/5234097/pub_631a459d8cfe570980e79013_631a45b421b4205959a0c455/scale_1200" class="w-10 h-10 object-cover rounded-full mx-4">
                    <p class="text-center font-bold text-sm mt-1">Билл Гейтс </p>
                    <p class="text-xs text-gray-500 text-center">Windows 15</p>
                </a>
                <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://avatars.dzeninfra.ru/get-zen_doc/5328841/pub_631a459d8cfe570980e79013_631a45b88385b37c8db7b882/scale_1200" class="w-10 h-10 object-cover rounded-full mx-4 ">
                    <p class="text-center font-bold text-sm mt-1">Дональд Трамп</p>
                    <p class="text-xs text-gray-500 text-center">Белый</p>
                </a>
                <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_631a459d8cfe570980e79013_631a45b9de25911ecb95f4b5/scale_1200" class="w-10 h-10 object-cover rounded-full mx-4">
                    <p class="text-center font-bold text-sm mt-1">Илон Маск</p>
                    <p class="text-xs text-gray-500 text-center">SpaceX</p>
                </a>
                <a href="#" class="flex flex-col items-center justify-center text-gray-800 hover:text-blue-600" title="View Profile">
                    <img src="https://geekville.ru/wp-content/uploads/2022/01/fit_795_547_false_crop_3656_2056_632_188_q90_1052461_ba908151eba9839b1e329bfa7.jpeg" class="w-10 h-10 object-cover rounded-full mx-4">
                    <p class="text-center font-bold text-sm mt-1">Селена Гомес</p>
                    <p class="text-xs text-gray-500 text-center">Человек</p>
                </a>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'
import Curses from './Curses.vue'
export default{
    components:{
        Curses
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
.profile{
    margin-top: 20em;
}
.bgshka{
    height: 127%;
}
</style>