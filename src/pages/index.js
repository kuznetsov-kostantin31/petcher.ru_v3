import HomePage from "./home-page";
import RegPage from "./reg-page";
import RegPage1 from "@/pages/reg-page1/index.js";
import RegPage2 from "@/pages/reg-page2/index.js";
import RegPage3 from "@/pages/reg-page3/index.js";
import RegPage4 from "@/pages/reg-page4/index.js";
import RegPage5 from "@/pages/reg-page5/index.js";
import RegPage6 from "@/pages/reg-page6/index.js";
import reg_page7 from "./reg-page7/ui/reg_page7.vue";
import reg_page8 from "./reg-page8/ui/reg_page8.vue";

export const routes = [
    { 
        path: "/", 
        component: HomePage, 
        name: "home", 
    },
    {
        path: "/register",
        component: RegPage,
        name: "register",
    },
    {
        path: "/register1",
        component: RegPage1,
        name: "register1",
    },
    {
        path: "/register2",
        component: RegPage2,
        name: "register2",
    },
    {
        path: "/register3",
        component: RegPage3,
        name: "register3",
    },
    {
        path: "/register4",
        component: RegPage4,
        name: "register4",
    },
    {
        path: "/register5",
        component: RegPage5,
        name: "register5",
    },
    {
        path: "/register6",
        component: RegPage6,
        name: "register6",
    },
    {
        path: "/register7",
        component: reg_page7,
        name: "register7",
    },
    {
        path: "/register8",
        component: reg_page8,
        name: "register8",

    }
   
   

];