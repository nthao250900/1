import { formatter } from "config/numberFormat";
import React from "react";
import { useSelector } from "react-redux";

const Payment = () => {
  const { cartItems } = useSelector((state: any) => state.cart);

  let cartTotalAmount = 0;
  cartItems?.forEach((item: any) => {
    cartTotalAmount += item.cartQuantity * Number(item.priceProduct);
  });

  return (
    <div className='payment'>
      <div className='payment__total'>
        <h3
          className='main__title'
          style={{
            fontSize: 16,
            textTransform: "uppercase",
            fontWeight: "600",
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Chi tiết thanh toán
        </h3>
        <div className='payment__total-view'>
          <div className='item'>
            <h4>Tổng giá:</h4>
            <span>{formatter.format(cartTotalAmount)}</span>
          </div>
          <div className='item'>
            <h4>Giảm giá</h4>
            <span>0</span>
          </div>
          <div className='item'>
            <h4>Thanh toán</h4>
            <span>{formatter.format(cartTotalAmount)}</span>
          </div>
          <div className='button'>
            <a href='/order-completed' className='button__completed'>
              Tiến hành thanh toán
            </a>
          </div>
        </div>
      </div>
      <div className='calculate__shopping'></div>
    </div>
  );
};

export default Payment;
