<template>
 <!-- component -->
<div class="app bg-gray-100">

<nav class="bg-white w-full flex relative shadow justify-between items-center px-8 h-20">
    <!-- logo -->
    <div class="inline-flex">
        <a  href="/lenta">
           Moodle
        </a>
        <RouterLink to="/edits" class="ml-5 text-sm leading-normal text-gray-400">Редактировать профиль</RouterLink>
    </div>

    <RouterView />
    <div class="relative hidden sm:block flex-shrink flex-grow-0">
        <input type="text" class="bg-purple-white bg-gray-100 rounded-lg border-0 p-3 w-full" placeholder="Поиск Людей" style="min-width:400px;">
        <div class="absolute top-0 right-0 p-4 pr-3 text-purple-lighter">
          
        </div>
    </div>

</nav>

<main class="grid grid-cols-1 lg:grid-cols-2 gap-6 my-12 mx-12 w-2xl container px-2 ">

    <aside class="">
    
        <div class="bg-white shadow rounded-lg p-10">
            <div class="flex flex-col gap-1 text-center items-center">
                <img class="h-32 w-32 bg-white p-2 rounded-full shadow mb-4" src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album" alt="">
                <p class="font-semibold">Мошой Никита</p>
                <div class="text-sm leading-normal text-gray-400 flex justify-center items-center">
                <svg viewBox="0 0 24 24" class="mr-1" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               ПМР Тирасполь
                </div>
            </div>
            <div class="flex justify-center items-center gap-2 my-3">
                <div class="font-semibold text-center mx-4">
                    <p class="text-black">10</p>
                    <span class="text-gray-400">Постов</span>
                </div>
                <div class="font-semibold text-center mx-4">
                    <p class="text-black">30</p>
                    <span class="text-gray-400">Друзей</span>
                </div>
            </div>
        </div>

        <div class="bg-white shadow mt-6  rounded-lg p-6">
            <h3 class="text-gray-600 text-sm font-semibold mb-4">Подписки</h3>
            <ul class="flex items-center justify-center space-x-2">
                <!-- Story #1 -->
                <li class="flex flex-col items-center space-y-2">
                    <!-- Ring -->
                    <a class="block bg-white p-1 rounded-full" href="#">
                        <img class="w-10 h-10 object-cover rounded-full mx-4" src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200">
                    </a>
                    <!-- Username -->
                    <span class="text-xs text-gray-500">
                        Дуэйн Джонсон
                    </span>
                </li>

                <!-- Story #1 -->
                <li class="flex flex-col items-center space-y-2">
                    <!-- Ring -->
                    <a class="block bg-white p-1 rounded-full" href="#">
                        <img class="w-10 h-10 object-cover rounded-full mx-4" src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album">
                    </a>
     

                    <!-- Username -->
                    <span class="text-xs text-gray-500">
                        Vladislave
                    </span>
                </li>

                <!-- Story #2 -->
                <li class="flex flex-col items-center space-y-2">
                    <!-- Ring -->
                    <a class="block bg-white p-1 rounded-full" href="#">
                        <!-- Thumbnail -->
                        <img class="w-10 h-10 object-cover rounded-full mx-4" src="https://sun9-west.userapi.com/sun9-12/s/v1/ig2/S4Io9X8lMZjfigRzBMP0LZsqWONDzYuLrb7EY1wwETo66uvOAyc-3EN8Q9IlWb1a-c_SxiscCaQuYAUCrGMLGmGv.jpg?size=735x919&quality=95&type=album">
                    </a>

                    <!-- Username -->
                    <span class="text-xs text-gray-500">
                        Чертов Паша
                    </span>
                </li>

                <!-- Story #3 -->
                <li class="flex flex-col items-center space-y-2">
                    <!-- Ring -->
                    <a class="block bg-white p-1 rounded-full" href="#">
                        <!-- Thumbnail -->
                        <img class="w-10 h-10 object-cover rounded-full mx-4" src="https://avatars.dzeninfra.ru/get-zen_doc/3300410/pub_631a459d8cfe570980e79013_631a45afaaf64a48b9ad7f9e/scale_1200">
                    </a>
        
                    <!-- Username -->
                    <span class="text-xs text-gray-500">
                        Джефф Безос
                    </span>
                </li>

                <!-- Story #4 -->
                
                <!-- Story #1 -->
                <li class="flex flex-col items-center space-y-2">
                    <!-- Ring -->
                    <a class="block bg-white p-1 rounded-full" href="#">
                        <!-- Thumbnail -->
                        <img class="w-10 h-10 object-cover rounded-full mx-4" src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_631a459d8cfe570980e79013_631a45b9de25911ecb95f4b5/scale_1200">
                    </a>
                

                    <!-- Username -->
                    <span class="text-xs text-gray-500">
                        Илон Маск
                    </span>
                </li>

            </ul>
        </div>

     

        

    </aside>

    <article class="">

    
        <div class="bg-white rounded-lg p-6">
    <div class="flex flex-col">
      <Post
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
        :content="post.content"
        :image="post.image"
        :date="post.date"
      />
    </div>
    <div class="my-4">
      <div class="mb-2">
        <input v-model="newPost.title" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5" placeholder="Заголовок поста">
      </div>
      <div class="mb-2">
        <textarea v-model="newPost.content" class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full leading-5" placeholder="Описание"></textarea>
      </div>
      <input type="file" ref="file" @change="handleFileUpload" >
    
      <div>
        <button @click="createPost" class="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
          Выложить пост
        </button>
      </div>
    </div>
  </div>
        <div class="bg-white shadow rounded-lg mb-6">
            <div class="flex flex-row px-2 py-3 mx-3">
                <div class="w-auto h-auto rounded-full">
                    <img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album">
                </div>
                <div class="flex flex-col mb-2 ml-4 mt-1">
                    <div class="text-gray-600 text-sm font-semibold">Мошой Никита</div>
                    <div class="flex w-full mt-1">
                        <div class="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                          Admin
                        </div> 
                        <div class="text-gray-400 font-thin text-xs">
                            • 30 мин назад
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b border-gray-100"></div> 
            <div class="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                <div class="grid grid-cols-6 col-span-2   gap-2  ">
                    <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img class="h-full w-full object-cover " src="https://sun9-west.userapi.com/sun9-38/s/v1/ig2/eX_zcuD4xgPlmXTRGuUrfsWLY94yRNK9bffaagKGzzgprxDn76DrKIw2se6eVWm9iUX0eftdiT5mo_h3dXa1LWpH.jpg?size=564x564&quality=95&type=album" alt="">
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-3 max-h-[14rem]">
                        <img class="h-full w-full object-cover  " src="https://sun9-west.userapi.com/sun9-3/s/v1/ig2/5Pn_k5_Up-0rDCdq672yW_q10eAoBOMJeklxr9ZRjlgZAzwn-Wavrxrv231HXeVAsJ9zVNqBMaTO5FP8vpyn_ECS.jpg?size=750x750&quality=95&type=album" alt="">
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img class="h-full w-full object-cover " src="https://sun9-east.userapi.com/sun9-57/s/v1/ig2/Hs4sHIR8OMsqMhQV0vzM_2wvp5iwCaV7A2kGWDntY2cHxyscDvbv68V8-IT_GUAtpB7Au9JkvzuJCtZQbefjtOcV.jpg?size=1280x1280&quality=95&type=album" alt="">
                    </div>
                    <div class=" overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        <img class="h-full w-full object-cover " src="https://sun9-north.userapi.com/sun9-80/s/v1/ig2/6lHV7hqXLB3bfgbD5rppdlAQwpatTAiABl62i3QbAb3GalaF_-colutQdw3VCGhx4LMyNFQUj8aTo6jCWwoOsQ31.jpg?size=1280x1280&quality=95&type=album" alt="">
                    </div>
                    <div class="relative overflow-hidden rounded-xl col-span-2 max-h-[10rem]">
                        
                        <img class="h-full w-full object-cover " src="https://sun9-north.userapi.com/sun9-80/s/v1/ig2/fuZm9V4QEVwH7o9kzVx39ctYwR1cFLRRKcBZa-TY7ZP9UcSv7rBpqgb2n0eXP_kmVtVQOerh1gjGZkdPX6EIHPIk.jpg?size=1280x1280&quality=95&type=album" alt="">
                    </div>
                </div>
            </div>
            <div class="text-gray-500 text-sm mb-6 mx-3 px-2">Аниме это топчик!!</div>
            <div class="flex justify-start mb-4 border-t border-gray-100">
                <div class="flex w-full mt-1 pt-2 pl-5">

                    <img class="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200" alt="">
                    <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album" alt="">
                    <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://avatars.dzeninfra.ru/get-zen_doc/3300410/pub_631a459d8cfe570980e79013_631a45afaaf64a48b9ad7f9e/scale_1200" alt="">
                    <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_631a459d8cfe570980e79013_631a45b9de25911ecb95f4b5/scale_1200" alt="">
                </div>
                <div class="flex justify-end w-full mt-1 pt-2 pr-5">
                    <span class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                        </svg>
                    </span>
                    <span class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                        <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="flex w-full border-t border-gray-100">
                <div class="mt-3 mx-5 flex flex-row text-xs">
                    <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Комменты:<div class="ml-1 text-gray-400 text-ms"> 10</div></div>
                    <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Просмотры: <div class="ml-1 text-gray-400 text-ms"> 30</div></div>
                </div>
                <div class="mt-3 mx-5 w-full flex justify-end text-xs">
                    <div class="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Лайков: <div class="ml-1 text-gray-400  text-ms"> 120</div></div>
                </div>
            </div>
            <div class="text-black p-4 antialiased flex">
                <img class="rounded-full h-8 w-8 mr-2 mt-1 " src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_631a459d8cfe570980e79013_631a45b9de25911ecb95f4b5/scale_1200">
                <div>
                    <div class="bg-gray-100 rounded-lg px-4 pt-2 pb-2.5">
                        <div class="font-semibold text-sm leading-relaxed">Илон Маск</div>
                        <div class="text-xs leading-snug md:leading-normal">Очень даже не плохо я тож смотрю аниме.</div>
                    </div>
                    <div class="text-xs  mt-0.5 text-gray-500">14 w</div>
                    <div class="bg-white border border-white rounded-full float-right -mt-8 mr-0.5 flex shadow items-center ">
                        <svg class="p-0.5 h-5 w-5 rounded-full z-20 bg-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a1" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#18AFFF"></stop><stop offset="100%" stop-color="#0062DF"></stop></linearGradient><filter id="c1" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0"></feColorMatrix></filter><path id="b1" d="M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z"></path></defs><g fill="none"><use fill="url(#a1)" xlink:href="#b1"></use><use fill="black" filter="url(#c1)" xlink:href="#b1"></use><path fill="white" d="M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z"></path></g></svg>
                        <svg class="p-0.5 h-5 w-5 rounded-full -ml-1.5 bg-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 16 16"><defs><linearGradient id="a2" x1="50%" x2="50%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6680"></stop><stop offset="100%" stop-color="#E61739"></stop></linearGradient><filter id="c2" width="118.8%" height="118.8%" x="-9.4%" y="-9.4%" filterUnits="objectBoundingBox"><feGaussianBlur in="SourceAlpha" result="shadowBlurInner1" stdDeviation="1"></feGaussianBlur><feOffset dy="-1" in="shadowBlurInner1" result="shadowOffsetInner1"></feOffset><feComposite in="shadowOffsetInner1" in2="SourceAlpha" k2="-1" k3="1" operator="arithmetic" result="shadowInnerInner1"></feComposite><feColorMatrix in="shadowInnerInner1" values="0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0"></feColorMatrix></filter><path id="b2" d="M8 0a8 8 0 100 16A8 8 0 008 0z"></path></defs><g fill="none"><use fill="url(#a2)" xlink:href="#b2"></use><use fill="black" filter="url(#c2)" xlink:href="#b2"></use><path fill="white" d="M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41"></path></g></svg>
                        <span class="text-sm ml-1 pr-1.5 text-gray-500">3</span>
                    </div>
                </div>
            </div>
            <div class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                <img class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album">
                <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                    <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                    <svg class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>

                    </button>
                </span>
                    <input type="search" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400" style="border-radius: 25px" placeholder="Добавить комент" autocomplete="off">
            </div>
        </div>

        <div class="bg-white shadow rounded-lg">
                <div class="flex flex-row px-2 py-3 mx-3">
                    <div class="w-auto h-auto rounded-full border-2 border-green-500">
                        <img class="w-12 h-12 object-cover rounded-full shadow cursor-pointer" alt="User avatar" src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album">
                    </div>
                    <div class="flex flex-col mb-2 ml-4 mt-1">
                        <div class="text-gray-600 text-sm font-semibold">Мошой Никита</div>
                        <div class="flex w-full mt-1">
                            <div class="text-blue-700 font-base text-xs mr-1 cursor-pointer">
                                Admin
                            </div> 
                            <div class="text-gray-400 font-thin text-xs">
                                • 4 дня назад
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-b border-gray-100"></div> 
                <div class="text-gray-400 font-medium text-sm mb-7 mt-6 mx-3 px-2">
                    <img class="rounded w-full" src="https://user-images.githubusercontent.com/103760832/201513118-186ba48a-374e-46fc-be88-bbad591932c8.png">
                </div>
                <div class="text-gray-600 font-semibold  mb-2 mx-3 px-2">Мой сервер для моского боя Express.js</div>
                <div class="text-gray-500 text-sm mb-6 mx-3 px-2">Сервер на Node.js и WebSocket ну роботает)</div>
                <div class="flex justify-start mb-4 border-t border-gray-100">
                    <div class="flex w-full mt-1 pt-2 pl-5">
                      
                        <img class="inline-block object-cover w-8 h-8 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200" alt="">
                    <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album" alt="">
                    <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://avatars.dzeninfra.ru/get-zen_doc/3300410/pub_631a459d8cfe570980e79013_631a45afaaf64a48b9ad7f9e/scale_1200" alt="">
                    <img class="inline-block object-cover w-8 h-8 -ml-2 text-white border-2 border-white rounded-full shadow-sm cursor-pointer" src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_631a459d8cfe570980e79013_631a45b9de25911ecb95f4b5/scale_1200" alt="">
                    </div>
                    <div class="flex justify-end w-full mt-1 pt-2 pr-5">
                        <span class="transition ease-out duration-300 hover:bg-blue-50 bg-blue-100 w-8 h-8 px-2 py-2 text-center rounded-full text-blue-400 cursor-pointer mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="14px" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                            </svg>
                        </span>
                        <span class="transition ease-out duration-300 hover:bg-gray-50 bg-gray-100 h-8 px-2 py-2 text-center rounded-full text-gray-100 cursor-pointer">
                            <svg class="h-4 w-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="flex w-full border-t border-gray-100">
                    <div class="mt-3 mx-5 flex flex-row text-xs">
                        <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Коменты:<div class="ml-1 text-gray-400 text-ms"> 30</div></div>
                        <div class="flex text-gray-700 font-normal rounded-md mb-2 mr-4 items-center">Просмотры: <div class="ml-1 text-gray-400 text-ms"> 60</div></div>
                    </div>
                    <div class="mt-3 mx-5 w-full flex justify-end text-xs">
                        <div class="flex text-gray-700  rounded-md mb-2 mr-4 items-center">Лайков: <div class="ml-1 text-gray-400 text-ms"> 90</div></div>
                    </div>
                </div>
                <div class="relative flex items-center self-center w-full max-w-xl p-4 overflow-hidden text-gray-600 focus-within:text-gray-400">
                    <img class="w-10 h-10 object-cover rounded-full shadow mr-2 cursor-pointer" alt="User avatar" src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album">
                    <span class="absolute inset-y-0 right-0 flex items-center pr-6">
                        <button type="submit" class="p-1 focus:outline-none focus:shadow-none hover:text-blue-500">
                        <svg class="w-6 h-6 transition ease-out duration-300 hover:text-blue-500 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>

                        </button>
                    </span>
                     <input type="search" class="w-full py-2 pl-4 pr-10 text-sm bg-gray-100 border border-transparent appearance-none rounded-tg placeholder-gray-400 focus:bg-white focus:outline-none focus:border-blue-500 focus:text-gray-900 focus:shadow-outline-blue" style="border-radius: 25px" placeholder="Post a comment..." autocomplete="off">
                </div>
            </div>

    </article>
    
