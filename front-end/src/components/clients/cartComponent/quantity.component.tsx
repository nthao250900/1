import React from "react";
import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { addToCart, updateQuantity } from "features/cart/Cart.Slice";
type Props = {
  quantity: number;
  itemProduct?: any;
};
const QuantityComponent = ({ quantity, itemProduct }: Props) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      min: 1,
      defaultValue: quantity,
      max: 999,
    });
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  const dispatch = useDispatch<AppDispatch>();
  const handleAddToCart = () => {
    dispatch(addToCart(itemProduct));
  };
  const handleRemoveCartItems = () => {
    dispatch(updateQuantity(itemProduct));
  };
  return (
    <HStack width={"140px"}>
      <Button onClick={handleRemoveCartItems} {...dec}>
        -
      </Button>
      <Input
        style={{
          textAlign: "center",
        }}
        maxW={16}
        {...input}
      />
      <Button onClick={handleAddToCart} {...inc}>
        +
      </Button>
    </HStack>
  );
};

export default QuantityComponent;
