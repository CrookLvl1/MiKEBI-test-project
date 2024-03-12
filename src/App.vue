<template>
  <v-sheet class="app-wrapper h-screen w-screen" bg="red">
    <v-sheet class="w-100 h-100 d-flex flex-column pb-0 pb-sm-4">
      <template v-if="task && user">
        <v-row class="task-wrapper w-100">
          <taskInfo :user="user" :task="task" />
        </v-row>
        <v-row class="answer-choose-wrapper w-100">
          <taskAnswerChoose @answer-result="answerResultHandler" :options="task.answer_options"
            :correct_option="task.correct_answer" />
        </v-row>
      </template>

      <v-sheet v-else class="d-flex w-100 h-100 justify-center align-center">
        <v-progress-circular indeterminate size="60" width="6"></v-progress-circular>
      </v-sheet>

    </v-sheet>

  </v-sheet>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useStore } from '@/store/index'
import taskAnswerChoose from '@/components/taskAnswerChoose.vue'
import taskInfo from '@/components/taskInfo.vue'

const store = useStore();
store.pullTask(0);
const user = {
  name: "Anton",
  points: 1000,
}

const answerResultHandler = result => {
  alert(
    result ? 'Правильный ответ! :)' :
      'Неправильный ответ :('
  )
}

//Объект типа {text: string, conditions: string, 
//image: string, correct_answer: string, answerOptions: Array<string>} || null
const task = computed(() => store.getTask);

</script>

<style lang="scss">
.app-wrapper {
  min-height: 100svh;
  min-width: 100svw;

  min-height: 100dvh;
  min-width: 100dvw;

  .task-wrapper {
    letter-spacing: 1px;
    max-width: 1280px;
    margin: 0 auto;
  }

  .answer-choose-wrapper {
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
    max-height: 80px;
  }

}

.task-icon {
  width: 20px;
  height: 20px;
}

.btn {
  display: flex;
  min-width: 30px;
  min-height: 30px;

}
</style>