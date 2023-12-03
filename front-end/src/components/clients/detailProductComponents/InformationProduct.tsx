import { Tabs, TabsProps, Tag } from "antd";
import Colors from "modules/Colors";
import React from "react";
import { TypeProduct } from "types/Types";
import parse from "html-react-parser";
import ContentTabDetailProduct from "./contentTabs/ContentTab";
import { getQueryHelper } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { useQuery } from "react-query";
import {
  CLIENT_QUERY_RETURN_POLICY,
  CLIENT_QUERY_TERMS_OF_SERVICE,
} from "config/KeyQuey";
import { formatter } from "config/numberFormat";
import { AppDispatch } from "store";
import { addToCart } from "features/cart/Cart.Slice";
import { useDispatch } from "react-redux";
import {
  addToWishList,
  removeWishList,
} from "features/wishlist/WishList.service";
interface Props {
  product: TypeProduct;
  wishlist: boolean;
}

const fetchTermsOfService = () => {
  return getQueryHelper(`${UrlServer}/api/client/select-terms-of-service`);
};
const fetchReturnPolicy = () => {
  return getQueryHelper(`${UrlServer}/api/client/select-return-policy`);
};

const InformationProduct = ({ product, wishlist }: Props) => {
  const { nameProduct, price, price_old, tags, colors, description } = product;
  const totalStars = 5;
  const activeStars = 3;

  const dispatch = useDispatch<AppDispatch>();

  const onChange = (key: string) => {
    console.log(key);
  };

  const { data: dataTermsOfService, isLoading: isLoadingTermsOfService }: any =
    useQuery(CLIENT_QUERY_TERMS_OF_SERVICE, () => fetchTermsOfService());

  const { data: dataReturnPolicy, isLoading: isLoadingReturnPolicy }: any =
    useQuery(CLIENT_QUERY_RETURN_POLICY, () => fetchReturnPolicy());

  const itemsTabs: TabsProps["items"] = [
    {
      key: "1",
      label: `Description`,
      children: (
        <ContentTabDetailProduct>
          <div
            style={{
              padding: "20px 0",
            }}
          >
            {parse(description)}
          </div>
        </ContentTabDetailProduct>
      ),
    },
    {
      key: "2",
      label: `Terms of Service`,
      children: (
        <>
          {!isLoadingTermsOfService && dataTermsOfService?.html && (
            <ContentTabDetailProduct>
              <div
                style={{
                  padding: "20px 0",
                }}
              >
                {parse(dataTermsOfService?.html)}
              </div>
            </ContentTabDetailProduct>
          )}
        </>
      ),
    },
    {
      key: "3",
      label: `Return Policy`,
      children: (
        <>
          {!isLoadingReturnPolicy && dataReturnPolicy?.html && (
            <ContentTabDetailProduct>
              <div
                style={{
                  padding: "20px 0",
                }}
              >
                {parse(dataReturnPolicy?.html)}
              </div>
            </ContentTabDetailProduct>
          )}
        </>
      ),
    },
  ];
  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };
  const handleAddToWishList = (product: TypeProduct) => {
    dispatch(addToWishList(product));
  };
  const handleMinusWishList = (product: TypeProduct) => {
    dispatch(removeWishList(product));
  };

  return (
    <>
      <div className='info'>
        <div className='title'>
          <h4>{nameProduct}</h4>
        </div>
        <div className='rating'>
          <div className='star'>
            {[...new Array(totalStars)].map((arr, index) => {
              return index < activeStars ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    d='M20.1706 8.41927C20.113 8.24946 20.0068 8.10025 19.8653 7.99006C19.7239 7.87987 19.5532 7.81353 19.3744 7.79922L14.1453 7.38371L11.8825 2.3747C11.8104 2.21337 11.6932 2.07634 11.545 1.98016C11.3968 1.88397 11.2239 1.83274 11.0472 1.83264C10.8705 1.83254 10.6975 1.88359 10.5492 1.97961C10.4009 2.07563 10.2835 2.21253 10.2113 2.37378L7.94846 7.38371L2.71931 7.79922C2.54362 7.81314 2.37566 7.87738 2.23552 7.98425C2.09538 8.09113 1.989 8.23612 1.9291 8.40187C1.86921 8.56762 1.85834 8.74712 1.89778 8.91889C1.93723 9.09066 2.02533 9.24743 2.15154 9.37044L6.01585 13.1375L4.64917 19.0555C4.60767 19.2347 4.62097 19.4221 4.68734 19.5936C4.75372 19.7651 4.8701 19.9127 5.02138 20.0172C5.17267 20.1217 5.35188 20.1783 5.53575 20.1797C5.71963 20.1811 5.89968 20.1272 6.05254 20.025L11.0469 16.6955L16.0412 20.025C16.1975 20.1288 16.3817 20.1822 16.5692 20.1781C16.7567 20.1739 16.9384 20.1125 17.09 20.002C17.2415 19.8916 17.3556 19.7373 17.4169 19.5601C17.4781 19.3828 17.4836 19.1911 17.4327 19.0106L15.755 13.1403L19.9156 9.39612C20.188 9.15031 20.288 8.7669 20.1706 8.41927Z'
                    fill={Colors.yellowColor}
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='23'
                  height='23'
                  viewBox='0 0 23 23'
                  fill='none'
                >
                  <path
                    d='M6.03166 13.1377L4.66498 19.0557C4.62266 19.2349 4.63536 19.4227 4.70143 19.5945C4.7675 19.7664 4.88387 19.9143 5.03533 20.0191C5.18679 20.1238 5.36631 20.1804 5.55043 20.1814C5.73456 20.1825 5.91474 20.1281 6.06743 20.0252L11.0618 16.6956L16.0561 20.0252C16.2123 20.1289 16.3966 20.1823 16.5841 20.1782C16.7716 20.1741 16.9533 20.1127 17.1049 20.0022C17.2564 19.8917 17.3705 19.7375 17.4317 19.5602C17.493 19.383 17.4985 19.1912 17.4476 19.0107L15.7699 13.1404L19.9305 9.39628C20.0638 9.27629 20.1589 9.11988 20.2042 8.94638C20.2495 8.77289 20.243 8.58992 20.1854 8.4201C20.1278 8.25029 20.0217 8.10107 19.8802 7.99091C19.7388 7.88075 19.5681 7.81448 19.3893 7.80029L14.1602 7.38386L11.8974 2.37485C11.8252 2.21356 11.7079 2.0766 11.5597 1.98049C11.4114 1.88439 11.2385 1.83325 11.0618 1.83325C10.8851 1.83325 10.7122 1.88439 10.5639 1.98049C10.4156 2.0766 10.2983 2.21356 10.2262 2.37485L7.96335 7.38386L2.7342 7.79937C2.55851 7.81329 2.39055 7.87753 2.25041 7.98441C2.11027 8.09128 2.00389 8.23627 1.944 8.40202C1.8841 8.56777 1.87323 8.74727 1.91268 8.91904C1.95212 9.09081 2.04022 9.24758 2.16643 9.37059L6.03166 13.1377ZM8.64853 9.16972C8.81225 9.15682 8.96948 9.10012 9.10375 9.00555C9.23802 8.91098 9.34438 8.78203 9.41167 8.63222L11.0618 4.98071L12.7119 8.63222C12.7792 8.78203 12.8855 8.91098 13.0198 9.00555C13.1541 9.10012 13.3113 9.15682 13.475 9.16972L17.1183 9.45865L14.118 12.159C13.8575 12.3938 13.7539 12.7552 13.8492 13.0927L14.9985 17.1148L11.5718 14.83C11.4213 14.729 11.2443 14.6751 11.0631 14.6751C10.882 14.6751 10.7049 14.729 10.5545 14.83L6.97366 17.2175L7.93675 13.0478C7.97207 12.8944 7.96733 12.7346 7.92299 12.5836C7.87866 12.4326 7.79621 12.2955 7.6836 12.1856L4.89704 9.46874L8.64853 9.16972Z'
                    fill={Colors.yellowColor}
                  />
                </svg>
              );
            })}
          </div>
          <h6>10 Reviews</h6>
        </div>
        <div className='price'>
          <del className='font price__old'>
            {formatter.format(Number(price_old))}
          </del>
          <p className='font price__new'>{formatter.format(Number(price))}</p>
        </div>
        <div className='tag'>
          <div className='tag__title'>
            <p>Tags :</p>
          </div>
          <div className='tag__list'>
            {JSON.parse(tags).map((tag: string, key: number) => (
              <Tag
                color='processing'
                style={{
                  textTransform: "capitalize",
                }}
              >
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <div className='colors'>
        <ul className='colors__list'>
          {["#23A6F0", "#23856D", "#E77C40", "#252B42"].map(
            (item: string, index: number) => (
              <li
                key={index}
                className='colors__list-item'
                style={{
                  backgroundColor: item,
                }}
              ></li>
            )
          )}
        </ul>
      </div>
      <div className='bottom'>
        <button onClick={() => handleAddToCart(product)}>
          <i className='fa-solid fa-cart-shopping' /> Add To Cart
        </button>
        {!wishlist ? (
          <i
            onClick={() => handleAddToWishList(product)}
            className='icon__wishlist fa-regular fa-heart'
          ></i>
        ) : (
          <i
            onClick={() => handleMinusWishList(product)}
            style={{
              color: "red",
            }}
            className='icon__wishlist fa-solid fa-heart-circle-minus'
          ></i>
        )}
        {/* <i className='fa-solid fa-cart-shopping'></i> */}
        {/* <i className='fa-regular fa-eye'></i> */}
      </div>
      <div
        style={{
          marginTop: 20,
        }}
      >
        <Tabs
          className='tabs'
          defaultActiveKey='1'
          items={itemsTabs}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default InformationProduct;
