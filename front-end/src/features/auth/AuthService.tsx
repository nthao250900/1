import { message } from "antd";
import axios from "axios";
import { UrlServer } from "config/UrlServer";

const register = async (userData: any) => {
  const response = await axios.post(UrlServer + "/api/auth/register", userData);

  if (response?.data?.error)
    return message.error(response?.data?.error?.message);
  localStorage.setItem("auth", JSON.stringify(response.data));
  const href = window.location.origin;
  window.location.href =
    response?.data?.userData?.role === "user"
      ? href
      : href + response?.data?.userData?.role;
  return response.data;
};
const login = async (userData: any) => {
  const response = await axios.post(UrlServer + "/api/auth/login", userData);
  if (response?.data?.error)
    return message.error(response?.data?.error?.message);
  message.success("Login successfully!!");
  localStorage.setItem("auth", JSON.stringify(response.data));
  window.history.back();
  // const href = window.location.origin;
  // window.location.href =
  //   response?.data?.userData?.role === "user"
  //     ? href
  //     : href + "/" + response?.data?.userData?.role;
  return response.data;
};

const logout = () => {
  localStorage.removeItem("auth");
};

const authService = {
  register,
  logout,
  login,
};
export default authService;
