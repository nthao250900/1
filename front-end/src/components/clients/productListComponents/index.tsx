import React from "react";
import { ProductListStyled } from "./styles/style";
import Container from "../Container";
import Card from "../Card";
import { Select } from "antd";
import BannerTop from "./BannerTop";
import PaginationCustom from "../Pagination";
import Brands from "../Brands";
import { useQuery } from "react-query";
import { CLIENT_QUERY_PRODUCT_TOP } from "config/KeyQuey";
import { postQueryHelper } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { TypeProduct } from "types/Types";
import _ from "lodash";
import { NumberPagination } from "config/config";

const fetchAllUser = (parameters?: { top: number | string }) => {
  return postQueryHelper(`${UrlServer}/api/client/select-product`, parameters);
};

const ProductList = () => {
  const [viewCards, setViewCards] = React.useState<"grid" | "list">("grid");
  const [valuePagination, setValuePagination] = React.useState<{
    minValue: number;
    maxValue: number;
  }>({
    minValue: 0,
    maxValue: NumberPagination,
  });
  const {
    wishListItem,
  }: {
    wishListItem: TypeProduct[];
  } = useSelector((state: RootState) => state.wishList);
  const OptionFilterProduct = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
    { value: "Option 4", label: "Option 4" },
  ];

  const { data: dataProduct, isLoading }: any = useQuery(
    CLIENT_QUERY_PRODUCT_TOP,
    () => fetchAllUser({ top: "all" })
  );

  return (
    <>
      {!isLoading && (
        <ProductListStyled viewCard={viewCards}>
          <BannerTop
            banner={false}
            breadcrumb={[
              {
                text: "Home",
                href: "/",
              },
              {
                text: "Shop",
                href: undefined,
              },
            ]}
          />
          <Container>
            <div className='top'>
              <div className='top__left'>
                <h5>Showing all {dataProduct?.length} results</h5>
              </div>
              <div className='top__right'>
                <Select
                  defaultValue='Popularity'
                  options={OptionFilterProduct}
                  style={{ width: 120 }}
                />
                <button className='button__filter'>Filter</button>
              </div>
            </div>
            <div className='cards'>
              {dataProduct
                .slice(valuePagination.minValue, valuePagination.maxValue)
                ?.map((product: TypeProduct) => {
                  return (
                    <div key={product.idProduct}>
                      <Card
                        title={product.nameProduct}
                        image={`${UrlServer}/image/${
                          JSON.parse(product.images)?.[0]
                        }`}
                        description=''
                        colors={JSON.parse(product.colors)}
                        newProduct={false}
                        sale={(
                          (Number(product.price_old) / Number(product.price)) *
                          100
                        )
                          .toFixed(0)
                          .toString()}
                        newPrice={product.price}
                        oldPrice={product.price_old}
                        key={product.idProduct}
                        href={`/shop/${product.slug}`}
                        view={viewCards}
                        dataProduct={product}
                        wishlist={_.some(wishListItem, {
                          idProduct: product.idProduct,
                        })}
                      />
                    </div>
                  );
                })}
            </div>
            <PaginationCustom
              setValuePagination={setValuePagination}
              valuePagination={valuePagination}
              total={(dataProduct.length / NumberPagination) * 10}
            />
          </Container>
          <Brands />
        </ProductListStyled>
      )}
    </>
  );
};

export default ProductList;
