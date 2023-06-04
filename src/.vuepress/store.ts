import { defineStore, createPinia } from 'pinia'
import { reactive } from "vue";
import { Dict } from "./typeings";

export default createPinia();

export const useDictStore = defineStore('dict', () => {

    const dict: Dict = reactive({
        gender: [
            { id: 1, label: "男" },
            { id: 2, label: "女" }
        ]
    })

    async function loadDictOptions(name: string) {
        if (!dict[name]) {
            // todo: 从服务器获取并存到store

        }
        return dict[name];
    }

    function getLabelById(name: string, id: number) {
        console.log({ dict: name, id: id })
        return dict[name].find(item => item.id == id);
    }

    return {
        loadDictOptions, getLabelById, dict
    }

})