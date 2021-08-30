import React from "react";

//Array used to store objects containing information on each page
const data = [
  {
    name: "home",
    redirect: "/",
    className: "active",
    linkTo: React.lazy(() => import(`../pages/HomePage`)),
  },
  {
    name: "about",
    redirect: "/about",
    className: "",
    linkTo: React.lazy(() => import(`../pages/AboutPage`)),
  },
  {
    name: "experience",
    redirect: "/experience",
    className: "",
    linkTo: React.lazy(() => import(`../pages/ExperiencePage`)),
  },
  {
    name: "projects",
    redirect: "/project",
    className: "",
    linkTo: React.lazy(() => import(`../pages/ProjectsPage`)),
  },
  {
    name: "contact",
    redirect: "/contact",
    className: "",
    linkTo: React.lazy(() => import(`../pages/ContactPage`)),
  },
];

export default data;
