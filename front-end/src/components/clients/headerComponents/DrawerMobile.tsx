import { Drawer, Menu, MenuProps } from "antd";
import _ from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  onClose: () => void;
  open: boolean;
  dataNavbar: any;
};

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const DrawerMobile = ({ onClose, open, dataNavbar }: Props) => {
  const navigate = useNavigate();

  const onClick: MenuProps["onClick"] = (e) => {
    const filterData = _.filter(dataNavbar, ["id", Number(e.key)]);
    navigate(filterData?.[0].path);
    onClose();
  };
  const test: MenuProps["items"] = dataNavbar?.map((item: any) =>
    getItem(
      item.title,
      item.id,
      undefined,
      item.subMenu?.map((subMenu: any) => getItem(subMenu?.title, subMenu.id))
    )
  );
  return (
    <Drawer
      title={undefined}
      placement='right'
      closable={false}
      onClose={onClose}
      open={open}
      width={"70%"}
      //   destroyOnClose={true}
    >
      <Menu
        onClick={onClick}
        style={{
          width: "100%",
        }}
        mode='inline'
        items={test}
      />
    </Drawer>
  );
};

export default DrawerMobile;
