import { lazy } from "react";
const Login = lazy(() => import("../modules/authentication/Login"));
const Aids = lazy(() => import("../modules/aid/Aid"));

var AuthRoutes = [
  {
    path: "/authentication/Login",
    name: "Login",
    icon: "mdi mdi-account-key",
    component: Login
  },
  {
    path: "/authentication/Aid",
    name: "Aid Projects",
    icon: "inbox",
    component: Aids
  }
];
export default AuthRoutes;
