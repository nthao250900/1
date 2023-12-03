import { Button } from "antd";
import HeaderComponentAdmin from "components/admin/Header.component";
import React from "react";
import { PlusOutlined } from "@ant-design/icons";
import TableProductComponent from "components/admin/product/listProduct.component";
import { postWithAuthorization } from "helpers/queryHelper";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useQuery } from "react-query";
import { UrlServer } from "config/UrlServer";
import { ADMIN_QUERY_SELECT_PRODUCT } from "config/KeyQuey";

const fetchAllUser = (accessToken: string, parameters?: any) => {
  return postWithAuthorization(
    `${UrlServer}/api/admin/select-product`,
    accessToken
  );
};

const ListProduct = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const { data: dataProduct, isLoading }: any = useQuery(
    ADMIN_QUERY_SELECT_PRODUCT,
    () => fetchAllUser(user.accessToken)
  );
  return (
    <>
      <HeaderComponentAdmin
        ElementRight={
          <Button type='primary' icon={<PlusOutlined />}>
            Thêm sản phẩm
          </Button>
        }
      />
      <TableProductComponent dataProduct={dataProduct?.data} />
    </>
  );
};

export default ListProduct;
