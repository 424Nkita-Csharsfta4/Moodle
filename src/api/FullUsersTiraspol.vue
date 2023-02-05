<template>
    <div>
      <h2>Users</h2>
      <ul v-if="users.length">
        <li v-for="user in users" :key="user.id">
          {{ user.first_name }} {{ user.last_name }}
        </li>
      </ul>
      <p v-else>Loading...</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    setup() {
      const users = ref<any[]>([]);
  
      async function fetchUsers() {
        const response = await fetch(
          'https://api.vk.com/method/users.get?fields=photo_100,first_name,last_name&v=5.103'
        );
        const data = await response.json();
        users.value = data.response;
      }
  
      fetchUsers();
  
      return { users };
    },
  });
  </script>
  