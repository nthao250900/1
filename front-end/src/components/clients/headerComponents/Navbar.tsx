import { Avatar, Button, Dropdown, Input, Modal, message } from "antd";
import type { MenuProps } from "antd";
import { dataNavbar } from "modules/data-fake";
import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import DrawerMobile from "./DrawerMobile";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { UrlServer } from "config/UrlServer";
import { DownOutlined } from "@ant-design/icons";
import { logout } from "features/auth/AuthSlice";
import Colors from "modules/Colors";
import { SearchOutlined } from "@ant-design/icons";
import { postQueryHelper } from "helpers/queryHelper";
const Navbar = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { wishListItem } = useSelector((state: RootState) => state.wishList);
  const [valueSearchProduct, setValueSearchProduct] =
    React.useState<string>("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const navigate = useNavigate();
  let location = useLocation();
  const activeRoute = (routeName: string) => {
    return location.pathname === routeName;
  };

  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = React.useCallback(() => {
    setOpen(false);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    message.success("Logout successfully!");
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <Link
          to={"/account"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
          }}
        >
          <i className='fa-regular fa-user'></i>
          <p>Account</p>
        </Link>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 10,
          }}
          onClick={handleLogout}
        >
          <i className='fa-solid fa-right-from-bracket'></i>
          <p>Logout</p>
        </div>
      ),
      key: "1",
    },
  ];

  const handleSearchProduct = async () => {
    if (!valueSearchProduct)
      return message.warning("Please enter the keyword you want to search.");
    const result: any = await postQueryHelper(
      `${UrlServer}/api/client/search-product`,
      {
        keyword: valueSearchProduct,
      }
    );
    setIsModalOpen(false);
    if (result?.error) return message.success(result?.error?.message);
    navigate("/search-result", { state: { product: result } });
  };

  React.useEffect(() => {
    const handleScroll = (event: any) => {
      onClose();
      // console.log("ssssssss");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onClose]);
  const renderNavbar = (navbar: any) => {
    return navbar?.map((item: any, index: number) => {
      return (
        <li
          key={index}
          className={`nav__item ${item?.subMenu !== null && "menu__line"} ${
            activeRoute(item.path) === true ? "active" : ""
          }`}
        >
          <Link to={item?.path} className='transition'>
            {item.title}
          </Link>
          <div className='sub'>
            <div className='sub__ctt'>
              {item?.subMenu?.map((subMenuParent: any, indexSub: number) => {
                return (
                  <div className='sub__item' key={indexSub}>
                    <ul className='sub__item-list'>
                      <li>
                        <Link to={item?.path + subMenuParent?.path}>
                          {subMenuParent?.title}
                        </Link>
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </li>
      );
    });
  };
  return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <h1>BrandName</h1>
        </div>
        <div className='menu'>
          <ul className='nav'>{renderNavbar(dataNavbar)}</ul>
        </div>
        <div className='mobile'>
          <i className='fa-solid fa-magnifying-glass' />
          <i
            className='fa-regular fa-user'
            onClick={() => navigate("/auth/sign-up")}
          />
          <i className='fa-solid fa-bars-staggered' onClick={showDrawer} />
        </div>
        <div className='user'>
          <div className='user__item sign-in'>
            {user ? (
              <Dropdown menu={{ items }} trigger={["click"]}>
                <div className='information'>
                  <Avatar src={`${UrlServer}/image/avatar-default.png`} />
                  <p
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {user?.userData?.fullName}
                  </p>
                  <DownOutlined />
                </div>
              </Dropdown>
            ) : (
              <>
                <i className='fa-regular fa-user'></i>
                <Link to='/auth/sign-in'>Login</Link> /{" "}
                <Link to='/auth/sign-up'>Register</Link>
              </>
            )}
          </div>
          <div
            className='user__item search'
            onClick={() => setIsModalOpen(true)}
          >
            <i className='fa-solid fa-magnifying-glass'></i>
          </div>
          <div className='user__item cart'>
            <NavLink to='/cart'>
              <i className='fa-solid fa-cart-shopping'></i>
            </NavLink>
            <div className='badge'>{cartItems?.length}</div>
          </div>
          <div className='user__item wishlist'>
            <NavLink to='/wishlist'>
              <i className='fa-regular fa-heart'></i>
            </NavLink>
            <div className='badge'>{wishListItem?.length}</div>
          </div>
        </div>
      </div>
      <DrawerMobile onClose={onClose} open={open} dataNavbar={dataNavbar} />
      <Modal
        title={undefined}
        open={isModalOpen}
        footer={null}
        closeIcon={null}
        centered
        width={"50%"}
        bodyStyle={{
          height: "50vh",
        }}
        onCancel={() => setIsModalOpen(false)}
      >
        <div className='flex items-center justify-start gap-20'>
          <Input
            placeholder='Enter the keyword you want to search ...'
            size='large'
            prefix={<SearchOutlined />}
            onChange={(event: any) => setValueSearchProduct(event.target.value)}
          />
          <Button
            style={{
              backgroundColor: Colors.secondaryColor1,
              color: Colors.white,
            }}
            size='large'
            icon={<SearchOutlined />}
            onClick={handleSearchProduct}
          >
            Search
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
