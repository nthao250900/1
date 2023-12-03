import React, { ReactNode } from "react";
import { StyleAdmin } from "./styles/styles";
import { Typography } from "antd";

const { Title } = Typography;
interface props {
  title?: string;
  ElementRight?: ReactNode;
}

const HeaderComponentAdmin = ({ title, ElementRight }: props) => {
  return (
    <StyleAdmin>
      <div className='admin__header'>
        <Title level={3}>{title}</Title>
        <div className='element-right'>{ElementRight}</div>
      </div>
    </StyleAdmin>
  );
};

export default HeaderComponentAdmin;
