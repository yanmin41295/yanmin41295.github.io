import {defineClientConfig} from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

console.log("start client enhance")
export default defineClientConfig({
    enhance: ({app, router, siteData}) => {
        app.use(ElementPlus)
    }
})
