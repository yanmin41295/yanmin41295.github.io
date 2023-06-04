import { defineComponent } from 'vue';
import ConfigTable from "./ConfigTable";

export default defineComponent({
    setup() {
        const config = {
            name: {
                title: "姓名",
                query: "like"
            },
            age: {
                title: "年龄",
                query: "="
            },
            gender: {
                title: "性别",
                // todo： value 限制为对应的dict值
                query: "=",
                formType: "gender",
            },
        }
        return () => <>
            <ConfigTable name={ "config" } metas={ config }></ConfigTable>
        </>
    }

})