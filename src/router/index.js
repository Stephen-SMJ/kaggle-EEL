import Vue from 'vue'
import Router from 'vue-router'
import index from "@/components/index"
import about from "@/components/about"
import assessment from "@/components/assessment";
Vue.use(Router);

const routes = [
    {
        path: "/",
        component: index,
        meta: {title: "首页"}
    },
    {
        path: "/index",
        component: index,
        meta: {title: "首页"}
    },
    {
        path: "/about",
        component: about,
        meta: {title: "About us"}
    },
    {
        path: "/assessment",
        component: assessment,
        meta: {title: "assessment"}
    }
];

//路由实例化
const router = new Router({
    mode:'history',
    routes
});

//将路由暴露出去
export default router
