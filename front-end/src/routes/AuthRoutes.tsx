import MainDashboard from "views/admin/MainDashboard";
import SignIn from "views/auth/SignIn";

export const RouteAuth = [
  {
    title: "auth",
    layout: "/auth",
    views: [
      {
        name: "sign-in",
        path: "sign-in",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <SignIn />,
      },
      {
        name: "Sign-up",
        path: "sign-up",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <SignIn />,
      },
    ],
  },
];
