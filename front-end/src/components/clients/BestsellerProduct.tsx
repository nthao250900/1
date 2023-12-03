import React from "react";
import { BestsellerProductStyled } from "./styles/BestsellerProductStyle";
import Container from "./Container";
import Card from "./Card";
import { postQueryHelper } from "helpers/queryHelper";
import { UrlServer } from "config/UrlServer";
import { useQuery } from "react-query";
import { CLIENT_QUERY_PRODUCT_RANDOM } from "config/KeyQuey";

const fetchAllUser = (parameters?: { number: number }) => {
  return postQueryHelper(
    `${UrlServer}/api/client/select-product-random`,
    parameters
  );
};

const BestsellerProduct = () => {
  const { data: dataProduct, isLoading }: any = useQuery(
    CLIENT_QUERY_PRODUCT_RANDOM,
    () => fetchAllUser({ number: 4 })
  );
  return (
    <>
      {!isLoading && (
        <BestsellerProductStyled>
          <Container>
            <div className='title'>
              <h3>Bestseller Products</h3>
            </div>
            <div className='cards'>
              {dataProduct?.map((product: any) => (
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
                  key={product.idProduct}
                  href={`/shop/${product.slug}`}
                  dataProduct={product}
                />
              ))}
            </div>
          </Container>
        </BestsellerProductStyled>
      )}
    </>
  );
};

export default BestsellerProduct;
