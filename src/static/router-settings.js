import React from "react";

//Array used to store objects containing information on each page
const data = [
  {
    name: "home",
    redirect: "/",
    linkTo: React.lazy(() => import(`../pages/HomePage`)),
  },
  {
    name: "about",
    redirect: "/about",
    linkTo: React.lazy(() => import(`../pages/AboutPage`)),
  },
  {
    name: "experience",
    redirect: "/experience",
    linkTo: React.lazy(() => import(`../pages/ExperiencePage`)),
  },
  {
    name: "projects",
    redirect: "/project",
    linkTo: React.lazy(() => import(`../pages/ProjectsPage`)),
  },
  {
    name: "contact",
    redirect: "/contact",
    linkTo: React.lazy(() => import(`../pages/ContactPage`)),
  },
];

export default data;
