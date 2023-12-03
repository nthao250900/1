import React from "react";
import { FeatureStyle } from "../styleComponents/FeatureStyle";
import Container from "../Container";
import Card from "../Card";
import TopSession from "./TopSession";
import { postQueryHelper } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { CLIENT_QUERY_PRODUCT_TOP } from "config/KeyQuey";
import { useQuery } from "react-query";
import { TypeProduct } from "types/Types";
import { Link } from "react-router-dom";

const fetchAllUser = (parameters?: { top: number }) => {
  return postQueryHelper(`${UrlServer}/api/client/select-product`, parameters);
};

const FeaturedProducts = () => {
  const { data: dataProduct, isLoading }: any = useQuery(
    CLIENT_QUERY_PRODUCT_TOP,
    () => fetchAllUser({ top: 8 })
  );

  return (
    <>
      {!isLoading && (
        <FeatureStyle>
          <Container>
            <TopSession
              link={[
                {
                  text: "Feature Products",
                  url: "#",
                },
              ]}
              title='BESTSELLER PRODUCTS'
              description='Problems trying to resolve the conflict between'
            />
            <div className='cards'>
              {dataProduct?.map((product: TypeProduct, key: number) => (
                <Card
                  title={product.nameProduct}
                  image={`${UrlServer}/image/${
                    JSON.parse(product.images)?.[0]
                  }`}
                  description=''
                  colors={JSON.parse(product.colors)}
                  newProduct={false}
                  newPrice={product.price}
                  oldPrice={product.price_old}
                  key={key}
                  href={`/shop/${product.slug}`}
                  dataProduct={product}
                />
              ))}
            </div>
            <div className='button'>
              <Link to='/shop'>Load more products</Link>
            </div>
          </Container>
        </FeatureStyle>
      )}
    </>
  );
};

export default FeaturedProducts;
