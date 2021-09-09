import React from "react";

//Array used to store objects containing information on each page
const data = [
  {
    name: "home",
    redirect: "/",
    component: React.lazy(() => import(`../pages/HomePage`)),
    isActive: false
  },
  {
    name: "about",
    redirect: "/about",
    component: React.lazy(() => import(`../pages/AboutPage`)),
    isActive: false
  },
  {
    name: "experience",
    redirect: "/experience",
    component: React.lazy(() => import(`../pages/ExperiencePage`)),
    isActive: false
  },
  {
    name: "projects",
    redirect: "/project",
    component: React.lazy(() => import(`../pages/ProjectsPage`)),
    isActive: false
  },
  {
    name: "contact",
    redirect: "/contact",
    component: React.lazy(() => import(`../pages/ContactPage`)),
    isActive: false
  },
];

export default data;
