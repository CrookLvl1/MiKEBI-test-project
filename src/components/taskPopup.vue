<template>
    <v-container>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <v-btn class="btn pa-2" :="activatorProps">
                    <v-img :src="bulbImage" class="task-icon"></v-img>
                </v-btn>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card title="Hint">
                    <v-btn text="Close window" @click="isActive.value = false"></v-btn>
                </v-card>
            </template>
        </v-dialog>
    </v-container>
</template>
<script setup>
import bulbImage from '@/assets/img/bulb.png';
</script>