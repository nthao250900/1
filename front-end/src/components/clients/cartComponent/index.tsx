import React from "react";
import { StyledCart } from "./styles";
import Container from "../Container";
import TableComponent from "./tableCartComponent/table.component";
import { useSelector } from "react-redux";
import { Button, Space } from "antd";
import Colors from "modules/Colors";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const CartComponent = () => {
  const { cartItems } = useSelector((state: any) => state.cart);
  const navigate = useNavigate();
  const handleToPay = () => {
    navigate("/pay");
  };
  const handleContinueShopping = () => {
    navigate("/shop");
  };
  return (
    <StyledCart>
      <Container>
        <TableComponent records={cartItems} />
        <Space
          style={{
            margin: "20px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          wrap
        >
          <Button
            type='primary'
            style={{
              backgroundColor: Colors.secondaryColor1,
            }}
            onClick={handleContinueShopping}
            icon={<ShoppingCartOutlined />}
          >
            Continue shopping
          </Button>
          <Button
            style={{
              color: Colors.secondaryColor1,
              borderColor: Colors.secondaryColor1,
            }}
            onClick={handleToPay}
          >
            Make a payment
          </Button>
        </Space>
      </Container>
    </StyledCart>
  );
};

export default CartComponent;
