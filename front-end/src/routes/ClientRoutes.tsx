import DetailProduct from "components/clients/detailProductComponents";
import Layout404 from "layouts/404";
import ReactQuillTest from "reactQuill";
import ClientView from "views/clients";
import ShopViews from "views/clients/Shop";
import AboutView from "views/clients/about";
import AccountView from "views/clients/account";
import BlogView from "views/clients/blog";
import CartView from "views/clients/cart";
import CompletedView from "views/clients/completed";
import ContactView from "views/clients/contact";
import HomePageView from "views/clients/homePages";
import PayView from "views/clients/pay";
import ResultSearchView from "views/clients/resultSearch";
import WishListView from "views/clients/wishList";

export const ClientRoutes = [
  {
    name: "home-page",
    path: "",
    icon: undefined,
    layout: "/",
    component: <ClientView />,
    views: [
      {
        name: "home-page",
        path: "",
        icon: undefined,
        layout: "/",
        component: <HomePageView />,
      },
      {
        name: "shop-views",
        path: "/shop",
        icon: undefined,
        layout: "/",
        component: <ShopViews />,
      },
      {
        name: "detail product",
        path: "/shop/:slugProduct",
        icon: undefined,
        layout: "/",
        component: <DetailProduct />,
      },
      {
        name: "about-view",
        path: "/about",
        icon: undefined,
        layout: "/",
        component: <AboutView />,
      },
      {
        name: "blog-view",
        path: "/blog",
        icon: undefined,
        layout: "/",
        component: <BlogView />,
      },
      {
        name: "contact-view",
        path: "/contact",
        icon: undefined,
        layout: "/",
        component: <ContactView />,
      },
      {
        name: "cart-view",
        path: "/cart",
        icon: undefined,
        layout: "/",
        component: <CartView />,
      },
      {
        name: "pay-view",
        path: "/pay",
        icon: undefined,
        layout: "/",
        component: <PayView />,
      },
      {
        name: "account-view",
        path: "/account",
        icon: undefined,
        layout: "/",
        component: <AccountView />,
      },
      {
        name: "completed-view",
        path: "/pay/completed",
        icon: undefined,
        layout: "/",
        component: <CompletedView />,
      },
      {
        name: "wishlist-view",
        path: "/wishlist",
        icon: undefined,
        layout: "/",
        component: <WishListView />,
      },
      {
        name: "result-view",
        path: "/search-result",
        icon: undefined,
        layout: "/",
        component: <ResultSearchView />,
      },
      // {
      //   name: "404-view",
      //   path: "*",
      //   icon: undefined,
      //   layout: "/",
      //   component: <Layout404 />,
      // },
      //
      {
        name: "123 product",
        path: "/test",
        icon: undefined,
        layout: "/",
        component: <ReactQuillTest />,
      },
    ],
  },
  // {
  //   name: "home-page",
  //   path: "",
  //   icon: undefined,
  //   layout: "*",
  //   component: <Layout404 />,
  //   views: null
  // },
];
