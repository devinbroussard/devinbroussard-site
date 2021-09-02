import React from "react";

//Array used to store objects containing information on each page
const data = [
  {
    name: "home",
    redirect: "/",
    component: React.lazy(() => import(`../pages/HomePage`)),
    classes: "button navbar-font hover-color",
  },
  {
    name: "about",
    redirect: "/about",
    component: React.lazy(() => import(`../pages/AboutPage`)),
    classes: "button navbar-font hover-color",
  },
  {
    name: "experience",
    redirect: "/experience",
    component: React.lazy(() => import(`../pages/ExperiencePage`)),
    classes: "button navbar-font hover-color",
  },
  {
    name: "projects",
    redirect: "/project",
    component: React.lazy(() => import(`../pages/ProjectsPage`)),
    classes: "button navbar-font hover-color",
  },
  {
    name: "contact",
    redirect: "/contact",
    component: React.lazy(() => import(`../pages/ContactPage`)),
    classes: "button navbar-font hover-color",
  },
];

export default data;
