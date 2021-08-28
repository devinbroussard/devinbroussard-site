import React from "react";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

const pages = [
  "HomePage",
  "AboutPage",
  "ExperiencePage",
  "ProjectsPage",
  "ContactPage",
];

const page = Array.map(pages);

const data = [
  {
    name: "home",
    redirect: "/",
    className: "active",
    linkTo: React.lazy(() => import("../pages/HomePage")),
  },
  {
    name: "about",
    redirect: "/about",
    className: "",
    linkTo: React.lazy(() => import("../pages/AboutPage")),
  },
  {
    name: "experience",
    redirect: "/experience",
    className: "",
    linkTo: "",
  },
  {
    name: "projects",
    redirect: "/project",
    className: "",
    linkTo: "",
  },
  {
    name: "contact",
    redirect: "/contact",
    className: "",
    linkTo: "",
  },
];

export default data;
