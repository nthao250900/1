import React from "react";
import { StyleAdmin } from "./style";
import Sidebar from "components/sidebar";
import { TypeRoutes, ViewRoutes } from "types/Types";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import { RoutesAdmin } from "routes";

const AdminLayout = () => {
  const [open, setOpen] = React.useState(true);

  const location = useLocation();
  const getRoutes = (routes: TypeRoutes[]) => {
    return routes.map((props: TypeRoutes, key: number) => {
      if (props.layout === "/admin") {
        return (
          <>
            {props.views.map((view: ViewRoutes, key: number) => (
              <Route
                path={`/${view.path}`}
                element={view.component}
                key={key}
              />
            ))}
          </>
        );
      } else {
        return null;
      }
    });
  };
  const getNameRoute = (routes: TypeRoutes[]) => {
    const RouteArr: ViewRoutes[] = [];
    routes.forEach((route: TypeRoutes) =>
      route.views.map((item: ViewRoutes) => {
        return RouteArr.push({
          ...item,
          layout: route.layout,
        });
      })
    );

    return {
      name: RouteArr?.find(
        ({ path, layout }) => location.pathname === layout + "/" + path
      )?.name,
    };
  };
  return (
    <StyleAdmin>
      <Sidebar open={open} onClose={() => setOpen(false)} />
      <main>
        <Navbar breadcrumb={getNameRoute(RoutesAdmin)} />
        <div className='content'>
          <Routes>
            {getRoutes(RoutesAdmin)}
            <Route
              path='/'
              element={<Navigate to='/admin/dashboard' replace />}
            />
          </Routes>
        </div>
      </main>
    </StyleAdmin>
  );
};

export default AdminLayout;
