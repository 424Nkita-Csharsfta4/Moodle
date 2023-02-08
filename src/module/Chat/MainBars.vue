<template>

  <div class="container mx-auto">
    <div class="min-w-full border rounded lg:grid lg:grid-cols-3">
      <div class="border-r border-gray-300 lg:col-span-1">
        <div class="mx-3 my-3">
          <div class="relative text-gray-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                viewBox="0 0 24 24" class="w-6 h-6 text-gray-300">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </span>
            <input type="search" class="block w-full py-2 pl-10 bg-gray-100 rounded outline-none" name="search"
              placeholder="Search" required />
          </div>
        </div>

        <ul class="overflow-auto h-[32rem]">
          <h2 class="my-2 mb-2 ml-2 text-lg text-gray-600">Чаты</h2>
          <li>
            <a
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
              <img class="object-cover w-10 h-10 rounded-full"
                src="https://sun9-west.userapi.com/sun9-45/s/v1/ig2/OTdMSPoUPfYAr74tizLw9Oafy8BL_h2ZF2XX8tQLEJPB4Wz_4AErA0PnJEtZnM2iaog9fGYT3C1sBKLd50bbZ2iA.jpg?size=480x463&quality=96&type=album" alt="username" />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600">Vladislave</span>
                  <span class="block ml-2 text-sm text-gray-600">25 назад</span>
                </div>
                <span class="block ml-2 text-sm text-gray-600">ну ты дурак</span>
              </div>
            </a>
            <a
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out bg-gray-100 border-b border-gray-300 cursor-pointer focus:outline-none">
              <img class="object-cover w-10 h-10 rounded-full"
                src="https://avatars.dzeninfra.ru/get-zen_doc/4281215/pub_631a459d8cfe570980e79013_631a45b9de25911ecb95f4b5/scale_1200" alt="username" />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600">Илон Маск</span>
                  <span class="block ml-2 text-sm text-gray-600">50 назад</span>
                </div>
                <span class="block ml-2 text-sm text-gray-600">Good night</span>
              </div>
            </a>
            <a
              class="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
              <img class="object-cover w-10 h-10 rounded-full"
                src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200" alt="username" />
              <div class="w-full pb-2">
                <div class="flex justify-between">
                  <span class="block ml-2 font-semibold text-gray-600">Дуэйн Джонс</span>
                  <span class="block ml-2 text-sm text-gray-600">6 ч.назад</span>
                </div>
                <span class="block ml-2 text-sm text-gray-600">Идем бегать</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="hidden lg:col-span-2 lg:block">
        <div class="w-full">
          <div class="relative flex items-center p-3 border-b border-gray-300">
            <img class="object-cover w-10 h-10 rounded-full"
              src="https://avatars.dzeninfra.ru/get-zen_doc/5031224/pub_631a459d8cfe570980e79013_631a45af77e4ed50aa753580/scale_1200" alt="username" />
            <span class="block ml-2 font-bold text-gray-600">Дуэйн Джонс</span>
            <span class="absolute w-3 h-3 bg-green-600 rounded-full left-10 top-3">
            </span>
          </div>
     

              <div class="messages" id="messages">
                <div class="message-container">
                  <h1 class="error" v-if="connection_error"> Ошибка подключения! </h1>
                  <div v-for="(m, idx) in messages" :key="'m-' + idx" style="clear:both">
                    <div :class="{ 'msg-from-me': m.from == 'me', 'msg-from-other': m.from == 'other' }">
                      {{ m.message }}
                    </div>
                  </div>
                </div>
              </div>
         

          <div class="flex items-center justify-between w-full p-3 border-t border-gray-300">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <div class="container">
              <h1>Чат<span class="connection_ready" v-if="connection_ready">Подключенно!</span></h1>



              <div class="send-zone">

                <input v-model="new_message" type="text" placeholder="Message"
                  class="block w-full py-2 pl-4 mx-3 bg-gray-100 rounded-full outline-none focus:text-gray-700"
                  name="message" required @keyup.enter="send_message" />
              </div>
            </div>

            <button>
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button type="submit">
              <svg class="w-5 h-5 text-gray-500 origin-center transform rotate-90" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor">
                <path
                  d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';

export default {
  name: 'MainBars',
  setup() {
    const connection_ready = ref(false);
    const connection_error = ref(false);
    const nickname = ref('');
    const websocket = ref(null);
    const new_message = ref('');
    const messages = ref([]);

    const init_chat = () => {
      if (!nickname.value) {
        nickname.value = prompt('Ваше имя для чата');
      }

      const sockets_bay_url = `wss://socketsbay.com/wss/v2/1/demo/`;
      websocket.value = new WebSocket(sockets_bay_url);

      websocket.value.onopen = () => {
        connection_ready.value = true;
      };

      websocket.value.onmessage = (evt: any) => {
        const received = JSON.parse(evt.data);
        messages.value.push({ from: 'other', message: received.message });

        const messages_div = document.getElementById('messages');
        messages_div.scrollTo({ top: messages_div.scrollHeight, behavior: 'smooth' });
      };

      websocket.value.onerror = () => {
        connection_error.value = true;
      };
    };

    const send_message = () => {
      const to_send = { from: nickname.value, message: new_message.value };
      websocket.value.send(JSON.stringify(to_send));
      messages.value.push({ from: 'me', message: new_message.value });
      new_message.value = '';
    };

    onMounted(() => {
      init_chat();
    });

    return {
      connection_ready,
      connection_error,
      new_message,
      send_message,
      messages,
    };
  },
};
</script>
