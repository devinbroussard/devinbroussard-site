import React from "react";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";

const data = [
  {
    name: "home",
    redirect: "/",
    className: "active",
    linkTo: <HomePage />,
  },
  {
    name: "about",
    redirect: "/about",
    className: "",
    linkTo: <AboutPage />,
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
