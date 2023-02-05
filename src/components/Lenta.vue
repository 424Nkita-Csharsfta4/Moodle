<template>
    <div id="app" class="font-roboto bg-gray-100">
        <nav class="bg-white px-6 py-4 shadow">
            <div class="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
                <div class="flex justify-between items-center">
                    <div><a href="/page" class="text-gray-800 text-xl font-bold md:text-2xl">Moodle</a></div>                   
                    <RouterLink to="/err"
                        class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Сообщения</RouterLink>
                        <RouterLink to="/page" 
                        class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Профиль</RouterLink>
                         <RouterLink to="/fullusers"
                        class="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0">Пользователи</RouterLink>
                    </div>     
            </div>
        </nav>
        <div class="px-6 py-8">
            <div class="flex justify-between container mx-auto">
                <div class="w-full lg:w-8/12">
                    <div class="flex items-center justify-between">
                        <h1 class="text-xl font-bold text-gray-700 md:text-2xl">Посты</h1>
                        <RouterLink to="/createpost"
                        class="text-xl font-bold text-gray-700 md:text-2xl">Добавить пост</RouterLink>
                        
                        <div><select
                                class="block bg-gray-300 text-gray-700 py-2 px-2 rounded-lg focus:outline-none md:py-3">
                                <option>Последнии</option>
                                <option>За неделю</option>
                            </select></div>
                    </div>
                    <div class="mt-6">
                        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                            <div class="flex justify-between items-center"><span class="font-light text-gray-600">Июнь 16,
                                    2020</span><a href="#"
                                    class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Аниме</a>
                            </div>
                            <div class="mt-2"><a href="#" class="text-2xl text-gray-700 font-bold hover:underline">Новый сезон Атаки Титанов</a>
                                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                    reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                            </div>
                            <div class="flex justify-between items-center mt-4"><a href="#"
                                    class="text-blue-500 hover:underline">Читать</a>
                                <div><a href="#" class="flex items-center"><img
                                            src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album"
                                            alt="avatar"
                                            class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                                        <h1 class="text-orange-700 font-bold hover:underline">Админ</h1>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                            <div class="flex justify-between items-center"><span class="font-light text-gray-600">Март 4,
                                    2019</span><a href="#"
                                    class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">PHP</a>
                            </div>
                            <div class="mt-2"><a href="#"
                                    class="text-2xl text-gray-700 font-bold hover:underline">Вот сижу и смотрю на него и захотелось долара</a>
                                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                    reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                            </div>
                            <div class="flex justify-between items-center mt-4"><a href="#"
                                    class="text-blue-500 hover:underline">Читать</a>
                                <div><a href="#" class="flex items-center"><img
                                            src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200"
                                            alt="avatar"
                                            class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                                        <h1 class="text-gray-700 font-bold hover:underline">Дуэйн Джонсон</h1>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                            <div class="flex justify-between items-center"><span class="font-light text-gray-600">Феврль
                                    14, 2022</span><a href="#"
                                    class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Vue</a>
                            </div>
                            <div class="mt-2"><a href="#" class="text-2xl text-gray-700 font-bold hover:underline">Vue:
                                    Что такое Pinian??</a>
                                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                    reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                            </div>
                            <div class="flex justify-between items-center mt-4"><a href="#"
                                    class="text-blue-500 hover:underline">Читать</a>
                                <div><a href="#" class="flex items-center"><img
                                            src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album"
                                            alt="avatar"
                                            class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                                        <h1 class="text-orange-700 font-bold hover:underline">Админ</h1>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                            <div class="flex justify-between items-center"><span class="font-light text-gray-600">Декабрь
                                    23, 2023</span><a href="#"
                                    class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">PHP</a>
                            </div>
                            <div class="mt-2"><a href="#"
                                    class="text-2xl text-gray-700 font-bold hover:underline">Зачем мне в PHP классы</a>
                                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                    reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                            </div>
                            <div class="flex justify-between items-center mt-4"><a href="#"
                                    class="text-blue-500 hover:underline">Читать</a>
                                <div><a href="#" class="flex items-center"><img
                                            src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album"
                                            alt="avatar"
                                            class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                                        <h1 class="text-orange-700 font-bold hover:underline">Vladislave</h1>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6">
                        <div class="max-w-4xl px-10 py-6 bg-white rounded-lg shadow-md">
                            <div class="flex justify-between items-center"><span class="font-light text-gray-600">Осень
                                    13, 2022</span><a href="#"
                                    class="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500">Laravel</a>
                            </div>
                            <div class="mt-2"><a href="#" class="text-2xl text-gray-700 font-bold hover:underline">Laravel это такой сорт колбасы я его ел вчера, очень вкусно.</a>
                                <p class="mt-2 text-gray-600">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim
                                    reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
                            </div>
                            <div class="flex justify-between items-center mt-4"><a href="#"
                                    class="text-blue-500 hover:underline">Читать</a>
                                <div><a href="#" class="flex items-center"><img
                                            src="https://sun9-west.userapi.com/sun9-12/s/v1/ig2/S4Io9X8lMZjfigRzBMP0LZsqWONDzYuLrb7EY1wwETo66uvOAyc-3EN8Q9IlWb1a-c_SxiscCaQuYAUCrGMLGmGv.jpg?size=735x919&quality=95&type=album"
                                            alt="avatar"
                                            class="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block">
                                        <h1 class="text-gray-700 font-bold hover:underline">Чертов Паша</h1>
                                    </a></div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8">
                        <ul class="flex">
                            <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg"><a href="#"
                                    class="flex items-center font-bold">назад</a></li>
                            <li
                                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                                <a href="#" class="font-bold">1</a></li>
                            <li
                                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                                <a href="#" class="font-bold">2</a></li>
                            <li
                                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                                <a href="#" class="font-bold">3</a></li>
                            <li
                                class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                                <a href="#" class="flex items-center font-bold">Вперед</a></li>
                        </ul>
                    </div>
                </div>
                <div class="-mx-8 w-4/12 hidden lg:block">
                    <div class="px-8">
                        <h1 class="mb-4 text-xl font-bold text-gray-700">Все пользователи</h1>
                        <div class="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md">
                            <ul class="-mx-4">
                                <li class="flex items-center"><img
                                        src="https://sun9-west.userapi.com/sun9-49/s/v1/ig2/0KFhmIedJJWvn9W5R3QsK_i-5Q9M-tjLdJnqkYKcauHz9MnptSVqoNusLCdyq5lb_CDv5L8LpVxjDkEUfO0NwGOG.jpg?size=1183x987&quality=95&type=album"
                                        alt="avatar" class="w-10 h-10 object-cover rounded-full mx-4">
                                    <p><a href="#" class="text-gray-700 font-bold mx-1 hover:underline">Admin

                                    </a><span class="text-gray-700 text-sm font-light">Июнь 16, 2020
                                            Пост</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                        src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200"
                                        alt="avatar" class="w-10 h-10 object-cover rounded-full mx-4">
                                    <p><a href="#" class="text-gray-700 font-bold mx-1 hover:underline">Дуэйн Джонсон</a><span class="text-gray-700 text-sm font-light">Март 4, 2019
                                            Пост</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                        src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album"
                                        alt="avatar" class="w-10 h-10 object-cover rounded-full mx-4">
                                    <p><a href="#" class="text-gray-700 font-bold mx-1 hover:underline">Vladislave</a><span class="text-gray-700 text-sm font-light">Декабрь 23, 2023</span></p>
                                </li>
                                <li class="flex items-center mt-6"><img
                                        src="https://sun9-west.userapi.com/sun9-12/s/v1/ig2/S4Io9X8lMZjfigRzBMP0LZsqWONDzYuLrb7EY1wwETo66uvOAyc-3EN8Q9IlWb1a-c_SxiscCaQuYAUCrGMLGmGv.jpg?size=735x919&quality=95&type=album"
                                        alt="avatar" class="w-10 h-10 object-cover rounded-full mx-4">
                                    <p><a href="#" class="text-gray-700 font-bold mx-1 hover:underline">Чертов Паша</a><span class="text-gray-700 text-sm font-light">Осень 13, 2022
                                            Пост</span></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-10 px-8">
                        <h1 class="mb-4 text-xl font-bold text-gray-700">Категории</h1>
                        <div class="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                            <ul>
                                <li><a href="#"
                                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                        Vue</a></li>
                                <li class="mt-2"><a href="#"
                                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                        Laravel</a></li>
                                <li class="mt-2"><a href="#"
                                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                        Anime</a></li>
                                <li class="mt-2"><a href="#"
                                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                        Clear_Code</a></li>
                                <li class="flex items-center mt-2"><a href="#"
                                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                        Chmolimorfizm</a></li>
                                <li class="flex items-center mt-2"><a href="#"
                                        class="text-gray-700 font-bold mx-1 hover:text-gray-600 hover:underline">-
                                        PHP</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-10 px-8">
                        <h1 class="mb-4 text-xl font-bold text-gray-700">Последнии посты</h1>
                        <div class="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                            <div class="flex justify-center items-center"><a href="#"
                                    class="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500">PHP</a>
                            </div>
                            <div class="mt-4"><a href="#"
                                    class="text-lg text-gray-700 font-medium hover:underline">Зачем мне в PHP классы</a></div>
                            <div class="flex justify-between items-center mt-4">
                                <div class="flex items-center"><img
                                        src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album"
                                        alt="avatar" class="w-8 h-8 object-cover rounded-full"><a href="#"
                                        class="text-gray-700 text-sm mx-3 hover:underline">Vladislave</a></div><span
                                    class="font-light text-sm text-gray-600">Декабрь 23, 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'


