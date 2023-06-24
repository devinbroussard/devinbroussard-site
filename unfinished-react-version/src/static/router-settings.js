import React from "react";

//Array used to store objects containing information on each page
const data = [
  {
    name: "home",
    redirect: "/",
    component: React.lazy(() => import(`../pages/HomePage`)),
  },
  {
    name: "about",
    redirect: "/about",
    component: React.lazy(() => import(`../pages/AboutPage`)),
  },
  {
    name: "experience",
    redirect: "/experience",
    component: React.lazy(() => import(`../pages/ExperiencePage`)),
  },
  {
    name: "projects",
    redirect: "/projects",
    component: React.lazy(() => import(`../pages/ProjectsPage`)),
  },
  {
    name: "contact",
    redirect: "/contact",
    component: React.lazy(() => import(`../pages/ContactPage`)),
  },
];

export default data;
