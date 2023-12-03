import SidebarLinks from "layouts/admin/components/Links";
import React from "react";
import { RoutesAdmin } from "routes";
import { StyleSidebar } from "./style";

const Sidebar = (props: {
  open: boolean;
  onClose: React.MouseEventHandler<HTMLSpanElement>;
}) => {
  const { open, onClose } = props;
  return (
    <StyleSidebar>
      {/* logo */}
      <div className='top'>
        <div className='logo'>
          <img src='/images/logo.png' alt='logo' />
          <p>Evaly</p>
        </div>
        <div className='toggle'>
          <img src='/images/toggle-sidebar.png' alt='toggle' />
        </div>
      </div>
      <ul className='mb-auto pt-1'>
        <SidebarLinks routes={RoutesAdmin} />
      </ul>
    </StyleSidebar>
  );
};

export default Sidebar;
