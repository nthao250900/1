import React from "react";
import Container from "../Container";
import { useSelector } from "react-redux";
import { formatter } from "config/numberFormat";
import { StyledPay } from "./styled";
import { Button, Col, Input, Radio, RadioChangeEvent, Result, Row } from "antd";
import CardOption from "./contentOption/card.option";
import Colors from "modules/Colors";
import OrderComponent from "./order/order.component";
import { TypeCart } from "types/Types";
import PaymentOnDeliveryOption from "./contentOption/paymentOnDelivery.option";
import { RootState } from "store";
import { useNavigate } from "react-router-dom";

const PayComponent = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const [value, setValue] = React.useState("card");
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const navigate = useNavigate();
  if (!user)
    return (
      <StyledPay>
        <Result
          status='404'
          title={
            <h1
              style={{
                color: Colors.yellowColor,
              }}
            >
              WARNING
            </h1>
          }
          subTitle='Please login to make payment.'
          extra={
            <Button onClick={() => navigate("/auth/sign-in")} type='primary'>
              Login
            </Button>
          }
        />
      </StyledPay>
    );

  var shipping = "15000";
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  let cartTotalAmount = 0;
  cartItems?.forEach((item: any) => {
    cartTotalAmount += Number(item.cartQuantity) * Number(item.price);
  });

  const renderContent = (view: string) => {
    switch (view) {
      case "card":
        return <CardOption />;
      case "bank":
        return <h1>bank</h1>;
      case "paymentoOnDelivery":
        return <PaymentOnDeliveryOption />;

      default:
        return <></>;
    }
  };
  return (
    <StyledPay>
      <Container>
        <div className='pay'>
          <div className='pay__left'>
            <div className='title'>
              <h3>Payment</h3>
            </div>
            <div className='pay__with'>
              <div className='pay__with-title'>
                <h4>Pay With</h4>
              </div>
              <div className='pay__with-option'>
                <Radio.Group onChange={onChange} value={value}>
                  <Radio value={"paymentoOnDelivery"}>
                    Payment on delivery
                  </Radio>
                  <Radio value={"card"}>Card</Radio>
                  <Radio value={"bank"}>Bank</Radio>
                </Radio.Group>
              </div>
            </div>
            {renderContent(value)}
            <Row gutter={[12, 12]}>
              <Col span={16}>
                <Button
                  type='primary'
                  block
                  style={{
                    backgroundColor: Colors.secondaryColor1,
                    marginTop: 20,
                  }}
                  onClick={() => navigate("/pay/completed")}
                >
                  {formatter.format(cartTotalAmount + Number(shipping))}
                </Button>
              </Col>
            </Row>
          </div>
          <div className='pay__right'>
            <div className='title'>
              <h1>Order Summary</h1>
            </div>
            <div className='pay__right-content'>
              {cartItems?.map((record: TypeCart) => (
                <div key={record.key}>
                  <OrderComponent record={record} total={cartTotalAmount} />
                </div>
              ))}
            </div>
            <div className='pay__right-gift_code'>
              <Input className='input' placeholder='Gift or discount code' />
              <Button className='button'>Apply</Button>
            </div>
            <div className='pay__right-info'>
              <p className='label'>Subtotal</p>
              <p className='text'>
                {formatter.format(Number(cartTotalAmount))}
              </p>
            </div>
            <div className='pay__right-info'>
              <p className='label'>Shipping</p>
              <p className='text'>{formatter.format(Number(shipping))}</p>
            </div>
            <div className='pay__right-info'>
              <div className='label'>
                <p>Total</p>
                <span>Including $2.24 in taxes</span>
              </div>
              <p className='text'>
                {formatter.format(Number(cartTotalAmount) + Number(shipping))}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </StyledPay>
  );
};

export default PayComponent;
