import { lazy } from "react";

const Dashboard = lazy(() => import("../modules/dashboard/Dashboard"));
const Requests = lazy(() => import("../modules/requests/Requests"));
const Transactions = lazy(() => import("../modules/transaction/Transaction"));
const Settings = lazy(() => import("../modules/account"));
var AppRoutes = [
  // {
  //   navlabel: true,
  //   name: "Personal",
  //   icon: "mdi mdi-dots-horizontal",
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "home",
    component: Dashboard
  },

  {
    path: "/settings",
    name: "Settings",
    icon: "settings",
    component: Settings
  },

  {
    path: "/transactions",
    name: "Transactions",
    icon: "receipt",
    component: Transactions
  },

  {
    path: "/outbox",
    name: "Request Sent",
    icon: "send",
    component: Dashboard
  },
  {
    path: "/documents",
    name: "Documents",
    icon: "file",
    component: Dashboard
  },
  {
    collapse: true,
    path: "/dashboard",
    name: "Admin",
    state: "dashboardpages",
    icon: "lock",
    child: [
      {
        path: "/settings",
        name: "Settings",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Requests
      },
      {
        path: "/users",
        name: "Users",
        mini: "B",
        icon: "mdi mdi-adjust",
        component: Dashboard
      }
    ]
  },
  { path: "/", pathTo: "/dashboard", name: "Dashboard", redirect: true }
];
export default AppRoutes;