export default {
    name: 'app',
    data() {
        return {
            posts: [
                {
                    id: 1,
                    date: "Jun 1, 2020",
                    tag: "Laravel",
                    title: "Build Your New Idea with Laravel Freamwork.",
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
                    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80",
                    userName: "Alex John"
                },
                {
                    id: 2,
                    date: "mar 4, 2019",
                    tag: "Design",
                    title: "Accessibility tools for designers and developers",
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
                    image: "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80",
                    userName: "Jane Doe"
                },
                {
                    id: 3,
                    date: "Feb 14, 2019",
                    tag: "PHP",
                    title: "PHP: Array to Map",
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
                    image: "https://images.unsplash.com/photo-1531251445707-1f000e1e87d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=281&q=80",
                    userName: "Lisa Way"
                },
                {
                    id: 4,
                    date: "Dec 23, 2018",
                    tag: "Django",
                    title: "Django Dashboard - Learn by Coding",
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
                    image: "https://images.unsplash.com/photo-1500757810556-5d600d9b737d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=735&q=80",
                    userName: "Steve Matt"
                },
                {
                    id: 5,
                    date: "Mar 10, 2018",
                    tag: "Testing",
                    title: "TDD Frist",
                    body: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!",
                    image: "https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=373&q=80",
                    userName: "Khatab Wedaa"
                },
            ]
        }
    }
}
</script>