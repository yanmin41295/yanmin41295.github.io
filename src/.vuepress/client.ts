import { defineClientConfig } from '@vuepress/client'
import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
import 'ant-design-vue/lib/style/index';
import store from "./store";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.use(Antd);
        app.use(store)
    },
})
