import React from "react";
import { TypeCart } from "types/Types";
import { StyledOrder } from "../styled";
import { UrlServer } from "config/UrlServer";
import { formatter } from "config/numberFormat";

interface Props {
  record: TypeCart;
  total: number | string;
}

const OrderComponent = ({ record, total }: Props) => {
  return (
    <StyledOrder
      bgImage={`${UrlServer}/image/${JSON.parse(record?.images)?.[0]}`}
    >
      <div className='order'>
        <div className='order__left'>
          <div className='image' />
          <div className='info'>
            <h4>{record.nameProduct}</h4>
          </div>
        </div>
        <div className='order__right'>
          <div className='price'>
            <p>
              {formatter.format(
                Number(record.cartQuantity) * Number(record.price)
              )}
            </p>
          </div>
          <div className='quantity'>
            <p>Quantity: {record.cartQuantity}</p>
          </div>
        </div>
      </div>
    </StyledOrder>
  );
};

export default OrderComponent;
