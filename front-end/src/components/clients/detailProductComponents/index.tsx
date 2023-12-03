import Container from "../Container";
import Breadcrumb from "../Breadcrumb";
import { DetailProductStyled } from "./styles/style";
import Brands from "../Brands";
import ImageDetailProduct from "./ImageDetailProduct";
import InformationProduct from "./InformationProduct";
import Colors from "modules/Colors";
import BestsellerProduct from "../BestsellerProduct";
import Bandage from "../homeComponents/Bandage";
import { useLocation } from "react-router-dom";
import { TypeProduct } from "types/Types";
import { useSelector } from "react-redux";
import { RootState } from "store";
import _ from "lodash";
import Layout404 from "layouts/404";

const DetailProduct = () => {
  const location = useLocation();
  const {
    wishListItem,
  }: {
    wishListItem: TypeProduct[];
  } = useSelector((state: RootState) => state.wishList);
  if (!location?.state?.product) return <Layout404 />;
  const {
    state: { product },
  }: {
    state: {
      product: TypeProduct;
    };
  } = location;

  return (
    <DetailProductStyled>
      <div className='container'>
        <Container>
          <Breadcrumb
            breadcrumb={[
              { text: "Home", href: "/" },
              { text: "Shop", href: "/shop" },
              { text: product.nameProduct, href: undefined },
            ]}
          />
          {/* content */}
          <div className='content'>
            <div className='product__detail'>
              <div className='left'>
                <ImageDetailProduct images={JSON.parse(product.images)} />
              </div>
              <div className='right'>
                <InformationProduct
                  product={product}
                  wishlist={_.some(wishListItem, {
                    idProduct: product.idProduct,
                  })}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className='description'></div>
      <div className='bestseller'></div>
      <BestsellerProduct />
      <Brands backgroundColor={Colors.lightGray1} />
      <Bandage borderBottom={true} backgroundColor={Colors.white} />
    </DetailProductStyled>
  );
};

export default DetailProduct;
