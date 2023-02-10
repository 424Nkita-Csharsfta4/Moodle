<template>
    <!-- component -->
    <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
        <div class="text-center pb-12">
            <h2 class="text-base font-bold text-indigo-600">
                Тесты
            </h2>
            <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
               Тесты по языкам программирования
            </h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <RouterLink to="/scharp">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="https://fuzeservers.ru/wp-content/uploads/8/6/5/86583c8cc7d0c6f3b4a491d8df92fa9e.jpeg"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">C#</p>
                   
                </div>
            </div></RouterLink> <RouterView/>

            <RouterLink to="/php">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="https://fuzeservers.ru/wp-content/uploads/7/d/1/7d1eca420ddb2e2be70f2e651c75440a.jpeg"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">PHP</p>
                 
                </div>
            </div></RouterLink> <RouterView/>

            <RouterLink to="/javascript">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="https://zerweb.ru/uploads/posts/2021-11/1637185052_javascript6-compressed.jpg"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">JavaScript</p>
                   
                </div>
            </div>
            </RouterLink> <RouterView/>

            <RouterLink to="/dart">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="https://swansoftwaresolutions.com/wp-content/uploads/2020/02/08.20.20-What-is-Dart-and-how-is-it-used.jpg"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">Dart</p>
                    
                </div>
            </div></RouterLink> <RouterView/>
            
            <RouterLink to="/typescript">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="https://i.pinimg.com/originals/d0/31/86/d03186fc2b77e5776eb1a659de8cf5c8.png"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">TypeScript</p>
                </div>
            </div></RouterLink> <RouterView/>

            <RouterLink to="/kotlin">
            <div class="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
                <div>
                    <img class="object-center object-cover h-auto w-full"
                        src="https://sdelanounas.ru/i/c/h/j/f_cHJvZ2xpYi5pby93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wNi9tYWlua290bGluLmpwZz9fX2lkPTExOTc1OQ==.jpeg"
                        alt="photo">
                </div>
                <div class="text-center py-8 sm:py-6">
                    <p class="text-xl text-gray-700 font-bold mb-2">Kotlin</p>
                </div>
            </div>
        </RouterLink>

        <RouterView/>
        </div>
    </section>
</template>
<script lang="ts">
import { RouterLink, RouterView } from 'vue-router'
export default{
    
}
</script>