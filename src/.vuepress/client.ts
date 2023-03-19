import {defineClientConfig} from '@vuepress/client'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


console.log("start client enhance")
export default defineClientConfig({
    enhance: ({app, router, siteData}) => {
        app.use(Antd)
    }
})
