<template>
    <v-container class="ga-0 w-screen bg-grey-lighten-1">
        <v-row class="ma-0 pa-0 d-flex gr-2 gc-4 justify-space-between align-center h-100">
            <v-col class="custom-radio pa-0" v-for="option in options" :key="option">
                <label class="pa-2" :class="{ 'bg-green': chosenAnswer === option }">
                    <input v-model="chosenAnswer" :value="option" name="answer" type="radio">
                    <span class="text-center">{{ option }}</span>
                </label>
            </v-col>
            <v-col cols="3" md="2" class="pa-0 h-100" style="max-width: 240px;">
                <button @click="checkAnswerHandler" class="pa-2">Check</button>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps({
    'options': {
        required: true,
    },
    'correct_option': {
        required: true,
    }
})

const emit = defineEmits(['answer-result']);

const chosenAnswer = ref(null);
const checkAnswerHandler = () => {
    if (chosenAnswer.value === null) {
        alert('Сначала выберите ответ');
        return;
    }

    emit('answer-result', chosenAnswer.value === props.correct_option);
    chosenAnswer.value = null;
}

</script>

<style lang="scss" scoped>
//grey-lighten-3
$btnColor: #EEEEEE;
$btnShadow: #616161;

$answerBtnHover: #8BC34A;
$answerBtnActive: #008000;

$checkBtnHover: #FFAB91;
$checkBtnActive: #FF8A65;

button {
    height: 100%;
}

.v-container {
    border-radius: 2px;
}

button,
.custom-radio {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 6px;

    box-sizing: border-box;
    user-select: none;

    background-color: $btnColor;
    box-shadow: 0 4px 0 0 $btnShadow;

    transition: all 150ms ease-out;
    cursor: pointer;

    &:active {
        box-shadow: 0 0 0 0 $btnShadow;
    }
}

button {
    &:hover {
        background-color: $checkBtnHover;
    }

    &:active {
        background-color: $checkBtnActive;
    }
}

.custom-radio {
    display: flex;
    text-align: center;
    font-weight: 600;
    font-size: 1.25rem;

    label {
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    input {
        visibility: hidden;
        user-select: none;
        // pointer-events: none;
        width: 0;
        height: 0;
    }

    &:hover {
        background-color: $answerBtnHover;
    }

    &:active {
        background-color: $answerBtnActive;
    }
}
</style>