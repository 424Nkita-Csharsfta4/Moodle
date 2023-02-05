<template>
    <div class="container p-5">
      <form @submit.prevent="addPost" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="title">
            Title
          </label>
          <input v-model="state.newPost.title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="body">
            Body
          </label>
          <textarea v-model="state.newPost.body" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="body"></textarea>
        </div>
        <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="body">
            Фото
          </label>
          <input type="file" class="block text-gray-700 font-bold mb-2" for="body" placeholder="Фото">
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-bold mb-2" for="author">
            Author
          </label>
          <input v-model="state.newPost.author" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="author" type="text">
        </div>
        <div class="flex items-center justify-between">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div v-for="post in state.posts" :key="post.id" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 class="text-lg font-bold">{{ post.title }}</h3>
        <p class="text-gray-700">{{ post.body }}</p>
        <p class="text-gray-700">Author: {{ post.author }}</p>
      </div>
    </div>
  </template>
  <script lang="ts">
  import { defineComponent, reactive } from 'vue';
  import axios from 'axios';
  
  const URL = 'https://jsonplaceholder.typicode.com/posts';
  
  export default defineComponent({
    setup() {
      const state = reactive({
        newPost: {
          title: '',
          body: '',
          author: '',
          image: null
        },
        posts: [] as any[]
      });
  
      const addPost = async () => {
        try {
          const response = await axios.post(URL, state.newPost);
          state.posts.unshift(response.data);
          state.newPost.title = '';
          state.newPost.body = '';
          state.newPost.author = '';
        } catch (error) {
          console.error(error);
        }
      };
  
      const fetchPosts = async () => {
        try {
          const response = await axios.get(URL);
          state.posts = response.data.slice(0.3);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchPosts();
  
      return {
        state,
        addPost
      };
    }
  });
  
  </script>