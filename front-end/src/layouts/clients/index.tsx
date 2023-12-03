import Layout404 from "layouts/404";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ClientRoutes } from "routes/ClientRoutes";
import { TypeRouteClient, ViewRoutes } from "types/Types";

const ClientLayout = () => {
  const getRoutes = (routes: TypeRouteClient[]) => {
    return routes.map((props: TypeRouteClient, key: number) => {
      if (props.layout === "/") {
        return (
          <>
            <Route path={`/${props.path}`} element={props.component} key={key}>
              {props.views.map((view: ViewRoutes, index: number) => (
                <Route path={view.path} element={view.component} key={index} />
              ))}
            </Route>
          </>
        );
      } else {
        return null;
      }
    });
  };
  return (
    <div>
      <Routes>
        {getRoutes(ClientRoutes)}
        <Route path='/' element={<Navigate to='/' replace />} />
        <Route path='*' element={<Layout404 />} />
      </Routes>
    </div>
  );
};

export default ClientLayout;
