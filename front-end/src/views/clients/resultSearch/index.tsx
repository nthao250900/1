import Brands from "components/clients/Brands";
import Card from "components/clients/Card";
import Container from "components/clients/Container";
import PaginationCustom from "components/clients/Pagination";
import BannerTop from "components/clients/productListComponents/BannerTop";
import { ProductListStyled } from "components/clients/productListComponents/styles/style";
import { UrlServer } from "config/UrlServer";
import { NumberPagination } from "config/config";
import React from "react";
import { useLocation } from "react-router-dom";
import { TypeProduct } from "types/Types";

const ResultSearchView = () => {
  const [viewCards, setViewCards] = React.useState<"grid" | "list">("grid");
  const [valuePagination, setValuePagination] = React.useState<{
    minValue: number;
    maxValue: number;
  }>({
    minValue: 0,
    maxValue: NumberPagination,
  });
  const location = useLocation();
  const {
    state: { product },
  }: {
    state: {
      product: TypeProduct[];
    };
  } = location;
  return (
    <ProductListStyled viewCard={viewCards}>
      <BannerTop
        banner={false}
        breadcrumb={[
          {
            text: "Home",
            href: "/",
          },
          {
            text: "Search Results",
            href: undefined,
          },
        ]}
      />
      <Container>
        <div className='top'>
          <div className='top__left'>
            <h5>Showing all {product?.length} results</h5>
          </div>
        </div>
        <div className='cards'>
          {product
            .slice(valuePagination.minValue, valuePagination.maxValue)
            ?.map((product: any, key: number) => (
              <Card
                title={product.nameProduct}
                image={`${UrlServer}/image/${JSON.parse(product.images)?.[0]}`}
                description=''
                colors={JSON.parse(product.colors)}
                newProduct={false}
                newPrice={product.price}
                oldPrice={product.price_old}
                key={product.idProduct}
                href={`/shop/${product.slug}`}
                view={viewCards}
                dataProduct={product}
              />
            ))}
        </div>
        <PaginationCustom
          setValuePagination={setValuePagination}
          valuePagination={valuePagination}
          total={(product.length / NumberPagination) * 10}
        />
      </Container>
      <Brands />
    </ProductListStyled>
  );
};

export default ResultSearchView;