</main>

</div>   
</template>

<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Post from './Post.vue';
import axios from 'axios';


interface Post {
  id: number;
  title: string;
  content: string;
  image:string;
  date: string;
  likes: number;
  comments: Comment[];
}

export default {
  components: {
    Post
  },
  data() {
    return {
        posts: [] as Post[],
        newPost: {
        title: '',
        content: '',
        image: '',
        date: ''
      }
    }
  },
  props: {
    posts: {
      type: Array as () => Post[],
      required: true
    }
  },
  
  setup(props) {
    function likePost(postId: number) {
      // Код для лайка поста
    }

    function addComment(postId: number) {
      // Код для добавления комментария
    }

    return {
      likePost,
      addComment
    }
  },
  handleFileUpload(event:any) {
   const file = event.target.files[0]
   this.newPost.image = file.path
   
},
  methods: {
    handleFileUpload(event:any) {
    this.newPost.image = URL.createObjectURL(event.target.files[0])
},
    createPost() {
      const post = {
        id: Date.now(),
        title: this.newPost.title,
        content: this.newPost.content,
        date: new Date().toLocaleString(),
        image: this.newPost.image
      }
      
      this.newPost = {
        title: '',
        content: '',
        date: '',
        image:''
      }
    },
    async uploadImage(image: File) {
    const formData = new FormData()
    formData.append('image', image)

    try {
      const response = await axios.post('/server/upload', formData)
      return response.data.imageUrl
    } catch (error) {
      console.error(error)
    }
  }


  }
}



</script>