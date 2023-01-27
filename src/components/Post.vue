<template>
    <div class="bg-white p-4 rounded-lg my-4">
      <h2 class="text-lg font-medium">{{ title }}</h2>
      <div class="text-gray-700">{{ content }}</div>
    
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      image:{
        type:String,
        required:true
      },
      date: {
        type: String,
        required: true
      }
    }
  }
</script>
  