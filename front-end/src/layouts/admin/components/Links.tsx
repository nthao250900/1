import { Link, useLocation } from "react-router-dom";
import { TypeRoutes, ViewRoutes } from "types/Types";

const SidebarLinks = (props: { routes: TypeRoutes[] }): JSX.Element => {
  const { routes } = props;
  let location = useLocation();

  const activeRoute = (routeName: string) => {
    return location.pathname.includes(routeName);
  };

  const createLink = (routes: TypeRoutes[]) => {
    // eslint-disable-next-line array-callback-return
    return routes?.map((route: TypeRoutes, key: number) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          <div key={key}>
            <div className='title__routes'>
              <p>{route.title}</p>
            </div>
            {route.views?.map((view: ViewRoutes, key: number) => (
              <Link key={key} to={route.layout + "/" + view.path}>
                <div
                  className={`link ${
                    activeRoute(view.path) === true ? "active" : ""
                  }`}
                >
                  <li key={key}>
                    <div className='icon'>{view.icon}</div>
                    <p>{view.name}</p>
                  </li>
                </div>
              </Link>
            ))}
          </div>
        );
      }
    });
  };
  return <>{createLink(routes)}</>;
};

export default SidebarLinks;
