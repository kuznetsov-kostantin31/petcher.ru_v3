import HomePage from "./home-page";

import RegPage from "./reg-pages/reg-page/index";
import RegPage1 from  "./reg-pages/reg-page1/index";
import RegPage2 from  "./reg-pages/reg-page2/index";
import RegPage3 from  "./reg-pages/reg-page3/index";
import RegPage4 from  "./reg-pages/reg-page4/index";
import RegPage5 from  "./reg-pages/reg-page5/index";
import RegPage6 from  "./reg-pages/reg-page6/index";
import RegPage7 from  "./reg-pages/reg-page7/index";
import RegPage8 from  "./reg-pages/reg-page8/index";

import PrCrPage from "./project-pages/project-create-pages/project-create-page/index";
import PrCrPage1 from "./project-pages/project-create-pages/project-create-page1/index";
import PrCrPage2 from "./project-pages/project-create-pages/project-create-page2/index";
import PrCrPage3 from "./project-pages/project-create-pages/project-create-page3/index";
import PrCrPage4 from "./project-pages/project-create-pages/project-create-page4/index";



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
        component: RegPage7,
        name: "register7",
    },
    {
        path: "/register8",
        component: RegPage8,
        name: "register8",

    },
    {
        path: "/project_create_page",
        component: PrCrPage,
        name: "project_create_page",

    },
    {
        path: "/project_create_page1",
        component: PrCrPage1,
        name: "project_create_page1",

    }, 
    {
        path: "/project_create_page2",
        component: PrCrPage2,
        name: "project_create_page2",

    },
    {
        path: "/project_create_page3",
        component: PrCrPage3,
        name: "project_create_page3",

    },
    {
        path: "/project_create_page4",
        component: PrCrPage4,
        name: "project_create_page4",

    }
   

];