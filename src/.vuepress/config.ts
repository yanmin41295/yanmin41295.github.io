import { defineUserConfig } from "vuepress";
import theme from "./theme";
import * as path from 'path'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import viteBundler from "@vuepress/bundler-vite";
import vueJsx from '@vitejs/plugin-vue-jsx';
import vue from "@vuepress/bundler-vite";

// import 'ant-design-vue/dist/antd.less'
export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    theme,
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
            componentsPatterns: [ "*.vue", "**.tsx" ],
        }),
    ],
    // Enable it with pwa
    // shouldPrefetch: false,
    bundler: viteBundler({
        viteOptions: {
            plugins: [
                vue(),
                vueJsx(),
            ],
            server: {
                proxy: {
                    "/api": {
                        target: "http://localhost:7000",
                        changeOrigin: true,
                        rewrite: (path) => {
                            console.log(path)
                            return path.replace(/^\/api/, "")
                        },
                    },
                },
            },

        },
        vuePluginOptions: {},
    }),
});
// https://stackblitz.com/
