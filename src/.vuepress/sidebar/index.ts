import {sidebar as themeSideBar} from "vuepress-theme-hope";

export const zhSidebar = themeSideBar({
    "/": [
        "",
        {
            text: "component",
            icon: "note",
            prefix: "component/",
            children: "structure",
        },
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
