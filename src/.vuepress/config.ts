import {defineUserConfig} from "vuepress";
import theme from "./theme.js";
import path from 'path'
import {registerComponentsPlugin} from "@vuepress/plugin-register-components";

export default defineUserConfig({
    base: "/",
    lang: "zh-CN",
    theme,
    plugins: [
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
    ],
    // Enable it with pwa
    // shouldPrefetch: false,
});
// https://stackblitz.com/
