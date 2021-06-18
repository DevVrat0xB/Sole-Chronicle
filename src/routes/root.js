// Pages
import HomePage from "../pages/home.jsx";
import NoSuchPage from "../pages/no_such_page.jsx";

const appRoutes = [
  {
    path: "/",
    component: HomePage,
    exact: true,
  },
  {
    path: "*",
    component: NoSuchPage,
    exact: false,
  },
];

export default appRoutes;
