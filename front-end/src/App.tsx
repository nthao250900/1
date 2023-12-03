import { Button, Space, message, notification } from "antd";
import { UrlServer } from "config/UrlServer";
import { logout } from "features/auth/AuthSlice";
import { Authorization } from "helpers/queryHelper";
import Layout404 from "layouts/404";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import ClientLayout from "layouts/clients";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import { AppDispatch, RootState } from "store";

function App() {
  notification.config({
    duration: 3,
  });
  message.config({
    top: 0,
    duration: 2,
    maxCount: 1,
    prefixCls: "my-message",
  });
  const [api, contextHolder] = notification.useNotification({
    placement: "bottomRight",
    bottom: 50,
    maxCount: 1,
  });
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const openNotification = React.useCallback(() => {
    const key = `open${Date.now()}`;
    const btn = (
      <Space>
        <Button type='link' size='small' onClick={() => api.destroy()}>
          Cancel
        </Button>
        <Button
          type='primary'
          size='small'
          onClick={() => navigate("/auth/sign-in")}
        >
          Login
        </Button>
      </Space>
    );
    api.open({
      message: "Notification",
      description: "End of login session, Please log in again!!!",
      btn,
      key,
    });
  }, [api, navigate]);

  const { user } = useSelector((state: RootState) => state.auth);

  const onCheckAuthorization = React.useCallback(
    async (accessToken: string) => {
      const resultCheckAuthorization:
        | {
            status: number;
            message: string;
          }
        | any = await Authorization(
        `${UrlServer}/api/auth/authorization`,
        accessToken
      );
      if (resultCheckAuthorization.message !== "success") {
        dispatch(logout());
        openNotification();
      }
    },
    [dispatch, openNotification]
  );

  React.useEffect(() => {
    if (user && !location.pathname.includes("auth"))
      onCheckAuthorization(user?.accessToken);
  }, [user, onCheckAuthorization, location.pathname]);

  return (
    <>
      {contextHolder}
      <Routes>
        <Route path='/*' element={<ClientLayout />} />
        <Route path='auth/*' element={<AuthLayout />} />
        <Route path='admin/*' element={<AdminLayout />} />
        {/* <Route path='/' element={<Navigate to={"/admin"} replace />} /> */}
      </Routes>
    </>
  );
}

export default App;
