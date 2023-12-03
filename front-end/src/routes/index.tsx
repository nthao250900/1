import AboutAdmin from "views/admin/About.admin";
import AddProduct from "views/admin/AddProduct";
import Customers from "views/admin/Customers";
import ListProduct from "views/admin/ListProduct";
import MainDashboard from "views/admin/MainDashboard";
import Project from "views/admin/Project";
import ReturnPolicy from "views/admin/ReturnPolicy";
import TermsOfService from "views/admin/TermsOfService";

export const RoutesAdmin = [
  {
    title: "Main Menu",
    layout: "/admin",
    views: [
      {
        name: "Main Dashboard",
        path: "dashboard",
        icon: <i className='fa-solid fa-grip'></i>,
        component: <MainDashboard />,
      },
      // {
      //   name: "Project",
      //   path: "project",
      //   icon: <i className='fa-solid fa-list-check'></i>,
      //   component: <Project />,
      // },
      {
        name: "Khách hàng",
        path: "customers",
        icon: <i className='fa-solid fa-users'></i>,
        component: <Customers />,
      },
    ],
  },
  {
    title: "Product",
    layout: "/admin",
    views: [
      {
        name: "Thêm sản phẩm",
        path: "add-product",
        icon: <i className='fa-solid fa-plus'></i>,
        component: <AddProduct />,
      },
      {
        name: "Danh sách sản phẩm",
        path: "list-product",
        icon: <i className='fa-solid fa-list-check'></i>,
        component: <ListProduct />,
      },
    ],
  },
  {
    title: "Service",
    layout: "/admin",
    views: [
      {
        name: "Điều khoản dịch vụ",
        path: "terms-of-service",
        icon: <i className='fa-solid fa-plus'></i>,
        component: <TermsOfService />,
      },
      {
        name: "Chính sách đổi trả",
        path: "return-policy",
        icon: <i className='fa-solid fa-plus'></i>,
        component: <ReturnPolicy />,
      },
    ],
  },
  {
    title: "Pages",
    layout: "/admin",
    views: [
      {
        name: "About (Preview)",
        path: "about-admin-preview",
        icon: <i className='fa-solid fa-plus'></i>,
        component: <AboutAdmin />,
      },
    ],
  },
];
