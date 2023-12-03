import React from "react";
import { TypeCart } from "types/Types";
import { CloseOutlined, EyeOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { useDispatch } from "react-redux";
import { AppDispatch } from "store";
import { removeCartItem } from "features/cart/Cart.Slice";
import { useNavigate } from "react-router-dom";

interface Props {
  record: TypeCart;
}

const ActionComponent = ({ record }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [arrow, setArrow] = React.useState("Show");

  const mergedArrow = React.useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }

    if (arrow === "Show") {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);
  const handleRemoveCartItem = (product: any) => {
    dispatch(removeCartItem(product));
  };
  const handleSeeMore = (product: TypeCart) => {
    const { cartQuantity, ...itemProduct } = product;
    navigate(`/shop/${itemProduct.slug}`, { state: { product: itemProduct } });
  };
  return (
    <div>
      <Tooltip placement='top' title={"See More"} arrow={mergedArrow}>
        <Button type='text' onClick={() => handleSeeMore(record)}>
          <EyeOutlined />
        </Button>
      </Tooltip>
      <Tooltip placement='top' title={"Remove"} arrow={mergedArrow}>
        <Button type='text' danger onClick={() => handleRemoveCartItem(record)}>
          <CloseOutlined />
        </Button>
      </Tooltip>
    </div>
  );
};

export default ActionComponent;
