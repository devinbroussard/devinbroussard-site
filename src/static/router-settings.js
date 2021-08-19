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
    linkTo: "HomePage",
  },
  {
    name: "experience",
    redirect: "/experience",
    className: "",
    linkTo: <HomePage />,
  },
  {
    name: "work",
    redirect: "/work",
    className: "",
    linkTo: "HomePage",
  },
  {
    name: "resume",
    redirect: "/resume",
    className: "",
    linkTo: "HomePage",
  },
];

export default data;
