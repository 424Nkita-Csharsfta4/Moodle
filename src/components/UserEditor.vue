<template>
    <div class="flex flex-col w-full bg-white border rounded-lg md:w-4/5 border-gray-150">
			<div class="flex flex-wrap items-center justify-between border-b border-gray-200 sm:flex-no-wrap">
	            <div class="relative p-6">
                    <RouterLink to="/page">
	                <h3 class="flex text-lg font-medium leading-6 text-gray-600">
						<svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
						Moodle              </h3></RouterLink>
                        <RouterView />
	            </div>
	        </div>
			<div class="uk-card-body">
				<form @submit.prevent="updateProfile">
	<div class="relative flex flex-col px-10 py-8 lg:flex-row">
		<div class="flex justify-start w-full mb-8 lg:w-3/12 xl:w-1/5 lg:m-b0">
			<div class="relative w-32 h-32 cursor-pointer group">
				<img id="preview" src="https://media.giphy.com/avatars/default4/200h.gif" class="w-32 h-32 rounded-full ">
				<div class="absolute inset-0 w-full h-full">
				    <input type="file" id="upload" class="absolute inset-0 z-20 w-full h-full opacity-0 cursor-pointer group">
				    <input type="hidden" id="uploadBase64" name="avatar">
				    <button class="absolute bottom-0 z-10 flex items-center justify-center w-10 h-10 mb-2 -ml-5 bg-black bg-opacity-75 rounded-full opacity-75 group-hover:opacity-100 left-1/2">
						<svg class="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
					</button>
				</div>
			</div>
		</div>
		<div class="w-full lg:w-9/12 xl:w-4/5">
			<div>
				<label for="name" class="block text-sm font-medium leading-5 text-gray-700">Имя</label>
				<div class="mt-1 rounded-md shadow-sm">
					<input  type="text" name="name" placeholder="Имя" v-model="firstName" class="w-full form-input">
				</div>
			</div>
            <div>
				<label for="name" class="block text-sm font-medium leading-5 text-gray-700">Фамилия</label>
				<div class="mt-1 rounded-md shadow-sm">
					<input  type="text" name="name" placeholder="Фамиля" v-model="lastName" class="w-full form-input">
				</div>
			</div>

			<div class="mt-5">
				<label for="email" class="block text-sm font-medium leading-5 text-gray-700">Почта</label>
				<div class="mt-1 rounded-md shadow-sm">
					<input id="email" type="text" name="email" placeholder="Почта" value="nikitamosho1@mail.ru"  class="w-full form-input">
				</div>
			</div>

			<div class="mt-5">
				<label for="about" class="block text-sm font-medium leading-5 text-gray-700">О себе</label>
				<div class="mt-1 rounded-md">
					<textarea class="form-control" name="about" rows="5"></textarea>
<input type="hidden" value="text_area" name="about_type__wave_keyvalue">
				</div>
			</div>

            <div class="flex justify-end mt-4">
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Обновить профиль</button>
      </div>
		</div>
	</div>

	<input type="hidden" name="_token" value="FZP7anVdFXAx1X0JJfVI0hn2c7LtbhfcSEP9XcQz">



</form>


			</div>
		</div>
  </template>
  
  <script lang="ts">
  import axios from 'axios';
  import { RouterLink, RouterView } from 'vue-router'

  export default {
    data() {
      return {
        firstName: '',
        lastName: '',
      }
    },
    methods: {
      updateProfile() {
        const formData = new FormData();
        formData.append('first_name', this.firstName);
        formData.append('last_name', this.lastName);
  
        axios.patch('/api/profile', formData)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error);
          });
      },

    }
  }
  </script>
  