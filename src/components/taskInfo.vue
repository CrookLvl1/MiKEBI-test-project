<template>
    <v-container tag="section" class="d-flex flex-column h-100 pa-0">
        <v-row class="mt-sm-8 gr-8">
            <v-col cols="4" sm="12" class="d-flex justify-end order-sm-1 order-3 pr-0">
                <v-sheet>
                    <div>{{ user.name }}</div>
                    <div class="d-flex gc-1">
                        <span>{{ user.points }}</span>
                        <v-img class="task-icon" :src="coinImage" alt="coin.png"></v-img>
                    </div>
                </v-sheet>
            </v-col>

            <v-col cols="4" sm="1" class="justify-start pl-0 order-sm-2 order-1">
                <v-btn class="btn pa-2">
                    <v-img class="task-icon" :src="closeBtnImage" alt="close.png"></v-img>
                </v-btn>
            </v-col>

            <v-col cols="12" sm="10" class="order-sm-3 order-4">
                <v-sheet tag="p" class="text-center text-break">{{ task.conditions }}</v-sheet>
            </v-col>

            <v-col cols="4" sm="1" class="d-flex order-sm-4 order-2 pr-0">
                <taskPopup class="d-flex justify-center justify-sm-end pa-0" />
            </v-col>
        </v-row>

        <v-row>
            <v-col class="text-center text-break" cols="12" sm="8">
                <v-sheet tag="p" class="text-h5" style="letter-spacing: 1px!important">{{ task.text }}</v-sheet>
            </v-col>
        </v-row>

        <v-row class="h-100">
            <v-col cols="12" class="d-flex h-100">
                <v-img class="task-img" :src="task.image" />
            </v-col>
        </v-row>

    </v-container>
</template>


<script setup>
import closeBtnImage from '@/assets/img/close_btn.png'
import coinImage from '@/assets/img/coin.png'
import taskPopup from '@/components/taskPopup.vue';

const props = defineProps({
    'task': {
        required: true,
    },
    'user': {
        required: true,
    }
});


</script>


<style lang="scss" scoped>
.v-img {
    user-select: none;
}

.v-row {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
}

.v-col {
    justify-content: center;
    align-items: center;
    width: 100%;
}

.task-img {
    max-width: 600px;
    min-width: 300px;
}
</style>