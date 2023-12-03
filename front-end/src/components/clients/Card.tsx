import React from "react";
import { StyleCard } from "./styles/CardStyled";
import { Link, useNavigate } from "react-router-dom";
import { TypeProduct } from "types/Types";
import { useQueryClient } from "react-query";
import { CLIENT_QUERY_PRODUCT_RANDOM } from "config/KeyQuey";
import { formatter } from "config/numberFormat";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store";
import { addToCart } from "features/cart/Cart.Slice";
import _ from "lodash";
import { removeWishList } from "features/wishlist/WishList.service";

type Props = {
  image: string;
  title: string;
  description: string;
  oldPrice: string;
  newPrice: string;
  colors: string[];
  sale?: string | undefined;
  newProduct: boolean;
  key: number | string;
  href: string;
  view?: "grid" | "list";
  dataProduct: TypeProduct | undefined;
  wishlist?: boolean;
};

const Card = ({
  image,
  title,
  description,
  oldPrice,
  newPrice,
  colors,
  sale,
  newProduct,
  key,
  href,
  view = "grid",
  dataProduct,
  wishlist = false,
}: Props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  //
  const handleNavigate = () => {
    navigate(href, { state: { product: dataProduct } });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    queryClient.invalidateQueries(CLIENT_QUERY_PRODUCT_RANDOM);
  };
  //
  const handleMinusWishlist = (product: TypeProduct | undefined) => {
    dispatch(removeWishList(product));
  };
  return (
    <StyleCard view={view}>
      {wishlist && (
        <div className='minus-wishlist'>
          <i
            className='fa-solid fa-heart-circle-minus'
            onClick={() => handleMinusWishlist(dataProduct)}
          ></i>
        </div>
      )}
      {sale && (
        <div className='sale'>
          <p>{sale}%</p>
        </div>
      )}
      <div className='card' onClick={handleNavigate}>
        <div className='image'>
          <img src={image} alt={title} />
        </div>
        <div className='content'>
          <div className='title'>
            <h5>{title}</h5>
          </div>
          <div className='description'>
            <p>{description}</p>
          </div>
          <div className='price'>
            <del className='price__old'>
              {formatter.format(Number(newPrice))}
            </del>
            <p className='price__new'>{formatter.format(Number(oldPrice))}</p>
          </div>
          <div className='colors'>
            <ul>
              {colors?.map((color: string, index: number) => (
                <li
                  style={{ backgroundColor: color, border: "1px solid #777" }}
                  key={index}
                ></li>
              ))}
            </ul>
          </div>
          {view === "list" && (
            <Link className='read__more' to={href}>
              Read More <i className='fa-solid fa-angle-right'></i>
            </Link>
          )}
        </div>
      </div>
    </StyleCard>
  );
};

export default Card;
