<template>
  <div class="w-full max-w-xl p-3">
     <h1 class="font-bold text-5xl text-center text-indigo-700">
     Dart
     </h1>
     <div class="bg-white p-12 rounded-lg shadow-lg w-full mt-8">
       <div v-if="idx < count">
         <p class="text-2xl font-bold">{{questions[idx]['question']}}</p>
         <label
           v-for="(answer, index) in questions[idx].answers"
           :key="index"
           :for="index"
           class="block mt-4 border border-gray-300 rounded-lg py-2 px-6 text-lg"
           :class="{'hover:bg-gray-100 cursor-pointer': selectedAnswer == '', 
                    'bg-green-200': index == questions[idx].correctAnswer && selectedAnswer === index,
                    'bg-red-200': selectedAnswer === index && index !== questions[idx].correctAnswer}"
         >

           <input
             :id="index"
             type="radio"
             class="hidden"
             :value="index"
             @change="answered($event)"
             :disabled="selectedAnswer != ''"
           />
           {{answer}}
         </label>
         <div class="mt-6 flow-root">
           <button
             @click="nextQuestion"
             v-show="selectedAnswer != '' && idx < count - 1"
             class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
           >
           Дальше
           </button>
           <button
             @click="showResults"
             v-show="selectedAnswer != '' && idx == count - 1"
             class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
           >
           Конец
           </button>
         </div>
       </div>
       <div v-else>
         <h2 class="text-bold text-3xl">Результат</h2>
         <div class="flex justify-start space-x-4 mt-6">
           <p>
             Правильные ответы:
             <span class="text-2xl text-green-700 font-bold"
               >{{correctAnswers}}</span
             >
           </p>
           <p>
             Неправильные ответы:
             <span class="text-2xl text-red-700 font-bold"
               >{{wrongAnswers}}</span
             >
           </p>
         </div>
         <div class="mt-6 flow-root">
           <button
             @click="resetQuiz"
             class="float-right bg-indigo-600 text-white text-sm font-bold tracking-wide rounded-full px-5 py-2"
           >
           Играть снова
           </button>
         </div>
       </div>
     </div>
   </div>


</template>
<script lang="ts">
export default {
  data() {
    return {
      idx: 0,
      selectedAnswer: "",
      correctAnswers: 0,
      wrongAnswers: 0,
      count: 3,
      questions: [
        {
          question:
            "Как правильно вывести значение переменной?Как правильно вывести значение переменной? void main() {var res = 6;???}",
    answers: { a: "print('Result: '.$res);", b: "print('Result: {res}');", c: "print('Result: res');", d: "print('Result: $res');" },
    correctAnswer: "b",
        },
        {
  question: "Как указать комментарий?",
    answers: { a: "# здесь комментарий", b: "/* здесь комментарий", c: "/* здесь комментарий /*", d: "// здесь комментарий" },
  correctAnswer: "d",
        },
{
  question:
  "Укажите строку, где присутствует НЕ корректный вывод информации",
    answers: { a: "print('Slash – \');", b: "print('John's');" },
  correctAnswer: "b",
        },
      ],
    };
  },
methods: {
  answered(e: any) {
    this.selectedAnswer = e.target.value;
    if (this.selectedAnswer == this.questions[this.idx].correctAnswer) {
      this.correctAnswers++;
    } else {
      this.wrongAnswers++;
    }
  },
  nextQuestion() {
    this.idx++;
    this.selectedAnswer = "";
    document.querySelectorAll("input").forEach((el) => (el.checked = false));
  },
  showResults() {
    this.idx++;
  },
  resetQuiz() {
    this.idx = 0;
    this.selectedAnswer = "";
    this.correctAnswers = 0;
    this.wrongAnswers = 0;
  },
},
}
</script>