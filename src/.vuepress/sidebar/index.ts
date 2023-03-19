import {sidebar as themeSideBar} from "vuepress-theme-hope";

export const zhSidebar = themeSideBar({
    "/": [
        "",
        "intro",
        {
            text: "拉不拉东算法笔记",
            icon: "note",
            prefix: "labuladong/",
            children: "structure",
        },
        /* {
             text: "文章",
             icon: "note",
             prefix: "posts/",
             children: "structure",
         },*/
        {
            text: "如何使用",
            icon: "creative",
            prefix: "demo/",
            link: "demo/",
            children: "structure",
        },
        "slides",
    ],
});
