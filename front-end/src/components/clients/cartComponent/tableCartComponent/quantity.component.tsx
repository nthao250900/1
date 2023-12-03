import { InputNumber } from "antd";
import { addToCart, updateQuantity } from "features/cart/Cart.Slice";
import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
interface Props {
  quantity: number;
  itemProduct?: any;
}
const QuantityComponent = ({ quantity, itemProduct }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleUpdateQuantity = (value: number | string | null) => {
    dispatch(updateQuantity({ ...itemProduct, quantityUpdate: value }));
  };
  return (
    <>
      <InputNumber
        min={1}
        max={100}
        defaultValue={Number(quantity)}
        onChange={handleUpdateQuantity}
      />
    </>
  );
};

export default QuantityComponent;
