import { defineStore } from "pinia";
import axios from 'axios';
import firebaseConfig from "../firebaseConfig";
import { computed, shallowRef } from "vue";

export const useStore = defineStore('mainstore', () => {
    const task = shallowRef(null);

    const getTask = computed(() => task.value);
    //Функция трансформирует данные полученные из firestore в вид {[key: string]: string | Array<string>};
    const transformResponse = (response) => {
        const resultObject = {};

        //Объект содержащий значения ввиде {}
        const taskObject = response.data.fields;
        for (const fieldKey in taskObject) {
            const innerKey = Object.keys(taskObject[fieldKey])[0];

            switch (innerKey) {
                case 'stringValue': {
                    resultObject[fieldKey] = Object.values(taskObject[fieldKey])[0];
                    break;
                }
                case 'arrayValue': {
                    const array = Object.values(Object.values(taskObject[fieldKey])[0])[0]
                        .map(element => element.stringValue);

                    resultObject[fieldKey] = array;
                    break;
                }
            }

        }

        return resultObject;
    }

    //Данные (Tasks) хранятся в firestore database.
    const pullTask = async (taskId) => {
        try {
            const response = await axios.get(
                `https://firestore.googleapis.com/v1/projects/` +
                `${firebaseConfig.projectId}/databases/(default)/documents/tasks/${taskId}`
            );
            if (response.status === 200) {
                task.value = transformResponse(response)
                console.log(task.value);
            }

            else throw new Error(`${response.status}, ${response}`);

        } catch (err) {
            console.warn(`Произошла ошибка ${err}`);
        }
    };

    return {
        pullTask,
        getTask
    }
})