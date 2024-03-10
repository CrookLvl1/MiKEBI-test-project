<template>
  <v-sheet class="app-wrapper w-screen h-screen" bg="red">
    <v-sheet class="w-100 h-100 d-flex flex-column justify-space-between pb-0 pb-sm-4">
      <template v-if="task && user">
        <taskInfo class="task-wrapper" :user="user" :task="task" />
        <taskAnswerChoose @answer-result="answerResultHandler" class="answer-choose-wrapper"
          :options="task.answer_options" :correct_option="task.correct_answer" />
      </template>

      <v-sheet v-else class="d-flex w-100 fill-height justify-center align-center">
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

  .task-wrapper {
    letter-spacing: 1px;
    max-width: 1280px;
    margin: 0 auto;
  }

  .answer-choose-wrapper {
    max-width: 1600px;
    margin: 0 auto;
    box-sizing: border-box;
  }

}

.task-icon {
  width: 20px;
  height: 20px;
}

.btn {
  min-width: 30px;
  min-height: 30px;
  display: flex;

}
</style>